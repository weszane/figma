import { NC } from '../905/17179'
import { d as _$$d } from '../905/91820'
import { to } from '../905/156213'
import { F } from '../905/302958'
import { t as _$$t } from '../905/303541'
import { n as _$$n } from '../905/347702'
import { nF } from '../905/350402'
import { OpenTarget } from '../905/380844'
import { Ek } from '../905/553831'
import { s as _$$s2 } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { Ay } from '../905/612521'
import { to as _$$to } from '../905/612685'
import { serializeQuery } from '../905/634134'
import { x1 } from '../905/714362'
import { o as _$$o } from '../905/721794'
import { oA } from '../905/723791'
import { Xm } from '../905/760074'
import { WB } from '../905/761735'
import { FB } from '../905/784363'
import { XHR } from '../905/910117'
import { debounce } from '../905/915765'
import { zCd } from '../figma_app/43951'
import { isDevEnvironment } from '../figma_app/169182'
import { PN } from '../figma_app/257275'
import { ds } from '../figma_app/314264'
import { Lb } from '../figma_app/323326'
import { Ns, TP, yT } from '../figma_app/349248'
import { Dk, wY } from '../figma_app/623293'
import { d6 } from '../figma_app/687776'
import { Ez5 } from '../figma_app/763686'
import { S as _$$S } from '../figma_app/787550'
import { Ul } from '../figma_app/841351'
import { eD } from '../figma_app/876459'

