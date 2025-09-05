import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { Ce } from "../905/156213";
export function $$s0() {
  let e = useDispatch();
  return useCallback(() => {
    e(Ce());
  }, [e]);
}
export const H = $$s0;