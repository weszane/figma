import { jsx } from "react/jsx-runtime";
import { memo, useRef, useState } from "react";
import { xk } from "@stylexjs/stylex";
import { g as _$$g } from "../905/211118";
import { oW } from "../905/675859";
var $$l1 = (e => (e.COMMUNITY_HUB_FILE_THUMBNAIL = "COMMUNITY_HUB_FILE_THUMBNAIL", e))($$l1 || {});
let $$d0 = memo(function ({
  containerStyle: e,
  imageStyle: t,
  crossOrigin: i,
  fadeInOnLoad: l = !1,
  ...d
}) {
  let m = useRef(null);
  let [h, g] = useState();
  let [f, _] = useState(!l);
  return jsx("div", {
    ref: m,
    ...xk(c.container, !!h && c.tintedContainer(h), e),
    children: jsx(oW, {
      ...d,
      ...xk(c.img, t, l && !f ? c.imgFadedOut : c.imgFadedIn),
      ...(i ? {
        crossOrigin: i
      } : {}),
      onLoad: e => {
        let t = function (e) {
          let t = document.createElement("canvas");
          t.width = e.naturalWidth;
          t.height = e.naturalHeight;
          let i = t.getContext("2d");
          if (!i) return;
          i.drawImage(e, 0, 0);
          let n = i.getImageData(0, 0, t.width, t.height).data;
          let r = [];
          for (let e = 0; e < n.length; e += 40) {
            let t = n[e];
            let i = n[e + 1];
            let a = n[e + 2];
            Math.max(t, i, a) - Math.min(t, i, a) < 30 || r.push([t, i, a]);
          }
          if (0 === r.length) return;
          let a = function (e, t) {
            let i = [];
            let n = _$$g(408);
            let r = new Set();
            for (; i.length < 5 && i.length < e.length;) {
              let t = Math.floor(n() * e.length);
              r.has(t) || (r.add(t), i.push(e[t]));
            }
            if (i.length < 5) return i;
            for (let n = 0; n < 10; n++) {
              let n = Array(t).fill(null).map(() => []);
              for (let t of e) n[u(t, i)].push(t);
              let r = !1;
              if (n.forEach((e, t) => {
                if (0 === e.length) return;
                let n = function (e) {
                  let t = [0, 0, 0];
                  for (let i of e) {
                    t[0] += i[0];
                    t[1] += i[1];
                    t[2] += i[2];
                  }
                  return [Math.round(t[0] / e.length), Math.round(t[1] / e.length), Math.round(t[2] / e.length)];
                }(e);
                p(n, i[t]) > 1 && (i[t] = n, r = !0);
              }), !r) break;
            }
            return i;
          }(r, 5);
          let o = [,,,,,].fill(0);
          for (let e of r) {
            let t = u(e, a);
            o[t]++;
          }
          let l = 0;
          let d = 0;
          for (let e = 0; e < o.length; e++) o[e] > l && (l = o[e], d = e);
          let c = a[d];
          return [c[0], c[1], c[2]];
        }(e.target);
        t && g(`#${t.map(e => e.toString(16).padStart(2, "0")).join("")}`);
        l && _(!0);
      }
    })
  });
});
let c = {
  container: {
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    width: "xh8yej3",
    height: "x5yr21d",
    background: "x1sjmt1f",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: !0
  },
  tintedContainer: e => [{
    background: "x7m5jml",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    backgroundBlendMode: "xtq2enb",
    $$css: !0
  }, {
    "--background": `linear-gradient(rgba(245, 245, 245, 0.6), rgba(245, 245, 245, 0.6)),
                 linear-gradient(#F5F5F5, #F5F5F5),
                 linear-gradient(${e}, ${e})`
  }],
  img: {
    display: "x1lliihq",
    scale: "xvrjunn",
    maxWidth: "x193iq5w",
    maxHeight: "xmz0i5r",
    objectFit: "x19kjcj4",
    boxShadow: "x1vqtdw0",
    transition: "xurcjfq",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  },
  imgFadedOut: {
    opacity: "xg01cxk",
    $$css: !0
  },
  imgFadedIn: {
    opacity: "x1hc1fzr",
    $$css: !0
  }
};
function u(e, t) {
  let i = 1 / 0;
  let n = 0;
  t.forEach((t, r) => {
    let a = p(e, t);
    a < i && (i = a, n = r);
  });
  return n;
}
function p(e, t) {
  return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2));
}
export const Q = $$d0;
export const y = $$l1;