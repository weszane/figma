import { createLocalStorageAtom } from "../figma_app/27355";
/**
 * Atom for storing the development mode setting to show variable code syntax in list view.
 */
export const devModeShowVarCodeSyntaxAtom = createLocalStorageAtom("dev_mode_show_var_code_syntax_in_list_view", true);

/**
 * Alias for devModeShowVarCodeSyntaxAtom (original export name: v).
 */
export const v = devModeShowVarCodeSyntaxAtom;
