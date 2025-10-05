import { useMemo } from "react"
import { useSelector } from "react-redux"
import { TrackTagsMapper } from "../905/190310"
import { buildFileUrl, getDesignFileUrl, getDesignFileUrlWithOptions } from "../905/612685"
import { getResourceDataOrFallback } from "../905/723791"
import { findBestBranch, findBranchById, generateUrl, getDisplayNameAlt, hasPassword } from "../905/760074"
import { hasPasswordProtectedProtoViewAccess, hasPasswordProtectedPublicAccess, hasPasswordProtectedPublicAccessFromEntity } from "../905/862913"
import { ComFileType } from "../905/915030"
import { fileEntityDataMapper } from "../905/943101"
import { resourceUtils } from "../905/989992"
import { atom, createRemovableAtomFamily, useAtomWithSubscription } from "../figma_app/27355"
import { FileCanView, PrototypeCanView, RepoCanView } from "../figma_app/43951"
import { FEntityType, FFileType } from "../figma_app/191312"
import { debug, throwTypeError } from "../figma_app/465776"
import { useHasUnclaimedAutosaveChanges } from "../figma_app/840917"

// Tile type enumeration
export enum TileType {
  FILE = "FILE",
  PROTOTYPE = "PROTOTYPE",
  REPO = "REPO",
  PINNED_FILE = "PINNED_FILE",
  OFFLINE_FILE = "OFFLINE_FILE",
}

// Tile data interfaces
interface FileTile {
  type: TileType.FILE
  file: any // TODO: Add proper type
  sharedWithYouFields: any | null // TODO: Add proper type
}

interface PinnedFileTile {
  type: TileType.PINNED_FILE
  file: any // TODO: Add proper type
}

interface PrototypeTile {
  type: TileType.PROTOTYPE
  prototype: any // TODO: Add proper type
}

interface RepoTile {
  type: TileType.REPO
  repo: any // TODO: Add proper type
  branches: any[] // TODO: Add proper type
  selectedBranchKey: string | undefined
  accessed_at: string
}

interface OfflineFileTile {
  type: TileType.OFFLINE_FILE
  file: any // TODO: Add proper type
}

type Tile = FileTile | PinnedFileTile | PrototypeTile | RepoTile | OfflineFileTile

/**
 * Creates a file tile from file entity data
 * @param fileEntity - The file entity data
 * @param sharedWithYouFields - Shared information (optional)
 * @returns FileTile object
 */
export function createFileTile(fileEntity: any, sharedWithYouFields?: any): FileTile {
  return {
    type: TileType.FILE,
    file: {
      ...fileEntityDataMapper.toLiveGraph(fileEntity),
      owner: fileEntity.owner,
      trackTags: fileEntity.track_tags ? TrackTagsMapper.toLiveGraph(fileEntity.track_tags) : null,
      UserFileRecentAny: fileEntity.accessed_at
        ? {
            actionAt: new Date(fileEntity.accessed_at),
          }
        : undefined,
    },
    sharedWithYouFields: sharedWithYouFields ?? null,
  }
}

/**
 * Creates a prototype tile
 * @param prototype - The prototype data
 * @returns PrototypeTile object
 */
export function createPrototypeTile(prototype: any): PrototypeTile {
  return {
    type: TileType.PROTOTYPE,
    prototype,
  }
}

/**
 * Creates a repository tile
 * @param repoData - Repository data containing repo and files
 * @param selectedBranchKeys - Map of selected branch keys by repo ID
 * @returns RepoTile object
 */
export function createRepoTile(repoData: { repo: any, files: any[], timestamp: string }, selectedBranchKeys: Record<string, string | undefined>): RepoTile {
  return {
    type: TileType.REPO,
    repo: repoData.repo,
    branches: repoData.files,
    selectedBranchKey: selectedBranchKeys[repoData.repo.id],
    accessed_at: repoData.timestamp,
  }
}

/**
 * Creates an offline file tile
 * @param file - The offline file data
 * @returns OfflineFileTile object
 */
export function createOfflineFileTile(file: any): OfflineFileTile {
  return {
    type: TileType.OFFLINE_FILE,
    file,
  }
}

