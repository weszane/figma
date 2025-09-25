import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { a as _$$a } from '../905/5627';
import { B as _$$B } from '../905/107177';
import { J as _$$J2 } from '../905/125993';
import { HiddenLabel, Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { renderI18nText } from '../905/303541';
import { SerializeError } from '../905/340677';
import { IconButton } from '../905/443068';
import { bL, c$, l9, mc } from '../905/493196';
import { Jz } from '../905/504727';
import { Button } from '../905/521428';
import { getSingletonSceneGraph } from '../905/700578';
import { BK } from '../905/848862';
import { noop } from 'lodash-es';;
import { d as _$$d } from '../905/976845';
import { defaultSerializationOptions, extractBooleanFieldDescriptions } from '../905/998509';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { MM, wv } from '../figma_app/236327';
import { uQ } from '../figma_app/311375';
import { fullscreenValue } from '../figma_app/455680';
import { R$ } from '../figma_app/545190';
import { jT, Zk } from '../figma_app/626177';
import { Wv } from '../figma_app/711157';
import { DE, fn } from '../figma_app/811257';
import { generateRecordingKey } from '../figma_app/878298';
import { reconcileJSX, getReactFunctionComponentDefinition, deserializeJSX, serializeJSX } from '../figma_app/964367';
let E = {
  layout: 'Include layout properties',
  rendering: 'Include rendering properties',
  text: 'Include text properties',
  interactivity: 'Include interactivity properties'
};
let M = {
  includeInstanceOverrides: !0,
  includeTypescriptTypes: !0
};
export function $$A0({
  recordingKey: e
}) {
  let [t, s] = useState(!1);
  let [p, m] = useState('');
  let [_, S] = useState({});
  let [w, E] = useState({});
  let [A, L] = useState('');
  let [R, O] = useState(void 0);
  let [D, F] = useState('');
  let [B, K] = useState(!1);
  let [G, H] = useState('default');
  let [V, U] = useState('');
  let [z, W] = useState(0);
  let [$, Y] = useState({
    x: 0,
    y: 0
  });
  let [X, q] = useState(void 0);
  let [J, Z] = useState({
    layout: !0,
    rendering: !0,
    text: !0,
    interactivity: !0
  });
  let Q = uQ();
  let [ee, et] = useState({
    ...{
      ...Object.fromEntries(Object.entries(extractBooleanFieldDescriptions()).map(([e, t]) => [e, !1])),
      ...defaultSerializationOptions
    },
    ...M
  });
  let es = useMemo(() => V ? getSingletonSceneGraph().get(V) : null, [V]);
  let er = useCallback(async e => {
    if (ee) {
      try {
        let t = await serializeJSX(e, {
          ...ee,
          flavor: G,
          filterFunction: e => e.visible,
          fieldGroups: Object.entries(J).filter(([e, t]) => t).map(([e]) => e),
          focusNodeId: es ? es.guid : void 0,
          maxSerializeNodes: z
        });
        m(t.jsxStr);
        S(t.componentInfoByJSXName);
        E(t.assetsByName);
        L(t.variablesObjDefinition ?? '');
        O(t.styleInfoByName);
        let s = e.isInstance ? getSingletonSceneGraph().get(e.symbolId) : e;
        if (!ee.ignoreFetchingComponentData && s && (_$$B(e) || e.isStateGroup || e.isInstance)) {
          let e = await getReactFunctionComponentDefinition(s, {
            serializeAllVariants: !0
          });
          let t = Array.from(new Set(e.prefixTypes)).join('\n');
          F(`${t}\n${e.jsxStr}`);
        } else {
          F('');
        }
      } catch (e) {
        if (e instanceof SerializeError && e.message === 'Focus node is not a descendant of the node') {
          U('');
          W(0);
          return;
        }
        throw e;
      }
    }
  }, [m, J, G, ee, es, z]);
  let en = useCallback(async () => {
    if (!t || !Q) return;
    let e = getSingletonSceneGraph().get(Q);
    e && (await er(e), fullscreenValue.triggerAction('commit'));
  }, [t, Q, er]);
  async function ei(e) {
    if (!ee) return;
    let t = {
      ...ee,
      flavor: G,
      assetsByName: w,
      styleInfoByName: R,
      originalSize: ee.normalizePxToRange01 && $.x > 0 && $.y > 0 ? $ : void 0
    };
    q(void 0);
    try {
      if (Q) {
        let s = getSingletonSceneGraph().get(Q);
        if (!s) throw new Error('Node not found');
        await reconcileJSX({
          jsxStr: e,
          node: s,
          options: t
        });
      } else if (!(await deserializeJSX(e, t)).node) {
        throw new Error('Couldn\'t parse JSX');
      }
    } catch (e) {
      console.error(e);
      q(`JSX Error: ${e.message}`);
    }
  }
  useEffect(() => {
    if (B) {
      return getSingletonSceneGraph().onChange(() => {
        en();
      }, {
        allowDeferral: !1
      });
    }
  }, [B, en]);
  useEffect(() => {
    en();
  }, [en]);
  let el = Object.values(_).map(e => e.typescriptType).filter(e => e !== null).join('\n');
  return jsxs(Zk, {
    children: [jsxs(Wv, {
      titleTx: renderI18nText('fullscreen.properties_panel.jsx_debug.title'),
      children: [jsx(IconButton, {
        'aria-label': 'Copy JSX',
        'onClick': () => {
          navigator.clipboard.writeText(p);
        },
        'children': jsx(_$$a, {})
      }), jsx(P, {
        serializerOptions: ee,
        setSerializerOptions: et,
        selectedFieldGroups: J,
        setSelectedFieldGroups: Z,
        dropdownId: 'JSX_DEBUG_SETTINGS_DROPDOWN',
        booleanLabels: extractBooleanFieldDescriptions()
      })]
    }), jsxs('div', {
      className: cssBuilderInstance.px16.$,
      children: [jsx(Checkbox, {
        checked: t,
        onChange: e => s(e),
        label: jsx(Label, {
          children: 'Enabled'
        })
      }), t && jsxs(Fragment, {
        children: [X && jsx(Label, {
          className: 'x172n1ly',
          children: X
        }), jsxs(R$, {
          row: jsx('span', {
            className: cssBuilderInstance.flex.wFull.py8.$,
            children: jsx(Label, {
              className: cssBuilderInstance.fontMedium.$,
              children: 'Additional settings'
            })
          }),
          isCollapsedByDefault: !0,
          isChevronAlwaysVisible: !0,
          recordingKey: generateRecordingKey(e, 'additionalSettingsCollapsibleRow'),
          children: [jsx(Label, {
            children: 'JSX Flavor'
          }), jsx(DE, {
            label: null,
            input: jsxs(bL, {
              value: G,
              onChange: e => H(e),
              children: [jsx(l9, {
                label: jsx(HiddenLabel, {
                  children: ' '
                })
              }), jsxs(mc, {
                children: [jsx(c$, {
                  value: 'default',
                  children: 'Default'
                }, 'default'), jsx(c$, {
                  value: 'flow',
                  children: 'Flow'
                }, 'flow')]
              })]
            }),
            icon: null
          }), jsx(Label, {
            children: 'Focus node guid and max nodes'
          }), jsx(fn, {
            leftLabel: null,
            leftInput: jsx(jT, {
              onBlur: e => U(e.currentTarget.value),
              placeholder: 'GUID'
            }),
            rightLabel: null,
            rightInput: jsx(jT, {
              value: z,
              onChange: e => W(Number(e.currentTarget.value)),
              placeholder: 'Max nodes'
            }),
            icon: null
          }), jsx(Label, {
            children: 'Original size'
          }), jsx(fn, {
            leftLabel: null,
            leftInput: jsx(jT, {
              value: $.x,
              onChange: e => Y({
                x: Number(e.currentTarget.value),
                y: $.y
              }),
              placeholder: 'X'
            }),
            rightLabel: null,
            rightInput: jsx(jT, {
              value: $.y,
              onChange: e => Y({
                x: $.x,
                y: Number(e.currentTarget.value)
              }),
              placeholder: 'Y'
            }),
            icon: null
          })]
        }), jsx('div', {
          children: jsx('textarea', {
            rows: 15,
            value: p,
            style: {
              width: '100%'
            },
            onChange: e => m(e.target.value)
          })
        }), jsxs('div', {
          style: {
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            marginBottom: 16
          },
          children: [jsx(Button, {
            onClick: () => ei(p),
            children: Q ? 'Update node' : 'Create node'
          }), jsx(Checkbox, {
            checked: B,
            onChange: e => K(e),
            label: jsx(Label, {
              children: 'Live Update'
            })
          })]
        })]
      }), Object.keys(_).length > 0 && jsxs('div', {
        style: {
          paddingBottom: 16
        },
        children: ['Components:', jsx('div', {
          children: jsx('textarea', {
            rows: 10,
            style: {
              padding: 10,
              width: '100%'
            },
            value: JSON.stringify(_, null, 2),
            onChange: noop
          })
        })]
      }), el.length > 0 && jsxs('div', {
        children: ['Typescript definitions:', jsx('textarea', {
          rows: 10,
          style: {
            width: '100%'
          },
          value: el
        })]
      }), Object.keys(w).length > 0 && jsxs('div', {
        style: {
          paddingBottom: 16
        },
        children: ['Assets:', jsx('div', {
          children: jsx('textarea', {
            rows: 10,
            style: {
              padding: 10,
              width: '100%'
            },
            value: JSON.stringify(w, null, 2),
            onChange: noop
          })
        })]
      }), A && jsxs('div', {
        style: {
          paddingBottom: 16
        },
        children: ['Variables:', jsx('div', {
          children: jsx('textarea', {
            rows: 10,
            style: {
              padding: 10,
              width: '100%'
            },
            value: A,
            onChange: noop
          })
        })]
      }), R && Object.keys(R).length > 0 && jsxs('div', {
        style: {
          paddingBottom: 16
        },
        children: ['Styles:', jsx('div', {
          children: jsx('textarea', {
            rows: 10,
            style: {
              padding: 10,
              width: '100%'
            },
            value: JSON.stringify(R, null, 2),
            onChange: noop
          })
        })]
      }), D && jsxs('div', {
        children: ['React function component definition:', jsx('textarea', {
          rows: 10,
          style: {
            width: '100%'
          },
          value: D,
          onChange: noop
        })]
      })]
    })]
  });
}
function P({
  serializerOptions: e,
  setSerializerOptions: t,
  selectedFieldGroups: s,
  setSelectedFieldGroups: i,
  dropdownId: l,
  booleanLabels: a
}) {
  let o = BK(l);
  let d = useCallback(e => {
    i && i(t => ({
      ...t,
      [e]: !t[e]
    }));
  }, [i]);
  let c = useCallback(e => {
    t(t => ({
      ...t,
      [e]: !t[e]
    }));
  }, [t]);
  let u = [...Object.entries(s ?? {}).map(([e, t]) => jsx(MM, {
    checked: t,
    onClick: () => d(e),
    children: E[e]
  }, e)), ...(s ? [jsx(wv, {}, 'separator')] : []), ...Object.entries(e).filter(([e, t]) => typeof t == 'boolean').map(([e, t]) => jsx(MM, {
    checked: !!t,
    onClick: () => c(e),
    children: a[e] || e
  }, e))];
  let h = useRef(null);
  let g = h.current?.getBoundingClientRect();
  g || (g = new DOMRect(0, 0, 0, 0));
  return jsxs(Fragment, {
    children: [jsx(_$$d, {
      'aria-expanded': o.showing,
      'onClick': () => o.toggle(),
      'aria-label': 'JSX debug settings',
      'ref': h,
      'children': jsx(_$$J2, {})
    }), o.showing && jsx(Jz, {
      showPoint: !0,
      options: u,
      targetRect: g,
      hideDropdown: () => o.hide()
    })]
  });
}
export const Ay = $$A0;
