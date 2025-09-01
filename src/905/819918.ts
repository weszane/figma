export function $$n0(e) {
  let t;
  try {
    t = JSON.parse(a(e.split(".")[1]));
  } catch (e) {
    return null;
  }
  return t;
}
let r = e => decodeURIComponent(atob(e).replace(/(.)/g, function (e, t) {
  var i = t.charCodeAt(0).toString(16).toUpperCase();
  i.length < 2 && (i = "0" + i);
  return "%" + i;
}));
let a = e => {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return r(t);
  } catch (e) {
    return atob(t);
  }
};
export const z = $$n0;