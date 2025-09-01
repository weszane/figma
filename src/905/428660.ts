export function $$n0(e, t) {
  switch (e) {
    case "file":
      return {
        view: "communityHub",
        subView: "hubFile",
        hubFileId: t
      };
    case "plugin":
      return {
        view: "communityHub",
        subView: "plugin",
        publishedPluginId: t
      };
    case "widget":
      return {
        view: "communityHub",
        subView: "widget",
        widgetId: t
      };
  }
}
export const p = $$n0;