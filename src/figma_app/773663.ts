import { useLayoutEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { editorUtilities as _$$k } from "../905/22009";
import { ResourceTypes } from "../905/178090";
export function $$d4(e = _$$k.Editors.ALL, t, r) {
  switch (e) {
    case _$$k.Editors.ALL:
    case _$$k.Editors.FIGJAM:
      switch (t) {
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.MIXED
          };
        case ResourceTypes.SearchResourceTypes.PROFILES:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
        default:
          return {
            editorType: e,
            resourceType: t
          };
      }
    case _$$k.Editors.FIGMA:
      switch (t) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          if (r) return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
          return {
            editorType: e,
            resourceType: t
          };
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.MIXED
          };
        case ResourceTypes.SearchResourceTypes.PROFILES:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
        default:
          return {
            editorType: e,
            resourceType: t
          };
      }
    case _$$k.Editors.SITES:
      switch (t) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          return {
            editorType: e,
            resourceType: t
          };
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES
          };
        default:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
      }
    case _$$k.Editors.FIGMAKE:
      return {
        editorType: e,
        resourceType: t ?? ResourceTypes.BrowseResourceTypes.MIXED
      };
    case _$$k.Editors.COOPER:
      switch (t) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          return {
            editorType: e,
            resourceType: t
          };
        case ResourceTypes.BrowseResourceTypes.PLUGINS:
          if (getFeatureFlags().buzz_plugins) return {
            editorType: e,
            resourceType: t
          };
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES
          };
        default:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
      }
    case _$$k.Editors.PROTOTYPE:
      if (r) return {
        editorType: _$$k.Editors.ALL,
        resourceType: t ?? ResourceTypes.BrowseResourceTypes.MIXED
      };
      switch (t) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          return {
            editorType: e,
            resourceType: t
          };
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES
          };
        default:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
      }
    case _$$k.Editors.DEV_MODE:
      switch (t) {
        case ResourceTypes.BrowseResourceTypes.PLUGINS:
          return {
            editorType: e,
            resourceType: t
          };
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.PLUGINS
          };
        default:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
      }
    case _$$k.Editors.SLIDES:
      switch (t) {
        case ResourceTypes.BrowseResourceTypes.FILES:
        case ResourceTypes.BrowseResourceTypes.PLUGINS:
          return {
            editorType: e,
            resourceType: t
          };
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case void 0:
          return {
            editorType: e,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES
          };
        default:
          return {
            editorType: _$$k.Editors.ALL,
            resourceType: t
          };
      }
    default:
      throwTypeError(e);
  }
}
export function $$c3() {
  return $$d4();
}
export function $$u0(e) {
  return $$d4(void 0, e).editorType;
}
export function $$p1(e, t, r) {
  let {
    editorType,
    resourceType
  } = $$d4(e, t);
  if (e === editorType && t === resourceType) return {
    editorType: e,
    resourceType: t
  };
  switch (r.anchorOn) {
    case "editorType":
      if (e !== editorType) return {
        editorType: e,
        resourceType: $$d4(e, void 0).resourceType
      };
      return {
        editorType: e,
        resourceType
      };
    case "resourceType":
      if (t !== resourceType) return {
        editorType: $$u0(t),
        resourceType: t
      };
      return {
        editorType,
        resourceType: t
      };
    default:
      throwTypeError(r.anchorOn);
  }
}
export function $$_2(e, t) {
  let {
    editor_type,
    resource_type
  } = e.search;
  useLayoutEffect(() => {
    if (!editor_type || !resource_type) return;
    let {
      editorType,
      resourceType
    } = $$d4(editor_type, resource_type, t);
    (editorType !== editor_type || resourceType !== resource_type) && customHistory.replace(e.copyWith({}, {
      editor_type: editorType,
      resource_type: resourceType
    }).href);
  }, [e, editor_type, resource_type, t]);
}
export const MF = $$u0;
export const OU = $$p1;
export const _4 = $$_2;
export const pJ = $$c3;
export const zs = $$d4;