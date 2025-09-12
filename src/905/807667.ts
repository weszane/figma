import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { debugState } from '../905/407919'
import { loadAllPagesAndTrack } from '../figma_app/582924'
import { PluginModalType } from '../figma_app/763686'
import { un, V_ } from '../figma_app/841351'

export function $$d0(e) {
  let t = debugState.getState()
  if (t.versionHistory.activeId && t.versionHistory.activeId !== V_) {
    switch (e) {
      case PluginModalType.SAVE_LOCAL_COPY:
      case PluginModalType.FIND_AND_REPLACE:
        return un()
      default:
        reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error(`Unexpected reason for loading all pages from version history (${e})`))
        return Promise.resolve()
    }
  }
  return loadAllPagesAndTrack(e)
}
export const q = $$d0
