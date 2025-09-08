import { PropTypes } from '../905/816730'

/**
 * PropTypes definitions for plugin configuration and menu structures.
 * Original variable names preserved for traceability.
 */

/**
 * @typedef {object} Parameter
 * @property {string} name
 * @property {string} key
 * @property {string} description
 * @property {boolean} optional
 * @property {boolean} allowFreeform
 */
const parameterPropType = PropTypes.arrayOf(
  PropTypes.exact({
    name: PropTypes.string,
    key: PropTypes.string,
    description: PropTypes.string.isOptional,
    optional: PropTypes.bool.isOptional,
    allowFreeform: PropTypes.bool.isOptional,
  }),
) // r

/**
 * @typedef {object} MenuCommand
 * @property {string} command
 * @property {string} name
 * @property {Parameter[]} parameters
 * @property {boolean} parameterOnly
 */
const menuCommandPropType = PropTypes.exact({
  command: PropTypes.string,
  name: PropTypes.string,
  parameters: parameterPropType.isOptional,
  parameterOnly: PropTypes.bool.isOptional,
})

/**
 * @typedef {object} MenuSeparator
 * @property {boolean} separator
 */
const menuSeparatorPropType = PropTypes.exact({
  separator: true,
})

/**
 * @typedef {object} MenuSubmenu
 * @property {string} name
 * @property {Menu[]} menu
 */
const menuSubmenuPropType = PropTypes.exact({
  name: PropTypes.string,
  get menu() {
    // eslint-disable-next-line ts/no-use-before-define
    return menuPropType
  },
})

/**
 * @typedef {MenuCommand | MenuSeparator | MenuSubmenu} Menu
 */
const menuPropType = PropTypes.arrayOf(
  PropTypes.oneOf([
    menuCommandPropType,
    menuSeparatorPropType,
    menuSubmenuPropType,
  ]),
) // a

const stringArrayOptionalPropType = PropTypes.arrayOf(PropTypes.string).isOptional // s

/**
 * @typedef {object} CodegenAction
 * @property {'action'} itemType
 * @property {string} propertyName
 * @property {string} label
 * @property {string[]} includedLanguages
 */
const codegenActionPropType = PropTypes.exact({
  itemType: 'action',
  propertyName: PropTypes.string,
  label: PropTypes.string.isOptional,
  includedLanguages: stringArrayOptionalPropType,
})

/**
 * @typedef {object} CodegenUnit
 * @property {'unit'} itemType
 * @property {string} scaledUnit
 * @property {number} defaultScaleFactor
 * @property {boolean} default
 * @property {string[]} includedLanguages
 */
const codegenUnitPropType = PropTypes.exact({
  itemType: 'unit',
  scaledUnit: PropTypes.string,
  defaultScaleFactor: PropTypes.float.isOptional,
  default: PropTypes.bool.isOptional,
  includedLanguages: stringArrayOptionalPropType,
})

/**
 * @typedef {object} CodegenSelectOption
 * @property {string} value
 * @property {string} label
 * @property {boolean} isDefault
 */
const codegenSelectOptionPropType = PropTypes.exact({
  value: PropTypes.string,
  label: PropTypes.string,
  isDefault: PropTypes.bool.isOptional,
})

/**
 * @typedef {object} CodegenSelect
 * @property {'select'} itemType
 * @property {string} propertyName
 * @property {string} label
 * @property {string[]} includedLanguages
 * @property {CodegenSelectOption[]} options
 */
const codegenSelectPropType = PropTypes.exact({
  itemType: 'select',
  propertyName: PropTypes.string,
  label: PropTypes.string.isOptional,
  includedLanguages: stringArrayOptionalPropType,
  options: PropTypes.arrayOf(codegenSelectOptionPropType),
})

/**
 * @typedef {CodegenAction | CodegenUnit | CodegenSelect} CodegenPreference
 */
const codegenPreferencesPropType = PropTypes.arrayOf(
  PropTypes.oneOf([
    codegenActionPropType,
    codegenUnitPropType,
    codegenSelectPropType,
  ]),
).isOptional // o

/**
 * @typedef {object} CodegenLanguage
 * @property {string} label
 * @property {string} value
 */
const codegenLanguagePropType = PropTypes.exact({
  label: PropTypes.string,
  value: PropTypes.string,
}) // l

const capabilitiesPropType = PropTypes.arrayOf(PropTypes.string).isOptional // $$c3
const editorTypePropType = PropTypes.arrayOf(PropTypes.string).isOptional // $$d4

