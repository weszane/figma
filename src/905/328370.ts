import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { getI18nString, renderI18nText } from "../905/303541";
import { isEmailAllowed } from "../figma_app/336853";
class l extends PureComponent {
  render() {
    let e = this.props.org && this.props.email && isEmailAllowed(this.props.orgDomains, this.props.email);
    let t = this.props.pending ? this.props.displayString + " " + getI18nString("role_row.invite_sent") : this.props.displayString;
    return e ? jsx("div", {
      className: this.props.className,
      children: renderI18nText("org_guest_identifier.guest", {
        userName: jsx("b", {
          className: this.props.guestNameClassName,
          children: t
        })
      })
    }) : jsx("div", {
      className: this.props.className,
      children: t
    });
  }
}
l.displayName = "OrgGuestIdentifier";
export let $$d0 = connect((e, t) => ({
  orgDomains: "orgDomains" in t && t.orgDomains ? t.orgDomains : e.orgDomains,
  org: "org" in t ? t.org || null : e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null
}))(l);
export const _ = $$d0;