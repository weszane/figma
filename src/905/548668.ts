import { FFileType } from "../figma_app/191312";
export function $$r0(e, t) {
  switch (e) {
    case FFileType.SLIDES:
      return `/slides/new?slide-template-library-key=${t}`;
    case FFileType.COOPER:
      return `/buzz/new?buzz-template-library-key=${t}`;
    default:
      return "";
  }
}
export const H = $$r0;