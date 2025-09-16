import { generateAnnomousPrefill, generateAnonymouseName } from '../905/301652'
import { hasTeamPaidAccess } from '../figma_app/345997'

var $$a1 = (e => (e.ORG_DISABLED = 'ORG_DISABLED', e.TEAM_NOT_PRO = 'TEAM_NOT_PRO', e.CANNOT_EDIT_FILE = 'CANNOT_EDIT_FILE', e.ERROR = 'ERROR', e))($$a1 || {})
export function $$s0(e) {
  let {
    editorType,
    org,
    team,
  } = e
  return !!(editorType === 'whiteboard' && (org && org.workshop_enabled || !org && team && hasTeamPaidAccess(team)))
}
export function $$o3(e) {
  let {
    editorType,
    org,
    team,
    canEdit,
  } = e
  if (editorType !== 'whiteboard')
  ;else if (org && !1 === org.workshop_enabled)
    return 'ORG_DISABLED'; else if (team && !hasTeamPaidAccess(team))
    return 'TEAM_NOT_PRO'; else if (!1 === canEdit)
    return 'CANNOT_EDIT_FILE'
  return 'ERROR'
}
export function $$l2(e, t) {
  localStorage.setItem(generateAnonymouseName(e), t)
  localStorage.setItem(generateAnnomousPrefill(), t)
}
export const M_ = $$s0
export const Q9 = $$a1
export const Vv = $$l2
export const kA = $$o3
