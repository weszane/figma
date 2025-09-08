import { dv, tj } from '../905/210500';
import { createReduxSubscriptionAtomWithState } from '../905/270322';
import { P8 } from '../905/270781';
import { selectTeams } from '../905/338617';
import { t as _$$t } from '../905/340158';
import { n as _$$n } from '../905/347702';
import { P as _$$P } from '../905/412913';
import { O as _$$O } from '../905/566074';
import { getFeatureFlags } from '../905/601108';
import { l as _$$l } from '../905/716947';
import { atom, createRemovableAtomFamily } from '../figma_app/27355';
import { Mk } from '../figma_app/31188';
import { conditionalFeatureFlag } from '../figma_app/169182';
import { gr } from '../figma_app/243058';
import { w5 } from '../figma_app/345997';
import { Wn, XR } from '../figma_app/396464';
import { isEmptyObject } from '../figma_app/493477';
import { sS, tB, XJ, yV } from '../figma_app/516028';
import { jd } from '../figma_app/528509';
import { o as _$$o, E8, PW } from '../figma_app/633080';
import { c5, qV, ZA } from '../figma_app/645694';
import { ad, CG, E2, gA, Hb, HF, i_, LB, lg, Lk, MA, pD, Q_, rC, RQ, w8, zE } from '../figma_app/646357';
import { sortByMultiple } from '../figma_app/656233';
import { VariableErrorType } from '../figma_app/763686';
import { im } from '../figma_app/828186';
import { Xt } from '../figma_app/889655';
import g from '../vendor/149674';
import c from '../vendor/223926';
import p from '../vendor/890446';
import { Mz } from '../vendor/925040';
import h from '../vendor/946678';
let u = c;
let _ = p;
let m = h;
let f = g;
let $$j24 = e => e.library;
let $$U8 = e => e.library.libraryPublishingMode;
let B = e => e.openFile?.publishedHubFile;
let $$G13 = e => e.library.openHubFilePublished__LIVEGRAPH.components;
let $$V14 = e => e.library.openHubFilePublished__LIVEGRAPH.stateGroups;
let H = e => e.library.openHubFilePublished__LIVEGRAPH.styles;
let z = e => e.library.openHubFilePublished__LIVEGRAPH.variables;
let W = e => e.library.openHubFilePublished__LIVEGRAPH.variableSets;
let K = e => e.library.openHubFilePublished__LIVEGRAPH.modules;
let $$Y15 = Mz([$$G13, H, z, W, $$V14], (e, t, r, n, a) => !isEmptyObject(e) || !isEmptyObject(t) || !isEmptyObject(r) || !isEmptyObject(n) || !isEmptyObject(a));
let $ = Mz([XJ, qV], (e, t) => e && t[e] || {});
let X = Mz([XJ, ZA], (e, t) => e && t[e] || {});
let q = e => e.library.local.thumbnails;
let J = e => e.library.openFilePublished__LIVEGRAPH.styles;
let Z = e => e.library.openFilePublished__LIVEGRAPH.variableSets;
let Q = e => e.library.openFilePublished__LIVEGRAPH.modules;
let $$ee5 = Mz([$, J, Z, Q], (e, t, r, n) => !isEmptyObject(t) || !isEmptyObject(e) || !isEmptyObject(r) || !isEmptyObject(n));
let et = Mz([e => e.library.local.styles, sS, $$U8, e => e.library.publishableStyles, H, B, q], (e, t, r, n, i, a, s) => {
  if (r === _$$o.HUBFILE && a) {
    let r = _$$l(a.libraryKey);
    let {
      newLocal
    } = rC(w8, n, i, e, s, {}, t || '', r, new Set(), PW.STYLE);
    return newLocal;
  }
  return e;
});
let er = Mz([J, H, $$U8], (e, t, r) => r === _$$o.HUBFILE ? t : e);
let $$en21 = Mz([et, er], (e, t) => {
  if (!getFeatureFlags().ds_remove_redux_library_status) return e;
  let r = {};
  for (let n of Object.values(e)) {
    let e = eU(n, t[n.node_id], eG);
    r[n.node_id] = {
      ...n,
      status: e
    };
  }
  return r;
});
let ei = Mz([e => e.library.local.components, sS, $$U8, $$G13, B, e => e.library.publishableSymbols, q, im], (e, t, r, n, i, a, s, l) => {
  if (r === _$$o.HUBFILE && i) {
    let r = _$$l(i.libraryKey);
    let {
      newLocal
    } = rC((e, t, r, n, i) => i_(e, t, r, n, i, l), a, n, e, s, {}, t || '', r, new Set(), PW.COMPONENT);
    return newLocal;
  }
  return e;
});
let ea = Mz([$, $$G13, $$U8], (e, t, r) => r === _$$o.HUBFILE ? t : e);
let es = Mz([function (e) {
  return e.library.local.stateGroups;
}, sS, $$U8, $$V14, B, e => e.library.publishableStateGroups, q], (e, t, r, n, i, a, s) => {
  if (r === _$$o.HUBFILE && i) {
    let r = _$$l(i.libraryKey);
    let {
      newLocal
    } = rC(LB, a, n, e, s, {}, t || '', r, new Set(), PW.STATE_GROUP);
    return newLocal;
  }
  return e;
});
let eo = Mz([X, $$V14, $$U8], (e, t, r) => r === _$$o.HUBFILE ? t : e);
let $$el11 = Mz([ei, ea, es, eo, im], (e, t, r, n, i) => {
  if (!getFeatureFlags().ds_remove_redux_library_status) return e;
  let a = {};
  let s = (e, t) => {
    if (getFeatureFlags().ds_user_facing_version_publishing) {
      if (t?.userFacingVersion !== e.userFacingVersion) return !0;
    } else if (t?.content_hash !== e.content_hash) {
      return !0;
    }
    if (!pD(t.name, e?.name) || !pD(t.description, e.description) || i && !pD(t.sort_position, e.sort_position) || Q_(t.containing_frame, e?.containing_frame, {
      compareSortPositions: i
    })) {
      return !0;
    }
    let a = E2(e);
    let s = a && r[a] || null;
    let o = E2(t);
    let d = o && n[o] || null;
    return s ? !d || eV(s, d) : d != null;
  };
  for (let r of Object.values(e)) {
    let e = eU(r, t[r.node_id], s);
    a[r.node_id] = {
      ...r,
      status: e
    };
  }
  return a;
});
let $$ed22 = Mz([es, eo], (e, t) => {
  if (!getFeatureFlags().ds_remove_redux_library_status) return e;
  let r = {};
  for (let n of Object.values(e)) {
    let e = eU(n, t[n.node_id], eV);
    r[n.node_id] = {
      ...n,
      status: e
    };
  }
  return r;
});
let $$ec33 = P8([e => {
  let t = {};
  Object.entries(e.library.localVariablesById).forEach(([e, r]) => {
    r.isSoftDeleted || (t[e] = r);
  });
  return t;
}, e => e.library.openFilePublished__LIVEGRAPH.variables, tB, $$U8, B, z], (e, t, r, n, i, a) => {
  let s = {};
  let l = n === _$$o.HUBFILE && i ? a : t;
  let d = r?.key ?? '';
  let c = n === _$$o.HUBFILE && i ? _$$l(i.libraryKey) : _$$l(r?.libraryKey ?? '');
  for (let [t, r] of Object.entries(l)) {
    e.hasOwnProperty(t) || (s[t] = {
      ...r,
      subscriptionStatus: 'LOCAL',
      isPublishable: !1,
      modeValues: {},
      keyForPublish: r.key,
      status: E8.DELETED,
      deletedFromSceneGraph: !0,
      isSoftDeleted: !0,
      file_key: d,
      file_key_source: _$$P.LOCAL_FILE,
      library_key: c,
      hasOnlyBeenReordered: !1
    });
  }
  for (let t of Object.values(e)) {
    let e = l[t.node_id];
    let r = eU(t, e, eH);
    let n = conditionalFeatureFlag('ds_user_facing_version_publishing', t.userFacingVersion === e?.userFacingVersion, t.version === e?.version);
    let i = !!(t && e && n && t.sortPosition !== e.sortPosition);
    s[t.node_id] = {
      ...t,
      status: r,
      file_key: d,
      file_key_source: _$$P.LOCAL_FILE,
      library_key: c,
      key: e?.key,
      hasOnlyBeenReordered: i
    };
  }
  return s;
});
let eu = Mz([$$ec33], e => u()(Object.values(e), e => e.variableSetId));
let $$ep20 = P8([e => {
  let t = {};
  Object.entries(e.library.localVariableSetsById).forEach(([e, r]) => {
    r.isSoftDeleted || (t[e] = r);
  });
  return t;
}, Z, eu, tB, $$U8, B, W], (e, t, r, n, i, d, c) => {
  let u = i === _$$o.HUBFILE && d ? c : t;
  let p = n?.key ?? '';
  let _ = i === _$$o.HUBFILE && d ? _$$l(d.libraryKey) : _$$l(n?.libraryKey ?? '');
  let h = {};
  for (let [t, r] of Object.entries(u)) {
    if (e.hasOwnProperty(t)) continue;
    let n = {
      subscriptionStatus: 'LOCAL',
      modes: [],
      defaultModeID: '',
      isPublishable: !1,
      keyForPublish: r.key,
      status: E8.DELETED,
      deletedFromSceneGraph: !0,
      isSoftDeleted: !0,
      file_key: p,
      file_key_source: _$$P.LOCAL_FILE,
      library_key: _,
      variableSetError: VariableErrorType.NONE,
      hasOnlyBeenReordered: !1
    };
    r.isExtension ? h[t] = {
      ...r,
      ...n,
      rootVariableSetId: gr.INVALID,
      backingVariableSetId: gr.INVALID
    } : h[t] = {
      ...r,
      ...n
    };
  }
  for (let t of Object.values(e)) {
    let e = u[t.node_id];
    let n = function (e, t, r) {
      let n = eU(e, t, ez);
      if (n !== E8.CURRENT) return n;
      for (let e of r) {
        if (e.status !== E8.CURRENT && e.status !== E8.NOT_STAGED) return E8.CHANGED;
      }
      return E8.CURRENT;
    }(t, e, r[t.node_id] ?? []);
    let i = !!(t && e && t.version == t.version && t.sortPosition !== e.sortPosition);
    getFeatureFlags().ds_user_facing_version_publishing && (i = !!(t && e && t.userFacingVersion === e.userFacingVersion && t.sortPosition !== e.sortPosition));
    h[t.node_id] = {
      ...t,
      status: n,
      file_key: p,
      file_key_source: _$$P.LOCAL_FILE,
      library_key: _,
      key: e?.key,
      hasOnlyBeenReordered: i
    };
  }
  return h;
});
let $$e_18 = Mz([$$el11], e => {
  let t = {};
  for (let r of Object.values(e)) {
    let e = E2(r);
    e != null && (t[e] = t[e] ?? [], t[e].push(r));
  }
  return t;
});
let eh = Mz([$$el11], e => f()(e, e => !ad(e)));
let em = e => e.library.local.modules;
function eg(e, t) {
  if (!t) return !1;
  if (getFeatureFlags().ds_user_facing_version_publishing) {
    if (t.userFacingVersion !== e.userFacingVersion) return !0;
  } else if (t.version !== e.version) {
    return !0;
  }
  return !(pD(t.name, e?.name) && pD(t.description, e.description));
}
function ef(e, t, r, n, i) {
  if (!getFeatureFlags().dse_module_publish) return {};
  let a = {};
  if (i === _$$o.HUBFILE && n) {
    for (let [t, n] of Object.entries(r)) {
      Object.keys(e).includes(t) || (a[t] = {
        ...n,
        status: E8.DELETED,
        deletedFromSceneGraph: !0
      });
    }
  }
  let s = i === _$$o.HUBFILE ? r : t;
  for (let t of Object.values(e)) {
    let e = eU(t, s[t.node_id], eg);
    a[t.node_id] = {
      ...t,
      status: e
    };
  }
  return a;
}
let $$eE37 = Mz([em, Q, K, B, $$U8], (e, t, r, n, i) => getFeatureFlags().dse_module_publish ? ef(e, t, r, n, i) : {});
let $$ey26 = Mz([em, Q, K, B, (e, t) => t], (e, t, r, n, i) => ef(e, t, r, n, i));
let $$eb6 = Mz([eh, $$ed22], (e, t) => ({
  ...e,
  ...t
}));
let eT = Mz([$$eb6], e => _()(e, e => CG(e)));
let eI = Mz([$$eb6], e => Object.values(e).some(e => HF(e.status)));
let eS = Mz([$$eE37], e => Object.values(e).some(e => HF(e.status)));
let $$ev4 = Mz([eI, eS], (e, t) => e || t);
let eA = Mz([$$eb6, Xt], (e, t) => Object.keys(t).reduce((t, r) => (e[r] && (t[r] = e[r]), t), Object.create(null)));
let ex = Mz([$$eE37, Xt], (e, t) => Object.keys(t).reduce((t, r) => (e[r] && (t[r] = e[r]), t), Object.create(null)));
let eN = Mz([$$en21, $$eb6, $$ep20, $$eE37], (e, t, r, n) => Object.keys(e).length > 0 || Object.keys(t).length > 0 || Object.keys(r).length > 0 || Object.keys(n).length > 0);
let eC = createReduxSubscriptionAtomWithState(eN);
let $$ew0 = atom(e => {
  if (e(eC)) return !0;
  for (let t of Object.keys(Mk)) {
    if (_$$O(t) && Mk[t].local) {
      for (let r of Object.values(e(Mk[t].local))) {
        if (!r.isSoftDeleted) return !0;
      }
    }
  }
  return !1;
});
let eO = _$$n(Mz([$$eb6, $$eE37], (e, t) => Object.keys(e).length > 0 || Object.keys(t).length > 0));
let $$eR17 = createReduxSubscriptionAtomWithState(eO);
let eL = (e, t) => e.status != null && (!!lg(e.status) || !!Hb(e.status) && (t ? t.has(e.node_id) : !!e.old_key));
let eP = (e, t) => eL(e, t) && HF(e.status);
let eD = createReduxSubscriptionAtomWithState(e => e.userStateLoaded);
let $$ek30 = atom(e => e(eD) && e(yV)?.canEdit && (e($$tj32) || e($$ew0)));
let $$eM23 = Mz([$$el11, $$ed22, $$en21, (e, t) => t], ej);
let $$eF7 = Mz([$$el11, $$ed22, $$en21], (e, t, r) => ej(e, t, r, void 0));
function ej(e, t, r, n) {
  let i = {
    ...e,
    ...t,
    ...r
  };
  let a = new Set(n ? Object.keys(n).filter(e => n[e].publishType !== 'FORCED_COPY') : Object.values(i).filter(e => !!e.old_key).map(e => e.node_id));
  Array.from(a).map(t => e[t] && E2(e[t])).filter(e => !!e).forEach(e => {
    a.add(e);
  });
  return a;
}
let eU = (e, t, r) => {
  let n = t && t.unpublished_at == null;
  let i = 'isSoftDeleted' in e && e.isSoftDeleted;
  let a = !!e.isPublishable && !i;
  return n && !a ? E8.DELETED : !n && a ? E8.NEW : n || a ? r(e, t) ? E8.CHANGED : E8.CURRENT : E8.NOT_STAGED;
};
let eB = (e, t) => {
  let r = conditionalFeatureFlag('ds_user_facing_version_publishing', e.userFacingVersion === t.userFacingVersion, e.content_hash === t.content_hash);
  return !(t && r && pD(t.name, e.name) && pD(t.description, e.description));
};
let eG = (e, t) => eB(e, t) || !pD(t.sort_position, e.sort_position);
let eV = (e, t) => getFeatureFlags().ds_user_facing_version_publishing ? !(t && t.userFacingVersion === e.userFacingVersion && !Q_(t.containing_frame, e?.containing_frame) && pD(t.name, e?.name) && pD(t.description, e.description)) : !(t && t.version === e.version && !Q_(t.containing_frame, e?.containing_frame) && pD(t.name, e?.name) && pD(t.description, e.description));
let eH = (e, t) => {
  if (!e || !t) return !0;
  if (getFeatureFlags().ds_user_facing_version_publishing) {
    if (t.userFacingVersion !== e.userFacingVersion) return !0;
  } else if (t.version !== e.version) {
    return !0;
  }
  return t.sortPosition !== e.sortPosition;
};
let ez = (e, t) => getFeatureFlags().ds_user_facing_version_publishing ? !(t && t.userFacingVersion === e?.userFacingVersion && t.sortPosition === e.sortPosition) : !(t && t.version === e?.version && t.sortPosition === e.sortPosition);
function eW(e, t, r, i) {
  let [a, s] = m()(t, t => eL(t, e));
  let [o, l] = m()(a, r);
  let [d, c] = m()(s, e => HF(e.status));
  return {
    modified: {
      erroneous: sortByMultiple(o, ...i),
      wellFormed: sortByMultiple(l, ...i)
    },
    unmodified: {
      published: sortByMultiple(d, ...i),
      unpublished: sortByMultiple(c, ...i)
    }
  };
}
function eK(e, t) {
  return t == null ? eX(e) : e$(e, t);
}
let $$eY38 = createRemovableAtomFamily(e => {
  let t = e ? createReduxSubscriptionAtomWithState(t => eK(t, e)) : createReduxSubscriptionAtomWithState(eX);
  let r = e ? createReduxSubscriptionAtomWithState(t => $$eM23(t, e)) : atom(new Set());
  return atom(e => {
    let n = e(t);
    let i = e(r);
    let a = Object.values(e(_$$t).data ?? {});
    let s = e(dv);
    return {
      ...n,
      libraryAssets: {
        [PW.RESPONSIVE_SET]: eW(i, _$$O(PW.RESPONSIVE_SET) ? a.filter(e => e.type === PW.RESPONSIVE_SET) : [], () => !1, [gA]),
        [PW.CODE_COMPONENT]: eW(i, _$$O(PW.CODE_COMPONENT) ? a.filter(e => e.type === PW.CODE_COMPONENT) : [], () => !1, [gA])
      },
      pageThumbnails: tj(s)
    };
  });
});
let e$ = Mz([$$en21, $$el11, $$ed22, $$eb6, $$ep20, $$ec33, $$eE37, $$eM23, (e, t) => t], eq);
let eX = Mz([$$en21, $$el11, $$ed22, $$eb6, $$ep20, $$ec33, $$eE37, $$eF7], (e, t, r, n, i, a, s, o) => eq(e, t, r, n, i, a, s, o, void 0));
function eq(e, t, r, n, i, a, s, o, l) {
  let d = (e, t) => {
    if (!l) return 0;
    let r = l[e.node_id];
    let n = l[t.node_id];
    return r && n ? r.publishType === 'FORCED_COPY' && n.publishType !== 'FORCED_COPY' ? 1 : r.publishType !== 'FORCED_COPY' && n.publishType === 'FORCED_COPY' ? -1 : 0 : 0;
  };
  let c = [...new Set(Object.values(a).filter(e => !e.isPublishable).map(e => e.variableSetId))].map(e => i[e]).filter(e => !!e);
  return {
    styles: eW(o, Object.values(e), () => !1, [Lk, d]),
    components: eW(o, Object.values(t), zE, [gA, d]),
    stateGroups: eW(o, Object.values(r), zE, [gA, d]),
    productComponents: eW(o, Object.values(n), zE, [gA, d]),
    variableSets: eW(o, Object.values(i), RQ, [MA]),
    variableSetsWithHiddenVariables: eW(o, c, () => !1, [MA]),
    variables: eW(o, Object.values(a), () => !1, [MA]),
    modules: eW(o, _$$O(PW.MODULE) ? Object.values(s) : [], () => !1, [gA])
  };
}
let eJ = P8([eu], e => Object.fromEntries(Object.entries(e).map(([e, t]) => [e, eW(new Set(), t, () => !1, [MA])])));
let $$eZ12 = () => P8([eJ, (e, t) => t], (e, t) => {
  let r = e[t];
  return r ? r.modified.wellFormed : [];
});
let $$eQ27 = () => P8([eJ, (e, t) => t], (e, t) => {
  let r = e[t];
  return r ? r.unmodified.unpublished.filter(e => !e.isPublishable) : [];
});
let e0 = Mz([eK], e => e.styles.modified.wellFormed);
let e1 = Mz([$$en21], e => Object.values(e).filter(e => eP(e)));
let e2 = Mz([eK], e => e.components.modified.wellFormed);
let e5 = Mz([eK], e => e.stateGroups.modified.wellFormed);
let e3 = Mz([eK], e => e.productComponents.modified.wellFormed);
let e4 = Mz([e3], e => e.filter(e => HF(e.status)));
let e8 = Mz([eK], e => e.variableSets.modified.wellFormed);
let e6 = Mz([e8], e => e.filter(e => HF(e.status)));
let e7 = Mz([eK], e => _$$O(PW.MODULE) ? e.modules.modified.wellFormed : []);
let e9 = Mz([e7], e => e.filter(e => HF(e.status)));
let $$te25 = Mz([tB, selectTeams], (e, t) => !!(getFeatureFlags().cmty_lib_admin_publish && e?.publishedHubFile) || !jd(e?.project) && !!(e && w5(e.teamId ? t[e.teamId] : null)));
let $$tt3 = e0;
let tr = Mz([$$tt3], e => e.length > 0);
let tn = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => tr(t, e)));
let ti = Mz([e1], e => e.length > 0);
let ta = createReduxSubscriptionAtomWithState(ti);
let $$ts28 = Mz([e2, $$te25], (e, t) => t ? e : []);
let $$to10 = Mz([e5, $$te25], (e, t) => t ? e : []);
let tl = Mz([e3, $$te25], (e, t) => t ? e : []);
let td = Mz([tl], e => e.length > 0);
let tc = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => td(t, e)));
let tu = Mz([e4, $$te25], (e, t) => t ? e : []);
let tp = Mz([tu], e => e.length > 0);
let t_ = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => tp(t, e)));
let th = Mz([e8], e => e);
let tm = Mz([th], e => e.length > 0);
let tg = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => tm(t, e)));
let tf = Mz([e6], e => e);
let tE = Mz([tf], e => e.length > 0);
let ty = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => tE(t, e)));
let tb = Mz([e7, $$te25], (e, t) => t ? e : []);
let tT = Mz([tb], e => e.length > 0);
let tI = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => tT(t, e)));
let tS = Mz([e9], e => e.length > 0);
let tv = createRemovableAtomFamily(e => createReduxSubscriptionAtomWithState(t => tS(t, e)));
let tA = createRemovableAtomFamily(e => atom(t => {
  for (let r of Object.values(t($$eY38(e)).libraryAssets)) {
    if (r.modified.wellFormed.length > 0 && _$$O(r.modified.wellFormed[0].type)) return !0;
  }
  return !1;
}));
let tx = createRemovableAtomFamily(e => atom(t => {
  for (let r of Object.values(t($$eY38(e)).libraryAssets)) {
    if (r.modified.wellFormed.length > 0 && _$$O(r.modified.wellFormed[0].type) && r.modified.wellFormed.some(e => HF(e.status))) return !0;
  }
  return !1;
}));
let $$tN36 = createRemovableAtomFamily(e => {
  let t = createReduxSubscriptionAtomWithState(t => $$tt3(t, e));
  let r = createReduxSubscriptionAtomWithState(t => tl(t, e));
  let n = createReduxSubscriptionAtomWithState(t => th(t, e));
  let i = createReduxSubscriptionAtomWithState(t => tb(t, e));
  return atom(a => {
    let s = a(t);
    let o = a(r);
    let l = a(n);
    let d = a(i);
    let c = a($$eY38(e));
    let u = Object.keys(c.libraryAssets).flatMap(e => _$$O(e) ? c.libraryAssets[e].modified.wellFormed : []);
    let p = a(dv);
    return [...s.map(e => e.node_id), ...o.map(e => e.node_id), ...l.map(e => e.node_id), ...d.map(e => e.node_id), ...u.map(e => e.node_id), ...p?.map(e => e.node_id)];
  });
});
let $$tC9 = createRemovableAtomFamily(e => atom(t => t(tn(e)) || t(tc(e)) || t(tg(e)) || t(tI(e)) || t(tA(e))));
let $$tw19 = createRemovableAtomFamily(e => atom(t => t(ta) || t(t_(e)) || t(ty(e)) || t(tv(e)) || t(tx(e))));
let $$tO2 = Mz([eA, tl], (e, t) => t.some(t => e[t.node_id]));
Mz([ex, tb], (e, t) => t.some(t => e[t.node_id]));
let $$tR16 = Mz([eT, c5], (e, t) => ({
  ...t,
  ...e
}));
let $$tL1 = Mz([tb], e => e.map(e => e.node_id));
Mz([$$to10], e => e.map(e => e.node_id));
let $$tP35 = Mz([$$ts28, () => XR()], (e, t) => e.filter(e => e.deletedFromSceneGraph || t.includes(e.node_id)).map(e => e.node_id));
let $$tD34 = Mz([$$tP35, () => Wn()], (e, t) => e.concat(t.filter(e => e.type !== 'SYMBOL').map(e => e.guid)));
let $$tk29 = Mz([$$el11, () => XR()], (e, t) => f()(e, e => t.includes(e.node_id)));
let tM = atom(e => Object.values(e(_$$t).data ?? {}).some(e => HF(e.status)));
let tF = createReduxSubscriptionAtomWithState($$ee5);
let $$tj32 = atom(e => e(tF) || e(tM));
export function $$tU31(e, t) {
  return r => e({
    ...r,
    library: {
      ...r.library,
      libraryPublishingMode: t
    }
  });
}
export const $c = $$ew0;
export const AC = $$tL1;
export const Ct = $$tO2;
export const Dc = $$tt3;
export const Dr = $$ev4;
export const F9 = $$ee5;
export const FZ = $$eb6;
export const GS = $$eF7;
export const Io = $$U8;
export const Iy = $$tC9;
export const JI = $$to10;
export const MH = $$el11;
export const MW = $$eZ12;
export const Mh = $$G13;
export const Pd = $$V14;
export const Pg = $$Y15;
export const Qp = $$tR16;
export const Sh = $$eR17;
export const Wz = $$e_18;
export const Xh = $$tw19;
export const bh = $$ep20;
export const cM = $$en21;
export const dM = $$ed22;
export const dU = $$eM23;
export const e_ = $$j24;
export const fA = $$te25;
export const jO = $$ey26;
export const ju = $$eQ27;
export const oB = $$ts28;
export const p6 = $$tk29;
export const p9 = $$ek30;
export const qG = $$tU31;
export const qN = $$tj32;
export const tK = $$ec33;
export const tz = $$tD34;
export const vQ = $$tP35;
export const x$ = $$tN36;
export const x6 = $$eE37;
export const y6 = $$eY38;