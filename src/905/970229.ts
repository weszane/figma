let n = {
  "image/png": "89504e47",
  "image/jpeg": "ffd8ff",
  "image/gif": "47494638",
  "image/svg+xml": "3c737667",
  "video/mp4": "66747970",
  "video/webm": "1a45dfa3"
};
export function $$r0(e) {
  for (let [t, i] of Object.entries(n)) if (e.slice(0, i.length / 2).every((e, t) => e === parseInt(i.slice(2 * t, 2 * t + 2), 16))) return t;
  return null;
}
export const i = $$r0;