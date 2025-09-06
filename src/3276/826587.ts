import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useCallback, useRef } from "react";
import { useDispatch } from "../vendor/514228";
import { CV, KJ } from "../figma_app/916560";
import { Cg } from "../905/195479";
import { buildUploadUrl } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { CY, ks, nR } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { WJ } from "../figma_app/671547";
import { Kx } from "../figma_app/546509";
import { Ib } from "../905/129884";
import { Eu, Gf, yV, se, Vy, Ms, iO, wK, IO, GW, Xg, Rq, ts, Y$, _q, Kk, _Q, Dp } from "../3276/770360";
let _ = () => {
  let e = [{
    key: "figma",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.figma"),
    url: "https://figma.com/",
    srcColor: buildUploadUrl("7ea1b6f90b29ea190de9f069109ba70cdb731c3e")
  }, {
    key: "youtube",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.youtube"),
    url: "https://youtube.com/",
    srcColor: buildUploadUrl("27da640990b84fd2d3133d90c7af66d8cf212a41")
  }, {
    key: "vimeo",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.vimeo"),
    url: "https://vimeo.com/",
    srcColor: buildUploadUrl("7ef2e69ffc73f6e90f9fa5e90d485e623c69ed10")
  }, {
    key: "loom",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.loom"),
    url: "https://loom.com/",
    srcColor: buildUploadUrl("097eb54967f52a9ad067434278365eba38bca3c3")
  }, {
    key: "spotify",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.spotify"),
    url: "https://spotify.com/",
    srcColor: buildUploadUrl("1c81468ec0a9eccd0c0cdd21b9d4f6a6477dcc8a")
  }, {
    key: "codepen",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.codepen"),
    url: "https://codepen.io/",
    srcColor: buildUploadUrl("76ecbaf33bb0485666ef32e5afaf73b4add66fd7")
  }];
  e.push({
    key: "asana",
    name: getI18nString("whiteboard.embeds.insert_embed_modal.asana"),
    url: "https://asana.com/",
    srcColor: buildUploadUrl("67c0efb6b111e5fd5b3153057bbddb000ec04fca")
  });
  return e;
};
export function $$g0(e) {
  let {
    onSuccess
  } = e;
  let [n, l] = useState("");
  let [_, g] = useState(!1);
  let x = useDispatch();
  let b = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    let o = Cg(x, n);
    if (o.length && o[0].valid) {
      g(!1);
      onSuccess();
      return;
    }
    CV(x, n, WJ.MODAL).valid ? (g(!1), onSuccess()) : (g(!0), y.current?.focus(), y.current?.select());
  }, [x, onSuccess, n]);
  let y = useRef(null);
  let C = useCallback(e => {
    l(e.currentTarget.value);
    g(!1);
  }, []);
  let w = !KJ(n);
  let j = Kx();
  return jsxs("div", {
    className: Eu,
    children: [e.title && jsx("div", {
      className: Gf,
      children: e.title
    }), jsx("div", {
      className: yV,
      children: renderI18nText("whiteboard.embeds.insert_embed_modal.add_media_from_across_the_web", {
        learnMoreLink: jsx(CY, {
          className: se,
          href: "https://help.figma.com/hc/articles/4414079911575",
          target: "_blank",
          trusted: !0,
          children: renderI18nText("whiteboard.embeds.insert_embed_modal.learn_more")
        })
      })
    }), jsx("form", {
      className: Vy,
      onSubmit: b,
      children: jsxs("div", {
        className: Ms,
        children: [jsxs("div", {
          className: iO,
          children: [jsx(ks, {
            value: n,
            ref: y,
            onChange: C,
            className: wK,
            placeholder: getI18nString("whiteboard.embeds.insert_embed_modal.paste_a_public_link"),
            autoFocus: !j?.shouldOptimizeForIpadApp,
            autoCapitalize: "none"
          }), jsx("span", {
            className: _ ? IO : GW
          }), _ && jsx("div", {
            className: Xg,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("whiteboard.embeds.insert_embed_modal.invalid_link_error_message"),
            "data-tooltip-show-above": !0,
            "data-tooltip-show-immediately": !0,
            children: jsx("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14ZM8.99998 8.66701H7.99998V6.50001V4.66701H8.99998V6.50001V8.66701ZM8.50098 11.333C8.13198 11.333 7.83398 11.035 7.83398 10.667C7.83398 10.298 8.13198 10 8.50098 10C8.86898 10 9.16698 10.298 9.16698 10.667C9.16698 11.035 8.86898 11.333 8.50098 11.333Z",
                fill: "#F24822"
              })
            })
          })]
        }), jsx(nR, {
          type: "submit",
          disabled: w,
          className: Rq,
          children: renderI18nText("whiteboard.embeds.insert_embed_modal.add")
        })]
      })
    }), !BrowserInfo.isIpadNative && jsx(v, {})]
  });
}
function v() {
  return jsxs("div", {
    className: ts,
    children: [jsx("div", {
      className: Y$,
      children: renderI18nText("whiteboard.embeds.insert_embed_modal.try_linking_to_sites_like")
    }), jsx("div", {
      className: _q,
      children: _().map(e => jsx("div", {
        className: Kk,
        children: jsx("a", {
          className: _Q,
          href: e.url,
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip-show-immediately": !0,
          "data-tooltip-hide-immediately": !0,
          "data-tooltip": e.name,
          target: "_blank",
          children: jsx("img", {
            className: Dp,
            src: e.srcColor,
            alt: e.name
          })
        })
      }, e.key))
    })]
  });
}
export const q = $$g0;