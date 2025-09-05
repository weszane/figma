import { useCallback, useRef, useEffect, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { Uz, xH } from "../905/63728";
import { Point } from "../905/736624";
import { t as _$$t } from "../905/303541";
import { CZ } from "../905/294085";
import { hO, d3, eQ, v2, G4 } from "../figma_app/545293";
import { Lo, AS, to } from "../905/156213";
import { Y5 } from "../figma_app/455680";
import { $$ } from "../figma_app/62612";
import { cq } from "../905/794154";
import { M$ } from "../figma_app/297822";
import { dd, TT, Bw } from "../figma_app/604494";
import { jsx, jsxs } from "react/jsx-runtime";
import { K as _$$K } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { generateRecordingKey } from "../figma_app/878298";
import E from "classnames";
import { s as _$$s } from "../vendor/45699";
import { P as _$$P } from "../vendor/348225";
import { h as _$$h } from "../905/207101";
import { s as _$$s2 } from "../cssbuilder/589278";
import { n as _$$n } from "../905/734251";
import { sx as _$$sx } from "../905/941192";
import { Dm } from "../figma_app/8833";
import { O1, KD } from "../figma_app/317394";
import { Ju } from "../905/102752";
import { kz, s3 } from "../figma_app/171177";
import { p as _$$p } from "../905/133304";
import { I as _$$I } from "../905/341245";
import { DH } from "../905/508893";
import { Ay } from "../905/612521";
import { X } from "../905/123783";
import { O as _$$O } from "../905/947996";
import { Gt } from "../905/175194";
import { j as _$$j } from "../905/645912";
var x = E;
function B(e) {
  let t = md(hO.currentSearchAtom);
  let i = md(hO.currentCommunitySearchAtom);
  let r = md(hO.sortByAtom);
  let l = md(CZ);
  let d = X();
  let c = md(dd);
  return useCallback((n, s) => {
    let u = "hub-file-fragment" === n.type;
    let m = u ? i : t;
    let h = {
      ...d3(e, c, m ? m.searchId : "", m ? m.input : null, d, l, u),
      fragment_node_id: n.node_id,
      fragment_position: s,
      fragment_last_edited_at: n.last_edited_at,
      fragment_score: n.score
    };
    switch (n.type) {
      case "fig-file-fragment":
        h.fragment_file_key = n.file_key;
        h.sort_by = eQ(r);
        sx("Fragment search file opened", h);
        break;
      case "hub-file-fragment":
        h.hub_file_id = n.hub_file_id;
        sx("Fragment search file opened", h);
        break;
      default:
        throwTypeError(n);
    }
    Ay.redirect(n.url, "_blank");
  }, [e, c, d, l, r, t, i]);
}
function V({
  children: e,
  radius: t,
  onClick: i
}) {
  return jsx("button", {
    className: _$$s2.colorBg.flex.overflowHidden.$$case([["large" === t, _$$s2.radiusLarge]]).$,
    style: _$$sx.add({
      boxShadow: "var(--elevation-100-canvas)"
    }).$,
    onClick: i,
    children: e
  });
}
function z({
  entryPoint: e,
  fragments: t,
  activeFragment: i,
  setActiveFragment: r
}) {
  let a = md(TT);
  let o = md(Bw);
  let d = a ? o[a] ?? null : null;
  let c = d?.primaryAction;
  let u = d?.secondaryAction;
  let p = d?.tertiaryAction;
  _$$I({
    action: c,
    target: i.keyboardNavigationItem,
    active: !0
  });
  _$$I({
    action: u,
    target: i.keyboardNavigationItem,
    active: !0
  });
  _$$I({
    action: p,
    target: i.keyboardNavigationItem,
    active: !0
  });
  let m = useCallback(() => {
    r(e => {
      let i = e.keyboardNavigationItem?.item.getItemToTheLeft();
      let n = e.index - 1;
      return !i || n < 0 ? e : (i.fauxFocus(), {
        fragment: t[n],
        index: n,
        keyboardNavigationItem: {
          item: i,
          index: e.index,
          element: null
        }
      });
    });
  }, [t, r]);
  let h = useCallback(() => {
    r(e => {
      let i = e.keyboardNavigationItem?.item.getItemToTheRight();
      let n = e.index + 1;
      return !i || n >= t.length ? e : (i.fauxFocus(), {
        fragment: t[n],
        index: n,
        keyboardNavigationItem: {
          item: i,
          index: e.index,
          element: null
        }
      });
    });
  }, [t, r]);
  kz(Uz.LEFT_ARROW, m);
  kz(Uz.RIGHT_ARROW, h);
  return jsx(H, {
    entryPoint: e,
    activeFragment: i
  });
}
function H({
  entryPoint: e,
  activeFragment: t
}) {
  let i = t.fragment;
  let r = B(e);
  let a = useRef(null);
  return (useEffect(() => {
    a.current && !a.current.contains(document.activeElement) && a.current.focus();
  }), i.thumbnail_url) ? jsxs("div", {
    className: _$$s2.hFull.flex.flexColumn.colorBgSecondary.$,
    ref: a,
    tabIndex: 0,
    "data-testid": "peek-view-viewer",
    children: [jsxs("div", {
      className: _$$s2.relative.flex1.minH0.$,
      children: [jsx(DH, {
        imageSrc: i.thumbnail_url,
        shouldZoomToStart: !1,
        shouldWheelPan: !0,
        imageScale: 1,
        enableZoomKeyControls: !0,
        enableZoomControls: !0
      }, `details::${i.thumbnail_url}`), jsx("div", {
        className: _$$s2.absolute.$,
        style: _$$sx.add({
          top: "16px",
          left: "16px"
        }).$,
        children: jsx(V, {
          radius: "large",
          onClick: () => r(i, t.index),
          children: jsxs("div", {
            style: _$$sx.add({
              width: "30em"
            }).$,
            children: [jsx("div", {
              className: _$$s2.flex.flexColumn.itemsStart.p12.gap4.$,
              children: jsxs(_$$O.Container, {
                children: [jsx(_$$O.Title, {
                  size: "large",
                  dataTestId: "fragmentSearchPeekViewTitle",
                  children: i.file_name
                }), jsx(_$$O.IconRow, {
                  iconName: "frame",
                  children: i.fragment_name
                }), jsx(_$$O.EditInfo, {
                  editor: {
                    name: i.editor_name,
                    imageUrl: i.editor_img_url
                  },
                  lastEditedAt: i.last_edited_at,
                  avatarBoundingBoxEqualsIcon: !0
                })]
              })
            }), jsx("hr", {
              className: _$$s2.m0.$
            }), jsx("div", {
              className: _$$s2.p12.$,
              children: jsx(_$$O.Container, {
                children: jsx(_$$O.IconRow, {
                  iconName: "page",
                  children: i.containing_page_name
                })
              })
            })]
          })
        })
      })]
    }), jsx(_$$p, {
      horizontalPadding: 16
    })]
  }) : null;
}
let K = Ju(function ({
  fragments: e,
  initialActiveFragment: t,
  onClose: i,
  entryPoint: r
}) {
  let a = useRef(null);
  let s = _$$s();
  let o = _$$s();
  let [l, d] = useState(t);
  _$$h(() => {
    s.start({
      scale: 1
    }, {
      ease: "easeOut",
      duration: .2
    });
    o.start({
      opacity: 1
    }, {
      ease: "easeOut",
      duration: .2
    });
  });
  let u = useCallback(() => ((async () => {
    await Promise.all([s.start({
      scale: 0,
      filter: "blur(8px)"
    }, {
      ease: "easeIn",
      duration: .1
    }), o.start({
      opacity: 0
    }, {
      ease: "easeInOut",
      duration: .15
    })]);
    i(l.fragment, l.index);
  })(), !0), [i, s, o, l]);
  O1(u, KD.MODAL);
  return jsxs(s3, {
    name: Y,
    recordingKey: Y,
    forwardUnhandledEventsToFullscreen: !1,
    children: [jsx(_$$P.div, {
      className: x()(_$$s2.fixed.top0.right0.bottom0.left0.zIndexModal.$),
      style: _$$sx.add({
        backgroundColor: "var(--color-modalbackdrop, $figmaFGBlack3)"
      }).$,
      animate: o,
      initial: {
        opacity: 0
      }
    }), jsx(_$$n.div, {
      className: x()("fragment_search_peek_modal--base--MOQE-", _$$s2.p32.fixed.top0.right0.bottom0.left0.zIndexModal.$, Dm),
      "data-testid": "fragment-search-peek-modal",
      onMouseDown: e => {
        e.preventDefault();
        u();
      },
      children: jsxs(_$$P.div, {
        tabIndex: 0,
        className: x()(Gt, _$$s2.overflowHidden.relative.$),
        style: _$$sx.add({
          aspectRatio: "16 / 9",
          width: "100%",
          maxHeight: "100%"
        }).$,
        onMouseDown: e => e.stopPropagation(),
        ref: a,
        initial: {
          scale: .25,
          filter: "blur(0px)"
        },
        animate: s,
        children: [jsx(z, {
          activeFragment: l,
          setActiveFragment: d,
          fragments: e,
          entryPoint: r
        }), jsx("div", {
          className: _$$s2.absolute.$,
          style: _$$sx.add({
            top: "13px",
            right: "13px"
          }).$,
          children: jsx(_$$K, {
            onClick: u,
            "aria-label": _$$t("fragment_search.close_modal"),
            recordingKey: generateRecordingKey(Y, "closeButton"),
            children: jsx(_$$A, {})
          })
        })]
      })
    })]
  });
}, v2);
let Y = "fragmentSearchPeekModal";
export function $$$0(e, t, i, y, b) {
  let v = _$$j(i, b);
  let I = B(i);
  let E = md(hO.sortByAtom);
  let x = md(CZ);
  let S = useDispatch();
  let w = X();
  let C = md(dd);
  let {
    close
  } = cq();
  return useCallback((n, r, s, u) => {
    let f = {
      text: i === G4.FIGMAKE ? _$$t("sites.panel.make.attach_design") : _$$t("assets_in_actions.fragment_search.insert"),
      shortcuts: y ? [] : [{
        key: Uz.ENTER
      }],
      onAction: async () => {
        let e = Y5.getViewportInfo();
        let t = {
          x: e.width / 2,
          y: e.height / 2
        };
        let a = $$(e, t);
        await v({
          fragment: n,
          dropPosition: new Point(a.x - n.width / 2, a.y - n.height / 2),
          percentageOffset: new Point(),
          insertAsChildOfCanvas: !0,
          analyticsProps: {
            fragmentPosition: r
          }
        });
        w && S(Lo());
        i === G4.FIGMAKE && S(AS());
        close();
      }
    };
    let A = "hub-file-fragment" === n.type;
    let b = (e, t, n) => ({
      ...d3(i, C, s ? s.searchId : "", s ? s.input : null, e, x, A),
      fragment_node_id: t.node_id,
      fragment_position: n,
      fragment_last_edited_at: t.last_edited_at,
      fragment_score: t.score
    });
    let k = (e, i) => {
      let n = b(!0, e, i);
      switch (e.type) {
        case "fig-file-fragment":
          n.sort_by = eQ(E);
          n.fragment_file_key = e.file_key;
          sx("Fragment search preview closed", n);
          break;
        case "hub-file-fragment":
          n.hub_file_id = e.hub_file_id;
          sx("Fragment search preview closed", n);
          break;
        default:
          throwTypeError(e);
      }
      S(Lo());
      t.current?.focus();
    };
    let R = b(!1, n, r);
    let N = {
      text: _$$t("assets_in_actions.fragment_search.preview"),
      shortcuts: y ? [] : [{
        key: Uz.ENTER,
        modifier: [xH.SHIFT]
      }],
      onAction: ({
        target: e
      }) => {
        switch (n.type) {
          case "fig-file-fragment":
            R.fragment_file_key = n.file_key;
            R.sort_by = eQ(E);
            sx("Fragment search preview opened", R);
            break;
          case "hub-file-fragment":
            R.hub_file_id = n.hub_file_id;
            sx("Fragment search preview opened", R);
            break;
          default:
            throwTypeError(n);
        }
        S(to({
          type: K,
          data: {
            fragments: u,
            initialActiveFragment: {
              fragment: n,
              index: r,
              keyboardNavigationItem: e
            },
            onClose: k,
            entryPoint: i
          },
          showModalsBeneath: !0
        }));
      }
    };
    let P = {
      text: _$$t("assets_in_actions.fragment_search.close"),
      shortcuts: y ? [] : [{
        key: Uz.ESCAPE
      }],
      onAction: () => {
        k(n, r);
      }
    };
    let O = {
      text: A ? _$$t("assets_in_actions.community_section.go_to_file_text") : _$$t("assets_in_actions.fragments_section.go_to_file_text"),
      shortcuts: y ? [] : [{
        key: Uz.ENTER,
        modifier: [xH.META]
      }],
      onAction: () => {
        I(n, r);
      }
    };
    let D = w ? O : N;
    let L = w ? P : O;
    return {
      primaryAction: M$(f, e),
      secondaryAction: M$(D, e),
      tertiaryAction: M$(L, e)
    };
  }, [S, x, I, v, w, C, E, t, close, i, y, e]);
}
export const r = $$$0;