import { reportError } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { tT } from '../905/663269';
import { M4 } from '../905/713695';
import { R } from '../905/943003';
import { SupabaseAuthView } from '../figma_app/43951';
import { Rs } from '../figma_app/288654';
import { p3 } from '../figma_app/588582';
export let $$u6 = M4.Query({
  fetch: async e => {
    let {
      fileKey
    } = e;
    if (!p3() || !fileKey) {
      return {
        authenticated: !1,
        expired: !1,
        org: void 0
      };
    }
    try {
      let e = await R.getFileAuthorized({
        fileKey
      });
      return {
        authenticated: e.data.meta?.authorized,
        expired: e.data.meta?.expired,
        org: e.data.meta?.org
      };
    } catch (e) {
      reportError(_$$e.AI_FOR_PRODUCTION, e);
      return {
        authenticated: !1,
        expired: !1,
        org: void 0
      };
    }
  },
  key: 'isFigMakeFileAuthenticated',
  gcPolicy: 'onUnmount'
});
export function $$p4(e) {
  let t = p3();
  let r = Rs(SupabaseAuthView, {
    fileKey: e
  }, {
    enabled: !!e && t
  });
  if (!t) {
    return {
      isLoading: !1,
      authenticated: !1,
      expired: !1,
      org: void 0
    };
  }
  if (r.status === 'loading') {
    return {
      isLoading: !0,
      authenticated: !1,
      expired: !1,
      org: void 0
    };
  }
  let n = r.data?.supabaseAuth;
  return n && n.status === tT.Loaded && n.data ? {
    isLoading: !1,
    authenticated: n.data.authorized,
    expired: n.data.expired,
    org: n.data.org
  } : {
    isLoading: !1,
    authenticated: !1,
    expired: !1,
    org: void 0
  };
}
let $$_0 = M4.Query({
  fetch: async e => {
    let {
      fileKey,
      projectId
    } = e;
    if (!p3() || !fileKey || !projectId) return null;
    try {
      return (await R.getProject({
        fileKey,
        projectId
      })).data.meta;
    } catch (e) {
      reportError(_$$e.AI_FOR_PRODUCTION, e);
      return null;
    }
  },
  key: 'getSupabaseProject',
  gcPolicy: 'onUnmount'
});
let $$h1 = M4.Query({
  fetch: async e => {
    let {
      fileKey
    } = e;
    if (!p3() || !fileKey) {
      return {
        connectedProject: void 0,
        expired: !1,
        ownerId: void 0,
        isConnectedNonOwner: !1
      };
    }
    try {
      let e = await R.getConnection({
        fileKey
      });
      return {
        connectedProject: e.data.meta?.connection,
        expired: e.data.meta?.expired,
        ownerId: e.data.meta?.owner_id,
        isConnectedNonOwner: e.data.meta?.is_connected_non_owner
      };
    } catch (e) {
      reportError(_$$e.AI_FOR_PRODUCTION, e);
      return {
        connectedProject: void 0,
        expired: !1,
        ownerId: void 0,
        isConnectedNonOwner: !1
      };
    }
  },
  key: 'getSupabaseConnectedProject',
  gcPolicy: 'onUnmount'
});
let $$m2 = M4.Query({
  fetch: async e => {
    let {
      fileKey
    } = e;
    if (!p3() || !fileKey) {
      return {
        existingProjects: []
      };
    }
    try {
      return {
        existingProjects: (await R.getExistingProjects({
          fileKey
        })).data.meta
      };
    } catch (e) {
      reportError(_$$e.AI_FOR_PRODUCTION, e);
      return {
        existingProjects: []
      };
    }
  },
  key: 'getSupabaseExistingProjects',
  gcPolicy: 'onUnmount'
});
let $$g3 = M4.Query({
  fetch: async e => {
    let {
      fileKey,
      functionName
    } = e;
    if (!p3() || !fileKey || !functionName) return [];
    try {
      return (await R.getFunctionLogs({
        fileKey,
        functionName
      })).data.meta.result;
    } catch (e) {
      reportError(_$$e.AI_FOR_PRODUCTION, e);
      return [];
    }
  },
  key: 'getSupabaseFunctionLogs',
  refetchIntervalMs: 8e3,
  stalenessPolicy: 'never',
  gcPolicy: 'default'
});
let $$f5 = M4.Mutation(async (e, {
  query: t
}) => {
  let {
    fileKey
  } = e;
  if (p3()) {
    t.mutate($$h1({
      fileKey
    }), e => {
      e.connectedProject = void 0;
      e.expired = !1;
      e.ownerId = void 0;
      e.isConnectedNonOwner = !1;
    });
    return await R.disconnectFile({
      fileKey
    });
  }
});
M4.Mutation((e, {
  query: t
}) => {
  let {
    fileKey
  } = e;
  p3() && (t.mutate($$m2({
    fileKey
  }), e => {
    e.existingProjects = [];
  }), M4.fetch($$m2({
    fileKey
  }), {
    policy: 'networkOnly'
  }));
});
export const GO = $$_0;
export const TT = $$h1;
export const YF = $$m2;
export const gZ = $$g3;
export const lA = $$p4;
export const rY = $$f5;
export const y7 = $$u6;