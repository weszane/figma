export function isAppShellEnabled() {
  return !!document.querySelector('meta[name="is_app_shell"]');
}
export const O = isAppShellEnabled;
