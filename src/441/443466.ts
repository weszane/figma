var $$n0 = (e => (e.Light = "LIGHT", e.Dark = "DARK", e.Translucent = "TRANSLUCENT", e))($$n0 || {});
var r = (e => (e.Light = "light", e.Dark = "dark", e))(r || {});
export function $$a1(e) {
  let t;
  let i;
  switch (e.theme) {
    case void 0:
    case "LIGHT":
      t = "LIGHT";
      break;
    case "DARK":
    case "TRANSLUCENT":
      t = "DARK";
  }
  i = "LIGHT" === t ? "light" : "dark";
  let n = "true" === e.hideBackground;
  n && (i = function (e) {
    switch (e) {
      case "light":
        return "dark";
      case "dark":
        return "light";
    }
  }(i));
  return {
    theme: t,
    preferredTokenTheme: i,
    transparentMode: n
  };
}
export const Pm = $$n0;
export const aF = $$a1;