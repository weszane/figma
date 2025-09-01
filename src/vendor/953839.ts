let r = "Input must be an string, Buffer or Uint8Array";
function n(e) {
  let n;
  if (e instanceof Uint8Array) n = e;else if ("string" == typeof e) n = new TextEncoder().encode(e);else throw Error(r);
  return n;
}
function i(e) {
  return Array.prototype.map.call(e, function (e) {
    return (e < 16 ? "0" : "") + e.toString(16);
  }).join("");
}
function s(e) {
  return (0x100000000 + e).toString(16).substring(1);
}
function o(e, r, n) {
  let i = "\n" + e + " = ";
  for (let o = 0; o < r.length; o += 2) {
    if (32 === n) {
      i += s(r[o]).toUpperCase();
      i += " ";
      i += s(r[o + 1]).toUpperCase();
    } else if (64 === n) {
      i += s(r[o + 1]).toUpperCase();
      i += s(r[o]).toUpperCase();
    } else throw Error("Invalid size " + n);
    o % 6 == 4 ? i += "\n" + Array(e.length + 4).join(" ") : o < r.length - 2 && (i += " ");
  }
  console.log(i);
}
function a(e, r, n) {
  let i = new Date().getTime();
  let s = new Uint8Array(r);
  for (let e = 0; e < r; e++) s[e] = e % 256;
  let o = new Date().getTime();
  console.log("Generated random input in " + (o - i) + "ms");
  i = o;
  for (let o = 0; o < n; o++) {
    let n = e(s);
    let o = new Date().getTime();
    let a = o - i;
    i = o;
    console.log("Hashed in " + a + "ms: " + n.substring(0, 20) + "...");
    console.log(Math.round(r / 1048576 / (a / 1e3) * 100) / 100 + " MB PER SECOND");
  }
}
module.exports = {
  normalizeInput: n,
  toHex: i,
  debugPrint: o,
  testSpeed: a
};