import { actorContextTable, connectedPlanRecordTable, connectedPlanTable, connectedPlanUserRecordTable, connectedPlanUserTable, editorTypeLicenseTypeMapTable, fileTable, organizationTable, orgSharedSettingsTable, orgUserTableFields, planConnectionCountTable, planRecordTable, planTable, planUserRecordTable, planUserTable, userTableFields, workspaceSharedSettingsTable } from '../905/435112'
import { DatabaseTableField } from '../905/709183'
import { _B, _Y, Ag, bU, CO, CT, En, G_, iY, PQ, RR, vK, vt, y4 } from '../905/761697'
import { $U, C7, gR, Jj, jp, KC, OL, QR, qT, s$, TO, w_, xX, yo, zb, zx } from '../figma_app/33004'

var $$o0 = (e => (e.INSTANT_APPROVAL = 'instant_approval', e.INSTANT_APPROVAL_IF_AVAILABLE_SEATS = 'instant_approval_if_available_seats', e.MANUAL_APPROVAL = 'manual_approval', e))($$o0 || {})
let l = {
  [_Y.DESIGN]: C7.SHOULD_USE_CONNECTED_PLAN_USER_DESIGN,
  [_Y.WHITEBOARD]: C7.SHOULD_USE_CONNECTED_PLAN_USER_FIGJAM,
  [_Y.SLIDES]: C7.SHOULD_USE_CONNECTED_PLAN_USER_SLIDES,
  [_Y.SITES]: C7.SHOULD_USE_CONNECTED_PLAN_USER_SITES,
  [_Y.FIGMAKE]: C7.SHOULD_USE_CONNECTED_PLAN_USER_FIGMAKE,
}
let d = (e, t, i) => {
  let n = {
    type: 'function',
    name: e,
    meta: i || '',
  }
  return (...e) => ({
    expr: t(...e),
    meta: n,
  })
}
d('isCommunityHubAdmin', () => eB(TO.COMMUNITY_HUB_ADMIN))
d('isCommunityHubReviewer', () => eB(TO.COMMUNITY_HUB_REVIEWER))
let c = d('isApprovedPublicResource', e => [e.publishingStatus, '=', _B.APPROVED_PUBLIC])
d('isDelistedResource', e => [e.publishingStatus, 'in', [_B.DELISTED, _B.DELISTED_CREATOR_STRIPE_DISABLED]])
d('isPendingHubFile', e => [e.publishingStatus, 'in', [_B.PENDING_PUBLIC, _B.PENDING_USER_VISUAL_COMPLIANCE]])
d('isPendingExtension', e => [e.publishingStatus, 'in', [_B.ORG_PRIVATE_PENDING_PUBLIC, _B.PENDING_PUBLIC, _B.PENDING_USER_VISUAL_COMPLIANCE]])
d('isExtensionAuthor', (e, t) => eH([eY([t.profileId, '=', e.profileId]), eY([t.id, '=', e.userId])]))
d('isExtensionCopublisher', (e, t, i) => ez([eY([i.pluginId, '=', e.id]), eY([i.userId, '=', t.id])]))
d('isExtensionAcceptedCocreator', (e, t) => eY([t.profileId, 'in', e.publisherProfileIds]))
d('isOauthAppOwner', (e, t) => eY([t.id, '=', e.userId]))
let u = d('hasUserGroupAccess', (e, t) => {
  let i = zb[e] ?? [e]
  return ez([eB(TO.USER_GROUPS), eK(t), eH(i.map(e => [t.permissions, 'includes', e]))])
})
let p = d('hasRoleOrUserGroupAccess', (e, t, i) => {
  let n = jp(t)
  return n ? eH([P(e, t), ez([eB(TO.USER_GROUPS), u(n, i)])]) : P(e, t)
})
d('isOauthAppDraft', e => [e.approvedOauthAppVersionId, '=', null])
d('isOauthAppApprovedAndPublic', e => ez([[e.approvedOauthAppVersionId, '<>', null], [e.audience, '=', 'public']]))
d('isOauthAppApprovedAndPrivate', e => ez([[e.approvedOauthAppVersionId, '<>', null], [e.audience, '=', '']]))
d('isHubFileAcceptedCocreator', (e, t) => eY([t.profileId, 'in', e.publisherProfileIds]))
let m = d('isPublishedResource', e => [e.unpublishedAt, '=', null])
d('isMonetizedResource', e => [e.monetizedResourceMetadataId, '<>', null])
d('isPublicHubFile', e => ez([c(e), _(e)]))
d('isCommunityResource', e => [e.publishScope, '=', iY.COMMUNITY])
d('isInternalResource', e => [e.publishScope, 'in', [iY.ORG, iY.TEAM]])
let h = [vt.DESIGN_TEMPLATE, vt.FIGJAM_TEMPLATE, vt.PLUGIN, vt.WIDGET, vt.UI_KIT, vt.SLIDE_TEMPLATE, vt.PROTOTYPE, vt.SITE_TEMPLATE, vt.COOPER_TEMPLATE_FILE, vt.COOPER_TEMPLATE_ASSET]
d('isAllowedInCommunityDiscovery', e => [e.resourceType, 'in', h])
d('isFigJamTemplateResource', e => [e.resourceType, '=', vt.FIGJAM_TEMPLATE])
d('isSlideTemplateResource', e => [e.resourceType, '=', vt.SLIDE_TEMPLATE])
d('isCooperTemplateDiscoveryViaResPlatEnabled', () => ez([eB(TO.COOPER)]))
d('isFigmakeTemplateDiscoveryViaCmtyHubEnabled', () => eB(TO.CMTY_MAKE_DISCOVERY))
d('isMakeTemplateDiscoveryEnabled', () => eB(TO.MAKE_TEMPLATE_DISCOVERY))
d('isCooperTemplateFileResource', e => [e.resourceType, '=', vt.COOPER_TEMPLATE_FILE])
d('isCooperTemplateAssetResource', e => [e.resourceType, '=', vt.COOPER_TEMPLATE_ASSET])
d('isSiteTemplateResource', e => [e.resourceType, '=', vt.SITE_TEMPLATE])
d('isFigmakeTemplateResource', e => [e.resourceType, '=', vt.FIGMAKE_TEMPLATE])
d('isExtensionResource', e => [e.resourceType, 'in', [vt.PLUGIN, vt.WIDGET]])
let g = (e, t) => [e, 'hasPermission', t]
let f = d('isBlockedExtension', e => eH([[e.blockedAt, '<>', null], [e.publishingStatus, '=', _B.BLOCKED]]))
d('isOrgPrivateResource', e => ez([[e.publishingStatus, 'in', [_B.ORG_PRIVATE, _B.ORG_PRIVATE_PENDING_PUBLIC]]]))
d('doesExtensionBelongToOrg', (e, t) => eY([t.id, '=', e.orgId]))
d('isPublicExtension', e => ez([c(e), m(e), eW(f(e))]))
let _ = d('isVerifiedHubFile', e => eH([ez([eB(TO.COMMUNITY_HUB_IMAGE_INSPECTION), m(e), [e.contentVerifiedAt, '<>', null]]), eW(y(e))]))
d('userHasPaidForHubFile', (e, t, i) => ez([eK(t), eK(i), eY([t.id, '=', i.userId]), ez([[i.monetizedResourceMetadataId, '<>', null], eY([i.monetizedResourceMetadataId, '=', e.monetizedResourceMetadataId])]), A(i)]))
let A = d('isActivePurchase', e => [e.isActive, '=', !0])
d('hasPurchased', e => eH([[e.status, 'in', ['succeeded', 'refunded', 'canceled']], [e.status, 'in', [1, 2, 3]]]))
let y = d('isBlockedHubFile', e => [e.publishingStatus, '=', _B.BLOCKED])
d('isWhiteboardHubFile', e => [e.viewerMode, '=', y4.WHITEBOARD])
d('isSiteTemplateHubFile', e => [e.viewerMode, '=', y4.SITE_TEMPLATE])
let b = d('isWhiteboardFile', e => [e.editorType, '=', _Y.WHITEBOARD])
let v = d('isDesignFile', e => eH([[e.editorType, '=', _Y.DESIGN], [e.editorType, '=', null]]))
let I = d('isFigJamFile', e => b(e))
let E = d('isSlidesFile', e => [e.editorType, '=', _Y.SLIDES])
let x = d('isBuzzFile', e => ez([eB(TO.COOPER), [e.editorType, '=', _Y.COOPER]]))
let S = d('isSitesFile', e => [e.editorType, '=', _Y.SITES])
let w = d('isFigmakeFile', e => [e.editorType, '=', _Y.FIGMAKE])
d('isSlidesOrBuzzOrFigJamFile', e => eH([E(e), x(e), I(e)]))
d('isDesignOrSlidesOrSitesOrBuzzOrFigmakeFile', e => eH([v(e), E(e), S(e), x(e), w(e)]))
d('isDesignOrSlidesOrSitesOrBuzzOrFigmakeFile', e => eH([v(e), E(e), S(e), x(e), w(e), I(e)]))
d('isPersonalDraftsFile', e => ez([eK(e), [e.teamId, '=', null], [e.orgId, '=', null]]))
let C = d('_deprecated_isMember', e => [e.permission, 'in', [vK.MEMBER, vK.ADMIN]])
d('isWorkspaceMember', (e, t) => ({
  and: [eK(t), eK(e), C(t), [e.permission, 'in', [vK.MEMBER, vK.ADMIN]]],
}))
let T = d('isPlanUserWorkspaceMember', (e, t) => ({
  and: [eK(t), eK(e), k(t), [e.permission, 'in', [vK.MEMBER, vK.ADMIN]]],
}))
let k = d('isPlanMember', e => [e.permission, 'in', [En.MEMBER, En.ADMIN]])
d('_deprecated_isOrgAdmin', e => [e.permission, '=', vK.ADMIN])
d('isPlanAdmin', e => [e.permission, '=', En.ADMIN])
d('hasWorkspacePermissionInWorkspace', (e, t, i) => ez([[e.id, '<>', null], eY([e.id, '=', t.workspaceId]), [t.permission, 'in', i]]))
d('hasWorkspacePermissionInTeam ', (e, t, i) => ez([[e.workspaceId, '<>', null], eY([e.workspaceId, '=', t.workspaceId]), [t.permission, 'in', i]]))
d('hasRequiredOrgAccess', (e, t) => ({
  and: [[e.orgAccess, '<>', null], [e.orgAccess, 'in', t.map(e => e.toString())]],
}))
let R = d('isViewOnlyOrInviteOnly', e => ({
  or: [[e.viewOnlyAt, '<>', null], [e.inviteOnlyAt, '<>', null]],
}))
let N = d('isInviteOnly', e => [e.inviteOnlyAt, '<>', null])
let P = d('hasRoleAccess', (e, t) => [e.level, '>=', t])
let O = d('hasOwnerRoleAccess', e => [e.level, '=', yo])
d('userInViewTeamUserGroupOnFolder', (e, t, i) => i
  ? {
    and: [p(t, gR, i), D(e)],
  }
  : {
    and: [P(t, gR), D(e)],
  })
