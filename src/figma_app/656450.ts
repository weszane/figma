import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWithShallowEqual } from "../905/103090";
import { F } from "../905/422355";
import { getFalseValue } from "../figma_app/897289";
import { loadingStatePutLoading, loadingStateDelete, loadingStatePutFailure } from "../figma_app/714946";
import { yJ, uW, Z } from "../905/618921";
import { selectCurrentUser } from "../905/372672";
import { VP, aF } from "../905/18797";
import { k } from "../905/93362";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
let h = new class {
  constructor() {
    this.BatchedSchemaValidator = createNoOpValidator();
  }
  getBatched(e) {
    return this.BatchedSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/users/batched", APIParameterUtils.toAPIParameters({
      userIds: e.userIds.join(",")
    })));
  }
}();
let m = e => t => e && t.publicUsers.byId[e] || null;
let g = e => t => {
  if (!e) return null;
  let r = {};
  e.forEach(e => {
    e in t.publicUsers.byId && (r[e] = t.publicUsers.byId[e]);
  });
  return r;
};
let f = e => t => {
  let r = t.multiplayer.allUsers.find(t => t.userID === e);
  return r ? A(r) : null;
};
let E = e => t => {
  let r = t.user;
  let n = f(e)(t);
  return r && r.id === e ? r : n || null;
};
let y = e => t => {
  let r = E(e)(t);
  let n = m(e)(t);
  return r || n || null;
};
export function $$b2(e) {
  let t = selectWithShallowEqual(E(e));
  let r = function (e) {
    let t = useDispatch();
    let r = `PUBLIC_USER_FETCH_${e}`;
    let a = useSelector(e => e.loadingState);
    let s = useSelector(m(e));
    let o = function (e) {
      let t = !!selectCurrentUser();
      return !!e && !$$v0(e) && t;
    }(e);
    let p = !!s;
    let _ = !p && VP(a, r);
    let h = !p && aF(a, r);
    let g = !p && o && !_ && !h;
    useEffect(() => {
      g && (t(loadingStatePutLoading({
        key: r
      })), I(e).then(e => {
        t(yJ({
          user: e
        }));
        t(loadingStateDelete({
          key: r
        }));
      }).catch(() => {
        t(loadingStatePutFailure({
          key: r
        }));
      }));
    }, [t, e, g, r]);
    return {
      user: s,
      loading: _,
      hasError: h
    };
  }(t ? null : e);
  return t ? {
    user: t,
    loading: !1,
    hasError: !1
  } : r;
}
export function $$T3(e) {
  let t = useDispatch();
  let r = useSelector(g(e));
  let a = Object.keys(r || []);
  let o = useSelector(e => e.loadingState);
  let {
    userIdChunks,
    loadingKeys
  } = useMemo(() => {
    let t = [];
    for (let r = 0; r < (e?.length || 0); r += 50) t.push(e?.slice(r, r + 50) || []);
    let r = t.map(e => `PUBLIC_USERS_FETCH_${F(JSON.stringify(e))}`);
    return {
      userIdChunks: t,
      loadingKeys: r
    };
  }, [50, e]);
  let _ = userIdChunks.map(e => e?.filter(e => !a.includes(e)));
  useEffect(() => {
    for (let e = 0; e < loadingKeys.length; e++) {
      let r = loadingKeys[e];
      let n = _[e];
      if (0 === n.length || VP(o, r) || aF(o, r)) return;
      t(loadingStatePutLoading({
        key: r
      }));
      S(n).then(e => {
        t(uW({
          userIds: n
        }));
        t(Z({
          users: e
        }));
        t(loadingStateDelete({
          key: r
        }));
      }).catch(() => {
        t(loadingStatePutFailure({
          key: r
        }));
      });
    }
  }, [t, _, loadingKeys, o]);
  return {
    usersById: r,
    loading: loadingKeys.some(e => VP(o, e)),
    hasError: loadingKeys.some(e => aF(o, e))
  };
}
let I = e => k.getUser({
  userId: e
}).then(e => e.data.meta).catch(e => {
  getFalseValue() || console.warn("Failed to get public user");
  return e;
});
let S = e => h.getBatched({
  userIds: e
}).then(e => e.data.meta).catch(e => {
  getFalseValue() || console.warn("Failed to get public users");
  return e;
});
let $$v0 = e => e.startsWith("VISITOR-");
let A = e => ({
  id: e.userID,
  name: e.name,
  handle: e.name,
  img_url: e.imageURL
});
export async function $$x1({
  state: e,
  dispatch: t,
  userId: r
}) {
  let n = y(r)(e);
  if (n) return n;
  if ($$v0(r)) return null;
  let i = e.user;
  let a = $$v0(r);
  if (!(!n && !a && i)) return null;
  let s = await I(r);
  t(yJ({
    user: s
  }));
  return s;
}
export const Fl = $$v0;
export const ug = $$x1;
export const wW = $$b2;
export const zy = $$T3;