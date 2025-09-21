import m from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { KeyCodes } from '../905/63728';
import { _ as _$$_ } from '../905/136246';
import { ServiceCategories as _$$e } from '../905/165054';
import { Y as _$$Y } from '../905/193977';
import { h as _$$h } from '../905/207101';
import { getI18nString, renderI18nText } from '../905/303541';
import { B as _$$B2 } from '../905/388732';
import { IconButton } from '../905/443068';
import { k as _$$k } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { O8, ov, rj, yh } from '../905/462694';
import { C as _$$C } from '../905/520159';
import { encodeBase64, encodeStringToBase64 } from '../905/561685';
import { $P } from '../905/590676';
import { z as _$$z } from '../905/654860';
import { F as _$$F } from '../905/680873';
import { logInfo } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { cq } from '../905/794154';
import { n as _$$n } from '../905/895449';
import { styleBuilderInstance } from '../905/941192';
import { A as _$$A2 } from '../1617/325876';
import { A as _$$A3 } from '../1617/495612';
import { A as _$$A } from '../5724/594037';
import { s as _$$s } from '../cssbuilder/589278';
import { Dm } from '../figma_app/8833';
import { useAtomValueAndSetter } from '../figma_app/27355';
import { kz } from '../figma_app/171177';
import { debug, assert, throwTypeError } from '../figma_app/465776';
import { Tk, ZR } from '../figma_app/575164';
import { Q8 } from '../figma_app/604494';
import { wC } from '../figma_app/632248';
import { filterNotNullish } from '../figma_app/656233';
import { $L } from '../figma_app/737746';
import { useHandleChangeEvent } from '../figma_app/878298';
let h = m;
let U = 'parameter_entry--keyContainer--ytJCE parameter_entry--centerItemsVertically--wrvs-';
let B = 'parameter_entry--keyLabel--gQEn3';
var W = (e => (e.FREEFORM = 'freeform', e.SKIP = 'skip', e.TRY_AGAIN = 'tryAgain', e.KEEP = 'keep', e.FEEDBACK = 'feedback', e))(W || {});
export function $$K0(e) {
  let t;
  let {
    initialParameterValues,
    actionIcon,
    parameters,
    handler,
    displayName,
    terminate,
    hideOnRun = !0,
    actionLabel
  } = e;
  let S = getI18nString('qa.parameter.loading.plugin');
  let w = getI18nString('qa.parameter.loading.suggestions');
  let N = useRef(null);
  let D = useRef(0);
  let V = useRef(null);
  let G = useRef(!1);
  let z = useRef(!1);
  let H = useRef(!1);
  let [W, K] = useState({
    type: 'LOADING',
    message: w
  });
  let [Z, X] = useState(initialParameterValues ?? {});
  let Q = _$$F(Z);
  let J = _$$F(parameters);
  let [ee, et] = useState(null);
  let [ei, en] = useAtomValueAndSetter(Q8);
  let [er, ea] = useState(!1);
  let es = useRef(!1);
  let {
    pop,
    close
  } = cq();
  useEffect(() => () => {
    G.current || terminate();
  }, [terminate]);
  useEffect(() => {
    handler && !es.current && (trackEventAnalytics(yh, ov({
      ...e,
      qaVersion: $L
    })), es.current = !0);
  }, [handler, e]);
  let ed = useCallback((t, i) => {
    if (H.current) return;
    let n = O8(t, i);
    G.current && n.requiredEntered !== n.requiredCount && (logInfo('Parameter Entry', 'parmeter mismatch', {
      requiredParameters: t,
      parameterValues: i
    }), reportError(_$$e.AI_FOR_PRODUCTION, new Error('Parameter entry ran successfully with parameters, but not all parameters were recorded')));
    let r = ov({
      ...e,
      qaVersion: $L
    });
    trackEventAnalytics(rj, {
      ...r,
      success: G.current,
      parametersEntered: n.entered,
      requiredParametersEntered: n.requiredEntered,
      optionalParametersEntered: n.optionalEntered
    });
    H.current = !0;
  }, [e]);
  _$$h(() => () => {
    ed(J.current, Q.current);
  });
  _$$z();
  let ec = () => {
    let e = null;
    let t = V.current;
    if (eh === 'middle') {
      if (q(t), t === 0) {
        pop();
        return;
      }
      e = t - 1;
    } else if (eh === 'final') {
      e = parameters.length - 1;
    } else {
      if (eh === 0) {
        pop();
        return;
      }
      e = eh - 1;
    }
    let i = {
      ...Z
    };
    let n = eu(e)?.key;
    n && delete i[n];
    ey(e, i);
  };
  kz(KeyCodes.BACKSPACE, e => {
    ei.length === 0 ? (e.preventDefault(), ec(), e.stopPropagation()) : (eh === 'final' || eh === 'middle') && e.preventDefault();
  });
  let eu = useCallback(e => e === 'middle' || e === 'final' ? null : parameters[e], [parameters]);
  let ep = e => {
    K(e);
  };
  let em = useCallback(e => {
    D.current++;
    let t = D.current;
    D.current === t && handler?.triggerParameterInputEvent({
      ...e,
      onSuggestions: e => {
        D.current === t && ep(e);
      }
    });
  }, [handler]);
  let [eh, eg] = useState(() => {
    let e;
    if (parameters.length === 0) {
      ef({});
      e = 'final';
    } else {
      let t = parameters.findIndex(e => e.optional);
      V.current = t < 0 ? null : t;
      let n = eu(e = initialParameterValues ? 'final' : parameters[0].optional ? 'middle' : 0);
      n && em({
        parameterValues: {},
        currentParameter: n,
        currentSearchQuery: ''
      });
    }
    return e;
  });
  function ef(e) {
    X(e);
    handler?.triggerRunEvent({
      command: 'parameters',
      parameters: e
    });
    G.current = !0;
    ed(parameters, e);
    hideOnRun && close();
  }
  function e_(e) {
    if (eh === 'middle' || eh === 'final') return [];
    let t = e.slice();
    let i = parameters[eh];
    ei.length > 0 && i.allowFreeform && t.unshift('freeform');
    let n = parameters[eh];
    ei.length === 0 && n.optional && t.unshift('skip');
    return t;
  }
  kz(KeyCodes.ENTER, e => {
    eh === 'final' && (e.preventDefault(), eA(null, 'enter'));
  }, eh === 'final');
  useEffect(() => {
    if (!handler || z.current) return;
    z.current = !0;
    let e = eu(eh);
    e && em({
      parameterValues: {},
      currentParameter: e,
      currentSearchQuery: ei
    });
  }, [eh, eu, handler, ei, em]);
  let eA = (e, t) => {
    let i;
    if (eh === 'final') {
      t === 'enter' && ef({
        ...Z
      });
      return;
    }
    let n = {
      ...Z
    };
    if (e && eh !== 'middle') {
      if (e_(W?.type === 'SUGGESTIONS' ? W.suggestions : []).length === 0) return;
      let t = parameters[eh];
      switch (e) {
        case 'skip':
        case 'keep':
        case 'feedback':
        case 'tryAgain':
          break;
        case 'freeform':
          n[t.key] = {
            name: ei
          };
          break;
        default:
          debug(W?.type !== 'LOADING', 'Selected item while loading');
          n[t.key] = e;
      }
    }
    let r = V.current;
    if (eh === 'middle') {
      if (q(r), t === 'enter') {
        ef(n);
        return;
      }
      i = r;
    } else if (eh === parameters.length - 1) {
      if (t === 'enter') {
        ef(n);
        return;
      }
      i = 'final';
    } else {
      i = r !== null && eh === r - 1 ? t === 'tab' ? r : 'middle' : eh + 1;
    }
    ey(i, n);
    N.current.focus();
  };
  function ey(e, t) {
    let i = eu(e);
    i && (logInfo('PluginParameterEntry', 'setParameterIndex', {
      nextParameter: i.name
    }), em({
      parameterValues: t,
      currentParameter: i,
      currentSearchQuery: ''
    }));
    let n = !(e === 0 && !parameters[0].optional) && er;
    N.current.focus();
    K({
      type: 'LOADING',
      message: w
    });
    en('');
    eg(e);
    X(t);
    et(null);
    ea(n);
  }
  let eb = jsx($, {
    actionIcon,
    activeParameterIndex: eh,
    displayName,
    firstOptionalIndexRef: V,
    getParameterForIndex: eu,
    hideName: er,
    onTextChange: e => {
      let t;
      if (eh === 'middle') {
        q(V.current);
        t = V.current;
      } else {
        if (eh === 'final') return;
        t = eh;
      }
      let i = parameters[t];
      K({
        type: 'LOADING',
        message: w
      });
      en(e);
      eg(t);
      em({
        parameterValues: Z,
        currentParameter: i,
        currentSearchQuery: e
      });
    },
    parameterValues: Z,
    parameters,
    placeholderWidth: ee,
    searchInputRef: N,
    searchQuery: ei,
    triggerInputEvent: em
  });
  if (handler) {
    if (eh === 'middle') {
      t = jsx(_$$B2, {
        resultCount: 1,
        maxVisibleResults: 6,
        children: jsx(_$$B2.Item, {
          primaryAction: {
            onAction: ({
              shortcut: e
            }) => {
              eA(null, e?.key === KeyCodes.TAB ? 'tab' : 'enter');
            },
            shortcuts: [{
              key: KeyCodes.ENTER
            }, {
              key: KeyCodes.TAB
            }]
          },
          ignoreFocusStyle: !0,
          actionLabel: !1,
          children: jsxs('div', {
            className: _$$s.flex.justifyCenter.itemsCenter.h32.mb4.wFull.$,
            children: [jsxs('div', {
              className: U,
              children: [jsx('div', {
                className: _$$s.colorBgTertiary.bRadius5.font11.h16.fontMedium.flex.itemsCenter.px4.mr8.$,
                children: renderI18nText('fullscreen_actions.plugin_parameters.tab')
              }), jsx('div', {
                className: B,
                children: renderI18nText('fullscreen_actions.plugin_parameters.to_enter_optional_parameters')
              })]
            }), jsxs('div', {
              className: U,
              children: [jsx('div', {
                className: _$$s.colorBgTertiary.bRadius5.font11.h16.fontMedium.flex.itemsCenter.px4.mr8.$,
                children: renderI18nText('fullscreen_actions.plugin_parameters.enter')
              }), jsx('div', {
                className: B,
                children: renderI18nText('fullscreen_actions.plugin_parameters.to_run_plugin')
              })]
            })]
          })
        })
      });
    } else if (eh === 'final') {
      t = null;
    } else {
      let e = W?.type;
      let i = null;
      switch (e) {
        case void 0:
        case null:
        case 'SUGGESTIONS':
          break;
        case 'ERROR':
        case 'LOADING':
          i = jsx('div', {
            className: Tk,
            children: W.message
          });
          break;
        default:
          throwTypeError(e);
      }
      let r = e_(W.type === 'SUGGESTIONS' ? W?.suggestions ?? [] : []);
      let a = parameters[eh];
      let l = 0;
      a.optional && !a.allowFreeform && r.length > 1 && (l = 1);
      t = jsxs(Fragment, {
        children: [jsx(_$$B2, {
          resultCount: r.length,
          primary: !0,
          defaultActiveIndex: l,
          children: r.map(e => jsx(Y, {
            item: e,
            currentParameter: a,
            searchQuery: ei,
            onSelectItem: eA,
            actionLabel
          }, e !== 'freeform' && e !== 'skip' ? e.name : e))
        }), i]
      });
    }
  } else {
    t = jsxs('div', {
      className: Tk,
      children: [jsx('div', {
        className: _$$s.mr4.$,
        style: {
          '--color-icon': 'var(--color-text-tertiary'
        },
        children: jsx(_$$k, {})
      }), S]
    });
  }
  let ev = eu(eh);
  let eI = ev?.description;
  return jsxs(_$$n, {
    height: wC,
    recordingKey: 'parameterEntry',
    children: [eb, !!eI && jsx('div', {
      'data-testid': `parameter-description-${ev?.key}`,
      'className': h()('parameter_entry--parameterDescription--cx7jk text--fontPos11--2LvXf text--_fontBase--QdLsd', _$$s.mb8.$),
      'children': eI
    }), jsx(_$$n.Body, {
      children: t
    })]
  });
}
function Y({
  searchQuery: e,
  item: t,
  currentParameter: i,
  onSelectItem: r
}) {
  let a;
  let s = '';
  t === 'skip' ? s = `Skip "${i.name}"` : t === 'freeform' ? s = e : t === 'tryAgain' ? (s = 'Try again', a = jsx(SvgComponent, {
    svg: _$$A,
    style: styleBuilderInstance.colorIcon.$
  })) : t === 'keep' ? (s = 'Keep', a = jsx(SvgComponent, {
    svg: _$$A2,
    style: styleBuilderInstance.colorIcon.$
  })) : t === 'feedback' ? (s = 'Feedback', a = jsx(SvgComponent, {
    svg: _$$A3,
    style: styleBuilderInstance.colorIcon.$
  })) : (s = t.name, a = jsx(Q, {
    parameter: t,
    className: ZR
  }));
  let o = t === 'skip' ? 'skip' : s;
  let l = jsx(Fragment, {
    children: s
  });
  return jsx(_$$B2.Item, {
    primaryAction: {
      text: 'Select',
      shortcuts: [{
        key: KeyCodes.ENTER
      }, {
        key: KeyCodes.TAB
      }],
      onAction: ({
        shortcut: e
      }) => {
        r(t, e?.key === KeyCodes.TAB ? 'tab' : 'enter');
      }
    },
    actionLabel: !1,
    recordingKey: o,
    children: jsx(_$$_, {
      displayNode: l,
      label: s,
      icon: a
    })
  });
}
function q(e) {
  assert(e !== null, 'We should never be in the middle state if there are no optional parameters');
}
function $({
  searchQuery: e,
  parameters: t,
  displayName: i,
  actionIcon: s,
  activeParameterIndex: o,
  getParameterForIndex: l,
  parameterValues: d,
  placeholderWidth: p,
  hideName: m,
  searchInputRef: g,
  onTextChange: f
}) {
  let {
    pop
  } = cq();
  let A = useRef(null);
  let b = useRef(null);
  _$$Y(g);
  let v = {
    minWidth: p ? `${p}px` : void 0
  };
  let I = useHandleChangeEvent('onSearchChange', 'change', e => {
    f(e.currentTarget.value);
  });
  return jsx('div', {
    className: $P,
    children: jsxs('div', {
      className: 'parameter_entry--searchBar--QSjNM',
      ref: A,
      children: [function () {
        let e = l(o)?.key;
        let r = jsx(Z, {
          parameters: t,
          parameterValues: d,
          skipKey: e
        });
        return jsxs(Fragment, {
          children: [jsx('div', {
            className: _$$s.ml4.h24.$,
            children: jsx(IconButton, {
              'onClick': pop,
              'aria-label': getI18nString('qa.go_back'),
              'children': jsx(_$$C, {})
            })
          }), jsx(X, {
            value: m ? void 0 : i,
            icon: s
          }, 'plugin-name'), r]
        });
      }(), jsxs('div', {
        className: o === 'final' ? 'parameter_entry--inputContainerFinal--VAZ8y' : 'parameter_entry--inputContainer--L1KyZ',
        children: [jsx('input', {
          autoFocus: !0,
          ref: g,
          className: h()('parameter_entry--inputTextBox--0eA0n', Dm),
          onChange: I,
          value: e,
          maxLength: 150,
          spellCheck: !1,
          style: v
        }), jsx('div', {
          className: 'parameter_entry--placeholderContainer--ZW63B parameter_entry--centerItemsVertically--wrvs-',
          children: jsxs('div', {
            className: 'parameter_entry--placeholder--qsyS7',
            children: [jsx('span', {
              className: 'parameter_entry--hiddenText--vgdOe',
              children: e
            }), function () {
              let i = e.length > 0;
              if (o === 'final') return jsx(Fragment, {});
              if (o === 'middle') {
                let e = filterNotNullish(t.map(e => e.optional ? e.name : null)).join(', ');
                return jsx('span', {
                  ref: b,
                  children: renderI18nText('fullscreen_actions.plugin_parameters.optional_optional_names', {
                    optionalNames: e
                  })
                });
              }
              {
                let e = t[o];
                let r = t.slice(o);
                if (e.optional) {
                  let e = r.map(e => e.name);
                  i && (e[0] = '');
                  return jsx('span', {
                    ref: b,
                    children: e.join(', ')
                  });
                }
                {
                  let e = filterNotNullish(r.map(e => e.optional ? null : e.name));
                  let t = filterNotNullish(r.map(e => e.optional ? e.name : null));
                  i && (e[0] = '');
                  return jsxs('span', {
                    children: [jsx('span', {
                      ref: b,
                      children: e.join(', ')
                    }), t.length > 0 && jsxs(Fragment, {
                      children: [jsx('span', {
                        className: 'parameter_entry--optionalDivider--WTfhn',
                        children: '|'
                      }, 'divider'), jsx('span', {
                        children: renderI18nText('fullscreen_actions.plugin_parameters.optional_optional_names', {
                          optionalNames: t.join(', ')
                        })
                      }, 'optionalParams')]
                    })]
                  });
                }
              }
            }()]
          })
        })]
      })]
    })
  });
}
function Z({
  parameters: e,
  parameterValues: t,
  skipKey: i
}) {
  return jsx(Fragment, {
    children: e.filter(e => t[e.key] && e.key !== i).map(e => t[e.key] ? jsx(X, {
      icon: jsx(Q, {
        parameter: t[e.key],
        className: 'parameter_entry--pillIcon--0698Z'
      }),
      value: t[e.key].name
    }, e.key) : null)
  });
}
function X(e) {
  return e.value ? jsxs('div', {
    className: h()('parameter_entry--pill--nC1Kj text--fontPos11--2LvXf text--_fontBase--QdLsd', _$$s.flex.itemsCenter.gap4.$),
    children: [e.icon, e.value]
  }) : jsx(Fragment, {});
}
function Q({
  parameter: e,
  className: t
}) {
  let i = '';
  if (e.iconUrl) {
    i = e.iconUrl;
  } else if (e.icon && typeof e.icon == 'string') {
    i = `data:image/svg+xml;base64,${encodeStringToBase64(e.icon)}`;
  } else {
    if (!e.icon || typeof e.icon == 'string') return null;
    i = `data:application/octet-stream;base64,${encodeBase64(e.icon)}`;
  }
  return jsx(J, {
    className: t,
    src: i
  });
}
function J(e) {
  let t = new URL(e.src);
  return t.hostname === window.location.hostname ? (reportError(_$$e.AI_FOR_PRODUCTION, new Error('same-origin URL blocked in UntrustedImage')), jsx(Fragment, {})) : ['https:', 'http:', 'data:', 'blob:'].includes(t.protocol) ? jsx('img', {
    src: e.src,
    className: e.className,
    crossOrigin: 'anonymous',
    alt: ''
  }) : (reportError(_$$e.AI_FOR_PRODUCTION, new Error('Unexpected protocol blocked in UntrustedImage')), jsx(Fragment, {}));
}
export const ch = $$K0;