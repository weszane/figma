import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { oU, Sr, B3 } from "../905/535224";
import { desktopAPIInstance } from "../figma_app/876459";
import { ModalCloseButton } from "../905/17223";
import { BaseLinkComponent, SecureLink } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { getI18nString } from "../905/303541";
import { rH } from "../figma_app/49598";
import { _J } from "../figma_app/378195";
import { se, fd } from "../figma_app/559491";
import { aq } from "../figma_app/399472";
import { t as _$$t2 } from "../905/833100";
import { r as _$$r } from "../figma_app/896657";
import { filePutAction } from "../figma_app/78808";
import { hideModal } from "../905/156213";
import { _z, ky } from "../905/977218";
import { WX } from "../figma_app/350203";
import { E$, LR, Im, CI, Dy } from "../figma_app/844435";
import { Sz } from "../figma_app/12535";
import { ud } from "../905/862913";
import { selectUser } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { CommunityUniversalPostingModalRecentFileKeysView } from "../figma_app/43951";
import { IT } from "../905/713695";
import { hasOrgUsersForUser } from "../figma_app/951233";
import { HubTypeEnum } from "../figma_app/45218";
import { PageTypeEnum } from "../figma_app/10554";
import { fileApiHandler } from "../figma_app/787550";
import { registerModal } from "../905/102752";
import { ModalView } from "../figma_app/918700";
import { rw } from "../905/54367";
import { gr, fV, n6, IW, fp } from "../figma_app/257005";
import { sp, ke, tY } from "../3591/828414";
import { M4, UC } from "../905/561298";
import { bx, Uz, nf, BA, Ij, $z, q5, Js, Yk, Lm, KE, g8, aq as _$$aq, jG, g4, qr, PJ, GC } from "../figma_app/312949";
let V = rw();
function H(e) {
  let [t, r] = useState();
  useEffect(() => {
    oU(location.href).then(e => r(e));
  }, []);
  return jsxs("div", {
    className: bx,
    children: [jsx("div", {
      className: Uz,
      children: e.tab === gr.PLUGINS ? getI18nString("community.universal_posting_modal.desktop_callout.plugins") : getI18nString("community.universal_posting_modal.desktop_callout.widgets")
    }), jsx(BaseLinkComponent, {
      onClick: () => {
        trackEventAnalytics(t ? "community_publish_open_desktop_clicked" : "community_publish_get_desktop_clicked", {
          resourceType: e.tab === gr.PLUGINS ? HubTypeEnum.PLUGIN : HubTypeEnum.WIDGET
        });
        t && Sr(location.href, B3.UNIVERSAL_POSTING_MODAL);
      },
      href: t ? void 0 : "https://www.figma.com/downloads/",
      className: nf,
      target: "_blank",
      trusted: !0,
      children: void 0 === t ? "" : t ? ` ${getI18nString("community.universal_posting_modal.desktop_open")}` : ` ${getI18nString("community.universal_posting_modal.desktop_get")}`
    })]
  });
}
function z(e) {
  return e.selectedTab === gr.FILES ? jsx(fV, {
    activeFileKey: e.activeFileKey,
    setActiveFile: e.setActiveFile,
    deselectActiveFile: e.deselectActiveFile,
    filterFn: e.filterFn
  }) : e.selectedTab === gr.PLUGINS ? jsx(K, {
    activeResource: e.activeResource,
    setActiveResource: e.setActiveResource,
    deselectActiveResource: e.deselectActiveResource
  }) : jsx(W, {
    activeResource: e.activeResource,
    setActiveResource: e.setActiveResource,
    deselectActiveResource: e.deselectActiveResource
  });
}
function W(e) {
  let {
    invitedWidgets,
    pendingReviewWidgets,
    approvedWidgets,
    developmentWidgets
  } = E$();
  let s = t => !!e.activeResource && ("localFileId" in e.activeResource && "localFileId" in t ? e.activeResource.localFileId === t.localFileId : "id" in e.activeResource && "id" in t ? e.activeResource.id === t.id : void 0);
  return desktopAPIInstance ? invitedWidgets.length + pendingReviewWidgets.length + approvedWidgets.length + developmentWidgets.length === 0 ? jsx(n6, {
    tab: gr.WIDGETS
  }) : jsxs("div", {
    className: BA,
    onClick: e.deselectActiveResource,
    children: [invitedWidgets.map(e => jsx(sp.Tile, {
      plugin: e,
      containerClassName: s(e) ? Ij : $z
    }, e.id)), developmentWidgets.map(t => jsx(ke.Tile, {
      plugin: t,
      onClick: r => {
        r.stopPropagation();
        e.setActiveResource(t);
      },
      containerClassName: s(t) ? Ij : $z,
      showEditorTypeIcon: !0
    }, t.localFileId)), [...pendingReviewWidgets, ...approvedWidgets].map(t => jsx(tY.Tile, {
      plugin: t,
      onClick: r => {
        r.stopPropagation();
        e.setActiveResource(t);
      },
      containerClassName: s(t) ? Ij : $z
    }, t.id))]
  }) : jsx(H, {
    tab: gr.WIDGETS
  });
}
function K(e) {
  let {
    invitedPlugins,
    pendingReviewPlugins,
    approvedPlugins,
    developmentPlugins
  } = LR();
  let s = t => !!e.activeResource && ("localFileId" in e.activeResource && "localFileId" in t ? e.activeResource.localFileId === t.localFileId : "id" in e.activeResource && "id" in t ? e.activeResource.id === t.id : void 0);
  return desktopAPIInstance ? developmentPlugins.length + pendingReviewPlugins.length + approvedPlugins.length + invitedPlugins.length === 0 ? jsx(n6, {
    tab: gr.PLUGINS
  }) : jsxs("div", {
    className: BA,
    onClick: e.deselectActiveResource,
    children: [invitedPlugins.map(e => jsx(sp.Tile, {
      plugin: e,
      containerClassName: s(e) ? Ij : $z
    }, e.id)), developmentPlugins.map(t => jsx(ke.Tile, {
      plugin: t,
      onClick: r => {
        r.stopPropagation();
        e.setActiveResource(t);
      },
      containerClassName: s(t) ? Ij : $z,
      showEditorTypeIcon: !0
    }, t.localFileId)), [...pendingReviewPlugins, ...approvedPlugins].map(t => jsx(tY.Tile, {
      plugin: t,
      onClick: r => {
        r.stopPropagation();
        e.setActiveResource(t);
      },
      containerClassName: s(t) ? Ij : $z
    }, t.id))]
  }) : jsx(H, {
    tab: gr.PLUGINS
  });
}
function Y(e) {
  return desktopAPIInstance ? jsx("div", {
    className: q5,
    children: getI18nString("community.universal_posting_modal.plugin_info.available", {
      numPlugins: e.numPlugins
    })
  }) : jsx("div", {
    className: q5,
    children: getI18nString("community.universal_posting_modal.plugin_info.unavailable")
  });
}
function $(e) {
  return desktopAPIInstance ? jsx("div", {
    className: q5,
    children: getI18nString("community.universal_posting_modal.widget_info.available", {
      numWidgets: e.numWidgets
    })
  }) : jsx("div", {
    className: q5,
    children: getI18nString("community.universal_posting_modal.widget_info.unavailable")
  });
}
function X(e) {
  let t;
  let r = useSelector(e => e.user.email);
  let i = useSelector(e => e.orgById);
  if (useSelector(e => hasOrgUsersForUser(e))) {
    let a = e.currentOrgId && i[e.currentOrgId] ? i[e.currentOrgId].name : null;
    t = jsxs("div", {
      className: Js,
      children: [a && jsxs(Fragment, {
        children: [a, jsx("span", {
          children: "\xa0\xb7\xa0"
        })]
      }), r]
    });
  } else t = jsx("div", {
    className: Js,
    children: r
  });
  return jsxs("div", {
    className: Yk,
    children: [e.selectedTab === gr.FILES && (0 === e.numFiles ? jsx("div", {
      className: q5,
      children: getI18nString("community.universal_posting_modal.file_info.available", {
        numFiles: e.numFiles
      })
    }) : jsx(IW, {
      query: e.searchQuery,
      setQuery: e.setSearchQuery,
      setSearchResults: e.setSearchResults
    })), e.selectedTab === gr.PLUGINS && jsx(Y, {
      numPlugins: e.numPlugins
    }), e.selectedTab === gr.WIDGETS && jsx($, {
      numWidgets: e.numWidgets
    }), t]
  });
}
function q(e) {
  let t = useDispatch();
  let r = selectUser();
  let i = [];
  let o = {
    [gr.FILES]: getI18nString("community.view_bar.files"),
    [gr.PLUGINS]: getI18nString("community.view_bar.plugins"),
    [gr.WIDGETS]: getI18nString("community.view_bar.widgets")
  };
  Object.keys(o).forEach(a => {
    let l = o[a];
    i.push(jsx(V, {
      tab: a,
      mobileNavTabTitle: l,
      selectedTab: e.selectedTab,
      onClick: () => {
        e.activeSearchQuery && (t(_z({})), t(ky()));
        trackEventAnalytics("publish_type_changed", {
          userId: r.id,
          resourceType: l
        });
        e.setSelectedTab(a);
      },
      children: l
    }, a));
  });
  return jsxs("div", {
    className: Lm,
    children: [jsx("div", {
      className: KE,
      children: i
    }), jsx(ModalCloseButton, {
      className: g8,
      dispatch: () => {
        trackEventAnalytics("community_publish_modal", {
          step: WX.CLOSED
        });
        t(hideModal());
      }
    })]
  });
}
var J = (e => (e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NeverFetched = 2] = "NeverFetched", e))(J || {});
let Z = [FFileType.DESIGN, FFileType.WHITEBOARD];
let $$Q0 = registerModal(function (e) {
  let t = selectUser();
  let r = useDispatch();
  let o = useSelector(e => !!e.user);
  let l = useSelector(e => e.currentUserOrgId);
  let d = function () {
    let [e] = IT(CommunityUniversalPostingModalRecentFileKeysView({}));
    return useMemo(() => e.transform(e => {
      let t = [];
      for (let r of e.currentUser.recentFiles2 ?? []) r.file && t.push(r.file.key);
      return t;
    }), [e]);
  }();
  let [C, R] = useState(2);
  let [k, F] = useState({});
  let U = Im();
  let V = ud();
  let H = CI();
  let W = Dy();
  let K = Object.keys(V).length;
  IT(se());
  IT(fd());
  useEffect(() => {
    r(_z({}));
    o && (r(_J()), r(aq()));
    let e = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = e;
    };
  }, []);
  useEffect(() => {
    if ("loaded" !== d.status || 2 !== C) return;
    let e = d.data;
    0 !== e.length && (R(1), fileApiHandler.getHubFileDuplicates({
      fileKeys: e
    }).then(e => {
      F(e.data.meta);
      R(0);
    }));
  }, [C, d]);
  let Y = useCallback(e => {
    let t = k[e.key];
    let r = !!e.editorType && Z.includes(e.editorType);
    return !t && r;
  }, [k]);
  let $ = () => {
    eo && r(ky());
    trackEventAnalytics("community_publish_modal", {
      user: t.id,
      step: WX.CLOSED
    });
    r(hideModal());
  };
  let J = async e => {
    await r(rH({
      fileKey: e
    }));
  };
  let Q = async e => {
    e && (et(e), V[e.key] || r(filePutAction({
      file: e
    })), await J(e.key));
  };
  let [ee, et] = useState(null);
  let er = () => et(null);
  let [en, ei] = useState(null);
  let [ea, es] = useState(gr.FILES);
  let [eo, el] = useState("");
  let [ed, ec] = useState([]);
  let eu = useCallback(e => {
    ec(e && e.filter(e => Y(e.model)));
  }, [Y]);
  if (!o) return jsx(Fragment, {});
  let ep = "loaded" === d.status && 0 === C;
  return jsxs(ModalView, {
    size: "any",
    className: _$$aq,
    hide: $,
    children: [jsx(q, {
      activeSearchQuery: eo,
      selectedTab: ea,
      setSelectedTab: es
    }), jsx(X, {
      selectedTab: ea,
      currentOrgId: l,
      searchQuery: eo,
      setSearchQuery: el,
      setSearchResults: eu,
      numPlugins: H,
      numWidgets: W,
      numFiles: K
    }), jsxs(_$$P, {
      className: jG,
      hideScrollbar: !0,
      children: [!ep && jsx("div", {
        className: g4,
        children: jsx(LoadingSpinner, {
          size: "small"
        })
      }), eo && jsx(fp, {
        activeSearchQuery: eo,
        activeFileKey: ee?.key || null,
        setActiveFile: Q,
        deselectActiveFile: er,
        searchResults: ed
      }), ep && !eo && jsx(z, {
        selectedTab: ea,
        activeFileKey: ee?.key || null,
        setActiveFile: Q,
        deselectActiveFile: er,
        activeResource: en,
        setActiveResource: ei,
        deselectActiveResource: () => ei(null),
        filterFn: Y
      })]
    }), jsxs("div", {
      className: qr,
      children: [jsxs("div", {
        className: PJ,
        children: [getI18nString("community.universal_posting_modal.footer.choose_resource"), jsx(SecureLink, {
          href: "https://help.figma.com/hc/articles/360040035974-Publish-Community-files",
          target: "_blank",
          trusted: !0,
          children: getI18nString("community.universal_posting_modal.footer.learn_more")
        })]
      }), jsxs("div", {
        className: GC,
        children: [jsx(M4, {
          onClick: $,
          children: getI18nString("general.cancel")
        }), jsx(UC, {
          disabled: ea === gr.FILES ? !ee : ea === gr.PLUGINS || ea === gr.WIDGETS ? !en : void 0,
          onClick: () => {
            if (ea === gr.FILES) ee && (trackEventAnalytics("community_publish_modal", {
              user: t.id,
              step: WX.DETAILS,
              resourceType: HubTypeEnum.HUB_FILE,
              fileKey: ee.key,
              fileName: ee.name
            }), r(_$$t2({
              fileKey: ee.key,
              isFullscreenOpen: !1,
              entryPoint: PageTypeEnum.UNIVERSAL_POSTING,
              canvasThumbnailPromise: Sz(ee.key, t),
              source: e.source
            })), et(null));else if ((ea === gr.PLUGINS || ea === gr.WIDGETS) && en) {
              let e = "localFileId" in en ? en : U[en.id];
              let n = e.localFileId;
              trackEventAnalytics("community_publish_modal", {
                user: t.id,
                step: WX.DETAILS,
                resourceType: ea === gr.PLUGINS ? HubTypeEnum.PLUGIN : HubTypeEnum.WIDGET,
                pluginId: e.plugin_id,
                pluginName: e.name,
                localFileId: n
              });
              r(_$$r({
                localFileId: n,
                entryPoint: PageTypeEnum.UNIVERSAL_POSTING
              }));
              ei(null);
            }
          },
          children: getI18nString("general.next")
        })]
      })]
    })]
  });
}, "Universal Posting Modal");
export const R = $$Q0;