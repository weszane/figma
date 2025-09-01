let a = 443 == require.j ? 864e5 : null;
let r = () => Date.now() - 14 * a;
export function $$i0({
  userCreatedAt: e,
  lastUsedFigjamDate: t,
  hasSeenOverlayV2: n
}) {
  return !!(e.getTime() <= r() && (null == t || t.getTime() <= r())) && !n;
}
export const f = $$i0;