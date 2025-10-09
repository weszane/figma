import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { R as _$$R } from "../905/256203";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { countGraphemes } from "../figma_app/819288";
import { w4 } from "../905/445814";
import { LoadingSpinner } from "../figma_app/858013";
import { e as _$$e } from "../905/457828";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { l as _$$l } from "../905/767868";
import { C as _$$C } from "../905/226458";
import { selectViewAction } from "../905/929976";
import { createFileTile } from "../figma_app/543100";
import { getSelectedView } from "../figma_app/386952";
import { DUserRole, TGroupType } from "../figma_app/858344";
import { noop } from 'lodash-es';
import { atomStoreManager } from "../figma_app/27355";
import C from "classnames";
import { dN as _$$dN } from "../vendor/291472";
import { RecordingScrollContainer } from "../905/347284";
import { IntersectionSentinel } from "../905/925868";
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
  let d = useDispatch<AppDispatch>();
  let c = atomStoreManager.get(ph);
  let [u, m] = useState(!1);
  let p = useRef(null);
  let f = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    p.current && p.current.focus();
  }, []);
  let g = countGraphemes(t, {
    includeTrailingWhitespace: !0
  });
  return jsxs("div", {
    className: "emoji_text_area--textAreaContainer--4FHeL",
    onClick: f,
    children: [jsxs(RecordingScrollContainer, {
      className: S()(cssBuilderInstance.flexGrow1.overflowAuto.maxWFull.borderBox.if(u, cssBuilderInstance.bb1.bSolid.colorBorder).$, l),
      innerClassName: cssBuilderInstance.hFull.$,
      children: [jsx(iX, {
        ref: p,
        className: cssBuilderInstance.pt16.px16.borderBox.if(u, cssBuilderInstance.pb4).$,
        currentOrgUsers: {
          orgUsers: {}
        },
        dispatch: d,
        editorOnClear: noop,
        editorOnInsert: noop,
        mentionables: M,
        messageMeta: t,
        mountInputFocused: !0,
        onCancel: noop,
        onFocus: noop,
        onSubmit: o ?? noop,
        onUpdateTextArea: noop,
        placeholderText: e,
        setIsEditorFocused: noop,
        submitOnEnter: !1,
        typeahead: c,
        updateMessage: ([e, t]) => {
          r(e);
        }
      }), jsx(IntersectionSentinel, {
        onInitialLoad: e => m(!e),
        onIntersectionChange: e => m(!e.isIntersecting)
      })]
    }), jsxs("div", {
      className: cssBuilderInstance.flex.justifyBetween.itemsCenter.pl12.pr16.py12.$,
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
        className: cssBuilderInstance.if(g > n, cssBuilderInstance.colorTextDanger, cssBuilderInstance.colorTextSecondary).cursorDefault.$,
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
  let S = createFileTile(i);
  let k = _$$l(i.folder_id);
  let R = countGraphemes(E, {
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
      className: cssBuilderInstance.p16.gap16.flex.flexColumn.$,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.gap16.$,
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
            className: cssBuilderInstance.flex.flexColumn.gap2.flexGrow1.justifyCenter.overflowHidden.cursorDefault.$,
            children: [jsx("div", {
              ...stylex.props($.title),
              children: i.name
            }), "loaded" === k.status && k.data ? jsx("div", {
              ...stylex.props($.subtitle),
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
        textAreaClassName: cssBuilderInstance.maxH100.$
      })]
    }), b ? jsxs("div", {
      className: cssBuilderInstance.colorBgWarningTertiary.px16.py12.flex.columnGap8.$,
      children: [jsx(_$$R, {
        className: cssBuilderInstance.flexShrink0.$
      }), jsx("span", {
        children: b
      })]
    }) : null]
  });
  return jsx(ModalRootComponent, {
    manager: F,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: e
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: L
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: "secondary",
            onClick: T,
            children: renderI18nText("modal.cancel")
          }), N ? jsx(Button, {
            disabled: !0,
            children: jsx(LoadingSpinner, {
              className: cssBuilderInstance.colorIconOnbrand.$
            })
          }) : jsx(Button, {
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
  let r = useDispatch<AppDispatch>();
  let a = getSelectedView();
  return useCallback(s => {
    let i;
    ("workspace" !== a.view || a.subView !== DUserRole.DIRECTORY) && (i = {
      text: getI18nString("file_browser.pinning.pin_modal.confirmation_bell.view_workspace"),
      action: () => {
        r(selectViewAction({
          view: "workspace",
          subView: DUserRole.DIRECTORY,
          workspaceId: s,
          selectedTab: TGroupType.TEAMS
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
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  subtitle: {
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
export const N = $$U0;
export const p = $$W1;
