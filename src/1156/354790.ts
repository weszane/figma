import { $D } from '../905/11';
import { ServiceCategories as _$$e2 } from '../905/165054';
import { Hq, l7 } from '../905/189185';
import { O as _$$O } from '../905/273186';
import { t as _$$t } from '../905/303541';
import { noop, throwIf } from '../905/419236';
import { getFeatureFlags } from '../905/601108';
import { X$ } from '../905/612685';
import { getSingletonSceneGraph } from '../905/700578';
import { M4 } from '../905/713695';
import { g as _$$g } from '../905/880308';
import { ei, Ur, zK } from '../1156/71049';
import { eM, oL, Pd, qE, rH } from '../1156/418246';
import { O as _$$O2 } from '../1156/531541';
import { l as _$$l } from '../1156/676968';
import { En, gC, Ic } from '../1156/713925';
import { E as _$$E } from '../1156/735202';
import { xD } from '../1156/751255';
import { r as _$$r } from '../1156/791040';
import { n as _$$n } from '../1156/930733';
import { eU, zl } from '../figma_app/27355';
import { gG } from '../figma_app/97696';
import { WH } from '../figma_app/119420';
import { getInitialOptions, isDevEnvironment } from '../figma_app/169182';
import { eB } from '../figma_app/178419';
import { Nm, o0 } from '../figma_app/202307';
import { _u, mE, o3, OP, Or, ww } from '../figma_app/230278';
import { px } from '../figma_app/302802';
import { W as _$$W, F$, Hg, o9 } from '../figma_app/304955';
import { CortexErrorV2 } from '../figma_app/316567';
import { wi, YZ, Z3 } from '../figma_app/325537';
import { a5, Ho } from '../figma_app/337924';
import { u as _$$u } from '../figma_app/353758';
import { Ay as _$$Ay } from '../figma_app/432652';
import { Y5 } from '../figma_app/455680';
import { yV, ze } from '../figma_app/516028';
import { nc, NJ, nM } from '../figma_app/570630';
import { Wh } from '../figma_app/615482';
import { H5, J6, jv, L6, Li, lV, MK, P5, U1, yZ } from '../figma_app/617606';
import { f3 } from '../figma_app/690664';
import { G1 } from '../figma_app/691470';
import { e as _$$e, SE } from '../figma_app/735943';
import { glU, K$p, Lxv } from '../figma_app/763686';
import { nU } from '../figma_app/779249';
import { QK } from '../figma_app/883638';
import { Ay as _$$Ay2 } from '../figma_app/948389';
import { TT } from '../figma_app/952035';
let W = Wh(() => eU(''));
let V = Wh(() => eU(''));
class Z {
  constructor() {
    this.targetContentX = 0;
    this.currentTime = 0;
    this.isAborted = !1;
    this.isStreamDone = !1;
    this.lastCodeFile = null;
    this.queuedDeltas = [];
    this.renderedContentX = 0;
    this.startTime = 0;
    this.totalContentLen = 0;
    this.updates = [{
      deltaTs: -9999,
      len: 0
    }];
    this.velocity = 100;
    this.donePromise = new Promise(e => this.doneResolve = e);
  }
  queue(e) {
    this.totalContentLen += Q(e);
    this.queuedDeltas.push(ee(e));
    this.startTime === 0 && (this.startTime = Date.now());
    this.updates.push({
      deltaTs: (Date.now() - this.startTime) / 1e3,
      len: this.totalContentLen
    });
  }
  next() {
    if (this.startTime === 0 || this.queuedDeltas.length === 0) return [];
    let e = (Date.now() - this.startTime) / 1e3;
    let t = this.updates[this.updates.length - 1].len + (this.isStreamDone ? 100 : 0);
    let n = 0.9 * e - 0.3;
    let r = this.updates.filter(e => e.deltaTs < n).map(e => e.len);
    if (r.length === 0 && this.isStreamDone) {
      let e = [...this.queuedDeltas];
      this.queuedDeltas = [];
      this.renderedContentX = this.totalContentLen;
      return e;
    }
    let i = r.length > 0 ? r[r.length - 1] : 0;
    let s = function (e, t, n, r = 0.01) {
      if (t === n) return t;
      let i = e(t);
      for (; i < -r;) {
        let r = (t + n) / 2;
        let s = e(r);
        s <= 0 ? (t = r, i = s) : n = r;
      }
      return t;
    }(n => {
      let r = (n - this.targetContentX) / (e - this.currentTime);
      return 2e-5 * (1 / (e - this.currentTime)) * (r - this.velocity) - 1 / (n - i) + 1 / (t - n);
    }, i, t);
    let a = (s - this.targetContentX) / (e - this.currentTime);
    this.velocity = 0.99 * this.velocity + 0.010000000000000009 * a;
    this.currentTime = e;
    this.targetContentX = Math.floor(Math.max(s, this.targetContentX));
    let l = this.renderedContentX;
    let o = [];
    for (; this.queuedDeltas.length > 0;) {
      let e = this.queuedDeltas[0];
      let t = Q(e);
      if (t === 0) {
        o.push(e);
        this.queuedDeltas.shift();
        continue;
      }
      if ((l += t) > this.targetContentX) {
        let n = this.targetContentX - l;
        let r = t + n;
        switch (e.type) {
          case 'message':
          case 'plan':
          case 'summary':
          case 'work':
            let i = ee(e);
            i.message = i.message.slice(0, n);
            e.message = e.message.slice(r);
            o.push(i);
            break;
          case 'code':
            let s = ee(e);
            s.file !== this.lastCodeFile ? this.queuedDeltas.shift() : (s.code = s.code.slice(0, n), e.code = e.code.slice(r));
            this.lastCodeFile = e.file;
            o.push(s);
            break;
          case 'reasoning':
            let a = ee(e);
            a.reasoning = a.reasoning.slice(0, n);
            e.reasoning = e.reasoning.slice(r);
            o.push(a);
            break;
          case 'codeDiffVisualizationDelta':
            let c = ee(e);
            c.old_str.length > r ? (c.old_str = c.old_str.slice(0, r), c.new_str = '', e.old_str = e.old_str.slice(r)) : (e.old_str = '', c.new_str = c.new_str.slice(0, r - c.old_str.length), e.new_str = e.new_str.slice(r - c.old_str.length));
            o.push(c);
            break;
          default:
            console.warn('Unknown smooth delta type', e.type);
        }
        this.renderedContentX += r;
        break;
      }
      if (this.renderedContentX += t, o.push(ee(e)), this.queuedDeltas.shift(), l === this.targetContentX) break;
    }
    return o;
  }
  async onRender(e) {
    for (; (!this.isStreamDone || this.renderedContentX < this.totalContentLen || this.queuedDeltas.length > 0) && !this.isAborted;) {
      let t = this.next();
      if (this.isStreamDone && t.length === 0) break;
      t.forEach(e);
      await new Promise(e => setTimeout(e, 16));
    }
    this.doneResolve();
  }
  abort() {
    this.isAborted = !0;
    this.doneResolve();
  }
  done() {
    this.isStreamDone = !0;
    this.startTime === 0 && this.doneResolve();
    return this.donePromise;
  }
}
function Q(e) {
  switch (e.type) {
    case 'message':
    case 'plan':
    case 'summary':
    case 'work':
      return e.message.length;
    case 'code':
      return e.code.length;
    case 'reasoning':
      return e.reasoning.length;
    case 'codeDiffVisualizationDelta':
      return e.old_str.length + e.new_str.length;
    default:
      return 0;
  }
}
function ee(e) {
  return typeof structuredClone == 'function' ? structuredClone(e) : JSON.parse(JSON.stringify(e));
}
async function et({
  featureType: e,
  chatMessagesNode: t,
  newMessage: n,
  rawUserChatDetails: i,
  user: a,
  persistentEntityId: l,
  clientLifecycleId: m,
  setInput: f,
  clientGeneratedRequestUuid: _,
  canUseSupabase: b,
  model: k
}) {
  let C;
  let E;
  throwIf(void 0 !== glU, 'Fullscreen must be defined');
  Ic();
  let S = ei(e, t);
  let {
    exchangeInit,
    codeChatRequest
  } = await jv({
    chatMessagesNode: t,
    newMessage: n,
    rawUserChatDetails: i,
    userId: a.id,
    featureType: e,
    canUseSupabase: b,
    model: k,
    featureFlagConfig: {
      multi_file_code_layers: getFeatureFlags().multi_file_code_layers,
      bake_canvas: getFeatureFlags().bake_canvas
    },
    handlers: {
      handleClearImportData: () => {
        l7.ai('code-chat-clear-import-data', () => {
          t.chatMessages = Li(t.chatMessages);
        });
      },
      getSources: () => {
        let t = e === lV.FIGMAKE ? Hg(nc) : Hg(nc, S);
        return t ? Object.fromEntries(Object.entries(t).map(([e, t]) => [F$(S, e), t.sourceCode])) : {};
      },
      getRootPath: () => S,
      initSupabase: () => ea(),
      getCodeLibraryComponents: () => function () {
        if (!getFeatureFlags().bake_ds_import_l3a) return;
        let e = Hg(nc);
        if (e) {
          return Object.values(e).filter(e => !!e.sourceCodeComponentOrStateGroupKey && !!e.sourceCodeComponentOrStateGroupVersion).map(e => ({
            key: e.sourceCodeComponentOrStateGroupKey,
            libraryKey: e.sourceLibraryKey,
            version: e.sourceCodeComponentOrStateGroupVersion
          }));
        }
      }()
    }
  });
  let B = getFeatureFlags().bake_smooth_chat_streaming ? new Z() : void 0;
  let q = new P5({
    initialMessages: exchangeInit,
    userId: a.id,
    nodeIdGenerator: () => (throwIf(void 0 !== glU, 'Fullscreen must be defined'), glU.generateUniqueID()),
    initializeWithAssistantMessage: !0,
    excludeRedundantCodeFromMessageHistory: !!getFeatureFlags().bake_exclude_code_tag_web,
    reportToSentry: (e, t) => $D(_$$e2.MAKE, e, t)
  });
  YZ({
    node: t.guid,
    messages: q.getExchange(),
    fileUpdates: [],
    isTyping: !1
  });
  let $ = [];
  let P = {};
  let U = new AbortController();
  zl.set(Z3(t.guid), U);
  let G = new Promise(e => {
    U && U.signal.addEventListener('abort', e);
  });
  async function W(e) {
    e && (await e.cancel());
    t && wi(t.guid, {
      switchToPreview: !0
    });
    zK($);
    B?.abort();
    let {
      plainText
    } = H5(n.textContent);
    f(plainText);
    WH();
  }
  let V = performance.now();
  let K = es();
  function X() {
    return U && U.signal.aborted ? (E = 'user_cancelled', !0) : es() !== K ? (E = 'user_left', !0) : (!t || !t.isAlive) && (E = 'missing_node', !0);
  }
  try {
    let n = function (e) {
      let t = null;
      switch (e) {
        case lV.FIGMAKE:
          t = _$$Ay.shared.generateFigMake;
          break;
        case lV.FIGMAKE_IN_DESIGN:
        case lV.CODE_IN_SITES:
        case lV.AI_ASSISTANT:
          t = _$$Ay.shared.generateLivingDesigns;
          break;
        default:
          noop(e);
      }
      return t;
    }(e);
    if (throwIf(n, 'Stream function must be defined'), (e === lV.CODE_IN_SITES || e === lV.FIGMAKE_IN_DESIGN) && codeChatRequest.chats.length > 0) {
      let e = codeChatRequest.chats[codeChatRequest.chats.length - 1];
      if (e?.role === 'user') {
        let t = zl.get(f3);
        if (t && t.iframe?.isConnected ? await Promise.race([L6({
          userMessage: e,
          getSitesPreviewPageSnapshot: ({
            maxSnapshotWidth: e,
            maxSnapshotHeight: n
          }) => t.snapshotPage({
            maxSnapshotWidth: e,
            maxSnapshotHeight: n
          })
        }), G]) : console.warn('[attachPreviewImage] No active preview found, skipping thumbnail.'), X()) {
          await W();
          return null;
        }
      }
    }
    let i = n(codeChatRequest, {
      ..._$$Ay2(),
      persistentEntityId: l,
      clientLifecycleId: m,
      clientGeneratedRequestUuid: _
    }, {
      abortSignal: U.signal
    });
    let a = await Promise.race([i, G]);
    if (X()) {
      await W();
      return null;
    }
    throwIf(a, 'Response must be defined');
    let o = a.getReader();
    let c = ei(e, t);
    let d = Hg(nc, c);
    let u = n => {
      n.type === 'code' ? function ({
        response: e,
        fileUpdates: t,
        codeFiles: n,
        newlyCreatedCodeFiles: i,
        featureType: s,
        chatMessagesNode: a
      }) {
        let l = e.file;
        let o = ei(s, a);
        let c = (getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas) && a.codeFilePath;
        e.reset && (t[l] = '');
        let d = (t[l] || '') + e.code;
        t[l] = d;
        zl.set(_$$l(a.guid), {
          type: 'code',
          fullFilePath: l
        });
        (s === lV.FIGMAKE || s === lV.FIGMAKE_IN_DESIGN || c) && function ({
          codeFiles: e,
          rootPath: t,
          currentWorkingFilePath: n,
          response: r,
          newlyCreatedCodeFiles: i
        }) {
          let {
            codeFile,
            created
          } = Ur(e, t, n, r.code);
          codeFile && l7.ai('code-chat', () => {
            nU(codeFile);
          });
          codeFile && created && i.push(codeFile);
        }({
          codeFiles: n,
          rootPath: o,
          currentWorkingFilePath: l,
          response: e,
          newlyCreatedCodeFiles: i
        });
      }({
        response: n,
        fileUpdates: P,
        codeFiles: d,
        newlyCreatedCodeFiles: $,
        featureType: e,
        chatMessagesNode: t
      }) : n.type === 'chat-compression' ? yZ(t, n) : n.type === 'plan' && n.title && zl.set(_$$n, n.title);
      q.processResponseDelta(n);
      (function (e, t, n, r) {
        let i = t.guid;
        let s = _$$l(i);
        if (e.type === 'code') {
          let t = e.file;
          zl.set(s, {
            type: 'code',
            fullFilePath: t
          });
        } else if (e.type === 'toolCall') {
          e.toolName !== 'multi_edit_tool' && zl.set(s, e);
        } else if (e.type === 'toolCallDelta') {
          let e = r.getCurrentToolCall();
          e && zl.set(s, {
            ...e
          });
        } else {
          e.type === 'message' || e.type === 'summary' ? zl.set(s, null) : e.type === 'plan' ? (zl.set(s, null), e.title && zl.set(_$$n, e.title)) : e.type === 'editedFiles' && zl.set(s, {
            type: 'editedFiles',
            files: e.files
          });
        }
      })(n, t, 0, q);
      YZ({
        node: t.guid,
        messages: q.getExchange(),
        fileUpdates: Object.entries(P).map(([e, t]) => ({
          name: e,
          contents: t
        })),
        isTyping: !1
      });
      C || (C = performance.now());
    };
    for (B?.onRender(u);;) {
      let e = await Promise.race([o.read(), G]);
      if (X()) {
        await W(o);
        return null;
      }
      let {
        done,
        value
      } = e;
      if (value && (B ? B.queue(value) : u(value)), done) break;
    }
  } catch (n) {
    n instanceof G1 || n instanceof CortexErrorV2 ? zl.set(QK(t?.guid || ''), {
      error: n,
      cortexClientGeneratedRequestUuid: _
    }) : zl.set(QK(t?.guid || ''), {
      error: n
    });
    Ho(n, e, a5.SEND_MESSAGE);
    W();
    return null;
  } finally {
    B && (await B.done());
    let t = performance.now();
    oL(e, V, C, t, q.getToolCalls(), l, m, E);
  }
  return {
    exchangedMessages: q.getExchange(),
    fileUpdates: P
  };
}
export async function $$en0({
  newMessage: e,
  user: t,
  chatMessagesNode: n,
  rawUserChatDetails: i,
  featureType: s,
  persistentEntityId: a,
  clientLifecycleId: o,
  setInput: c,
  fileKey: x,
  canUseSupabase: m,
  model: p
}) {
  let b;
  let j = n.chatMessages;
  rH(s, j.length, a, o, x || '');
  isDevEnvironment() && (b = _$$g());
  let v = await et({
    featureType: s,
    chatMessagesNode: n,
    newMessage: e,
    rawUserChatDetails: i,
    user: t,
    persistentEntityId: a,
    clientLifecycleId: o,
    setInput: c,
    clientGeneratedRequestUuid: b,
    canUseSupabase: m,
    model: p
  });
  if (v) {
    let {
      exchangedMessages,
      fileUpdates
    } = v;
    eM({
      featureType: s,
      clientLifecycleId: o,
      persistentEntityId: a,
      fileUpdates
    });
    (exchangedMessages.length > 0 || Object.keys(fileUpdates).length > 0) && _$$E(exchangedMessages, n, fileUpdates, x, s, {
      multi_file_code_layers: getFeatureFlags().multi_file_code_layers,
      bake_canvas: getFeatureFlags().bake_canvas
    }, {
      swapCacheWithFiles: nc,
      trackSystemEditedSession: e => {
        let t = _$$O.get(e.guid);
        t && (t.hasSystemEdited = !0);
      },
      setCodeLastEditedBy: e => {
        zl.set(Nm(e), 'assistant');
      },
      createCodeSnapshot: _$$O2,
      reportErrorToSentry: e => $D(_$$e2.AI_FOR_PRODUCTION, e),
      regenerateAttributions: $$er2
    });
    e.type === K$p.USER_MESSAGE && gG(H5(e.textContent)) && px();
  }
  wi(n.guid, {
    switchToPreview: !0
  });
  zl.set(o0(n.guid), !1);
}
export function $$er2(e) {
  let t = getSingletonSceneGraph();
  if (!t.getInternalCanvas()) return;
  let n = e.map(e => {
    if (e.type !== K$p.USER_MESSAGE) return null;
    let {
      imports
    } = MK(e.textContent);
    return imports && imports.length !== 0 ? imports.map(e => e.type === 'node' && e.communityAttribution ? e.communityAttribution : null).filter(e => !!e) : null;
  }).filter(e => !!e).flat().filter((e, t, n) => t === n.findIndex(t => t.hubFileId === e.hubFileId));
  let a = zl.get(nM);
  let l = _$$W(a, NJ, _$$e);
  Hq.system('update-attributions', () => {
    if (!l) {
      let e = glU?.createNewCodeFile(SE, '', null, !1);
      if (!e || !(l = t.get(e))) return;
    }
    let e = _$$t('figmake.chat.unsplash_attribution.attribution_comment');
    let r = [_$$t('figmake.chat.shadcn_attribution.attribution_comment'), e, ...n.map(e => e ? _$$t('figmake.chat.community_attribution.attribution_comment', {
      creatorName: e.creatorName,
      hubFileName: e.hubFileName,
      hubFileLink: `${getInitialOptions().figma_url}${X$(e.hubFileId)}`,
      licenseName: 'CC BY 4.0',
      licenseLink: 'https://creativecommons.org/licenses/by/4.0/'
    }) : null).filter(e => !!e)].join('\n\n');
    l.sourceCode = r;
    Y5.commit();
  });
  gC();
  En();
}
export async function $$ei1({
  userMessageContent: e,
  user: t,
  chatMessagesNode: n,
  rawUserChatDetails: i,
  featureType: l,
  setInput: o,
  fileKey: c,
  autoFixingUserMessageId: d,
  onFinish: m,
  canUseSupabase: f,
  changedFiles: y,
  model: _,
  instanceNode: b
}) {
  try {
    if (throwIf(void 0 !== glU, 'Fullscreen must be defined'), !t || !n) return;
    let m = qE(c, n?.guid || '');
    let j = glU.generateUniqueID();
    d && (j = d);
    let v = Pd(c, n?.guid || '', j);
    c && !d && y && y.length > 0 && getFeatureFlags().bake_manual_edits && function ({
      user: e,
      changedFiles: t,
      chatMessagesNode: n,
      featureType: i,
      fileKey: l
    }) {
      let o = n.chatMessages || [];
      if (o.length === 0) return;
      let c = eB(o) || function () {
        let e = zl.get(yV);
        return e?.name;
      }();
      let d = xD(e, t, void 0, c);
      Hq.ai('add-manual-edit-system-message', () => {
        n.chatMessages = [...o, d];
        Y5.commit();
      });
      let u = ei(i, n);
      let m = Object.fromEntries(Object.entries(i === lV.FIGMAKE ? Hg(nc) : (getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas) && n.codeFilePath ? Hg(nc, u) : o9(n, nc)).map(([e, t]) => [F$(u, e), t.sourceCode]));
      _$$O2({
        fileKey: l,
        codeFiles: m
      }).then(i => {
        i && Hq.ai('enrich-manual-edit-message-with-code-snapshot', () => {
          let s = (n.chatMessages || []).map(n => {
            if (n.id === d.id) {
              let s = U1(n.textContent);
              if (s?.type === 'manual_edit' || s?.type === 'restore') {
                s.codeSnapshot = i;
                return {
                  ...n,
                  textContent: J6(s)
                };
              }
              let a = xD(e, t, i, c);
              return {
                ...n,
                textContent: a.textContent
              };
            }
            return n;
          });
          n.chatMessages = s;
        });
      }).catch(e => {
        console.warn('Failed to create code snapshot for manual edit message:', e);
      });
    }({
      user: t,
      changedFiles: y,
      chatMessagesNode: n,
      featureType: l,
      fileKey: c
    });
    let S = {
      id: j,
      type: K$p.USER_MESSAGE,
      userId: t.id,
      textContent: J6(e),
      sentAt: Date.now(),
      toolCalls: [],
      toolResults: [],
      sentAt64: Date.now().toString()
    };
    b && _$$u.updateCodeSnapshotState(b.guid, Lxv.LLM_IN_PROGRESS, !0, 0, !1);
    await $$en0({
      newMessage: S,
      user: t,
      chatMessagesNode: n,
      rawUserChatDetails: i,
      featureType: l,
      persistentEntityId: m,
      clientLifecycleId: v,
      setInput: o,
      fileKey: c,
      model: _,
      canUseSupabase: f
    });
  } finally {
    m?.();
    b && _$$u.markCodeNodesDirty(new Set([b.guid]));
  }
}
function es() {
  return zl.get(ze);
}
async function ea() {
  let e = es();
  if (!e) return;
  let {
    connectedProject,
    isConnectedNonOwner
  } = await M4.fetch(TT({
    fileKey: e
  }));
  let r = connectedProject?.secrets?.map(e => e.name);
  let i = {
    projectId: connectedProject?.id,
    publicAnonKey: connectedProject?.public_anon_key,
    makeNamespace: connectedProject?.make_namespace,
    isConnectedNonOwner: !!isConnectedNonOwner,
    secrets: r
  };
  i?.projectId && i?.publicAnonKey && i?.makeNamespace && function (e, t, n) {
    let r = getSingletonSceneGraph();
    if (!r.getInternalCanvas()) return;
    let i = zl.get(nM);
    let a = _$$W(i, NJ, `/${o3}`);
    let l = _$$W(i, NJ, `/${Or}`);
    let o = _$$W(i, NJ, `/${ww}`);
    Hq.system('create-supabase-starter-files', () => {
      if (l) {
        (zl.get(W) !== e || zl.get(V) !== t) && (l.sourceCode = OP(e, t));
      } else {
        let n = glU?.createNewCodeFile(Or, '', null, !1);
        if (!n) return;
        let i = r.get(n);
        if (!i) return;
        i.sourceCode = OP(e, t);
      }
      if (!a) {
        let t = glU?.createNewCodeFile(o3, '', null, !1);
        if (!t) return;
        let i = r.get(t);
        if (!i) return;
        i.sourceCode = _u(n, e);
      }
      if (!o) {
        let e = glU?.createNewCodeFile(ww, '', null, !1);
        if (!e) return;
        let t = r.get(e);
        if (!t) return;
        t.sourceCode = mE(n);
      }
      Y5.commit();
      zl.set(W, e);
      zl.set(V, t);
    });
  }(i.projectId, i.publicAnonKey, i.makeNamespace);
  _$$r();
  return i;
}
export const yc = $$en0;
export const Oz = $$ei1;
export const z9 = $$er2;