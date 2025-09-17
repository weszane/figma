import { memo } from 'react'
import { jsx } from 'react/jsx-runtime'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { Z } from '../905/236383'
import { $ } from '../905/302575'
import { getI18nString } from '../905/303541'
import { o as _$$o } from '../905/486078'
import { O as _$$O } from '../905/501876'
import { z } from '../905/510753'
import { ProductAccessTypeEnum } from '../905/513035'
import { T as _$$T } from '../905/514205'
import { getFeatureFlags } from '../905/601108'
import { a as _$$a2 } from '../905/676930'
import { e as _$$e2 } from '../905/693478'
import { a as _$$a } from '../905/693578'
import { D as _$$D } from '../905/711533'
import { V } from '../905/761565'
import { l as _$$l } from '../905/840533'
import { buildUploadUrl } from '../figma_app/169182'
import { FPlanNameType, FProductAccessType } from '../figma_app/191312'
/**
 * LicenseTypeConfig - Configuration for each product access type.
 */
export interface SeatDescriptionConfig {
  shouldShow: (planName?: FPlanNameType) => boolean
  icon16: React.ComponentType<any>
  icon24: React.ComponentType<any>
}

export interface LicenseTypeConfig {
  productNameShort: () => string
  productName: () => string
  productNameBeta?: () => string
  minimumBundle: ProductAccessTypeEnum | null
  seatDescriptionConfig?: SeatDescriptionConfig
}

export interface LicenseTypeUpgradeConfig {
  productIcon: React.ComponentType<any>
  productBackgroundImgHash: {
    dark: string
    light: string
  }
  editorTheme: string
  translations: {
    defaultRequestModalTitle: () => string
  }
}

const CooperConfig: LicenseTypeConfig = {
  // c
  productNameShort: () => getI18nString('general.figma_buzz'),
  productName: () => getI18nString('general.figma_buzz'),
  minimumBundle: getFeatureFlags().billing_enable_content_seat ? ProductAccessTypeEnum.CONTENT : null,
}

const DesignConfig: LicenseTypeConfig = {
  // m
  productNameShort: () => getI18nString('general.figma_design_short'),
  productName: () => getI18nString('general.figma_design'),
  minimumBundle: ProductAccessTypeEnum.EXPERT,
  seatDescriptionConfig: {
    shouldShow: () => true,
    icon16: z,
    icon24: _$$a,
  },
}

const DesignUpgradeConfig: LicenseTypeUpgradeConfig = {
  // h
  productIcon: z,
  productBackgroundImgHash: {
    dark: '4db855791a85e159e85daecbafe7310368a7a925',
    light: '4eff99bc26e56fa3fc3a67ad414821f0cdf86b25',
  },
  editorTheme: 'design',
  translations: {
    defaultRequestModalTitle: () => getI18nString('request_upgrade.header.design'),
  },
}

const DevModeConfig: LicenseTypeConfig = {
  // _
  productNameShort: () => getI18nString('general.dev_mode'),
  productName: () => getI18nString('general.dev_mode'),
  minimumBundle: ProductAccessTypeEnum.DEVELOPER,
  seatDescriptionConfig: {
    shouldShow: () => true,
    icon16: _$$O,
    icon24: _$$l,
  },
}

const DevModeUpgradeConfig: LicenseTypeUpgradeConfig = {
  // A
  productIcon: _$$O,
  productBackgroundImgHash: {
    dark: '5af365b6469aeba5827058a5bc89f8cfd231a755',
    light: '54dac14e109b2044abd568aa9c6b0afbdfc3c7ae',
  },
  editorTheme: 'dev-handoff',
  translations: {
    defaultRequestModalTitle: () => getI18nString('request_upgrade.header.dev_mode'),
  },
}

const FigmakeConfig: LicenseTypeConfig = {
  // v
  productNameShort: () => getI18nString('general.figma_rev'),
  productName: () => getI18nString('general.figma_rev'),
  productNameBeta: getFeatureFlags().ai_ga ? undefined : () => getI18nString('general.figma_make_beta'),
  minimumBundle: ProductAccessTypeEnum.EXPERT,
  seatDescriptionConfig: {
    shouldShow: (e) => {
      // original function inline
      return e === FPlanNameType.STARTER
        ? !!getFeatureFlags().bake_starter_limit
        : e !== FPlanNameType.STUDENT
          && (e === FPlanNameType.PRO
            || e === FPlanNameType.ORG
            || e === FPlanNameType.ENTERPRISE)
          && !!getFeatureFlags().bake_full_seat_description
    },
    icon16: Z,
    icon24: _$$e2,
  },
}

