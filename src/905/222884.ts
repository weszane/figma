let n = "feed_post_";
export function $$r1(e) {
  return `${n}${e.replace(/-/g, "_")}`;
}
export function $$a0(e) {
  if (e.startsWith(n)) return e.slice(n.length).replace(/_/g, "-");
  throw Error("Thread ID is not in valid format for feed post");
}
export const gk = $$a0;
export const iw = $$r1;