/**
 * @typedef {object} NetworkAccess
 * @property {string[]} allowedDomains
 * @property {string} reasoning
 * @property {string[]} devAllowedDomains
 */
const networkAccessPropType = PropTypes.exact({
  allowedDomains: PropTypes.arrayOf(PropTypes.string),
  reasoning: PropTypes.string.isOptional,
  devAllowedDomains: PropTypes.arrayOf(PropTypes.string).isOptional,
})

/**
 * @typedef {object} PluginBase
 * @property {string} id
 * @property {string} name
 * @property {string} api
 * @property {string} main
 * @property {string|object} ui
 * @property {string} build
 * @property {boolean} enableProposedApi
 * @property {boolean} enablePrivatePluginApi
 * @property {string[]} permissions
 * @property {string[]} capabilities
 * @property {NetworkAccess} networkAccess
 * @property {string} documentAccess
 */
const pluginBasePropType = {
  id: PropTypes.string.isOptional,
  name: PropTypes.string,
  api: PropTypes.string,
  main: PropTypes.string,
  ui: PropTypes.oneOf([
    PropTypes.string.isOptional,
    PropTypes.dictionaryOf(PropTypes.string.isOptional),
  ]),
  build: PropTypes.string.isOptional,
  enableProposedApi: PropTypes.bool.isOptional,
  enablePrivatePluginApi: PropTypes.bool.isOptional,
  permissions: PropTypes.arrayOf(PropTypes.string).isOptional,
  capabilities: capabilitiesPropType,
  networkAccess: networkAccessPropType.isOptional,
  documentAccess: PropTypes.string.isOptional,
} // u

/**
 * @typedef {object} PluginManifest
 * @property {Menu[]} menu
 * @property {object[]} relaunchButtons
 * @property {Parameter[]} parameters
 * @property {boolean} parameterOnly
 * @property {string[]} editorType
 * @property {boolean} enableReadOnly
 * @property {CodegenLanguage[]} codegenLanguages
 * @property {CodegenPreference[]} codegenPreferences
 * @property {string[]} relatedLinkDomains
 * @property {string[]} devResourceDomains
 */
const pluginManifestPropType = PropTypes.exact({
  ...pluginBasePropType,
  menu: menuPropType.isOptional,
  relaunchButtons: PropTypes.arrayOf(
    PropTypes.exact({
      command: PropTypes.string,
      name: PropTypes.string,
      multipleSelection: PropTypes.bool.isOptional,
    }),
  ).isOptional,
  parameters: parameterPropType.isOptional,
  parameterOnly: PropTypes.bool.isOptional,
  editorType: editorTypePropType,
  enableReadOnly: PropTypes.bool.isOptional,
  codegenLanguages: PropTypes.arrayOf(codegenLanguagePropType).isOptional,
  codegenPreferences: codegenPreferencesPropType,
  relatedLinkDomains: PropTypes.arrayOf(PropTypes.string).isOptional,
  devResourceDomains: PropTypes.arrayOf(PropTypes.string).isOptional,
}) // $$p1

/**
 * @typedef {object} WidgetManifest
 * @property {boolean} containsWidget
 * @property {string} widgetApi
 * @property {string[]} editorType
 */
const widgetManifestPropType = PropTypes.exact({
  ...pluginBasePropType,
  containsWidget: true,
  widgetApi: PropTypes.string.isOptional,
  editorType: editorTypePropType,
}) // $$m0

/**
 * @typedef {object} DragItem
 * @property {string} type
 * @property {string} data
 */
const dragItemPropType = PropTypes.exact({
  type: PropTypes.string,
  data: PropTypes.string,
}) // h

/**
 * @typedef {object} DragEvent
 * @property {number} clientX
 * @property {number} clientY
 * @property {DragItem[]} items
 * @property {any[]} files
 * @property {any} dropMetadata
 */
const dragEventPropType = PropTypes.exact({
  clientX: PropTypes.float,
  clientY: PropTypes.float,
  items: PropTypes.arrayOf(dragItemPropType).isOptional,
  files: PropTypes.arrayOf(PropTypes.any).isOptional,
  dropMetadata: PropTypes.any.isOptional,
}) // $$g2

// Export refactored names
export const Vf = widgetManifestPropType
export const _O = pluginManifestPropType
export const fK = dragEventPropType
export const hb = capabilitiesPropType
export const ib = editorTypePropType
