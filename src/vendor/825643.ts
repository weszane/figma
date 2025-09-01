import { $ } from "../vendor/148711";
import { PL, rB, RQ } from "../vendor/546363";
export class $$o0 extends $ {
  constructor(e, r) {
    super(e, r);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(e, r) {
    super.setOptions({
      ...e,
      behavior: PL()
    }, r);
  }
  getOptimisticResult(e) {
    e.behavior = PL();
    return super.getOptimisticResult(e);
  }
  fetchNextPage({
    pageParam: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        fetchMore: {
          direction: "forward",
          pageParam: e
        }
      }
    });
  }
  fetchPreviousPage({
    pageParam: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        fetchMore: {
          direction: "backward",
          pageParam: e
        }
      }
    });
  }
  createResult(e, r) {
    var n;
    var i;
    var o;
    var a;
    var h;
    var d;
    let {
      state
    } = e;
    let g = super.createResult(e, r);
    let {
      isFetching,
      isRefetching
    } = g;
    let y = isFetching && (null == (n = state.fetchMeta) ? void 0 : null == (i = n.fetchMore) ? void 0 : i.direction) === "forward";
    let b = isFetching && (null == (o = state.fetchMeta) ? void 0 : null == (a = o.fetchMore) ? void 0 : a.direction) === "backward";
    return {
      ...g,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: rB(r, null == (h = state.data) ? void 0 : h.pages),
      hasPreviousPage: RQ(r, null == (d = state.data) ? void 0 : d.pages),
      isFetchingNextPage: y,
      isFetchingPreviousPage: b,
      isRefetching: isRefetching && !y && !b
    };
  }
}
export const z = $$o0;