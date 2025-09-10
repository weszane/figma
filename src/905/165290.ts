import { FontSourceType } from '../figma_app/763686'
/**
 * Tag for optical size axis.
 * (original: $$r3)
 */
export const OPTICAL_SIZE_AXIS_TAG = 'opsz'

/**
 * Font variation axis type.
 */
export interface FontVariationAxis {
  tag: string
  value?: number
  defaultValue?: number // (original: $$default)
}

/**
 * Font variation instance type.
 */
export interface FontVariationInstance {
  name: string
  axes: Record<string, number>
  postscriptName?: string
}

/**
 * Shared font metadata type.
 */
export interface SharedFontMetadata {
  postscript_name: string
  family: string
  style: string
  weight: number
  italic: boolean
  stretch: number
  id: number | string
  team_id?: number | string
  org_id?: number | string
  version: string
  sample_url?: string
  preview_url?: string
  updated_at?: string
  variation_axes?: FontVariationAxis[]
  variation_instances?: FontVariationInstance[]
}

/**
 * Google font metadata type.
 */
export interface GoogleFontMetadata {
  postscriptName: string
  family: string
  style: string
  weight: number
  italic: boolean
  stretch: number
  filename: string
  version: string | number
  variationAxes?: FontVariationAxis[]
  variationInstances?: FontVariationInstance[]
}

/**
 * Font metadata output type.
 */
export interface FontMetadata {
  postscript: string
  family: string
  style: string
  weight: number
  italic: boolean
  stretch: number
  id: string
  source: FontSourceType
  teamId?: string
  orgId?: string
  version: string | undefined
  sampleUrl?: string
  previewUrl?: string
  updatedAt?: string
  variationAxes?: FontVariationAxis[]
  variationInstances?: FontVariationInstance[]
  useFontOpticalSize: boolean
}

/**
 * Returns an array of font metadata for each font and its variation instances.
 * (original: $$a1)
 */
export function getFontMetadataList(fonts: (SharedFontMetadata | GoogleFontMetadata)[]): FontMetadata[] {
  const result: FontMetadata[] = []
  for (const font of fonts) {
    if ('variation_instances' in font && font.variation_instances) {
      result.push(
        ...font.variation_instances.map(instance => createFontMetadata(font, instance)),
      )
    }
    else {
      result.push(createFontMetadata(font))
    }
  }
  return result
}

/**
 * Maps stretch axis value to a normalized stretch value.
 * (original: s)
 */
function normalizeStretchValue(value: number): number {
  if (value <= 50)
    return 1
  if (value <= 62.5)
    return 2
  if (value <= 75)
    return 3
  if (value <= 87.5)
    return 4
  if (value <= 100)
    return 5
  if (value <= 112.5)
    return 6
  if (value <= 125)
    return 7
  if (value <= 150)
    return 8
  return 9
}

/**
 * Default optical size value.
 * (original: $$o6)
 */
export const DEFAULT_OPTICAL_SIZE = 5

/**
 * Checks if font is a shared font (has postscript_name).
 * (original: l)
 */
function isSharedFontMetadata(font: any): font is SharedFontMetadata {
  return typeof font.postscript_name !== 'undefined'
}

/**
 * Checks if the font's opsz axis is not at its default value.
 * (original: $$d0)
 */
export function hasNonDefaultOpticalSize(
  axes: FontVariationAxis[] | undefined,
  instances?: FontVariationInstance[],
): boolean {
  const opszAxis = axes?.find(axis => axis.tag === OPTICAL_SIZE_AXIS_TAG)
  if (opszAxis) {
    if (!instances)
      return opszAxis.value !== opszAxis.defaultValue
    for (const instance of instances) {
      if (instance.axes[OPTICAL_SIZE_AXIS_TAG] !== opszAxis.defaultValue)
        return true
    }
  }
  return false
}

/**
 * Generates font metadata from font and optional variation instance.
 * (original: $$c2)
 */
