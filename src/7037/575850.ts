import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import a from "classnames";
import { BaseLinkComponent } from "../905/551536";
import { RelativeTimeDisplay } from "../905/986103";
import { UserAvatar, AvatarSize } from "../905/590952";
import { selectViewAction } from "../905/929976";
import { stopPropagation } from "../figma_app/753501";
import { InterProfileType } from "../905/895626";
var d = a;
let f = "feed_profile_header--profile--BBFn9";
export function $$_1(e) {
  let t = e.date && jsx(RelativeTimeDisplay, {
    date: e.date,
    style: e.shortDate ? "short" : void 0,
    capitalize: !0
  }, "from-now");
  let n = [jsx("div", {
    onMouseDown: e.onTileMouseDown,
    role: "button",
    tabIndex: 0,
    className: d()(e.onTileMouseDown && "feed_profile_header--fromNowLinkContainer--wSTrC", "feed_profile_header--fromNow--JI-v6"),
    children: t
  }, "from-now")];
  return jsx("div", {
    className: f,
    children: jsx($$h0, {
      user: e.user,
      size: e.size,
      noAvatar: e.noAvatar,
      noHandle: e.noHandle,
      appendToHandle: n
    })
  });
}
export function $$h0(e) {
  let t = useDispatch<AppDispatch>();
  let n = useCallback(n => {
    n.stopPropagation();
    e.user.id && t(selectViewAction({
      view: "user",
      userId: e.user.id,
      userViewTab: InterProfileType.INTERNAL_PROFILE_POSTS
    }));
  }, [t, e.user.id]);
  let a = e.appendToHandle || !1 === e.noHandle;
  return jsxs("div", {
    className: f,
    children: [!e.noAvatar && jsx(BaseLinkComponent, {
      onClick: n,
      trusted: !0,
      onMouseDown: stopPropagation,
      children: jsx(UserAvatar, {
        user: e.user,
        size: e.size ?? AvatarSize.LARGE
      })
    }), a && jsxs("div", {
      className: "feed_profile_header--content--bTCE2",
      children: [!e.noHandle && jsx(BaseLinkComponent, {
        className: "feed_profile_header--handleLink--GjGl1",
        onClick: n,
        trusted: !0,
        children: jsx("div", {
          className: "feed_profile_header--handle--CKDhH feed_profile_header--boldLinkText--MqQBP",
          children: e.user.handle
        })
      }), e.appendToHandle]
    })]
  });
}
export const A = $$h0;
export const B = $$_1;
