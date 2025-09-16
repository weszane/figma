import { createActionCreator } from '../905/73481'
/**
 * Action creator for setting plugin allowlisted status.
 * Original variable: $$r0
 */
export const setPluginAllowlisted = createActionCreator('PLUGIN_SET_ALLOWLISTED')

/**
 * Action creator for setting widgets allowlisted status.
 * Original variable: $$a1
 */
export const setWidgetsAllowlisted = createActionCreator('WIDGETS_SET_ALLOWLISTED')
export const P = setPluginAllowlisted
export const o = setWidgetsAllowlisted
