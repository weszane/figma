import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { BaseLinkComponent } from "../figma_app/637027";
import { P } from "../905/347284";
import { renderI18nText, getI18nString } from "../905/303541";
import { fileRestoreAction } from "../figma_app/78808";
import { hideModal, popModalStack } from "../905/156213";
import { Ro } from "../figma_app/805373";
import { Cr } from "../figma_app/221114";
import { HeaderModal } from "../905/519092";
let p = "file_restore_from_version_modal--fileRestoreText--my8Lq";
function f(e) {
  let t = e.version;
  let r = function (e) {
    if (e.participating_images_dict) {
      let [t, r] = Object.entries(e.participating_images_dict)[0] || [];
      if (t) return {
        name: t,
        imageUrl: r
      };
    }
    return {
      name: e.user.handle,
      imageUrl: e.user.img_url
    };
  }(t);
  return jsxs("div", {
    className: "file_restore_from_version_modal--fileRestoreRow--ZAJ4y",
    children: [jsxs("div", {
      className: "file_restore_from_version_modal--fileRestoreDecoration--ZXtyF",
      children: [r && jsx(Ro, {
        className: "file_restore_from_version_modal--fileRestoreAvatar--Ub3UH",
        size: 30,
        entity: {
          img_url: r.imageUrl
        }
      }), e.connector && jsx("div", {
        className: "file_restore_from_version_modal--fileRestoreConnector--mhORY"
      })]
    }), jsxs("div", {
      className: "file_restore_from_version_modal--fileRestoreData--AQgSJ",
      children: [t.label && jsx("div", {
        className: "file_restore_from_version_modal--fileRestoreLabel--a6Shk ellipsis--ellipsis--Tjyfa",
        children: t.label || ""
      }), t.description && jsx("div", {
        className: p,
        children: t.description
      }), jsx("div", {
        className: p,
        children: jsx(Cr, {
          time: t.touched_at
        })
      }), jsx("div", {
        className: "file_restore_from_version_modal--fileRestoreUser--Bv60C",
        children: r?.name ?? ""
      })]
    }), jsx(BaseLinkComponent, {
      onClick: e.callback,
      className: "file_restore_from_version_modal--fileRestoreAction--414BR",
      trusted: !0,
      children: renderI18nText("file_restore_from_version_modal.restore")
    })]
  });
}
export function $$g0(e) {
  let t = useDispatch();
  let r = r => {
    trackEventAnalytics("restore_version_from_modal", {
      fileKey: e.fig.key,
      versionId: r
    });
    t(hideModal());
    t(fileRestoreAction({
      fileKey: e.fig.key,
      versionId: r
    }));
  };
  let n = e.versions.filter(e => !e.disabled);
  return jsx(HeaderModal, {
    title: getI18nString("file_restore_from_version_modal.restore_from_version_history"),
    maxWidth: 396,
    onClose: () => {
      t(popModalStack());
    },
    children: jsx("div", {
      className: "file_restore_from_version_modal--fileRestorePanel--pMNT2",
      children: jsx(P, {
        width: 396,
        children: n.map((e, t) => jsx(f, {
          version: e,
          callback: () => r(e.id),
          connector: t + 1 !== n.length
        }, e.id))
      })
    })
  });
}
export const FileRestoreFromVersionModal = $$g0;