import { flushSync } from "../vendor/944059";
export function $$r0(e) {
  flushSync(() => scheduler.postTask(e, {
    priority: "user-blocking"
  }));
}
export const J = $$r0;