import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { isProdCluster, getSupportEmail } from "../figma_app/169182";
import { s as _$$s } from "../905/573154";
import { getI18nString } from "../905/303541";
import { L3, wB, b_ } from "../figma_app/819458";
let o = class e extends PureComponent {
  constructor(e) {
    super(e);
    this.state = {
      loaded: !1,
      error: null,
      isOpen: !1
    };
  }
  componentDidMount() {
    e.singleton = this;
  }
  componentWillUnmount() {
    e.singleton = null;
  }
  init() {
    return L3().then(() => {
      this.state.loaded || (window.zE("webWidget", "hide"), window.zE("webWidget:on", "open", () => {
        this.setState({
          isOpen: !0
        });
      }), window.zE("webWidget:on", "close", () => {
        this.setState({
          isOpen: !1
        });
        this.close(!0);
      }));
      this.setState({
        loaded: !0,
        error: null
      });
    }).catch(e => {
      e && console.error("Unable to load Zendesk Web Widget:", e);
      this.setState({
        loaded: !1,
        error: e
      });
      return e;
    });
  }
  open(e, l) {
    let {
      userEmail,
      userName
    } = this.props;
    if (isProdCluster() && userEmail?.endsWith("@figma.com")) {
      this.props.dispatch(_$$s.flash("Hello there! Sadly Figmates cannot use this feature. Please use a non-@figma.com account to test Zendesk"));
      return;
    }
    this.init().then(() => wB({
      name: userName,
      email: userEmail
    }, e)).then(() => {
      this.state.isOpen || b_();
    }).catch(() => {
      this.props.dispatch(_$$s.flash(getI18nString("help_widget.zendesk.unavailable_error_message", {
        supportEmail: getSupportEmail()
      })));
    });
  }
  close(e = !1) {
    this.state.loaded && (this.state.isOpen || e) && (window.zE("webWidget", "hide"), window.zE("webWidget", "close"));
  }
  isError() {
    return !!this.state.error;
  }
  render() {
    return jsx("div", {
      className: "zendesk-web-widget"
    });
  }
};
o.singleton = null;
export let $$d0 = 443 == require.j ? o : null;
export const F = $$d0;