import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { hZ, cL } from "../905/748726";
import { um } from "../905/14223";
import { Pc } from "../905/372672";
import { yI, t9 } from "../905/915142";
import { ls } from "../905/158283";
export function $$c0({
  prepopulatedEmail: e,
  parentOrg: n,
  orgDomains: t
}) {
  let c = useDispatch();
  let p = useSelector(e => e.contacts);
  let u = Pc();
  useEffect(() => {
    c(um());
  }, [c]);
  let _ = t ?? ls;
  let m = useCallback(e => yI(e, p.usersByEmail[e] || e, null, _, u.email), [p.usersByEmail, u.email, _]);
  useEffect(() => {
    if (e) {
      let n = m(e);
      c(hZ({
        tokens: [n],
        inputValue: "",
        errorMessage: ""
      }));
    }
  }, [e, m, c]);
  useEffect(() => () => {
    c(cL());
  }, [c]);
  return {
    validateToken: m,
    searchResultToken: useCallback(e => t9(e, n, _), [_, n])
  };
}
export const u = $$c0;