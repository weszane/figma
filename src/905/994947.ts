import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { desktopAPIInstance } from "../figma_app/876459";
import { PureComponent, createContext } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { getModifierBitmask } from "../905/63728";
import { j7, sf, oB } from "../905/929976";
import { fileEntityDataMapper } from "../905/943101";
import { PublicModelType } from "../figma_app/162807";
import { G as _$$G } from "../905/186289";
import { ms, wv, c$ } from "../figma_app/236327";
import { getI18nString } from "../905/303541";
import { S as _$$S, le, TH } from "../figma_app/11182";
import { qP, Fb } from "../figma_app/909778";
import { showModalHandler } from "../905/156213";
import { y$ } from "../905/81009";
import { nk } from "../figma_app/2023";
import { fA } from "../figma_app/543100";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { F as _$$F2 } from "../905/915030";
import { a as _$$a } from "../905/870666";
import { g_ } from "../905/646788";
import { trackEventAnalytics } from "../905/449184";
import { getViewState } from "../905/612521";
import { V3, UN } from "../figma_app/976345";
import { trackFileBrowserFileClicked } from "../figma_app/314264";
import { xS } from "../figma_app/193867";
import { W as _$$W } from "../905/25249";
import { VisualBellActions } from "../905/302958";
import { p7 } from "../figma_app/49598";
import { selectCurrentUser } from "../905/372672";
import { useSubscription } from "../figma_app/288654";
import { TeamById } from "../figma_app/43951";
import { p as _$$p } from "../905/195198";
import { InterProfileType } from "../905/895626";
var n;
var r;
var a;
var s;
var o;
var l;
var d;
var c;
var u;
let y = (e, t) => class extends PureComponent {
  constructor() {
    super(...arguments);
    this.onContextMenuClick = (t, i) => {
      i.stopPropagation();
      i.preventDefault();
      let n = window.innerWidth;
      let r = window.innerHeight;
      let a = {};
      a = {
        left: i.clientX < n / 2 ? i.clientX : "auto",
        right: i.clientX < n / 2 ? "auto" : n - i.clientX,
        top: i.clientY < r / 2 ? i.clientY : "auto",
        bottom: i.clientY < r / 2 ? "auto" : r - i.clientY
      };
      this.props.onContextClick && this.props.onContextClick(t, i);
      this.props.dispatch(j7({
        type: e,
        data: {
          selected: t,
          targetRect: a,
          modifiers: getModifierBitmask(i)
        }
      }));
    };
  }
  render() {
    let e = {
      onContextMenuClick: this.onContextMenuClick
    };
    return jsx(t.Provider, {
      value: e,
      children: this.props.children
    });
  }
};
function x(e) {
  return t => function (e, t) {
    let i = t.map(t => t(e.data)).filter(e => null !== e);
    let n = {
      ...e.targetRect,
      position: "fixed"
    };
    return jsx(ms, {
      style: n,
      children: i.map((e, t) => null === e ? null : "SEPARATOR" === e ? t === i.length - 1 ? null : jsx(wv, {}, `sep${t}`) : jsx(c$, {
        id: e.id,
        onClick: e.onClick,
        disabled: e.disabled,
        onMouseDown: e => e.preventDefault(),
        children: e.text
      }, e.id))
    });
  }(t, e);
}
(e => {
  e.Separator = () => "SEPARATOR";
  let t = (e, t) => i => {
    let n = e(i);
    return n ? t(n) : null;
  };
  function i(e) {
    let t = useDispatch();
    if (!e) return null;
    let {
      overrides,
      ...n
    } = e;
    return {
      id: "open_view",
      text: getI18nString("general.open"),
      onClick: () => {
        let e = getViewState();
        "fullscreen" === n.view && n.fileKey && e && (trackEventAnalytics("Open File Click", {
          fileKey: n.fileKey,
          uiSelectedView: JSON.stringify(e.view)
        }), trackFileBrowserFileClicked(n.fileKey, {
          selectedViewName: e.view
        }));
        t(sf(n));
      },
      ...overrides
    };
  }
  let n = e => {
    let t = useDispatch();
    let {
      overrides,
      ...n
    } = e;
    return {
      id: "copy_link",
      text: getI18nString("file_browser.copy_link"),
      onClick: () => t(_$$S(n)),
      ...overrides
    };
  };
  function r(e) {
    let t = useDispatch();
    if (!e) return null;
    let {
      overrides,
      ...n
    } = e;
    return {
      id: "copy_view_link",
      text: getI18nString("file_browser.copy_link"),
      onClick: () => t(le(n)),
      ...overrides
    };
  }
  let a = e => {
    let t = useDispatch();
    let {
      overrides,
      ...n
    } = e;
    return {
      id: "open_in_new_tab",
      text: getI18nString("file_browser.open_in_new_tab"),
      onClick: () => t(V3(n)),
      ...overrides
    };
  };
  function s(e) {
    let t = useDispatch();
    let i = useStore();
    if (!e) return null;
    let {
      overrides,
      ...r
    } = e;
    return {
      id: "open_view_in_new_tab",
      text: getI18nString("file_browser.open_in_new_tab"),
      onClick: () => {
        let e = getViewState();
        "fullscreen" === r.view && r.fileKey && e && (trackEventAnalytics("Open File in New Tab Click", {
          fileKey: r.fileKey,
          uiSelectedView: JSON.stringify(e.view)
        }), t(UN({
          fileKey: r.fileKey
        })));
        let n = xS(i.getState(), r);
        t(V3({
          url: n
        }));
      },
      ...overrides
    };
  }
  (e => {
    e.Open = e => t(e, i);
    e.CopyLink = e => t(e, n);
    e.CopyViewLink = e => t(e, r);
    e.OpenInNewTab = e => t(e, a);
    e.OpenViewInNewTab = e => t(e, s);
  })(e.Creators || (e.Creators = {}));
})(n || (n = {}));
let V = e => ({
  view: "fullscreen",
  fileKey: e.key,
  editorType: mapFileTypeToEditorType(e.editorType || "design")
});
(e => {
  e.Open = n.Creators.Open(V);
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(V);
  let t = e => {
    let t = useSelector(e => e.user);
    return !e?.teamId && !e?.parentOrgId && e?.folderId === t?.personal_drafts_folder_id;
  };
  e.CopyLink = function (e) {
    let t = useDispatch();
    let i = useSelector(e => e.sharingAttributionContextKey);
    return {
      id: "copy_view_link",
      text: getI18nString("file_browser.copy_link"),
      onClick: () => {
        let n = new _$$a();
        t(TH({
          selector: n,
          selectedView: V(e),
          data: {
            sharingAttributionContextKey: i,
            resources: {
              file: fileEntityDataMapper.toSinatra(e),
              repo: e.fileRepo
            }
          }
        }));
      }
    };
  };
  e.Share = e => {
    let i = useDispatch();
    return t(e) ? null : {
      id: "share_file",
      text: "Share",
      onClick: () => {
        i(showModalHandler({
          type: g_,
          data: {
            fileKey: e.key,
            source: nk.fileBrowserContextMenu
          }
        }));
      }
    };
  };
  e.ShowInFolder = e => {
    let i = useDispatch();
    let n = useSelector(t => e.folderId && t.folders[e.folderId]);
    return t(e) || !n ? null : {
      id: "show_in_folder",
      text: "Show in project",
      onClick: () => {
        i(sf({
          view: "folder",
          folderId: e.folderId
        }));
        i(y$({
          type: _$$F2.FILES,
          tiles: [fA(fileEntityDataMapper.toSinatra(e))]
        }));
      }
    };
  };
  e.SetFavoriteStatus = e => {
    let i = useDispatch();
    return t(e) || !e.isFavorited ? null : {
      id: "set_favorite_status",
      text: e.isFavorited ? getI18nString("tile.favoriting.remove_from_favorites") : getI18nString("tile.favoriting.add_to_favorites"),
      onClick: () => {
        e.isFavorited ? i(qP({
          file: {
            editorType: e.editorType,
            key: e.key
          },
          entrypoint: "search_dropdown",
          fileBrowserEntryPoint: !0
        })) : i(Fb({
          file: e,
          entrypoint: "search_dropdown",
          fileBrowserEntryPoint: !0
        }));
        i(oB());
      }
    };
  };
})(r || (r = {}));
let z = e => function (t) {
  return e && desktopAPIInstance ? null : {
    view: "folder",
    folderId: t.id
  };
};
(e => {
  e.CopyLink = n.Creators.CopyViewLink(z(!1));
  e.Open = n.Creators.Open(z(!1));
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(z(!0));
  e.ShowInTeam = e => {
    let t = useDispatch();
    let {
      team_id
    } = e;
    return team_id ? {
      id: "show_in_team",
      text: "Show team",
      onClick: () => {
        t(sf({
          view: "team",
          teamId: team_id
        }));
      }
    } : null;
  };
  e.Share = e => {
    let t = useDispatch();
    return {
      id: "share_folder",
      text: "Share",
      onClick: () => {
        t(showModalHandler({
          type: _$$W,
          data: {
            folderId: e.id
          }
        }));
      }
    };
  };
})(a || (a = {}));
let Y = e => ({
  view: "communityHub",
  subView: "hubFile",
  hubFileId: e.id
});
(e => {
  e.Open = n.Creators.Open(Y);
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(Y);
  e.CopyLink = n.Creators.CopyViewLink(Y);
  e.Duplicate = e => {
    let t = useDispatch();
    let i = selectCurrentUser();
    return {
      id: "duplicate_hub_file",
      text: "Duplicate",
      onClick: () => {
        i ? t(p7({
          hubFileId: e.id,
          workspace: {
            userId: i.id,
            orgId: null
          }
        })) : t(VisualBellActions.enqueue({
          message: "Must be signed in to duplicate a file",
          error: !0
        }));
      }
    };
  };
})(s || (s = {}));
let q = e => function (t) {
  return e && desktopAPIInstance ? null : {
    view: "communityHub",
    subView: "plugin",
    publishedPluginId: t.id
  };
};
(e => {
  e.Open = n.Creators.Open(q(!1));
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(q(!0));
  e.CopyLink = n.Creators.CopyViewLink(q(!1));
})(o || (o = {}));
let $ = e => ({
  view: "communityHub",
  subView: "handle",
  handle: e.profile_handle
});
(e => {
  e.Open = n.Creators.Open($);
  e.OpenInNewTab = n.Creators.OpenViewInNewTab($);
  e.CopyLink = n.Creators.CopyViewLink($);
})(l || (l = {}));
let J = e => {
  let t = useSubscription(TeamById, {
    teamId: e.id
  }).transform(({
    team: e
  }) => !e?.canRead).unwrapOr(!1);
  return {
    view: "team",
    teamId: e.id,
    overrides: {
      disabled: !!t
    }
  };
};
function ee(e) {
  return desktopAPIInstance ? null : J(e);
}
(e => {
  e.Open = n.Creators.Open(J);
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(ee);
  e.CopyLink = n.Creators.CopyViewLink(J);
  e.Leave = e => {
    let t = useDispatch();
    let i = useSelector(e => e.user);
    let n = useSelector(t => t.roles?.byTeamId[e.id]);
    return i && n && n[i.id] ? {
      id: "leave_team_prompt",
      text: "Leave team",
      onClick: () => {
        t(showModalHandler({
          type: _$$p,
          data: {
            teamId: e.id
          }
        }));
      }
    } : null;
  };
})(d || (d = {}));
let ei = e => function (t) {
  return e && desktopAPIInstance ? null : {
    view: "user",
    userId: t.id,
    orgId: t.org_id,
    userViewTab: InterProfileType.INTERNAL_PROFILE
  };
};
(e => {
  e.Open = n.Creators.Open(ei(!1));
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(ei(!0));
  e.CopyLink = n.Creators.CopyViewLink(ei(!1));
})(c || (c = {}));
let en = e => function (t) {
  return e && desktopAPIInstance ? null : {
    view: "communityHub",
    subView: "widget",
    widgetId: t.id
  };
};
(e => {
  e.Open = n.Creators.Open(en(!1));
  e.OpenInNewTab = n.Creators.OpenViewInNewTab(en(!0));
  e.CopyLink = n.Creators.CopyViewLink(en(!1));
})(u || (u = {}));
let er = x([o.Open, o.OpenInNewTab, n.Separator, o.CopyLink]);
let ea = e => x([r.Open].concat([r.OpenInNewTab], [n.Separator], [r.CopyLink], e ? [] : [r.Share], [r.ShowInFolder], [r.SetFavoriteStatus]));
let es = e => x([a.Open].concat([a.OpenInNewTab], [n.Separator], e ? [] : [a.Share], [a.ShowInTeam]));
let eo = x([s.Open, s.OpenInNewTab, n.Separator, s.CopyLink, s.Duplicate]);
let el = x([s.Open, n.Separator, s.CopyLink, s.Duplicate]);
let ed = x([c.Open, c.OpenInNewTab, n.Separator, c.CopyLink]);
let ec = x([l.Open, l.OpenInNewTab, n.Separator, l.CopyLink]);
let eu = x([d.Open, d.OpenInNewTab, n.Separator, d.Leave]);
let ep = x([u.Open, u.OpenInNewTab, n.Separator, u.CopyLink]);
function em(e) {
  let {
    data
  } = e.selected;
  let i = ea(e.isDropdown);
  if (!("search_model_type" in data)) return jsx(i, {
    targetRect: e.targetRect,
    data: fileEntityDataMapper.toLiveGraph(data)
  });
  switch (data.search_model_type) {
    case PublicModelType.HUB_FILES:
      if (desktopAPIInstance) return jsx(el, {
        targetRect: e.targetRect,
        data: data.model
      });
      return jsx(eo, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.PUBLIC_PLUGINS:
      return jsx(er, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.PUBLIC_PROFILES:
      return jsx(ec, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.USERS:
      return jsx(ed, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.FILES:
      return jsx(i, {
        targetRect: e.targetRect,
        data: fileEntityDataMapper.toLiveGraph(data.model)
      });
    case PublicModelType.TEAMS:
      return jsx(eu, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.PROJECTS:
      let n = es(e.isDropdown);
      return jsx(n, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.PRIVATE_PLUGINS:
      return jsx(er, {
        targetRect: e.targetRect,
        data: data.model
      });
    case PublicModelType.PUBLIC_WIDGETS:
    case PublicModelType.PRIVATE_WIDGETS:
      return jsx(ep, {
        targetRect: e.targetRect,
        data: data.model
      });
    default:
      return throwTypeError(data);
  }
}
let {
  Context,
  Provider
} = function (e, t) {
  let i = createContext({
    onContextMenuClick: (e, t) => {}
  });
  function n(i) {
    let n = useSelector(e => e.dropdownShown);
    return n && n.data && n.type === e ? t(i, {
      ...n.data
    }) : null;
  }
  let r = y(e, i);
  return {
    Context: i,
    Provider: e => {
      let t = useDispatch();
      let i = useSelector(e => e.dropdownShown);
      return jsxs(Fragment, {
        children: [jsx(r, {
          dispatch: t,
          dropdownShown: i,
          ...e
        }), jsx(n, {
          ...e,
          children: void 0
        })]
      });
    }
  };
}("search-results-context-menu", (e, t) => {
  let {
    data,
    index
  } = t.selected;
  return "search_model_type" in data ? jsx(_$$G, {
    category: data.search_model_type,
    searchResult: data,
    index,
    children: jsx(em, {
      isDropdown: e.isDropdown,
      ...t
    })
  }) : jsx(em, {
    isDropdown: e.isDropdown,
    ...t
  });
});
function ef(e) {
  return jsx("div", {
    onContextMenu: t => {
      let i = {
        index: e.index,
        data: e.data
      };
      e.onContextMenu(i, t);
    },
    children: e.children
  });
}
export function $$e_2(e) {
  return jsx(Context.Consumer, {
    children: t => jsx(ef, {
      onContextMenu: t.onContextMenuClick,
      ...e
    })
  });
}
let $$eA0 = Context;
let $$ey1 = Provider;
export const kq = $$eA0;
export const Q0 = $$ey1;
export const ro = $$e_2;