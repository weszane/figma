import { jsxs, jsx } from "react/jsx-runtime";
import { Component } from "react";
import { LoadingSpinner } from "../figma_app/858013";
import { m3 } from "../905/315794";
export class $$o0 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isJoining: !1,
      isRedirecting: !1
    };
    this.onJoin = e => {
      this.setState({
        isJoining: !0
      }, () => {
        this.props.onJoin && this.props.onJoin(e);
      });
    };
  }
  componentDidUpdate(e) {
    !(e.isCurrentUserInTeam && !e.isLoading) && this.props.isCurrentUserInTeam && !this.props.isLoading && this.state.isJoining && this.setState({
      isRedirecting: !0
    }, () => {
      this.props.onOpenTeam();
    });
  }
  render() {
    let e = this.props.isLoading || this.state.isRedirecting;
    return jsxs("div", {
      className: e ? "redirecting_org_team_action--containerLoading--MCEAV redirecting_org_team_action--_container--2dOl4" : "redirecting_org_team_action--container--XlCia redirecting_org_team_action--_container--2dOl4",
      children: [jsx("div", {
        className: `redirecting_org_team_action--spinner--2rFX8 ${this.props.spinnerClassName || ""}`,
        children: e && jsx(LoadingSpinner, {})
      }), jsx("div", {
        className: "redirecting_org_team_action--button--ISpcA",
        children: jsx(m3, {
          ...this.props,
          onJoin: this.onJoin
        })
      })]
    });
  }
}
export const W = $$o0;