/**
 * Finds the best branch for a repository tile
 * @param repoTile - The repository tile
 * @returns The best matching branch or the first branch if none found
 */
export function findBestBranchForRepoTile(repoTile: RepoTile): any | null {
  let bestBranch = findBestBranch(repoTile.repo, repoTile.branches, repoTile.selectedBranchKey)

  if (!bestBranch && repoTile.repo.default_file_key) {
    bestBranch = findBestBranch(repoTile.repo, repoTile.branches, repoTile.repo.default_file_key)
  }

  return bestBranch || repoTile.branches[0] || null
}

// Atom for tracking renaming state
export const renamingStateAtom = atom<{ type: string, id: string } | null>(null)

/**
 * Filters tiles based on selection state
 * @param tiles - Array of tiles to filter
 * @returns Filtered array of selected tiles
 */
export function useSelectedTilesFilter(tiles: Tile[]): Tile[] {
  const tileSelection = useSelector<AppState>(state => state.tileSelect)

  return useMemo(() =>
    tiles.filter((tile) => {
      const tileId = TileUtils.getId(tile)

      switch (tile.type) {
        case TileType.FILE:
          return tileSelection[ComFileType.FILES][tileId]
        case TileType.PINNED_FILE:
          return tileSelection[ComFileType.PINNED_FILES][tileId]
        case TileType.PROTOTYPE:
          return tileSelection[ComFileType.PROTOTYPES][tileId]
        case TileType.REPO:
          return tileSelection[ComFileType.REPOS][tileId]
        case TileType.OFFLINE_FILE:
          return tileSelection[ComFileType.OFFLINE_FILES][tileId]
        default:
          throwTypeError(tile)
      }
      return false
    }), [tiles, tileSelection])
}

/**
 * Utility class for working with tiles
 */
