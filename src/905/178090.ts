export var $$n0;
(e => {
  e.BrowseResourceTypes = {
    FILES: "files",
    PLUGINS: "plugins",
    WIDGETS: "widgets",
    MIXED: "mixed"
  };
  e.UniqueResourceTypes = Object.keys(e.BrowseResourceTypes).filter(e => "MIXED" !== e).map(t => e.BrowseResourceTypes[t]);
  e.SearchResourceTypes = {
    ...e.BrowseResourceTypes,
    PROFILES: "profiles"
  };
})($$n0 || ($$n0 = {}));
export let $$r1 = {
  FILES: $$n0.BrowseResourceTypes.FILES,
  PLUGINS: $$n0.BrowseResourceTypes.PLUGINS,
  WIDGETS: $$n0.BrowseResourceTypes.WIDGETS
};
export const L = $$n0;
export const t = $$r1;