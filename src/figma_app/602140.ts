export function $$n0(e, t) {
  let r = document.createElement("a");
  r.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(e));
  r.setAttribute("download", t + ".txt");
  r.style.display = "none";
  document.body.appendChild(r);
  r.click();
  document.body.removeChild(r);
}
export const j = $$n0;