export class TileUtils {
  /**
   * Gets the unique identifier for a tile
   * @param tile - The tile
   * @returns Unique identifier string
   */
  static getId(tile: Tile): string {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.key
      case TileType.PROTOTYPE:
        return `${tile.prototype.file_key},${tile.prototype.page_id},${tile.prototype.id}`
      case TileType.REPO:
        return tile.repo.id
      case TileType.OFFLINE_FILE:
        return tile.file.fileKey
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Checks if two tiles represent the same object
   * @param tile1 - First tile
   * @param tile2 - Second tile
   * @returns True if tiles represent the same object
   */
  static sameObject(tile1: Tile, tile2: any): boolean {
    if (tile1.type !== tile2.type)
      return false

    switch (tile1.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile1.file.key === tile2.file.key
      case TileType.PROTOTYPE:
        return tile1.prototype.id === tile2.prototype.id
      case TileType.REPO:
        return tile1.repo.id === tile2.repo.id
      case TileType.OFFLINE_FILE:
        return tile1.file.fileKey === tile2.file.fileKey
      default:
        throwTypeError(tile1)
    }
  }

  /**
   * Gets the display name for a tile
   * @param tile - The tile
   * @returns Display name string
   */
  static getName(tile: Tile): string {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return tile.file.name
      case TileType.PROTOTYPE:
        return `${tile.prototype.fig_file.name} - ${tile.prototype.name}`
      case TileType.REPO:
        return getDisplayNameAlt(tile.repo)
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the accessed timestamp for a tile
   * @param tile - The tile
   * @returns ISO timestamp string or null
   */
  static getAccessedAt(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.file.UserFileRecentAny?.actionAt.toISOString() || null
      case TileType.PROTOTYPE:
        return tile.prototype.accessed_at || null
      case TileType.REPO:
        return tile.accessed_at || null
      case TileType.PINNED_FILE:
        return null
      case TileType.OFFLINE_FILE:
        return new Date(tile.file.lastUpdatedAt).toISOString()
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the shared timestamp for a tile
   * @param tile - The tile
   * @returns ISO timestamp string or null
   */
  static getSharedAt(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.sharedWithYouFields?.sharedAt?.toISOString() ?? null
      case TileType.PROTOTYPE:
        return tile.prototype.shared_at || null
      case TileType.REPO:
        return tile.repo.shared_at || null
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the creation timestamp for a tile
   * @param tile - The tile
   * @returns ISO timestamp string
   */
  static getCreatedAt(tile: Tile): string {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.createdAt.toISOString()
      case TileType.PROTOTYPE:
        return tile.prototype.fig_file.created_at
      case TileType.REPO:
        return tile.branches.reduce(
          (earliest, branch) => earliest < branch.created_at ? earliest : branch.created_at,
          tile.repo.created_at,
        )
      case TileType.OFFLINE_FILE:
        return new Date(tile.file.createdAt).toISOString()
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the touched timestamp for a tile
   * @param tile - The tile
   * @returns Timestamp string or null
   */
  static getTouchedAt(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.file.touchedAt ?? tile.file.updatedAt ?? null
      case TileType.REPO:
        return tile.branches.reduce(
          (latest, branch) => latest !== null && latest > branch.touched_at ? latest : branch.touched_at,
          null,
        )
      case TileType.PROTOTYPE:
        return tile.prototype.accessed_at || null
      case TileType.PINNED_FILE:
        return null
      case TileType.OFFLINE_FILE:
        return new Date(tile.file.lastUpdatedAt).toISOString()
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the trashed timestamp for a tile
   * @param tile - The tile
   * @returns ISO timestamp string or null
   */
  static getTrashedAt(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.file.trashedAt ? tile.file.trashedAt.toISOString() : null
      case TileType.PROTOTYPE:
        return tile.prototype.fig_file.trashed_at || null
      case TileType.REPO:
        return tile.repo.trashed_at || null
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the user ID who trashed the tile
   * @param tile - The tile
   * @returns User ID or null
   */
  static getTrashedUserId(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.file.trashedUserId || null
      case TileType.PROTOTYPE:
      case TileType.REPO:
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Checks if a tile is favorited
   * @param tile - The tile
   * @returns True if favorited
   */
  static getIsFavorited(tile: Tile): boolean {
    switch (tile.type) {
      case TileType.FILE:
        return !!tile.file.isFavorited
      case TileType.PROTOTYPE:
        return !!tile.prototype.is_favorited
      case TileType.REPO:
        return !!tile.repo.is_favorited
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return false
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the favorite resource type for a tile
   * @param tile - The tile
   * @returns Favorite resource type
   */
  static getFavoritedResourceType(tile: Tile): FEntityType {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
      case TileType.REPO:
      case TileType.OFFLINE_FILE:
        return FEntityType.FILE
      case TileType.PROTOTYPE:
        return FEntityType.PROTOTYPE
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the file or main branch key for a tile
   * @param tile - The tile
   * @returns File/branch key or undefined
   */
  static getFileOrMainBranchKey(tile: Tile): string | undefined {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.key
      case TileType.PROTOTYPE:
        return tile.prototype.file_key
      case TileType.REPO:
        return tile.repo.default_file_key ?? undefined
      case TileType.OFFLINE_FILE:
        return undefined
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the file or selected branch key for a tile
   * @param tile - The tile
   * @returns File/branch key or undefined
   */
  static getFileOrSelectedBranchKey(tile: Tile): string | undefined {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.key
      case TileType.PROTOTYPE:
        return tile.prototype.file_key
      case TileType.REPO:
        const bestBranch = findBestBranchForRepoTile(tile)
        return bestBranch?.key
      case TileType.OFFLINE_FILE:
        return undefined
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the URL for a tile
   * @param tile - The tile
   * @param branchId - Branch ID for repo tiles
   * @returns URL string
   */
  static getUrl(tile: Tile, branchId?: any): string {
    switch (tile.type) {
      case TileType.FILE:
        return getDesignFileUrlWithOptions(tile.file)
      case TileType.PINNED_FILE:
        return buildFileUrl(tile)
      case TileType.PROTOTYPE:
        return tile.prototype.url
      case TileType.REPO: {
        const branch = findBranchById(tile.repo, tile.branches, branchId)
        return branch ? generateUrl(branch, tile.repo, "file") : ""
      }
      case TileType.OFFLINE_FILE:
        return ""
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the edit URL for a tile
   * @param tile - The tile
   * @param branchId - Branch ID for repo tiles
   * @returns Edit URL string
   */
  static getEditUrl(tile: Tile, branchId?: any): string {
    switch (tile.type) {
      case TileType.FILE:
        return getDesignFileUrl(tile.file)
      case TileType.PINNED_FILE:
        return buildFileUrl({
          ...tile,
          allowDefaulting: true,
        })
      case TileType.PROTOTYPE:
        return tile.prototype.url
      case TileType.REPO: {
        const branch = findBranchById(tile.repo, tile.branches, branchId)
        return branch ? getDesignFileUrl(branch) : ""
      }
      case TileType.OFFLINE_FILE:
        return ""
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the favorite resource ID for a tile
   * @param tile - The tile
   * @returns Resource ID
   */
  static getFavoriteResourceId(tile: Tile): string {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.key
      case TileType.PROTOTYPE:
        return tile.prototype.id
      case TileType.REPO:
        return tile.repo.default_file_key || ""
      case TileType.OFFLINE_FILE:
        return tile.file.fileKey
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Checks if a tile is a team template
   * @param tile - The tile
   * @returns True if team template
   */
  static getIsTeamTemplate(tile: Tile): boolean {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return !!tile.file.isTeamTemplate
      case TileType.PROTOTYPE:
      case TileType.REPO:
      case TileType.OFFLINE_FILE:
        return false
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the organization ID for a tile
   * @param tile - The tile
   * @returns Organization ID or null
   */
  static getOrgId(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.parentOrgId || null
      case TileType.PROTOTYPE:
        return tile.prototype.fig_file.parent_org_id ?? tile.prototype.fig_file.parent_org_id 
      case TileType.REPO:
        return tile.repo.parent_org?.id ?? tile.repo.parent_org_id 
      case TileType.OFFLINE_FILE:
        return tile.file.orgId || null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the favorite resource team ID for a tile
   * @param tile - The tile
   * @returns Team ID or null
   */
  static getFavoriteResourceTeamId(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.file.teamId || null
      case TileType.PINNED_FILE:
        return null
      case TileType.PROTOTYPE:
        return tile.prototype.parent_team?.id ?? tile.prototype.fig_file?.team_id 
      case TileType.REPO:
        return tile.repo.parent_team?.id ?? tile.repo.team_id 
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the user ID who shared the tile
   * @param tile - The tile
   * @returns User ID or null
   */
  static getSharedBy(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.sharedWithYouFields?.sharedByUser?.id || null
      case TileType.PROTOTYPE:
        return tile.prototype.shared_by_user?.id ?? tile.prototype.shared_by 
      case TileType.REPO:
        return tile.repo.shared_by_user?.id ?? tile.repo.shared_by 
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the name of the user who shared the tile
   * @param tile - The tile
   * @returns User name or null
   */
  static getSharedByName(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
        return tile.sharedWithYouFields?.sharedByUser?.name || null
      case TileType.PROTOTYPE:
        return tile.prototype.shared_by_user?.name || null
      case TileType.REPO:
        return tile.repo.shared_by_user?.name || null
      case TileType.PINNED_FILE:
        debug(true, "Cannot get shared by name from a pinned file")
        return null
      case TileType.OFFLINE_FILE:
        debug(true, "Cannot get shared by name from an offline file")
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the owner of a tile
   * @param tile - The tile
   * @returns Owner information or undefined
   */
  static getOwner(tile: Tile): any | undefined {
    switch (tile.type) {
      case TileType.FILE:
        return tile.file.owner
      case TileType.PINNED_FILE:
      case TileType.PROTOTYPE:
      case TileType.REPO:
      case TileType.OFFLINE_FILE:
        debug(true, "Did not expect to render owner for non-file tiles")
        return undefined
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Hook to check if a tile is currently being renamed
   * @param tile - The tile
   * @returns True if renaming
   */
  static useIsRenaming(tile: Tile): boolean {
    const renamingState = useAtomWithSubscription(renamingStateAtom)
    return TileUtils.isRenaming(tile, renamingState)
  }

  /**
   * Checks if a tile is currently being renamed
   * @param tile - The tile
   * @param renamingState - Current renaming state
   * @returns True if renaming
   */
  static isRenaming(tile: Tile, renamingState: { type: string, id: string } | null): boolean {
    if (!renamingState)
      return false

    switch (tile.type) {
      case TileType.FILE:
        return renamingState.type === "FILE" && renamingState.id === tile.file.key
      case TileType.OFFLINE_FILE:
        return renamingState.type === "FILE" && renamingState.id === tile.file.fileKey
      case TileType.REPO:
        return renamingState.type === "REPO" && renamingState.id === tile.repo.id
      case TileType.PINNED_FILE:
      case TileType.PROTOTYPE:
        return false
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Checks if a tile is password protected
   * @param tile - The tile
   * @returns True if password protected
   */
  static getIsPasswordProtected(tile: Tile): boolean {
    switch (tile.type) {
      case TileType.FILE:
        return hasPasswordProtectedPublicAccess(tile.file)
      case TileType.REPO:
        return hasPassword(tile.repo)
      case TileType.PROTOTYPE:
        return hasPasswordProtectedProtoViewAccess(tile.prototype.fig_file)
          || hasPasswordProtectedPublicAccessFromEntity(tile.prototype.fig_file)
      case TileType.PINNED_FILE:
        return hasPasswordProtectedPublicAccessFromEntity({
          has_file_link_password: tile.file.hasFileLinkPassword,
          link_access: tile.file.linkAccess,
        })
      case TileType.OFFLINE_FILE:
        return false
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the folder ID for a tile
   * @param tile - The tile
   * @returns Folder ID or null
   */
  static getFolderId(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.folderId || null
      case TileType.REPO:
        return tile.repo.folder_id || null
      case TileType.PROTOTYPE:
        return tile.prototype.fig_file.folder_id || null
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the team ID for a tile
   * @param tile - The tile
   * @returns Team ID or null
   */
  static getTeamId(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.teamId || null
      case TileType.PROTOTYPE:
        return tile.prototype.parent_team?.id ?? null
      case TileType.REPO:
        return tile.repo.team_id || null
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the thumbnail URL for a tile
   * @param tile - The tile
   * @returns Thumbnail URL or null
   */
  static getThumbnailUrl(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.thumbnailUrlOverride ?? tile.file.thumbnailUrl ?? null
      case TileType.REPO: {
        const bestBranch = findBestBranchForRepoTile(tile)
        return bestBranch ? (bestBranch.thumbnail_url_override ?? bestBranch.thumbnail_url) : null
      }
      case TileType.PROTOTYPE:
        return tile.prototype.thumbnail_url || null
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Checks if the thumbnail should be full width for a tile
   * @param tile - The tile
   * @returns True if full width, null for unknown
   */
  static getIsThumbnailFullWidth(tile: Tile): boolean | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return !!tile.file.thumbnailGuid
      case TileType.REPO: {
        const bestBranch = findBestBranchForRepoTile(tile)
        return bestBranch ? !!bestBranch.thumbnail_guid : null
      }
      case TileType.PROTOTYPE:
        return true
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets the editor type for a tile
   * @param tile - The tile
   * @returns Editor type or null
   */
  static getEditorType(tile: Tile): FFileType | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
      case TileType.OFFLINE_FILE:
        return tile.file.editorType
      case TileType.REPO:
        return FFileType.DESIGN
      case TileType.PROTOTYPE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets client metadata for a tile
   * @param tile - The tile
   * @returns Client metadata or null
   */
  static getClientMeta(tile: Tile): any | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.clientMeta || null
      case TileType.REPO: {
        const bestBranch = findBestBranchForRepoTile(tile)
        return bestBranch ? bestBranch.client_meta : null
      }
      case TileType.PROTOTYPE:
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }

  /**
   * Gets preview thumbnail URLs for a tile
   * @param tile - The tile
   * @returns Preview thumbnail URLs or undefined
   */
  static getPreviewThumbnailUrls(tile: Tile): string[] | undefined {
    if (tile.type === TileType.FILE) {
      return tile.file.signedPreviewThumbnailUrls
    }

    if (tile.type === TileType.REPO) {
      const bestBranch = findBestBranchForRepoTile(tile)
      return bestBranch?.preview_thumbnail_urls
    }

    return undefined
  }

  /**
   * Gets the file key for autosave changes
   * @param tile - The tile
   * @returns File key or null
   */
  static getFileKeyForAutosaveChanges(tile: Tile): string | null {
    switch (tile.type) {
      case TileType.FILE:
      case TileType.PINNED_FILE:
        return tile.file.key
      case TileType.PROTOTYPE:
        return tile.prototype.file_key
      case TileType.REPO: {
        const bestBranch = findBestBranchForRepoTile(tile)
        return bestBranch?.key || null
      }
      case TileType.OFFLINE_FILE:
        return null
      default:
        throwTypeError(tile)
    }
  }
}

/**
 * Hook to check for unclaimed autosave changes
 * @param tile - The tile
 * @returns Result from useHasUnclaimedAutosaveChanges hook
 */
export function useTileAutosaveChanges(tile: Tile): any {
  const fileKey = TileUtils.getFileKeyForAutosaveChanges(tile)
  return useHasUnclaimedAutosaveChanges(fileKey || "")
}

// Permission checking atom family
const tilePermissionAtomFamily = createRemovableAtomFamily(
  (tile: Tile) => atom((query) => {
    if (tile.type === TileType.FILE || tile.type === TileType.PINNED_FILE) {
      return query(FileCanView.Query({
        key: tile.file.key,
      })).transform(result => !!result.file?.hasPermission)
    }

    if (tile.type === TileType.REPO) {
      return query(RepoCanView.Query({
        repoId: tile.repo.id,
      })).transform(result => !!getResourceDataOrFallback(result.repo)?.canView)
    }

    if (tile.type === TileType.PROTOTYPE) {
      return query(PrototypeCanView.Query({
        prototypeId: tile.prototype.id,
      })).transform(result => !!getResourceDataOrFallback(result.prototype)?.canRead)
    }

    if (tile.type === TileType.OFFLINE_FILE) {
      return resourceUtils.loaded(true)
    }

    throwTypeError(tile)
  }),
  TileUtils.sameObject,
)

// Mapping of tile types to component file types
const tileTypeToComponentFileTypeMap: Record<TileType, string> = {
  [TileType.FILE]: ComFileType.FILES,
  [TileType.PROTOTYPE]: ComFileType.PROTOTYPES,
  [TileType.REPO]: ComFileType.REPOS,
  [TileType.PINNED_FILE]: ComFileType.PINNED_FILES,
  [TileType.OFFLINE_FILE]: ComFileType.OFFLINE_FILES,
}

// Export aliases for backward compatibility
export const createPrototypeTileAlias = createPrototypeTile
export const TileUtilsAlias = TileUtils
export const renamingStateAtomAlias = renamingStateAtom
export const tileTypeToComponentFileTypeMapAlias = tileTypeToComponentFileTypeMap
export const useTileAutosaveChangesAlias = useTileAutosaveChanges
export const createFileTileAlias = createFileTile
export const createOfflineFileTileAlias = createOfflineFileTile
export const tilePermissionAtomFamilyAlias = tilePermissionAtomFamily
export const TileTypeEnum = TileType
export const useSelectedTilesFilterAlias = useSelectedTilesFilter
export const createRepoTileAlias = findBestBranchForRepoTile
export const Nu = createPrototypeTile
export const Tf = TileUtils
export const Y6 = renamingStateAtom
export const YC = tileTypeToComponentFileTypeMap
export const c_ = useTileAutosaveChanges;
export const fA = createFileTile
export const gB = createOfflineFileTile
export const hi = tilePermissionAtomFamily
export const nb = TileType;
export const nw = useSelectedTilesFilter;
export const uy = findBestBranchForRepoTile
export const yF = createPrototypeTile
