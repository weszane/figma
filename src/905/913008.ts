import { reportError, setTagGlobal, SeverityLevel } from '../905/11'
import { showModalHandler } from '../905/156213'
import { ServiceCategories as _$$e } from '../905/165054'
import { isStackOverflowError } from '../905/194389'
import { trackEventAnalytics } from '../905/449184'
import { isActiveAtom } from '../905/617744'
import { logInfo } from '../905/714362'
import { atomStoreManager } from '../figma_app/27355'
import { fullscreenCrashStateAtom } from '../figma_app/276445'
import { bY } from '../figma_app/298277'
import { MEMORY_WARNING_MODAL } from '../figma_app/453508'
import { openFileAtom } from '../figma_app/516028'
import { GLFailureType } from '../figma_app/763686'

export let $$f0 = new class {
  constructor() {
    this._preventEnteringCpp = !1
    this._fullscreenCrashState = 'ok'
  }

  fullscreenCrashed(e, t) {
    if (this._fullscreenCrashState !== 'ok') {
      logInfo('crash', 'crash already reported', {
        'new crash': e,
        'original crash': this._fullscreenCrashState,
      })
      return
    }
    if (t) {
      let t
      logInfo('crash', 'updating crash state', {
        crash: e,
      })
      this._preventEnteringCpp = !0
      this._fullscreenCrashState = e
      atomStoreManager.set(fullscreenCrashStateAtom, e)
      let i = window.FigmaMobile
      i?.dismissMediaLoadingToast && i.dismissMediaLoadingToast()
      e.type === 'oom' && i?.handleAllocationFailure && i.handleAllocationFailure(GLFailureType.WASM_FAILURE)
      let o = bY()
      setTagGlobal('fullscreen_status', 'has_crashed')
      try {
        let e = atomStoreManager.get(openFileAtom)
        t = e?.editorType
      }
      catch (e) {
        reportError(_$$e.CLIENT_PLATFORM, e, {
          tags: {
            severity: SeverityLevel.Minor,
          },
        })
      }
      trackEventAnalytics('Fullscreen Hard Crash', {
        crashType: e.type,
        isMergeModalOpen: atomStoreManager.get(isActiveAtom),
        editorType: t,
        ...o,
      }, {
        forwardToDatadog: !0,
      })
    }
  }

  getFullscreenCrashState() {
    return this._fullscreenCrashState
  }

  preventEnteringCpp() {
    return this._preventEnteringCpp
  }

  fatalCppError(e, t = 'other') {
    t === 'bindings' && window.dispatchEvent(new ErrorEvent('bindingserror', {
      error: e,
    }))
    setTagGlobal('fullscreen_status', 'crash')
    let i = reportError(_$$e.UNOWNED, e, {
      tags: {
        severity: SeverityLevel.Critical,
      },
    })
    setTagGlobal('fullscreen_status', 'has_crashed')
    let r = t === 'oom' ? 'oom' : isStackOverflowError(e) ? 'stack-overflow' : 'other'
    this.fullscreenCrashed({
      type: r,
      sentryId: i,
    }, !0)
  }

  showMemoryCrashModal(e, t, i) {
    if (t) {
      if (!i)
        throw new Error('Trying to dispatch before we\'ve been initialized')
      i.dispatch(showModalHandler({
        type: MEMORY_WARNING_MODAL,
        data: {
          isBranching: !!e.isBranching,
        },
      }))
    }
  }
}()
export const y = $$f0
