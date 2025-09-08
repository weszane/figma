import { o1 } from "../figma_app/10554";
import { PluginInstallStatus } from "../figma_app/155287";
export function $$$$a0(e, t) {
  return e.entity_type === o1.ORG ? t.install_status === PluginInstallStatus.PLUGIN_INSTALLED_FOR_ORG : !!e.primary_user_id && t.profile_install_status === PluginInstallStatus.PLUGIN_INSTALLED_FOR_USER;
}
export const a = $$$$a0;