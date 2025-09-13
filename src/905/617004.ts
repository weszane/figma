import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { BadgeColor } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { l as _$$l } from "../905/152724";
import { sf } from "../905/929976";
import { logAndTrackCTA } from "../figma_app/314264";
import { selectCurrentUser } from "../905/372672";
import { Ro } from "../figma_app/805373";
import { v_ } from "../figma_app/878651";
import { W } from "../905/316655";
export function $$h0(e) {
  let {
    profile,
    tileRef,
    rightSide,
    className,
    avatarSize
  } = e;
  let h = useDispatch();
  return jsxs("div", {
    className: className || "profile_tile--profileRowTile---yDD9",
    ref: tileRef,
    children: [jsxs("div", {
      className: "profile_tile--profileRowTileProfileInfoClickTarget--yOlvx",
      onClick: () => {
        h(sf({
          view: "communityHub",
          subView: "handle",
          handle: profile.profile_handle
        }));
      },
      children: [jsx(Ro, {
        entity: profile,
        size: avatarSize || 48,
        className: "profile_tile--avatar--zfidx"
      }), jsxs("div", {
        className: "profile_tile--profileRowTileProfileInfo--wjbCm",
        children: [jsxs("div", {
          className: "profile_tile--profileRowTileProfileName--8Azkx ellipsis--ellipsis--Tjyfa text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: [jsx("span", {
            className: _$$s.ellipsis.noWrap.overflowHidden.$,
            children: profile.name
          }), jsx(_$$l, {
            profile
          })]
        }), jsxs("div", {
          className: "profile_tile--profileHandleAndFollowBadge--gbnSc",
          children: [jsxs("div", {
            className: "profile_tile--profileRowTileProfileHandle--gpLvX ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: ["@", profile.profile_handle]
          }), profile.current_user_is_followed && !e.hideFollowsYouBadge && jsx(v_, {
            color: BadgeColor.INVERT
          })]
        })]
      })]
    }), rightSide && jsx("div", {
      className: "profile_tile--profileRowTileRightSide--j7Plw",
      children: rightSide
    })]
  }, profile.id);
}
export function $$g1(e) {
  let {
    profile,
    className,
    trackingProperties,
    trackingEventName,
    toggleFollowing,
    hideFollowButton
  } = e;
  let p = selectCurrentUser();
  let g = useDispatch();
  return jsx("div", {
    className,
    onClick: e => {
      e.stopPropagation();
      trackingProperties && logAndTrackCTA(trackingProperties, trackingEventName);
      g(sf({
        view: "communityHub",
        subView: "handle",
        handle: profile.profile_handle
      }));
    },
    children: jsx("div", {
      children: jsx($$h0, {
        profile,
        avatarSize: 64,
        className: "profile_tile--profileWithResourcesTileProfileSection--nUGaw profile_tile--profileRowTile---yDD9",
        rightSide: jsx("div", {
          className: p?.community_profile_id === profile.id ? "profile_tile--followButtonPlaceholderSpace--wDM0C" : void 0,
          children: !hideFollowButton && jsx(W, {
            onClick: toggleFollowing,
            profile
          })
        }),
        hideFollowsYouBadge: !0
      })
    })
  });
}
export const y = $$h0;
export const v = $$g1;