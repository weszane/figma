import { FUserRoleType } from "../figma_app/191312";
import { jh } from "../figma_app/35887";
export function $$a0(e) {
  switch (e) {
    case FUserRoleType.GUEST:
      return jh.GUEST;
    case FUserRoleType.MEMBER:
      return jh.MEMBER;
    case FUserRoleType.ADMIN:
      return jh.ADMIN;
  }
}
export const A = $$a0;