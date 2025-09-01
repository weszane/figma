export var $$n1;
export function $$i0() {
  return $$n1.Browse.ALL_TIME;
}
(e => {
  e.Shared = {
    POPULAR: "popular",
    ALL_TIME: "all_time",
    PUBLISHED_AT: "published_at",
    RANDOM: "random"
  };
  e.Browse = {
    ...e.Shared
  };
  e.Search = {
    ...e.Shared,
    RELEVANCY: "relevancy",
    PRICE_DESC: "price_desc",
    PRICE_ASC: "price_asc",
    NAME: "name",
    AUTHOR_NAME: "author_name",
    INSTALL_COUNT: "install_count",
    RUN_COUNT: "run_count",
    UPDATED_AT: "updated_at"
  };
  e.Shared;
  e.Browse;
  e.Search;
})($$n1 || ($$n1 = {}));
export const H = $$i0;
export const e = $$n1;