const FigmakeUpgradeConfig: LicenseTypeUpgradeConfig = {
  // I
  productIcon: Z,
  productBackgroundImgHash: {
    dark: '3f0db48feeade5b862bd21e603c5e7541decff24',
    light: '14e8447dce093f4cbab8fe38656cc547d3f6117a',
  },
  editorTheme: 'bake-filebrowser',
  translations: {
    defaultRequestModalTitle: () => getI18nString('request_upgrade.header.figmake'),
  },
}

const SitesConfig: LicenseTypeConfig = {
  // w
  productNameShort: () => getI18nString('general.sites'),
  productName: () => getI18nString('general.figma_sites'),
  productNameBeta: () => getI18nString('general.figma_sites_beta'),
  minimumBundle: ProductAccessTypeEnum.EXPERT,
  seatDescriptionConfig: {
    shouldShow: e => V(e),
    icon16: $,
    icon24: _$$a2,
  },
}

const SitesUpgradeConfig: LicenseTypeUpgradeConfig = {
  // C
  productIcon: $,
  productBackgroundImgHash: {
    dark: 'e5a91d8610b49b875188d308ba52333c47a3d958',
    light: 'd9eaa9441b01bcd9d85dcef7f5b13b6bfa86829b',
  },
  editorTheme: 'seascape',
  translations: {
    defaultRequestModalTitle: () => getI18nString('request_upgrade.header.sites'),
  },
}

const SlidesConfig: LicenseTypeConfig = {
  // R
  productNameShort: () => getI18nString('general.figma_slides_short'),
  productName: () => getI18nString('general.figma_slides'),
  minimumBundle: ProductAccessTypeEnum.COLLABORATOR,
  seatDescriptionConfig: {
    shouldShow: () => true,
    icon16: _$$T,
    icon24: _$$o,
  },
}

const SlidesUpgradeConfig: LicenseTypeUpgradeConfig = {
  // N
  productIcon: _$$T,
  productBackgroundImgHash: {
    dark: '47baaec1438d32e82b627ac1bcfb956aee11865b',
    light: 'b6299082220ada26c36037e0eaebc5c3b0ec2636',
  },
  editorTheme: 'piper',
  translations: {
    defaultRequestModalTitle: () => getI18nString('request_upgrade.header.slides'),
  },
}

/**
 * Icon for Figjam 24px
 */
const FigjamIcon24: React.FC<any> = memo((props) => {
  // D
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...props,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18 4a2 2 0 0 1 2 2v6.172l-.01.197a2 2 0 0 1-.576 1.217l-5.828 5.828-.146.133a2 2 0 0 1-1.268.453H6l-.204-.01A2 2 0 0 1 4 18V6a2 2 0 0 1 2-2zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6v-5a2 2 0 0 1 2-2h5V6a1 1 0 0 0-1-1zm8 8a1 1 0 0 0-1 1v4.586L18.586 13z',
    }),
  })
})

const FigjamConfig: LicenseTypeConfig = {
  // L
  productNameShort: () => getI18nString('general.figjam'),
  productName: () => getI18nString('general.figjam'),
  minimumBundle: ProductAccessTypeEnum.COLLABORATOR,
  seatDescriptionConfig: {
    shouldShow: () => true,
    icon16: _$$D,
    icon24: FigjamIcon24,
  },
}

const FigjamUpgradeConfig: LicenseTypeUpgradeConfig = {
  // F
  productIcon: _$$D,
  productBackgroundImgHash: {
    dark: '6dfc9076d0bffcd6b1407e02c166179d8d3b658e',
    light: 'c929588c2d64daf221de7361f859c2fd6b0c7e7e',
  },
  editorTheme: 'whiteboard',
  translations: {
    defaultRequestModalTitle: () => getI18nString('request_upgrade.header.figjam'),
  },
}

/**
 * Maps for LicenseTypeConfig and LicenseTypeUpgradeConfig
 */
const LicenseTypeConfigMap: Record<FProductAccessType, LicenseTypeConfig> = {
  [FProductAccessType.DESIGN]: DesignConfig,
  [FProductAccessType.WHITEBOARD]: FigjamConfig,
  [FProductAccessType.DEV_MODE]: DevModeConfig,
  [FProductAccessType.SLIDES]: SlidesConfig,
  [FProductAccessType.SITES]: SitesConfig,
  [FProductAccessType.FIGMAKE]: FigmakeConfig,
  [FProductAccessType.COOPER]: CooperConfig,
}

const LicenseTypeUpgradeConfigMap: Record<FProductAccessType, LicenseTypeUpgradeConfig | null> = {
  [FProductAccessType.DESIGN]: DesignUpgradeConfig,
  [FProductAccessType.WHITEBOARD]: FigjamUpgradeConfig,
  [FProductAccessType.DEV_MODE]: DevModeUpgradeConfig,
  [FProductAccessType.SLIDES]: SlidesUpgradeConfig,
  [FProductAccessType.SITES]: SitesUpgradeConfig,
  [FProductAccessType.FIGMAKE]: FigmakeUpgradeConfig,
  [FProductAccessType.COOPER]: null,
}

