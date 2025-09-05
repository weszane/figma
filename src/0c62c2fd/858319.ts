import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { hZ, cL } from "../905/748726";
import { um } from "../905/14223";
import { Pc } from "../905/372672";
import { yI, t9 } from "../905/915142";
import { ls } from "../905/158283";
export function $$c0({
  prepopulatedEmail: e,
  parentOrg: t,
  orgDomains: r
}) {
  let c = useDispatch();
  let u = useSelector(e => e.contacts);
  let m = Pc();
  useEffect(() => {
    c(um());
  }, [c]);
  let _ = r ?? ls;
  let p = useCallback(e => yI(e, u.usersByEmail[e] || e, null, _, m.email), [u.usersByEmail, m.email, _]);
  useEffect(() => {
    if (e) {
      let t = p(e);
      c(hZ({
        tokens: [t],
        inputValue: "",
        errorMessage: ""
      }));
    }
  }, [e, p, c]);
  useEffect(() => () => {
    c(cL());
  }, [c]);
  return {
    validateToken: p,
    searchResultToken: useCallback(e => t9(e, t, _), [_, t])
  };
}
export const u = $$c0;