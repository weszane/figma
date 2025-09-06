import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { H0 } from "../figma_app/191804";
import { Point } from "../905/736624";
import { Jn } from "../905/17223";
import { i as _$$i, C as _$$C } from "../905/64217";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { $ } from "../905/355181";
import { j7 } from "../905/929976";
import { Lo } from "../905/156213";
import { jD } from "../905/765855";
import { Dm, DT } from "../figma_app/8833";
import { O1, KD } from "../figma_app/317394";
import { Ib } from "../905/129884";
import { Ju, ZU } from "../905/102752";
import { UR } from "../905/301347";
import { b as _$$b } from "../905/168657";
import { d_ } from "../figma_app/918700";
import { DH } from "../905/508893";
import { M as _$$M } from "../905/981847";
function v(e) {
  let {
    inputRef,
    text
  } = e;
  let [a, s] = useState(!1);
  O1(e.onEscape, KD.LINK_TOOLTIP);
  return jsx("div", {
    className: "alt_text_editor--container--iBAlE hyperlink_editor--container--rXDYj",
    style: {
      left: e.location.x,
      top: e.location.y
    },
    children: jsx("div", {
      className: `alt_text_editor--popup--slm4K hyperlink_editor--popup--CHv-O _overlayBase--_overlayBase--Rkj8l ${Dm}`,
      children: e.canEdit && (a || "" === text) ? jsx("input", {
        className: "alt_text_editor--input--la-OY hyperlink_editor--input--FGLip input--darkInput--zfbnG",
        defaultValue: text,
        onKeyDown: t => {
          "Enter" === t.key && (e.onEnter(), t.preventDefault());
        },
        placeholder: getI18nString("comments.add_description"),
        autoComplete: "off",
        autoCapitalize: "off",
        ref: inputRef,
        autoFocus: !0
      }) : jsxs(Fragment, {
        children: [jsx("div", {
          className: "alt_text_editor--textContainer--96qTK",
          children: jsxs("div", {
            className: e.canEdit ? "alt_text_editor--text--GIG6O" : "alt_text_editor--extendedText--s3rKT alt_text_editor--text--GIG6O",
            children: [jsx("span", {
              className: "alt_text_editor--label--dv8rN",
              children: getI18nString("comments.alt_text_label")
            }), text]
          })
        }), e.canEdit && jsx("button", {
          className: "alt_text_editor--button--WSr1m",
          onClick: () => s(!0),
          autoFocus: !0,
          children: getI18nString("comments.edit_alt_text")
        })]
      })
    })
  });
}
let C = {
  shouldZoomToStart: !1,
  shouldWheelPan: !0,
  enableZoomControls: !0,
  enableZoomKeyControls: !0,
  minZoomFactor: .01,
  maxZoomFactor: 10,
  crossOrigin: "use-credentials"
};
var T = (e => (e[e.LEFT = -1] = "LEFT", e[e.RIGHT = 1] = "RIGHT", e))(T || {});
export let $$k0 = Ju(function (e) {
  let t = useDispatch();
  let [i, b] = useState(e.selectedIdx);
  let T = useRef(null);
  let [k, R] = useState(null);
  let N = useRef(null);
  let {
    onUpdateAltText
  } = e;
  let [O, D] = useState(e.attachments);
  let L = UR(_$$b.ATTACHMENT_MODAL_BACKGROUND_COLOR);
  let F = L ? H0(L) : void 0;
  let M = e => {
    if (T.current) {
      let t = T.current?.children[e].firstChild;
      t?.blur();
    }
  };
  let j = e => {
    M(i);
    b(e);
    R(null);
  };
  let U = e => {
    j((i + e + O.length) % O.length);
  };
  let B = e => {
    let t = i === (-1 === e ? 0 : O.length - 1);
    return jsx($, {
      onClick: () => U(e),
      icon: -1 === e ? "chevron-left-32" : "chevron-right-32",
      variant: "text",
      disabled: t
    });
  };
  let V = e => {
    if ("ArrowLeft" === e.key) 0 !== i && U(-1);else if ("ArrowRight" === e.key) {
      if (i === O.length - 1) return;
      U(1);
    }
  };
  let G = () => (t(Lo()), !0);
  O1(G, KD.FULL_SCREEN_MODAL);
  let z = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    t(j7({
      type: DT,
      data: {
        id: "comment_attachment_context_menu",
        clientX: e.clientX,
        clientY: e.clientY,
        attachment: i
      }
    }));
  };
  let H = useRef(null);
  let W = useCallback(() => {
    if (N.current && !k) {
      let e = N.current.getBoundingClientRect();
      let i = new Point(e.left + e.width / 2, e.top);
      t(jD());
      R(i);
    } else R(null);
  }, [t, k]);
  let K = useCallback(e => {
    if (H.current) {
      let n = H.current.value.trim();
      (n || e) && onUpdateAltText(n, i).then(e => {
        e && (200 !== e.status ? t(_$$F.enqueue({
          message: getI18nString("comments.failed_to_update_alt_text")
        })) : D(e => (e[i] = {
          ...e[i],
          altText: n
        }, e)));
      }).catch(e => {
        t(_$$F.enqueue({
          message: getI18nString("comments.failed_to_update_alt_text")
        }));
      });
    }
    R(null);
  }, [t, onUpdateAltText, i]);
  return jsx(Fragment, {
    children: jsxs(_$$i, {
      displayAs: _$$C.Block,
      children: [jsx(d_, {
        className: "attachment_detail_modal--attachmentDetailsModal--wUYTe",
        size: "any",
        onKeyDown: e => {
          V(e);
        },
        children: jsxs("div", {
          className: "attachment_detail_modal--contentSectionContainer--ctWC6",
          children: [jsxs("div", {
            className: "attachment_detail_modal--headerContainer--fMrIM",
            children: [jsx("div", {
              className: "attachment_detail_modal--headerTitle--2r0B0",
              children: O[i].metadata.file_name ?? getI18nString("comments.attachment_default_name", {
                fileExtension: O[i].mediaType.split("/")[1]
              })
            }), jsx(Jn, {
              className: "attachment_detail_modal--headerCloseButton--Ueo20",
              recordingKey: "commentMediaDetailModal",
              onClick: G,
              innerText: getI18nString("comments.close"),
              "aria-label": getI18nString("comments.close")
            })]
          }), jsxs("div", {
            className: "attachment_detail_modal--selectedContent--k1QBv",
            children: [jsx(DH, {
              imageSrc: O[i].imageUrl,
              onContextMenu: e => {
                z(e, O[i]);
              },
              pageBackgroundColor: F ?? void 0,
              ...C
            }), !!getFeatureFlags().comments_media_alt_text && (e.canEdit || O[i].altText) && jsx("button", {
              className: O.length > 1 ? "attachment_detail_modal--altTextAboveThumbnails--wloH- attachment_detail_modal--altText--n00JY feed_post_detail_modal--contentOverlayPill--1jsoj" : "attachment_detail_modal--altText--n00JY feed_post_detail_modal--contentOverlayPill--1jsoj",
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": k ? void 0 : getI18nString("comments.add_description"),
              "data-tooltip-show-above": !0,
              onClick: () => k ? K(O[i].altText) : W(),
              ref: N,
              children: getI18nString("comments.alt_text")
            })]
          }), O.length > 1 && jsxs("div", {
            className: "attachment_detail_modal--thumbnailSection--C-v-e",
            children: [B(-1), jsx("div", {
              ref: T,
              className: "attachment_detail_modal--thumbnailContainer--9ZEZ-",
              children: O.map((e, t) => jsx("div", {
                className: "attachment_detail_modal--thumbnailWrapper--1zB3U",
                children: jsx(_$$M, {
                  thumbnailUrl: e.thumbnailUrl,
                  altText: e.altText || getI18nString("comments.attachment_thumbnail_alt_text_default"),
                  isSelected: t === i,
                  onClick: e => {
                    j(t);
                  },
                  onRightClick: t => z(t, e)
                })
              }, e.thumbnailUrl))
            }), B(1)]
          })]
        })
      }), k && jsx(v, {
        text: O[i].altText ?? "",
        location: k,
        onEnter: () => K(O[i].altText),
        onEscape: () => (R(null), !0),
        inputRef: H,
        canEdit: e.canEdit
      })]
    })
  });
}, "AttachmentDetailModal", ZU.NO);
export const q = $$k0;