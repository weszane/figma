import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { Fullscreen, StateHierarchy, SceneGraphHelpers } from "../figma_app/763686";
import { createRecordingCallback, generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { Tg } from "../figma_app/967154";
import { i$ } from "../figma_app/150804";
import { useMemo, useState, useRef, useCallback, useId } from "react";
import { Button } from "../905/521428";
import { e as _$$e } from "../figma_app/763473";
import { At } from "../905/973142";
import { deepEqual } from "../905/382883";
import { isNotNullish } from "../figma_app/95419";
import { permissionScopeHandler } from "../905/189185";
import { trackEventAnalytics } from "../905/449184";
import { F4 } from "../figma_app/889655";
import { Lg, od } from "../figma_app/505098";
import { isInvalidValue } from "../905/216495";
import { fI } from "../figma_app/626177";
import { u as _$$u } from "../905/419626";
import { Uz } from "../905/63728";
import { X as _$$X } from "../905/606795";
import { L as _$$L } from "../905/408237";
import { fullscreenValue } from "../figma_app/455680";
import { N as _$$N } from "../905/438674";
import { v as _$$v } from "../figma_app/258006";
import { G as _$$G } from "../figma_app/404079";
import { uA, Wv, Im, kL } from "../figma_app/454622";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { s as _$$s } from "../cssbuilder/589278";
import { h as _$$h } from "../905/207101";
import { Point } from "../905/736624";
import { XE } from "../figma_app/91703";
import { _P, k4 } from "../figma_app/164212";
import { Tv } from "../figma_app/151869";
import { Ao } from "../905/748636";
import { t as _$$t2 } from "../905/150656";
import { A as _$$A } from "../2854/372209";
import { A as _$$A2 } from "../2854/253373";
function h(e) {
  let {
    containerClassName,
    isHTMLString,
    onExpandCallback,
    text
  } = e;
  let s = useMemo(() => isHTMLString ? At(text) : text, [isHTMLString, text]);
  let [o, l] = useState(!1);
  let d = useRef(null);
  let h = useCallback(() => l(!1), []);
  let m = _$$e({
    ref: d,
    onTextChange: h,
    text: s
  });
  let g = useCallback(() => {
    onExpandCallback ? onExpandCallback(!o) : l(!o);
  }, [o, onExpandCallback]);
  let f = o ? "Show less" : "Show more";
  return jsxs("div", {
    className: `${containerClassName} expandable_text_container--container--fauZM`,
    children: [jsx("div", {
      ref: d,
      className: o ? "" : "expandable_text_container--truncatedText--Zh19Y ellipsis--ellipsis--Tjyfa",
      children: s
    }), m && jsx(Button, {
      variant: "link",
      onClick: g,
      children: f
    })]
  });
}
function v(e) {
  let {
    description,
    isViewOnly,
    onSubmitDescription
  } = e;
  let a = isInvalidValue(description);
  let s = A(description);
  let l = useId();
  let d = useCallback((e, r) => {
    e !== A(description) && (0 === r.trim().length ? onSubmitDescription("", "") : onSubmitDescription(e, r));
  }, [description, onSubmitDescription]);
  let u = useCallback(e => {
    e.stopPropagation();
  }, []);
  return jsxs(fI, {
    className: "component_description_input--textRow--XaBSX component_controls_picker--inputRow--piRyG sf_pro--uiFontWithSFProFallback--m-p9V",
    onMouseDown: u,
    onPointerDown: u,
    children: [jsx("div", {
      id: l,
      className: isViewOnly ? "component_description_input--labelViewOnly--b6HSj component_description_input--label--MNLD-" : "component_description_input--label--MNLD-",
      children: renderI18nText("design_systems.component_panel.description")
    }), jsx(_$$u, {
      namespace: isViewOnly ? "component-description-lexical-editor-read-only" : "component-description-lexical-editor",
      description: s,
      isViewOnly,
      placeholder: a ? getI18nString("design_systems.component_panel.description_mixed") : getI18nString("design_systems.component_panel.description_placeholder"),
      onSave: d,
      ariaLabelledBy: l,
      recordingKey: e.recordingKey
    })]
  });
}
function A(e) {
  return isInvalidValue(e) ? getI18nString("design_systems.component_panel.description_mixed") : e;
}
let O = /^\w+:/;
function R(e) {
  let {
    links,
    onSubmitLinks
  } = e;
  let [i, a] = useState(null);
  let l = useCallback(e => e.keyCode === Uz.ENTER && !e.shiftKey && (e.currentTarget.blur(), !0), []);
  let d = useCallback(e => {
    a(e.target.value);
  }, [a]);
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseUp,
      onMouseLeave,
      onKeyUp
    }
  } = _$$X({
    onChange: d
  });
  let f = links?.find(e => e);
  let E = useCallback(() => {
    if (null !== i) {
      if (i.length < 1) {
        onSubmitLinks([]);
        fullscreenValue.commit();
        return;
      }
      onSubmitLinks([{
        uri: i.match(O) ? i : `https://${i}`
      }]);
      fullscreenValue.commit();
      a(null);
    }
  }, [onSubmitLinks, i, a]);
  let y = createRecordingCallback(e);
  let b = useId();
  let T = i;
  return jsxs(Fragment, {
    children: [jsx("div", {
      id: b,
      className: "documentation_link_input--label--ATBu1",
      children: renderI18nText("design_systems.component_panel.link")
    }), jsx(fI, {
      className: "documentation_link_input--row--Ph7Ip component_controls_picker--inputRow--piRyG sf_pro--uiFontWithSFProFallback--m-p9V",
      children: jsx(_$$L, {
        ref: inputRef,
        "aria-labelledby": b,
        className: "documentation_link_input--documentationLink--3NlJC raw_components--textAreaInput--mi1Ag raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u ellipsis--ellipsis--Tjyfa",
        onBlur: E,
        onChange,
        onFocus,
        onKeyDown: l,
        onKeyUp,
        onMouseLeave,
        onMouseUp,
        placeholder: getI18nString("design_systems.component_panel.link_to_documentation"),
        recordingKey: y("componentSymbolLinks"),
        value: T || ""
      }, "symbol-link")
    })]
  });
}
function k({
  links: e
}) {
  let t = e?.[0];
  if (null == t) return null;
  let r = jsxs("span", {
    className: "component_link_display--linkWrapper--sxTXs",
    children: [jsx("span", {
      className: "component_link_display--favicon--BwLu-",
      children: jsx(_$$v, {
        url: t.uri
      })
    }), jsx("span", {
      className: "component_link_display--ellipsize--xnG6e",
      children: t.uri
    })]
  });
  return jsxs("div", {
    className: "component_link_display--wrapper--CLPXG",
    children: [jsx("div", {
      className: "component_link_display--header--fts8b",
      children: renderI18nText("design_systems.component_panel.link")
    }), t.uri && _$$G(t.uri) ? jsx(_$$N, {
      trusted: !1,
      href: t.uri,
      newTab: !0,
      children: r
    }) : r]
  });
}
function B() {
  let e = useSelector(e => {
    let t = Lg(e) ?? "";
    return e.mirror.sceneGraph.get(t)?.simplifyInstancePanels ?? !1;
  });
  return jsx("div", {
    className: _$$s.bSolid.bt1.colorBorder.pt16.pb28.pl12.pr12.$,
    children: jsxs(Checkbox, {
      checked: e,
      label: jsx(Label, {
        children: getI18nString("design_systems.component_panel.simplify_instances")
      }),
      onChange: () => permissionScopeHandler.user("simplify-instance-panels", () => Fullscreen.setSimplifyInstancePanels(!e)),
      recordingKey: "simplifyInstancePanelsCheckbox",
      htmlAttributes: {
        "data-testid": "simplify-instance-panels-checkbox"
      },
      children: [renderI18nText("design_systems.component_panel.simplify_instances_help_text"), jsxs(Fragment, {
        children: ["\xa0", jsx(_$$N, {
          href: "https://help.figma.com/hc/articles/5579474826519-Explore-component-properties#simplified",
          newTab: !0,
          trusted: !0,
          children: renderI18nText("general.learn_more")
        })]
      })]
    })
  });
}
function G(e) {
  let {
    descriptionElement,
    menuType,
    description,
    links,
    pickerShown
  } = e;
  let p = useSelector(i$);
  let _ = pickerShown.id === uA;
  let h = useSelector(e => "state-group" === menuType ? [od(e)].filter(e => null != e) : F4(e));
  let g = useCallback((e, t) => {
    permissionScopeHandler.user("set-description", () => {
      for (let r of h) r.setDescriptionRich(e, t);
    });
    let {
      componentKeys,
      updatedNodeIds
    } = V(h);
    trackEventAnalytics("component description updated", {
      updatedNodeIds,
      componentKeys,
      isRichText: !0,
      length: e.length
    });
  }, [h]);
  let T = useCallback(e => {
    for (let t of h) deepEqual(t.symbolLinks, e) || (t.symbolLinks = e);
    let {
      componentKeys,
      updatedNodeIds
    } = V(h);
    trackEventAnalytics("component links updated", {
      updatedNodeIds,
      componentKeys
    });
  }, [h]);
  let I = pickerShown?.id === Wv && p !== StateHierarchy.STATE;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: _ ? "component_controls_menu--descriptionContainerViewOnly--VAeo9 component_controls_menu--descriptionContainer--me8J2" : "component_controls_menu--descriptionContainer--me8J2",
      children: [descriptionElement, jsx(v, {
        description,
        isViewOnly: _,
        onSubmitDescription: g,
        recordingKey: generateRecordingKey(e, "componentDescriptionText")
      }, menuType), pickerShown.id === Wv ? jsx(R, {
        links,
        onSubmitLinks: T
      }) : jsx(k, {
        links
      })]
    }), I && jsx(B, {})]
  });
}
function V(e) {
  let t = e.map(e => e.guid);
  let r = t.map(e => SceneGraphHelpers.getAssetKeyForPublish(e)).filter(isNotNullish).map(e => e.toString());
  return {
    updatedNodeIds: t,
    componentKeys: r
  };
}
function X({
  children: e
}) {
  let t = useDispatch();
  let r = useSelector(e => e.pickerShown);
  let s = useSelector(e => e.mirror.sceneGraph);
  let d = Tv();
  let c = Tg();
  let u = c?.find(e => e);
  let p = new Point(r?.initialX, r?.initialY);
  _$$h(() => {
    let e = r?.id === uA;
    let t = _P(u?.uri);
    let n = d?.map(e => r?.id === Wv ? SceneGraphHelpers.getAssetKeyForPublish(e) : r?.id === uA ? SceneGraphHelpers.getAssetKeyForPublish(k4([e], s) ?? "") : "").filter(isNotNullish).map(e => e.toString());
    trackEventAnalytics("Component documentation modal opened", {
      hostname: t,
      selectedNodeIds: d,
      componentKeys: n,
      isInstance: e
    });
  });
  let _ = r?.id === uA ? getI18nString("design_systems.component_panel.component_documentation") : getI18nString("design_systems.component_panel.component_controls");
  return jsx(Ao, {
    autoflowHeight: !0,
    headerSize: "small",
    initialPosition: p,
    initialWidth: Im,
    onClose: () => {
      t(XE());
    },
    scrollOverflow: !1,
    title: _,
    recordingKey: "componentControlsWindow",
    children: e
  });
}
let Q = ["component_set", "selected_variant"];
let ee = {
  component_set: !0,
  selected_variant: !0
};
let et = {
  component_set: {
    displayName: () => getI18nString("design_systems.component_panel.component_set"),
    icon: _$$A
  },
  selected_variant: {
    displayName: () => getI18nString("design_systems.component_panel.selected_variant"),
    icon: _$$A2
  }
};
function er({
  description: e,
  links: t,
  containingStateGroupDescription: r,
  containingStateGroupLinks: a,
  isViewOnly: o,
  recordingKey: l
}) {
  var d;
  let [c,, u] = _$$t2.useTabs(ee, {
    defaultActive: (d = t ?? [], !o || isInvalidValue(e) || e.length > 0 || d.length > 0 ? "selected_variant" : "component_set"),
    recordingKey: l ?? "variantDocumentationMenu"
  });
  let p = !o || (e || t?.length) && (r || a?.length);
  let _ = useSelector(e => e.pickerShown);
  return kL(_) ? jsxs(Fragment, {
    children: [!!p && jsx("div", {
      className: "variant_documentation_menu--ui3TabContainer--P2Vqv",
      children: jsx(_$$t2.TabStrip, {
        manager: u,
        children: Q.map(e => jsx(_$$t2.Tab, {
          ...c[e],
          children: et[e].displayName()
        }, e))
      })
    }), jsx(G, {
      pickerShown: _,
      menuType: "selected_variant" === u.activeTab ? "selection" : "state-group",
      description: "selected_variant" === u.activeTab ? e : r ?? "",
      links: "selected_variant" === u.activeTab ? t : a,
      recordingKey: generateRecordingKey(l, "componentControlsMenu")
    })]
  }) : null;
}
export function $$en0(e) {
  let {
    description,
    containingStateGroupDescription,
    containingStateGroupLinks
  } = e;
  let u = useSelector(i$);
  let p = useSelector(e => e.pickerShown);
  let _ = Tg();
  return kL(p) ? jsx(X, {
    children: u === StateHierarchy.STATE || u === StateHierarchy.STATE_INSTANCE ? jsx(er, {
      description,
      links: _,
      containingStateGroupDescription,
      containingStateGroupLinks,
      isViewOnly: p.id === uA,
      recordingKey: generateRecordingKey(e, "variantDocumentationMenu")
    }) : jsx(G, {
      description,
      links: _,
      descriptionElement: containingStateGroupDescription ? jsxs(Fragment, {
        children: [jsx(h, {
          isHTMLString: !0,
          containerClassName: "component_controls_picker--stateGroupDescriptionContainer--ggLn7",
          text: containingStateGroupDescription
        }), jsx("p", {
          className: "component_controls_picker--header--ELquL",
          children: renderI18nText("design_systems.component_panel.current_variant")
        })]
      }) : void 0,
      menuType: "selection",
      pickerShown: p,
      recordingKey: generateRecordingKey(e, "componentControlsMenu")
    })
  }) : null;
}
export const K = $$en0;