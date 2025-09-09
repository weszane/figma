import { getI18nString } from '../905/303541'
import { isSitesFeatureEnabled } from '../905/561485'
import { M4 } from '../905/713695'
import { resourceUtils } from '../905/989992'
import { FileCreationPermissionsView } from '../figma_app/43951'
import { FFileType } from '../figma_app/191312'
import { useSubscription } from '../figma_app/288654'
import { useIsOrgOrEnterprisePlan, useTeamPlanPublicInfo } from '../figma_app/465071'
import { isFigmakeSitesEnabled } from '../figma_app/552876'
import { isCooperFeatureEnabled } from '../figma_app/828186'

/**
 * Types for file creation permissions.
 */
export interface FileCreationReasons {
  result: boolean
  publicDenyReasons: string[]
}

export interface FileCreationPermissions {
  canCreateDesignFileWithReasons: FileCreationReasons
  canCreateFigjamFileWithReasons: FileCreationReasons
  canCreateSlidesFileWithReasons: FileCreationReasons
  canCreateSitesFileWithReasons: FileCreationReasons
  canCreateCooperFileWithReasons: FileCreationReasons
  canCreateFigmakeFileWithReasons: FileCreationReasons
}

/**
 * Returns a shallow copy of file creation permissions.
 * (Original: $$h1)
 */
export function getFileCreationPermissions(permissions: FileCreationPermissions): FileCreationPermissions {
  return {
    canCreateDesignFileWithReasons: permissions.canCreateDesignFileWithReasons,
    canCreateFigjamFileWithReasons: permissions.canCreateFigjamFileWithReasons,
    canCreateSlidesFileWithReasons: permissions.canCreateSlidesFileWithReasons,
    canCreateSitesFileWithReasons: permissions.canCreateSitesFileWithReasons,
    canCreateCooperFileWithReasons: permissions.canCreateCooperFileWithReasons,
    canCreateFigmakeFileWithReasons: permissions.canCreateFigmakeFileWithReasons,
  }
}

/**
 * Maps file types to their creation permissions, considering feature flags.
 * (Original: $$m2)
 */
export function mapFileTypeToPermissions(permissions: FileCreationPermissions) {
  return {
    [FFileType.DESIGN]: permissions.canCreateDesignFileWithReasons,
    [FFileType.WHITEBOARD]: permissions.canCreateFigjamFileWithReasons,
    [FFileType.SLIDES]: permissions.canCreateSlidesFileWithReasons,
    [FFileType.SITES]: isSitesFeatureEnabled() ? permissions.canCreateSitesFileWithReasons : null,
    [FFileType.COOPER]: isCooperFeatureEnabled() ? permissions.canCreateCooperFileWithReasons : null,
    [FFileType.FIGMAKE]: isFigmakeSitesEnabled() ? permissions.canCreateFigmakeFileWithReasons : null,
  }
}

/**
 * Checks if a file type can be created based on permissions.
 * (Original: $$g4)
 */
export function canCreateFileType(permissions: FileCreationPermissions, fileType: FFileType): boolean {
  const perm = mapFileTypeToPermissions(permissions)[fileType]
  return !!perm && perm.result
}

/**
 * Asynchronously checks if a file type can be created for a project.
 * (Original: $$f3)
 */
export async function canCreateFileTypeAsync(projectId: string, fileType: FFileType): Promise<boolean> {
  const { project } = await M4.fetch(FileCreationPermissionsView.Query({ projectId }))
  return !!project && canCreateFileType(project, fileType)
}

/**
 * Checks if any file type can be created.
 * (Original: $$E5)
 */
export function canCreateAnyFileType(permissions: FileCreationPermissions): boolean {
  return Object.values(mapFileTypeToPermissions(permissions)).some(perm => !!perm && perm.result)
}

/**
 * React hook to get project file creation permissions.
 * (Original: $$y6)
 */
export function useProjectFileCreationPermissions(projectId: string) {
  const subscription = useSubscription(FileCreationPermissionsView, { projectId }, { enabled: !!projectId })
  return resourceUtils.useTransform(subscription, res => res.project)
}

/**
 * Returns a localized string for disabled creation buttons based on plan type.
 * (Original: $$b7)
 */
export function getDisabledCreationButtonReason(): string {
  return useIsOrgOrEnterprisePlan(useTeamPlanPublicInfo()).transform(
    isOrgOrEnterprise =>
      isOrgOrEnterprise
        ? getI18nString('file_browser.creation_buttons.disabled_by_organization')
        : getI18nString('file_browser.creation_buttons.disabled_by_team'),
  )
}

/**
 * Utility for generating file creation permissions objects.
 * (Original: $$n0)
 */
export namespace FileCreationPermissionsGenerator {
  /**
   * Generates permissions object from boolean or reasons.
   */
  export function generate(
    value: boolean | FileCreationReasons,
    overrides?: Partial<FileCreationPermissions>,
  ): FileCreationPermissions {
    const toReasons = (v: boolean | FileCreationReasons): FileCreationReasons =>
      typeof v === 'boolean'
        ? { result: v, publicDenyReasons: [] }
        : v

    const base: FileCreationPermissions = {
      canCreateCooperFileWithReasons: toReasons(value),
      canCreateDesignFileWithReasons: toReasons(value),
      canCreateFigjamFileWithReasons: toReasons(value),
      canCreateSlidesFileWithReasons: toReasons(value),
      canCreateSitesFileWithReasons: toReasons(value),
      canCreateFigmakeFileWithReasons: toReasons(value),
    }

    if (overrides) {
      Object.entries(overrides).forEach(([key, val]) => {
        (base as any)[key] = toReasons(val as any)
      })
    }
    return base
  }

  /**
   * Returns enabled permissions.
   */
  export function enabled(): FileCreationPermissions {
    return generate(true)
  }

  /**
   * Returns disabled permissions.
   */
  export function disabled(): FileCreationPermissions {
    return generate(false)
  }
}

// Export refactored names
export const DI = FileCreationPermissionsGenerator
export const VI = getFileCreationPermissions
export const av = mapFileTypeToPermissions
export const bJ = canCreateFileTypeAsync
export const d6 = canCreateFileType
export const f3 = canCreateAnyFileType
export const nt = useProjectFileCreationPermissions
export const qI = getDisabledCreationButtonReason
