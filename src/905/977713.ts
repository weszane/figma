import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { N as _$$N } from '../905/7587';
import { v as _$$v } from '../905/213481';
import { getI18nString } from '../905/303541';
import { _Z, LI, ox, wr, Yt } from '../905/319777';
import { LazyInputForwardRef } from '../905/408237';
import { A9 } from '../905/414242';
import { IconButton } from '../905/443068';
import { Button } from '../905/521428';
import { W as _$$W } from '../905/592530';
import { getVisibleTheme } from '../905/640017';
import { L as _$$L } from '../905/704296';
import { j as jaa } from '../905/834956';
import { useDropdown } from '../905/848862';
import { k as _$$k } from '../905/888808';
import { A as _$$A } from '../905/891805';
import { a as _$$a } from '../905/964520';
import { h as _$$h } from '../905/994594';
import { atom, useAtomValueAndSetter } from '../figma_app/27355';
import { AF, Nx } from '../figma_app/346422';
import { throwTypeError } from '../figma_app/465776';
import { useCurrentFileKey } from '../figma_app/516028';
import { $P, $t, Aw, b6, Hg, ij, L0, Lz, Pe, qf, Ri, ve, w4, yh, Z9 } from '../figma_app/770359';
import { BrowserInfo } from '../figma_app/778880';
import { setupMenu, MenuRootComp, MenuContainerComp, MenuSubText, MenuItemTrail, MenuItemComp, MenuGroupComp } from '../figma_app/860955';
import { isInteractionPathCheck } from '../figma_app/897289';
import { useDispatch } from 'react-redux';
var C = (e => (e.MATCH_CASE = 'MATCH_CASE', e.USE_REGEX = 'USE_REGEX', e.MATCH_WHOLE_WORDS = 'MATCH_WHOLE_WORDS', e))(C || {});
function T(e) {
  switch (e) {
    case 'MATCH_CASE':
      return 'matchCase';
    case 'USE_REGEX':
      return 'useRegex';
    case 'MATCH_WHOLE_WORDS':
      return 'matchWholeWords';
    default:
      throw new Error(`Unknown search option type: ${e}`);
  }
}
let k = atom({
  matchCase: !1,
  useRegex: !1,
  matchWholeWords: !1
});
function R({
  viewRef: e,
  onClose: t,
  inputRef: i
}) {
  let [s, o] = useState('');
  let [l, c] = useState('');
  let [u, R] = useState(!1);
  let [N, P] = useAtomValueAndSetter(k);
  let O = useRef(null);
  let D = useDispatch<AppDispatch>();
  let L = useDropdown('search-options-dropdown');
  let [F, M] = useState(0);
  let [j, U] = useState(0);
  let B = useRef(new Map());
  let V = useCallback(() => {
    e.current && (M(0), U(0), B.current.clear(), e.current?.dispatch({
      selection: {
        anchor: 0,
        head: 0
      }
    }));
  }, [e]);
  let G = useCallback(() => {
    if (!e.current || B.current.size === 0) return;
    let t = e.current.state;
    let i = B.current.get(t.selection.main.from);
    if (void 0 !== i) {
      M(i.matchIndex);
      let n = t.doc.lineAt(t.selection.main.from);
      e.current.dispatch({
        effects: Lz.scrollIntoView(n.from, {
          y: 'center'
        })
      });
    }
  }, [e]);
  let z = useCallback(() => {
    let t;
    let i;
    if (!e.current) return;
    if (!s) {
      V();
      return;
    }
    let n = new L0({
      search: s,
      caseSensitive: N.matchCase,
      regexp: N.useRegex,
      wholeWord: N.matchWholeWords,
      replace: l
    });
    e.current?.dispatch({
      effects: [Ri.of(n)]
    });
    let r = e.current.state;
    B.current.clear();
    let o = 0;
    let d = n.getCursor(r);
    let c = d.next();
    for (; !c.done;) {
      o++;
      B.current.set(c.value.from, {
        matchIndex: o,
        to: c.value.to
      });
      c = d.next();
    }
    if (U(o), o === 0) {
      V();
      return;
    }
    let u = r.doc.lineAt(r.selection.main.from);
    let p = !1;
    for (let e = u.from; e <= u.to; e++) {
      let n = B.current.get(e);
      if (n) {
        p = !0;
        t = e;
        i = n.to;
        break;
      }
    }
    p ? t && i && e.current.dispatch({
      selection: {
        anchor: t,
        head: i
      }
    }) : Hg(e.current);
    G();
  }, [e, s, N.matchCase, N.useRegex, N.matchWholeWords, l, G, V]);
  useEffect(() => {
    i?.current?.focus();
  }, [i]);
  useEffect(() => {
    z();
  }, [N, s, l, z]);
  let H = e => {
    if (e.stopPropagation(), (e.metaKey || e.ctrlKey) && e.key === 'f') {
      e.preventDefault();
    }
  };
  let W = () => {
    s && void 0 !== l && e.current && (Aw(e.current), z());
  };
  let K = () => {
    s && void 0 !== l && e.current && (yh(e.current), z());
  };
  let Y = [{
    displayText: getI18nString('sites.code_component.search.match_case'),
    isChecked: N.matchCase,
    name: C.MATCH_CASE
  }, {
    displayText: getI18nString('sites.code_component.search.use_regex'),
    isChecked: N.useRegex,
    name: C.USE_REGEX
  }, {
    displayText: getI18nString('sites.code_component.search.match_whole_words'),
    isChecked: N.matchWholeWords,
    name: C.MATCH_WHOLE_WORDS
  }];
  let q = jsxs(Fragment, {
    children: [jsx(IconButton, {
      'ref': O,
      'aria-expanded': !1,
      'aria-label': getI18nString('sites.code_component.search.search_options'),
      'onClick': e => {
        L.toggle({});
      },
      'children': jsx(_$$A, {})
    }), L.showing && O.current && jsx(jaa, {
      items: Y,
      onSelectItem: e => {
        if (e.name) {
          let t = T(e.name);
          P(e => ({
            ...e,
            [t]: !e[t]
          }));
        }
      },
      parentRect: O.current.getBoundingClientRect(),
      showPoint: !0,
      shouldUsePortal: !0,
      dispatch: D
    })]
  });
  let $ = useCallback(() => {
    e.current && (Hg(e.current), G());
  }, [e, G]);
  let Z = useCallback(() => {
    e.current && (ve(e.current), G());
  }, [e, G]);
  let X = jsxs('div', {
    className: 'x78zum5 x1q0g3np x1yjdb4r x1jnr06f',
    children: [jsxs('div', {
      className: 'x1v8gsql xxk0z11 x1n3k48f x78zum5 x6s0dn4 xilkfi8 x1cmmqis x19y5rnk x3hja5i x5xtlel x1iyjqo2 xg2d0mh',
      children: [jsx(_$$h, {}), jsx(LazyInputForwardRef, {
        'className': 'x12m7bs9 x1v8gsql x1iyjqo2 xeuugli',
        'ref': i,
        'data-testid': 'code-search-input',
        'placeholder': getI18nString('fullscreen_actions.find'),
        'value': s,
        'onChange': e => {
          o(e.target.value);
        },
        'onKeyDown': e => {
          H(e);
          e.key === 'Enter' && $();
        }
      }), jsx('span', {
        className: 'x1n0bwc9 xuxw1ft x1ug7bdz',
        children: getI18nString('sites.code_component.search.num_matches', {
          matchIndex: F,
          totalMatches: j
        })
      })]
    }), jsx(IconButton, {
      'aria-label': getI18nString('sites.code_component.search.find_previous'),
      'onClick': Z,
      'children': jsx(_$$N, {})
    }), jsx(IconButton, {
      'aria-label': getI18nString('sites.code_component.search.find_next'),
      'onClick': $,
      'children': jsx(_$$W, {})
    }), q, jsx(IconButton, {
      'aria-label': getI18nString('common.close'),
      'onClick': t,
      'children': jsx(_$$L, {})
    })]
  });
  let Q = jsx('div', {
    className: 'x1q0g3np x1v8gsql xxk0z11 x1n3k48f x78zum5 x6s0dn4 xilkfi8 x1cmmqis x19y5rnk x3hja5i x5xtlel x1iyjqo2 xg2d0mh',
    children: jsx(LazyInputForwardRef, {
      className: 'x12m7bs9 x1v8gsql x1iyjqo2 xeuugli',
      placeholder: getI18nString('sites.code_component.search.replace_placeholder'),
      value: l,
      onChange: e => {
        c(e.target.value);
      },
      onKeyDown: e => {
        H(e);
        e.key === 'Enter' && (e.metaKey || e.ctrlKey ? K() : W(), e.preventDefault());
      }
    })
  });
  let J = jsx('div', {
    className: 'x78zum5 x1q0g3np x1yjdb4r x1jnr06f xk80jj8 x1a02dak',
    children: Y.map(e => e.isChecked ? jsx('div', {
      children: jsx(_$$v, {
        size: 'md',
        onClose: () => {
          let t = T(e.name);
          P(e => ({
            ...e,
            [t]: !e[t]
          }));
        },
        hasCloseButton: !0,
        children: e.displayText
      })
    }, e.name) : null)
  });
  let ee = j === 0 || l === '';
  let et = jsxs('div', {
    className: 'x78zum5 x1q0g3np x1yjdb4r x1jnr06f x13a6bvl',
    children: [jsx(Button, {
      variant: 'secondary',
      onClick: W,
      disabled: ee,
      children: getI18nString('sites.code_component.search.replace_next')
    }), jsx(Button, {
      variant: 'secondary',
      onClick: K,
      disabled: ee,
      children: getI18nString('sites.code_component.search.replace_all')
    })]
  });
  return jsx('div', {
    'className': 'x78zum5 x13a6bvl',
    'data-testid': 'code-search-panel',
    'children': jsxs('div', {
      className: 'x78zum5 x1q0g3np x19y5rnk x1yjdb4r x1bamp8i x10l6tqk x9ri80z x1y1aw1k xwib8y2 xy13l1i x163pfp x1jnr06f',
      children: [jsx('div', {
        className: 'xvijh9v',
        children: jsx(IconButton, {
          'aria-label': getI18nString('sites.code_component.search.replace'),
          'onClick': () => R(!u),
          'children': u ? jsx(_$$k, {}) : jsx(_$$a, {})
        })
      }), jsxs('div', {
        className: 'x78zum5 xdt5ytf x167g77z',
        children: [X, u && jsxs('div', {
          className: 'x78zum5 xdt5ytf x167g77z',
          children: [Q, J, et]
        })]
      })]
    })
  });
}
function O({
  manager: e,
  hasSelectedRange: t,
  codeMirrorViewRef: i,
  formatCode: r
}) {
  let a = BrowserInfo.windows ? 'Ctrl+' : '\u2318';
  let s = () => {
    let e = i?.current?.state;
    if (e) {
      return {
        selection: e.selection.main,
        text: e.sliceDoc(e.selection.main.from, e.selection.main.to)
      };
    }
  };
  return jsx(MenuRootComp, {
    manager: e,
    children: jsxs(MenuContainerComp, {
      'data-testid': 'code-editor-context-menu',
      'children': [jsxs(MenuGroupComp, {
        children: [jsxs(MenuItemComp, {
          disabled: !t,
          onClick: () => {
            let e = s();
            if (!e) return;
            navigator.clipboard.writeText(e.text);
            let t = [{
              changes: [{
                from: e.selection.from,
                to: e.selection.to,
                insert: ''
              }]
            }];
            i?.current?.dispatch(i?.current?.state.update(...t));
          },
          children: [getI18nString('sites.code_component.editor_context_menu.cut'), jsx(MenuItemTrail, {
            children: jsx(MenuSubText, {
              children: `${a}X`
            })
          })]
        }), jsxs(MenuItemComp, {
          'data-testid': 'code-editor-context-menu-copy',
          'disabled': !t,
          'onClick': () => {
            if (!t) return;
            let e = s();
            e && navigator.clipboard.writeText(e.text);
          },
          'children': [getI18nString('sites.code_component.editor_context_menu.copy'), jsx(MenuItemTrail, {
            children: jsx(MenuSubText, {
              children: `${a}C`
            })
          })]
        }), jsxs(MenuItemComp, {
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              let t = s();
              if (!t) return;
              let n = [{
                changes: [{
                  from: t.selection.from,
                  to: t.selection.to,
                  insert: e
                }]
              }];
              i?.current?.dispatch(i?.current?.state.update(...n));
            });
          },
          children: [getI18nString('sites.code_component.editor_context_menu.paste'), jsx(MenuItemTrail, {
            children: jsx(MenuSubText, {
              children: `${a}V`
            })
          })]
        }), jsxs(MenuItemComp, {
          onClick: () => {
            i?.current?.dispatch(i?.current?.state.update({
              selection: {
                anchor: 0,
                head: i?.current?.state.doc.length
              }
            }));
          },
          children: [getI18nString('sites.code_component.editor_context_menu.select_all'), jsx(MenuItemTrail, {
            children: jsx(MenuSubText, {
              children: `${a}A`
            })
          })]
        })]
      }), jsx(MenuGroupComp, {
        children: jsx(MenuItemComp, {
          'data-testid': 'code-editor-context-menu-format-code',
          'onClick': () => {
            r?.();
          },
          'children': getI18nString('sites.code_component.editor_context_menu.format_code')
        })
      })]
    })
  });
}
let F = new Map();
export function $$M0({
  fileName: e,
  codeFileGuid: t,
  retainEditorState: i = !1,
  fullHeight: p,
  maxHeight: m,
  maxWidth: h,
  width: g,
  extensions: f,
  disableUndoRedoExtension: _,
  initialText: A,
  onChange: y,
  editable: b,
  formatCode: v,
  placeholder: I = '',
  showStats: E = !0,
  showGutters: x = !0,
  largeFont: S = !1
}) {
  let [w, C] = useState(null);
  let [T, k] = useState(getI18nString('sites.code_component.editor_statistics_line_column', {
    line: 1,
    column: 1
  }));
  let [P, M] = useState(!1);
  let [j, U] = useState(!1);
  let B = useRef(null);
  let V = useRef();
  let {
    getContextMenuTriggerProps,
    manager
  } = setupMenu();
  let H = useCurrentFileKey();
  let W = useMemo(() => Lz.theme({
    '&': {
      maxHeight: m ?? null,
      maxWidth: h ?? null,
      width: g ?? null
    },
    '.cm-content': {
      padding: S ? '0' : 'var(--spacer-2) 0'
    },
    '&.cm-editor': p ? {
      height: '100%'
    } : {},
    '& .cm-scroller': p ? {
      overflow: 'auto'
    } : {
      height: '100% !important'
    },
    '.cm-gutters': x ? {} : {
      display: 'none'
    }
  }), [m, h, g, p, x, S]);
  let K = useMemo(() => w4.of([{
    key: 'Mod-f',
    run: () => (U(e => (e && B.current?.focus(), !0)), !0),
    preventDefault: !0,
    stopPropagation: !0
  }]), [U]);
  let Y = useMemo(() => $P({
    createPanel: e => ({
      dom: document.createElement('div')
    })
  }), []);
  let q = useMemo(() => Lz.updateListener.of(e => {
    let t = e.state.doc.lineAt(e.state.selection.main.from);
    let i = t.number;
    let n = e.state.sliceDoc(e.state.selection.main.from, e.state.selection.main.to);
    let r = n.split('\n');
    let a = e.state.selection.asSingle().main;
    let s = r.length > 1 ? r[r.length - 1].length : a.to - t.from + 1;
    let o = n.length;
    let l = o ? getI18nString('sites.code_component.editor_statistics_selected_length', {
      length: o
    }) : '';
    k(`${getI18nString('sites.code_component.editor_statistics_line_column', {
      line: i,
      column: s
    })}${l}`);
  }), []);
  let $ = useMemo(() => Lz.updateListener.of(e => {
    e.state.selection.main.from !== e.state.selection.main.to ? M(!0) : M(!1);
  }), []);
  let Z = useMemo(() => y ? Lz.updateListener.of(e => {
    e.docChanged && !e.transactions.some(e => e.annotation(ij)) && y(e.state.doc.toString(), e);
  }) : null, [y]);
  let X = useMemo(() => {
    if (!b) return $t.readOnly.of(!0);
  }, [b]);
  let Q = useMemo(() => {
    if (!b) {
      return Lz.theme({
        '& .cm-cursorLayer': {
          opacity: 0
        },
        '& .cm-activeLine': {
          backgroundColor: 'transparent'
        }
      });
    }
  }, [b]);
  let J = useMemo(() => wr(), []);
  let ee = getVisibleTheme();
  let et = useMemo(() => ox(ee, S), [ee, S]);
  let ei = useMemo(() => _ ? null : b6(), [_]);
  let en = useMemo(() => b ? LI(e) : [], [b, e]);
  let er = useMemo(() => i ? function (e, t) {
    let i;
    if (!e || !t) return [];
    i = e || null;
    let n = `${i || 'null'}:${t}`;
    return Z9.fromClass(class {
      constructor(e) {
        this.view = e;
        let t = F.get(n);
        t && t.selection.anchor <= e.state.doc.length && t.selection.head <= e.state.doc.length && setTimeout(() => {
          this.view.dispatch({
            selection: {
              anchor: t.selection.anchor,
              head: t.selection.head
            }
          });
          this.view.scrollDOM.scrollTop = t.scroll.top;
          this.view.scrollDOM.scrollLeft = t.scroll.left;
          t.wasFocused && this.view.focus();
        }, 0);
      }
      saveState() {
        let e = this.view.state.selection.main;
        F.set(n, {
          selection: {
            anchor: e.anchor,
            head: e.head
          },
          scroll: {
            top: this.view.scrollDOM.scrollTop,
            left: this.view.scrollDOM.scrollLeft
          },
          wasFocused: this.view.hasFocus
        });
      }
      update() {
        this.saveState();
      }
      destroy() {
        this.saveState();
      }
    });
  }(H, t) : [], [i, H, t]);
  let ea = useMemo(() => _Z(e), [e]);
  let es = useMemo(() => qf(I), [I]);
  let eo = useMemo(() => {
    let e = [es, ea, K, Y, W, q, $, er];
    for (let t of (e.push(...et), e.push(...en), ei && e.push(ei), Z && e.push(Z), X && e.push(X), Q && e.push(Q), f ?? [])) e.push(t);
    e.push(J);
    return e;
  }, [es, ea, K, Y, W, q, $, er, et, en, ei, Z, X, Q, J, f]);
  useEffect(() => {
    let e = null;
    let t = t => {
      t.type === 'DEPENDENCY_TYPES_STATUS' ? (C(t), t.status === 'finished' && V.current ? (V.current.dispatch({
        effects: [Yt.of(t)]
      }), e = setTimeout(() => {
        e = null;
        C(e => e?.status === 'finished' ? null : e);
      }, 2e3)) : e && (clearTimeout(e), e = null)) : throwTypeError(t.type);
    };
    Nx(t);
    return () => AF(t);
  }, []);
  let el = useCallback(e => {
    e.stopPropagation();
  }, []);
  let ed = w === null ? null : w.status === 'started' ? getI18nString('sites.code_component.dependency_types_status_started') : w.status === 'finished' ? getI18nString('sites.code_component.dependency_types_status_finished') : getI18nString('sites.code_component.dependency_types_status_progress', {
    downloaded: w.downloaded ?? 0,
    total: w.total ?? 0
  });
  let ec = useRef(null);
  let eu = useCallback(e => {
    ec.current && ec.current !== e && V.current && (V.current.destroy(), V.current = void 0);
    ec.current = e;
  }, [ec, V]);
  useEffect(() => {
    V.current && V.current.dispatch({
      effects: Pe.reconfigure.of(eo)
    });
  }, [eo, V]);
  useEffect(() => {
    let e = ec.current;
    if (e && !V.current) {
      let t = {
        doc: A(),
        extensions: eo
      };
      let i = $t.create(t);
      if (!V.current) {
        let t = new Lz({
          state: i,
          parent: e
        });
        t.contentDOM.setAttribute('data-testid', 'code-editor');
        V.current = t;
      }
      isInteractionPathCheck() && A9(V.current);
    }
  }, [eo, A, ec, V]);
  return jsxs(Fragment, {
    children: [jsx('div', {
      ref: eu,
      onPointerDown: el,
      style: p ? {
        height: E ? 'calc(100% - 24px)' : '100%'
      } : void 0,
      ...getContextMenuTriggerProps(),
      children: j && V.current && jsx(R, {
        viewRef: V,
        onClose: () => U(!1),
        inputRef: B
      })
    }), E && jsxs('div', {
      className: 'xtdwleo x1hr2gdg x1n0bwc9',
      children: [ed && `${ed} \xB7 `, T]
    }), jsx(O, {
      manager,
      hasSelectedRange: P,
      codeMirrorViewRef: V,
      formatCode: v
    })]
  });
}
export const d = $$M0;
