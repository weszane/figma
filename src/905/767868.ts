import { resourceUtils } from '../905/989992'
import { ProjectNameById } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { getSelectedView } from '../figma_app/386952'
import { getParentOrgIdIfOrgLevel, useCurrentPublicPlan } from '../figma_app/465071'
import { getSidebarPath } from '../figma_app/528509'

export function $$d0(e) {
  let t = useCurrentPublicPlan('useFolderDisplayName').unwrapOr(null)
  let i = getParentOrgIdIfOrgLevel(t)
  let d = getSelectedView().view === 'folder'
  let c = useSubscription(ProjectNameById, {
    projectId: e,
  }, {
    enabled: !!e && !d,
  })
  if (d)
    return resourceUtils.loaded(null)
  if (c.status !== 'loaded')
    return resourceUtils.from(c)
  let u = c.data.project
  return getParentOrgIdIfOrgLevel(u?.planPublicInfo ?? null) !== i ? resourceUtils.loaded(null) : resourceUtils.loaded(u ? getSidebarPath(u) : null)
}
export function $$c1(e) {
  let t = useCurrentPublicPlan('useFolderDisplayNameAndTrashedStatus').unwrapOr(null)
  let i = getParentOrgIdIfOrgLevel(t)
  let d = getSelectedView().view === 'folder'
  let c = useSubscription(ProjectNameById, {
    projectId: e,
  }, {
    enabled: !!e && !d,
  })
  if (d)
    return resourceUtils.loaded(null)
  if (c.status !== 'loaded')
    return resourceUtils.from(c)
  let u = c.data.project
  return getParentOrgIdIfOrgLevel(u?.planPublicInfo ?? null) !== i
    ? resourceUtils.loaded(null)
    : resourceUtils.loaded(u
        ? {
            folderName: getSidebarPath(u),
            isTrashed: !!u?.trashedAt,
          }
        : null)
}
export const l = $$d0
export const p = $$c1
