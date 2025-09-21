import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useEffect, useCallback, useState, useRef } from "react";
import { useAtomWithSubscription, Xr, atomStoreManager, useAtomValueAndSetter } from "../figma_app/27355";
import { J3, JU, wv, kN, Gi, GR, e2 as _$$e, li } from "../figma_app/622574";
import { bY, Vf, q7, oQ, V6, i6, ux, VZ, Ei, OR, xw } from "../figma_app/60023";
import d from "classnames";
import { buildUploadUrl, isLocalCluster } from "../figma_app/169182";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText, getTranslatedDynamicContent } from "../905/303541";
import { selectCurrentFile, useCurrentFileKey, openFileKeyAtom, openFileTeamIdAtom } from "../figma_app/516028";
import { JY } from "../9410/236102";
import { kM, gu, v8, oJ, yx } from "../9410/43627";
import { tJ, ui, _8 } from "../9410/430140";
import { AppStateTsApi, ThemeMode, SlidesAiBindings, SourceType, SchemaJoinStatus } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { MR, p9, Dh } from "../9410/34183";
import { FA, AK } from "../9410/356923";
import { _YF } from "../figma_app/822011";
import { e as _$$e2 } from "../905/149844";
import { Q as _$$Q } from "../1250/220026";
import { getFeatureFlags } from "../905/601108";
import { V as _$$V } from "../9410/526350";
import { vN, Iv, fK, gH, r$, d$, $N, NG, S7, m4, BX, _8 as _$$_, J_ } from "../7222/396421";
import { mp } from "../figma_app/29287";
import { Ji, Zx, h0, qm } from "../figma_app/553488";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import { useSetAtom } from "../vendor/525001";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { eE as _$$eE } from "../figma_app/106207";
import { logAndTrackCTA } from "../figma_app/314264";
import { FFileType } from "../figma_app/191312";
import { useIsLoading } from "../905/18797";
import { getObservableValue } from "../figma_app/84367";
import { getRecentTemplateCount } from "../figma_app/190980";
import { n as _$$n } from "../905/79930";
import { FDocumentType } from "../905/862883";
import { cd } from "../905/381612";
import { ZW } from "../figma_app/861982";
import { _ as _$$_2, Q as _$$Q2 } from "../7222/460441";
import { a as _$$a } from "../905/925868";
import { SvgComponent } from "../905/714743";
import { NH, gp } from "../figma_app/973927";
import { A as _$$A } from "../6828/625002";
import { me, Tn, GM, HE, m_, qr, Vg, Fj, eg as _$$eg } from "../9410/148230";
import { IT as _$$IT } from "../905/713695";
import { IconButton } from "../905/443068";
import { C as _$$C } from "../905/520159";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e3 } from "../905/165054";
import { defaultSessionLocalIDString } from "../905/871411";
import { logInfo, logError } from "../905/714362";
import { Point } from "../905/736624";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { k8 } from "../figma_app/49598";
import { renameFileOptimistic } from "../figma_app/78808";
import { yy } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { D as _$$D } from "../7222/938408";
import { fL } from "../figma_app/784857";
import { x as _$$x } from "../905/764527";
import { V as _$$V2 } from "../905/900932";
import { JT } from "../figma_app/632248";
import { y as _$$y } from "../figma_app/13082";
import { logger } from "../905/651849";
import { RL, B3 } from "../figma_app/862289";
import { zF } from "../figma_app/297822";
import { v0, Hn, Wb, Gd, M0 } from "../9410/341455";
import { S as _$$S, E as _$$E } from "../figma_app/999099";
import { getSingletonSceneGraph } from "../905/700578";
import { getTrackingSessionId } from "../905/471229";
import { Ay, c6 } from "../figma_app/432652";
import { _s } from "../figma_app/33126";
import { J as _$$J } from "../905/915227";
import { userIdAtom } from "../figma_app/864723";
import { _E } from "../905/788069";
import { R as _$$R } from "../figma_app/53049";
import { n as _$$n2 } from "../905/347702";
import { Y as _$$Y, Sk, D1, tO as _$$tO, D0 } from "../9410/989613";
import { isInteractionPathCheck } from "../figma_app/897289";
import { LoadingSpinner } from "../figma_app/858013";
import { Um } from "../905/848862";
import { l6, c$, sK } from "../905/794875";
import { e as _$$e4 } from "../figma_app/509285";
import { X as _$$X } from "../1250/115566";
import { isBigmaEnabledAlias } from "../figma_app/336853";
import { useCurrentUserOrgId, useCurrentUserOrg } from "../905/845253";
import { useSubscription } from "../figma_app/288654";
import { w4, y1 } from "../905/445814";
import { selectCurrentUser } from "../905/372672";
import { SlidesAiFileDisabledForFilePickerView } from "../figma_app/43951";
import { GQ, lJ } from "../905/50159";
var r;
var c = d;
function x({
  children: e,
  dataTestId: t
}) {
  return jsx("div", {
    className: _$$s.flex.flexColumn.hFull.$,
    "data-testid": t,
    children: e
  });
}
function T({
  closePicker: e
}) {
  let t = t => {
    permissionScopeHandler.user("create-new-slide-with-default-theme", () => {
      AppStateTsApi?.slideThemeLibBindings().insertDefaultLocalTheme(t, null);
    });
    e();
  };
  return jsxs(MR, {
    title: getI18nString("slides.templates.dev_environment_only"),
    children: [jsx(FA, {
      thumbnailWidth: "184px",
      thumbnailHeight: "101px",
      name: getI18nString("slides.templates.light"),
      thumbnailUrl: buildUploadUrl("4a01804a5d4ad3a2d38ea604c0d8d63520e9b97b"),
      onPointerDown: () => t(ThemeMode.LIGHT)
    }, "light"), jsx(FA, {
      thumbnailWidth: "184px",
      thumbnailHeight: "101px",
      name: getI18nString("slides.templates.dark"),
      thumbnailUrl: buildUploadUrl("01a1fc814ce18d9da3ba738aef79acc82c752ab7"),
      onPointerDown: () => t(ThemeMode.DARK)
    }, "dark")]
  });
}
let j = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M5 6h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.982l.945 2.31a.5.5 0 0 1-.926.38l-1.1-2.69H8.063l-1.1 2.69a.5.5 0 1 1-.926-.379L6.982 17H5a2 2 0 0 1-2-2zm4.7 3.2.315-1.26c.126-.505.844-.505.97 0L9.3 10.2l1.26.315c.505.126.505.844 0 .97L9.3 11.8l-.315 1.26c-.126.505-.844.505-.97 0L7.7 11.8l-1.26-.315c-.505-.126-.505-.844 0-.97zM12.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
function L({
  onStartFromFigJamSelected: e,
  onStartFromTextOutlineSelected: t
}) {
  let {
    isCreateSlidesOutlineEnabled
  } = mp();
  let {
    canDismiss,
    maybeUseLightTemplateOnDismiss
  } = vN();
  let {
    setUserDraftTemplateKeyForCurrentFile
  } = Iv();
  let d = J3();
  let c = JU(d);
  let u = useMemo(() => {
    let a = [];
    return (canDismiss && a.push({
      id: "start_from_scratch",
      onClick: maybeUseLightTemplateOnDismiss,
      icon: jsx(_$$e2, {}),
      title: getI18nString("slides.templates.start_from.scratch.title"),
      subtitle: getI18nString("slides.templates.start_from.scratch.subtitle"),
      buttonStyle: "dashedBorder",
      iconStyle: "startFromScratchIcon",
      dataTestId: "start-from-scratch"
    }), getFeatureFlags().piper_outline_to_deck ? a.push({
      id: "outline_to_deck",
      onClick: t,
      icon: jsx(j, {}),
      title: getI18nString("slides.templates.start_from.outline.title"),
      subtitle: "Generate deck from outline",
      iconStyle: "startFromOutlineIcon",
      dataTestId: "outline-to-deck"
    }) : isCreateSlidesOutlineEnabled && a.push({
      id: "start_from_outline",
      onClick: e,
      icon: jsx(j, {}),
      title: getI18nString("slides.templates.start_from.outline.title"),
      subtitle: getI18nString("slides.templates.start_from.outline.subtitle"),
      iconStyle: "startFromOutlineIcon",
      dataTestId: "start-from-outline"
    }), c && a.push({
      id: "make_a_template",
      onClick: () => {
        maybeUseLightTemplateOnDismiss();
        setUserDraftTemplateKeyForCurrentFile();
      },
      icon: jsx(_$$Q, {}),
      title: getI18nString("slides.templates.make_a_template.title"),
      subtitle: getI18nString("slides.templates.make_a_template.subtitle"),
      iconStyle: "makeATemplate",
      dataTestId: "make-a-template"
    }), 1 === a.length && a[0]?.id === "start_from_scratch") ? [] : a;
  }, [canDismiss, isCreateSlidesOutlineEnabled, maybeUseLightTemplateOnDismiss, e, t, c, setUserDraftTemplateKeyForCurrentFile]);
  return jsx(_$$V, {
    buttons: u,
    editorType: _YF.SLIDES,
    wrapperStyle: R.wrapper
  });
}
let R = {
  wrapper: {
    paddingTop: "x1vi7shn",
    paddingLeft: "x8rdmch",
    paddingRight: "xctkrei",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
function X({
  onSeeAllClick: e
}) {
  return jsx("button", {
    className: c()("see_all_button--seeAllButton--TAlLw", _$$s.font11.fontMedium.fontInter.flexShrink0.$),
    onClick: e,
    children: renderI18nText("slides.templates.view_type.see_all")
  });
}
function Q({
  currentTeam: e
}) {
  let t = fK();
  let i = useSetAtom(bY);
  let {
    teamTemplates,
    numTemplatesForTeam
  } = wv(FFileType.SLIDES, t);
  if (!teamTemplates || 0 === teamTemplates.length) return null;
  let s = (numTemplatesForTeam ?? 0) > t;
  return jsx(ei, {
    title: renderI18nText("slides.templates.template_picker.header_with_name", {
      orgOrTeamName: e.name
    }),
    previewData: teamTemplates,
    onSeeAllClick: s ? () => i({
      type: Vf.TEAM,
      teamId: e.id,
      displayName: e.name
    }) : void 0
  });
}
function $({
  currentOrg: e
}) {
  let t = fK();
  let {
    teamTemplates,
    isLoading
  } = wv(FFileType.SLIDES, t);
  let a = useSetAtom(bY);
  let s = teamTemplates && teamTemplates.length >= t;
  if (isLoading || !teamTemplates || !teamTemplates.length || !t) return null;
  let d = s ? () => a({
    type: Vf.ORG
  }) : void 0;
  return jsx(ei, {
    title: renderI18nText("slides.templates.theme_picker.org_template_header", {
      orgName: e.name
    }),
    previewData: teamTemplates,
    onSeeAllClick: d
  });
}
function ee() {
  let [{
    data: e,
    status: t
  }] = setupResourceAtomHandler(_$$_2());
  let i = useSetAtom(bY);
  let r = fK();
  return "loading" === t ? jsx(kM, {
    removePadding: !0,
    numSections: 2
  }) : e && 0 !== e.length ? jsx(Fragment, {
    children: e.map(e => {
      let t = e.shelf_content.map(t => ({
        type: _$$n.HubFile,
        template: t,
        category: e.id
      }));
      let a = t.slice(0, r);
      return 0 === a.length ? null : jsx(ei, {
        title: getTranslatedDynamicContent(e.i18n_meta.title, e.title),
        previewData: a,
        onSeeAllClick: t.length > r ? () => i({
          type: Vf.HUB_FILE,
          shelfId: e.id
        }) : void 0
      }, e.id);
    })
  }) : null;
}
function et() {
  let e = _$$eE(FDocumentType.Slides);
  let t = getRecentTemplateCount(FDocumentType.Slides);
  let i = fK();
  let r = useDispatch();
  let a = selectCurrentFile();
  let s = J3();
  let l = JU(s);
  let d = s === kN.FILE_IN_DRAFTS;
  let c = 0 === getObservableValue(AppStateTsApi?.canvasGrid()?.canvasGridArray, []).length;
  let u = useIsLoading(cd.fetchTemplatesMetadata.loadingKeyForPayload({
    key: FDocumentType.Slides
  }));
  return 0 === t ? null : u || !a ? jsx(kM, {
    numSections: 1,
    numTemplates: t,
    removePadding: !0
  }) : jsx(ei, {
    title: getI18nString("slides.templates.recents"),
    previewData: e.slice(0, i),
    onPublishTemplateClick: l && !c ? () => {
      ZW({
        dispatch: r,
        file: {
          key: a.key,
          name: a.name,
          folder_id: a.folderId,
          team_id: a.teamId,
          editor_type: a.editorType,
          parent_org_id: a.parentOrgId
        },
        source: "template-picker",
        fileNeedsMovingBeforePublish: d
      });
      logAndTrackCTA({
        name: "publish-template-template-modal",
        fileKey: a.key
      });
    } : void 0
  });
}
function ei({
  title: e,
  previewData: t,
  onSeeAllClick: i,
  onPublishTemplateClick: r
}) {
  let a = i ? jsx(X, {
    onSeeAllClick: i
  }) : r ? jsx(Button, {
    onClick: r,
    recordingKey: "template-picker-publish-template",
    variant: "secondary",
    children: renderI18nText("slides.templates.button.publish_template")
  }) : void 0;
  return jsx(MR, {
    title: e,
    rightHeaderCta: a,
    children: t.map(e => jsx(AK, {
      template: e
    }, e.template.id))
  });
}
function eo({
  isSearchQueryLoading: e,
  trimmedSearchQuery: t,
  searchQueryResult: i,
  requestLoadMore: r
}) {
  let {
    onShowSeparatorScroll
  } = gH();
  return e && 0 === i.length ? jsx("div", {
    className: _$$s.p8.$,
    children: jsx(gu, {})
  }) : 0 === i.length ? jsxs("div", {
    className: _$$s.p10.flex.flex1.flexColumn.itemsCenter.alignCenter.textBodyMedium.colorTextDisabled.$,
    children: [jsx(SvgComponent, {
      className: _$$s.h200.$,
      svg: _$$A,
      useOriginalSrcFills_DEPRECATED: !0
    }), jsx("div", {
      children: renderI18nText("slides.templates.search.empty", {
        searchTerm: jsx("span", {
          className: _$$s.fontBold.$,
          children: t
        })
      })
    }), jsx("div", {
      children: renderI18nText("slides.templates.search.empty.tip")
    })]
  }) : jsx(_$$P, {
    className: _$$s.px8.hFull.$,
    onScroll: onShowSeparatorScroll,
    children: jsxs("div", {
      className: _$$s.pt8.$,
      children: [jsx(p9, {
        children: i.map(e => jsx(AK, {
          template: e
        }, NH(e)))
      }), jsx(_$$a, {
        onIntersectionChange: ({
          isIntersecting: e
        }) => {
          e && r();
        }
      })]
    })
  });
}
function ed({
  closePicker: e
}) {
  let {
    loading
  } = mp();
  let i = r$();
  let {
    scrollPosition,
    scrollRef,
    onScroll,
    resetScrollTop
  } = d$(Vf.ALL);
  let {
    onShowSeparatorScroll
  } = gH();
  let y = useAtomWithSubscription(q7);
  let b = useCurrentFileKey();
  let C = Gi();
  let {
    start
  } = JY();
  let E = Xr(bY);
  return (useEffect(() => () => resetScrollTop([Vf.ALL]), [resetScrollTop]), loading || y && !b) ? jsx(kM, {}) : jsxs(_$$P, {
    className: _$$s.px8.hFull.$,
    scrollContainerRef: scrollRef,
    initialScrollTop: scrollPosition,
    onScroll: (e, t) => {
      onScroll(e, t);
      onShowSeparatorScroll(e, t);
    },
    children: [i === Ji.OVERLAY_MODAL && jsx(L, {
      onStartFromFigJamSelected: function () {
        E({
          type: Vf.FILE_PICKER,
          parentType: Vf.ALL
        });
      },
      onStartFromTextOutlineSelected: function () {
        start();
      }
    }), jsx(et, {}), C?.type === "org" && jsx($, {
      currentOrg: C.entity
    }), C?.type === "team" && jsx(Q, {
      currentTeam: C.entity
    }), jsx(ee, {}), isLocalCluster() && jsx(T, {
      closePicker: e
    })]
  });
}
function ec({
  closePicker: e,
  showCloseButton: t
}) {
  let {
    trimmedSearchQuery,
    searchQuery,
    setSearchQuery,
    isSearchQueryLoading,
    searchQueryResult,
    requestLoadMore
  } = $N();
  let {
    showSeparator
  } = gH();
  return jsxs(x, {
    children: [jsx("div", {
      className: c()({
        [me]: showSeparator
      }),
      children: jsx(tJ, {
        searchQuery,
        setSearchQuery,
        showCloseButton: !!t,
        placeholder: getI18nString("slides.templates.search_templates")
      })
    }), trimmedSearchQuery ? jsx(eo, {
      isSearchQueryLoading,
      trimmedSearchQuery,
      searchQueryResult,
      requestLoadMore
    }) : jsx(ed, {
      closePicker: e
    })]
  });
}
function em({
  title: e,
  onClick: t,
  children: i,
  isLoading: a,
  publisherName: s,
  showSeparator: o = !0
}) {
  return jsxs("div", {
    className: c()(_$$s.borderBox.flex.flexRow.itemsCenter.p8.minH48.$, {
      [me]: o
    }),
    children: [jsx(IconButton, {
      "aria-label": getI18nString("slides.templates.back"),
      onClick: t,
      children: jsx(_$$C, {
        "data-not-draggable": !0,
        "data-does-not-dismiss-modal": !0
      })
    }), jsxs("div", {
      className: Tn,
      children: [a ? jsx(v8, {}) : jsxs(Fragment, {
        children: [jsx(r.TemplateTitle, {
          title: e
        }), s && jsx(r.MetadataPublisher, {
          publisherName: s
        })]
      }), i]
    })]
  });
}
function ef({
  shelfId: e
}) {
  let [{
    data: t,
    status: i
  }] = _$$IT(_$$Q2(e));
  let r = useSetAtom(bY);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = d$(Vf.HUB_FILE);
  let d = () => r({
    type: Vf.ALL
  });
  return "loading" === i ? jsxs(x, {
    children: [jsx(em, {
      isLoading: !0,
      title: "",
      onClick: d
    }), jsx(kM, {})]
  }) : t ? jsxs(x, {
    children: [jsx(em, {
      title: getTranslatedDynamicContent(t.i18n_meta.title, t.title),
      onClick: d
    }), jsx(_$$P, {
      className: _$$s.px8.pt16.hFull.$,
      scrollContainerRef: scrollRef,
      initialScrollTop: scrollPosition,
      onScroll,
      children: jsx(p9, {
        children: t.shelf_content.map(t => jsx(AK, {
          template: {
            type: _$$n.HubFile,
            category: e,
            template: t
          }
        }, t.id))
      })
    })]
  }) : null;
}
(e => {
  e.TemplateTitle = function ({
    title: e
  }) {
    return jsxs("div", {
      className: GM,
      children: [renderI18nText("slides.templates.templates_modal.templates_title"), jsx("span", {
        className: HE,
        children: " / "
      }), e]
    });
  };
  e.MetadataPublisher = function ({
    publisherName: e
  }) {
    return jsx("div", {
      className: m_,
      children: renderI18nText("slides.templates.templates_modal.published_by", {
        publisherName: e
      })
    });
  };
})(r || (r = {}));
async function eJ({
  slidePresetModules: e,
  abortController: t,
  batchSize: i = 2,
  dispatch: r
}) {
  let n = [];
  let a = [];
  SlidesAiBindings?.createHiddenFrameForPresets();
  for (let s = 0; s < e.length; s += i) {
    if (t.signal.aborted) return a;
    for (let t of e.slice(s, s + i)) try {
      let e = new Promise(e => {
        Zx({
          module: t,
          editScopeType: SourceType.USER,
          editScopeLabel: "use-slides-ai-preset-selection",
          callback: t => {
            a.push(t);
            e();
          },
          dispatch: r
        });
      });
      n.push(e);
    } catch (e) {
      logger.error("Failed to insert preset", e);
    }
    Promise.allSettled(n).then(() => {
      t.signal.aborted && e1(a);
    });
    await e0(Promise.allSettled(n), t.signal);
  }
  t.signal.aborted || SlidesAiBindings?.selectPresetsFromTemplate();
  return a;
}
async function eq({
  figjamFileKey: e,
  selectedGuids: t = [],
  pageGuids: i = [],
  abortController: r
}) {
  if (!SlidesAiBindings) return [];
  let n = await e0(_$$R({
    fileKey: e,
    selectedGuids: t.slice(0, _$$S)
  }), r.signal);
  return r.signal.aborted ? [] : JSON.parse(SlidesAiBindings.getCanvasDataJsonFromBuffer(n, i));
}
class eX {
  constructor(e, t, i) {
    this.currentItem = void 0;
    this.hasRenamedFile = !1;
    this.lastSlideGuid = "";
    this.abortController = e;
    this.showPlaceholderOverlay = t;
    this.getNextItem = i;
    this.intervalId = this.start();
  }
  start() {
    return setInterval(() => this.update(), 100);
  }
  isActive() {
    return 0 !== this.intervalId;
  }
  update() {
    if (!SlidesAiBindings) return;
    if (this.abortController.signal.aborted || !atomStoreManager.get(openFileKeyAtom)) {
      this.cancel();
      return;
    }
    if (this.currentItem || (this.currentItem = this.getNextItem(), !this.currentItem)) return;
    let e = SlidesAiBindings.generateSlides(this.currentItem.slideItem);
    if (!this.abortController.signal.aborted) {
      if (this.showPlaceholderOverlay(SlidesAiBindings.getPlaceholderNodeId()), e.length > 0) {
        e.unshift(this.lastSlideGuid);
        for (let t = 0; t < e.length - 1; ++t) {
          let i = e[t];
          i && e$(eQ(i));
        }
        let t = e[e.length - 1];
        t && (this.lastSlideGuid = t);
      }
      this.currentItem.resolve();
      this.currentItem = void 0;
    }
  }
  cancel() {
    this.isActive() && (this.cleanUp(), _$$Y());
  }
  completeSuccessfully() {
    this.cleanUp();
    Sk();
  }
  processError(e) {
    this.cleanUp();
    D1(e);
  }
  cleanUp() {
    this.isActive() && (clearInterval(this.intervalId), this.intervalId = 0);
  }
}
async function eZ({
  canvasData: e,
  processTitle: t,
  showPlaceholderOverlay: i,
  abortController: r
}) {
  let n = [];
  let a = new eX(r, i, () => n.shift());
  try {
    let i = await Ay.slides.createSlides({
      version: "1.1",
      data: e
    }, {
      orgId: atomStoreManager.get(_s),
      teamId: atomStoreManager.get(openFileTeamIdAtom) || null,
      fileKey: atomStoreManager.get(openFileKeyAtom) || null,
      fileSeq: atomStoreManager.get(_$$J)?.toString() || null,
      userId: atomStoreManager.get(userIdAtom) || null,
      trackingSessionId: getTrackingSessionId()
    });
    if (r.signal.aborted || !atomStoreManager.get(openFileKeyAtom)) {
      i.cancel();
      return;
    }
    let o = [];
    let l = !1;
    for await (let e of new c6(i)) {
      if (!a.isActive()) return;
      let i = e;
      l || "TITLE" !== i.slideType || (l = !0, t(i.content.find(e => "h1" === e.type)?.content || ""));
      o.push(new Promise(e => {
        n.push({
          slideItem: i,
          resolve: e
        });
      }));
    }
    if (await e0(Promise.allSettled(o), r.signal), r.signal.aborted) return;
    a.completeSuccessfully();
  } catch (e) {
    a.processError(e);
  }
}
let eQ = _$$n2(e => {
  if (!e) return [];
  let t = getSingletonSceneGraph().get(e);
  if (!t) return [];
  let i = [];
  t.childrenNodes.forEach(e => {
    (function e(t, i) {
      t && ("TEXT" === t.type ? i.push(t) : t.childrenNodes.forEach(t => e(t, i)));
    })(e, i);
  });
  return i;
});
let e$ = _$$n2(e => {
  permissionScopeHandler.user("figjam-to-slide-deck-text-opacity", () => {
    e.forEach(e => {
      e.opacity > 0 || e.setOpacityWithAnimation(1, _E.forLinear(.5), "slides-ai-animate-slide-text");
    });
  });
  e.length = 0;
});
async function e0(e, t) {
  if (!t) return e;
  if (t.aborted) throw Error("Aborted");
  let i = new Promise((e, i) => {
    let r = () => {
      i(Error("Aborted"));
    };
    t.addEventListener("abort", r);
    t.addEventListener("abort", () => {
      t.removeEventListener("abort", r);
    });
  });
  return await Promise.race([e, i]);
}
function e1(e) {
  e && permissionScopeHandler.user("remove-hidden-preset-nodes", () => {
    for (let t of e) {
      let e = getSingletonSceneGraph().get(t);
      if (e) try {
        e.removeSelfAndChildren();
      } catch (e) {
        console.warn("Failed to remove preset", e);
      }
    }
  });
}
function e2() {
  let e = useAtomWithSubscription(oQ) ?? void 0;
  let t = useAtomWithSubscription(bY);
  let i = t?.figjamEntryPointData;
  let r = i?.figjamFileKey ?? e;
  let {
    areSlidePresetsLoaded,
    slidePresetModules
  } = v0();
  let d = Hn(slidePresetModules);
  let {
    showPlaceholderOverlay,
    removeAllPlaceholderOverlays
  } = Wb();
  let p = useDispatch();
  let h = useAtomWithSubscription(openFileKeyAtom);
  let m = t?.source ?? _$$E.SLIDES_TEMPLATE;
  Xr(zF)(m);
  let g = _$$D(slidePresetModules[0]?.library_key);
  let _ = useMemo(() => ({
    figjamFileKey: r,
    figjamEntryPointData: i,
    areSlidePresetsLoaded,
    slidePresetModules,
    addFirstPresetToEmptyDeck: d,
    showPlaceholderOverlay,
    removeAllPlaceholderOverlays,
    dispatch: p,
    openFileKey: h,
    subscribeToLibrary: g
  }), [r, i, areSlidePresetsLoaded, slidePresetModules, d, showPlaceholderOverlay, removeAllPlaceholderOverlays, p, h, g]);
  let x = RL(JT.BOARD_TO_DECK, e3, {
    figjamFileKey: r
  });
  return {
    startAction: useCallback(() => {
      B3(JT.BOARD_TO_DECK);
      x.start(_);
    }, [_, x]),
    figjamFileKey: r
  };
}
let e3 = async ({
  abortController: e,
  params: t
}) => {
  let {
    figjamFileKey,
    figjamEntryPointData,
    areSlidePresetsLoaded,
    slidePresetModules,
    addFirstPresetToEmptyDeck,
    showPlaceholderOverlay,
    removeAllPlaceholderOverlays,
    dispatch,
    openFileKey,
    subscribeToLibrary
  } = t;
  let h = Gd(figjamEntryPointData);
  let g = figjamEntryPointData?.selectedGuids;
  let _ = !figjamFileKey;
  if (e.signal.aborted || _ || !areSlidePresetsLoaded || !openFileKey) return;
  slidePresetModules?.length || logger.warn("No slide preset modules found...");
  let x = [];
  try {
    if (AppStateTsApi && AppStateTsApi.uiState().leftPanelCollapsedUI3.set(!0), _$$tO(), !SlidesAiBindings) return;
    SlidesAiBindings.showLoadingState();
    let t = SlidesAiBindings.getPlaceholderNodeId();
    showPlaceholderOverlay(t);
    let [r, n] = await e0(Promise.allSettled([eq({
      figjamFileKey,
      selectedGuids: g,
      pageGuids: h,
      abortController: e
    }), eJ({
      slidePresetModules,
      abortController: e,
      dispatch
    })]), e.signal);
    if ("rejected" === n.status) {
      logger.error("Failed to ingest templates", n.reason);
      D0(getI18nString("slides.present_summary.visual_bells.error_unknown"));
      return;
    }
    if (x = n.value, "rejected" === r.status) {
      logger.error("Failed to fetch canvas data from file", r.reason);
      D0(getI18nString("slides.present_summary.visual_bells.error_unknown"));
      return;
    }
    subscribeToLibrary && subscribeToLibrary();
    await eZ({
      canvasData: r.value,
      processTitle: e => {
        e && dispatch(renameFileOptimistic({
          file: {
            key: openFileKey
          },
          name: `${e} ${getI18nString("slides.templates.presentation")}`
        }));
      },
      showPlaceholderOverlay,
      abortController: e
    });
  } catch (t) {
    if (e.signal.aborted) {
      _$$Y();
      return;
    }
    D0(getI18nString("slides.present_summary.visual_bells.error_unknown"));
    logger.error("Failed to generate slides", t);
  } finally {
    removeAllPlaceholderOverlays();
    openFileKey !== atomStoreManager.get(openFileKeyAtom) || addFirstPresetToEmptyDeck();
    SlidesAiBindings?.finishDeckGeneration();
    e1(x);
  }
};
function e8() {
  let e = useDispatch();
  let t = Um();
  let i = useAtomWithSubscription(oQ);
  let [r, o] = useState([]);
  let [d, c] = useAtomValueAndSetter(V6);
  let u = M0(i);
  return (useEffect(() => {
    !isInteractionPathCheck() && i && (c({
      type: i6.NONE
    }), (async () => {
      let e = await u();
      if (!e) return;
      let t = SlidesAiBindings?.getPagesFromBuffer(e) ?? [];
      let i = t[0];
      i && (o(t.map(e => ({
        guid: e.guid,
        name: e.name
      }))), c({
        type: i6.SINGLE,
        page: {
          guid: i.guid,
          name: i.name
        }
      }));
    })());
  }, [i, c, u]), i) ? d.type === i6.NONE ? jsx(e9, {}) : jsx("div", {
    "data-testid": "page-selector",
    children: jsxs(l6, {
      ariaLabel: getI18nString("slides.templates.file_picker.page_selector.label"),
      className: "slides_template_page_selector--pageSelector--PuTJR",
      dispatch: e,
      dropdownShown: t,
      dropdownWidth: 208,
      formatter: {
        format: e => {
          switch (e.type) {
            case i6.SINGLE:
              return e.page.name;
            case i6.ALL:
              return getI18nString("slides.templates.file_picker.page_selector.all_pages");
            default:
              return "";
          }
        },
        isEqual: (e, t) => e.type === t.type && (e.type !== i6.SINGLE || t.type !== i6.SINGLE || e.page.guid === t.page.guid && e.page.name === t.page.name)
      },
      id: "slides-ai-file-picker-page-select",
      inputClassName: _$$s.fontMedium.colorText.ellipsis.alignTop.maxW150.$,
      onChange: e => {
        c(e);
      },
      property: d,
      children: [jsx(c$, {
        value: {
          type: i6.NONE
        },
        disabled: !0,
        ignoreCheck: !0,
        children: getI18nString("slides.templates.file_picker.page_selector.label")
      }), r.map(e => jsx(c$, {
        value: {
          type: i6.SINGLE,
          page: e
        },
        children: e.name
      }, e.guid)), jsx(sK, {}), jsx(c$, {
        value: {
          type: i6.ALL,
          allPages: r
        },
        children: getI18nString("slides.templates.file_picker.page_selector.all_pages")
      }, -1)]
    })
  }) : null;
}
function e9() {
  return jsxs("div", {
    className: "slides_template_page_selector--pageSelectorLoadingState--oaDQH",
    children: [jsx("div", {
      className: _$$s.fontMedium.overflowHidden.colorTextSecondary.$,
      children: getI18nString("slides.templates.file_picker.page_selector.loading")
    }), jsx(LoadingSpinner, {})]
  });
}
function te({
  templateSelected: e
}) {
  let {
    startAction,
    figjamFileKey
  } = e2();
  return jsx(ta, {
    children: jsx(Button, {
      iconPrefix: jsx(_$$x, {}),
      variant: "primary",
      onClick: startAction,
      disabled: !figjamFileKey,
      children: renderI18nText(e ? "slides.templates.template_picker.submit.button.with_template" : "slides.templates.template_picker.submit.button.without_template")
    })
  });
}
function tt({
  createOutline: e,
  addAllSlides: t,
  disabled: i
}) {
  let {
    isCreateSlidesOutlineEnabled
  } = mp();
  return jsxs("div", {
    className: c()(_$$s.flex.itemsCenter.justifyEnd.py8.pr16.gap8.$, qr),
    children: [isCreateSlidesOutlineEnabled && jsx(Button, {
      iconPrefix: jsx(_$$V2, {}),
      variant: "secondary",
      onClick: e,
      disabled: i,
      children: renderI18nText("slides.templates.outline_with_template.button")
    }), jsx(Button, {
      variant: "secondary",
      onClick: t,
      disabled: i,
      children: renderI18nText("slides.templates.add_all_slides")
    })]
  });
}
function ti({
  children: e
}) {
  return jsx(ta, {
    children: jsxs("div", {
      className: _$$s.flex.gap8.itemsCenter.$,
      children: [jsx(e8, {}), e]
    })
  });
}
function tr() {
  let e = useAtomWithSubscription(V6);
  let {
    startAction,
    figjamFileKey
  } = e2();
  return jsx(ti, {
    children: jsx(Button, {
      iconPrefix: jsx(_$$x, {}),
      variant: "primary",
      onClick: startAction,
      disabled: !figjamFileKey || e.type === i6.NONE,
      children: renderI18nText("slides.templates.file_picker.submit_button.generate")
    })
  });
}
function tn() {
  let e = useAtomWithSubscription(V6);
  let t = Xr(bY);
  let i = useAtomWithSubscription(oQ);
  return jsx(ti, {
    children: jsx(Button, {
      variant: "primary",
      onClick: () => {
        t({
          type: Vf.TEMPLATE_PICKER
        });
      },
      disabled: !i || e.type === i6.NONE,
      children: renderI18nText("slides.templates.file_picker.submit_button.pick_template")
    })
  });
}
function ta({
  children: e
}) {
  return jsxs("div", {
    className: c()(_$$s.flex.itemsCenter.justifyBetween.pl12.pr8.py8.$, qr),
    children: [jsx("div", {
      className: _$$s.flex.itemsCenter.justifyStart.gap8.$,
      children: jsx(_$$y, {
        helpUrlVariant: JT.BOARD_TO_DECK
      })
    }), e]
  });
}
function to({
  libraryKey: e
}) {
  let t = NG(e);
  let [i, r] = useAtomValueAndSetter(bY);
  let o = null === useCurrentFileKey();
  let d = r$();
  let c = S7();
  let u = Xr(ux);
  let p = Xr(oQ);
  return (useEffect(() => {
    o || ["loading", "loaded"].includes(t.status) || logInfo(_$$e3.SLIDES, `Query result status has unexpected value: ${t.status}`);
  }, [o, t.status]), "loading" === t.status || o) ? jsxs(x, {
    children: [jsx(em, {
      title: "",
      isLoading: !0,
      onClick: () => {
        r(i.type === Vf.TEMPLATE ? i.parentView : {
          type: Vf.ALL
        });
        u(null);
        p(null);
      },
      showSeparator: !1
    }), jsx("div", {
      className: _$$s.px16.overflowHidden.$,
      children: jsx(oJ, {})
    }), d === Ji.OVERLAY_MODAL && !c && jsx(tt, {
      createOutline: lQ,
      addAllSlides: lQ,
      disabled: !0
    })]
  }) : jsx(tl, {
    libraryKey: e,
    modules: t.data || []
  });
}
function tl({
  libraryKey: e,
  modules: t
}) {
  let i = selectCurrentFile();
  let r = r$();
  let [o, d] = useAtomValueAndSetter(bY);
  let c = Xr(ux);
  let u = Xr(oQ);
  let {
    showSeparator
  } = gH();
  let h = useDispatch();
  let g = m4();
  let _ = t && t.length > 0;
  let y = _$$e4();
  let E = o.type === Vf.TEMPLATE && o.shouldRemoveSourceLibraryKeyOnFail;
  let T = BX(y);
  useEffect(() => {
    if (!_ && o.type === Vf.TEMPLATE) {
      if (E) {
        T();
        d({
          type: Vf.ALL
        });
        return;
      }
      e ? (logError(_$$e3.SLIDES, "Expected to find at least one module in slides template", {
        libraryKey: e
      }, {
        reportAsSentryError: !0
      }), h(VisualBellActions.enqueue({
        type: "slides-template",
        message: getI18nString("slides.templates.toast.no_longer_available"),
        error: !0,
        icon: VisualBellIcon.EXCLAMATION
      }))) : logError(_$$e3.SLIDES, "No library key found for slides template", {}, {
        reportAsSentryError: !0
      });
      d({
        type: Vf.ALL
      });
    }
  }, [h, _, e, t, T, d, E, o.type]);
  let w = _$$D(e);
  if (!_) return null;
  let S = t[0];
  let j = () => {
    let e = (AppStateTsApi?.canvasGrid().canvasGridArray.getCopy() ?? []).length > 0;
    let n = {
      row: 0,
      col: 0
    };
    let a = AppStateTsApi?.getInsertGridCoord({
      x: -1 / 0,
      y: -1 / 0
    }) ?? n;
    if (y && y !== defaultSessionLocalIDString) {
      let e = AppStateTsApi?.canvasGrid().coordForChild(y) ?? n;
      a = {
        row: e.row,
        col: e.col + 1
      };
    } else a = e ? {
      row: (AppStateTsApi?.canvasGrid().getLastChildCoord() ?? n).row + 1,
      col: 0
    } : n;
    g();
    h(yy({
      modules: t,
      canvasPosition: new Point(),
      percentageOffset: new Point(),
      insertAsChildOfCanvas: !0,
      afterSlideModulesInsertion: (e, t) => {
        permissionScopeHandler.user("add-all-slides", () => {
          e.forEach((e, i) => {
            h0({
              module: e,
              insertedItems: t[i],
              viewType: r,
              getGridCoord: () => ({
                row: a.row,
                col: a.col + i
              }),
              subscribeToLibrary: w
            });
          });
          fL(t[0][0]);
          fullscreenValue.commit();
        });
      }
    }));
    permissionScopeHandler.user("add-all-slides", () => {
      AppStateTsApi?.slideThemeLibBindings().setDocumentTemplateLibraryKey(t[0].library_key);
    });
    !getFeatureFlags().piper_auto_rename && i?.key && S.file_name && !e && i.name === getI18nString("fullscreen.fullscreen_view_selector.untitled") && h(renameFileOptimistic({
      file: {
        key: i.key
      },
      name: S.file_name
    }));
    S?.isHubFile && S?.hub_file_id && h(k8({
      hubFileId: S.hub_file_id
    }));
    qm(h, S);
  };
  let I = S.file_name || "";
  let N = S.publisher_name;
  return jsxs(x, {
    children: [jsx(em, {
      title: I,
      publisherName: N,
      onClick: () => {
        d(o.type === Vf.TEMPLATE ? o.parentView : {
          type: Vf.ALL
        });
        c(null);
        u(null);
      },
      showSeparator,
      children: jsx(td, {
        addAllSlides: j
      })
    }), jsx(Dh, {
      modules: t
    }), r === Ji.OVERLAY_MODAL && jsx(tt, {
      createOutline: () => {
        c(S.library_key);
        d({
          type: Vf.FILE_PICKER,
          parentType: Vf.TEMPLATE
        });
      },
      addAllSlides: j
    })]
  });
}
function td({
  addAllSlides: e
}) {
  return r$() === Ji.PICKER ? jsx(tc, {
    children: jsx(Button, {
      variant: "secondary",
      onClick: e,
      children: renderI18nText("slides.templates.add_all_slides")
    })
  }) : null;
}
function tc({
  children: e
}) {
  return jsx("div", {
    className: _$$s.mr8.mlAuto.$,
    children: e
  });
}
function th({
  title: e,
  templates: t,
  onRequestMore: i,
  onSeeAllClick: r
}) {
  return jsxs(MR, {
    title: e,
    rightHeaderCta: r ? jsx(X, {
      onSeeAllClick: r
    }) : void 0,
    children: [t.map(e => jsx(AK, {
      template: e
    }, gp(e))), jsx(_$$a, {
      onIntersectionChange: i
    })]
  });
}
function tm({
  currentOrg: e
}) {
  let {
    isLoadingTeamTemplates,
    templatesByTeam,
    requestLoadMore,
    requestLoadMoreForTeam
  } = GR(e, FFileType.SLIDES);
  let d = isBigmaEnabledAlias(e);
  let c = fK();
  let {
    teamTemplates,
    isLoading,
    requestLoadMoreForOrg
  } = _$$e({
    orgId: e.id,
    areWorkspacesEnabled: d,
    numTemplatesPerTeam: c,
    editorType: FFileType.SLIDES,
    filterByIds: null
  });
  let g = getFeatureFlags().pro_templates_lg;
  let y = g ? teamTemplates : templatesByTeam;
  let b = useSetAtom(bY);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = d$(Vf.ORG);
  let T = y?.[y.length - 1]?.teamId ?? null;
  let w = useRef(null);
  _$$X({
    containerRef: scrollRef,
    targetRef: w,
    targetKey: T,
    onIntersectionChange: g ? requestLoadMoreForOrg : requestLoadMore
  });
  let S = () => b({
    type: Vf.ALL
  });
  return (g ? isLoading : isLoadingTeamTemplates) ? jsxs(x, {
    children: [jsx(em, {
      isLoading: !0,
      title: "",
      onClick: S
    }), jsx(kM, {})]
  }) : jsxs(x, {
    children: [jsx(em, {
      title: e.name,
      onClick: S
    }), jsx(_$$P, {
      className: _$$s.px8.hFull.$,
      scrollContainerRef: scrollRef,
      initialScrollTop: scrollPosition,
      onScroll,
      children: y.map(t => jsx("div", {
        ref: T === t.teamId ? w : null,
        children: jsx(th, {
          title: t.teamName ?? e.name,
          templates: t.templates,
          onRequestMore: () => {
            g || requestLoadMoreForTeam(t.teamId);
          },
          onSeeAllClick: g && t.totalTemplatesByTeam > c ? () => b({
            type: Vf.TEAM,
            teamId: t.teamId,
            displayName: t.teamName ?? e.name
          }) : void 0
        }, t.teamId)
      }, t.teamId))
    })]
  });
}
function tg({
  templates: e,
  scrollContainerRef: t,
  onRequestMore: i
}) {
  let r = e?.[e.length - 1]?.id;
  let s = useRef(null);
  _$$X({
    containerRef: t,
    targetRef: s,
    targetKey: r,
    onIntersectionChange: i
  });
  return jsx(MR, {
    children: e.map(e => jsx("div", {
      ref: e.id === r ? s : void 0,
      children: jsx(AK, {
        template: {
          type: _$$n.TeamTemplateLg,
          template: e
        }
      }, e.id)
    }, e.id))
  });
}
function t_({
  teamId: e,
  displayName: t
}) {
  let {
    requestLoadMoreForTeam,
    templatesByTeam
  } = li({
    teamId: e,
    editorType: FFileType.SLIDES
  });
  let a = useSetAtom(bY);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = d$(Vf.TEAM);
  let u = useCurrentUserOrgId();
  return jsxs(x, {
    children: [jsx(em, {
      title: t,
      onClick: () => {
        u ? a({
          type: Vf.ORG
        }) : a({
          type: Vf.ALL
        });
      }
    }), templatesByTeam ? jsx(_$$P, {
      className: _$$s.p8.hFull.$,
      scrollContainerRef: scrollRef,
      initialScrollTop: scrollPosition,
      onScroll,
      children: jsx(tg, {
        scrollContainerRef: scrollRef,
        templates: templatesByTeam.templates,
        onRequestMore: requestLoadMoreForTeam
      })
    }) : jsx("div", {
      className: _$$s.p8.$,
      children: jsx(gu, {})
    })]
  });
}
function tE({
  showCloseButton: e
}) {
  let [t, i] = useAtomValueAndSetter(bY);
  let {
    files,
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
    status
  } = _$$_(FFileType.WHITEBOARD);
  let [p, f] = useAtomValueAndSetter(ux);
  let g = Xr(oQ);
  let {
    showSeparator
  } = gH();
  return t.type !== Vf.FILE_PICKER ? null : jsxs(x, {
    dataTestId: "file-picker-view",
    children: [jsx(ui, {
      searchQuery,
      setSearchQuery,
      onBack: function () {
        t.type === Vf.FILE_PICKER && (p && t.parentType === Vf.TEMPLATE ? i({
          type: Vf.TEMPLATE,
          libraryKey: p,
          parentView: {
            type: Vf.ALL
          }
        }) : (i({
          type: Vf.ALL
        }), f(null), g(null)));
      },
      showCloseButton: !!e,
      placeholder: getI18nString("slides.templates.file_picker.search_files")
    }), jsx("div", {
      className: c()(_$$s.pt16.pb24.px16.flex.flexColumn.gap2.$, {
        [me]: showSeparator
      }),
      children: jsx(_8, {
        icon: jsx(w4, {
          size: 16,
          type: y1.WHITEBOARD
        }),
        title: getI18nString("slides.templates.file_picker.title"),
        subtitle: getI18nString("slides.templates.file_picker.subtitle")
      })
    }), jsx(tT, {
      status,
      debouncedSearchQuery,
      files
    }), t.parentType === Vf.TEMPLATE ? jsx(tr, {}) : jsx(tn, {})]
  });
}
function tT({
  status: e,
  debouncedSearchQuery: t,
  files: i
}) {
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = d$(Vf.FILE_PICKER);
  let {
    onShowSeparatorScroll
  } = gH();
  let d = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
  let u = null === useCurrentFileKey();
  return e === J_.LOADING || !d || u ? jsx(yx, {}) : e !== J_.SUCCESS ? jsx("div", {
    className: _$$s.flex.itemsCenter.justifyCenter.hFull.wFull.colorText.textBodyLarge.pre.$,
    children: jsx(tS, {
      debouncedSearchQuery: t,
      status: e
    })
  }) : jsx(_$$P, {
    className: c()(_$$s.px8.hFull.$),
    onScroll: (e, t) => {
      onScroll(e, t);
      onShowSeparatorScroll(e, t);
    },
    scrollContainerRef: scrollRef,
    initialScrollTop: scrollPosition,
    children: jsx("div", {
      className: c()(Vg, _$$s.pb12.$),
      children: i.map(e => jsx(tw, {
        file: e
      }, e.key))
    })
  });
}
function tw({
  file: e
}) {
  let t = selectCurrentUser();
  let [i, r] = useAtomValueAndSetter(oQ);
  let {
    disabled,
    tooltipText
  } = function (e) {
    let t = useSubscription(SlidesAiFileDisabledForFilePickerView, {
      fileKey: e
    });
    if ("loaded" !== t.status) return {
      disabled: !0,
      tooltipText: void 0
    };
    if (t.data.file?.viewerExportRestricted && t.data.file?.canEdit === !1) return {
      disabled: !0,
      tooltipText: getI18nString("slides.template.file_picker.viewer_export_restricted_disabled")
    };
    let i = t.data.file?.org;
    if (i?.k12GoogleOrg || i?.aiFeaturesDisabledAt) return {
      disabled: !0,
      tooltipText: getI18nString("slides.template.file_picker.ai_disabled.org")
    };
    let r = t.data.file?.team;
    return r?.aiFeaturesDisabledAt ? {
      disabled: !0,
      tooltipText: getI18nString("slides.template.file_picker.ai_disabled.team")
    } : {
      disabled: !1,
      tooltipText: void 0
    };
  }(e.key);
  return jsx("div", {
    className: c()(_$$s.pt8.px8.$, Fj),
    children: jsx(GQ, {
      activeFileUsers: [],
      currentUser: t,
      disableIconOverlays: !0,
      disabled,
      file: e,
      isSelected: !disabled && i === e.key,
      onClick: t => {
        t.stopPropagation();
        disabled || r(e.key);
      },
      overrideOnClick: !0,
      subtitle: jsx(lJ, {
        file: e
      }),
      titleFontSize: 11,
      tooltipText
    })
  });
}
function tS({
  debouncedSearchQuery: e,
  status: t
}) {
  return t === J_.NO_QUERY_RESULTS ? renderI18nText("slides.templates.file_picker.no_files_match", {
    searchQuery: jsx("p", {
      className: _$$s.colorText.textBodyLargeStrong.$,
      children: e
    })
  }) : t === J_.NO_RECENT_FILES ? jsx("h1", {
    className: _$$s.colorText.textBodyLarge.$,
    children: renderI18nText("slides.templates.file_picker.no_recent_files")
  }) : null;
}
function tj({
  showCloseButton: e
}) {
  let {
    searchQuery,
    setSearchQuery
  } = $N();
  let [r, a] = useAtomValueAndSetter(bY);
  let o = !!(r.type === Vf.TEMPLATE_PICKER && r.figjamEntryPointData);
  let d = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED) || isInteractionPathCheck();
  return jsxs(x, {
    dataTestId: "template-picker-view",
    children: [o ? jsx(tJ, {
      searchQuery,
      setSearchQuery,
      showCloseButton: !0,
      placeholder: getI18nString("slides.templates.search_templates")
    }) : jsx(ui, {
      searchQuery,
      setSearchQuery,
      onBack: function () {
        a({
          type: Vf.FILE_PICKER,
          parentType: Vf.TEMPLATE_PICKER
        });
      },
      showCloseButton: !!e,
      placeholder: getI18nString("slides.templates.template_picker.search_templates")
    }), d ? jsx(tI, {
      footer: e => jsx(te, {
        templateSelected: e
      })
    }) : jsx(kM, {
      removePadding: !0
    })]
  });
}
function tI({
  footer: e
}) {
  let {
    trimmedSearchQuery,
    isSearchQueryLoading,
    searchQueryResult,
    requestLoadMore
  } = $N();
  let o = useAtomWithSubscription(ux);
  let {
    showSeparator
  } = gH();
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: c()(_$$s.p16.flex.flexColumn.gap2.$, {
        [me]: trimmedSearchQuery && showSeparator
      }),
      children: jsx(_8, {
        icon: jsx("div", {
          style: {
            "--color-icon": "var(--color-icon-menu-onselected)"
          },
          className: _$$s.colorBgBrand.h14.w14.bRadius2.flex.alignCenter.itemsCenter.$,
          children: jsx(_$$Q, {})
        }),
        title: getI18nString("slides.templates.template_picker.title"),
        subtitle: getI18nString("slides.templates.template_picker.subtitle")
      })
    }), trimmedSearchQuery ? jsx(eo, {
      isSearchQueryLoading,
      trimmedSearchQuery,
      searchQueryResult,
      requestLoadMore
    }) : jsx(tN, {}), e(!!o)]
  });
}
var tk = (e => (e[e.RECENTS = 1] = "RECENTS", e[e.HUB_FILE = 2] = "HUB_FILE", e[e.ORG = 3] = "ORG", e))(tk || {});
function tN() {
  let e = useCurrentUserOrg();
  let [t, i] = useState([]);
  let [r, s] = useState(null);
  let [{
    data: o
  }] = setupResourceAtomHandler(_$$_2());
  let d = _$$eE(FDocumentType.Slides);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = d$(Vf.TEMPLATE_PICKER);
  let {
    showSeparator,
    onShowSeparatorScroll
  } = gH();
  let x = useCallback((e, t) => {
    onScroll(e, t);
    onShowSeparatorScroll(e, t);
  }, [onScroll, onShowSeparatorScroll]);
  useEffect(() => {
    let t = [];
    if (d.length > 0 && t.push({
      type: 1,
      id: "recents",
      label: getI18nString("slides.templates.recents")
    }), o) for (let e of o) t.push({
      type: 2,
      shelf: e,
      id: `hub-${e.id}`,
      label: e.title
    });
    e && t.push({
      type: 3,
      id: "org",
      label: getI18nString("slides.templates.org_templates")
    });
    i(t);
    t.length > 0 && s(t[0].id);
  }, [d, e, o]);
  let y = e => () => {
    s(e);
  };
  let b = {
    scrollContainerRef: scrollRef,
    initialScrollTop: scrollPosition,
    onScroll: x
  };
  let C = t.find(e => e.id === r);
  return C ? jsxs(Fragment, {
    children: [jsx("div", {
      className: c()(_$$s.flex.flexRow.gap6.alignCenter.itemsCenter.px16.pb16.$, {
        [me]: showSeparator
      }),
      children: t.map(e => jsx("button", {
        className: c()(_$$s.textBodyMedium.colorText.spacingWide.alignCenter.px8.h24.$, {
          [_$$eg]: r === e.id,
          [_$$s.textBodyMediumStrong.$]: r === e.id,
          [_$$s.colorTextSecondary.$]: r !== e.id
        }),
        onClick: y(e.id),
        children: 2 === e.type ? getTranslatedDynamicContent(e.shelf.i18n_meta.title, e.shelf.title) : e.label
      }, e.id))
    }), (t => {
      switch (t.type) {
        case 2:
          return jsx(tR, {
            shelf: t.shelf,
            ...b
          });
        case 1:
          return jsx(tA, {
            ...b
          });
        case 3:
          if (!e) throw Error("Something went wrong in tab calculation");
          return jsx(tL, {
            currentOrg: e,
            ...b
          });
      }
    })(C)]
  }) : null;
}
function tA({
  scrollContainerRef: e,
  initialScrollTop: t,
  onScroll: i
}) {
  let r = _$$eE(FDocumentType.Slides);
  return 0 === r.length ? null : jsx(_$$P, {
    className: _$$s.px8.hFull.$,
    scrollContainerRef: e,
    initialScrollTop: t,
    onScroll: i,
    children: jsx(p9, {
      children: r.map(e => jsx(AK, {
        template: e
      }, NH(e)))
    })
  });
}
function tO({
  teamId: e,
  displayName: t,
  onBackClick: i
}) {
  let {
    requestLoadMoreForTeam,
    templatesByTeam
  } = li({
    teamId: e,
    editorType: FFileType.SLIDES
  });
  let l = useRef(null);
  return jsxs(Fragment, {
    children: [jsx(em, {
      title: t,
      onClick: i,
      showSeparator: !1
    }), templatesByTeam ? jsx(_$$P, {
      scrollContainerRef: l,
      className: _$$s.px8.hFull.$,
      children: jsx(tg, {
        scrollContainerRef: l,
        templates: templatesByTeam.templates,
        onRequestMore: requestLoadMoreForTeam
      })
    }) : jsx(gu, {})]
  });
}
function tL({
  currentOrg: e,
  scrollContainerRef: t,
  initialScrollTop: i,
  onScroll: r
}) {
  let {
    isLoadingTeamTemplates,
    templatesByTeam,
    requestLoadMore,
    requestLoadMoreForTeam
  } = GR(e, FFileType.SLIDES);
  let u = isBigmaEnabledAlias(e);
  let {
    teamTemplates,
    isLoading,
    requestLoadMoreForOrg
  } = _$$e({
    orgId: e.id,
    areWorkspacesEnabled: u,
    numTemplatesPerTeam: 6,
    editorType: FFileType.SLIDES,
    filterByIds: null
  });
  let x = getFeatureFlags().pro_templates_lg;
  let y = x ? teamTemplates : templatesByTeam;
  let b = y?.[y.length - 1]?.teamId ?? null;
  let C = useRef(null);
  _$$X({
    containerRef: t,
    targetRef: C,
    targetKey: b,
    onIntersectionChange: x ? requestLoadMoreForOrg : requestLoadMore
  });
  let [v, E] = useState(null);
  return v ? jsx(tO, {
    teamId: v,
    displayName: e.name,
    onBackClick: () => E(null)
  }) : (x ? isLoading : isLoadingTeamTemplates) ? jsx(kM, {}) : jsx(Fragment, {
    children: jsx(_$$P, {
      className: _$$s.px8.hFull.$,
      scrollContainerRef: t,
      initialScrollTop: i,
      onScroll: r,
      children: y.map(t => jsx("div", {
        ref: b === t.teamId ? C : null,
        children: jsx(th, {
          title: t.teamName ?? e.name,
          templates: t.templates,
          onRequestMore: () => {
            x || requestLoadMoreForTeam(t.teamId);
          },
          onSeeAllClick: x && t.totalTemplatesByTeam > 6 ? () => {
            E(t.teamId);
          } : void 0
        }, t.teamId)
      }, t.teamId))
    })
  });
}
function tR({
  shelf: e,
  scrollContainerRef: t,
  initialScrollTop: i,
  onScroll: r
}) {
  let [{
    status: a
  }] = setupResourceAtomHandler(_$$_2());
  if ("loading" === a) return jsx(kM, {});
  let s = e.id;
  return jsx(_$$P, {
    className: _$$s.px8.hFull.$,
    scrollContainerRef: t,
    initialScrollTop: i,
    onScroll: r,
    children: jsx(p9, {
      children: e.shelf_content.map(e => {
        let t = {
          type: _$$n.HubFile,
          category: s,
          template: e
        };
        return jsx(AK, {
          template: t
        }, e.id);
      })
    })
  });
}
export function $$tD0({
  showCloseButton: e
}) {
  let t = useAtomWithSubscription(bY);
  let i = Xr(VZ);
  let r = Xr(Ei);
  let d = Xr(OR);
  let c = Xr(xw);
  let u = Gi();
  switch (useEffect(() => () => {
    d("");
    c();
  }, [c, d]), t.type) {
    case Vf.ALL:
      return jsx(ec, {
        showCloseButton: e,
        closePicker: () => {
          r(!1);
          i(!1);
        }
      });
    case Vf.ORG:
      if (u?.type !== "org") throw Error("User is not allowed to browse org templates");
      return jsx(tm, {
        currentOrg: u.entity
      });
    case Vf.TEAM:
      if (!u) throw Error("User is not allowed to browse team templates");
      return jsx(t_, {
        teamId: t.teamId,
        displayName: t.displayName
      });
    case Vf.TEMPLATE:
      return jsx(to, {
        libraryKey: t.libraryKey
      });
    case Vf.HUB_FILE:
      return jsx(ef, {
        shelfId: t.shelfId
      });
    case Vf.FILE_PICKER:
      return jsx(tE, {
        showCloseButton: e
      });
    case Vf.TEMPLATE_PICKER:
      return jsx(tj, {
        showCloseButton: e
      });
    default:
      return null;
  }
}
export const q = $$tD0;