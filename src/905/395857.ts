import { z } from '../905/239603'
import { PrimaryWorkflowEnum } from '../905/497152'
import { getResourceDataOrFallback } from '../905/663269'
import { isFullPageBlock } from '../905/722604'
import { getLibraryAssetCanvasUrl, getLibraryAssetSchema, getLibraryAssetThumbnailUrl, getSubscribedAssetSchema } from '../905/808701'

import { FComponentType } from '../figma_app/191312'
import { CodeComponentIdHandler, ResponsiveSetIdHandler } from '../figma_app/243058'
import { mapComponentProperties, mapFrameProperties, mapStateGroupProperties, mapStyleProperties, mapTemplateAndModuleProperties, mapVariableProperties, mapVariableSetProperties } from '../figma_app/349248'

// Define types for better type safety
interface Asset {
  assetType: FComponentType
  key: string
  version: string
  name: string
  userFacingVersion: string
  nodeId: string
  mainNodeHeight?: string
  mainNodeWidth?: string
  containingFrame?: any
  updatedAt?: Date
  codePresetMetadata?: any
}

interface MappedAsset {
  name: string
  type: PrimaryWorkflowEnum
  sourceLibraryKey: string
  key: string
  version: string
  userFacingVersion: string
  assetId: any
  sourceAssetId: any
  sourceAssetGuid: string
  subscriptionStatus: string
  mainThumbnailInfo: {
    thumbnailUrl: string
    height: number
    width: number
  }
  canvasUrl: string
  containingFrame: any
  updatedAt: Date
  fullPage?: boolean
  codePresetMetadata?: any
}

type AssetMapper = (sourceLibraryKey: string, asset: Asset) => MappedAsset | null

/**
 * Maps properties for a responsive set asset.
 * Original: $$m1
 * @param sourceLibraryKey - The source library key.
 * @param asset - The asset object.
 * @returns The mapped asset properties or null if not a responsive set.
 */
export const mapResponsiveSetProperties: AssetMapper = (sourceLibraryKey, asset) => {
  if (asset.assetType !== FComponentType.RESPONSIVE_SET) {
    return null
  }
  const key = asset.key
  const version = asset.version
  return {
    name: asset.name,
    type: PrimaryWorkflowEnum.RESPONSIVE_SET,
    sourceLibraryKey,
    key,
    version,
    userFacingVersion: asset.userFacingVersion,
    assetId: ResponsiveSetIdHandler.fromRef({
      key,
      version,
    }),
    sourceAssetId: ResponsiveSetIdHandler.fromLocalNodeIdStr(asset.nodeId),
    sourceAssetGuid: asset.nodeId,
    subscriptionStatus: 'LIBRARY',
    mainThumbnailInfo: {
      thumbnailUrl: getLibraryAssetThumbnailUrl(sourceLibraryKey, key, version),
      height: Number.parseInt(getResourceDataOrFallback(asset.mainNodeHeight) ?? '0'),
      width: Number.parseInt(getResourceDataOrFallback(asset.mainNodeWidth) ?? '0'),
    },
    canvasUrl: getLibraryAssetCanvasUrl(sourceLibraryKey, key, version),
    containingFrame: mapFrameProperties(getResourceDataOrFallback(asset.containingFrame) ?? null) ?? null,
    updatedAt: asset.updatedAt,
    fullPage: isFullPageBlock(asset.name),
  }
}

/**
 * Maps properties for a code component asset.
 * Original: $$g0
 * @param sourceLibraryKey - The source library key.
 * @param asset - The asset object.
 * @returns The mapped asset properties or null if not a code component.
 */
export const mapCodeComponentProperties: AssetMapper = (sourceLibraryKey, asset) => {
  if (asset.assetType !== FComponentType.CODE_COMPONENT) {
    return null
  }
  const key = asset.key
  const version = asset.version
  return {
    name: asset.name,
    type: PrimaryWorkflowEnum.CODE_COMPONENT,
    sourceLibraryKey,
    key,
    version,
    userFacingVersion: asset.userFacingVersion,
    assetId: CodeComponentIdHandler.fromRef({
      key,
      version,
    }),
    sourceAssetId: CodeComponentIdHandler.fromLocalNodeIdStr(asset.nodeId),
    sourceAssetGuid: asset.nodeId,
    subscriptionStatus: 'LIBRARY',
    mainThumbnailInfo: {
      thumbnailUrl: getLibraryAssetThumbnailUrl(sourceLibraryKey, key, version),
      height: Number.parseInt(getResourceDataOrFallback(asset.mainNodeHeight) ?? '0'),
      width: Number.parseInt(getResourceDataOrFallback(asset.mainNodeWidth) ?? '0'),
    },
    canvasUrl: getLibraryAssetCanvasUrl(sourceLibraryKey, key, version),
    containingFrame: mapFrameProperties(getResourceDataOrFallback(asset.containingFrame) ?? null) ?? null,
    updatedAt: getResourceDataOrFallback(asset.updatedAt) ?? new Date(),
    codePresetMetadata: asset.codePresetMetadata ?? null,
  }
}

/**
 * Object mapping primary workflow enums to their respective property mappers.
 * Original: $$A2
 */
export const propertyMappers = {
  [PrimaryWorkflowEnum.COMPONENT]: mapComponentProperties,
  [PrimaryWorkflowEnum.MODULE]: mapTemplateAndModuleProperties,
  [PrimaryWorkflowEnum.RESPONSIVE_SET]: mapResponsiveSetProperties,
  [PrimaryWorkflowEnum.STATE_GROUP]: mapStateGroupProperties,
  [PrimaryWorkflowEnum.STYLE]: mapStyleProperties,
  [PrimaryWorkflowEnum.VARIABLE]: mapVariableProperties,
  [PrimaryWorkflowEnum.VARIABLE_SET]: mapVariableSetProperties,
  [PrimaryWorkflowEnum.CODE_COMPONENT]: mapCodeComponentProperties,
}

// Exports with original names for compatibility
export const Zi = mapCodeComponentProperties
export const py = mapResponsiveSetProperties
export const sC = propertyMappers
