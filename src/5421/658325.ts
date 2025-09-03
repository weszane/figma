import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import { K as _$$K } from "../905/443068";
import { S as _$$S } from "../905/274480";
import { J } from "../905/270045";
import { a as _$$a } from "../905/5627";
import { V as _$$V } from "../1577/311426";
import { Z_n, rcl, glU, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { Hr, dI, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { U as _$$U } from "../figma_app/901889";
import { Pt } from "../figma_app/806412";
import { t as _$$t, tx } from "../905/303541";
import { VC } from "../figma_app/565242";
import { X } from "../905/190511";
import { _j } from "../figma_app/843119";
import { E7, gl, oV } from "../905/216495";
import { R1, u3 } from "../figma_app/152690";
import { RK } from "../figma_app/815170";
import { fu } from "../figma_app/831799";
import { Y5 } from "../figma_app/455680";
import { kl, lJ } from "../905/275640";
import { KH, eY } from "../figma_app/722362";
import { UA } from "../905/250387";
import { xT } from "../figma_app/841415";
import { k as _$$k2 } from "../5421/193325";
import { Bs } from "../figma_app/84580";
import { Cy } from "../figma_app/976110";
import { Zk } from "../figma_app/626177";
import { u as _$$u } from "../642/523719";
import { TN } from "../figma_app/334459";
import { DE } from "../figma_app/811257";
import { ol, p4 } from "../figma_app/369750";
import { cn, NW, Yt } from "../figma_app/85384";
import { RZ, Tl, qe, Nw, l4, Ve, eF } from "../5421/85401";
import { FD, nh, MO } from "../9410/228031";
function E(e) {
  let t = getSingletonSceneGraph().get(e);
  if (!t) return null;
  let n = t?.getVariableConsumptionMap()?.HYPERLINK;
  return !n || n.isMixed || n.type !== Z_n.CMS_ALIAS ? null : n.value.fieldSchemaId;
}
function j(e) {
  let t = getSingletonSceneGraph().get(e);
  if (!t) return null;
  let n = t.prototypeInteractions.find(e => e.event?.interactionType === "ON_CLICK");
  return n && n.actions && 1 === n.actions.length ? n.actions[0]?.linkParam?.value?.cmsAliasValue?.fieldId ?? null : null;
}
function N(e, t) {
  let n = Object.keys(e);
  if (0 === n.length) return null;
  let o = n[0];
  if (!o) return null;
  let i = t(o);
  return i && n.every(e => e === o || t(e) === i) ? i : null;
}
export function $$z0({
  isInteractionModal: e = !1,
  recordingKey: t
}) {
  let n = d4(Cy);
  let a = KH();
  let l = eY();
  let s = function () {
    let e = _$$U();
    return useCallback(t => {
      ("URL" === t || "INTERNAL_NODE" === t) && e("sites_add_link", {
        linkType: t
      });
    }, [e]);
  }();
  let d = d4(Y);
  let c = Object.keys(a).every(e => {
    let t = l.get(e);
    return t?.type === "TEXT" && !ol(n);
  });
  let m = kl("hyperlink");
  let x = c && m && Object.keys(m).length > 0 || !!p4(n);
  if (!((d || x) && Object.keys(a).every(e => {
    let t = l.get(e);
    return t && RZ(t);
  }))) return null;
  let y = () => {
    _({
      ...Bs("GO_BACK"),
      simpleLink: !0
    });
  };
  let f = () => {
    _({
      ...Bs("SCROLL_TO"),
      transitionNodeID: Hr,
      simpleLink: !0
    });
  };
  let _ = e => {
    l7.user(Tl, () => {
      for (let t of Object.keys(a)) {
        let n = l.get(t);
        n && qe(n, e);
      }
      Y5.commit();
    });
    s(e.connectionType);
  };
  let b = (e, t, n) => {
    l7.user("dakota-set-link-binding", () => {
      for (let o of Object.keys(a)) {
        let i = l.get(o);
        i && i.getNodesForCmsBinding(e).forEach(e => e.setDakotaLinkFieldBindingOnPrototypeAction(t, n));
      }
    });
  };
  let I = ({
    transitionNodeID: e,
    extraScrollOffset: t
  }) => {
    l7.user(Tl, () => {
      for (let n of Object.keys(a)) {
        let o = l.get(n);
        if (o) {
          let n = o.prototypeInteractions;
          let i = Nw.getClickInteraction(n);
          let r = Nw.getMatchingAction(i);
          r && (e && (r.transitionNodeID = e), t && (r.extraScrollOffset = t));
          let a = l4(n);
          let l = {
            prototypeInteractions: (i ? [...a, i] : [...n]).map(e => ({
              ...e,
              sourceNodeID: {
                sessionID: o.sessionID,
                localID: o.localID
              }
            }))
          };
          Y5.updateSelectionProperties(l);
        }
      }
    });
  };
  let C = () => {
    try {
      T();
    } catch {}
    try {
      S();
    } catch {}
  };
  let T = () => {
    let e = N(a, j);
    if (e) {
      Y5.triggerActionEnumInUserEditScope(rcl.UNBIND_SELECTION, {
        fieldSchemaId: e,
        fieldType: _j.LINK,
        removeBoundData: !0
      });
      return;
    }
    l7.user(Tl, () => {
      for (let e of Object.keys(a)) {
        let t = l.get(e);
        t && RZ(t) && Ve(t);
      }
      Y5.commit();
    });
  };
  let S = () => {
    let e = N(a, E);
    if (e) {
      Y5.triggerActionEnumInUserEditScope(rcl.UNBIND_SELECTION, {
        fieldSchemaId: e,
        fieldType: _j.LINK,
        removeBoundData: !0
      });
      return;
    }
    l7.user(Tl, () => {
      glU?.setHyperlinkOnCurrentSelection("", null);
      P();
      Y5.commit();
    });
  };
  let P = () => {
    for (let e of Object.keys(a)) {
      let t = l.get(e);
      t && RZ(t) && (t.prototypeInteractions = eF(t.prototypeInteractions));
    }
  };
  return c ? jsx(Z, {
    addAnchorLinkPreset: f,
    addBackLinkPreset: y,
    addCMSAliasLinkAction: b,
    addCMSRepeaterToItemPageBindingAction: (e, t) => {
      e && l7.user("dakota-set-repeater-item-page-binding", () => {
        for (let n of Object.keys(a)) {
          let o = l.get(n);
          o && o.getNodesForCmsBinding(e).forEach(e => {
            e.setDakotaItemPageLinkBindingOnHyperlink(t);
          });
        }
      });
    },
    addLinkAction: _,
    addRegularNodeToItemPageLinkAction: (e, t, n) => {
      l7.user("dakota-set-cms-item-page-link-binding", () => {
        for (let o of Object.keys(a)) {
          let i = l.get(o);
          i && i.setCmsItemPageLinkOnHyperlink(e, t, n);
        }
      });
    },
    disabled: !d,
    isInteractionModal: e,
    isPanelExpanded: x,
    recordingKey: t,
    removeAllHyperlinks: S,
    removeEmptyInteractions: P,
    removeLinkAction: C,
    setPropertiesForAnchorLink: I
  }) : jsx(W, {
    addAnchorLinkPreset: f,
    addBackLinkPreset: y,
    addCMSAliasLinkAction: b,
    addCMSRepeaterToItemPageBindingAction: (e, t) => {
      e && l7.user("dakota-set-repeater-item-page-binding", () => {
        for (let n of Object.keys(a)) {
          let o = l.get(n);
          o && o.getNodesForCmsBinding(e).forEach(e => {
            e.setRepeaterToItemPageLinkOnPrototypeInteraction(t);
          });
        }
      });
    },
    addLinkAction: _,
    addRegularNodeToItemPageLinkAction: (e, t, n) => {
      l7.user("dakota-set-cms-item-page-link-binding", () => {
        for (let o of Object.keys(a)) {
          let i = l.get(o);
          i && i.setCmsItemPageLinkOnPrototypeInteraction(e, t, n);
        }
      });
    },
    disabled: !d,
    isInteractionModal: e,
    isPanelExpanded: x,
    recordingKey: t,
    removeAllHyperlinks: S,
    removeLinkAction: C,
    setPropertiesForAnchorLink: I
  });
}
function W({
  addLinkAction: e,
  removeAllHyperlinks: t,
  addBackLinkPreset: n,
  addAnchorLinkPreset: i,
  addCMSAliasLinkAction: a,
  addCMSRepeaterToItemPageBindingAction: l,
  addRegularNodeToItemPageLinkAction: s,
  setPropertiesForAnchorLink: d,
  removeLinkAction: c,
  isPanelExpanded: u,
  disabled: m,
  isInteractionModal: g,
  recordingKey: y
}) {
  var f;
  f = d4(Cy).find(e => e.event?.interactionType === "ON_CLICK") ?? null;
  let v = f?.actions?.find(e => "URL" === e.connectionType || "NAVIGATE" === e.navigationType || cn(e)) ?? null;
  let I = function (e) {
    let t = e?.linkParam ?? null;
    let n = e?.cmsTarget ?? null;
    let o = VC(t?.value?.collectionId ?? null);
    let i = t?.value?.collectionId;
    let r = t?.value.fieldSchemaId;
    let {
      fieldSchema
    } = X({
      collectionStableId: i,
      fieldSchemaStableId: r
    });
    let l = NW(n);
    if (l) return l;
    let s = Yt(t, n, o, fieldSchema, e?.openUrlInNewTab);
    if (s) return s;
    if (e && cn(e)) {
      if (!getFeatureFlags().sts_links_v2) return null;
      if ("BACK" === e.connectionType) return {
        type: "back"
      };
      if ("INTERNAL_NODE" === e.connectionType && "SCROLL_TO" === e.navigationType) return {
        type: "anchor_link"
      };
    }
    return e?.connectionType === "URL" && e?.connectionURL ? {
      type: "url",
      url: e.connectionURL,
      openInNewTab: e.openUrlInNewTab ?? !0
    } : e?.connectionType === "INTERNAL_NODE" && e?.transitionNodeID ? {
      type: "internal",
      id: dI(e.transitionNodeID)
    } : null;
  }(v);
  let C = o => {
    if (t && (FD() || nh()) && t(), null === o) e({
      connectionType: "NONE"
    });else if ("url" === o.type) {
      e({
        connectionType: "URL",
        connectionURL: xT(o.url),
        openUrlInNewTab: o.openInNewTab
      });
      return;
    } else if ("internal" === o.type) {
      e({
        connectionType: "INTERNAL_NODE",
        transitionNodeID: sH(o.id) ?? Hr,
        navigationType: "NAVIGATE"
      });
      return;
    } else "cms_link_field_alias" === o.type ? a(o.collectionId, {
      type: Z_n.CMS_ALIAS,
      resolvedType: rXF.LINK,
      value: {
        collectionId: o.collectionId,
        fieldSchemaId: o.fieldId
      }
    }, o.openInNewTab) : "internal_cms_item_page" === o.type ? l(o.collectionId, o.id) : "internal_cms_item_page_item" === o.type ? s(o.id, o.itemId, o.fieldSchemaId) : "back" === o.type ? n() : "anchor_link" === o.type && i();
  };
  return jsx(G, {
    contentsVisibleOrMixed: u,
    disableOpenInNewTabCheckbox: !1,
    disabled: m,
    isInteractionModal: g,
    link: I,
    linkAction: v ?? void 0,
    onAddLink: () => {
      e({
        connectionType: "NONE"
      });
    },
    onLinkChange: C,
    onOpenInNewTabChange: e => {
      switch (I?.type) {
        case "url":
        case "cms_link_field_alias":
          C({
            ...I,
            openInNewTab: e
          });
      }
    },
    onRemoveLink: () => {
      c();
    },
    recordingKey: y,
    setPropertiesForAnchorLink: d
  });
}
function Z({
  addLinkAction: e,
  addBackLinkPreset: t,
  addAnchorLinkPreset: n,
  addCMSRepeaterToItemPageBindingAction: i,
  addRegularNodeToItemPageLinkAction: r,
  setPropertiesForAnchorLink: a,
  removeLinkAction: l,
  removeEmptyInteractions: s,
  isPanelExpanded: d,
  disabled: c,
  removeAllHyperlinks: g,
  isInteractionModal: y,
  recordingKey: f
}) {
  let [v, E] = lJ("hyperlink");
  let j = KH();
  let {
    variableConsumptionMap,
    setVariableConsumptionMap
  } = R1();
  let S = function (e, t) {
    let n = E7(e);
    let o = n?.cmsTarget ?? null;
    let i = VC(function (e) {
      let {
        consumedVariable
      } = u3([e]);
      return !consumedVariable || gl(consumedVariable) || consumedVariable.type !== Z_n.CMS_ALIAS || consumedVariable.resolvedType !== rXF.LINK ? "" : consumedVariable.value.collectionId;
    }("HYPERLINK"));
    let r = t?.value.fieldSchemaId;
    let a = t?.value.collectionId;
    let {
      fieldSchema
    } = X({
      fieldSchemaStableId: r,
      collectionStableId: a
    });
    let s = NW(o);
    return s ? s : Yt(t, o, i, fieldSchema, n?.openInNewTab) || (n && void 0 !== n.url ? {
      type: "url",
      url: n.url,
      openInNewTab: n.openInNewTab
    } : n && void 0 !== n.guid ? {
      type: "internal",
      id: dI(n.guid)
    } : gl(e) ? oV : null);
  }(v, function (e) {
    let t = e?.HYPERLINK;
    return t && !t.isMixed && t.type === Z_n.CMS_ALIAS ? t : null;
  }(variableConsumptionMap));
  let P = gl(S) || gl(v);
  return jsx(G, {
    contentsVisibleOrMixed: d,
    disableOpenInNewTabCheckbox: P,
    disabled: c,
    isInteractionModal: y,
    link: S,
    onAddLink: () => {
      e({
        connectionType: "NONE"
      });
    },
    onLinkChange: e => {
      if (e?.type === "internal_cms_item_page") i(e.collectionId, e.id);else if (e?.type === "cms_link_field_alias") {
        if (!e.collectionId) return;
        l7.user("dakota-set-link-binding", () => {
          let t = {
            type: Z_n.CMS_ALIAS,
            resolvedType: rXF.LINK,
            value: {
              collectionId: e.collectionId,
              fieldSchemaId: e.fieldId
            }
          };
          let n = [];
          let o = getSingletonSceneGraph();
          for (let t of Object.keys(j)) {
            let i = o.get(t);
            i && n.push(...i.getNodesForCmsBinding(e.collectionId));
          }
          let i = 1 === n.length ? n[0] : null;
          if (0 === n.length || i && i.id === Object.keys(j)[0]) {
            let e = {};
            e.HYPERLINK = t;
            setVariableConsumptionMap(e);
          } else n.forEach(e => {
            e.updateVariableConsumption("HYPERLINK", t);
          });
        });
      } else e?.type === "internal_cms_item_page_item" ? r(e.id, e.itemId, e.fieldSchemaId) : e?.type === "back" ? (g && (FD() || nh()) && g(), t()) : e?.type === "anchor_link" ? n() : l7.user(Tl, () => {
        null === e ? glU?.setHyperlinkOnCurrentSelection("", null) : "url" === e.type ? (glU?.setHyperlinkOnCurrentSelection(xT(e.url), e.openInNewTab ?? null), s && s()) : "internal" === e.type && (glU?.setHyperlinkOnCurrentSelection(Y5.generateLinkToNode(e.id), null), s && s());
        glU?.hideHyperlinkEditor();
      });
    },
    onOpenInNewTabChange: e => {
      !gl(S) && (S?.type === "cms_link_field_alias" ? (E({
        ...v,
        openInNewTab: e
      }), getFeatureFlags().ds_enable_pdmo || setVariableConsumptionMap({
        HYPERLINK: {
          type: Z_n.CMS_ALIAS,
          resolvedType: rXF.LINK,
          value: {
            collectionId: S.collectionId,
            fieldSchemaId: S.fieldId
          }
        }
      })) : E({
        ...S,
        openInNewTab: e
      }));
    },
    onRemoveLink: () => {
      l();
    },
    recordingKey: f,
    setPropertiesForAnchorLink: a
  });
}
function G({
  link: e,
  linkAction: t,
  onLinkChange: n,
  onAddLink: p,
  onRemoveLink: u,
  onOpenInNewTabChange: h,
  setPropertiesForAnchorLink: m,
  disableOpenInNewTabCheckbox: g,
  disabled: _,
  contentsVisibleOrMixed: b,
  isInteractionModal: v,
  recordingKey: C
}) {
  let E = wA();
  let j = e && !gl(e) && ("url" === e.type || "cms_link_field_alias" === e.type);
  let N = e && !gl(e) && e?.type === "url" && (e?.url.startsWith("mailto:") || e?.url.startsWith("tel:"));
  let A = useCallback(t => {
    !e || gl(e) || e?.type !== "url" || (N ? UA(E, e.url, "sites-link-panel") : E(RK({
      rawInput: e.url,
      event: t
    })));
  }, [E, N, e]);
  let w = () => !e || gl(e) || e?.type !== "url" ? null : jsx(_$$K, {
    onClick: A,
    children: N ? jsx(_$$a, {}) : jsx(_$$V, {}),
    "aria-label": N ? _$$t("sites.panel.copy_link") : _$$t("sites.panel.open_link_new_tab")
  });
  let k = () => jsxs(Fragment, {
    children: [jsx(DE, {
      label: null,
      input: jsx(MO, {
        id: v ? "interaction_modal" : "link_panel",
        disabled: _,
        recordingKey: C,
        link: e,
        onLinkChange: n,
        showCMSLinkFields: getFeatureFlags().dakota
      }),
      icon: w()
    }), j && jsx(TN, {
      children: jsx(_$$S, {
        label: jsx(J, {
          children: tx("proto.action_open_url_in_new_tab")
        }),
        onChange: h,
        recordingKey: Pt(C, "open-url-in-new-tab-check"),
        checked: e.openInNewTab,
        disabled: g
      })
    }), t && !gl(e) && e?.type === "anchor_link" && jsx(_$$k2, {
      action: t,
      recordingKey: C,
      interactionType: "ON_CLICK",
      setPropertiesForAnchorLink: m
    })]
  });
  return jsx(fu, {
    name: "Link panel",
    children: jsx(Zk, {
      children: v ? jsx("div", {
        className: "xz9dl7a",
        children: k()
      }) : jsx(_$$u, {
        title: _$$t("sites.panel.link"),
        addProperty: p,
        removeProperty: u,
        contentsVisibleOrMixed: b,
        recordingKey: C,
        plusButtonLabel: _$$t("sites.panel.create_link"),
        minusButtonLabel: _$$t("sites.panel.remove_link"),
        children: k()
      })
    })
  });
}
function Y(e) {
  return e.mirror.selectionProperties.isValidPrototypingSourceSelected ?? !1;
}
export const rC = $$z0;