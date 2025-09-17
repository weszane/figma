import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { ButtonPrimitive } from "../905/632989";
import o from "../vendor/197638";
import { R } from "../5430/455826";
import { renderI18nText } from "../905/303541";
import { ALLOWED_HTML_TAGS, COMMUNITY_MIN_WIDTH, COMMUNITY_MODAL_HEIGHT, COMMUNITY_MODAL_WIDTH } from "../figma_app/350203";
var a = o;
let $$u = "truncated_description_view--blueLink--v3wsX blue_link--blueLink--9rlnd";
export function $$m0({
  description: e
}) {
  let t = useRef(null);
  useEffect(() => {
    if (!t.current) return;
    let r = document.createElement("div");
    r.innerHTML = a().sanitize(e);
    let s = ALLOWED_HTML_TAGS.map(e => `:not(${e})`).join("");
    for (let e of r.querySelectorAll(s)) e.parentNode?.removeChild(e);
    t.current.innerHTML = a().sanitize(r.innerHTML);
  }, [t, e]);
  return jsx("div", {
    ref: t
  });
}
export function $$$$_1({
  description: e,
  hideDivider: t = !1,
  showHeader: r = !1
}) {
  let o = useRef(null);
  let [a, _] = useState(!1);
  let [p, h] = useState(!1);
  let x = R(COMMUNITY_MIN_WIDTH) ? COMMUNITY_MODAL_HEIGHT : COMMUNITY_MODAL_WIDTH;
  return (useEffect(() => {
    o.current && o.current.getBoundingClientRect().height > x && (_(!0), h(!0));
  }, [x]), e) ? jsxs(Fragment, {
    children: [jsxs("div", {
      style: a ? {
        maxHeight: `${x}px`
      } : {},
      className: a ? "truncated_description_view--truncatedDescription--H3ST8 truncated_description_view--description--7qZxm text--fontPos14--OL9Hp text--_fontBase--QdLsd" : "truncated_description_view--description--7qZxm text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      ref: o,
      children: [r && jsx("div", {
        className: "truncated_description_view--aboutHeader--f2Cgw",
        children: renderI18nText("community.resource_page.about")
      }), jsx($$m0, {
        description: e
      }), !a && p && jsx(ButtonPrimitive, {
        className: $$u,
        onClick: () => {
          _(!0);
        },
        children: renderI18nText("community.detail_view.show_less")
      })]
    }), a && jsx("div", {
      className: "truncated_description_view--readMoreWrapper--4ruCR text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: jsx(ButtonPrimitive, {
        className: $$u,
        onClick: () => {
          _(!1);
        },
        children: renderI18nText("community.detail_view.read_more")
      })
    }), !t && jsx("div", {
      className: "truncated_description_view--divider--RK37w"
    })]
  }) : null;
}
export const _ = $$m0;
export const u = $$$$_1;