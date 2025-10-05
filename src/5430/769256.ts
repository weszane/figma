import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { LoadingSpinner } from "../905/443820";
import { IntersectionSentinel } from "../905/925868";
import { A } from "../5430/204784";
if (443 == require.j) {}
export function $$l0(e) {
  let {
    useInfiniteScroll,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    containerRef
  } = e;
  return useInfiniteScroll ? jsx(c, {
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    loading: isFetchingNextPage,
    containerRef
  }) : jsx(A, {
    onClick: e => {
      e.preventDefault();
      fetchNextPage();
    },
    isLoading: isFetchingNextPage,
    isMoreToFetch: !!hasNextPage
  });
}
function c({
  hasNextPage: e,
  fetchNextPage: t,
  isFetchingNextPage: r,
  loading: a,
  containerRef: l
}) {
  useEffect(() => {
    l.current && e && !r && !a && l.current.scrollHeight < window.innerHeight && t();
  }, [e, r, t, a, l]);
  return jsx(Fragment, {
    children: e && jsxs("div", {
      className: "x78zum5 xl56j7k x6s0dn4 xg87l8a",
      children: [jsx(LoadingSpinner, {}), jsx(IntersectionSentinel, {
        onIntersectionChange: e => {
          e.isIntersecting && t();
        }
      })]
    })
  });
}
export const D = $$l0;