export let $$F21 = {
  key: 'showDiagramOnboarding',
  value: '1',
}
export function $$j17(e) {
  return void 0 !== e.file_repo
}
export function $$U1(e, t) {
  return XHR.put(`/api/files/${e}/thumbnail_guid`, {
    thumbnail_guid: t,
  }).then(() => {
    Ez5?.canvasViewState().thumbnailNodeId.set(t)
  })
}
let $$B18 = nF((e, t) => {
  t.file.created_at && console.error('It looks like you are PUT-ting to the API with the entire file object; please only pass the key and file permission attributes')
  let r = _$$S.putFile(t).then(() => {
    t.onSuccess?.()
  }).catch((r) => {
    if (t.onError?.(), e.dispatch(F.enqueue({
      message: _$$t('file_permissions.generic_error'),
      error: !0,
    })), isDevEnvironment()) {
      throw r
    }
  })
  let n = t.file
  let i = {
    ...Ns(n, n.key),
    ...yT(n, t.linkExpirationConfigId, t.currentUser),
  }
  let a = TP(n, t.linkExpirationConfigId, t.currentUser)
  Object.keys(i).length > 0 && WB().optimisticallyUpdate(i, r)
  a && WB().optimisticallyCreate(a, r)
})
let $$G20 = NC('FILE_PERMISSIONS_PUT')
let $$V11 = nF(async (e, t) => {
  let r = e.getState()
  let i = {}
  let a = t.file
  let s = t.folderId || a.folderId
  let o = !1
  if (s) {
    let e = oA((await Ek(zCd, {
      projectId: s,
    })).project)
    o = !!e && !!a.editorType && d6(e, a.editorType)
  }
  o && (i.folder_id = s)
  t.versionId && (i.version_id = t.versionId)
  e.dispatch(F.enqueue({
    type: 'file_duplicating',
    message: _$$t('visual_bell.duplicating'),
  }))
  XHR.post(`/api/multiplayer/${a.key}/copy?${serializeQuery(i)}`).then((i) => {
    e.dispatch(F.dequeue({}))
    let s = !!r.openFile
    if (!i.data.error && i.data.meta && s) {
      let s = i.data.meta
      if (ds('File Duplicated', a.key, e.getState(), {
        duplicatedFileKey: s.key,
        duplicatedContainingFolderId: s.folder_id,
        duplicatedFileTeamId: s.team_id,
        source: t.source,
      }), t.checkOssSalesExperiment && Lb(s.key), eD) {
        eD.openFile({
          fileKey: s.key,
          title: s.name,
          fileEditorType: s.editor_type,
          target: OpenTarget.FOCAL_TAB,
          isBranch: Xm(s),
          isLibrary: !!s.last_published_at,
          isTeamTemplate: !1,
          userId: r.user?.id,
        })
        return
      }
      Ay.redirect(_$$to(s), '_blank')
    }
  }).catch(() => {
    e.dispatch(F.dequeue({}))
    e.dispatch(_$$s2.error(_$$t('file_browser.file_browser_actions.file_copy_error')))
  })
})
let $$H14 = nF((e, t) => {
  let r = t.file_key
  r && (e.getState().fileByKey[r] || _$$S.getFiles({
    fileKey: r,
  }).then(t => e.dispatch($$es23({
    file: t.data.meta,
  }))))
})
let $$z19 = nF(async (e, t) => {
  try {
    await XHR.del(`/api/files/${t.file_key}/workshop`)
  }
  catch (e) { }
})
let $$W7 = nF(async (e, t, {
  liveStore: r,
}) => {
  let n = await r.fetchFile(t.fileKey)
  let i = XHR.post(`/api/files/${t.fileKey}/workshop`).then(() => {
    e.dispatch(F.enqueue({
      message: _$$t('whiteboard.open_sessions.open_session_started_notification'),
      button: {
        text: _$$t('whiteboard.open_sessions.open_session_started_notification_copy_link'),
        action: () => {
          e.dispatch($$Z8({
            fileKey: t.fileKey,
            url: _$$to(n),
            source: _$$d.WORKSHOP_VISUAL_BELL,
          }))
        },
      },
    }))
  }).catch(() => {
    e.dispatch(F.enqueue({
      message: _$$t('whiteboard.open_sessions.open_session_start_failed_notification'),
      error: !0,
    }))
  })
  let a = e.getState().user?.id
  if (a) {
    let e = new Date()
    e.setDate(e.getDate() + 1)
    WB().optimisticallyCreate({
      FigFileWorkshopMode: {
        [`optimistic-${t.fileKey}`]: {
          fileKey: t.fileKey,
          expiresAt: e,
          userId: a,
        },
      },
    }, i)
  }
})
let $$K2 = nF(async (e, t) => {
  await XHR.post(`/api/files/${t.fileKey}/view`).then(({
    data: r,
  }) => {
    let {
      last_view_at,
      last_edit_at,
    } = r.meta
    e.dispatch(FB({
      lastViewed: last_view_at,
      lastEdited: last_edit_at,
    }))
    e.dispatch(Ul({
      openFileKey: t.fileKey,
      versionHistory: e.getState().versionHistory,
    }))
  }).catch((e) => {
    x1('recent files', 'Error marking file view / retrieving last seen times', {
      error: e,
    })
  })
})
let $$Y0 = nF((e, t) => {
  $$U1(t.file_key, t.thumbnail_guid).then(() => {
    let r = getFeatureFlags().dse_library_pg_thumbnails ? t.thumbnail_guid ? _$$t('file_browser.file_browser_actions.file_thumbnail_set') : _$$t('file_browser.file_browser_actions.default_file_thumbnail_restored') : t.thumbnail_guid ? _$$t('file_browser.file_browser_actions.thumbnail_set') : _$$t('file_browser.file_browser_actions.default_thumbnail_restored')
    e.dispatch(F.enqueue({
      message: r,
    }))
  }).catch(() => {
    e.dispatch(F.enqueue({
      message: _$$t('file_browser.error_try_again'),
      error: !0,
    }))
  })
})
let $$$6 = NC('FILE_RESTORE')
let $$X9 = nF((e, t) => {
  let {
    fileKey,
    version,
  } = t
  let i = e.getState().versionHistory.versions.filter(e => e.created_at).sort((e, t) => e.created_at < t.created_at ? -1 : 1)
  let a = i.findIndex(e => e.id === version.id)
  if (a === -1 || a === 0) {
    e.dispatch(_$$s2.error('Unable to find version to restore'))
    return
  }
  let s = i[a - 1]
  s
    ? e.dispatch($$$6({
      fileKey,
      versionId: s.id,
    }))
    : e.dispatch(_$$s2.error('Unable to find version to restore'))
})
let $$q12 = nF((e, t) => {
  Dk(t.embedCode).then(() => {
    ds('Embed Code Copied', t.fileKey, e.getState())
    e.dispatch(F.enqueue({
      type: 'embeded_code_copied_to_clipboard',
      message: _$$t('file_browser.file_browser_actions.embed_code_copied'),
    }))
  }).catch(() => {
    e.dispatch(_$$s2.error(_$$t('file_browser.file_browser_actions.embed_code_copy_error')))
  })
})
function J(e, t) {
  let r
  let n = t.visualBellTypeOverride ?? 'link_copied_to_clipboard'
  let i = t.visualBellExtras ?? {}
  r = t.visualBellMessageComponentKeyOverride
    ? {
      type: n,
      messageComponentKey: t.visualBellMessageComponentKeyOverride,
      button: t.visualBellButton,
      ...i,
    }
    : {
      type: n,
      message: t.visualBellMessageOverride ?? _$$t('copy_to_clipboard.link_copied_to_clipboard'),
      button: t.visualBellButton,
      ...i,
    }
  e.dispatch(F.enqueue(r))
}
let $$Z8 = _$$n(nF((e, t) => {
  let r
  let n = t.url
  let i = t.label
  if (i) {
    let e = document.createElement('a')
    e.href = n
    e.innerText = i
    let t = e.outerHTML
    r = wY(t, n)
  }
  else {
    r = Dk(n)
  }
  r.then(() => {
    ds('File Share Link Copied', t.fileKey, e.getState(), {
      copyLinkSource: _$$d[t.source],
      ...t.trackingProperties,
    })
    t.skipVisualBell || J(e, t)
  }).catch(() => {
    t.showVisualBellOnErrorForInteractionTests && PN()
      ? J(e, t)
      : e.dispatch(to({
        type: _$$o,
        data: {
          link: n,
        },
      }))
  })
}))
let Q = e => e.replace(/[\r\n]+/g, ' ')
let $$ee4 = nF((e, t) => {
  let r = Q(t.name)
  if (r.length <= 100) {
    let n = {
      key: t.file.key,
      name: r,
      updated_at: new Date().toISOString(),
    }
    e.dispatch($$es23({
      file: n,
      userInitiated: !0,
    }))
    ds('File Renamed', n.key, e.getState(), {
      fileName: n.name,
    })
  }
})
let $$et13 = NC('FILE_REMOVE_FROM_PROJECT')
let $$er10 = NC('FILE_MOVE')
let $$en15 = NC('FILE_POST')
let $$ei5 = NC('FILE_BATCH_SUBSCRIBE_TO_REALTIME')
let $$ea22 = NC('FILE_BATCH_PUT')
let $$es23 = NC('FILE_PUT')
let eo = debounce((e, t) => {
  let r = t.getState()
  r.activeFileUsers && (e = e.filter(e => !(e in r.activeFileUsers)))
  e.length && XHR.post('/api/active_file_users', {
    keys: e,
  }).then(({
    data: e,
  }) => {
    !(function(e, t, r = !1) {
      let n = t.getState()
      for (let i in e) {
        if (r && n.activeFileUsers && i in n.activeFileUsers)
          continue
        let a = e[i]
        let s = []
        if (a) {
          for (let e in a) {
            let t = JSON.parse(a[e])
            s.push(t)
          }
        }
        t.dispatch($$ed3({
          fileKey: i,
          users: s,
        }))
      }
    }(e.meta.active_file_users, t, !0))
  }).catch((e) => { })
}, 1e3)
nF((e, t) => {
  eo(t.fileKeys, e)
})
let $$el16 = NC('FILE_CLEAR_ACTIVE_USERS')
let $$ed3 = NC('FILE_SET_ACTIVE_USERS')
export const $m = $$Y0
export const FE = $$U1
export const GZ = $$K2
export const Lk = $$ed3
export const Nw = $$ee4
export const PB = $$ei5
export const PF = $$$6
export const Rh = $$W7
export const S = $$Z8
export const SQ = $$X9
export const U2 = $$er10
export const YW = $$V11
export const Yn = $$q12
export const Yp = $$et13
export const ZN = $$H14
export const bE = $$en15
export const c3 = $$el16
export const jO = $$j17
export const og = $$B18
export const rA = $$z19
export const sF = $$G20
export const tX = $$F21
export const uo = $$ea22
export const yJ = $$es23
