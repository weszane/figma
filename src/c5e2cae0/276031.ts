import { useState } from "react";
export function $$r0() {
  let [e, t] = useState(!1);
  return {
    isLoading: e,
    withLoading: async e => {
      try {
        t(!0);
        await e();
      } finally {
        t(!1);
      }
    }
  };
}
export const R = $$r0;