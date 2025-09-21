import { FFileType } from '../figma_app/191312'

export function isSlidesFile(e) {
  return e === FFileType.SLIDES
}
export const f = isSlidesFile
