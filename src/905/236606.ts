import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, createContext, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { ButtonPrimitive } from "../905/632989";
import { Fullscreen } from "../figma_app/763686";
import d from "classnames";
import { jB, My } from "../vendor/46587";
import { tH, H4 } from "../905/751457";
import { getI18nString, renderI18nText } from "../905/303541";
import { k as _$$k } from "../905/963262";
import { Fj } from "../figma_app/793429";
import { Z4, M$, NT, Q6 } from "../905/77776";
import { kt } from "../figma_app/711907";
import { G6, P1 } from "../905/246310";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { useSubscribedLibraries } from "../figma_app/155728";
import { eT } from "../figma_app/617506";
import { ON, gs } from "../figma_app/31103";
import { hideModalHandler, showModal } from "../905/156213";
import { t8, G6 as _$$G, hg, u as _$$u } from "../figma_app/852050";
import { registerModal } from "../905/102752";
import { Cj } from "../figma_app/151869";
import { Hr } from "../figma_app/394327";
import { wG } from "../905/331989";
import { MatchingVariablesModalWidth, ModalMaxHeight, MatchingVariablesModal, VariableDetailModal, StyleDetailModalWidth, ModalPadding, ModalWindowType, StyleDetailModal, VariableDetailModalWidth } from "../905/560959";
import { parsePxNumber } from "../figma_app/783094";
import { a as _$$a } from "../figma_app/289605";
import { ZGX } from "../figma_app/27776";
import { selectViewAction } from "../905/929976";
import { isVsCodeEnvironment } from "../905/858738";
import { getSelectedView } from "../figma_app/386952";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { KindEnum } from "../905/129884";
import { cn } from "../905/959568";
import { P as _$$P } from "../905/647955";
var c = d;
let N = "matching_vars_modal--libraryName--LgwjY ellipsis--ellipsis--Tjyfa";
function P({
  variable: e
}) {
  let t = ON();
  let i = Cj(e.name);
  let a = t8(e.node_id);
  let s = useCallback(e => {
    i && (t("row_copied", {
      type: "name"
    }), i());
    e.currentTarget?.blur();
  }, [i, t]);
  return jsx("div", {
    className: "matching_vars_modal--variableContainer--t57sg",
    children: jsx(wG, {
      ariaLabel: e.name,
      text: e.name,
      tooltip: e.description,
      onClick: s,
      useHoveredStyle: !0,
      thumbnailValue: a,
      forceUI3ColorPill: !0,
      fullWidth: !0,
      ui3Height: !0
    })
  });
}
function O({
  variableGroup: e,
  rawValue: t
}) {
  let i = _$$G(e?.variableSetId);
  let a = e.variables[0];
  let s = i?.name;
  let o = function (e) {
    let t = useSubscribedLibraries();
    return useMemo(() => "loaded" === t.status && e ? t.data.find(t => e === t.libraryKey) : null, [e, t.status, t.data]);
  }(a?.subscriptionStatus === "SUBSCRIBED" ? a?.library_key : void 0);
  let l = o ? o.name : getI18nString("dev_handoff.variables.suggested_variables.library_not_found");
  let d = i?.subscriptionStatus === "SUBSCRIBED" ? l : getI18nString("dev_handoff.variables.details_local");
  return jsxs("div", {
    className: "matching_vars_modal--variablesGroup--eqnoq",
    children: [jsxs("div", {
      className: "matching_vars_modal--groupNameRow--24f0-",
      children: [jsx("div", {
        className: N,
        children: d
      }), jsx("div", {
        className: c()(N, "matching_vars_modal--divider--Z1Xgx"),
        children: "/"
      }), jsx("div", {
        className: "matching_vars_modal--collectionName--rvWb2 ellipsis--ellipsis--Tjyfa",
        children: s
      })]
    }), e.variables.map(e => jsx(P, {
      variable: e,
      rawValue: t
    }, e.node_id))]
  });
}
function D({
  variableIds: e,
  rawValue: t
}) {
  let i = Object.entries(hg(e, !0).reduce((e, t) => {
    if (!t) return e;
    let i = t.variableSetId;
    let n = e[i] ?? [];
    e[i] = [...n, t];
    return e;
  }, {})).map(([e, t]) => ({
    variableSetId: e,
    variables: t
  })).sort((e, t) => e.variables[0]?.subscriptionStatus === "LOCAL" ? -1 : t.variables[0]?.subscriptionStatus === "LOCAL" ? 1 : 0);
  return jsx(Fragment, {
    children: i.map(e => jsx(O, {
      variableGroup: e,
      rawValue: t
    }, e.variableSetId))
  });
}
let L = registerModal(function (e) {
  eT();
  let t = useDispatch();
  let i = useCallback(() => {
    t(hideModalHandler());
  }, [t]);
  let o = _$$u(e?.vars?.ids?.[0]);
  let l = o ? Hr(o.resolvedType) : void 0;
  let d = useMemo(() => ({
    numSuggestions: e.vars.ids.length,
    entrypoint: e.entryPoint,
    variableTypeForTracking: l
  }), [e.entryPoint, e.vars.ids.length, l]);
  return jsx(tH, {
    boundaryKey: "suggestedVars_modal",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(gs, {
      name: "suggestions_modal",
      trackingProps: d,
      children: jsx(bL, {
        defaultPosition: e.position,
        width: MatchingVariablesModalWidth,
        maxHeight: ModalMaxHeight,
        onClose: i,
        recordingKey: "variableDetailsWindow",
        children: jsxs(DialogContents, {
          children: [jsx(DialogHeader, {
            children: jsx(DialogTitle, {
              children: renderI18nText("dev_handoff.variables.suggested_variables.title")
            })
          }), jsx(DialogBody, {
            padding: 0,
            children: jsx("div", {
              className: "matching_vars_modal--matchingVarsModal--1krq8",
              children: jsx(D, {
                variableIds: e.vars.ids,
                rawValue: e.vars.rawValue
              }, e.vars.rawValue.value.toString())
            })
          })]
        })
      })
    })
  });
}, MatchingVariablesModal);
let U = parsePxNumber(ZGX);
let B = registerModal(function (e) {
  eT();
  let t = useSubscribedLibraries();
  let i = useDispatch();
  let o = useCallback(() => {
    i(hideModalHandler());
  }, [i]);
  return "loading" === t.status ? null : jsx(tH, {
    boundaryKey: "varDetails_modal",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(bL, {
      defaultPosition: e.position,
      width: U,
      maxHeight: ModalMaxHeight,
      onClose: o,
      recordingKey: "variableDetailsWindow",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("dev_handoff.variables.details_title")
          })
        }), jsx(DialogBody, {
          padding: 0,
          children: jsx(_$$a, {
            variableId: e.variableId,
            onClose: o,
            isDetailsModal: !0,
            surface: "modal",
            entryPoint: e.entryPoint
          })
        })]
      })
    })
  });
}, VariableDetailModal);
let q = /Color\((0x[0-9a-fA-F]{8})\)/gi;
let $ = /(Color\(red: (\d*\.?\d*), green: (\d*\.?\d*), blue: (\d*\.?\d*)\)(\.opacity\((\d*\.?\d*)\))?)/gi;
let Z = /(#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|rgba?\(\d+,\s*\d+,\s*\d+,\s*\d+(?:\.\d+)?\)|color\(\s*(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)\s+((\d+|\d*\.\d+|%|none)\s*){3}(\/\s*(\d+|\d*\.\d+|%|none)\s*)?\))/gi;
let X = ({
  token: e
}) => ({
  className: c()("token", ...e.types),
  children: e.content
});
function Q({
  token: e,
  pills: t,
  colors: i
}) {
  if (e.content.match(/INTERNALCHITID([0-9]*)_/g)) {
    let t = [];
    let r = Array.from(e.content.matchAll(/INTERNALCHITID([0-9]*)_/g));
    let a = 0;
    for (let [s, o] of r.entries()) {
      let r = o?.index;
      let l = i[o?.[1] ?? ""];
      l && void 0 !== r && (e.content.substring(a, r).length > 0 && t.push(jsx("span", {
        ...X({
          token: {
            ...e,
            content: e.content.substring(a, r)
          }
        })
      }, `segment-${s}`)), t.push(jsxs("span", {
        className: "chit-container",
        children: [jsx("span", {
          className: "token chit",
          style: {
            backgroundColor: l.cssColor
          }
        }), jsx("span", {
          className: "token plain",
          children: l.highlightedColor
        })]
      }, `${s}-chit`)), a = r + o[0].length);
    }
    a < e.content.length && t.push(jsx("span", {
      ...X({
        token: {
          ...e,
          content: e.content.substring(a)
        }
      })
    }, "end-segment"));
    return jsx(Fragment, {
      children: t
    });
  }
  if (e.content.match(_$$k)) {
    let i = [];
    for (let r of e.content.matchAll(_$$k)) {
      let e = t[r[0]];
      if (e) switch (e.type) {
        case "INSTANCE":
          {
            let {
              name,
              id
            } = e;
            i.push(jsx("span", {
              className: "token instance-pill",
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("dev_handoff.inspect_panel.inspect_nested_component"),
              "data-id": id,
              children: name
            }));
            break;
          }
        case "ERROR":
          {
            let {
              message,
              id,
              errorObject
            } = e;
            let s = t;
            errorObject?.type === "PROPERTY_NOT_FOUND" ? s = getI18nString("dev_handoff.figmadocs.error_property_not_found", {
              propertyName: errorObject.propertyName
            }) : errorObject?.type === "PROPERTY_TYPE_MISMATCH" ? s = getI18nString("dev_handoff.figmadocs.error_property_type_mismatch", {
              propertyName: errorObject.propertyName,
              propertyType: errorObject.expectedType
            }) : errorObject?.type === "CHILD_LAYER_NOT_FOUND" ? s = getI18nString("dev_handoff.figmadocs.error_child_layer_not_found", {
              layerName: errorObject.layerName
            }) : errorObject?.type === "CHILD_LAYER_ID_NOT_FOUND" && (s = getI18nString("dev_handoff.figmadocs.error_child_layer_id_not_found", {
              codeConnectId: errorObject.codeConnectId
            }));
            i.push(jsx("span", {
              className: "token error-pill",
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": s,
              "data-id": id,
              children: getI18nString("dev_handoff.code_connect.error_pill_text")
            }));
          }
      } else i.push(jsx("span", {
        className: "token instance-pill",
        children: "INSTANCE_NOT_FOUND"
      }));
    }
    return jsx(Fragment, {
      children: i
    });
  }
  return jsx("span", {
    ...X({
      token: e
    })
  });
}
export let $$J0 = createContext({});
function ee({
  children: e,
  varId: t
}) {
  let i = _$$u(t);
  let {
    ref
  } = useContext($$J0);
  let d = useDispatch();
  let u = _$$P();
  let m = getSelectedView();
  let h = useRef(null);
  let g = useCallback(() => {
    if (ref?.current && h?.current && "fullscreen" === m.view) {
      if (isVsCodeEnvironment()) d(selectViewAction({
        ...m,
        variableIdForDetailsPanel: t
      }));else {
        let e = cn(ref.current, StyleDetailModalWidth + ModalPadding);
        d(showModal({
          type: B.type,
          data: {
            position: e,
            variableId: t,
            rowRef: h,
            entryPoint: ModalWindowType.CodeWell
          },
          optOutOfPrevModal: !0
        }));
      }
    }
  }, [d, ref, t, m]);
  let f = useSelector(e => e.modalShown);
  if (u) return jsx(Fragment, {
    children: e
  });
  let _ = isVsCodeEnvironment() ? t === m.variableIdForDetailsPanel : f?.type === B.type && f.data?.variableId === t && f.data?.rowRef === h;
  let A = i?.subscriptionStatus === "LOCAL" && i.isSoftDeleted;
  return jsx(tH, {
    boundaryKey: "varDetails_codeEntry",
    fallback: jsx(Fragment, {
      children: e
    }),
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(ButtonPrimitive, {
      ref: h,
      className: c()("bound-variable", A && "bound-variable-deleted", _ && "bound-variable-active"),
      onClick: g,
      recordingKey: `bound-variable-${t}`,
      children: jsx("span", {
        children: e
      })
    })
  });
}
function et({
  children: e,
  styleId: t
}) {
  let i = Fj(t);
  let {
    ref
  } = useContext($$J0);
  let u = _$$P();
  let m = useRef(null);
  let h = getSelectedView();
  let f = useDispatch();
  let _ = useSelector(e => e.modalShown);
  let A = !!_ && _.type === StyleDetailModal;
  let y = isVsCodeEnvironment() ? t === h.styleForDetailsPanel?.styleId : A && _.data?.rowRef && _.data.rowRef.current === m?.current;
  let {
    key,
    content_hash,
    style_type
  } = i ?? {};
  let E = useMemo(() => ({
    key,
    version: content_hash
  }), [key, content_hash]);
  let S = useDeepEqualSceneValue((e, t) => e.getStyleNodeByRef(t)?.guid, E);
  let w = useCallback(e => {
    if (e.stopPropagation(), m?.current && t && S && ref?.current) {
      if (y) {
        isVsCodeEnvironment() ? f(selectViewAction({
          ...h,
          styleForDetailsPanel: void 0
        })) : f(hideModalHandler());
        return;
      }
      if (Fullscreen?.selectStyleByGuid(S), isVsCodeEnvironment()) f(selectViewAction({
        ...h,
        styleForDetailsPanel: {
          styleId: t,
          styleNodeId: S,
          styleType: style_type
        }
      }));else {
        A && f(hideModalHandler());
        let e = cn(ref.current, VariableDetailModalWidth + ModalPadding);
        f(showModal({
          type: StyleDetailModal,
          data: {
            styleId: t,
            styleType: style_type,
            styleNodeId: S,
            position: e,
            rowRef: m
          },
          optOutOfPrevModal: !0
        }));
      }
    }
  }, [f, A, y, m, ref, h, t, S, style_type]);
  if (u || isVsCodeEnvironment() || !i) return jsx(Fragment, {
    children: e
  });
  let C = isVsCodeEnvironment() ? t === h.styleForDetailsPanel?.styleId : _?.type === StyleDetailModal && _.data?.styleNodeId === S && _.data?.rowRef === m;
  return jsx(tH, {
    boundaryKey: "styleDetails_codeEntry",
    fallback: jsx(Fragment, {
      children: e
    }),
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(ButtonPrimitive, {
      ref: m,
      className: c()("bound-variable", C && "bound-variable-active"),
      onClick: w,
      recordingKey: `bound-style-${t}`,
      children: jsx("span", {
        children: e
      })
    })
  });
}
function ei({
  children: e,
  vars: t,
  dispatch: i
}) {
  let {
    ref
  } = useContext($$J0);
  let d = useRef(null);
  let u = useCallback(() => {
    if (!ref?.current || !d?.current) return;
    let e = cn(ref.current, MatchingVariablesModalWidth + ModalPadding);
    i(showModal({
      type: L.type,
      data: {
        vars: t,
        position: e,
        rowRef: d,
        entryPoint: ModalWindowType.CodeWell
      },
      optOutOfPrevModal: !0
    }));
  }, [i, ref, t]);
  let h = useSelector(e => e.modalShown);
  let g = _$$P();
  let f = t.ids.length;
  if (isVsCodeEnvironment() || g || f < 1) return jsx(Fragment, {
    children: e
  });
  let _ = h?.type === L.type && h.data?.vars?.rawValue === t.rawValue && h.data?.rowRef === d;
  return jsx(tH, {
    boundaryKey: "suggestedVars_codeEntry",
    fallback: jsx(Fragment, {
      children: e
    }),
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(ButtonPrimitive, {
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.code_panel.suggested_vars_tooltip", {
          count: f
        }),
        "data-tooltip-show-above": !0
      },
      className: c()("suggested-variable", _ && "suggested-variable-active"),
      onClick: u,
      ref: d,
      recordingKey: `suggested-variable-${t.ids.join("-")}`,
      children: jsx("span", {
        children: e
      })
    })
  });
}
export function $$en1(e, t, i = {}, a, s) {
  let {
    colors,
    codeWithColorChits
  } = useMemo(() => {
    let i = {};
    let n = function (e) {
      switch (e) {
        case "kotlin":
          return q;
        case "swift":
          return $;
        default:
          return Z;
      }
    }(t);
    let r = function (e) {
      switch (e) {
        case "kotlin":
          return e => e.replace(/0x([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/, "#$2$3$4$1");
        case "swift":
          let t = e => Math.round(255 * e).toString(16).padStart(2, "0");
          return e => e.replace($, (e, ...i) => {
            let [n, r, a, s, o, l = 1] = i;
            return `#${t(r)}${t(a)}${t(s)}${t(l)}`;
          });
        default:
          return e => e;
      }
    }(t);
    let a = 0;
    let s = kt(e).replace(n, (e, t) => e ? (i[`${a}`] = {
      highlightedColor: t,
      cssColor: r(t)
    }, e.replace(t, `INTERNALCHITID${a++}_`)) : "");
    return {
      colors: i,
      codeWithColorChits: s
    };
  }, [e, t]);
  let d = jB({
    code: codeWithColorChits,
    language: t,
    grammar: My.languages[t],
    prism: My
  });
  return useMemo(() => d.map((t, r) => {
    let l = e[r];
    let d = function (e) {
      let t = [];
      let i = {
        tokens: []
      };
      e.forEach(e => {
        if (e.types.includes("comment") && e.content.match(Z4)) {
          let n = Z4.exec(e.content)[1];
          t.push(i);
          i = {
            tokens: [],
            varId: n
          };
        } else if (e.types.includes("comment") && e.content.match(M$)) {
          t.push(i);
          i = {
            tokens: []
          };
        } else if (e.types.includes("comment") && e.content.match(NT)) {
          let n = NT.exec(e.content)[1];
          t.push(i);
          i = {
            tokens: [],
            styleId: n
          };
        } else if (e.types.includes("comment") && e.content.match(Q6)) {
          t.push(i);
          i = {
            tokens: []
          };
        } else if (e.types.includes("comment") && e.content.match(G6)) {
          let n = G6.exec(e.content)[1];
          t.push(i);
          i = {
            tokens: [],
            matchId: n
          };
        } else e.types.includes("comment") && e.content.match(P1) ? (t.push(i), i = {
          tokens: []
        }) : i.tokens.push(e);
      });
      i.tokens.length > 0 && t.push(i);
      return t;
    }(t);
    return {
      ...l,
      code: jsx("div", {
        className: "token-line",
        children: d.map((e, t) => {
          if ("varId" in e && e.varId) {
            let r = e.varId;
            return jsx(ee, {
              varId: r,
              children: e.tokens.map((e, t) => jsx(Q, {
                token: e,
                pills: i,
                colors,
                onInstancePillClick: s
              }, t))
            }, `${t}`);
          }
          if ("styleId" in e && e.styleId) {
            let r = e.styleId;
            return jsx(et, {
              styleId: r,
              children: e.tokens.map((e, t) => jsx(Q, {
                token: e,
                pills: i,
                colors,
                onInstancePillClick: s
              }, t))
            }, t);
          }
          if ("matchId" in e && e.matchId) {
            let r = l.matchingVars;
            let d = r?.[e.matchId];
            if (d) return jsx(ei, {
              vars: d,
              dispatch: a,
              children: e.tokens.map((e, t) => jsx(Q, {
                token: e,
                pills: i,
                colors,
                onInstancePillClick: s
              }, t))
            }, `${t}`);
          }
          return e.tokens.map((e, r) => jsx(Q, {
            token: e,
            pills: i,
            colors,
            onInstancePillClick: s
          }, `${t}-${r}`));
        })
      }, r)
    };
  }), [d, e, a, i, colors, s]);
}
export const GM = $$J0;
export const IG = $$en1;