import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useEffect, useCallback, forwardRef } from "react";
import { xb } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { t } from "../905/150656";
import { T as _$$T } from "../905/336775";
import { s as _$$s } from "../905/551945";
import { Egt } from "../figma_app/763686";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { md, fp, zl, Xr } from "../figma_app/27355";
import { SV } from "../figma_app/272902";
import { generateRecordingKey, useHandleChangeEvent } from "../figma_app/878298";
import { sx } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { nl } from "../figma_app/257275";
import { s as _$$s2 } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { CZ } from "../905/294085";
import { hO, G4, Hl } from "../figma_app/545293";
import { tS, ze } from "../figma_app/516028";
import { C as _$$C } from "../905/758411";
import { xp } from "../905/966582";
import { I as _$$I } from "../figma_app/130633";
import { Ee } from "../figma_app/392189";
import { b as _$$b } from "../figma_app/598297";
import { g as _$$g } from "../905/505662";
import { eH, Ko, P5 } from "../figma_app/318590";
import { C7 } from "../figma_app/144974";
import { JT } from "../figma_app/632248";
import { WP, B1, ES } from "../905/198599";
import { z as _$$z } from "../905/654860";
import { cq } from "../905/794154";
import { s as _$$s3 } from "../905/169089";
import { _M, ID } from "../905/487011";
import { lc, dk } from "../905/278499";
import { dd } from "../figma_app/604494";
import { o as _$$o } from "../905/223420";
import { t as _$$t2 } from "../905/605191";
import { E as _$$E } from "../905/632989";
import { _ as _$$_ } from "../905/144222";
import { f as _$$f } from "../905/54715";
import { sx as _$$sx } from "../905/941192";
import { xH } from "../figma_app/249941";
import { b as _$$b2 } from "../905/222272";
import { n as _$$n } from "../905/895449";
import { q as _$$q } from "../905/516087";
import { fu, oz } from "../figma_app/538006";
import { U as _$$U } from "../905/172092";
import { xA, fJ } from "../905/742325";
import { O as _$$O } from "../figma_app/380422";
import { M as _$$M } from "../figma_app/751728";
import { i as _$$i } from "../905/740630";
import { S as _$$S } from "../905/933340";
import { k as _$$k2 } from "../905/788559";
import { A as _$$A } from "../905/721854";
import { s as _$$s4 } from "../905/182893";
import { R as _$$R } from "../905/423086";
import { X as _$$X } from "../905/846650";
function Y(e) {
  let {
    pill
  } = e;
  let i = useMemo(() => jsx("div", {
    className: _$$s2.flex.itemsCenter.justifyCenter.w16.h16.flexShrink0.$,
    children: "selection" === pill.type ? jsx("div", {
      style: _$$sx.add({
        stroke: "var(--color-icon-brand)"
      }).$,
      children: jsx(xH, {
        guid: pill.node.guid,
        node: pill.node,
        className: _$$s2.colorIconBrand.$
      })
    }) : jsx(_$$_, {
      style: {
        "--color-icon": "var(--color-icon-brand)"
      }
    })
  }), [pill.type, pill.node]);
  return jsxs("div", {
    className: _$$s2.flex.px4.itemsCenter.gap4.b1.radiusMedium.maxW150.colorBgBrandTertiary.colorTextBrand.colorBorderBrand.$,
    style: _$$sx.add({
      paddingTop: "3px",
      paddingBottom: "3px"
    }).$,
    children: [i, jsx("span", {
      className: _$$s2.truncate.$,
      children: pill.name
    }), e.onDismiss && jsx(_$$E, {
      recordingKey: generateRecordingKey(e.recordingKey, "dismiss"),
      onClick: e.onDismiss,
      className: _$$s2.bgTransparent.$,
      children: jsx(_$$f, {
        style: {
          "--color-icon": "var(--color-icon-brand)"
        }
      })
    })]
  });
}
let ed = "actions-visual-search-library-filter";
export function $$ec2({
  initialTab: e
}) {
  let {
    currentSearch
  } = md(WP);
  let i = md(hO.currentSearchAtom);
  let l = md(hO.currentCommunitySearchAtom);
  let d = i?.searchId;
  let c = currentSearch?.queryId;
  let u = l?.searchId;
  let [p, h] = fp(B1);
  let g = useRef(null);
  let A = useRef(null);
  let v = useRef(null);
  let E = $$eg3(i);
  _$$b();
  let S = _M({
    action: JT.FIND_INSPIRATION,
    clientLifecycleId: void 0
  });
  _$$C();
  let N = md(hO.fragmentSearchEntryPointAtom);
  useEffect(() => () => {
    _$$R();
    zl.set(WP, {
      currentSearch: null
    });
    h({
      type: _$$I.ALL
    });
  }, [h]);
  let {
    close
  } = cq();
  let {
    libraries,
    librariesForConnectedProject
  } = _$$g();
  let B = 0 === libraries.length && 0 === librariesForConnectedProject.length;
  let G = eH();
  let [z, H, W] = t.useTabs({
    [xA.FRAGMENTS]: !0,
    [xA.COMPONENTS]: Ko(),
    [xA.COMMUNITY]: G
  }, {
    defaultActive: e || xA.FRAGMENTS
  });
  let K = useCallback(e => {
    e === xA.COMPONENTS && sx("Visual search components tab clicked", {
      session_id: zl.get(dd),
      query_id: currentSearch?.queryId
    });
    W.setActiveTab(z[e].id);
    A.current?.focus();
    _$$k2();
  }, [W, z, currentSearch]);
  let Y = jsxs(fu, {
    value: W.activeTab,
    onChange: lQ,
    numItems: eh(),
    children: [jsx(oz, {
      tabId: xA.FRAGMENTS,
      onAction: () => K(xA.FRAGMENTS),
      children: tx("assets_in_actions.detail_view.fragments_tab.designs_title")
    }), Ko() && jsx(oz, {
      tabId: xA.COMPONENTS,
      onAction: () => K(xA.COMPONENTS),
      children: tx("assets_in_actions.detail_view.components_tab.title")
    }), G && jsx(oz, {
      tabId: xA.COMMUNITY,
      onAction: () => K(xA.COMMUNITY),
      children: tx("assets_in_actions.detail_view.community_tab.title")
    })]
  });
  let Q = (() => {
    switch (W.activeTab) {
      case xA.FRAGMENTS:
        return d;
      case xA.COMPONENTS:
        return c;
      case xA.COMMUNITY:
        return u;
      default:
        xb(W.activeTab);
    }
  })();
  let ea = useCallback(e => {
    switch (e) {
      case xA.FRAGMENTS:
        return d;
      case xA.COMMUNITY:
        return u;
      default:
        return;
    }
  }, [d, u]);
  let ec = useCallback(e => {
    if (e === xA.COMPONENTS) return c;
  }, [c]);
  let eu = useCallback((e, t, n, r, a, s, o) => {
    sx("Search Feedback", {
      feedbackType: e,
      feedback: t,
      activeTab: n === xA.COMPONENTS ? "assets" : n.toString(),
      clientLifecycleId: r,
      entryPoint: a,
      fileKey: s,
      inputText: i && "input-text" === i.input.type ? i.input.value : void 0,
      inputType: i?.input.type,
      queryId: ec(n),
      searchId: ea(n),
      sessionId: o
    });
  }, [i, ec, ea]);
  let ef = useCallback((e, t) => {
    eu(e.toString(), t, W.activeTab, S.clientLifecycleId, N, S.file_key, S.quick_actions_session_id);
  }, [eu, W.activeTab, S, N]);
  let e_ = useCallback((e, t) => {
    eu(e.toString(), t, W.activeTab, S.clientLifecycleId, N, S.file_key, S.quick_actions_session_id);
  }, [eu, W.activeTab, S, N]);
  return i && "disabled" !== i.result.status ? jsxs(_$$n, {
    additionalFeedbackCallback: e_,
    aiTrackingContext: S,
    bodyFontMedium: !0,
    dataTestId: "visualSearchView",
    gatherFeedback: !0,
    height: 480,
    rateOutputStrOverride: _$$t("qa.rate_output_helpful"),
    recordingKey: "visualSearchView",
    sentimentFeedbackCallback: ef,
    width: parsePxNumber(_$$X),
    children: [jsx(_$$t2, {
      ref: g
    }, Q), jsxs(_$$n.Header, {
      children: [jsx(em, {}), eh() > 1 && jsx("div", {
        className: _$$s2.py4.px8.$,
        ref: v,
        children: jsxs(_$$b2, {
          primary: !1,
          gap: 8,
          align: "center",
          justify: "space-between",
          children: [Y, Ko() && jsx(t.TabPanel, {
            ...H[xA.COMPONENTS],
            children: jsx("div", {
              className: _$$s2.h32.flex.itemsCenter.$,
              children: currentSearch && !B && jsx(_$$i, {
                onSetAssetType: e => {
                  if (currentSearch) switch (currentSearch.input.type) {
                    case "input-image":
                    case "input-selection":
                      h(e);
                      ES({
                        ...currentSearch.input,
                        assetTypeOption: e
                      });
                      return;
                    case "input-text":
                      throw Error("Cannot run visual search on text input");
                    default:
                      xb(currentSearch.input);
                  }
                },
                value: p,
                hideLocal: !0,
                hidePresets: !0,
                dropdownDataTestId: ed,
                recordingKey: ed
              })
            })
          }), jsx(t.TabPanel, {
            ...H[xA.FRAGMENTS],
            children: jsx("div", {
              className: _$$s2.h32.flex.itemsCenter.$,
              children: jsx(_$$s4, {
                containerRef: v,
                entryPoint: G4.ACTIONS_VISUAL_SEARCH_VIEW
              })
            })
          }), G && jsx(t.TabPanel, {
            ...H[xA.COMMUNITY],
            children: jsx("div", {
              className: _$$s2.h32.$
            })
          })]
        })
      })]
    }), jsx(_$$n.Body, {
      children: jsxs(fJ.Provider, {
        value: {
          activeTabId: W.activeTab
        },
        children: [Ko() && jsx(t.TabPanel, {
          ...H[xA.COMPONENTS],
          children: jsx(_$$q, {
            children: B ? jsx(_$$S, {
              fillHeight: !0,
              children: jsx(Ee, {
                onClickExplore: close,
                fromActionsModal: !0,
                width_ui3: 264,
                bgTransparentUI3: !0
              })
            }) : jsx(_$$O, {
              numberOfGridColumns: 6,
              stretchEmptyStates: !0
            })
          }, c)
        }), jsx(t.TabPanel, {
          ...H[xA.FRAGMENTS],
          children: jsx(_$$q, {
            children: jsx(_$$M, {
              focusHandle: g,
              numberOfGridColumns: 3,
              stretchEmptyStates: !0,
              entryPoint: G4.ACTIONS_VISUAL_SEARCH_VIEW
            })
          }, d)
        }), G && jsx(t.TabPanel, {
          ...H[xA.COMMUNITY],
          children: jsx(_$$q, {
            children: jsx(_$$M, {
              focusHandle: g,
              numberOfGridColumns: 3,
              stretchEmptyStates: !0,
              isCommunity: !0,
              entryPoint: G4.ACTIONS_VISUAL_SEARCH_VIEW
            })
          }, u)
        })]
      })
    }, E)]
  }) : jsx($$ep1, {
    aiTrackingContext: S
  });
}
export let $$eu0 = forwardRef(({
  aiTrackingContext: e
}, t) => {
  let i = tS();
  let a = useRef(null);
  let s = SV(t, a);
  let o = useCallback(t => {
    i && (ID({
      ...e,
      interaction: lc.EXECUTE,
      interaction_type: dk.BUTTON_CLICK
    }), $$e_4(G4.ACTIONS_VISUAL_SEARCH_PROMPT, t));
  }, [i, e]);
  let l = useCallback(() => {
    if (nl()) {
      o(new File([Uint8Array.from(atob("iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAATSURBVHgBY7wpKfmfAQqYGJAAADAAAg7iNdOVAAAAAElFTkSuQmCC"), e => e.charCodeAt(0))], "image0.jpg", {
        type: "image/jpeg"
      }));
      return;
    }
    let e = a.current?.files || null;
    null !== e && 0 !== e.length && o(e[0]);
  }, [o]);
  let d = useHandleChangeEvent(generateRecordingKey("visualSearchView", "imageUploadButton"), "change", e => {
    l();
  });
  return jsx("input", {
    type: "file",
    ref: s,
    accept: xp.join(","),
    onChange: d,
    multiple: !1,
    className: _$$s2.hidden.$
  });
});
export function $$ep1({
  aiTrackingContext: e
}) {
  let t = useRef(null);
  return jsxs(Fragment, {
    children: [jsx($$eu0, {
      aiTrackingContext: e,
      ref: t
    }), jsx(_$$A, {
      action: JT.FIND_INSPIRATION,
      actionLabel: tx("fragment_search.visual_search_button"),
      actionIcon: jsx(_$$T, {}),
      onPerform: () => $$ef5(G4.ACTIONS_VISUAL_SEARCH_PROMPT),
      aiTrackingContext: e,
      instructionAction: {
        type: "custom",
        label: tx("fragment_search.visual_search_image_upload_button"),
        iconPrefix: jsx(_$$s, {}),
        onPerform: () => {
          t.current?.click();
        }
      },
      shouldAutoFocus: !0,
      children: tx("fragment_search.visual_search_instructions")
    })]
  });
}
function em() {
  let e = md(hO.currentSearchAtom);
  let t = _$$s3(e);
  let i = Xr(hO.currentSearchAtom);
  let a = useRef(null);
  let s = _$$U();
  let o = eH();
  _$$z();
  let l = useCallback(() => {
    i(null);
    getFeatureFlags().fragment_search_tweaks && Egt?.clearSelection();
  }, [i]);
  return jsxs("div", {
    className: _$$s2.flex.itemsCenter.justifyBetween.px8.py12.$$if(eh() > 1, _$$s2.bSolid.bb1.colorBorder).$,
    ref: a,
    children: [jsxs("div", {
      className: _$$s2.flex.gap8.itemsCenter.$,
      children: [jsx(_$$o, {
        recordingKey: generateRecordingKey(s, "backButton")
      }), jsx("span", {
        className: _$$s2.textBodyLarge.colorText.$,
        children: tx("fragment_search.visual_search_results_title")
      }), t && jsx(Y, {
        pill: t,
        onDismiss: l,
        recordingKey: generateRecordingKey(s, "inputPill")
      })]
    }), 1 === eh() && jsx(_$$s4, {
      containerRef: a,
      hideSpacesFilter: o,
      entryPoint: G4.ACTIONS_VISUAL_SEARCH_VIEW
    })]
  });
}
function eh() {
  let e = 1;
  Ko() && e++;
  P5() && e++;
  return e;
}
export function $$eg3(e) {
  let t;
  if (!e) return "no-search";
  let i = e.input.type;
  switch (e.input.type) {
    case "input-text":
      t = e.input.value;
      break;
    case "input-image":
      t = `${e.input.imageFile.name}-${e.input.imageFile.lastModified}`;
      break;
    case "input-selection":
      t = `${e.input.file_key}-${e.input.node.guid}`;
      break;
    default:
      xb(e.input);
  }
  let n = e.result.status;
  return `${i}-${t}-${n}`;
}
export function $$ef5(e) {
  let t = zl.get(ze);
  let i = UN().getCurrentPage()?.directlySelectedNodes;
  if (!(!t || i?.length !== 1 || i[0]?.isSlide) && (C7() && Hl({
    type: "input-selection",
    node: i[0],
    name: i[0].name,
    file_key: t
  }, e, zl.get(CZ), zl.get(hO.sortByAtom), void 0, !1, _$$k2), P5() && Hl({
    type: "input-selection",
    node: i[0],
    name: i[0].name,
    file_key: t
  }, e, void 0, "percent_match", void 0, !0, _$$k2), Ko())) {
    let e = zl.get(B1);
    ES({
      type: "input-selection",
      node: i[0],
      name: i[0].name,
      assetTypeOption: e
    }, _$$k2);
  }
}
export function $$e_4(e, t) {
  let i = zl.get(ze);
  if (i && (C7() && Hl({
    type: "input-image",
    imageFile: t,
    file_key: i
  }, e, zl.get(CZ), zl.get(hO.sortByAtom), void 0, !1, _$$k2), P5() && Hl({
    type: "input-image",
    imageFile: t,
    file_key: i
  }, e, void 0, "percent_match", void 0, !0, _$$k2), Ko())) {
    let e = zl.get(B1);
    ES({
      type: "input-image",
      imageFile: t,
      assetTypeOption: e
    }, _$$k2);
  }
}
export const xC = $$eu0;
export const o1 = $$ep1;
export const WS = $$ec2;
export const w5 = $$eg3;
export const qF = $$e_4;
export const jp = $$ef5;