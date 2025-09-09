import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { customHistory } from "../905/612521";
import { oJ } from "../905/63728";
import { xn } from "../905/934145";
import { sf } from "../905/929976";
import { Np } from "../figma_app/193867";
import { Ro } from "../figma_app/805373";
import { ah, HU, Du, fh, oY, M2 } from "../905/167803";
let _ = {
  underline: ah,
  noUnderline: HU
};
class h extends PureComponent {
  constructor() {
    super(...arguments);
    this.onClick = e => {
      if (e.preventDefault(), e.stopPropagation(), oJ(e) || this.props.openInNewTab) {
        customHistory.redirect(this.props.hrefPath || "", "_blank");
        return;
      }
      let t = m(this.props);
      this.props.dispatch(sf(t));
    };
  }
  render() {
    let e = {
      ...this.props.publisher,
      img_url: this.props.publisher.img_urls["120_120"]
    };
    let t = jsxs(Fragment, {
      children: [this.props.showAvatar && jsx("div", {
        className: this.props.avatarClassName || Du,
        children: jsx(Ro, {
          size: this.props.avatarSize || 32,
          entity: e
        })
      }), !this.props.hideName && jsx("span", {
        className: this.props.childrenClassName || fh,
        children: this.props.publisher.name
      })]
    });
    return jsx("div", {
      className: `${this.props.className || ""}`,
      children: this.props.disabled ? jsx("span", {
        className: this.props.childrenClassName || oY,
        children: t
      }) : jsx("a", {
        href: new xn({
          profileHandle: this.props.publisher.profile_handle
        }).href,
        className: this.props.childrenClassName || this.props.authorLinkStyle,
        onClick: this.onClick,
        children: t
      })
    });
  }
}
let m = e => ({
  view: "communityHub",
  subView: "handle",
  handle: e.publisher.profile_handle
});
let $$g0 = connect((e, t) => {
  let r = m(t);
  return {
    hrefPath: Np(e, r),
    authorLinkStyle: _.underline
  };
})(h);
export function $$f1(e) {
  let t = useDispatch();
  let r = {
    view: "communityHub",
    subView: "handle",
    handle: e.profile.profile_handle
  };
  let i = useSelector(e => Np(e, r));
  return jsx("a", {
    href: new xn({
      profileHandle: e.profile.profile_handle
    }).href,
    className: M2,
    onClick: e => {
      if (e.preventDefault(), e.stopPropagation(), oJ(e)) {
        customHistory.redirect(i || "", "_blank");
        return;
      }
      t(sf(r));
    },
    children: e.children
  });
}
connect((e, t) => ({
  hrefView: m(t),
  hrefPath: Np(e, m(t)),
  authorLinkStyle: _.underline
}))(h);
export const Qi = $$g0;
export const U6 = $$f1;
