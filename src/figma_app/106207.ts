import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { CustomPosition, SourceType, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { J as _$$J } from "../905/931050";
import { r as _$$r } from "../905/520829";
import { PerfTimer } from "../905/609396";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { loadingStatePutLoading, loadingStateDelete } from "../figma_app/714946";
import { D as _$$D } from "../905/775228";
import { Hx } from "../figma_app/147952";
import { postUserFlag } from "../905/985254";
import { B } from "../figma_app/750676";
import { T as _$$T, _ as _$$_ } from "../905/793009";
import { gY } from "../figma_app/973927";
import { loadCanvasData } from "../905/815475";
import { sf } from "../figma_app/12535";
import { useCurrentFileKey } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { getDesignFileUrlWithOptions } from "../905/612685";
import { FOrganizationLevelType } from "../figma_app/191312";
import { VP } from "../905/18797";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { n as _$$n2 } from "../905/79930";
import { ITemplateType, FDocumentType } from "../905/862883";
import { q } from "../figma_app/446378";
let k = (e, t) => {
  switch (e.type) {
    case _$$n2.HubFile:
      return `/api/hub_files/${F(e)}/${t}/prepare_insert`;
    case _$$n2.TeamTemplate:
    case _$$n2.TeamTemplateLg:
      return `/api/templates/${F(e)}/${t}/prepare_insert`;
  }
};
let M = e => {
  switch (e.type) {
    case _$$n2.HubFile:
      return `/api/hub_files/${F(e)}/template_canvas`;
    case _$$n2.TeamTemplate:
    case _$$n2.TeamTemplateLg:
      return `/api/templates/${F(e)}/template_canvas`;
  }
};
let F = ({
  type: e,
  template: t
}) => {
  switch (e) {
    case _$$n2.HubFile:
      return t.id;
    case _$$n2.TeamTemplate:
      return t.file_key;
    case _$$n2.TeamTemplateLg:
      return t.fileKey;
    default:
      throwTypeError(e);
  }
};
let j = ({
  template: e,
  type: t
}) => {
  switch (t) {
    case _$$n2.HubFile:
      return {
        type: ITemplateType.CommunityResource,
        id: e.id
      };
    case _$$n2.TeamTemplate:
      return {
        type: ITemplateType.TeamTemplate,
        file_key: e.file_key
      };
    case _$$n2.TeamTemplateLg:
      return {
        type: ITemplateType.TeamTemplate,
        file_key: e.fileKey
      };
    default:
      throwTypeError(t);
  }
};
export async function $$U2({
  insert: e,
  dispatch: t,
  fileKey: r,
  template: n,
  onSuccess: i,
  onFailure: a,
  userTriggered: s = !0,
  isPreview: o = !1,
  triggeredFrom: d
}) {
  let c = new PerfTimer(`template_insert.${d}`, {
    key: r ?? ""
  });
  c.start();
  let u = e => {
    let t = c.stop();
    trackEventAnalytics(e, {
      elapsedMs: t,
      triggeredFrom: d,
      isPreview: o
    }, {
      forwardToDatadog: !0,
      batchRequest: !0
    });
  };
  let _ = F(n);
  try {
    await B(() => _, r, _$$T.STANDARD, async () => {
      (await e()) && (i && i(), u("template_insert_success"), _$$_(o ? "resource_previewed" : "resource_inserted", {
        fileKey: r,
        resourceType: "template",
        resourceName: gY(n),
        resourceId: _,
        triggeredFrom: d,
        templateType: n.type,
        templateCategory: n.type === _$$n2.HubFile ? n.category : void 0
      }), s) && (t(postUserFlag({
        inserted_figjam_template: !0
      })), n.type === _$$n2.TeamTemplate && t(_$$D([n.template])), "section-preset" !== d && "sites-templates-modal" !== d && t(Hx({
        storeInRecentsKey: FDocumentType.FigJam,
        ...j(n)
      })));
    }, {
      enableTracking: !o
    });
  } catch (e) {
    t(VisualBellActions.enqueue({
      message: getI18nString("whiteboard.inserts.insert_template_failed_v2"),
      error: !0
    }));
    a && a();
    u("template_insert_failure");
  }
}
export async function $$B1({
  template: e,
  fileKey: t,
  fileVersion: r
}) {
  if (!t) throw Error("Missing file key");
  if (!r) throw Error("Missing file version");
  let n = k(e, t);
  let i = M(e);
  let a = e.type === _$$n2.HubFile ? {
    fv: `${r}`
  } : void 0;
  let s = loadCanvasData(i, (e, t) => XHR.post(e, {
    fv: `${t}`
  }, {
    responseType: "arraybuffer"
  }).then(({
    data: e
  }) => e));
  let [[o]] = await Promise.all([s, XHR.post(n, a)]);
  return o;
}
async function G(e) {
  let {
    userTriggered = !0,
    cloneLocalStylesAndVariablesForTemplate,
    templateInsertionDirection = CustomPosition.RIGHT,
    templateCustomPosition,
    selectTemplateAfterInsertion
  } = e;
  let l = e.editScopeType;
  l || (l = userTriggered ? SourceType.USER : SourceType.SYSTEM);
  await $$U2({
    insert: async () => await $$B1(e).then(e => {
      let d = Fullscreen;
      return !!d && (permissionScopeHandler(l, "insert-figjam-template", () => d.insertTemplateInCanvas(e, !!cloneLocalStylesAndVariablesForTemplate, templateInsertionDirection, selectTemplateAfterInsertion ?? userTriggered, !templateCustomPosition, templateCustomPosition ? templateCustomPosition.x : null, templateCustomPosition ? templateCustomPosition.y : null)), !0);
    }),
    ...e
  });
}
function V(e, t) {
  return `INSERT_FIGJAM_TEMPLATE_${e}_${t}`;
}
export function $$H4() {
  let e = useDispatch();
  let t = useCurrentFileKey();
  let r = useSelector(e => e.fileVersion);
  let n = useSelector(e => e.loadingState);
  return {
    insertTemplate: async ({
      onSuccess: i,
      onFailure: a,
      ...s
    }) => {
      let o = V(t, F(s.template));
      VP(n, o) || (e(loadingStatePutLoading({
        key: o
      })), await G({
        dispatch: e,
        fileKey: t,
        fileVersion: r,
        ...s,
        onSuccess: () => {
          e(loadingStateDelete({
            key: o
          }));
          i && i();
        },
        onFailure: () => {
          e(loadingStateDelete({
            key: o
          }));
          a && a();
        }
      }));
    },
    isInsertingTemplate: e => {
      let r = V(t, e);
      return VP(n, r);
    }
  };
}
export function $$z6(e) {
  let t = useSelector(e => e.recentlyUsed.templates);
  let r = useSelector(e => e.hubFiles);
  let s = useSelector(e => e.recentCustomTemplates);
  return useMemo(() => t[e].map(e => {
    let {
      type
    } = e;
    switch (type) {
      case ITemplateType.CommunityResource:
        return {
          type: _$$n2.HubFile,
          template: r[e.id]
        };
      case ITemplateType.TeamTemplate:
        return {
          type: _$$n2.TeamTemplate,
          template: s[e.key]
        };
      default:
        throwTypeError(type);
    }
  }).filter(({
    template: e
  }) => !!e), [t, r, s, e]);
}
async function W({
  dispatch: e,
  templateIdentifier: t,
  onSuccess: r,
  onFailure: n,
  templateName: i,
  openInNewTab: a,
  folderId: s
}) {
  await XHR.post(`/api/templates/${t.file_key}/duplicate`, {
    folder_id: s
  }).then(({
    data: n
  }) => {
    let {
      fig_file,
      template
    } = n.meta;
    r();
    e(_$$D([template]));
    e(Hx({
      storeInRecentsKey: FDocumentType.FigJam,
      ...t
    }));
    customHistory.redirect(getDesignFileUrlWithOptions(fig_file), a ? "_blank" : void 0);
  }).catch(() => {
    let t = {
      error: !0,
      message: getI18nString("community.actions.failed_to_create_a_new_file_from_hub_file_name", {
        hubFileName: i
      })
    };
    e(VisualBellActions.enqueue(t));
    n();
  });
}
function K(e) {
  return `DUPLICATE_FIGJAM_TEMPLATE_${e}`;
}
export let $$Y0 = createOptimistThunk((e, t) => {
  let r = K(t.templateIdentifier.file_key);
  let {
    dispatch
  } = e;
  let {
    loadingState
  } = e.getState();
  VP(loadingState, r) || (dispatch(loadingStatePutLoading({
    key: r
  })), W({
    ...t,
    dispatch,
    onSuccess: () => {
      dispatch(loadingStateDelete({
        key: r
      }));
      t.onSuccess && t.onSuccess();
    },
    onFailure: () => {
      dispatch(loadingStateDelete({
        key: r
      }));
      t.onFailure && t.onFailure();
    }
  }));
});
export function $$$3() {
  let e = useDispatch();
  return useCallback(t => e($$Y0(t)), [e]);
}
export function $$X5() {
  let e = useSelector(e => e.loadingState);
  return t => {
    let r = K(t);
    return VP(e, r);
  };
}
export function $$q7(e, t, r, i = 10) {
  let [a, s] = useState(null);
  let [o, l] = useState(0);
  let [d, c] = useState(!1);
  let [u, p] = useState([]);
  let _ = function () {
    let e = useRef();
    return useCallback((t, r) => {
      e.current = t;
      t.then(n => {
        e.current === t && r(n);
      });
    }, []);
  }();
  let h = useCurrentPublicPlan("useTeamTemplatesSearch_DEPRECATED").unwrapOr(null);
  let m = h?.key.type === FOrganizationLevelType.ORG;
  let g = m ? h.key.parentId : null;
  useEffect(() => {
    s({
      offset: 0,
      searchTerm: e
    });
  }, [e]);
  useEffect(() => {
    if (!a?.searchTerm || !m || !t || !g) {
      p([]);
      l(0);
      return;
    }
    let e = q.getSearchPaginated({
      orgId: g,
      query: a.searchTerm,
      from: a.offset,
      size: i,
      templateType: r
    });
    c(!0);
    _(e, e => {
      a.offset > 0 ? p(t => [...t, ...e.data.meta.templates]) : p(e.data.meta.templates);
      l(e.data.meta.total);
      c(!1);
    });
  }, [g, m, t, a, _, r, i]);
  let f = useCallback(() => u.length < o && (s(e => e ? {
    ...e,
    offset: e.offset + 10
  } : null), !0), [u.length, o]);
  return {
    templates: u,
    requestLoadMore: f,
    total: o,
    isLoading: d
  };
}
let J = {
  url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII="
};
export function $$Z8(e) {
  let t = selectCurrentUser();
  let r = _$$J(() => t ? sf(e, t) : Promise.reject(Error("User not logged in")), [e, t]);
  let [i, a] = useState(J);
  useEffect(() => {
    r.status === _$$r.SUCCESS && a(r.value);
    r.status === _$$r.FAILURE && a(J);
  }, [r]);
  return i;
}
export const jd = $$Y0;
export const dT = $$B1;
export const Zg = $$U2;
export const b4 = $$$3;
export const Fz = $$H4;
export const WS = $$X5;
export const eE = $$z6;
export const Ou = $$q7;
export const _R = $$Z8;