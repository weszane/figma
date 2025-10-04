import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import a from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { renderAvatar } from "../figma_app/3731";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { TrackedLinkButton } from "../905/160095";
import { renderI18nText } from "../905/303541";
import { UserAvatar, AvatarSize } from "../905/590952";
import { A } from "../905/563377";
import { useFileByKey } from "../905/862913";
import { useCurrentFileKey } from "../figma_app/516028";
import { useCurrentUserOrgId } from "../905/845253";
var s = a;
let f = "custom_template_publish_nudge_content--thumbnailInnerContainerMd--Emvtj";
let E = "custom_template_publish_nudge_content--currFileThumbnail--Yo6Lb";
let y = buildUploadUrl("b13789723ab5e9138ab263193f7d82aff4c47674");
let b = buildUploadUrl("f290b00b2b225be3eb5056cb4473d87953764837");
export var $$T2 = (e => (e[e.LARGE = 0] = "LARGE", e[e.MEDIUM = 1] = "MEDIUM", e[e.SMALL = 2] = "SMALL", e))($$T2 || {});
export function $$I1({
  size: e = 1,
  useCurrentFileAsThumbnail: t = !1
}) {
  let r = useCurrentUserOrgId();
  let a = useSelector(e => e.user);
  let o = useCurrentFileKey();
  let d = useFileByKey();
  let c = {
    2: {
      modalGraphic: "custom_template_publish_nudge_content--modalGraphicSm--WcSGr custom_template_publish_nudge_content--modalGraphic--rfPmE",
      orgAvatar: "custom_template_publish_nudge_content--orgAvatarSm--koOYf custom_template_publish_nudge_content--orgAvatar--qPeJa custom_template_publish_nudge_content--avatarSm--Zxket custom_template_publish_nudge_content--avatar--abDDN",
      userAvatar: "custom_template_publish_nudge_content--userAvatarSm--B4Zex",
      exampleFileThumbnail: "custom_template_publish_nudge_content--exampleFileThumbnailSm--iH1ZK custom_template_publish_nudge_content--exampleFileThumbnail--jShwc",
      thumbnailContainer: "custom_template_publish_nudge_content--thumbnailContainerSm--gUImw custom_template_publish_nudge_content--thumbnailContainer--m9CYk",
      avatar: "custom_template_publish_nudge_content--avatarSm--Zxket custom_template_publish_nudge_content--avatar--abDDN",
      thumbnailInnerContainer: f
    },
    1: {
      modalGraphic: "custom_template_publish_nudge_content--modalGraphicMd--7iA69 custom_template_publish_nudge_content--modalGraphic--rfPmE",
      orgAvatar: "custom_template_publish_nudge_content--orgAvatarMd--oCgCy custom_template_publish_nudge_content--orgAvatar--qPeJa",
      userAvatar: "custom_template_publish_nudge_content--userAvatarMd--G2FtM",
      exampleFileThumbnail: "custom_template_publish_nudge_content--exampleFileThumbnailMd--dl3H9 custom_template_publish_nudge_content--exampleFileThumbnail--jShwc",
      thumbnailContainer: "custom_template_publish_nudge_content--thumbnailContainerMd--8TV1k custom_template_publish_nudge_content--thumbnailContainer--m9CYk",
      avatar: "custom_template_publish_nudge_content--avatarMd--D18sG custom_template_publish_nudge_content--avatar--abDDN",
      thumbnailInnerContainer: f
    },
    0: {
      modalGraphic: "custom_template_publish_nudge_content--modalGraphicLg--0mkdU custom_template_publish_nudge_content--modalGraphic--rfPmE",
      orgAvatar: "custom_template_publish_nudge_content--orgAvatarLg--PpLOy custom_template_publish_nudge_content--orgAvatar--qPeJa",
      userAvatar: "custom_template_publish_nudge_content--userAvatarLg--dDo-X",
      exampleFileThumbnail: "custom_template_publish_nudge_content--exampleFileThumbnailLg--9cUca custom_template_publish_nudge_content--exampleFileThumbnail--jShwc",
      thumbnailContainer: "custom_template_publish_nudge_content--thumbnailContainerLg--Mrew2 custom_template_publish_nudge_content--thumbnailContainer--m9CYk",
      avatar: "custom_template_publish_nudge_content--avatarLg--Xep7T custom_template_publish_nudge_content--avatar--abDDN",
      thumbnailInnerContainer: "custom_template_publish_nudge_content--thumbnailInnerContainer--2yUkJ"
    }
  }[e];
  let u = jsx("img", {
    src: y,
    alt: "",
    className: E
  });
  if (null != o && t) {
    let e = d[o]?.thumbnail_url;
    e && (u = jsx("img", {
      src: e,
      alt: "",
      className: E
    }));
  }
  return jsxs("div", {
    className: c.modalGraphic,
    children: [jsx("img", {
      src: b,
      alt: "",
      className: c.exampleFileThumbnail
    }), a && jsx(renderAvatar, {
      className: s()(c.avatar, c.orgAvatar),
      userId: a.id,
      orgId: r,
      size: 2 === e ? 16 : 1 === e ? 24 : 32
    }), a && jsx("div", {
      className: s()(c.avatar, c.userAvatar),
      children: jsx(UserAvatar, {
        user: a,
        size: 2 === e ? AvatarSize.SMALL16 : 1 === e ? AvatarSize.MEDIUM : AvatarSize.LARGE
      })
    }), jsx("div", {
      className: c.thumbnailContainer,
      children: jsx("div", {
        className: c.thumbnailInnerContainer,
        children: u
      })
    })]
  });
}
export function $$S0() {
  return jsxs("div", {
    children: [jsx($$I1, {
      size: 0,
      useCurrentFileAsThumbnail: !0
    }), jsx("div", {
      className: cssBuilderInstance.p16.font11.$,
      children: renderI18nText("whiteboard.inserts.custom_templates_description")
    }), jsx("div", {
      className: cssBuilderInstance.flex.justifyEnd.mx16.mb16.$,
      children: jsx(TrackedLinkButton, {
        newTab: !0,
        href: A,
        children: renderI18nText("whiteboard.inserts.learn_more")
      })
    })]
  });
}
export const ZH = $$S0;
export const $z = $$I1;
export const IX = $$T2;