// Enum for representing different design conversion issues
export enum DesignIssueType {
  NoStyleForColor = 0,
  VariableNotResolved = 1,
  AbsolutePosition = 2,
  BordersDontTakeUpSpace = 3,
  SinglePaint = 4,
  UnsupportedPaint = 5,
  UnsupportedGradientPaint = 6,
  LeadingTrim = 7,
  PlusDarker = 8,
  BackgroundBlendModePlusLighterDarker = 9,
  SwiftUISeparateBorderWidth = 10,
  SwiftUIBlurNoSpread = 11,
  SwiftUIOnlySingleFillForShapes = 12,
  SwiftUISeparateCornerRadius = 13,
  SwiftUISpacersForSpaceBetween = 14,
  ComposeSeparateBorderWidth = 15,
  ComposeShadowIncompatibility = 16,
  ComposeBlurTip = 17,
  DisplayP3Fallback = 18,
  EffectsInSvg = 19,
  SwiftUIBackgroundBlur = 20,
}

// Enum for representing issue categories
export enum IssueCategoryEnum {
  Tooltip = "tooltip",
  Comment = "comment",
}

// Factory functions for creating issue objects
export interface DesignIssue {
  id: number
  type: IssueCategoryEnum
}

interface AbsolutePositionIssue extends DesignIssue {
  name: string
}

interface BlendModeIssue extends DesignIssue {
  value: string
}

function createAbsolutePositionIssue(name: string): AbsolutePositionIssue {
  return {
    id: DesignIssueType.AbsolutePosition,
    name,
    type: IssueCategoryEnum.Tooltip,
  }
}

function createBlendModeIssue(value: string): BlendModeIssue {
  return {
    id: DesignIssueType.BackgroundBlendModePlusLighterDarker,
    value,
    type: IssueCategoryEnum.Tooltip,
  }
}

// Design issue definitions with clear categorization
export const DesignIssues = {
  NoStyleForColor: {
    id: DesignIssueType.NoStyleForColor,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  VariableNotResolved: {
    id: DesignIssueType.VariableNotResolved,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  AbsolutePosition: createAbsolutePositionIssue,

  BordersDontTakeUpSpace: {
    id: DesignIssueType.BordersDontTakeUpSpace,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SinglePaint: {
    id: DesignIssueType.SinglePaint,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  UnsupportedPaint: {
    id: DesignIssueType.UnsupportedPaint,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  UnsupportedGradientPaint: {
    id: DesignIssueType.UnsupportedGradientPaint,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  LeadingTrim: {
    id: DesignIssueType.LeadingTrim,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  DisplayP3Fallback: {
    id: DesignIssueType.DisplayP3Fallback,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  PlusDarker: {
    id: DesignIssueType.PlusDarker,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  BackgroundBlendModePlusLighterDarker: createBlendModeIssue,

  EffectsInSvg: {
    id: DesignIssueType.EffectsInSvg,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SwiftUISeparateBorderWidth: {
    id: DesignIssueType.SwiftUISeparateBorderWidth,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SwiftUIBlurNoSpread: {
    id: DesignIssueType.SwiftUIBlurNoSpread,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SwiftUIOnlySingleFillForShapes: {
    id: DesignIssueType.SwiftUIOnlySingleFillForShapes,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SwiftUISeparateCornerRadius: {
    id: DesignIssueType.SwiftUISeparateCornerRadius,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SwiftUISpacersForSpaceBetween: {
    id: DesignIssueType.SwiftUISpacersForSpaceBetween,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  SwiftUIBackgroundBlur: {
    id: DesignIssueType.SwiftUIBackgroundBlur,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  ComposeSeparateBorderWidth: {
    id: DesignIssueType.ComposeSeparateBorderWidth,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  ComposeShadowIncompatibility: {
    id: DesignIssueType.ComposeShadowIncompatibility,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,

  ComposeBlurTip: {
    id: DesignIssueType.ComposeBlurTip,
    type: IssueCategoryEnum.Tooltip,
  } as DesignIssue,
}

// Export aliases for backward compatibility
export const A2 = DesignIssues
export const bv = IssueCategoryEnum
export const eo = DesignIssueType
