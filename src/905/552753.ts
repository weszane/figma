import { ex } from "../905/524523";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Fragment as _$$Fragment, forwardRef, useRef, useState, useLayoutEffect } from "react";
import { E } from "../905/632989";
import { A as _$$A } from "../905/744692";
import o from "classnames";
import { UF } from "../905/403166";
import { td, Yx } from "../figma_app/930338";
import { t as _$$t, tx } from "../905/303541";
import { dN } from "../vendor/291472";
import { Ib } from "../905/129884";
var l = o;
let m = [{
  id: "heavy_plus_sign",
  description: "plus sign"
}, {
  id: "+1",
  description: "thumbs up"
}, {
  id: "-1",
  description: "thumbs down"
}, {
  id: "eyes",
  description: "eyes"
}, {
  id: "heart_eyes",
  description: "heart eyes"
}, {
  id: "joy",
  description: "joy"
}, {
  id: "star2",
  description: "glowing star",
  hideInPicker: !0
}, {
  id: "fire",
  description: "fire"
}].map(e => {
  let t = dN.get(e.id);
  let i = t ? t?.skins[0].unified : "";
  return {
    ...e,
    skin: null,
    colons: `:${e.id}:`,
    unified: i,
    native: String.fromCodePoint(parseInt(i, 16))
  };
});
let g = ex("emoji_reaction_tooltip", function (e) {
  let {
    emojiUnicodeList,
    emojiShortcodeToUsers
  } = e;
  return jsxs("div", {
    children: [jsx("div", {
      className: "emoji_reaction_tooltip--unicodeContainer--So5EP",
      children: emojiUnicodeList.map(e => jsx("span", {
        className: "emoji_reaction_tooltip--unicode---Fnn9",
        children: e
      }, e))
    }), emojiShortcodeToUsers.map(([e, t]) => jsxs(_$$Fragment, {
      children: [jsx("div", {
        className: "emoji_reaction_tooltip--users--HREY8",
        children: t
      }), jsx("div", {
        className: "emoji_reaction_tooltip--shortcode--wvFPr",
        children: e
      })]
    }, e))]
  });
}, e => {
  let t = {
    emojiUnicodeList: [],
    emojiShortcodeToUsers: []
  };
  let i = e.getAttribute("data-tooltip-data");
  i && (t = {
    ...t,
    ...JSON.parse(i)
  });
  return t;
});
let f = "10px";
let _ = "reactions--reaction--BGfYE text--fontPos11--2LvXf text--_fontBase--QdLsd";
function A(e) {
  return void 0 !== e.numUsers;
}
let y = {};
function b(e, t) {
  let i = e.map(e => e.handle).slice(0, t);
  let n = e.length - t;
  n > 0 && i.push(td(n, "other"));
  return Yx(i);
}
m.forEach(e => {
  y[`:${e.id}:`] = e;
});
let v = forwardRef(function (e, t) {
  let i = A(e.reaction) ? e.reaction.numUsers : e.reaction.users.length;
  let r = Object.keys(e.reaction.skinTonesToUsers).length;
  let s = r > 0 ? Object.keys(e.reaction.skinTonesToUsers) : [""];
  let o = s.map(t => UF(`${e.reaction.emoji}${t}`)[0]);
  let c = {
    emojiUnicodeList: [],
    emojiShortcodeToUsers: []
  };
  if (!A(e.reaction)) {
    let t = [];
    let i = [];
    if (r > 0) s.forEach(n => {
      let a = `${e.reaction.emoji}${n}`;
      t.push(UF(a)[0].unicode);
      let s = b(e.reaction.skinTonesToUsers[n], Math.floor(40 / r));
      i.push([a, s]);
    });else {
      t.push(UF(e.reaction.emoji)[0].unicode);
      let n = b(e.reaction.users, 40);
      i.push([e.reaction.emoji, n]);
    }
    c = {
      emojiUnicodeList: t,
      emojiShortcodeToUsers: i
    };
  }
  return jsxs(E, {
    ref: t,
    "aria-label": e.reaction.selected ? _$$t("comments.reaction_selected_descriptive_aria_label_text", {
      num_users: i,
      icon: JSON.stringify(c.emojiUnicodeList)
    }) : _$$t("comments.reaction_unselected_descriptive_aria_label_text", {
      num_users: i,
      icon: JSON.stringify(c.emojiUnicodeList)
    }),
    "aria-pressed": e.reaction.selected,
    className: l()({
      "reactions--selectedReaction--Qjbpe reactions--reaction--BGfYE text--fontPos11--2LvXf text--_fontBase--QdLsd": e.reaction.selected,
      [_]: !e.reaction.selected,
      "reactions--hiddenReaction--mI82W": !e.visible
    }),
    "data-testid": `reaction-button-${e.reaction.emoji}`,
    "data-tooltip": g,
    "data-tooltip-data": JSON.stringify(c),
    "data-tooltip-max-width": 200,
    "data-tooltip-type": Ib.SPECIAL,
    onClick: e.onClick,
    children: [o.map(e => jsx("span", {
      className: "reactions--emojiUnicode--Tf1hh",
      children: e.unicode
    }, `${e.meta}`)), jsx("span", {
      className: "reactions--count--9hCn-",
      children: i
    })]
  });
});
export function $$I0(e) {
  let t = e.styleClassName ? e.styleClassName : "reactions--addReaction--TDUhu";
  return jsx(E, {
    className: t,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": _$$t("comments.add_reaction"),
    onClick: e.onClick,
    "aria-label": _$$t("comments.add_reaction"),
    htmlAttributes: {
      "data-testid": "add-reaction-button"
    },
    "data-fullscreen-intercept": e["data-fullscreen-intercept"],
    children: jsx(_$$A, {})
  });
}
export function $$E1(e) {
  let {
    reactions,
    collapseOverflow,
    onClickExisting,
    children,
    prependToList
  } = e;
  let d = useRef(null);
  let c = useRef({});
  let [p, m] = useState(null);
  let [h, g] = useState(!collapseOverflow);
  useLayoutEffect(() => {
    if (!d.current) return;
    let {
      width
    } = d.current.getBoundingClientRect();
    let i = -parseInt(f) + parseInt("1px");
    let n = 0;
    for (let r of reactions) {
      let a = c.current[r.emoji];
      if (!a) return;
      if ((i += parseInt(f) + a.getBoundingClientRect().width) > width || n === reactions.length - 1 && i + 40 + parseInt(f) > width) break;
      n += 1;
    }
    m(n);
  }, [reactions]);
  let A = null === p ? null : reactions.length - p;
  let y = reactions.map((t, i) => {
    let r = onClickExisting ? e => onClickExisting(t, e) : void 0;
    return jsx(v, {
      reaction: t,
      onClick: r,
      ref: e => c.current[t.emoji] = e,
      visible: h || e.addedReaction || null === p || i < p
    }, t.emoji);
  });
  let b = !(h || e.addedReaction) && null !== A && A > 0;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: l()({
        "reactions--reactionList--ocrva": !0,
        "reactions--singleRow--qjoKE": b,
        "reactions--maxDoubleRow--1kWdX": !(h || e.addedReaction) && null === A
      }),
      ref: d,
      children: [...(prependToList ?? []), y, !b && children]
    }), b && jsx("div", {
      className: "reactions--showMoreBtn--Asxn4",
      children: jsx("button", {
        className: _,
        onClick: () => {
          g(!0);
        },
        "data-testid": "show-more-reactions-button",
        children: tx("comments.num_hidden_more", {
          numHidden: A
        })
      })
    })]
  });
}
export const ny = $$I0;
export const Kb = $$E1;