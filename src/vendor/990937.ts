export function $$i0() {
  var e;
  let r = window.navigator;
  return {
    status: r.onLine ? "connected" : "not_connected",
    interfaces: r.connection && r.connection.type ? [r.connection.type] : void 0,
    effective_type: r.connection?.effectiveType
  };
}
export const q = $$i0;