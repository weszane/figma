import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autocompleteSet, autocompleteReset } from "../905/748726";
import { fetchContactsOptimist } from "../905/14223";
import { selectUser } from "../905/372672";
import { yI, t9 } from "../905/915142";
import { initialDomainsState } from "../905/158283";
export function $$c0({
  prepopulatedEmail: e,
  parentOrg: t,
  orgDomains: r
}) {
  let c = useDispatch<AppDispatch>();
  let u = useSelector(e => e.contacts);
  let m = selectUser();
  useEffect(() => {
    c(fetchContactsOptimist());
  }, [c]);
  let _ = r ?? initialDomainsState;
  let p = useCallback(e => yI(e, u.usersByEmail[e] || e, null, _, m.email), [u.usersByEmail, m.email, _]);
  useEffect(() => {
    if (e) {
      let t = p(e);
      c(autocompleteSet({
        tokens: [t],
        inputValue: "",
        errorMessage: ""
      }));
    }
  }, [e, p, c]);
  useEffect(() => () => {
    c(autocompleteReset());
  }, [c]);
  return {
    validateToken: p,
    searchResultToken: useCallback(e => t9(e, t, _), [_, t])
  };
}
export const u = $$c0;
