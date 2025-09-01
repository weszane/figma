export function $$n0(e) {
  let t = e.type;
  switch (t) {
    case "NONE":
      throw Error("Internal Figma error: Unknown node type for node in getPublicNodeType");
    case "ROUNDED_RECTANGLE":
      return "RECTANGLE";
    case "REGULAR_POLYGON":
      return "POLYGON";
    case "SYMBOL":
      return "COMPONENT";
    case "FRAME":
      if (e.isStateGroup) return "COMPONENT_SET";
      if (e.resizeToFit) return "GROUP";
      break;
    case "WIDGET":
      if (e.isLinkPreview) return "LINK_UNFURL";
      if (e.isEmbed) return "EMBED";
      break;
    case "CANVAS":
      return "PAGE";
    case "TRANSFORM":
      return "TRANSFORM_GROUP";
    case "RESPONSIVE_SET":
      return "WEBPAGE";
  }
  return t;
}
export const w = $$n0;