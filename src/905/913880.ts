import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { useAtomWithSubscription } from "../figma_app/27355";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { openFileTeamAtom } from "../figma_app/516028";
import { zt } from "../figma_app/84580";
import { JU } from "../figma_app/626177";
import { aV } from "../figma_app/305626";
import { R } from "../905/550439";
import { Y } from "../905/513161";
import { Rh, iw, Tw } from "../figma_app/210983";
export function $$y0() {
  let {
    showVideosModal
  } = zt();
  let {
    canMoveFileToProPlus
  } = R();
  let i = useDispatch();
  let y = !useAtomWithSubscription(openFileTeamAtom);
  let b = useCallback(() => {
    i(showModalHandler({
      type: Y,
      data: {
        titleText: getI18nString("upsell.move_file_videos.move_file_to_upload_videos_title"),
        bodyText: getI18nString("upsell.move_file_videos.move_file_to_upload_videos_subtitle")
      }
    }));
  }, [i]);
  let v = jsx(Button, {
    onClick: b,
    variant: "link",
    children: jsx("span", {
      className: Rh,
      children: renderI18nText("proto.prototype_panel.video_error_panel.move_this_file")
    })
  });
  return jsxs(aV, {
    children: [jsx(JU, {
      className: iw,
      children: canMoveFileToProPlus && y ? renderI18nText("proto.prototype_panel.video_error_panel.move_file_to_pro_team_to_upload_video", {
        moveThisFileLink: v
      }) : renderI18nText("proto.prototype_panel.video_error_panel.upgrade_team_to_upload_video")
    }), !(canMoveFileToProPlus && y) && jsx("div", {
      className: Tw,
      children: jsx($z, {
        htmlAttributes: {
          "data-testid": "video-error-panel-upgrade-team-button"
        },
        trackingProperties: {
          trackingDescriptor: _$$c.UPGRADE,
          key: "video-error-panel-upgrade-team-button"
        },
        onClick: showVideosModal,
        variant: "link",
        children: renderI18nText("proto.prototype_panel.video_error_panel.upgrade_to_pro")
      })
    })]
  });
}
export const c = $$y0;