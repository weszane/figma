import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { Et } from "../figma_app/397267";
import { bL } from "../905/911410";
import { vo, Y9, nB } from "../figma_app/272243";
import { J as _$$J } from "../905/799737";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { NX } from "../figma_app/243213";
import { h as _$$h } from "../905/207101";
import { Uz } from "../905/63728";
import { Point } from "../905/736624";
import { c2, Nt, yn, lv } from "../figma_app/119475";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { Y as _$$Y } from "../905/830372";
import { vq } from "../905/8732";
import { FU, b$, Bs } from "../figma_app/933328";
import { T1 } from "../905/711212";
import { pi } from "../figma_app/314264";
import { zR, r2 } from "../figma_app/80990";
import { fV } from "../figma_app/236178";
import { KP } from "../figma_app/12491";
import { V as _$$V, q as _$$q } from "../figma_app/473391";
import { resourceUtils } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { RR } from "../figma_app/307841";
import { _X, Pw, DQ } from "../figma_app/121751";
import { MF, A5, HZ } from "../figma_app/391338";
import { q5, tB } from "../figma_app/516028";
import { FUserTypeClassification, FProductAccessType, FPlanAccessType, FTeamType } from "../figma_app/191312";
import { dHY, ffQ } from "../figma_app/43951";
import { getPermissionsState, canGuestOrg, hasActiveEduTeam } from "../figma_app/642025";
import { D6 } from "../figma_app/465071";
import { x as _$$x } from "../figma_app/584132";
import { TG } from "../905/72677";
import { o as _$$o } from "../figma_app/915774";
import { X as _$$X } from "../905/853613";
import { tM, Hu } from "../figma_app/361662";
import { Y5 } from "../figma_app/455680";
import { J as _$$J2 } from "../905/633914";
import { Av, dx } from "../figma_app/646357";
import { H as _$$H } from "../905/216861";
import { e_ as _$$e_ } from "../figma_app/803787";
import { PW, AT } from "../figma_app/633080";
import { $A } from "../905/862883";
import { Ju } from "../905/102752";
import { CK } from "../figma_app/517115";
import { tM as _$$tM, k1 } from "../figma_app/984498";
import { _9 } from "../figma_app/76115";
import { k as _$$k2 } from "../905/540025";
import { H as _$$H2 } from "../905/991973";
import { Nv } from "../figma_app/318590";
import { Ao } from "../905/748636";
import { Wi, JR } from "../figma_app/162641";
import { q as _$$q2 } from "../figma_app/58251";
import { b as _$$b } from "../905/217163";
import { E as _$$E } from "../905/511388";
import { fd } from "../figma_app/255679";
import { sZ } from "../905/845253";
import { w5 } from "../figma_app/345997";
import { ol } from "../figma_app/598018";
import { fO } from "../figma_app/329496";
import { X as _$$X2 } from "../905/257331";
import { k as _$$k3 } from "../905/443820";
import { glU, CWU } from "../figma_app/763686";
import { ZC } from "../figma_app/39751";
import { k as _$$k4 } from "../905/582200";
import { MO } from "../1528/85853";
import { IK } from "../905/521428";
import { K as _$$K } from "../905/443068";
import { N as _$$N } from "../905/120979";
import { NG } from "../figma_app/709893";
import { $$ } from "../figma_app/637027";
import { z as _$$z } from "../905/284530";
import { B as _$$B } from "../905/714743";
import { b as _$$b2 } from "../1528/176770";
import { x as _$$x2 } from "../1528/887790";
import { T3, q0 } from "../figma_app/722362";
import { kH } from "../905/309735";
import { Ib } from "../905/129884";
import { O2 } from "../figma_app/164212";
import { Y as _$$Y2 } from "../905/411989";
import { K0 } from "../figma_app/778125";
import { oA } from "../905/663269";
import { h1 } from "../905/986103";
import { Pf, H8 } from "../905/590952";
import { e as _$$e } from "../905/579755";
import { R8, M as _$$M, G5 } from "../figma_app/933221";
import { S as _$$S } from "../figma_app/636279";
import e$ from "classnames";
import { j_ } from "../figma_app/9619";
import { C as _$$C } from "../figma_app/686450";
import { D6 as _$$D, kF } from "../1528/377549";
import { figmaComponentFlyoutTextMaxCollapsedHeight } from "../figma_app/786175";
import { A as _$$A } from "../2854/372209";
import { A as _$$A2 } from "../1617/230645";
import { A as _$$A3 } from "../1617/689324";
import { F as _$$F } from "../905/989956";
import { q as _$$q3 } from "../905/524117";
import { j as _$$j } from "../905/523935";
import { M as _$$M2 } from "../905/771870";
import { iV } from "../642/171234";
import { T as _$$T } from "../905/714785";
import { JA, Ev, VI } from "../figma_app/608944";
import { LdP, wkK } from "../figma_app/27776";
function H(e) {
  let t = RR();
  let s = D6("useCanViewPlaygroundQuery");
  let r = useSelector(getPermissionsState);
  let l = q5();
  let a = useSelector(_$$x)?.id;
  let {
    currentUserOrgId
  } = r;
  let d = !!(currentUserOrgId && canGuestOrg(currentUserOrgId, r));
  let c = Rs(dHY, {}, {
    enabled: _X(Pw.GROUP_7)
  });
  let p = !!(a && hasActiveEduTeam(r, a));
  let h = MF({
    oldValue: resourceUtils.loaded(p),
    newValue: c.transform(e => e?.currentUser.inStudentPlan),
    label: A5.CanViewPlayground.hasActiveEduTeam,
    enableFullRead: DQ(Pw.GROUP_7)
  });
  return useMemo(() => resourceUtils.transformAll([s, h], (s, r) => {
    if (!l || !a) return !1;
    let n = s.key.type === FUserTypeClassification.ORG_USER;
    if (HZ({
      oldValue: d,
      newValue: n,
      label: A5.CanViewPlayground.canGuestOrg,
      contextArgs: {
        planUserType: s.key.type,
        planUserParentId: s.key.parentId
      },
      enableFullRead: DQ(Pw.GROUP_7),
      maxReports: 10
    })) return !0;
    if (t) {
      if (s.seatTypeLicenseTypes?.includes(FProductAccessType.DESIGN)) return !0;
    } else if (s.designPaidStatus === FPlanAccessType.FULL) return !0;
    return !!r || atomStoreManager.get(TG).has(e);
  }), [s, l, a, d, t, h, e]);
}
let ex = "asset_file_path--path---PrgD text--fontPos11--2LvXf text--_fontBase--QdLsd";
let ey = "asset_file_path--skeletonText--PIxni";
function e_({
  assetLibraryKey: e,
  assetNodeId: t
}) {
  let s = ol();
  let l = sZ();
  let a = !!l || w5(s);
  let o = l?.id;
  let {
    fileContext,
    fileName,
    isPresetLibrary,
    isLoading
  } = function (e) {
    let t = Rs(ffQ, {
      libraryKey: e
    });
    let s = fd(e);
    return useMemo(() => ({
      fileContext: t.data?.libraryKeyToFile?.file,
      fileName: t.data?.libraryKeyToFile?.hubFile?.currentHubFileVersion?.name ?? t.data?.libraryKeyToFile?.file?.name,
      isPresetLibrary: s,
      isLoading: "loading" === t.status
    }), [s, t.data?.libraryKeyToFile?.file, t.data?.libraryKeyToFile?.hubFile?.currentHubFileVersion?.name, t.status]);
  }(e);
  let h = function (e, t) {
    let s = _$$b({
      libraryKey: e,
      nodeId: t
    });
    let r = useSelector(tB);
    return useMemo(() => {
      if (r?.libraryKey === e) return null;
      let t = s.data;
      return t?.link;
    }, [e, r, s]);
  }(e, t);
  let m = fileContext?.teamLimitedInfo?.id;
  let g = m ? function (e, t) {
    let s = location.origin;
    return t ? `${s}/files/${t}/team/${e}` : `${s}/files/team/${e}`;
  }(m, o) : void 0;
  let f = fileContext?.teamLimitedInfo?.name;
  let x = m && f && a;
  let y = fileContext?.computedWorkspace?.workspace?.id;
  let b = y && o ? fO(y, o) : void 0;
  let C = fileContext?.computedWorkspace?.workspace?.name;
  let j = y && C && a;
  return isLoading ? jsxs("div", {
    className: ex,
    "data-testid": "asset-file-path-loader",
    children: [jsx(Wi, {
      className: ey,
      opacity: 50
    }), " ", a && jsxs(Fragment, {
      children: ["/", jsx(Wi, {
        className: ey,
        opacity: 50
      })]
    })]
  }) : jsxs("div", {
    className: ex,
    children: [j && jsxs(Fragment, {
      children: [jsx(_$$q2, {
        tooltipText: C,
        children: jsx(_$$X2, {
          href: b ?? "",
          newTab: !0,
          children: C
        })
      }), "/"]
    }), x && jsxs(Fragment, {
      children: [jsx(_$$q2, {
        tooltipText: f,
        children: jsx(_$$X2, {
          href: g ?? "",
          newTab: !0,
          children: f
        })
      }), "/"]
    }), jsx(_$$q2, {
      tooltipText: fileName,
      children: h ? jsx(_$$X2, {
        href: h,
        newTab: !0,
        children: fileName
      }) : jsx("span", {
        children: fileName
      })
    }), isPresetLibrary && jsx("div", {
      className: _$$s.flex.alignCenter.justifyCenter.ml2.$,
      children: jsx(_$$E, {
        libraryKey: e,
        showTooltip: !0
      })
    })]
  });
}
function ez({
  assetKey: e,
  type: t,
  updatedAt: s
}) {
  let i = R8({
    assetKey: e,
    type: t
  });
  let {
    avatar,
    authorName
  } = useMemo(() => {
    if ("loaded" !== i.status || !i.data?.assetAttribution) return {
      avatar: null,
      authorName: null
    };
    let e = oA(i.data.assetAttribution);
    if (!e) return {
      avatar: null,
      authorName: null
    };
    if (e.type === FTeamType.COMMUNITY) return {
      avatar: jsx(_$$e, {
        entity: _$$M(e),
        size: Pf.SMALL
      }),
      authorName: e.name
    };
    let t = G5(e);
    return null != t && t.img_url && (t.handle || t.name) ? {
      avatar: jsx(H8, {
        user: t,
        size: Pf.SMALL
      }),
      authorName: t.handle
    } : {
      avatar: null,
      authorName: null
    };
  }, [i]);
  return "loading" === i.status ? jsx(Wi, {
    className: _$$s.h16.w100.$,
    animationType: JR.LIGHT_SHIMMER
  }) : avatar && authorName ? jsxs("div", {
    className: "asset_updated_details--updatedAtAvatar--uf4Gy",
    children: [avatar, jsx("span", {
      className: "asset_updated_details--handle--63B8y",
      children: authorName
    }), s ? jsxs(Fragment, {
      children: [jsx("span", {
        className: "asset_updated_details--dot--SoliI",
        children: "\xb7"
      }), jsx(h1, {
        date: s
      })]
    }) : null]
  }) : s ? jsx("div", {
    className: "asset_updated_details--updatedAt--eam-d",
    children: renderI18nText("design_systems.assets_panel.updated_at", {
      updatedAt: jsx(h1, {
        date: s
      })
    })
  }) : null;
}
var eY = e$;
let eQ = parsePxNumber(figmaComponentFlyoutTextMaxCollapsedHeight);
function e0({
  description: e,
  description_rt: t
}) {
  let s = useRef(null);
  let [i, l] = useState(!0);
  let [a, o] = useState(!1);
  let d = ZC(e);
  useEffect(() => {
    if (e && s.current && d !== e) {
      let e = s.current.scrollHeight > eQ;
      l(e);
      o(e);
    }
  }, [e, d]);
  let c = useCallback(() => {
    i && o(!0);
    l(!i);
  }, [i]);
  if (!e && !t) return null;
  let u = !!e && (i || a);
  return jsxs("div", {
    className: "truncated_component_description--documentationSection--87RCO",
    children: [t ? jsx("div", {
      children: jsx(_$$C, {
        value: t,
        valueFormat: j_(t),
        namespace: "component-description-flyout-lexical-editor-readonly",
        lexicalContentClassName: i ? _$$D : kF,
        innerRef: s
      })
    }) : jsx("div", {
      ref: s,
      className: eY()({
        "truncated_component_description--collapsed--VXZTS ellipsis--ellipsisAfter6Lines--2UA7M ellipsis--_ellipsisAfterNLines--LzI7k": i
      }, "truncated_component_description--documentationDescription--C090D text--fontPos11--2LvXf text--_fontBase--QdLsd"),
      dir: "auto",
      children: e
    }), u && jsx("button", {
      className: "truncated_component_description--showMore--brfX6",
      onClick: c,
      children: i ? renderI18nText("design_systems.assets_panel.show_more") : renderI18nText("design_systems.assets_panel.show_less")
    })]
  });
}
function e4({
  renderedAssetData: e,
  errorType: t,
  canViewPlayground: s,
  onInsert: i,
  shouldHideError: l,
  onSetShouldHideError: a
}) {
  let o = T3();
  let [d, u] = useState(!1);
  useEffect(() => {
    u(!1);
    a(!1);
  }, [e.asset, a]);
  let p = _$$S(e.asset);
  let h = _$$Y2(e.asset);
  let m = useMemo(() => kH(e.asset.name ?? ""), [e.asset.name]);
  let g = useRef(null);
  let f = NG({
    text: m,
    textRef: g
  });
  let x = e.asset;
  let y = useMemo(() => {
    let t = e.nodeData?.playgroundGUID;
    if (!t) return "";
    let s = o.get(t);
    if (!s) return "";
    let r = o.get(s.symbolId ?? "");
    return r ? (r.isState ? r.parentGuid : r.guid) ?? "" : "";
  }, [e, o]);
  let _ = useMemo(() => {
    if (t) return {
      errorType: t,
      shouldHideError: l,
      setShouldHideError: a
    };
  }, [t, l, a]);
  let C = renderI18nText("design_systems.assets_panel.insert_instance");
  return jsxs("div", {
    className: "component_flyout_body--bodyWrapper--CoGX-",
    children: [p && !d && jsx("div", {
      className: "component_flyout_body--updateBanner--ETDK5 component_flyout_body--_bodyPadding--KrB6p text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsx(_$$z, {
        orientation: "vertical",
        iconSrc: _$$A2,
        onClose: () => u(!0),
        variant: "design",
        children: renderI18nText("design_systems.assets_panel.update_banner")
      })
    }), jsxs("div", {
      className: "component_flyout_body--headerFileNameWrapper--MH4jz component_flyout_body--_bodyPadding--KrB6p",
      children: [jsx("h2", {
        className: "component_flyout_body--header--3LXSQ text--fontPos14--OL9Hp text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
        "data-tooltip": f ? m : void 0,
        "data-tooltip-type": Ib.TEXT,
        ref: g,
        children: m
      }), !!h && h > 1 && jsx("div", {
        className: "component_flyout_body--numVariants--nureW",
        children: renderI18nText("design_systems.assets_panel.variant_count", {
          numVariants: h
        })
      })]
    }), jsx("div", {
      className: "component_flyout_body--descriptionWrapper--wFyRa component_flyout_body--_bodyPadding--KrB6p",
      children: jsx(e0, {
        description: x.description,
        description_rt: x.description_rt
      })
    }), x.updated_at && jsx("div", {
      className: "component_flyout_body--updatedWrapper--q4V48 component_flyout_body--_bodyPadding--KrB6p",
      children: jsx(ez, {
        assetKey: Av(x),
        type: x.type,
        updatedAt: x.updated_at
      })
    }), jsx("div", {
      className: "component_flyout_body--buttonWrapper--Sb1Mq component_flyout_body--_bodyPadding--KrB6p",
      children: getFeatureFlags().dse_fpl_wave_1 ? jsx(IK, {
        onClick: i,
        recordingKey: "component_flyout_insert",
        children: C
      }) : jsx($$, {
        onClick: i,
        fullWidth: !0,
        recordingKey: "component_flyout_insert",
        children: C
      })
    }), s && !e?.nodeData && !_ && jsxs("div", {
      className: "component_flyout_body--skeletonWrapper--urKH5",
      children: [jsx(Wi, {
        className: "component_flyout_body--skeletonHeader--VoEY3",
        opacity: 50
      }), jsx(Wi, {
        className: "component_flyout_body--skeletonBody--pINXr",
        opacity: 50
      })]
    }), s && (e?.nodeData || _) && jsxs(q0.Provider, {
      value: o,
      children: [jsx("div", {
        className: "component_flyout_body--propsContainer--w8pmU",
        children: jsx(_$$x2, {
          componentProps: e.nodeData?.componentProps,
          containerWidth: O2.UNBOUNDED,
          errorData: _,
          instanceSwapPickerInitialHeight: 200,
          instanceSwapPickerInitialPosition: "right-center",
          label: jsx(e5, {
            renderedAssetData: e
          }),
          playgroundGUID: e.nodeData?.playgroundGUID,
          productComponentGUID: y,
          sceneGraph: o,
          shouldShowDividerAboveProps: !0
        })
      }), jsx("div", {
        className: "component_flyout_body--modeContainer--8n5p5",
        children: jsx(_$$b2, {
          fill: !0,
          modes: e.nodeData?.modeData || {}
        })
      })]
    })]
  });
}
function e5({
  renderedAssetData: e
}) {
  let t = useCallback(() => {
    e.refetchAndResetScene();
  }, [e]);
  return jsxs("div", {
    className: "component_flyout_body--playgroundHeader--lQfDc",
    children: [jsxs("div", {
      className: "component_flyout_body--flyoutLabel--6Y6lR text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: [jsx(_$$B, {
        className: "component_flyout_body--headerIcon--FHdrw",
        svg: _$$A
      }), renderI18nText("design_systems.assets_panel.playground_label")]
    }), getFeatureFlags().dse_fpl_wave_1 ? jsx("span", {
      className: "component_flyout_body--resetButtonContainer--fCSjD",
      children: jsx(_$$K, {
        "aria-label": getI18nString("design_systems.playground.reset_properties"),
        onClick: t,
        disabled: !e.hasChangesToReset,
        recordingKey: "resetPlaygroundProps",
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.playground.reset_properties"),
          "data-tooltip-type": Ib.TEXT
        },
        children: jsx(_$$N, {})
      })
    }) : jsx(K0, {
      className: "component_flyout_body--resetButton--wVXDQ",
      svg: _$$A3,
      onClick: t,
      "data-tooltip": getI18nString("design_systems.playground.reset_properties"),
      "data-tooltip-type": Ib.TEXT,
      disabled: !e.hasChangesToReset,
      recordingKey: "resetPlaygroundProps"
    })]
  });
}
let tt = "component_flyout_thumbnail--thumbnail--p3jV2";
function ts({
  canViewPlayground: e,
  renderedAssetData: t,
  onCloseIfHidden: s,
  setFlyoutHidden: i,
  sectionPosition: l,
  sectionNameForTracking: a,
  sectionDepth: o
}) {
  let d = useCallback(() => {
    i(!0);
  }, [i]);
  let {
    onInsertableResourcePointerDown,
    dragState
  } = _$$j({
    resource: t.asset,
    isList: !1,
    clickToInsert_DEPRECATED: !1,
    sourceForTracking: iV,
    fromPlayground: e,
    recomputeCancelRectsOnPointerUp: !0,
    onDragStart: d,
    onPointerUpWithoutInsert: s,
    sectionPosition: l,
    sectionNameForTracking: a,
    sectionDepth: o
  });
  let p = useMemo(() => {
    let e = zR(t.asset, null);
    if (null != e) return _$$F.format(e);
  }, [t.asset]);
  let h = tr(t.hasChangesToReset, t.nodeData?.modeData ?? null);
  return jsxs("div", {
    className: "component_flyout_thumbnail--thumbnailWrapper--P38Qq",
    onPointerDown: onInsertableResourcePointerDown,
    role: "button",
    style: p ? {
      backgroundColor: p
    } : void 0,
    children: [e && t?.thumbnailData && h ? jsx("img", {
      className: tt,
      src: t.thumbnailData.src,
      alt: getI18nString("design_systems.playground.thumbnail_alt"),
      draggable: !1
    }) : jsx(_$$M2, {
      className: tt,
      draggable: !1,
      item: t.asset,
      shouldGenerateLocalThumbnail: !1
    }, _$$V(t.asset)), jsx(_$$q3, {
      dragState,
      isList: !1,
      thumbnailOverrideSrc: e && t?.thumbnailData ? t.thumbnailData.src : void 0
    })]
  });
}
let tr = (e, t) => useMemo(() => {
  if (e) return !0;
  let s = glU?.getPlaygroundScene();
  return !!s && Object.values(t || {}).some(e => {
    let t = e.inheritMode;
    return "MIXED" !== t && !!t && CWU?.getVariableSetDefaultModeForScene(e.collectionID, s) !== t.guid;
  });
}, [e, t]);
let tn = {
  maxWidth: 640,
  maxHeight: 480
};
function ti({
  asset: e,
  onInsert: t,
  onLoaded: s,
  flyoutHidden: l,
  onCloseIfHidden: a,
  setFlyoutHidden: o,
  sectionPosition: d,
  sectionNameForTracking: c,
  sectionDepth: u
}) {
  let p = H(e.library_key);
  let [h, m] = useState(!1);
  let g = useCallback(() => m(!1), []);
  let f = MO({
    canvasAsset: e,
    canViewPlaygroundQueryResult: p,
    onLoaded: s,
    onError: g,
    thumbnailOptions: tn
  });
  let x = _$$H();
  let y = useSelector(e => e.fileVersion);
  let _ = ZC(y);
  if (useEffect(() => {
    f?.state === "LOADED" && f?.currentAssetData?.nodeData?.playgroundGUID && null != _ && _ !== y && (x(), glU.clearPlaygroundScene());
  }, [y, _, x, e.type, f]), !f) return jsx("div", {
    className: "component_flyout--spinner--c-wap",
    children: jsx(_$$k3, {})
  });
  let b = "LOADED" === f.state ? f.currentAssetData : f.previousAssetData;
  let C = "ERROR" === f.state ? f.errorType : void 0;
  return jsx(_$$k4, {
    name: "props_playground",
    children: jsxs("div", {
      className: "component_flyout--wrapper--96Jih",
      children: [jsx(ts, {
        renderedAssetData: b,
        canViewPlayground: p.unwrapOr(!1),
        onCloseIfHidden: a,
        setFlyoutHidden: o,
        sectionPosition: d,
        sectionNameForTracking: c,
        sectionDepth: u
      }), !l && jsx(e4, {
        renderedAssetData: b,
        errorType: C,
        canViewPlayground: p.unwrapOr(!1),
        onInsert: t,
        onSetShouldHideError: m,
        shouldHideError: h
      })]
    })
  });
}
let td = parsePxNumber(LdP);
let tc = parsePxNumber(wkK);
export function $$tu1({
  asset: e,
  searchSessionId: t,
  query: s,
  sectionPosition: h,
  sectionNameForTracking: E,
  assetTypeDropdownSelection: M,
  sectionDepth: A,
  containerWidth: P,
  onGetKeyboardNavigationItemById: L,
  sourceForTracking: O
}) {
  let D = useRef(null);
  let F = useRef(null);
  let B = Xr(_$$T);
  let K = H(e.library_key);
  let Q = useAtomWithSubscription(TG);
  let ea = _$$H2(e.library_key);
  let eo = _9(e.library_key, "asset_panel_visual_assets_flyout_insert");
  let {
    closeFlyout
  } = JA();
  let ec = fV(e.library_key);
  let eu = q5();
  let ep = useDispatch();
  let eh = useSelector(e => _$$e_(e).local.thumbnails);
  let em = _$$H();
  let eg = useCallback(({
    source: e
  }) => {
    "outside" !== e && closeFlyout();
  }, [closeFlyout]);
  let ef = useSelector(e => e.instanceSwapPickerShown);
  let ex = _$$k2();
  let ey = tM(O ?? "assets-panel");
  _$$h(() => {
    analyticsEventManager.trackDefinedEvent("assets_panel.flyout_opened", {
      assetKey: _$$V(e),
      assetType: _$$q(e.type),
      assetLibraryKey: e.library_key,
      isLocal: e.isLocal,
      fileParentOrgId: eu?.parentOrgId ?? void 0,
      fileTeamId: eu?.teamId ?? void 0,
      assetsPanelVersion: ex,
      partnerType: _$$X(e.library_key),
      queryId: ey ?? void 0
    });
  });
  _$$h(() => () => {
    ep(vq());
    B(!1);
  });
  useEffect(() => {
    if (!dx(e) || !e.isLocal) return;
    let t = e.node_id ? eh[e.node_id] : null;
    let s = e.type === PW.COMPONENT ? e.content_hash : e.version;
    t?.content_hash !== s && requestAnimationFrame(() => {
      let t = r2(e.node_id);
      null != t && ep(T1({
        thumbnails: [{
          nodeId: e.node_id,
          url: t,
          type: e.type
        }],
        styleKind: AT.LOCAL
      }));
    });
  }, [e, ep, eh]);
  let eb = useCallback(() => {
    requestAnimationFrame(() => D?.current?.ensureModalOnScreen());
  }, []);
  let eC = useCallback(() => {
    ef?.isShown && ep(vq());
  }, [ep, ef]);
  let ej = Hu(e.library_key);
  let ev = Nv(!0);
  let eS = CK();
  let ek = useCallback(() => {
    if ("loaded" !== K.status) return;
    let r = Y5.getViewportInfo();
    let n = {
      canvasPosition: {
        x: r.offsetX,
        y: r.offsetY
      },
      insertAsChildOfCanvas: !0,
      percentageOffset: new Point(.5, .5),
      storeInRecentsKey: $A.Design,
      useSmartPositioning: !0,
      fromPlayground: K.data
    };
    e.type === PW.COMPONENT ? (ep(FU({
      item: e,
      ...n
    })), ea && eo(!0)) : e.type === PW.STATE_GROUP ? ep(b$({
      item: e,
      ...n
    })) : e.type === PW.MODULE && ep(Bs({
      item: e,
      ...n,
      insertionCallback: () => Y5.triggerAction("commit")
    }));
    let i = {
      aiResultsEnabled: ev,
      assetKey: Av(e),
      assetType: _$$q(e.type),
      queryId: ey ?? void 0,
      scoreAi: e.ai_score ?? void 0,
      scoreLexical: e.lexical_score ?? void 0,
      assetTypeDropdownSelection: M,
      assetsPanelVersion: ex,
      fileKey: eu?.key ?? void 0,
      fileParentOrgId: eu?.parentOrgId ?? void 0,
      fileTeamId: eu?.teamId ?? void 0,
      isExample: _$$o(e, Q),
      libraryKey: e.library_key,
      partnerType: _$$X(e.library_key),
      sectionDepth: A,
      sourceSection: E ?? void 0,
      productType: pi({
        editorType: eu?.editorType
      })
    };
    analyticsEventManager.trackDefinedEvent("assets_panel.flyout_insert", {
      ...i,
      libraryType: ej,
      searchSessionId: t ?? void 0,
      searchQuery: s,
      sectionPosition: h
    });
    O !== _$$tM ? analyticsEventManager.trackDefinedEvent("asset_search.result_inserted", {
      ...i,
      libraryType: ej,
      position: h,
      reciprocalRank: Et(h) ? 1 / (1 + h) : void 0,
      query: s,
      sessionId: t ?? void 0,
      entryPoint: "assets-panel",
      componentSuggestionSessionId: eS
    }) : k1({
      ...i,
      position: h
    });
  }, [eS, K.status, K.data, e, ev, ey, M, ex, eu?.key, eu?.parentOrgId, eu?.teamId, eu?.editorType, Q, A, E, ej, t, s, h, ep, ea, eo, O]);
  useEffect(() => {
    let e = e => {
      let t = D.current?.getEl() ?? F.current;
      if (t) {
        if (!t.contains(e.target)) {
          if (B(!1), NX(e.target, "data-does-not-dismiss-component-flyout")) return;
          closeFlyout();
          return;
        }
        B(!0);
      }
    };
    document.addEventListener("pointerdown", e);
    return () => {
      document.removeEventListener("pointerdown", e);
    };
  }, [closeFlyout, ep, B]);
  let ew = useCallback((t, s) => {
    let r = t.code ?? t.key;
    let n = _$$V(e);
    let i = L?.(n);
    if (!i) return;
    let l = t.keyCode === Uz.TAB;
    let a = t.shiftKey;
    if (c2(t, !1)) {
      i.getItemAbove()?.focus();
      s?.();
      return;
    }
    if (Nt(t, !1)) {
      i.getItemBelow()?.focus();
      s?.();
      return;
    }
    if (yn(r, !1) || l && a) {
      i.getItemToTheLeft()?.focus();
      s?.();
      return;
    }
    if (lv(r, !1) || l && !a) {
      i.getItemToTheRight()?.focus();
      s?.();
      return;
    }
    if ("Enter" === r) {
      ek();
      s?.();
      return;
    }
  }, [e, ek, L]);
  let eT = useCallback(e => {
    ew(e.event, () => e.accept());
  }, [ew]);
  var eN = jsxs("div", {
    className: _$$s.minW0.flex1.$,
    children: [jsx("h1", {
      children: getI18nString("design_systems.assets_panel.details")
    }), jsxs(_$$Y, {
      spacing: 0,
      direction: "horizontal",
      children: [e && jsx(e_, {
        assetLibraryKey: e.library_key,
        assetNodeId: e.node_id
      }), ec && jsx("div", {
        className: _$$s.pr4.$,
        children: jsx(KP, {
          libraryKey: e.library_key,
          variant: "secondary",
          tooltipLocation: "below"
        })
      })]
    })]
  });
  let [eI, eE, eM] = _$$J2(!1);
  let eA = useCallback(() => {
    eI.current && em();
  }, [eI, em]);
  return "loaded" !== K.status ? null : getFeatureFlags().dse_fpl_wave_2 ? jsx(bL, {
    onClose: eg,
    defaultPosition: new Point(P + 1, td),
    width: tc,
    htmlAttributes: {
      "data-testid": "component-flyout-modal",
      id: Ev,
      hidden: eE,
      onKeyDown: ew
    },
    ref: F,
    maxHeight: "100vh",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(_$$J, {
          style: {
            margin: 0,
            minWidth: 0
          },
          children: eN
        })
      }), jsx(nB, {
        style: {
          padding: 0
        },
        scrolling: "none",
        children: jsx(ti, {
          asset: e,
          onLoaded: eb,
          onInsert: ek,
          flyoutHidden: eE,
          onCloseIfHidden: eA,
          setFlyoutHidden: eM,
          sectionPosition: h,
          sectionNameForTracking: E,
          sectionDepth: A
        })
      })]
    })
  }) : jsx(Ao, {
    ref: D,
    allowAutoExpanding: !0,
    alwaysEnsureModalOnScreen: !0,
    canRenderBelowViewport: !1,
    dataTestId: "component-flyout-modal",
    headerSize: "large",
    hidden: eE,
    id: Ev,
    initialPosition: new Point(P + 1, td),
    initialWidth: tc,
    noCancelDragAndDrop: !0,
    onClick: eC,
    onClose: em,
    onKeyDown: eT,
    title: eN,
    truncateTitleText: !0,
    children: jsx("div", {
      "data-not-draggable": !0,
      children: jsx(ti, {
        asset: e,
        onLoaded: eb,
        onInsert: ek,
        flyoutHidden: eE,
        onCloseIfHidden: eA,
        setFlyoutHidden: eM,
        sectionPosition: h,
        sectionNameForTracking: E,
        sectionDepth: A
      })
    })
  });
}
export let $$tp0 = Ju($$tu1, VI);
export const m = $$tp0;
export const w = $$tu1;