d('userInFolderViewAudience', (e, t, i) => ({
  and: [eK(e), eH([ez([k(t), [e.sharing_audience_control, 'in', ['org_view', 'org_edit']]]), ez([T(i, t), [e.sharing_audience_control, 'in', ['workspace_view', 'workspace_edit']]])])],
}))
let D = d('folderHasAtLeastViewTeam', e => ({
  and: [eK(e), eW(N(e))],
}))
let L = d('folderHasAtLeastEditTeam', e => ({
  and: [eK(e), eW(R(e))],
}))
d('userInEditTeamUserGroupOnFolder', (e, t, i) => i
  ? {
    and: [p(t, zx, i), L(e)],
  }
  : {
    and: [P(t, zx), L(e)],
  })
d('userInFolderEditAudience', (e, t, i) => ({
  and: [eK(e), eH([ez([k(t), [e.sharing_audience_control, '=', 'org_edit']]), ez([T(i, t), [e.sharing_audience_control, '=', 'workspace_edit']])])],
}))
let F = d('isOrphanedOrgProject', (e, t, i) => ({
  and: [eK(i), eW(eK(t)), eW(eN(e))],
}))
d('canManageFolderLifecycle', (e, t, i, n, r, s) => eH([ez([eK(t), p(n, zx, s), g(Jj.FOLDER, C7.CAN_EDIT)]), ez([eW(eK(t)), F(e, t, r), g(Jj.FOLDER, C7.CAN_EDIT)]), ez([eW(eK(t)), eW(F(e, t, r)), O(i)])]))
let M = d('_deprecated_isProTeam', e => ({
  and: [[e.id, '<>', null], [e.orgId, '=', null], eH([ez([[e.id, '<>', null], [e.subscription, '<>', null], [e.subscription, '<>', 'incomplete']]), ez([[e.id, '<>', null], [e.gracePeriodEnd, '>', {
    type: 'func',
    name: 'now',
  }]])])],
}))
let j = d('isOrgTeam', e => ({
  and: [[e.id, '<>', null], [e.orgId, '<>', null]],
}))
d('isStudent', e => [e.studentValidatedAt, '<>', null])
let U = d('_deprecated_isStudentTeam', e => [e.studentTeamAt, '<>', null])
d('isStudentPlan', e => [e.tier, '=', Ag.STUDENT])
d('isProPlan', e => [e.tier, '=', Ag.PRO])
d('isEduGracePeriodExpired', e => [e.createdAt, '<', {
  type: 'func',
  name: 'now',
  offset: -604800,
}])
d('isInviteExpired', e => [e.updatedAt, '<=', {
  type: 'func',
  name: 'now',
  offset: -2592e3,
}])
d('isOpenOrgTeam', e => ({
  and: [[e.orgId, '<>', null], [e.orgAccess, '=', bU.PUBLIC]],
}))
d('isNonSecretOrgTeam', e => ({
  and: [eK(e), [e.orgAccess, '<>', bU.SECRET]],
}))
let B = d('isStarterTeam', e => eW(eH([j(e), M(e), U(e)])))
d('isProOrStudentPlan', e => eH([[e.tier, '=', Ag.STUDENT], [e.tier, '=', Ag.PRO]]))
d('isRestrictedFileExportSetting', e => eH([[e.fileExportSetting, '=', RR.BANNED], ez([[e.fileExportSetting, '=', RR.MEMBERS_ONLY], eW(eF(planUserTable))])]))
d('isTrueBasedOnSharedContainerSetting', (e, t) => eH([ez([eK(workspaceSharedSettingsTable), t(workspaceSharedSettingsTable)]), ez([eK(orgSharedSettingsTable), ek(workspaceSharedSettingsTable, e), t(orgSharedSettingsTable)])]))
d('hasValidFilePasswordAuthIfNecessary', (e, t, i, n) => G(e, t, i, n, z))
d('hasValidProtoPasswordAuthIfNecessary', (e, t, i, n) => G(e, t, i, n, H))
let V = d('hasValidPasswordAuth', (e, t) => ez([eY([e.passwordVersion, '=', t.version]), [e.createdAt, '>', {
  type: 'func',
  name: 'now',
  offset: -79200,
}]]))
let G = d('hasValidPasswordAuthIfNecessary', (e, t, i, n, r) => ({
  or: [ez([eW(eU(e)), r(e)]), ez([eU(e), r(t)]), V(i, n)],
}))
let z = d('noFileLinkPasswordSet', e => eW(ez([eK(e), [e.hasFileLinkPassword, '=', !0]])))
let H = d('noProtoLinkPasswordSet', e => eW(ez([eK(e), [e.hasProtoLinkPassword, '=', !0]])))
let W = d('orgUserHasDesignPaidStatusOnFile', (e, t, i, n) => ({
  and: [v(e), eK(t), [t.accountType, i, n]],
}))
let K = d('orgUserHasDevModePaidStatusOnFile', (e, t, i, n) => ({
  and: [v(e), eK(t), [t.devModePaidStatus, i, n]],
}))
d('hasPendingAccountTypeRequestForFile', (e, t, i) => ({
  or: [ez([v(e), eK(t), [t.status, '=', 'pending']]), ez([b(e), eK(i), [i.status, '=', 'pending']])],
}))
let Y = d('isBundlesEnabledForPlan', e => ez([[e.campfireModelEnabledAt, '<>', null], [e.campfireModelEnabledAt, '<=', {
  type: 'func',
  name: 'now',
}]]))
let q = d('isConnectEnabledForPlan', e => ez([eK(e), eH([[e.featureFlagFcPlanEnabled, '=', !0], eB(TO.FC_PLAN_ENABLED)])]))
d('isBakeEnabledForPlan', e => eH([eW(eB(TO.BAKE_CHECK_PLAN)), ez([eK(e), eH([[e.featureFlagBakePlanEnabled, '=', !0], eB(TO.BAKE_PLAN_ENABLED)])])]))
d('isBakeMonetizationEnabledForPlan', e => ez([eK(e), eH([[e.featureFlagBakeMonetizationPlan, '=', !0], eB(TO.BAKE_MONETIZATION_PLAN)])]))
d('isCampfireProvisionalAccessFFEnabledForPlan', e => ez([eK(e), [e.campfireProvisionalAccessEnabled, '=', !0]]))
let $ = d('postBillingRemodelPermissions', e => ez([eK(e), eH([Y(e), eB(TO.CAMPFIRE)])]))
function Z(e, t) {
  return e$({
    ifExpr: eB(TO.PV2_LOADABLE_EDITOR_LICENSE_TYPE_MAPPING),
    thenExpr: eA(e.licenseTypes, t, !0),
    elseExpr: [e.licenseTypes, 'includes', t],
  })
}
function X(e, t, i) {
  return eH([ev(t, i), Q(e, i)])
}
let Q = d('_planHasProductTrialForEditorType', (e, t) => {
  let i = [eB(TO.PRODUCT_TRIALS_LG), e$({
    ifExpr: eB(TO.PV2_LOADABLE_EDITOR_LICENSE_TYPE_MAPPING),
    thenExpr: eA(e.activeTrialLicenseTypes, t),
    elseExpr: [e.activeTrialLicenseTypes, 'includes', t],
  })]
  t === _Y.FIGMAKE && i.push(eB(TO.PRODUCT_TRIALS_FIGMAKE))
  return ez(i)
})
let J = d('_planHasProductTrialForLicenseType', (e, t) => {
  let i = [eB(TO.PRODUCT_TRIALS_LG), eK(e), eq([e.activeTrialLicenseTypes, 'includes', t])]
  t === G_.FIGMAKE ? i.push(eB(TO.PRODUCT_TRIALS_FIGMAKE)) : t instanceof DatabaseTableField && i.push(eH([[t, '<>', G_.FIGMAKE], eB(TO.PRODUCT_TRIALS_FIGMAKE)]))
  return ez(i)
})
let ee = d('_planHasProductTrialForEditorTypeRef', (e, t) => ez([eB(TO.PRODUCT_TRIALS_LG), e$({
  ifExpr: eB(TO.PV2_LOADABLE_EDITOR_LICENSE_TYPE_MAPPING),
  thenExpr: ey(e.activeTrialLicenseTypes, t),
  elseExpr: eY([e.activeTrialLicenseTypes, 'includes', t]),
}), eH([[t, '<>', _Y.FIGMAKE], eB(TO.PRODUCT_TRIALS_FIGMAKE)])]))
let et = d('_planUserHasProvisionalAccessForEditorTypeRef', (e, t) => ez([eK(e), e$({
  ifExpr: eB(TO.PV2_LOADABLE_EDITOR_LICENSE_TYPE_MAPPING),
  thenExpr: ey(e.provisionalLicenseTypes, t),
  elseExpr: eY([e.provisionalLicenseTypes, 'includes', t]),
})]))
let ei = d('_hasBundleLicenseForEditorType', (e, t) => ez([eK(e), Z(e, t)]))
let en = d('_hasBundleLicenseForLicenseType', (e, t) => ez([eK(e), eq([e.licenseTypes, 'includes', t])]))
let er = d('planUserHasTemporaryAccess', (e, t, i) => ez([$(e), eK(t), X(e, t, i)]))
let ea = d('planUserLacksBundleLicense', (e, t, i) => ez([$(e), eK(t), eW(Z(t, i))]))
d('planUserLacksTemporaryAccess', (e, t, i) => ez([$(e), eK(t), eW(X(e, t, i))]))
let es = d('_planUserHasDesignLicense', (e, t) => eH([[e.tier, '=', Ag.STARTER], ez([eW($(e)), [t.designPaidStatus, '=', CO.FULL]]), ei(t, _Y.DESIGN)]))
d('planUserHasDesignLicense', (e, t) => eH([es(e, t), er(e, t, _Y.DESIGN)]))
let eo = d('_planUserHasFigjamLicense', (e, t) => eH([[e.tier, '=', Ag.STARTER], ez([eW($(e)), [t.whiteboardPaidStatus, '=', CO.FULL]]), ei(t, _Y.WHITEBOARD)]))
d('planUserFigjamLicense', (e, t) => eH([eo(e, t), er(e, t, _Y.WHITEBOARD)]))
d('planUserHasDevModeLicense', (e, t) => eH([[e.tier, '=', Ag.STARTER], ez([eW($(e)), [t.devModePaidStatus, '=', CO.FULL]]), eE(e, t, G_.DEV_MODE)]))
let el = d('_planUserHasSlidesLicense', (e, t) => eH([[e.tier, '=', Ag.STARTER], eW($(e)), ei(t, _Y.SLIDES)]))
d('planUserHasSlidesLicense', (e, t) => eH([el(e, t), er(e, t, _Y.SLIDES)]))
let ed = d('_planUserHasBuzzLicense', (e, t) => eH([[e.tier, '=', Ag.STARTER], eW($(e)), ei(t, _Y.COOPER)]))
d('planUserHasBuzzLicense', (e, t) => eH([ed(e, t), er(e, t, _Y.COOPER)]))
let ec = d('_planUserIsDesignRestricted', (e, t) => ez([eH([ez([eW($(e)), [t.designPaidStatus, '=', CO.RESTRICTED]]), ea(e, t, _Y.DESIGN)]), [e.tier, '<>', Ag.STARTER]]))
d('planUserIsDesignRestricted', (e, t) => ez([ec(e, t), eW(er(e, t, _Y.DESIGN))]))
let eu = d('_planUserIsSlidesRestricted', (e, t) => ez([ea(e, t, _Y.SLIDES), [e.tier, '<>', Ag.STARTER]]))
let ep = d('_planUserIsSitesRestricted', (e, t) => ez([ea(e, t, _Y.SITES), [e.tier, '<>', Ag.STARTER]]))
let em = d('_planUserIsSitesRestricted', (e, t) => ez([ea(e, t, _Y.FIGMAKE), [e.tier, '<>', Ag.STARTER]]))
d('planUserIsSlidesRestricted', (e, t) => ez([eu(e, t), eW(er(e, t, _Y.SLIDES))]))
let eh = d('planUserIsSitesRestricted', (e, t) => ez([ep(e, t), eW(er(e, t, _Y.SITES))]))
d('planUserIsFigmakeRestricted', (e, t) => ez([em(e, t), eW(er(e, t, _Y.FIGMAKE))]))
d('planUserIsFigmakePublishRestricted', (e, t) => ez([eh(e, t), eW(ev(t, _Y.SITES)), eW(Q(e, _Y.FIGMAKE))]))
let eg = d('_planUserIsFigjamRestricted', (e, t) => ez([eH([ez([eW($(e)), [t.whiteboardPaidStatus, '=', CO.RESTRICTED]]), ea(e, t, _Y.WHITEBOARD)]), [e.tier, '<>', Ag.STARTER]]))
d('planUserIsFigjamRestricted', (e, t) => ez([eg(e, t), eW(er(e, t, _Y.WHITEBOARD))]))
let ef = d('_planUserHasBundleLicenseForEditorTypeRef', (e, t, i) => ez([$(e), eK(t), e$({
  ifExpr: eB(TO.PV2_LOADABLE_EDITOR_LICENSE_TYPE_MAPPING),
  thenExpr: ey(t.licenseTypes, i, !0),
  elseExpr: eH([eY([t.licenseTypes, 'includes', i]), [i, '=', _Y.COOPER]]),
})]))
let e_ = d('_planUserHasTemporaryAccessForEditorTypeRef', (e, t, i) => ez([$(e), eK(t), eH([et(t, i), ee(e, i)])]))
let eA = d('_hasLicenseForEditorType', (e, t, i = !1) => i ? eH([[editorTypeLicenseTypeMapTable[t], '=', null], eY([e, 'includes', editorTypeLicenseTypeMapTable[t]])]) : ez([[editorTypeLicenseTypeMapTable[t], '<>', null], eY([e, 'includes', editorTypeLicenseTypeMapTable[t]])]))
let ey = d('_hasLicenseForEditorTypeRef', (e, t, i = !1) => eH(Object.values(_Y).map(n => ez([[t, '=', n], eA(e, n, i)]))))
let eb = d('_planUserLacksTemporaryAccessForFile', (e, t, i) => ez([$(e), eW(et(t, i.editorType)), eW(ee(e, i.editorType))]))
let ev = d('planUserHasProvisionalAccess', (e, t) => e$({
  ifExpr: eB(TO.PV2_LOADABLE_EDITOR_LICENSE_TYPE_MAPPING),
  thenExpr: eA(e.provisionalLicenseTypes, t),
  elseExpr: [e.provisionalLicenseTypes, 'includes', t],
}))
d('planUserHasLicenseForEditorTypeRef', (e, t, i) => eH([ef(e, t, i), e_(e, t, i)]))
d('planUserLacksPaidStatusOnFile', (e, t, i, r, a) => eH([ez([eW($(t)), eI(e, t, i, r, a)]), ez([$(t), ez([eI(e, t, i, '<>', CO.FULL), eb(t, i, e)])])]))
let eI = d('_planUserHasBundlePaidStatusOnFile', (e, t, i, r, a) => {
  let s = r === '=' ? a === CO.FULL : a !== CO.FULL
  let o = [{
    and: [v(e), eK(i), [i.designPaidStatus, r, a], eK(t), [t.tier, '<>', Ag.STARTER]],
  }, {
    and: [I(e), eK(i), [i.whiteboardPaidStatus, r, a], eK(t), [t.tier, '<>', Ag.STARTER]],
  }]
  s && (o.push({
    and: [E(e), eK(i)],
  }), o.unshift({
    and: [eK(t), [t.tier, '=', Ag.STARTER]],
  }))
  let l = []
  r === '=' && a === CO.FULL || r === '<>' && a !== CO.FULL ? l.push(eH([ez([eK(t), [t.tier, '=', Ag.STARTER]]), ef(t, i, e.editorType)])) : l.push(ez([eW(ef(t, i, e.editorType)), eK(t), [t.tier, '<>', Ag.STARTER]]))
  return {
    or: [ez([eW($(t)), eH(o)]), ez([$(t), eH(l)])],
  }
})
d('withResolvedHostOrConnectedPlan', (e, t, i) => ({
  or: [ez([d('useHostPlan', () => eW(e))(), d('hostPlanBranch', () => t(planTable, planUserTable))()]), ez([d('useConnectedPlan', () => e)(), d('connectedPlanBranch', () => i || t(connectedPlanTable, connectedPlanUserTable))()])],
}), 'INFO: This is a refactoring tool specific to Figma Connect, which is under development. To debug, unfurl this permission until `hostPlanBranch`. This clause contains the status quo logic.')
d('isConnectedGuest', () => ({
  and: [eB(TO.FC_GENERAL), q(connectedPlanTable), eK(connectedPlanUserTable)],
}))
d('withResolvedHostOrConnectedPlanV2', (e, t, i) => ({
  or: [ez([d('useHostPlan', () => eW(e))(), d('hostPlanBranch', () => t(planRecordTable, planUserRecordTable))()]), ez([d('useConnectedPlan', () => e)(), d('connectedPlanBranch', () => i || t(connectedPlanRecordTable, connectedPlanUserRecordTable))()])],
}), 'INFO: This is a refactoring tool specific to Figma Connect. To debug, unfurl this permission until `hostPlanBranch`. This clause contains the status quo logic.')
d('shouldUseConnectedPlanUserForFolderAndEditorType', e => ({
  and: [g(Jj.FOLDER, l[e])],
}))
d('isPlanDraftOwner', (e, t, i) => ({
  and: [eN(t), [e.folderId, '<>', null], [i.draftsFolderId, '=', {
    type: 'field',
    ref: e.folderId,
  }]],
}))
d('planUserHasLicenseForEditorType', (e, t, i) => eH([ei(t, i), X(e, t, i)]))
let eE = d('planUserHasLicense', (e, t, i) => eH([en(t, i), (function (e, t, i) {
  return eH([ez([eK(t), eq([t.provisionalLicenseTypes, 'includes', i])]), J(e, i)])
}(e, t, i))]))
d('hasHostOrConnectedPlanLicenseCondition', e => eH([e(planTable, planUserTable), ex(planTable, connectedPlanTable, connectedPlanUserTable, e)]))
d('isConnectedPlanUserCorrectForLicenseCondition', (e, t, i, n, r) => ez([eW(r(e, t)), eH([ex(e, i, n, r), eS(e, t, i, n)])]))
d('hasHostOrConnectedPlanLicenseConditionV2', e => eH([e(planRecordTable, planUserRecordTable), ex(planRecordTable, connectedPlanRecordTable, connectedPlanUserRecordTable, e)]))
let ex = d('hasConnectedPlanLicenseCondition', (e, t, i, n) => ez([q(e), $(e), [e.tierLevel, '>=', s$], eK(t), $(t), q(t), [t.tierLevel, '>=', s$], eK(i), n(t, i)]))
let eS = d('hasHigherConnectedPlanMembership', (e, t, i, n) => ez([eB(TO.FC_GENERAL), q(e), $(e), q(i), $(i), eK(n), ez([eF(n), eW(eF(t))])]))
let ew = d('isTeamUserDesignPaidStatusFull', e => [e.designPaidStatus, '=', CO.FULL])
d('orgContainsDomainFromUserEmail', (e, t) => ({
  and: [eK(t), eK(e), [e.domainCapture, '<>', !0], [e.domainCaptureDomains, '<>', null], [t.email, '<>', null], [t.emailDomain, '<>', null], [t.emailDomain, 'in', {
    type: 'field',
    ref: e.domainCaptureDomains,
  }]],
}))
d('isBigmaOrg', e => [e.bigmaEnabledAt, '<>', null])
d('existsPlan', (e, t) => ({
  or: [eK(e), eK(t)],
}))
d('isAIEnabled', (e, t) => {
  let i = ez([eK(t), [t.aiFeaturesDisabledAt, '=', null]])
  let n = ez([eK(e), [e.aiFeaturesDisabledAt, '=', null]])
  return {
    or: [ez([eK(t), i]), ez([eW(eK(t)), n])],
  }
})
d('isOrgsDraftOwner', (e, t, i) => ({
  and: [eR(e), eN(t), [e.folderId, '<>', null], [i.draftsFolderId, '=', {
    type: 'field',
    ref: e.folderId,
  }]],
}))
d('isTeamDraftOwner', (e, t, i) => ({
  and: [eW(eR(e)), eN(i), [e.folderId, '<>', null], [t.draftsFolderId, '=', {
    type: 'field',
    ref: e.folderId,
  }]],
}))
d('isInWorkshopMode', (e, t) => ({
  and: [I(e), [t.expiresAt, '<>', null], [t.expiresAt, '>=', {
    type: 'func',
    name: 'now',
  }]],
}))
let eC = d('publicLinkHasExpired', (e, t) => ez([[t.bigmaEnabledAt, '<>', null], [e.expiresAt, '<>', null], [e.accessReverted, '=', !1], [e.expiresAt, '<=', {
  type: 'func',
  name: 'now',
}]]))
let eT = d('isLinkExpirationPrevOrgBrowsableTrue', (e, t) => ez([eC(e, t), [e.prevOrgBrowsable, '=', !0]]))
d('isOrgBrowsable', (e, t, i, n) => ez([eW(eM(e)), g(Jj.FILE, QR.CAN_ORG_VIEW_LINK_ACCESS), eH([ez([eW(ej(fileTable)), [e.orgBrowsable, '=', !0]]), ez([ej(fileTable), [t.orgBrowsable, '=', !0]]), eT(n, i)])]))
d('publicLinkHasActiveExpiration', e => ez([[e.expiresAt, '<>', null], [e.accessReverted, '=', !1], [e.expiresAt, '>', {
  type: 'func',
  name: 'now',
}]]))
d('orgOrWorkspaceEnforcingExpiration', (e, t) => ez([[t.bigmaEnabledAt, '<>', null], eH([[e.publicLinkControlsSetting, '=', w_.EXPIRATION_REQUIRED], [e.publicLinkControlsSetting, '=', w_.EXP_AND_PWD_REQUIRED]])]))
let ek = d('hasNoWorkspaceLevelSetting', (e, t) => eH([eW(eK(e)), ez([eK(e), [t, '=', null]])]))
d('orgOrWorkspaceEnforcingPasswords', (e, t) => eH([[e.publicLinkControlsSetting, '=', w_.PASSWORD_REQUIRED], ez([[t.bigmaEnabledAt, '<>', null], [e.publicLinkControlsSetting, '=', w_.EXP_AND_PWD_REQUIRED]])]))
d('hasFileLinkAccessThroughPrevLink', (e, t, i) => {
  let r = ez([[t.prevPrivateLinkAccess, '<>', null], [t.prevPrivateLinkAccess, 'in', e]])
  return e.includes(PQ.ORG_VIEW) ? ez([eC(t, i), eH([r, ez([eK(t), [t.prevPrivateLinkAccess, '=', null]])])]) : ez([eC(t, i), r])
})
d('hasPrototypeLinkAccessThroughPrevLink', (e, t, i) => ez([eC(t, i), [t.prevPrivateProtoLinkAccess, 'in', e]]))
let eR = d('isOrgFile', e => [e.orgId, '<>', null])
d('fileHasPlanType', (e, t) => t === OL.ORGANIZATION ? [e.orgId, '<>', null] : ez([[e.orgId, '=', null], [e.teamId, '<>', null]]))
d('isOrgDraftsFolder', e => ({
  and: [eN(e), [e.orgId, '<>', null]],
}))
d('isTeamFile', e => [e.teamId, '<>', null])
d('isTeamDraftsFolder', e => ({
  and: [eP(e), eN(e)],
}))
let eN = d('isDraftsFolder', e => [e.path, '=', ''])
let eP = d('isTeamFolder', e => [e.teamId, '<>', null])
d('adminAccessTeamAbandonedDraftsFolder', (e, t, i, n) => ({
  and: [eK(t), [e.isAbandonedDrafts, '=', !0], p(i, KC, n)],
}))
d('canManageRepoFileLifecycle', (e, t) => ({
  and: [ej(e), eW(eM(t)), g(Jj.FILE, QR.CAN_MANAGE)],
}))
d('canManageRepoFileLifecycle', (e, t) => ({
  and: [ej(e), eM(t), g(Jj.FILE, QR.CAN_MANAGE)],
}))
let eO = d('canManageFolderlessFileLifecycle', (e, t, i, n, r, s) => ({
  and: [eW(ej(e)), {
    or: [eW(eK(i)), {
      and: [eK(i), eM(i)],
    }],
  }, {
    or: [{
      and: [eK(n), p(r, zx, s)],
    }, {
      and: [eW(eK(n)), p(t, zx, s)],
    }, p(t, zx, s)],
  }],
}))
let eD = d('canManageFileLifecycle', (e, t, i, n, r, s) => ({
  and: [eW(ej(e)), eK(i), eW(eM(i)), {
    or: [p(n, zx, s), {
      and: [p(r, zx, s), g(Jj.FOLDER, C7.CAN_EDIT)],
    }, {
      and: [O(t), g(Jj.FOLDER, C7.CAN_EDIT)],
    }],
  }],
}))
d('isWorkspaceFile', (e, t) => ({
  and: [[e.teamId, '<>', null], [e.teamId, '=', {
    type: 'field',
    ref: t.id,
  }], [t.workspaceId, '<>', null]],
}))
let eL = d('hasOrgUser', (e, t) => ez([eK(e), eK(t)]))
d('hasTeamUser', (e, t, i, n) => ez([eW(eL(i, n)), ez([eK(e), eK(t)])]))
d('canPlanUserAdmin', e => [e.permission, '=', En.ADMIN])
let eF = d('canPlanUserMember', e => [e.permission, 'in', [En.MEMBER, En.ADMIN]])
d('canPlanUserGuest', e => [e.permission, '=', En.GUEST])
d('hasPlanUser', (e, t, i, n) => eH([ez([eK(e), eK(i)]), ez([eK(t), eK(n)])]))
d('planHasDefaultDesignPaidStatus', (e, t, i) => ez([eK(e), [e.designDefaultPaidStatus, t, i]]))
d('planHasDefaultFigjamPaidStatus', (e, t, i) => ez([eK(e), [e.whiteboardDefaultPaidStatus, t, i]]))
let eM = d('isTrashed', e => [e.trashedAt, '<>', null])
d('planHasDefaultPaidStatus', (e, t, i, n) => {
  let r = e === 'design' ? t.designDefaultPaidStatus : t.whiteboardDefaultPaidStatus
  return ez([eK(t), [r, i, n]])
})
let ej = d('isRepoFile', e => [e.fileRepoId, '<>', null])
let eU = d('isRepoBranch', e => ({
  and: [ej(e), [e.sourceFileKey, '<>', null], [e.sourceFileKey, '<>', {
    type: 'field',
    ref: e.key,
  }]],
}))
d('isRepoMainFile', e => ({
  and: [ej(e), {
    or: [[e.sourceFileKey, '=', null], [e.sourceFileKey, '=', {
      type: 'field',
      ref: e.key,
    }]],
  }],
}))
let eB = d('passesFeatureFlag', e => ez([[actorContextTable.featureFlagsV2, 'includes', e]]))
d('isInOrgDevModeTrial', (e, t, i) => ez([eK(i), W(e, orgUserTableFields, '<>', CO.FULL), K(e, orgUserTableFields, '<>', CO.FULL), [i.status, '=', 'pending'], eY([t.firstDevModeAccountTypeRequestCreatedAt, '=', i.createdAt]), eH([ez([eK(i), [i.gracePeriodExpireAt, '=', null], [i.createdAt, '>', {
  type: 'func',
  name: 'now',
  offset: -259200,
}]]), ez([[i.gracePeriodExpireAt, '<>', null], [i.gracePeriodExpireAt, '>', {
  type: 'func',
  name: 'now',
}]])])]))
d('isInTeamDevModeTrial', (e, t) => ez([eK(t), eW(ew(e)), [t.status, '=', 'pending'], eY([e.devModeTrialStartAt, '=', t.createdAt]), [e.devModeTrialStartAt, '<>', null], eH([ez([eK(t), [t.gracePeriodExpireAt, '=', null], [t.createdAt, '>', {
  type: 'func',
  name: 'now',
  offset: -259200,
}]]), ez([[t.gracePeriodExpireAt, '<>', null], [t.gracePeriodExpireAt, '>', {
  type: 'func',
  name: 'now',
}]])])]))
d('isInStarterTeamDevModeTrial', (e, t) => ez([eK(e), B(e), eK(t), [t.status, '=', 'pending'], [t.createdAt, '>', {
  type: 'func',
  name: 'now',
  offset: -604800,
}]]))
d('isEligibleForTeamDevModeTrial', e => [e.devModeTrialStartAt, '=', null])
d('hasDevModeDemoFileExperience', (e, t) => ez([eH([eB(TO.DEV_MODE_DEMO_FILE), eW(eK(t))]), [e.isDevModeDemoFile, '=', !0]]))
d('hasUserFileRecent', e => ({
  and: [[e.userId, '<>', null], [e.userId, '=', {
    type: 'field',
    ref: userTableFields.id,
  }], [e.fileKey, '<>', null], [e.fileKey, '=', {
    type: 'field',
    ref: fileTable.key,
  }]],
}))
d('isMentionedOnCanvas', e => ({
  and: [eK(e), [e.deletedAt, '=', null]],
}))
d('isInviteRedeemer', e => ({
  and: [eK(e), [e.redeemedBy, '<>', null], [e.redeemedBy, '=', {
    type: 'field',
    ref: userTableFields.id,
  }]],
}))
d('isOriginalInvitee', (e, t) => ({
  and: [eK(e), [e.redeemedBy, '=', null], eK(t), eY([t.id, '=', e.inviteeUserId])],
}))
d('isUserExternalContentRestricted', e => ({
  and: [eK(e), [e.externalRestrictedOrgId, '<>', null], [e.externalRestrictedOrgId, '<>', {
    type: 'field',
    ref: organizationTable.id,
  }]],
}))
d('isUserProfileOwner', (e, t) => ({
  and: [eY([e.profileId, '=', t.id])],
}))
d('isProfilePrimaryUser', (e, t) => ({
  and: [eY([e.primaryUserId, '=', t.id])],
}))
d('isCommunitySeller', (e, t) => ({
  and: [eK(t), eK(e), [e.cmtySellerTosAcceptedAt, '<>', null], [e.stripeConnectedAccountId, '<>', null], [e.sellerChargesEnabledAt, '<>', null], [e.sellerPayoutsEnabledAt, '<>', null]],
}))
d('isResourceAuthor', (e, t) => eY([t.id, '=', e.userId]))
d('isResourceCommunityPublisher', (e, t, i) => ez([eY([i.resourceId, '=', e.id]), eY([i.userId, '=', t.id])]))
let eV = d('userIsBlockedDueToMfaRestrictions', (e, t, i) => ({
  and: [eK(e), eW(eG(e, t)), eH([[e.ssoOnly, '<>', !0], ez([eW([e.samlSsoOnly, '=', !0]), [e.googleSsoOnly, '=', !0], [i.isOrgGuestMfaForGoogleSsoEnabled, '=', !0]]), ez([[e.samlSsoOnly, '=', !0], [i.isOrgGuestMfaForSamlSsoEnabled, '=', !0]])])],
}))
let eG = d('userHasTwoFactorEnabled', (e, t) => ({
  or: [[e.phoneNumberExists, '=', !0], ez([eK(t), [t.totpSecretExists, '=', !0]]), eB(TO.EXEMPT_GUESTS_FROM_MFA_REQUIREMENT)],
}))
function ez(e) {
  return {
    and: e,
  }
}
function eH(e) {
  return {
    or: e,
  }
}
function eW(e) {
  return {
    not: e,
  }
}
d('mfaRequiredForUser', (e, t, i, r) => ({
  and: [eK(e), eH([[t.mfaRequired, '=', CT.GUESTS], [t.mfaRequired, '=', CT.ALL_USERS]]), [e.permission, '=', vK.GUEST], eV(i, r, t)],
}))
d('mfaRequiredForPlanUser', (e, t, i, r) => ({
  and: [eK(e), eH([[t.mfaRequired, '=', CT.GUESTS], [t.mfaRequired, '=', CT.ALL_USERS]]), [e.permission, '=', En.GUEST], eV(i, r, t)],
}))
d('supportTemplatePublish', e => ({
  or: [I(e), E(e), x(e), ez([w(e), eB(TO.MAKE_TEMPLATE_PUBLISHING)])],
}))
d('isProTemplatesEnabled', e => ({
  or: [ez([I(e), eB(TO.PRO_TEMPLATES_FIGJAM)]), ez([E(e)]), ez([x(e)]), ez([w(e), eB(TO.MAKE_TEMPLATE_PUBLISHING)])],
}))
d('hasFileEditRoleOrLinkAccess', (e, t, i, r, s, o, l) => ({
  or: [p(t, zx, l), eD(e, t, i, r, o, l), eO(e, t, i, s, o, l), [e.linkAccess, '=', PQ.EDIT]],
}))
d('hasUnlimitedConnectionsEnabled', e => ({
  or: [ez([[e.tier, '=', Ag.ENTERPRISE], [e.unlimitedConnectionsEnabled, '=', !0]]), [e.testingOnlyUnlimitedConnectionsEnabled, '=', !0]],
}))
d('isAtDefaultTierConnectionLimit', (e, t) => ({
  or: [ez([eK(planConnectionCountTable), eH([ez([[e.tier, '=', Ag.PRO], [t.connectionCount, '>=', xX]]), ez([[e.tier, '=', Ag.ORG], [t.connectionCount, '>=', qT]]), ez([[e.tier, '=', Ag.ENTERPRISE], [t.connectionCount, '>=', $U]])])])],
}))
d('isResourceInSanctionedTeam', e => ({
  or: [[e.teamId, '=', '1442983992810262199'], [e.teamId, '=', '1442984250449655550'], [e.teamId, '=', '976204738221004854'], [e.teamId, '=', '1349665691149011312'], [e.teamId, '=', '1157593711999728731'], [e.teamId, '=', '1412736207880669469'], [e.teamId, '=', '715947566115043839'], [e.teamId, '=', '1022818402920994427'], [e.teamId, '=', '1311613070144405357'], [e.teamId, '=', '1352302789884828065'], [e.teamId, '=', '1444638132051802842'], [e.teamId, '=', '1294626410561961768']],
}))
let eK = e => [e.id, '<>', null]
let eY = (e) => {
  let [t, i, n] = e
  return {
    and: [[t, '<>', null], [t, i, {
      type: 'field',
      ref: n,
    }]],
  }
}
function eq(e) {
  let [t, i, n] = e
  return n instanceof DatabaseTableField ? eY([t, i, n]) : [t, i, n]
}
function e$({
  ifExpr: e,
  thenExpr: t,
  elseExpr: i,
}) {
  return {
    or: [{
      and: [e, t],
    }, {
      and: [eW(e), i],
    }],
  }
}
export const zRx = $$o0
