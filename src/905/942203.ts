export var $$n0;
(e => {
  e.ALL = "all";
  e.FIGMA_PARTNER = "partners";
  e.FOLLOWING = "following";
  e.Browse = {
    ALL: e.ALL,
    FIGMA_PARTNER: e.FIGMA_PARTNER,
    FOLLOWING: e.FOLLOWING
  };
  e.Search = {
    ALL: e.ALL,
    FIGMA_PARTNER: e.FIGMA_PARTNER
  };
  e.isSearchType = function (t) {
    return t === e.ALL || t === e.FIGMA_PARTNER;
  };
})($$n0 || ($$n0 = {}));
export const Z = $$n0;