/**
 * Get LicenseTypeConfig for a given product access type.
 * @param type FProductAccessType
 * @returns LicenseTypeConfig
 */
export function getLicenseTypeConfig(type: FProductAccessType): LicenseTypeConfig {
  // U
  if (LicenseTypeConfigMap[type]) {
    return LicenseTypeConfigMap[type]
  }
  reportError(ServiceCategories.MONETIZATION_EXPANSION, new Error(`Error getting LicenseTypeConfig for license type '${type}'`), {
    extra: { licenseType: type },
  })
  return DesignConfig
}

/**
 * Get LicenseTypeUpgradeConfig for a given product access type.
 * @param type FProductAccessType
 * @param fallback boolean
 * @returns LicenseTypeUpgradeConfig
 */
export function getLicenseTypeUpgradeConfig(type: FProductAccessType, fallback: boolean): LicenseTypeUpgradeConfig {
  // B
  const config = LicenseTypeUpgradeConfigMap[type]
  if (config === undefined) {
    reportError(ServiceCategories.MONETIZATION_EXPANSION, new Error(`Error getting LicenseTypeUpgradeConfig for license type '${type}'`), {
      extra: { licenseType: type },
    })
    return DesignUpgradeConfig
  }
  return fallback ? config ?? DesignUpgradeConfig : config
}

/**
 * Returns whether seat description should show for a given product access type and plan.
 * @param type FProductAccessType
 * @param planName FPlanNameType
 */
export function shouldShowSeatDescription(type: FProductAccessType, planName?: FPlanNameType): boolean {
  // $$V8
  return getLicenseTypeConfig(type).seatDescriptionConfig?.shouldShow(planName) ?? false
}

/**
 * Returns the product name for a given product access type.
 * @param type FProductAccessType
 */
export function getProductName(type: FProductAccessType): string {
  // $$G5
  return getLicenseTypeConfig(type).productName()
}

/**
 * Returns the beta product name if available, otherwise the regular product name.
 * @param type FProductAccessType
 */
export function getProductNameBeta(type: FProductAccessType): string {
  // $$z6
  const config = getLicenseTypeConfig(type)
  return config.productNameBeta ? config.productNameBeta() : config.productName()
}

/**
 * Returns the minimum bundle for a given product access type.
 * @param type FProductAccessType
 */
export function getMinimumBundle(type: FProductAccessType): ProductAccessTypeEnum | null {
  // $$H2
  return getLicenseTypeConfig(type).minimumBundle
}

/**
 * Returns the product icon for a given product access type.
 * @param type FProductAccessType
 */
export function getProductIcon(type: FProductAccessType): React.ComponentType<any> {
  // $$W4
  return getLicenseTypeUpgradeConfig(type, true).productIcon
}

/**
 * Returns the product background image URL for a given product access type and theme.
 * @param type FProductAccessType
 * @param theme 'light' | 'dark'
 */
export function getProductBackgroundImgUrl(type: FProductAccessType, theme: 'light' | 'dark' = 'light'): string {
  // $$K3
  const hash = getLicenseTypeUpgradeConfig(type, true).productBackgroundImgHash[theme]
  return buildUploadUrl(hash)
}

/**
 * Returns the editor theme for a given product access type.
 * @param type FProductAccessType
 */
export function getEditorTheme(type: FProductAccessType): string {
  // $$Y1
  return getLicenseTypeUpgradeConfig(type, true).editorTheme
}

/**
 * Returns the seat description icon for a given product access type and size.
 * @param type FProductAccessType
 * @param size '16' | '24'
 */
export function getSeatDescriptionIcon(type: FProductAccessType, size: '16' | '24' = '16'): React.ComponentType<any> | null {
  // $$q7
  const config = getLicenseTypeConfig(type)
  return config.seatDescriptionConfig ? config.seatDescriptionConfig[`icon${size}`] : null
}

/**
 * Returns the default request modal title for a given product access type.
 * @param type FProductAccessType
 */
export function getDefaultRequestModalTitle(type: FProductAccessType): string {
  // $$$0
  const upgradeConfig = getLicenseTypeUpgradeConfig(type, false)
  return upgradeConfig?.translations.defaultRequestModalTitle() || getI18nString('request_upgrade.header.license_type', {
    licenseType: getProductName(type),
  })
}

// Exported aliases for backward compatibility
export const A7 = getDefaultRequestModalTitle
export const ju = getEditorTheme
export const F2 = getMinimumBundle
export const E2 = getProductBackgroundImgUrl
export const FN = getProductIcon
export const VG = getProductName
export const sC = getProductNameBeta
export const JW = getSeatDescriptionIcon
export const lG = shouldShowSeatDescription
