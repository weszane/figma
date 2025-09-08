import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { y1, w4 } from "../905/445814";
import { B } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { AG } from "../figma_app/999312";
import { Jm } from "../figma_app/387599";
import { qD } from "../figma_app/471982";
import { lx, aI, s0 } from "../figma_app/558929";
import { oB, j7 } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { Um } from "../905/848862";
import { U3 } from "../figma_app/412189";
import { FFileType, FOrganizationLevelType } from "../figma_app/191312";
import { T5 } from "../figma_app/465071";
import { hasOrgRole, getPluginVersion } from "../figma_app/300692";
import { zF } from "../figma_app/45218";
import { mapFileTypeToEditorType, FEditorType } from "../figma_app/53721";
import { ManifestEditorType, isDevOrInspect } from "../figma_app/155287";
import { C as _$$C } from "../905/180";
import { noop } from "../905/834956";
import { it } from "../905/504727";
import { S as _$$S } from "../905/404161";
import { dn } from "../figma_app/994403";
import { t as _$$t2, Z3, y7, CA, dD, Dh, Dr, d1, iM, K1, Yr, pz, qN, _3 } from "../905/884637";
import { A as _$$A } from "../5724/930602";
import { A as _$$A2 } from "../1617/954184";
export function $$M2(e, t, r, n) {
  trackEventAnalytics("extension_opened_from_community", {
    extension_id: e,
    file_type: t,
    editor_type: r,
    searchSessionId: n
  });
}
function F(e, t, r, n, i) {
  r(hasOrgRole(e) && n ? lx({
    extension: e,
    fullscreenEditorType: t
  }) : aI({
    resource: e,
    fullscreenEditorType: t,
    isPlaygroundFile: i
  }));
}
function j(e) {
  return jsxs("button", {
    type: "button",
    className: _$$t2,
    onClick: e.onClick,
    onTouchEnd: t => {
      t.preventDefault();
      e.onClick && e.onClick(t);
    },
    "data-testid": e.dataTestId,
    children: [jsxs("div", {
      className: Z3,
      children: [jsx("div", {
        className: y7,
        children: e.icon
      }), jsx("div", {
        className: CA,
        children: e.text
      })]
    }), e.rightIcon]
  });
}
function U(e) {
  let t = e.fileName ? e.fileName : e.playgroundFile ? getI18nString("community.using.playground_file") : e.fileIconType === y1.WHITEBOARD ? getI18nString("community.using.figjam_board") : getI18nString("community.using.figma_file");
  return jsx(j, {
    onClick: e.onClick,
    "data-testid": e.dataTestId,
    icon: jsx("div", {
      className: dD,
      children: jsx(w4, {
        size: 16,
        type: e.fileIconType
      })
    }),
    text: t
  });
}
export function $$B0(e) {
  let t;
  let r = jsx(dn, {
    editorType: [e.editorType]
  });
  if (e.fileName) t = e.fileName;else if (e.playgroundFile) t = getI18nString("community.using.playground_file");else switch (e.editorType) {
    case ManifestEditorType.FIGMA:
      t = getI18nString("community.duplicate.open_in_figma");
      break;
    case ManifestEditorType.FIGJAM:
      t = getI18nString("community.duplicate.open_in_figjam");
      break;
    case ManifestEditorType.DEV:
    case ManifestEditorType.INSPECT:
      t = getI18nString("community.detail_view.plugin_open_devmode");
      break;
    case ManifestEditorType.SLIDES:
      t = getI18nString("community.detail_view.plugin_open_slides");
      break;
    case ManifestEditorType.BUZZ:
      t = getI18nString("community.detail_view.plugin_open_buzz");
    case ManifestEditorType.SITES:
  }
  return jsx("button", {
    type: "button",
    className: _$$t2,
    onClick: e.onClick,
    "data-testid": e.dataTestId,
    children: jsxs("div", {
      className: Z3,
      children: [jsx("div", {
        className: dD,
        children: r
      }), jsx("div", {
        className: CA,
        children: t
      })]
    })
  });
}
function G(e) {
  let t = useDispatch();
  let {
    files,
    resource,
    editorTypes
  } = e;
  let d = Jm();
  let c = e => {
    if (!e.org_id) return;
    let r = qD(resource);
    let n = {
      extension: {
        pluginId: r.plugin_id,
        iconUrl: r.redirect_icon_url,
        name: r.name
      },
      isWidget: resource.is_widget,
      orgId: e.org_id,
      workspaceDetails: {
        workspaceId: e.workspace_id,
        workspaceName: e.workspace_name,
        fileKey: e.key,
        fileName: e.name
      },
      openedFrom: "community",
      fullscreenEditorType: null
    };
    t(showModalHandler({
      type: _$$S,
      data: n
    }));
  };
  let p = e => {
    $$M2(resource.id, "existing_file", mapFileTypeToEditorType(e.editor_type), d);
    t(aI({
      resource,
      fullscreenEditorType: e.editor_type === FFileType.DESIGN && isDevOrInspect(editorTypes) ? FEditorType.DevHandoff : mapFileTypeToEditorType(e.editor_type),
      fileKey: e.key,
      userId: e.user_id
    }));
  };
  return files?.length === 0 ? null : jsxs(Fragment, {
    children: [jsx("div", {
      className: Dh,
      children: renderI18nText("community.detail_view.recent_files")
    }), jsx("div", {
      className: Dr,
      children: files ? files.map(e => jsx(U, {
        fileIconType: function (e) {
          switch (e.editor_type) {
            case FFileType.DESIGN:
              return e.last_published_at ? y1.PUBLISHED : y1.DESIGN;
            case FFileType.WHITEBOARD:
              return y1.WHITEBOARD;
            case FFileType.SLIDES:
              return y1.SLIDES;
            case FFileType.SITES:
            case FFileType.COOPER:
              return getFeatureFlags().buzz_plugins_publishing ? y1.COOPER : y1.DESIGN;
            case FFileType.FIGMAKE:
              return y1.DESIGN;
            default:
              throwTypeError(e.editor_type);
          }
        }(e),
        fileName: e.name,
        onClick: () => {
          t(oB());
          e.can_run ? zF(resource) ? s0(t, () => p(e)) : p(e) : e.requests_allowed && c(e);
        }
      }, e.key)) : jsx("div", {
        className: d1,
        children: [...Array(6)].map((e, t) => jsx("div", {
          className: iM
        }, t))
      })
    })]
  });
}
function V({
  hasSecondaryDropdown: e,
  text: t,
  primaryFullscreenEditorType: r,
  resource: i
}) {
  let s = useDispatch();
  let o = getPluginVersion(i);
  let l = Jm();
  let d = AG();
  return jsx(j, {
    onClick: () => {
      if (!e) {
        let e = !!(o.playground_file_version_id || r === FEditorType.DevHandoff);
        $$M2(i.id, e ? "playground" : "new_file", r, l);
        s(oB());
        let t = () => {
          F(i, r, s, d, e);
        };
        zF(i) ? s0(s, t) : t();
      }
    },
    icon: jsx(B, {
      svg: _$$A2,
      className: K1
    }),
    text: t,
    rightIcon: e ? jsx(B, {
      svg: _$$A,
      className: Yr
    }) : void 0
  });
}
export function $$H1(e, t, r) {
  let p = useDispatch();
  let g = Um();
  let f = g?.type === z && g.data.resourceId === e.id && g.data.viewContext === r;
  let y = AG();
  let A = memo(function ({
    primaryFullscreenEditorType: r
  }) {
    let a = T5("usePluginTrySwitchEditorDropdown").unwrapOr(null);
    let h = a?.figjamDisabledAt ?? null;
    let b = a?.type === FOrganizationLevelType.ORG ? a?.key.parentId : void 0;
    let A = Jm();
    let [R, L] = useState();
    _$$h(() => {
      !async function () {
        let t = await _$$C.getRecentFiles({
          extensionId: e.id,
          isWidget: !!e.is_widget
        });
        trackEventAnalytics("recent_files_for_plugins_loaded", {
          response_count: t.data.meta.length,
          extension_id: e.id,
          searchSessionId: A
        });
        L(t.data.meta.filter(t => (!hasOrgRole(e) || t.org_id === b) && (t.can_run || t.requests_allowed)).slice(0, 6));
      }();
    });
    let D = getPluginVersion(e);
    let k = D.manifest.editorType?.sort() ?? [];
    let j = !!D.playground_file_version_id || r === FEditorType.DevHandoff;
    let B = Array.from(new Set(k.map(e => {
      switch (e) {
        case ManifestEditorType.FIGMA:
        case ManifestEditorType.DEV:
        case ManifestEditorType.INSPECT:
          return r === FEditorType.DevHandoff ? FEditorType.DevHandoff : FEditorType.Design;
        case ManifestEditorType.FIGJAM:
          return h ? null : FEditorType.Whiteboard;
        case ManifestEditorType.SLIDES:
          return FEditorType.Slides;
        case ManifestEditorType.SITES:
          return null;
        case ManifestEditorType.BUZZ:
          return FEditorType.Cooper;
        default:
          throwTypeError(e);
      }
    }))).filter(e => null != e);
    let H = B.map(t => ({
      displayText: getI18nString("community.using.new_file"),
      preventDismissOnSelected: !0,
      render: () => jsx(U, {
        fileIconType: function (e) {
          switch (e) {
            case FEditorType.Design:
              return y1.DESIGN;
            case FEditorType.Whiteboard:
              return y1.WHITEBOARD;
            case FEditorType.DevHandoff:
              return y1.DESIGN;
            case FEditorType.Slides:
              return y1.SLIDES;
            case FEditorType.Cooper:
              return getFeatureFlags().buzz_plugins_publishing ? y1.COOPER : y1.DESIGN;
            case FEditorType.Sites:
            case FEditorType.Figmake:
            case FEditorType.Illustration:
              return y1.DESIGN;
            default:
              throwTypeError(e);
          }
        }(t),
        onClick: () => {
          $$M2(e.id, "new_file", t, A);
          p(oB());
          F(e, t, p, y, !1);
        }
      })
    }));
    let z = {
      displayText: getI18nString("community.using.new_file"),
      className: pz,
      preventDismissOnSelected: !0,
      render: () => jsx(V, {
        hasSecondaryDropdown: H.length > 1,
        text: getI18nString("community.using.new_file"),
        primaryFullscreenEditorType: r,
        resource: e
      }),
      children: H.length > 1 ? H : void 0
    };
    let W = {
      displayText: getI18nString("community.using.playground_file"),
      className: pz,
      preventDismissOnSelected: !0,
      render: () => jsx(V, {
        hasSecondaryDropdown: !1,
        text: getI18nString("community.using.playground_file"),
        primaryFullscreenEditorType: r,
        resource: e
      })
    };
    U3("resize", () => {
      f && p(oB());
    });
    let K = (() => {
      let t = [];
      if (void 0 === R || R.length > 0) t.push({
        displayText: "recentFiles",
        preventDismissOnSelected: !0,
        render: () => jsx(G, {
          files: R,
          resource: e,
          editorTypes: k
        })
      });else if (!j && B.length > 1) return H;
      j ? t.push(W) : t.push(z);
      return t;
    })();
    return jsx(noop, {
      autoHeight: !0,
      className: qN,
      dispatch: p,
      hidePointWhenContentOffScreen: !0,
      items: K,
      lean: t,
      minWidth: 280,
      onSelectItem: lQ,
      parentRect: g?.data.targetRect,
      rootAndSubmenuMaxWidth: 280,
      showPoint: !1,
      subMenuClassName: _3,
      type: it.MATCH_BACKGROUND
    });
  });
  return {
    dropdownIsShown: f,
    toggleSwitchEditorDropdown: (t, n) => {
      let i = t.current?.getBoundingClientRect();
      i && ((void 0 !== n ? n : !f) ? p(j7({
        type: z,
        data: {
          resourceId: e.id,
          viewContext: r,
          targetRect: i
        }
      })) : p(oB()));
    },
    PluginTrySwitchEditorDropdown: A
  };
}
let z = "PLUGIN_TRY_SWITCH_EDITOR_DROPDOWN";
export const UK = $$B0;
export const WW = $$H1;
export const to = $$M2;