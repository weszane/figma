export function $$u0(...e) {
  return (...t) => {
    for (let a of e) "function" == typeof a && a(...t);
  };
}
export const c = $$u0;