import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { R as _$$R } from "../905/256203";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { Kq } from "../figma_app/819288";
import { w4 } from "../905/445814";
import { kt } from "../figma_app/858013";
import { e as _$$e } from "../905/457828";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { l as _$$l } from "../905/767868";
import { C as _$$C } from "../905/226458";
import { sf } from "../905/929976";
import { fA } from "../figma_app/543100";
import { _6 } from "../figma_app/386952";
import { V0, dN } from "../figma_app/858344";
import { lQ } from "../905/934246";
import { atomStoreManager } from "../figma_app/27355";
import C from "classnames";
import { dN as _$$dN } from "../vendor/291472";
import { P as _$$P } from "../905/347284";
import { a as _$$a } from "../905/925868";
import { ph } from "../905/50769";
import { iX } from "../6443/426443";
import { In } from "../905/672640";
import { _ as _$$_ } from "../figma_app/433187";
var S = C;
function D({
  buttonClassName: e,
  onInsert: t,
  closeOnInsert: r
}) {
  let [i, n] = useState(null);
  let o = useRef(null);
  let l = useCallback(() => {
    o.current && n(o.current.getBoundingClientRect());
  }, [n]);
  let d = useCallback(e => {
    t(e);
    r && n(null);
  }, [t, r, n]);
  return jsxs("button", {
    className: e,
    ref: o,
    onClick: l,
    children: [jsx(In, {
      icon: "smiley-32"
    }), i && jsx(_$$_, {
      onInsert: d,
      onCancel: () => n(null),
      targetRect: i
    })]
  });
}
let M = {
  library: {
    list: () => Promise.resolve([]),
    search: () => Promise.resolve([]),
    maxResultsLength: () => 0
  }
};
function B({
  placeholder: e,
  text: t,
  onChange: r,
  maxLength: n,
  onSubmit: o,
  textAreaClassName: l
}) {
  let d = useDispatch();
  let c = atomStoreManager.get(ph);
  let [u, m] = useState(!1);
  let p = useRef(null);
  let f = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    p.current && p.current.focus();
  }, []);
  let g = Kq(t, {
    includeTrailingWhitespace: !0
  });
  return jsxs("div", {
    className: "emoji_text_area--textAreaContainer--4FHeL",
    onClick: f,
    children: [jsxs(_$$P, {
      className: S()(_$$s.flexGrow1.overflowAuto.maxWFull.borderBox.$$if(u, _$$s.bb1.bSolid.colorBorder).$, l),
      innerClassName: _$$s.hFull.$,
      children: [jsx(iX, {
        ref: p,
        className: _$$s.pt16.px16.borderBox.$$if(u, _$$s.pb4).$,
        currentOrgUsers: {
          orgUsers: {}
        },
        dispatch: d,
        editorOnClear: lQ,
        editorOnInsert: lQ,
        mentionables: M,
        messageMeta: t,
        mountInputFocused: !0,
        onCancel: lQ,
        onFocus: lQ,
        onSubmit: o ?? lQ,
        onUpdateTextArea: lQ,
        placeholderText: e,
        setIsEditorFocused: lQ,
        submitOnEnter: !1,
        typeahead: c,
        updateMessage: ([e, t]) => {
          r(e);
        }
      }), jsx(_$$a, {
        onInitialLoad: e => m(!e),
        onIntersectionChange: e => m(!e.isIntersecting)
      })]
    }), jsxs("div", {
      className: _$$s.flex.justifyBetween.itemsCenter.pl12.pr16.py12.$,
      children: [jsx(D, {
        buttonClassName: "emoji_text_area--emojiPickerButton--CGYqF",
        onInsert: e => {
          if (p.current) {
            let t = _$$dN.get(e.id);
            t && (p.current.insertEmoji(t), p.current.focus());
          }
        },
        closeOnInsert: !0
      }), n && jsxs("div", {
        className: _$$s.$$if(g > n, _$$s.colorTextDanger, _$$s.colorTextSecondary).cursorDefault.$,
        children: [g, "/", n]
      })]
    })]
  });
}
export function $$U0({
  title: e,
  confirmText: t,
  onSubmit: r,
  file: i,
  initialDescription: u,
  warningContent: b,
  open: w,
  onClose: T
}) {
  let [E, I] = useState(u ?? []);
  let [N, C] = useState(!1);
  let S = fA(i);
  let k = _$$l(i.folder_id);
  let R = Kq(E, {
    includeTrailingWhitespace: !0
  });
  let A = R <= 100 && R > 0;
  let O = useCallback(async () => {
    if (A) try {
      C(!0);
      await r(E);
      T();
    } finally {
      C(!1);
    }
  }, [r, A, T, E]);
  let F = useModalManager({
    open: w,
    onClose: T
  });
  let P = _$$C(S);
  let L = jsxs(Fragment, {
    children: [jsxs("div", {
      className: _$$s.p16.gap16.flex.flexColumn.$,
      children: [jsxs("div", {
        className: _$$s.flex.flexColumn.gap16.$,
        children: [jsx("div", {
          children: jsx(_$$e, {
            tile: S,
            borderRadius: 6
          })
        }), jsxs("div", {
          className: "x78zum5 x1q0g3np x1v2ro7d x6s0dn4",
          children: [jsx(w4, {
            size: 16,
            type: P
          }), jsxs("div", {
            className: _$$s.flex.flexColumn.gap2.flexGrow1.justifyCenter.overflowHidden.cursorDefault.$,
            children: [jsx("div", {
              ...Ay.props($.title),
              children: i.name
            }), "loaded" === k.status && k.data ? jsx("div", {
              ...Ay.props($.subtitle),
              children: k.data
            }) : null]
          })]
        })]
      }), jsx(B, {
        placeholder: getI18nString("file_browser.pinning.pin_modal.description_textarea_placeholder"),
        text: E,
        onChange: I,
        onSubmit: O,
        maxLength: 100,
        textAreaClassName: _$$s.maxH100.$
      })]
    }), b ? jsxs("div", {
      className: _$$s.colorBgWarningTertiary.px16.py12.flex.columnGap8.$,
      children: [jsx(_$$R, {
        className: _$$s.flexShrink0.$
      }), jsx("span", {
        children: b
      })]
    }) : null]
  });
  return jsx(bL, {
    manager: F,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: e
        })
      }), jsx(nB, {
        padding: 0,
        children: L
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: T,
            children: renderI18nText("modal.cancel")
          }), N ? jsx($n, {
            disabled: !0,
            children: jsx(kt, {
              className: _$$s.colorIconOnbrand.$
            })
          }) : jsx($n, {
            disabled: !A,
            variant: "primary",
            onClick: O,
            children: t
          })]
        })
      })]
    })
  });
}
export function $$W1(e, t) {
  let r = useDispatch();
  let a = _6();
  return useCallback(s => {
    let i;
    ("workspace" !== a.view || a.subView !== V0.DIRECTORY) && (i = {
      text: getI18nString("file_browser.pinning.pin_modal.confirmation_bell.view_workspace"),
      action: () => {
        r(sf({
          view: "workspace",
          subView: V0.DIRECTORY,
          workspaceId: s,
          selectedTab: dN.TEAMS
        }));
      }
    });
    r(VisualBellActions.enqueue({
      type: t,
      message: e,
      button: i
    }));
  }, [r, e, t, a]);
}
let $ = {
  title: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  subtitle: {
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
export const N = $$U0;
export const p = $$W1;