let n = [];
for (let e = 0; e < 256; ++e) n[e] = (e + 256).toString(16).substr(1);
let r = new Uint8Array(16);
export function $$a0() {
  let e;
  if (self.crypto && self.crypto.getRandomValues) self.crypto.getRandomValues(r);else {
    let e = 0;
    for (let t = 0; t < 16; t++) {
      (3 & t) == 0 && (e = 0x100000000 * Math.random());
      r[t] = e >>> ((3 & t) << 3) & 255;
    }
  }
  r[6] = 15 & r[6] | 64;
  r[8] = 63 & r[8] | 128;
  e = 0;
  return [n[r[e++]], n[r[e++]], n[r[e++]], n[r[e++]], "-", n[r[e++]], n[r[e++]], "-", n[r[e++]], n[r[e++]], "-", n[r[e++]], n[r[e++]], "-", n[r[e++]], n[r[e++]], n[r[e++]], n[r[e++]], n[r[e++]], n[r[e++]]].join("");
}
export const g = $$a0;