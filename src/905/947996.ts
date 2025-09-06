import { jsx, jsxs } from "react/jsx-runtime";
import { A as _$$A } from "../905/408320";
import { q } from "../905/820062";
import o from "classnames";
import { h1 } from "../905/986103";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { H8 } from "../905/590952";
import { E } from "../905/984674";
import { wo } from "../figma_app/753501";
import { E as _$$E } from "../905/511388";
import { D } from "../905/621624";
var $$n0;
var l = o;
let A = ["25%", "75%", "37.5%", "50%", "12.5%"];
let y = ["37.5%", "12.5%", "50%", "75%", "25%"];
(e => {
  e.Title = function ({
    size: e = "default",
    children: t,
    dataTestId: i
  }) {
    return jsx("div", {
      className: _$$s.flex.overflowHidden.$,
      "data-testid": i,
      children: "default" === e ? jsx(E, {
        fontWeight: "medium",
        color: "default",
        truncate: !0,
        showTooltipWhenTruncated: !0,
        children: t
      }) : jsx("div", {
        className: _$$s.textBodyLargeStrong.colorText.truncate.$,
        children: t
      })
    });
  };
  e.EditInfo = function ({
    editor: e,
    lastEditedAt: t,
    avatarBoundingBoxEqualsIcon: i = !1,
    hideEditorName: n = !1
  }) {
    return jsxs("div", {
      className: _$$s.flex.$,
      children: [jsx("div", {
        className: _$$s.relative.flex.itemsCenter.justifyCenter.$$if(n, _$$s.mr6, _$$s.mr4).flexShrink0.$,
        style: sx.$$if(i, {
          top: "1px",
          width: "14px",
          height: "14px"
        }, {
          top: "0.5px"
        }).$,
        children: jsx(H8, {
          user: e,
          size: 14
        })
      }), jsxs("div", {
        className: _$$s.inlineFlex.flexRowReverse.overflowHidden.$,
        children: [jsx(E, {
          truncate: !0,
          showTooltipWhenTruncated: !0,
          children: jsx("span", {
            className: _$$s.pre.$,
            children: renderI18nText(n ? "fragment_search.last.edited_time_without_separator" : "fragment_search.last.edited_time_with_separator", {
              time: jsx(h1, {
                date: t
              })
            })
          })
        }), !n && jsx(E, {
          truncate: !0,
          showTooltipWhenTruncated: !0,
          children: e.name
        })]
      })]
    });
  };
  e.CommunityMetadata = function ({
    name: e
  }) {
    return jsxs("div", {
      className: _$$s.flex.gap2.$,
      children: [jsx(E, {
        truncate: !0,
        showTooltipWhenTruncated: !0,
        children: renderI18nText("community.community_author", {
          author: e
        })
      }), jsx(_$$E, {
        libraryKey: void 0,
        showTooltip: !0,
        isFragment: !0
      })]
    });
  };
  e.SkeletonLine = function ({
    index: e,
    bottom: t
  }) {
    return jsx("div", {
      className: l()(D, _$$s.colorBgSecondary.$),
      style: sx.add({
        height: "11px",
        borderRadius: "4px",
        width: t ? y[e % A.length] : A[e % A.length]
      }).$
    });
  };
  e.Container = function ({
    children: e
  }) {
    return jsx("div", {
      className: _$$s.flex.flexColumn.colorTextSecondary.maxWFull.$,
      style: sx.add({
        gap: "3px"
      }).$,
      role: "button",
      onPointerDown: wo,
      tabIndex: 0,
      children: e
    });
  };
  e.IconRow = function ({
    iconName: e,
    children: t
  }) {
    let i;
    let n = l()("metadata--colorIconSecondary--O8FUA", _$$s.flexShrink0.$);
    i = "page" === e ? jsx(_$$A, {
      className: n
    }) : jsx(q, {
      className: n
    });
    return jsxs("div", {
      className: _$$s.flex.itemsCenter.gap4.relative.$,
      children: [i, jsx("span", {
        className: _$$s.colorTextSecondary.truncate.$,
        children: t
      })]
    });
  };
})($$n0 || ($$n0 = {}));
export const O = $$n0;