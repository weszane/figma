import { flushSync } from "react-dom";
export function $$r0(e) {
  flushSync(() => scheduler.postTask(e, {
    priority: "user-blocking"
  }));
}
export const J = $$r0;
