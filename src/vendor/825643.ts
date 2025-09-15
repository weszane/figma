import { QueryObserver } from '../vendor/148711'
import { PL, rB, RQ } from '../vendor/546363'

export class InfiniteQueryObserver extends QueryObserver {
  constructor(e, r) {
    super(e, r)
  }

  bindMethods() {
    super.bindMethods()
    this.fetchNextPage = this.fetchNextPage.bind(this)
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
  }

  setOptions(e, r) {
    super.setOptions({
      ...e,
      behavior: PL(),
    }, r)
  }

  getOptimisticResult(e) {
    e.behavior = PL()
    return super.getOptimisticResult(e)
  }

  fetchNextPage({
    pageParam: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam: e,
        },
      },
    })
  }

  fetchPreviousPage({
    pageParam: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam: e,
        },
      },
    })
  }

  createResult(e, r) {
    let n
    let i
    let o
    let a
    let h
    let d
    let {
      state,
    } = e
    let g = super.createResult(e, r)
    let {
      isFetching,
      isRefetching,
    } = g
    let y = isFetching && ((n = state.fetchMeta) == null ? void 0 : (i = n.fetchMore) == null ? void 0 : i.direction) === 'forward'
    let b = isFetching && ((o = state.fetchMeta) == null ? void 0 : (a = o.fetchMore) == null ? void 0 : a.direction) === 'backward'
    return {
      ...g,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: rB(r, (h = state.data) == null ? void 0 : h.pages),
      hasPreviousPage: RQ(r, (d = state.data) == null ? void 0 : d.pages),
      isFetchingNextPage: y,
      isFetchingPreviousPage: b,
      isRefetching: isRefetching && !y && !b,
    }
  }
}
export const z = InfiniteQueryObserver