export function createFontMetadata(
  font: SharedFontMetadata | GoogleFontMetadata,
  instance?: FontVariationInstance,
): FontMetadata {
  let useFontOpticalSize = false
  let variationAxes: FontVariationAxis[] | undefined

  if (isSharedFontMetadata(font)) {
    if (font.variation_axes && font.variation_instances) {
      const matchedInstances = font.variation_instances.filter(
        v => v.name === instance?.name,
      )
      const axesValues = matchedInstances.length ? matchedInstances[0].axes : undefined
      variationAxes = axesValues
        ? font.variation_axes.map(axis => ({
          ...axis,
          value: axesValues[axis.tag],
        }))
        : font.variation_axes
      useFontOpticalSize = hasNonDefaultOpticalSize(variationAxes, font.variation_instances)
    }
    // Build shared font metadata
    const metadata: FontMetadata = {
      postscript: font.postscript_name,
      family: font.family,
      style: font.style,
      weight: font.weight,
      italic: font.italic,
      stretch: font.stretch,
      id: font.id.toString(),
      source: FontSourceType.SHARED,
      teamId: font.team_id ? font.team_id.toString() : undefined,
      orgId: font.org_id ? font.org_id.toString() : undefined,
      version: cleanFontVersion(font.version),
      sampleUrl: font.sample_url,
      previewUrl: font.preview_url,
      updatedAt: font.updated_at,
      variationAxes,
      variationInstances: font.variation_instances,
      useFontOpticalSize,
    }
    // Apply instance overrides if present
    if (instance) {
      return {
        ...metadata,
        postscript: instance.postscriptName ?? metadata.postscript,
        style: instance.name || metadata.style,
        weight: instance.axes.wght !== undefined ? instance.axes.wght : metadata.weight,
        italic: instance.axes.slnt !== undefined ? instance.axes.slnt !== 0 : metadata.italic,
        stretch: instance.axes.wdth !== undefined ? normalizeStretchValue(instance.axes.wdth) : metadata.stretch,
        variationAxes: metadata.variationAxes?.map(axis => ({
          ...axis,
          value: instance.axes[axis.tag],
        })),
      }
    }
    return metadata
  }
  else {
    // Google font
    if (font.variationInstances && font.variationAxes) {
      useFontOpticalSize = hasNonDefaultOpticalSize(font.variationAxes, font.variationInstances)
    }
    const metadata: FontMetadata = {
      postscript: font.postscriptName,
      family: font.family,
      style: font.style,
      weight: font.weight,
      italic: font.italic,
      stretch: font.stretch,
      id: `${font.filename}_${font.version}`,
      source: FontSourceType.GOOGLE,
      version: font.version.toString(),
      variationAxes: font.variationAxes,
      variationInstances: font.variationInstances,
      useFontOpticalSize,
    }
    // Apply instance overrides if present
    if (instance) {
      return {
        ...metadata,
        postscript: instance.postscriptName ?? metadata.postscript,
        style: instance.name || metadata.style,
        weight: instance.axes.wght !== undefined ? instance.axes.wght : metadata.weight,
        italic: instance.axes.slnt !== undefined ? instance.axes.slnt !== 0 : metadata.italic,
        stretch: instance.axes.wdth !== undefined ? normalizeStretchValue(instance.axes.wdth) : metadata.stretch,
        variationAxes: metadata.variationAxes?.map(axis => ({
          ...axis,
          value: instance.axes[axis.tag],
        })),
      }
    }
    return metadata
  }
}

/**
 * Cleans up font version string.
 * (original: $$u4)
 */
export function cleanFontVersion(version: string | undefined): string | undefined {
  return version
    ? version.replace(/version/i, '').split(';')[0].trim()
    : undefined
}

/**
 * Returns a font owner string based on team or org id.
 * (original: $$p7)
 */
export function getFontOwner(font: { teamId?: string, orgId?: string }): string {
  return font.teamId ? `team-${font.teamId}` : `org-${font.orgId}`
}

/**
 * Removes team/org prefix from id string.
 * (original: $$m5)
 */
export function removeFontOwnerPrefix(id: string): string {
  return id.replace(/team-|org-/, '')
}

// Export original names for compatibility
export const I5 = hasNonDefaultOpticalSize
export const Mx = getFontMetadataList
export const RG = createFontMetadata
export const mz = OPTICAL_SIZE_AXIS_TAG
export const ot = cleanFontVersion
export const p8 = removeFontOwnerPrefix
export const qO = DEFAULT_OPTICAL_SIZE
export const vq = getFontOwner
