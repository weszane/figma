import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useCallback } from "react";
import { ServiceCategories } from "../905/165054";
import { t as _$$t } from "../905/150656";
import { K as _$$K } from "../905/443068";
import { Button } from "../905/521428";
import { ButtonPrimitive } from "../905/632989";
import { o as _$$o } from "../905/530496";
import { C as _$$C } from "../905/520159";
import { O as _$$O } from "../905/969533";
import { k as _$$k } from "../905/44647";
import { SceneGraphHelpers, Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { Y1 } from "../905/143116";
import { h as _$$h } from "../905/207101";
import { Uz, xH } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { tH, H4 } from "../905/751457";
import { x as _$$x } from "../905/868466";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { i6, v2, x$ } from "../905/188715";
import { C as _$$C2 } from "../905/696698";
import { rZ } from "../905/971098";
import { fullscreenValue } from "../figma_app/455680";
import { dh } from "../figma_app/186343";
import { useCurrentFileKey } from "../figma_app/516028";
import { KindEnum } from "../905/129884";
import { xH as _$$xH } from "../figma_app/249941";
import { cq } from "../905/794154";
import { r as _$$r } from "../905/189361";
import { m as _$$m } from "../figma_app/175364";
import { B } from "../905/222272";
import { n as _$$n } from "../905/895449";
import { S as _$$S } from "../905/933340";
export function $$U0() {
  let e = useCurrentFileKey();
  let [t, r] = useState(e ? rZ(e) : []);
  let [a, l] = useState(t[0] || null);
  let d = useMemo(() => t.map(e => ({
    type: "option",
    text: e.name
  })), [t]);
  let [u, p, _] = _$$t.useTabs({
    [i6.STRUCTURE]: !0,
    [i6.THEME]: !0,
    [i6.EXAMPLES]: !0
  });
  let {
    result,
    validate
  } = _$$C2(a?.dsKitKey || null);
  return jsxs(Y1, {
    padding: {
      vertical: 12,
      horizontal: 12
    },
    width: 400,
    direction: "vertical",
    children: [jsxs(B, {
      fullWidth: !0,
      justify: "space-between",
      children: [jsx(_$$m, {
        selected: a,
        onSelectedChange: e => l(e),
        placeholder: "No local kits",
        labelForSelectedItem: e => e.name,
        displayAboveTarget: !0,
        lean: "right",
        items: d,
        disabled: 0 === d.length
      }), jsxs(B, {
        children: [jsxs(_$$t.TabStrip, {
          manager: _,
          children: [jsx(_$$t.Tab, {
            recordingKey: "lintStructure",
            ...u.structure,
            children: "Structure"
          }), jsx(_$$t.Tab, {
            recordingKey: "lintTheme",
            ...u.theme,
            children: "Theme"
          }), jsx(_$$t.Tab, {
            recordingKey: "lintExamples",
            ...u.examples,
            children: "Examples"
          })]
        }), jsx(_$$K, {
          "aria-label": "Refresh",
          onClick: () => {
            if (e) {
              let t = rZ(e);
              r(t);
              l(t.find(e => e.dsKitKey.pageId === a?.dsKitKey.pageId) || t[0] || null);
              validate();
            }
          },
          htmlAttributes: {
            "data-tooltip": "Refresh",
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$o, {})
        })]
      })]
    }), a && result && jsxs("div", {
      className: _$$s.wFull.$,
      children: [jsx(_$$t.TabPanel, {
        ...p.structure,
        children: jsx($$V1, {
          validationFailures: result,
          selectedKit: a,
          category: i6.STRUCTURE,
          supportedKitType: v2.FIRST_PARTY
        })
      }), jsx(_$$t.TabPanel, {
        ...p.theme,
        children: jsx($$V1, {
          validationFailures: result,
          selectedKit: a,
          category: i6.THEME,
          supportedKitType: v2.FIRST_PARTY
        })
      }), jsx(_$$t.TabPanel, {
        ...p.examples,
        children: jsx($$V1, {
          validationFailures: result,
          selectedKit: a,
          category: i6.EXAMPLES,
          supportedKitType: v2.FIRST_PARTY
        })
      })]
    })]
  });
}
export function $$B2() {
  let {
    pop
  } = cq();
  return jsx(tH, {
    boundaryKey: "FirstDraftLintViewForMakeKit",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: ServiceCategories.AI_GENERATION
    },
    children: jsx(G, {
      recordingKey: "firstDraftLintViewForMakeKit",
      onBack: pop
    })
  });
}
function G(e) {
  var t;
  var r;
  let a = useCurrentFileKey();
  let [s] = useState(a ? rZ(a) : []);
  let l = dh();
  let d = useMemo(() => s.find(e => e.dsKitKey.pageId === l) || null, [s, l]);
  let {
    result
  } = _$$C2(d?.dsKitKey || null);
  let p = _$$x();
  t = i6.STRUCTURE;
  r = v2.FROM_MAKE_KIT;
  let _ = result ? {
    system: result.system.filter(e => e.output.guids.length > 0).filter(e => e.rule.category === t).filter(e => !r || e.rule.supportedKitTypes.includes(r)),
    component: result.component.filter(e => Object.values(e.output).flatMap(e => e.guids).length > 0).filter(e => e.rule.category === t).filter(e => !r || e.rule.supportedKitTypes.includes(r))
  } : null;
  let h = _ && (_?.component.length > 0 || _?.system.length > 0);
  return jsx(_$$n, {
    width: p,
    children: jsxs("div", {
      className: _$$s.wFull.p8.$,
      children: [jsx(_$$n.Header, {
        children: jsx(B, {
          fullWidth: !0,
          justify: "space-between",
          children: jsxs("div", {
            className: _$$s.wFull.flex.gap4.$,
            children: [jsx("div", {
              className: _$$s.h24.$,
              children: jsx(_$$K, {
                recordingKey: generateRecordingKey(e.recordingKey, "backButton"),
                onClick: e.onBack,
                "aria-label": getI18nString("qa.go_back"),
                children: jsx(_$$C, {})
              })
            }), jsx("div", {
              className: _$$s.colorText.textBodyLarge.$,
              children: renderI18nText("first_draft.make_kit.lint.title")
            })]
          })
        })
      }), jsx(_$$n.Body, {
        children: jsx("div", {
          className: _$$s.wFull.flexColumn.pb8.$,
          children: d ? _ && h ? jsx("div", {
            className: _$$s.wFull.$,
            children: jsx($$V1, {
              validationFailures: _,
              selectedKit: d,
              category: i6.STRUCTURE,
              supportedKitType: v2.FROM_MAKE_KIT,
              shouldAutoFix: !0
            })
          }) : jsx("div", {
            className: _$$s.wFull.$,
            children: jsx(_$$S, {
              children: renderI18nText("first_draft.make_kit.lint.no_lint_errors_found")
            })
          }) : jsx("div", {
            className: _$$s.wFull.$,
            children: jsx(_$$S, {
              children: renderI18nText("first_draft.make_kit.lint.no_kit_found")
            })
          })
        })
      }), jsx(_$$n.Footer, {
        children: jsx(B, {
          fullWidth: !0,
          justify: "end",
          children: jsx(_$$r, {
            shortcuts: [{
              key: Uz.ENTER,
              modifier: [xH.META]
            }],
            onAction: e.onBack,
            recordingKey: generateRecordingKey(e.recordingKey, "generate"),
            children: renderI18nText("first_draft.make_kit.lint.done")
          })
        })
      })]
    })
  });
}
export function $$V1({
  validationFailures: e,
  category: t,
  supportedKitType: r,
  selectedKit: i,
  shouldAutoFix: a
}) {
  return jsx(Fragment, {
    children: [...e.system.filter(e => e.rule.category === t).filter(e => !r || e.rule.supportedKitTypes.includes(r)).map(e => jsx(z, {
      rule: e.rule,
      output: e.output,
      dsKitKey: i.dsKitKey,
      shouldAutoFix: a
    }, e.rule.key)), ...e.component.filter(e => e.rule.category === t).map(e => jsx(H, {
      rule: e.rule,
      output: e.output,
      shouldAutoFix: a
    }, e.rule.key))]
  });
}
function H({
  rule: e,
  output: t,
  shouldAutoFix: r
}) {
  let a = useCallback(r => {
    if (r?.stopPropagation(), !e.fix) return !1;
    {
      let r = !0;
      let n = getSingletonSceneGraph();
      for (let i in t) {
        let a = n.get(i);
        a && !e.fix(a, t[a.guid]?.meta) && (r = !1);
      }
      fullscreenValue.triggerAction("commit");
      return r;
    }
  }, [e, t]);
  let s = useMemo(() => Object.values(t).flatMap(e => e.guids), [t]);
  return 0 === Object.keys(t).length ? null : jsx(W, {
    rule: e,
    guids: s,
    meta: null,
    autofix: a,
    shouldAutoFix: r
  });
}
function z({
  dsKitKey: e,
  rule: t,
  output: r,
  shouldAutoFix: a
}) {
  let s = useCallback(n => (n?.stopPropagation(), !!t.fix && t.fix(e, r.meta)), [t, e, r]);
  return 0 === r.guids.length ? null : jsx(W, {
    rule: t,
    guids: r.guids,
    meta: r.meta,
    autofix: s,
    shouldAutoFix: a
  });
}
function W({
  rule: e,
  guids: t,
  meta: r,
  autofix: a,
  shouldAutoFix: s
}) {
  let [o, d] = useState(!1);
  let [c, u] = useState(!1);
  let [E, y] = useState(!1);
  let b = e => {
    y(a(e));
  };
  let T = useCallback(e => {
    SceneGraphHelpers.clearSelection();
    SceneGraphHelpers.addToSelection(e);
  }, []);
  let S = useMemo(() => t.map(e => getSingletonSceneGraph().get(e)).filter(Boolean), [t]);
  return (_$$h(() => {
    s && b();
  }), 0 === t.length) ? null : jsxs(Fragment, {
    children: [jsxs(B, {
      fullWidth: !0,
      justify: "space-between",
      align: "center",
      children: [jsxs("button", {
        onClick: () => u(!c),
        className: _$$s.cursorPointer.flex.itemsCenter.$,
        children: [c ? jsx(_$$O, {}) : jsx(_$$k, {}), jsx(Y, {
          severity: e.severity
        }), jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "medium",
          children: e.name
        })]
      }), e.fix && jsx(Button, {
        variant: "secondary",
        onClick: b,
        children: E ? "Fixed" : "Autofix"
      })]
    }), c && jsxs(Y1, {
      padding: {
        horizontal: 12
      },
      direction: "vertical",
      children: [jsx(TextWithTruncation, {
        fontSize: 11,
        fontWeight: "regular",
        color: "secondary",
        children: e.warning
      }), T && jsx(Button, {
        variant: "link",
        onClick: () => T(t),
        children: "Select offending layers"
      }), jsxs("button", {
        onClick: () => d(!o),
        className: _$$s.cursorPointer.flex.itemsCenter.$,
        children: [o ? jsx(_$$O, {}) : jsx(_$$k, {}), jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "medium",
          children: "Show metadata"
        })]
      }), o && jsx("div", {
        className: _$$s.flex.flexColumn.wFull.maxH100.px12.overflowYScroll.$,
        children: r ? jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "regular",
          color: "secondary",
          children: JSON.stringify(r)
        }) : jsx("div", {
          className: _$$s.wFull.flex.flexWrap.gap4.$,
          children: S.map(e => jsx(K, {
            node: e
          }, e.guid))
        })
      })]
    })]
  });
}
function K({
  node: e
}) {
  let t = useMemo(() => jsx(_$$xH, {
    guid: e.guid,
    node: e,
    useUI3Icon: !0
  }), [e]);
  return jsxs(ButtonPrimitive, {
    className: _$$s.borderBox.h24.flex.px8.gap4.itemsCenter.b1.radiusMedium.maxW150.font11.colorBorder.$,
    onClick: () => {
      Fullscreen.panToNode(e.guid, !1);
      let t = getSingletonSceneGraph().getCurrentPage();
      t && (t.directlySelectedNodes = [e]);
    },
    recordingKey: "nodeButton",
    children: [t, jsx("span", {
      className: _$$s.truncate.$,
      children: e.name
    })]
  });
}
function Y({
  severity: e
}) {
  switch (e) {
    case x$.ERROR:
      return jsx("div", {
        className: _$$s.p2.font11.colorTextDanger.justifyCenter.fontSemiBold.$,
        children: "[Error]"
      });
    case x$.WARNING:
      return jsx("div", {
        className: _$$s.p2.font11.colorTextWarning.justifyCenter.fontSemiBold.$,
        children: "[Warning]"
      });
    default:
      return null;
  }
}
export const S6 = $$U0;
export const d$ = $$V1;
export const zY = $$B2;