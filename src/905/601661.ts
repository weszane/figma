import { throwTypeError } from "../figma_app/465776";
import { PresentationValidationStatus } from "../figma_app/763686";
import { viewerModes } from "../figma_app/471982";
import { getHubFileVersionOrDefault, mapFileTypeToCategoryType } from "../figma_app/198840";
import { FTemplateCategoryType, FFileType } from "../figma_app/191312";
function l({
  existingHubFile: e,
  createNewVersionOnSubmit: t,
  figFilePrototypeStatus: i
}) {
  return t ? i === PresentationValidationStatus.VALID : !!e && getHubFileVersionOrDefault(e).valid_prototype;
}
export let $$d0 = {
  displayName: "ViewerModeField",
  fetchInitialValue: ({
    existingHubFile: e,
    figFile: t,
    createNewVersionOnSubmit: i,
    figFilePrototypeStatus: n
  }) => e && (e.viewer_mode !== FTemplateCategoryType.PROTOTYPE || l({
    createNewVersionOnSubmit: i,
    existingHubFile: e,
    figFilePrototypeStatus: n
  })) ? e.viewer_mode : mapFileTypeToCategoryType(t?.editor_type ?? null),
  validate: ({
    figFile: e,
    existingHubFile: t,
    createNewVersionOnSubmit: i,
    figFilePrototypeStatus: r
  }, d) => {
    if (t?.viewer_mode === FTemplateCategoryType.LIBRARY && d === FTemplateCategoryType.LIBRARY) return;
    let c = e?.editor_type ?? null;
    switch (c) {
      case FFileType.WHITEBOARD:
      case FFileType.SLIDES:
      case FFileType.SITES:
      case FFileType.COOPER:
      case FFileType.FIGMAKE:
        if (d !== mapFileTypeToCategoryType(c)) return [{
          key: "INVALID_VIEWER_MODE_FOR_EDITOR_TYPE",
          data: {
            viewerMode: d,
            editorType: c
          }
        }];
        break;
      case null:
      case FFileType.DESIGN:
        if (!viewerModes.includes(d)) return [{
          key: "INVALID_VIEWER_MODE_FOR_EDITOR_TYPE",
          data: {
            viewerMode: d,
            editorType: c
          }
        }];
        if (d === FTemplateCategoryType.PROTOTYPE && !l({
          createNewVersionOnSubmit: i,
          existingHubFile: t,
          figFilePrototypeStatus: r
        })) return [{
          key: "NO_VALID_PROTOTYPE_FOUND",
          data: {
            figFilePrototypeStatus: r,
            existingHubFile: t
          }
        }];
        break;
      default:
        throwTypeError(c);
    }
  },
  canSet: ({
    figFile: e,
    existingHubFile: t,
    createNewVersionOnSubmit: i,
    figFilePrototypeStatus: n
  }) => {
    let r = e?.editor_type ?? null;
    return (null === r || r === FFileType.DESIGN) && t?.viewer_mode !== FTemplateCategoryType.LIBRARY && l({
      createNewVersionOnSubmit: i,
      existingHubFile: t,
      figFilePrototypeStatus: n
    });
  }
};
export const m = $$d0;