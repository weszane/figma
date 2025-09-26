import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { E as _$$E } from "../905/730894";
import { M as _$$M } from "../905/763508";
import { I as _$$I } from "../figma_app/304633";
import { g as _$$g } from "../1250/701065";
import { f as _$$f } from "../9410/764883";
import { r as _$$r } from "../905/857502";
import { N as _$$N } from "../905/201779";
import { LayoutTabType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { VC, uE } from "../figma_app/565242";
import { getCollectionView } from "../905/707993";
import { J6, qs, fn, WI } from "../figma_app/986594";
import { isInvalidValue } from "../905/216495";
import { useDropdownState } from "../905/848862";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { a3, ow } from "../905/188421";
import { c$, sK } from "../905/794875";
import { ServiceCategories } from "../905/165054";
import { c$ as _$$c$, bL, l9, mc } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { reportError } from "../905/11";
import { SvgComponent } from "../905/714743";
import { Vp } from "../figma_app/649254";
import { Ad } from "../figma_app/811257";
import { A as _$$A } from "../svg/274066";
import { u3, MR } from "../figma_app/85384";
let u = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M6.02 4.98a1.314 1.314 0 0 1 1.86 0l2.006 2.007c.55.55.622 1.416.17 2.049a2 2 0 0 0 .213 2.577l1.847 1.846a2 2 0 0 0 2.576.213 1.59 1.59 0 0 1 2.049.17l2.006 2.006a1.316 1.316 0 0 1 0 1.86c-1.946 1.947-4.973 2.312-7.116.584a41 41 0 0 1-3.267-2.928 41 41 0 0 1-2.928-3.268c-1.728-2.143-1.363-5.168.584-7.115m1.152.708a.315.315 0 0 0-.445 0c-1.637 1.637-1.876 4.09-.513 5.781.799.99 1.76 2.09 2.857 3.188a40 40 0 0 0 3.188 2.857c1.69 1.364 4.144 1.125 5.782-.513a.316.316 0 0 0 0-.446l-2.007-2.007a.59.59 0 0 0-.668-.116l-.093.054a3 3 0 0 1-3.864-.32L9.562 12.32a3 3 0 0 1-.32-3.865l.053-.092a.59.59 0 0 0-.116-.67z"
    })
  });
});
function b(e, t) {
  return ("object" == typeof e && null != e || "function" == typeof e) && t in e;
}
function C(e) {
  return "string" == typeof e;
}
function v(e) {
  var t;
  var i;
  return !!(b(e, t = "itemId") && C(e[t])) && !!(b(e, i = "slugFieldId") && C(e[i]) && b(e, "fieldIdToDataMap"));
}
function F({
  initialSelectedItemId: e,
  collectionId: t,
  onLinkChange: i,
  targetNodeId: a
}) {
  let [s, o] = useState(null);
  useEffect(() => {
    o(e);
  }, [e]);
  let l = VC(t);
  let d = Vp(t ?? "").data;
  let c = useMemo(() => null == l || 0 === d.length ? new Map() : new Map(d.map(e => {
    let t = e.id;
    let i = e.fields.find(e => e.fieldSchemaId === l)?.value;
    return null == i || 0 === i.length ? (reportError(ServiceCategories.CMS, Error("item slug is null or empty when computing CMS item page link options"), {
      extra: {
        itemId: t,
        itemSlug: i
      }
    }), [t, ""]) : [t, i];
  })), [d, l]);
  if (!d || !s || !l) return null;
  let u = d.map(e => {
    var t;
    return jsx(_$$c$, {
      value: e.id,
      children: (t = e.id, c.get(t) || (reportError(ServiceCategories.CMS, Error("invalid slug name when formatting a CMS item page link"), {
        extra: {
          itemId: t
        }
      }), ""))
    }, e.id);
  });
  let p = jsxs(bL, {
    value: s,
    onChange: e => {
      if (null == e) {
        reportError(ServiceCategories.CMS, Error("item id is null when setting CMS item page link (slug selector)"));
        return;
      }
      i({
        type: "internal_cms_item_page_item",
        id: a,
        itemId: e,
        fieldSchemaId: l
      });
      o(e);
    },
    children: [jsx("div", {
      className: "xjp7ctv x9hn8t9",
      children: jsx(l9, {
        width: "fill",
        label: jsx(HiddenLabel, {
          children: renderI18nText("sites.panel.link_panel.cms_item")
        }),
        disabled: 0 === d.length
      })
    }), jsx(mc, {
      children: u
    })]
  });
  return jsxs("div", {
    className: "x78zum5 x12mrbbr xh8yej3",
    children: [jsx(SvgComponent, {
      svg: _$$A,
      className: "xyjf476 x1ja3g5x"
    }), jsx(Ad, {
      label: null,
      input: p,
      appendedClassName: "x1ghz6dp x1717udv xh8yej3"
    })]
  });
}
class U extends a3 {}
class G extends c$ {}
function K({
  OriginalComponent: e,
  ...t
}) {
  return jsx(e, {
    ...t,
    className: "link_combo_box--ui3ComboBoxInput--8rKB- ellipsis--ellipsis--Tjyfa"
  });
}
let H = e => "TEXT" === e.type && !!e.hyperlink;
export function $$z1() {
  return !!getSingletonSceneGraph().getDirectlySelectedNodes().find(H);
}
export function $$V3() {
  return useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().some(H));
}
let W = e => !!("TEXT" === e.type && e.textData?.styleOverrideTable?.length) && !!e.textData.styleOverrideTable.find(e => !!e.hyperlink && !!e.hyperlink.url || !!e.hyperlink?.guid);
export function $$Y2() {
  return !!getSingletonSceneGraph().getDirectlySelectedNodes().find(W);
}
export function $$J4() {
  return useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().some(W));
}
export function $$q0({
  id: e,
  link: t,
  onLinkChange: i,
  disabled: b = !1,
  isHyperlinkEditor: C = !1,
  showCMSLinkFields: j = !1,
  recordingKey: N
}) {
  let A = getSingletonSceneGraph().getCurrentPage();
  let O = useMemo(() => (A?.childrenNodes.filter(e => e.isResponsiveSet && !e.getNearestDakotaCollectionId()) ?? []).sort((e, t) => e.name.localeCompare(t.name)), [A?.childrenNodes]);
  let {
    cmsLinkOptions,
    cmsItemPageLinkOptions,
    collectionName,
    cmsLinkFields,
    cmsCollectionId,
    cmsItemPages
  } = function ({
    recordingKey: e,
    showCMSLinkFields: t
  }) {
    let i = getSingletonSceneGraph();
    let a = i.getCurrentPage();
    let s = i.getDirectlySelectedNodes();
    let o = function (e, t) {
      let i = e?.getSelectedTextRange();
      return !!(i && i.start !== i.end && t?.characters) && t.characters.length !== i.end - i.start;
    }(a, s[0]);
    let l = s[0]?.getNearestAncestorDakotaCollectionId() ?? null;
    let d = getCollectionView({
      collectionStableId: l
    });
    let c = d?.collection?.name;
    let u = useMemo(() => (a?.childrenNodes.filter(e => e.isResponsiveSet && null != e.getDakotaSelectorCollectionId()) ?? []).sort((e, t) => e.name.localeCompare(t.name)), [a?.childrenNodes]);
    let p = uE(l ?? "").filter(e => "link" === e.fieldType);
    return {
      collectionName: c,
      cmsLinkOptions: t && getFeatureFlags().dakota ? function ({
        cmsItemPages: e,
        collectionId: t,
        cmsLinkFields: i,
        recordingKey: n,
        hasPartialTextSelection: a
      }) {
        let s = getSingletonSceneGraph().getDirectlySelectedNodes();
        if (0 === s.length || a) return [];
        let o = [];
        if (t && J6(s, t)) {
          let i = e.filter(e => e.isResponsiveSet && e.getNearestDakotaCollectionId() === t).sort((e, t) => e.name.localeCompare(t.name));
          o.push(...i.map(e => jsx(G, {
            value: {
              type: "internal_cms_item_page",
              collectionId: t,
              id: e.guid
            },
            dataTestId: `sites.link_combo_box.cms_repeater_to_item_page_link.${e.name}`,
            recordingKey: generateRecordingKey(n, "option.cms_repeater_to_item_page_link", e.guid)
          }, e.guid)));
        }
        t && qs(s, t) && o.push(...i.map(e => jsx(G, {
          value: {
            type: "cms_link_field_alias",
            collectionId: t,
            fieldId: e.id,
            fieldName: e.name
          },
          dataTestId: `sites.link_combo_box.cms_link_field_link.${e.name}`,
          recordingKey: generateRecordingKey(n, "option.cms_link_field_link", e.name)
        }, e.id)));
        return o;
      }({
        cmsItemPages: u,
        collectionId: l,
        cmsLinkFields: p,
        recordingKey: e,
        hasPartialTextSelection: o
      }) : [],
      cmsItemPageLinkOptions: getFeatureFlags().cms_item_page_links ? function ({
        cmsItemPages: e,
        selectedNodes: t,
        recordingKey: i,
        hasPartialTextSelection: n
      }) {
        return n || fn(t) ? [] : e.map(e => ({
          guid: e.guid,
          data: e.getDakotaItemData()
        })).filter(({
          data: e
        }) => v(e)).map(({
          guid: e,
          data: t
        }) => jsx(G, {
          value: {
            type: "internal_cms_item_page_item",
            id: e,
            itemId: t.itemId,
            fieldSchemaId: t.slugFieldId
          },
          recordingKey: generateRecordingKey(i, "option.cms_item_page_link", e)
        }, e));
      }({
        cmsItemPages: u,
        selectedNodes: s,
        recordingKey: e,
        hasPartialTextSelection: o
      }) : [],
      cmsLinkFields: p,
      cmsCollectionId: l,
      cmsItemPages: u
    };
  }({
    recordingKey: N,
    showCMSLinkFields: j
  });
  let z = getFeatureFlags().sts_links_v2 && !$$Y2() && A?.editModeType !== LayoutTabType.TEXT ? [jsx(G, {
    value: {
      type: "back"
    },
    recordingKey: generateRecordingKey(N, "option.back"),
    icon: jsx(_$$E, {})
  }, "back-link-preset"), jsx(G, {
    value: {
      type: "anchor_link"
    },
    recordingKey: generateRecordingKey(N, "option.anchor_link"),
    icon: jsx(_$$M, {})
  }, "anchor-link-preset")] : [];
  let V = useDispatch();
  let W = useDropdownState();
  let J = useRef(null);
  useEffect(() => {
    C && J.current && (J.current.focus(), J.current.select());
  }, [C, J]);
  let q = useMemo(() => ({
    format: e => isInvalidValue(e) ? getI18nString("fullscreen.mixed") : e?.type === "header" ? e.name : u3(e, O, cmsItemPages),
    parse: e => {
      if (!e) return null;
      let i = e === getI18nString("sites.panel.home") ? "/" : e;
      let r = O.find(e => e.name === i);
      if (r) return {
        type: "internal",
        id: r.guid
      };
      let n = cmsLinkFields.find(e => e.name === i);
      if (n) return {
        type: "cms_link_field_alias",
        collectionId: cmsCollectionId ?? "",
        fieldId: n.id,
        fieldName: n.name
      };
      let a = cmsItemPages.find(e => e.name === i);
      if (a) {
        if (a.getDakotaSelectorCollectionId() === cmsCollectionId) return {
          type: "internal_cms_item_page",
          collectionId: cmsCollectionId ?? "",
          id: a.guid
        };
        {
          let e = a.getDakotaItemData();
          if (v(e)) return {
            type: "internal_cms_item_page_item",
            id: a.guid,
            itemId: e.itemId,
            fieldSchemaId: e.slugFieldId
          };
        }
      }
      return {
        type: "url",
        url: i,
        openInNewTab: !isInvalidValue(t) && t?.type === "url" && t.openInNewTab
      };
    },
    isEqual: (e, t) => MR(e, t)
  }), [O, cmsItemPages, cmsLinkFields, t, cmsCollectionId]);
  return jsxs(ow, {
    value: {
      inputComponent: C ? void 0 : K
    },
    children: [jsxs(U, {
      chevronClassName: C ? "link_combo_box--sitesHyperlinkEditorChevron--X-K3X" : void 0,
      dataTestId: "sites_link_combo_box_input",
      disabled: b,
      dispatch: V,
      dropdownShown: W,
      dropdownWidth: getFeatureFlags().sts_links_v2 ? 184 : 172,
      forceInputPlaceholder: null === t,
      formatter: q,
      forwardedRef: J,
      icon: C ? null : isInvalidValue(t) || t?.type !== "back" ? isInvalidValue(t) || t?.type !== "anchor_link" ? isInvalidValue(t) || t?.type !== "url" ? jsx(_$$N, {}) : t?.url.startsWith("mailto:") ? jsx(_$$f, {}) : t?.url.startsWith("tel:") ? jsx(u, {}) : jsx(_$$r, {}) : jsx(_$$M, {}) : jsx(_$$E, {}),
      id: e,
      inputClassName: C ? "link_combo_box--sitesHyperlinkEditor--q6R2y input--darkInput--zfbnG" : "link_combo_box--linkPanelComboBox--lmY7a",
      omitValueFromDropdown: isInvalidValue(t) || t?.type === "internal" || null == t,
      onChange: e => {
        e?.type !== "header" && i(e);
      },
      openBelowTarget: !0,
      placeholder: getI18nString("sites.panel.search_responsive_sets"),
      property: t,
      recordingKey: N,
      children: [cmsLinkOptions.length > 0 && [jsx(G, {
        isHeader: !0,
        disabled: !0,
        dataTestId: "sites.link_combo_box.cms_header",
        value: {
          type: "header",
          name: collectionName ?? getI18nString("sites.panel.link_panel.cms_header")
        },
        recordingKey: generateRecordingKey(N, "option.cms_header")
      }, "cms-header"), ...cmsLinkOptions, jsx(sK, {}, "cms-webpages-divider"), jsx(G, {
        isHeader: !0,
        disabled: !0,
        dataTestId: "sites.link_combo_box.webpages_header",
        recordingKey: generateRecordingKey(N, "option.webpages_header"),
        value: {
          type: "header",
          name: getI18nString("sites.panel.link_panel.webpages_header")
        }
      }, "webpages-header")], O.map(e => jsx(G, {
        icon: "/" === e.name ? jsx(_$$I, {}) : jsx(_$$g, {}),
        dataTestId: `sites.link_combo_box.responsive_set.${e.name}`,
        value: {
          type: "internal",
          id: e.guid
        },
        recordingKey: generateRecordingKey(N, "option", e.name)
      }, e.guid)), ...cmsItemPageLinkOptions, z.length > 0 && [jsx(sK, {}, "link-preset-divider"), ...z]]
    }), t && !isInvalidValue(t) && "internal_cms_item_page_item" === t.type && jsx(F, {
      targetNodeId: t.id,
      initialSelectedItemId: t.itemId,
      onLinkChange: i,
      collectionId: WI(t.id)
    })]
  });
}
export const MO = $$q0;
export const nh = $$z1;
export const FD = $$Y2;
export const e5 = $$V3;
export const gA = $$J4;