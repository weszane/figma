import { throwError } from "../figma_app/465776";
import { defaultCornerRadius, modalZ, secondaryModalZ, curatorTertiaryModalZ, topBarZ, templateModalTeamName } from "../figma_app/786175";
let t = {
  display: [["block", "block"], ["flex", "flex"], ["grid", "grid"], ["hidden", "none"], ["inline", "inline"], ["inlineBlock", "inline-block"], ["inlineFlex", "inline-flex"]],
  alignContent: [["contentCenter", "center"]],
  alignItems: [["itemsBaseline", "baseline"], ["itemsCenter", "center"], ["itemsEnd", "flex-end"], ["itemsStart", "flex-start"], ["itemsStretch", "stretch"]],
  alignSelf: [["itemSelfStretch", "stretch"], ["itemSelfCenter", "center"], ["itemSelfStart", "flex-start"]],
  placeSelf: [["selfCenter", "center"]],
  justifyContent: [["justifyCenter", "center"], ["justifyEnd", "flex-end"], ["justifyBetween", "space-between"], ["justifyStart", "flex-start"]],
  flexDirection: [["flexColumn", "column"], ["flexColumnReverse", "column-reverse"], ["flexRow", "row"], ["flexRowReverse", "row-reverse"]],
  flexFlow: [["flexRowNoWrap", "row nowrap"]],
  flexGrow: [["flexGrow0", 0], ["flexGrow1", 1]],
  flexShrink: [["flexShrink0", 0], ["flexShrink1", 1]],
  flexWrap: [["flexNowrap", "nowrap"], ["flexWrap", "wrap"]],
  flexBasis: [["flexBasis0", "0"], ["flexBasisAuto", "auto"]],
  gridColumnStart: [["gridColumnStart1", "1"], ["gridColumnStart2", "2"], ["gridColumnStart3", "3"], ["gridColumnStart4", "4"], ["gridColumnStart5", "5"], ["gridColumnStart6", "6"], ["gridColumnStart7", "7"], ["gridColumnStart8", "8"], ["gridColumnStart9", "9"], ["gridColumnStart10", "10"], ["gridColumnStart11", "11"], ["gridColumnStart12", "12"], ["gridColumnStart13", "13"], ["gridColumnStart14", "14"], ["gridColumnStart15", "15"], ["gridColumnStart16", "16"], ["gridColumnStart17", "17"], ["gridColumnStart18", "18"], ["gridColumnStart19", "19"], ["gridColumnStart20", "20"], ["gridColumnStart21", "21"], ["gridColumnStart22", "22"], ["gridColumnStart23", "23"], ["gridColumnStart24", "24"], ["gridColumnStart25", "25"], ["gridColumnStart26", "26"], ["gridColumnStart27", "27"], ["gridColumnStart28", "28"], ["gridColumnStart29", "29"], ["gridColumnStart30", "30"], ["gridColumnStart31", "31"], ["gridColumnStart32", "32"]],
  gridColumnEnd: [["gridColumnEnd1", "1"], ["gridColumnEnd2", "2"], ["gridColumnEnd3", "3"], ["gridColumnEnd4", "4"], ["gridColumnEnd5", "5"], ["gridColumnEnd6", "6"], ["gridColumnEnd7", "7"], ["gridColumnEnd8", "8"], ["gridColumnEnd9", "9"], ["gridColumnEnd10", "10"], ["gridColumnEnd11", "11"], ["gridColumnEnd12", "12"], ["gridColumnEnd13", "13"], ["gridColumnEnd14", "14"], ["gridColumnEnd15", "15"], ["gridColumnEnd16", "16"], ["gridColumnEnd17", "17"], ["gridColumnEnd18", "18"], ["gridColumnEnd19", "19"], ["gridColumnEnd20", "20"], ["gridColumnEnd21", "21"], ["gridColumnEnd22", "22"], ["gridColumnEnd23", "23"], ["gridColumnEnd24", "24"], ["gridColumnEnd25", "25"], ["gridColumnEnd26", "26"], ["gridColumnEnd27", "27"], ["gridColumnEnd28", "28"], ["gridColumnEnd29", "29"], ["gridColumnEnd30", "30"], ["gridColumnEnd31", "31"], ["gridColumnEnd32", "32"], ["gridColumnEndSpan1", "span 1"], ["gridColumnEndSpan2", "span 2"], ["gridColumnEndSpan3", "span 3"], ["gridColumnEndSpan4", "span 4"], ["gridColumnEndSpan5", "span 5"], ["gridColumnEndSpan6", "span 6"], ["gridColumnEndSpan7", "span 7"], ["gridColumnEndSpan8", "span 8"], ["gridColumnEndSpan9", "span 9"], ["gridColumnEndSpan10", "span 10"]],
  gridRowEnd: [["gridRowEnd1", "1"], ["gridRowEnd2", "2"]],
  gridTemplateColumns: [["gridTemplateColumns1", "repeat(1, 1fr)"], ["gridTemplateColumns2", "repeat(2, 1fr)"], ["gridTemplateColumns3", "repeat(3, 1fr)"], ["gridTemplateColumns4", "repeat(4, 1fr)"], ["gridTemplateColumns5", "repeat(5, 1fr)"]],
  gridTemplateRows: [["gridTemplateRows1", "repeat(1, 1fr)"], ["gridTemplateRows2", "repeat(2, 1fr)"], ["gridTemplateRows3", "repeat(3, 1fr)"], ["gridTemplateRows4", "repeat(4, 1fr)"], ["gridTemplateRows5", "repeat(5, 1fr)"]],
  overflow: [["overflowAuto", "auto"], ["overflowHidden", "hidden"]],
  overflowWrap: [["overflowBreakWord", "break-word"], ["overflowWrapAnywhere", "anywhere"]],
  overflowX: [["overflowXHidden", "hidden"]],
  overflowY: [["overflowYScroll", "scroll"]],
  textOverflow: [["ellipsis", "ellipsis"]],
  opacity: [["opacity0", "0"], ["opacity0_3", "0.3"], ["opacity0_5", "0.5"], ["opacity1", "1"]],
  position: [["absolute", "absolute"], ["fixed", "fixed"], ["relative", "relative"], ["sticky", "sticky"]],
  top: [["topHalf", "50%"], ["topToolbarHeight", "var(--toolbar-height)"], ["top0", "0"]],
  right: [["right0", "0"]],
  bottom: [["bottom0", "0"]],
  left: [["left0", "0"], ["leftHalf", "50%"]],
  backgroundSize: [["bgContain", "contain"], ["bgCover", "cover"]],
  backgroundRepeat: [["bgNoRepeat", "no-repeat"]],
  backgroundPosition: [["bgPosCenter", "center"]],
  backgroundClip: [["bgClipPaddingBox", "padding-box"]],
  backgroundColor: [["bgTransparent", "transparent"], ["bgNone", "initial"], ["colorBg", "var(--color-bg, var(--fallback-color-bg))"], ["colorBgAssistive", "var(--color-bg-assistive, var(--fallback-color-bg-assistive))"], ["colorBgAssistiveHover", "var(--color-bg-assistive-hover, var(--fallback-color-bg-assistive-hover))"], ["colorBgAssistivePressed", "var(--color-bg-assistive-pressed, var(--fallback-color-bg-assistive-pressed))"], ["colorBgAssistiveSecondary", "var(--color-bg-assistive-secondary, var(--fallback-color-bg-assistive-secondary))"], ["colorBgAssistiveTertiary", "var(--color-bg-assistive-tertiary, var(--fallback-color-bg-assistive-tertiary))"], ["colorBgBrand", "var(--color-bg-brand, var(--fallback-color-bg-brand))"], ["colorBgBrandHover", "var(--color-bg-brand-hover, var(--fallback-color-bg-brand-hover))"], ["colorBgBrandPressed", "var(--color-bg-brand-pressed, var(--fallback-color-bg-brand-pressed))"], ["colorBgBrandSecondary", "var(--color-bg-brand-secondary, var(--fallback-color-bg-brand-secondary))"], ["colorBgBrandTertiary", "var(--color-bg-brand-tertiary, var(--fallback-color-bg-brand-tertiary))"], ["colorBgComponent", "var(--color-bg-component, var(--fallback-color-bg-component))"], ["colorBgComponentHover", "var(--color-bg-component-hover, var(--fallback-color-bg-component-hover))"], ["colorBgComponentPressed", "var(--color-bg-component-pressed, var(--fallback-color-bg-component-pressed))"], ["colorBgComponentSecondary", "var(--color-bg-component-secondary, var(--fallback-color-bg-component-secondary))"], ["colorBgComponentTertiary", "var(--color-bg-component-tertiary, var(--fallback-color-bg-component-tertiary))"], ["colorBgDanger", "var(--color-bg-danger, var(--fallback-color-bg-danger))"], ["colorBgDangerHover", "var(--color-bg-danger-hover, var(--fallback-color-bg-danger-hover))"], ["colorBgDangerPressed", "var(--color-bg-danger-pressed, var(--fallback-color-bg-danger-pressed))"], ["colorBgDangerSecondary", "var(--color-bg-danger-secondary, var(--fallback-color-bg-danger-secondary))"], ["colorBgDangerTertiary", "var(--color-bg-danger-tertiary, var(--fallback-color-bg-danger-tertiary))"], ["colorBgDesign", "var(--color-bg-design, var(--fallback-color-bg-design))"], ["colorBgDesignHover", "var(--color-bg-design-hover, var(--fallback-color-bg-design-hover))"], ["colorBgDesignPressed", "var(--color-bg-design-pressed, var(--fallback-color-bg-design-pressed))"], ["colorBgDesignSecondary", "var(--color-bg-design-secondary, var(--fallback-color-bg-design-secondary))"], ["colorBgDesignTertiary", "var(--color-bg-design-tertiary, var(--fallback-color-bg-design-tertiary))"], ["colorBgDisabled", "var(--color-bg-disabled, var(--fallback-color-bg-disabled))"], ["colorBgDisabledSecondary", "var(--color-bg-disabled-secondary, var(--fallback-color-bg-disabled-secondary))"], ["colorBgFigjam", "var(--color-bg-figjam, var(--fallback-color-bg-figjam))"], ["colorBgFigjamHover", "var(--color-bg-figjam-hover, var(--fallback-color-bg-figjam-hover))"], ["colorBgFigjamPressed", "var(--color-bg-figjam-pressed, var(--fallback-color-bg-figjam-pressed))"], ["colorBgFigjamSecondary", "var(--color-bg-figjam-secondary, var(--fallback-color-bg-figjam-secondary))"], ["colorBgFigjamTertiary", "var(--color-bg-figjam-tertiary, var(--fallback-color-bg-figjam-tertiary))"], ["colorBgHover", "var(--color-bg-hover, var(--fallback-color-bg-hover))"], ["colorBgInfo", "var(--color-bg-info, var(--fallback-color-bg-info))"], ["colorBgInverse", "var(--color-bg-inverse, var(--fallback-color-bg-inverse))"], ["colorBgMenu", "var(--color-bg-menu, var(--fallback-color-bg-menu))"], ["colorBgMenuDisabled", "var(--color-bg-menu-disabled, var(--fallback-color-bg-menu-disabled))"], ["colorBgMenuHover", "var(--color-bg-menu-hover, var(--fallback-color-bg-menu-hover))"], ["colorBgMenuPressed", "var(--color-bg-menu-pressed, var(--fallback-color-bg-menu-pressed))"], ["colorBgMenuSecondary", "var(--color-bg-menu-secondary, var(--fallback-color-bg-menu-secondary))"], ["colorBgMenuSelected", "var(--color-bg-menu-selected, var(--fallback-color-bg-menu-selected))"], ["colorBgMenuSelectedHover", "var(--color-bg-menu-selected-hover, var(--fallback-color-bg-menu-selected-hover))"], ["colorBgMenuSelectedPressed", "var(--color-bg-menu-selected-pressed, var(--fallback-color-bg-menu-selected-pressed))"], ["colorBgMenuSelectedSecondary", "var(--color-bg-menu-selected-secondary, var(--fallback-color-bg-menu-selected-secondary))"], ["colorBgMenuSelectedTertiary", "var(--color-bg-menu-selected-tertiary, var(--fallback-color-bg-menu-selected-tertiary))"], ["colorBgMenuTertiary", "var(--color-bg-menu-tertiary, var(--fallback-color-bg-menu-tertiary))"], ["colorBgOnselected", "var(--color-bg-onselected, var(--fallback-color-bg-onselected))"], ["colorBgOnselectedHover", "var(--color-bg-onselected-hover, var(--fallback-color-bg-onselected-hover))"], ["colorBgOnselectedPressed", "var(--color-bg-onselected-pressed, var(--fallback-color-bg-onselected-pressed))"], ["colorBgPressed", "var(--color-bg-pressed, var(--fallback-color-bg-pressed))"], ["colorBgSecondary", "var(--color-bg-secondary, var(--fallback-color-bg-secondary))"], ["colorBgSelected", "var(--color-bg-selected, var(--fallback-color-bg-selected))"], ["colorBgSelectedHover", "var(--color-bg-selected-hover, var(--fallback-color-bg-selected-hover))"], ["colorBgSelectedPressed", "var(--color-bg-selected-pressed, var(--fallback-color-bg-selected-pressed))"], ["colorBgSelectedSecondary", "var(--color-bg-selected-secondary, var(--fallback-color-bg-selected-secondary))"], ["colorBgSelectedStrong", "var(--color-bg-selected-strong, var(--fallback-color-bg-selected-strong))"], ["colorBgSelectedTertiary", "var(--color-bg-selected-tertiary, var(--fallback-color-bg-selected-tertiary))"], ["colorBgSuccess", "var(--color-bg-success, var(--fallback-color-bg-success))"], ["colorBgSuccessHover", "var(--color-bg-success-hover, var(--fallback-color-bg-success-hover))"], ["colorBgSuccessPressed", "var(--color-bg-success-pressed, var(--fallback-color-bg-success-pressed))"], ["colorBgSuccessSecondary", "var(--color-bg-success-secondary, var(--fallback-color-bg-success-secondary))"], ["colorBgSuccessTertiary", "var(--color-bg-success-tertiary, var(--fallback-color-bg-success-tertiary))"], ["colorBgTertiary", "var(--color-bg-tertiary, var(--fallback-color-bg-tertiary))"], ["colorBgToolbar", "var(--color-bg-toolbar, var(--fallback-color-bg-toolbar))"], ["colorBgToolbarDisabled", "var(--color-bg-toolbar-disabled, var(--fallback-color-bg-toolbar-disabled))"], ["colorBgToolbarHover", "var(--color-bg-toolbar-hover, var(--fallback-color-bg-toolbar-hover))"], ["colorBgToolbarPressed", "var(--color-bg-toolbar-pressed, var(--fallback-color-bg-toolbar-pressed))"], ["colorBgToolbarSecondary", "var(--color-bg-toolbar-secondary, var(--fallback-color-bg-toolbar-secondary))"], ["colorBgToolbarSelected", "var(--color-bg-toolbar-selected, var(--fallback-color-bg-toolbar-selected))"], ["colorBgToolbarSelectedHover", "var(--color-bg-toolbar-selected-hover, var(--fallback-color-bg-toolbar-selected-hover))"], ["colorBgToolbarSelectedPressed", "var(--color-bg-toolbar-selected-pressed, var(--fallback-color-bg-toolbar-selected-pressed))"], ["colorBgToolbarSelectedSecondary", "var(--color-bg-toolbar-selected-secondary, var(--fallback-color-bg-toolbar-selected-secondary))"], ["colorBgToolbarSelectedTertiary", "var(--color-bg-toolbar-selected-tertiary, var(--fallback-color-bg-toolbar-selected-tertiary))"], ["colorBgToolbarTertiary", "var(--color-bg-toolbar-tertiary, var(--fallback-color-bg-toolbar-tertiary))"], ["colorBgTooltip", "var(--color-bg-tooltip, var(--fallback-color-bg-tooltip))"], ["colorBgTooltipDisabled", "var(--color-bg-tooltip-disabled, var(--fallback-color-bg-tooltip-disabled))"], ["colorBgTooltipHover", "var(--color-bg-tooltip-hover, var(--fallback-color-bg-tooltip-hover))"], ["colorBgTooltipPressed", "var(--color-bg-tooltip-pressed, var(--fallback-color-bg-tooltip-pressed))"], ["colorBgTooltipSecondary", "var(--color-bg-tooltip-secondary, var(--fallback-color-bg-tooltip-secondary))"], ["colorBgTooltipSelected", "var(--color-bg-tooltip-selected, var(--fallback-color-bg-tooltip-selected))"], ["colorBgTooltipSelectedHover", "var(--color-bg-tooltip-selected-hover, var(--fallback-color-bg-tooltip-selected-hover))"], ["colorBgTooltipSelectedPressed", "var(--color-bg-tooltip-selected-pressed, var(--fallback-color-bg-tooltip-selected-pressed))"], ["colorBgTooltipSelectedSecondary", "var(--color-bg-tooltip-selected-secondary, var(--fallback-color-bg-tooltip-selected-secondary))"], ["colorBgTooltipSelectedTertiary", "var(--color-bg-tooltip-selected-tertiary, var(--fallback-color-bg-tooltip-selected-tertiary))"], ["colorBgTooltipTertiary", "var(--color-bg-tooltip-tertiary, var(--fallback-color-bg-tooltip-tertiary))"], ["colorBgWarning", "var(--color-bg-warning, var(--fallback-color-bg-warning))"], ["colorBgWarningHover", "var(--color-bg-warning-hover, var(--fallback-color-bg-warning-hover))"], ["colorBgWarningPressed", "var(--color-bg-warning-pressed, var(--fallback-color-bg-warning-pressed))"], ["colorBgWarningSecondary", "var(--color-bg-warning-secondary, var(--fallback-color-bg-warning-secondary))"], ["colorBgWarningTertiary", "var(--color-bg-warning-tertiary, var(--fallback-color-bg-warning-tertiary))"], ["colorBgvoting", "var(--color-bgvoting)"], ["colorBgvotingsecondary", "var(--color-bgvotingsecondary)"], ["colorBgvotingtertiary", "var(--color-bgvotingtertiary)"], ["colorBgvotingwheelhover", "var(--color-bgvotingwheelhover)"], ["colorBgvotingwheeldial", "var(--color-bgvotingwheeldial)"]],
  borderStyle: [["bSolid", "solid"]],
  borderRadius: [["bRadiusDefault", defaultCornerRadius], ["bRadiusFull", "100%"], ["bRadius1", "1px"], ["bRadius2", "2px"], ["bRadius3", "3px"], ["bRadius4", "4px"], ["bRadiusHalf", "50%"], ["bRadius5", "5px"], ["bRadius6", "6px"], ["bRadius7", "7px"], ["bRadius8", "8px"], ["radiusFull", "var(--radius-full, 9999px)"], ["radiusLarge", "var(--radius-large, 0.8125rem)"], ["radiusMedium", "var(--radius-medium, 0.3125rem)"], ["radiusSmall", "var(--radius-small, 0.125rem)"], ["radiusNone", "var(--radius-none, 0rem)"]],
  borderTopWidth: [["bt0", "0"], ["bt1", "1px"], ["bt2", "2px"]],
  borderRightWidth: [["br0", "0"], ["br1", "1px"], ["br2", "2px"]],
  borderBottomWidth: [["bb0", "0"], ["bb1", "1px"], ["bb2", "2px"]],
  borderLeftWidth: [["bl0", "0"], ["bl1", "1px"], ["bl2", "2px"]],
  borderColor: [["colorBorder", "var(--color-border, var(--fallback-color-border))"], ["colorBorderAssistive", "var(--color-border-assistive, var(--fallback-color-border-assistive))"], ["colorBorderAssistiveStrong", "var(--color-border-assistive-strong, var(--fallback-color-border-assistive-strong))"], ["colorBorderBg", "var(--color-bg, var(--fallback-color-bg))"], ["colorBorderBrand", "var(--color-border-brand, var(--fallback-color-border-brand))"], ["colorBorderBrandStrong", "var(--color-border-brand-strong, var(--fallback-color-border-brand-strong))"], ["colorBorderComponent", "var(--color-border-component, var(--fallback-color-border-component))"], ["colorBorderComponentStrong", "var(--color-border-component-strong, var(--fallback-color-border-component-strong))"], ["colorBorderComponentHover", "var(--color-border-component-hover, var(--fallback-color-border-component-hover))"], ["colorBorderDanger", "var(--color-border-danger, var(--fallback-color-border-danger))"], ["colorBorderDangerStrong", "var(--color-border-danger-strong, var(--fallback-color-border-danger-strong))"], ["colorBorderDesign", "var(--color-border-design, var(--fallback-color-border-design))"], ["colorBorderDesignStrong", "var(--color-border-design-strong, var(--fallback-color-border-design-strong))"], ["colorBorderDisabled", "var(--color-border-disabled, var(--fallback-color-border-disabled))"], ["colorBorderDisabledStrong", "var(--color-border-disabled-strong, var(--fallback-color-border-disabled-strong))"], ["colorBorderFigjam", "var(--color-border-figjam, var(--fallback-color-border-figjam))"], ["colorBorderFigjamStrong", "var(--color-border-figjam-strong, var(--fallback-color-border-figjam-strong))"], ["colorBorderMenu", "var(--color-border-menu, var(--fallback-color-border-menu))"], ["colorBorderMenuDisabled", "var(--color-border-menu-disabled, var(--fallback-color-border-menu-disabled))"], ["colorBorderMenuDisabledStrong", "var(--color-border-menu-disabled-strong, var(--fallback-color-border-menu-disabled-strong))"], ["colorBorderMenuOnselected", "var(--color-border-menu-onselected, var(--fallback-color-border-menu-onselected))"], ["colorBorderMenuOnselectedStrong", "var(--color-border-menu-onselected-strong, var(--fallback-color-border-menu-onselected-strong))"], ["colorBorderMenuSelected", "var(--color-border-menu-selected, var(--fallback-color-border-menu-selected))"], ["colorBorderMenuSelectedStrong", "var(--color-border-menu-selected-strong, var(--fallback-color-border-menu-selected-strong))"], ["colorBorderMenuStrong", "var(--color-border-menu-strong, var(--fallback-color-border-menu-strong))"], ["colorBorderOnassistive", "var(--color-border-onassistive, var(--fallback-color-border-onassistive))"], ["colorBorderOnassistiveStrong", "var(--color-border-onassistive-strong, var(--fallback-color-border-onassistive-strong))"], ["colorBorderOnbrand", "var(--color-border-onbrand, var(--fallback-color-border-onbrand))"], ["colorBorderOnbrandStrong", "var(--color-border-onbrand-strong, var(--fallback-color-border-onbrand-strong))"], ["colorBorderOncomponent", "var(--color-border-oncomponent, var(--fallback-color-border-oncomponent))"], ["colorBorderOncomponentStrong", "var(--color-border-oncomponent-strong, var(--fallback-color-border-oncomponent-strong))"], ["colorBorderOndanger", "var(--color-border-ondanger, var(--fallback-color-border-ondanger))"], ["colorBorderOndangerStrong", "var(--color-border-ondanger-strong, var(--fallback-color-border-ondanger-strong))"], ["colorBorderOndesign", "var(--color-border-ondesign, var(--fallback-color-border-ondesign))"], ["colorBorderOndesignStrong", "var(--color-border-ondesign-strong, var(--fallback-color-border-ondesign-strong))"], ["colorBorderOnfigjam", "var(--color-border-onfigjam, var(--fallback-color-border-onfigjam))"], ["colorBorderOnfigjamStrong", "var(--color-border-onfigjam-strong, var(--fallback-color-border-onfigjam-strong))"], ["colorBorderOnselected", "var(--color-border-onselected, var(--fallback-color-border-onselected))"], ["colorBorderOnselectedStrong", "var(--color-border-onselected-strong, var(--fallback-color-border-onselected-strong))"], ["colorBorderOnsuccess", "var(--color-border-onsuccess, var(--fallback-color-border-onsuccess))"], ["colorBorderOnsuccessStrong", "var(--color-border-onsuccess-strong, var(--fallback-color-border-onsuccess-strong))"], ["colorBorderOnwarning", "var(--color-border-onwarning, var(--fallback-color-border-onwarning))"], ["colorBorderOnwarningStrong", "var(--color-border-onwarning-strong, var(--fallback-color-border-onwarning-strong))"], ["colorBorderSelected", "var(--color-border-selected, var(--fallback-color-border-selected))"], ["colorBorderSelectedStrong", "var(--color-border-selected-strong, var(--fallback-color-border-selected-strong))"], ["colorBorderStrong", "var(--color-border-strong, var(--fallback-color-border-strong))"], ["colorBorderSuccess", "var(--color-border-success, var(--fallback-color-border-success))"], ["colorBorderSuccessStrong", "var(--color-border-success-strong, var(--fallback-color-border-success-strong))"], ["colorBorderToolbar", "var(--color-border-toolbar, var(--fallback-color-border-toolbar))"], ["colorBorderToolbarDisabled", "var(--color-border-toolbar-disabled, var(--fallback-color-border-toolbar-disabled))"], ["colorBorderToolbarOnselected", "var(--color-border-toolbar-onselected, var(--fallback-color-border-toolbar-onselected))"], ["colorBorderToolbarSelected", "var(--color-border-toolbar-selected, var(--fallback-color-border-toolbar-selected))"], ["colorBorderToolbarSelectedStrong", "var(--color-border-toolbar-selected-strong, var(--fallback-color-border-toolbar-selected-strong))"], ["colorBorderToolbarStrong", "var(--color-border-toolbar-strong, var(--fallback-color-border-toolbar-strong))"], ["colorBorderTooltip", "var(--color-border-tooltip, var(--fallback-color-border-tooltip))"], ["colorBorderTooltipDisabled", "var(--color-border-tooltip-disabled, var(--fallback-color-border-tooltip-disabled))"], ["colorBorderTooltipDisabledStrong", "var(--color-border-tooltip-disabled-strong, var(--fallback-color-border-tooltip-disabled-strong))"], ["colorBorderTooltipOnselected", "var(--color-border-tooltip-onselected, var(--fallback-color-border-tooltip-onselected))"], ["colorBorderTooltipOnselectedStrong", "var(--color-border-tooltip-onselected-strong, var(--fallback-color-border-tooltip-onselected-strong))"], ["colorBorderTooltipSelected", "var(--color-border-tooltip-selected, var(--fallback-color-border-tooltip-selected))"], ["colorBorderTooltipSelectedStrong", "var(--color-border-tooltip-selected-strong, var(--fallback-color-border-tooltip-selected-strong))"], ["colorBorderTooltipStrong", "var(--color-border-tooltip-strong, var(--fallback-color-border-tooltip-strong))"], ["colorBorderWarning", "var(--color-border-warning, var(--fallback-color-border-warning))"], ["colorBorderWarningStrong", "var(--color-border-warning-strong, var(--fallback-color-border-warning-strong))"]],
  fill: [["colorIcon", "var(--color-icon, var(--fallback-color-icon))"], ["colorIconAssistive", "var(--color-icon-assistive, var(--fallback-color-icon-assistive))"], ["colorIconAssistivePressed", "var(--color-icon-assistive-pressed, var(--fallback-color-icon-assistive-pressed))"], ["colorIconAssistiveSecondary", "var(--color-icon-assistive-secondary, var(--fallback-color-icon-assistive-secondary))"], ["colorIconAssistiveTertiary", "var(--color-icon-assistive-tertiary, var(--fallback-color-icon-assistive-tertiary))"], ["colorIconBrand", "var(--color-icon-brand, var(--fallback-color-icon-brand))"], ["colorIconBrandPressed", "var(--color-icon-brand-pressed, var(--fallback-color-icon-brand-pressed))"], ["colorIconBrandSecondary", "var(--color-icon-brand-secondary, var(--fallback-color-icon-brand-secondary))"], ["colorIconBrandTertiary", "var(--color-icon-brand-tertiary, var(--fallback-color-icon-brand-tertiary))"], ["colorIconComponent", "var(--color-icon-component, var(--fallback-color-icon-component))"], ["colorIconComponentPressed", "var(--color-icon-component-pressed, var(--fallback-color-icon-component-pressed))"], ["colorIconComponentSecondary", "var(--color-icon-component-secondary, var(--fallback-color-icon-component-secondary))"], ["colorIconComponentTertiary", "var(--color-icon-component-tertiary, var(--fallback-color-icon-component-tertiary))"], ["colorIconDanger", "var(--color-icon-danger, var(--fallback-color-icon-danger))"], ["colorIconDangerHover", "var(--color-icon-danger-hover, var(--fallback-color-icon-danger-hover))"], ["colorIconDangerPressed", "var(--color-icon-danger-pressed, var(--fallback-color-icon-danger-pressed))"], ["colorIconDangerSecondary", "var(--color-icon-danger-secondary, var(--fallback-color-icon-danger-secondary))"], ["colorIconDangerSecondaryHover", "var(--color-icon-danger-secondary-hover, var(--fallback-color-icon-danger-secondary-hover))"], ["colorIconDangerTertiary", "var(--color-icon-danger-tertiary, var(--fallback-color-icon-danger-tertiary))"], ["colorIconDesign", "var(--color-icon-design, var(--fallback-color-icon-design))"], ["colorIconDesignPressed", "var(--color-icon-design-pressed, var(--fallback-color-icon-design-pressed))"], ["colorIconDesignSecondary", "var(--color-icon-design-secondary, var(--fallback-color-icon-design-secondary))"], ["colorIconDesignTertiary", "var(--color-icon-design-tertiary, var(--fallback-color-icon-design-tertiary))"], ["colorIconDisabled", "var(--color-icon-disabled, var(--fallback-color-icon-disabled))"], ["colorIconFigjam", "var(--color-icon-figjam, var(--fallback-color-icon-figjam))"], ["colorIconFigjamPressed", "var(--color-icon-figjam-pressed, var(--fallback-color-icon-figjam-pressed))"], ["colorIconFigjamSecondary", "var(--color-icon-figjam-secondary, var(--fallback-color-icon-figjam-secondary))"], ["colorIconFigjamTertiary", "var(--color-icon-figjam-tertiary, var(--fallback-color-icon-figjam-tertiary))"], ["colorIconHover", "var(--color-icon-hover, var(--fallback-color-icon-hover))"], ["colorIconMenu", "var(--color-icon-menu, var(--fallback-color-icon-menu))"], ["colorIconMenuDanger", "var(--color-icon-menu-danger, var(--fallback-color-icon-menu-danger))"], ["colorIconMenuDisabled", "var(--color-icon-menu-disabled, var(--fallback-color-icon-menu-disabled))"], ["colorIconMenuHover", "var(--color-icon-menu-hover, var(--fallback-color-icon-menu-hover))"], ["colorIconMenuOndisabled", "var(--color-icon-menu-ondisabled, var(--fallback-color-icon-menu-ondisabled))"], ["colorIconMenuOnselected", "var(--color-icon-menu-onselected, var(--fallback-color-icon-menu-onselected))"], ["colorIconMenuPressed", "var(--color-icon-menu-pressed, var(--fallback-color-icon-menu-pressed))"], ["colorIconMenuSecondary", "var(--color-icon-menu-secondary, var(--fallback-color-icon-menu-secondary))"], ["colorIconMenuSecondaryHover", "var(--color-icon-menu-secondary-hover, var(--fallback-color-icon-menu-secondary-hover))"], ["colorIconMenuSelected", "var(--color-icon-menu-selected, var(--fallback-color-icon-menu-selected))"], ["colorIconMenuSelectedSecondary", "var(--color-icon-menu-selected-secondary, var(--fallback-color-icon-menu-selected-secondary))"], ["colorIconMenuSelectedTertiary", "var(--color-icon-menu-selected-tertiary, var(--fallback-color-icon-menu-selected-tertiary))"], ["colorIconMenuTertiary", "var(--color-icon-menu-tertiary, var(--fallback-color-icon-menu-tertiary))"], ["colorIconMenuTertiaryHover", "var(--color-icon-menu-tertiary-hover, var(--fallback-color-icon-menu-tertiary-hover))"], ["colorIconMenuWarning", "var(--color-icon-menu-warning, var(--fallback-color-icon-menu-warning))"], ["colorIconOnassistive", "var(--color-icon-onassistive, var(--fallback-color-icon-onassistive))"], ["colorIconOnassistiveSecondary", "var(--color-icon-onassistive-secondary, var(--fallback-color-icon-onassistive-secondary))"], ["colorIconOnassistiveTertiary", "var(--color-icon-onassistive-tertiary, var(--fallback-color-icon-onassistive-tertiary))"], ["colorIconOnbrand", "var(--color-icon-onbrand, var(--fallback-color-icon-onbrand))"], ["colorIconOnbrandSecondary", "var(--color-icon-onbrand-secondary, var(--fallback-color-icon-onbrand-secondary))"], ["colorIconOnbrandTertiary", "var(--color-icon-onbrand-tertiary, var(--fallback-color-icon-onbrand-tertiary))"], ["colorIconOncomponent", "var(--color-icon-oncomponent, var(--fallback-color-icon-oncomponent))"], ["colorIconOncomponentSecondary", "var(--color-icon-oncomponent-secondary, var(--fallback-color-icon-oncomponent-secondary))"], ["colorIconOncomponentTertiary", "var(--color-icon-oncomponent-tertiary, var(--fallback-color-icon-oncomponent-tertiary))"], ["colorIconOndanger", "var(--color-icon-ondanger, var(--fallback-color-icon-ondanger))"], ["colorIconOndangerSecondary", "var(--color-icon-ondanger-secondary, var(--fallback-color-icon-ondanger-secondary))"], ["colorIconOndangerTertiary", "var(--color-icon-ondanger-tertiary, var(--fallback-color-icon-ondanger-tertiary))"], ["colorIconOndesign", "var(--color-icon-ondesign, var(--fallback-color-icon-ondesign))"], ["colorIconOndesignSecondary", "var(--color-icon-ondesign-secondary, var(--fallback-color-icon-ondesign-secondary))"], ["colorIconOndesignTertiary", "var(--color-icon-ondesign-tertiary, var(--fallback-color-icon-ondesign-tertiary))"], ["colorIconOndisabled", "var(--color-icon-ondisabled, var(--fallback-color-icon-ondisabled))"], ["colorIconOnfigjam", "var(--color-icon-onfigjam, var(--fallback-color-icon-onfigjam))"], ["colorIconOnfigjamSecondary", "var(--color-icon-onfigjam-secondary, var(--fallback-color-icon-onfigjam-secondary))"], ["colorIconOnfigjamTertiary", "var(--color-icon-onfigjam-tertiary, var(--fallback-color-icon-onfigjam-tertiary))"], ["colorIconOninverse", "var(--color-icon-oninverse, var(--fallback-color-icon-oninverse))"], ["colorIconOnselected", "var(--color-icon-onselected, var(--fallback-color-icon-onselected))"], ["colorIconOnselectedSecondary", "var(--color-icon-onselected-secondary, var(--fallback-color-icon-onselected-secondary))"], ["colorIconOnselectedStrong", "var(--color-icon-onselected-strong, var(--fallback-color-icon-onselected-strong))"], ["colorIconOnselectedTertiary", "var(--color-icon-onselected-tertiary, var(--fallback-color-icon-onselected-tertiary))"], ["colorIconOnsuccess", "var(--color-icon-onsuccess, var(--fallback-color-icon-onsuccess))"], ["colorIconOnsuccessSecondary", "var(--color-icon-onsuccess-secondary, var(--fallback-color-icon-onsuccess-secondary))"], ["colorIconOnsuccessTertiary", "var(--color-icon-onsuccess-tertiary, var(--fallback-color-icon-onsuccess-tertiary))"], ["colorIconOnwarning", "var(--color-icon-onwarning, var(--fallback-color-icon-onwarning))"], ["colorIconOnwarningSecondary", "var(--color-icon-onwarning-secondary, var(--fallback-color-icon-onwarning-secondary))"], ["colorIconOnwarningTertiary", "var(--color-icon-onwarning-tertiary, var(--fallback-color-icon-onwarning-tertiary))"], ["colorIconPressed", "var(--color-icon-pressed, var(--fallback-color-icon-pressed))"], ["colorIconSecondary", "var(--color-icon-secondary, var(--fallback-color-icon-secondary))"], ["colorIconSecondaryHover", "var(--color-icon-secondary-hover, var(--fallback-color-icon-secondary-hover))"], ["colorIconSelected", "var(--color-icon-selected, var(--fallback-color-icon-selected))"], ["colorIconSelectedSecondary", "var(--color-icon-selected-secondary, var(--fallback-color-icon-selected-secondary))"], ["colorIconSelectedTertiary", "var(--color-icon-selected-tertiary, var(--fallback-color-icon-selected-tertiary))"], ["colorIconSuccess", "var(--color-icon-success, var(--fallback-color-icon-success))"], ["colorIconSuccessPressed", "var(--color-icon-success-pressed, var(--fallback-color-icon-success-pressed))"], ["colorIconSuccessSecondary", "var(--color-icon-success-secondary, var(--fallback-color-icon-success-secondary))"], ["colorIconSuccessTertiary", "var(--color-icon-success-tertiary, var(--fallback-color-icon-success-tertiary))"], ["colorIconTertiary", "var(--color-icon-tertiary, var(--fallback-color-icon-tertiary))"], ["colorIconTertiaryHover", "var(--color-icon-tertiary-hover, var(--fallback-color-icon-tertiary-hover))"], ["colorIconToolbar", "var(--color-icon-toolbar, var(--fallback-color-icon-toolbar))"], ["colorIconToolbarDanger", "var(--color-icon-toolbar-danger, var(--fallback-color-icon-toolbar-danger))"], ["colorIconToolbarDisabled", "var(--color-icon-toolbar-disabled, var(--fallback-color-icon-toolbar-disabled))"], ["colorIconToolbarHover", "var(--color-icon-toolbar-hover, var(--fallback-color-icon-toolbar-hover))"], ["colorIconToolbarOndisabled", "var(--color-icon-toolbar-ondisabled, var(--fallback-color-icon-toolbar-ondisabled))"], ["colorIconToolbarOnselected", "var(--color-icon-toolbar-onselected, var(--fallback-color-icon-toolbar-onselected))"], ["colorIconToolbarPressed", "var(--color-icon-toolbar-pressed, var(--fallback-color-icon-toolbar-pressed))"], ["colorIconToolbarSecondary", "var(--color-icon-toolbar-secondary, var(--fallback-color-icon-toolbar-secondary))"], ["colorIconToolbarSecondaryHover", "var(--color-icon-toolbar-secondary-hover, var(--fallback-color-icon-toolbar-secondary-hover))"], ["colorIconToolbarSelected", "var(--color-icon-toolbar-selected, var(--fallback-color-icon-toolbar-selected))"], ["colorIconToolbarSelectedSecondary", "var(--color-icon-toolbar-selected-secondary,var(--fallback-color-icon-toolbar-selected-econdary))"], ["colorIconToolbarSelectedTertiary", "var(--color-icon-toolbar-selected-tertiary, var(--fallback-color-icon-toolbar-selected-tertiary))"], ["colorIconToolbarTertiary", "var(--color-icon-toolbar-tertiary, var(--fallback-color-icon-toolbar-tertiary))"], ["colorIconToolbarTertiaryHover", "var(--color-icon-toolbar-tertiary-hover, var(--fallback-color-icon-toolbar-tertiary-hover))"], ["colorIconToolbarWarning", "var(--color-icon-toolbar-warning, var(--fallback-color-icon-toolbar-warning))"], ["colorIconTooltip", "var(--color-icon-tooltip, var(--fallback-color-icon-tooltip))"], ["colorIconTooltipDanger", "var(--color-icon-tooltip-danger, var(--fallback-color-icon-tooltip-danger))"], ["colorIconTooltipDisabled", "var(--color-icon-tooltip-disabled, var(--fallback-color-icon-tooltip-disabled))"], ["colorIconTooltipHover", "var(--color-icon-tooltip-hover, var(--fallback-color-icon-tooltip-hover))"], ["colorIconTooltipOndisabled", "var(--color-icon-tooltip-ondisabled, var(--fallback-color-icon-tooltip-ondisabled))"], ["colorIconTooltipOnselected", "var(--color-icon-tooltip-onselected, var(--fallback-color-icon-tooltip-onselected))"], ["colorIconTooltipPressed", "var(--color-icon-tooltip-pressed, var(--fallback-color-icon-tooltip-pressed))"], ["colorIconTooltipSecondary", "var(--color-icon-tooltip-secondary, var(--fallback-color-icon-tooltip-secondary))"], ["colorIconTooltipSecondaryHover", "var(--color-icon-tooltip-secondary-hover, var(--fallback-color-icon-tooltip-secondary-hover))"], ["colorIconTooltipSelected", "var(--color-icon-tooltip-selected, var(--fallback-color-icon-tooltip-selected))"], ["colorIconTooltipSelectedSecondary", "var(--color-icon-tooltip-selected-secondary,var(--fallback-color-icon-tooltip-selected-econdary))"], ["colorIconTooltipSelectedTertiary", "var(--color-icon-tooltip-selected-tertiary, var(--fallback-color-icon-tooltip-selected-tertiary))"], ["colorIconTooltipTertiary", "var(--color-icon-tooltip-tertiary, var(--fallback-color-icon-tooltip-tertiary))"], ["colorIconTooltipTertiaryHover", "var(--color-icon-tooltip-tertiary-hover, var(--fallback-color-icon-tooltip-tertiary-hover))"], ["colorIconTooltipWarning", "var(--color-icon-tooltip-warning, var(--fallback-color-icon-tooltip-warning))"], ["colorIconWarning", "var(--color-icon-warning, var(--fallback-color-icon-warning))"], ["colorIconWarningPressed", "var(--color-icon-warning-pressed, var(--fallback-color-icon-warning-pressed))"], ["colorIconWarningSecondary", "var(--color-icon-warning-secondary, var(--fallback-color-icon-warning-secondary))"], ["colorIconWarningTertiary", "var(--color-icon-warning-tertiary, var(--fallback-color-icon-warning-tertiary))"], ["colorIcononvoting", "var(--color-icononvoting)"]],
  color: [["colorText", "var(--color-text, var(--fallback-color-text))"], ["colorTextAssistive", "var(--color-text-assistive, var(--fallback-color-text-assistive))"], ["colorTextAssistivePressed", "var(--color-text-assistive-pressed, var(--fallback-color-text-assistive-pressed))"], ["colorTextAssistiveSecondary", "var(--color-text-assistive-secondary, var(--fallback-color-text-assistive-secondary))"], ["colorTextAssistiveTertiary", "var(--color-text-assistive-tertiary, var(--fallback-color-text-assistive-tertiary))"], ["colorTextBrand", "var(--color-text-brand, var(--fallback-color-text-brand))"], ["colorTextBrandSecondary", "var(--color-text-brand-secondary, var(--fallback-color-text-brand-secondary))"], ["colorTextBrandTertiary", "var(--color-text-brand-tertiary, var(--fallback-color-text-brand-tertiary))"], ["colorTextComponent", "var(--color-text-component, var(--fallback-color-text-component))"], ["colorTextComponentPressed", "var(--color-text-component-pressed, var(--fallback-color-text-component-pressed))"], ["colorTextComponentSecondary", "var(--color-text-component-secondary, var(--fallback-color-text-component-secondary))"], ["colorTextComponentTertiary", "var(--color-text-component-tertiary, var(--fallback-color-text-component-tertiary))"], ["colorTextDanger", "var(--color-text-danger, var(--fallback-color-text-danger))"], ["colorTextDangerSecondary", "var(--color-text-danger-secondary, var(--fallback-color-text-danger-secondary))"], ["colorTextDangerTertiary", "var(--color-text-danger-tertiary, var(--fallback-color-text-danger-tertiary))"], ["colorTextDesign", "var(--color-text-design, var(--fallback-color-text-design))"], ["colorTextDesignPressed", "var(--color-text-design-pressed, var(--fallback-color-text-design-pressed))"], ["colorTextDesignSecondary", "var(--color-text-design-secondary, var(--fallback-color-text-design-secondary))"], ["colorTextDesignTertiary", "var(--color-text-design-tertiary, var(--fallback-color-text-design-tertiary))"], ["colorTextDisabled", "var(--color-text-disabled, var(--fallback-color-text-disabled))"], ["colorTextFigjam", "var(--color-text-figjam, var(--fallback-color-text-figjam))"], ["colorTextFigjamPressed", "var(--color-text-figjam-pressed, var(--fallback-color-text-figjam-pressed))"], ["colorTextFigjamSecondary", "var(--color-text-figjam-secondary, var(--fallback-color-text-figjam-secondary))"], ["colorTextFigjamTertiary", "var(--color-text-figjam-tertiary, var(--fallback-color-text-figjam-tertiary))"], ["colorTextHover", "var(--color-text-hover, var(--fallback-color-text-hover))"], ["colorTextMenu", "var(--color-text-menu, var(--fallback-color-text-menu))"], ["colorTextMenuDanger", "var(--color-text-menu-danger, var(--fallback-color-text-menu-danger))"], ["colorTextMenuDisabled", "var(--color-text-menu-disabled, var(--fallback-color-text-menu-disabled))"], ["colorTextMenuHover", "var(--color-text-menu-hover, var(--fallback-color-text-menu-hover))"], ["colorTextMenuOndisabled", "var(--color-text-menu-ondisabled, var(--fallback-color-text-menu-ondisabled))"], ["colorTextMenuOnselected", "var(--color-text-menu-onselected, var(--fallback-color-text-menu-onselected))"], ["colorTextMenuSecondary", "var(--color-text-menu-secondary, var(--fallback-color-text-menu-secondary))"], ["colorTextMenuSecondaryHover", "var(--color-text-menu-secondary-hover, var(--fallback-color-text-menu-secondary-hover))"], ["colorTextMenuSelected", "var(--color-text-menu-selected, var(--fallback-color-text-menu-selected))"], ["colorTextMenuSelectedSecondary", "var(--color-text-menu-selected-secondary, var(--fallback-color-text-menu-selected-secondary))"], ["colorTextMenuSelectedTertiary", "var(--color-text-menu-selected-tertiary, var(--fallback-color-text-menu-selected-tertiary))"], ["colorTextMenuTertiary", "var(--color-text-menu-tertiary, var(--fallback-color-text-menu-tertiary))"], ["colorTextMenuTertiaryHover", "var(--color-text-menu-tertiary-hover, var(--fallback-color-text-menu-tertiary-hover))"], ["colorTextMenuWarning", "var(--color-text-menu-warning, var(--fallback-color-text-menu-warning))"], ["colorTextOnassistive", "var(--color-text-onassistive, var(--fallback-color-text-onassistive))"], ["colorTextOnassistiveSecondary", "var(--color-text-onassistive-secondary, var(--fallback-color-text-onassistive-secondary))"], ["colorTextOnassistiveTertiary", "var(--color-text-onassistive-tertiary, var(--fallback-color-text-onassistive-tertiary))"], ["colorTextOnbrand", "var(--color-text-onbrand, var(--fallback-color-text-onbrand))"], ["colorTextOnbrandSecondary", "var(--color-text-onbrand-secondary, var(--fallback-color-text-onbrand-secondary))"], ["colorTextOnbrandTertiary", "var(--color-text-onbrand-tertiary, var(--fallback-color-text-onbrand-tertiary))"], ["colorTextOncomponent", "var(--color-text-oncomponent, var(--fallback-color-text-oncomponent))"], ["colorTextOncomponentSecondary", "var(--color-text-oncomponent-secondary, var(--fallback-color-text-oncomponent-secondary))"], ["colorTextOncomponentTertiary", "var(--color-text-oncomponent-tertiary, var(--fallback-color-text-oncomponent-tertiary))"], ["colorTextOndanger", "var(--color-text-ondanger, var(--fallback-color-text-ondanger))"], ["colorTextOndangerSecondary", "var(--color-text-ondanger-secondary, var(--fallback-color-text-ondanger-secondary))"], ["colorTextOndangerTertiary", "var(--color-text-ondanger-tertiary, var(--fallback-color-text-ondanger-tertiary))"], ["colorTextOndesign", "var(--color-text-ondesign, var(--fallback-color-text-ondesign))"], ["colorTextOndesignSecondary", "var(--color-text-ondesign-secondary, var(--fallback-color-text-ondesign-secondary))"], ["colorTextOndesignTertiary", "var(--color-text-ondesign-tertiary, var(--fallback-color-text-ondesign-tertiary))"], ["colorTextOndisabled", "var(--color-text-ondisabled, var(--fallback-color-text-ondisabled))"], ["colorTextOnfigjam", "var(--color-text-onfigjam, var(--fallback-color-text-onfigjam))"], ["colorTextOnfigjamSecondary", "var(--color-text-onfigjam-secondary, var(--fallback-color-text-onfigjam-secondary))"], ["colorTextOnfigjamTertiary", "var(--color-text-onfigjam-tertiary, var(--fallback-color-text-onfigjam-tertiary))"], ["colorTextOninverse", "var(--color-text-oninverse, var(--fallback-color-text-oninverse))"], ["colorTextOnselected", "var(--color-text-onselected, var(--fallback-color-text-onselected))"], ["colorTextOnselectedSecondary", "var(--color-text-onselected-secondary, var(--fallback-color-text-onselected-secondary))"], ["colorTextOnselectedStrong", "var(--color-text-onselected-strong, var(--fallback-color-text-onselected-strong))"], ["colorTextOnselectedTertiary", "var(--color-text-onselected-tertiary, var(--fallback-color-text-onselected-tertiary))"], ["colorTextOnsuccess", "var(--color-text-onsuccess, var(--fallback-color-text-onsuccess))"], ["colorTextOnsuccessSecondary", "var(--color-text-onsuccess-secondary, var(--fallback-color-text-onsuccess-secondary))"], ["colorTextOnsuccessTertiary", "var(--color-text-onsuccess-tertiary, var(--fallback-color-text-onsuccess-tertiary))"], ["colorTextOnwarning", "var(--color-text-onwarning, var(--fallback-color-text-onwarning))"], ["colorTextOnwarningSecondary", "var(--color-text-onwarning-secondary, var(--fallback-color-text-onwarning-secondary))"], ["colorTextOnwarningTertiary", "var(--color-text-onwarning-tertiary, var(--fallback-color-text-onwarning-tertiary))"], ["colorTextSecondary", "var(--color-text-secondary, var(--fallback-color-text-secondary))"], ["colorTextSecondaryHover", "var(--color-text-secondary-hover, var(--fallback-color-text-secondary-hover))"], ["colorTextSelected", "var(--color-text-selected, var(--fallback-color-text-selected))"], ["colorTextSelectedSecondary", "var(--color-text-selected-secondary, var(--fallback-color-text-selected-secondary))"], ["colorTextSelectedTertiary", "var(--color-text-selected-tertiary, var(--fallback-color-text-selected-tertiary))"], ["colorTextSuccess", "var(--color-text-success, var(--fallback-color-text-success))"], ["colorTextSuccessSecondary", "var(--color-text-success-secondary, var(--fallback-color-text-success-secondary))"], ["colorTextSuccessTertiary", "var(--color-text-success-tertiary, var(--fallback-color-text-success-tertiary))"], ["colorTextTertiary", "var(--color-text-tertiary, var(--fallback-color-text-tertiary))"], ["colorTextTertiaryHover", "var(--color-text-tertiary-hover, var(--fallback-color-text-tertiary-hover))"], ["colorTextToolbar", "var(--color-text-toolbar, var(--fallback-color-text-toolbar))"], ["colorTextToolbarDanger", "var(--color-text-toolbar-danger, var(--fallback-color-text-toolbar-danger))"], ["colorTextToolbarDisabled", "var(--color-text-toolbar-disabled, var(--fallback-color-text-toolbar-disabled))"], ["colorTextToolbarHover", "var(--color-text-toolbar-hover, var(--fallback-color-text-toolbar-hover))"], ["colorTextToolbarOndisabled", "var(--color-text-toolbar-ondisabled, var(--fallback-color-text-toolbar-ondisabled))"], ["colorTextToolbarOnselected", "var(--color-text-toolbar-onselected, var(--fallback-color-text-toolbar-onselected))"], ["colorTextToolbarSecondary", "var(--color-text-toolbar-secondary, var(--fallback-color-text-toolbar-secondary))"], ["colorTextToolbarSecondaryHover", "var(--color-text-toolbar-secondary-hover, var(--fallback-color-text-toolbar-secondary-hover))"], ["colorTextToolbarSelected", "var(--color-text-toolbar-selected, var(--fallback-color-text-toolbar-selected))"], ["colorTextToolbarSelectedSecondary", "var(--color-text-toolbar-selected-secondary,var(--fallback-color-text-toolbar-selected-econdary))"], ["colorTextToolbarSelectedTertiary", "var(--color-text-toolbar-selected-tertiary, var(--fallback-color-text-toolbar-selected-tertiary))"], ["colorTextToolbarTertiary", "var(--color-text-toolbar-tertiary, var(--fallback-color-text-toolbar-tertiary))"], ["colorTextToolbarTertiaryHover", "var(--color-text-toolbar-tertiary-hover, var(--fallback-color-text-toolbar-tertiary-hover))"], ["colorTextToolbarWarning", "var(--color-text-toolbar-warning, var(--fallback-color-text-toolbar-warning))"], ["colorTextTooltip", "var(--color-text-tooltip, var(--fallback-color-text-tooltip))"], ["colorTextTooltipDanger", "var(--color-text-tooltip-danger, var(--fallback-color-text-tooltip-danger))"], ["colorTextTooltipDisabled", "var(--color-text-tooltip-disabled, var(--fallback-color-text-tooltip-disabled))"], ["colorTextTooltipHover", "var(--color-text-tooltip-hover, var(--fallback-color-text-tooltip-hover))"], ["colorTextTooltipOndisabled", "var(--color-text-tooltip-ondisabled, var(--fallback-color-text-tooltip-ondisabled))"], ["colorTextTooltipOnselected", "var(--color-text-tooltip-onselected, var(--fallback-color-text-tooltip-onselected))"], ["colorTextTooltipSecondary", "var(--color-text-tooltip-secondary, var(--fallback-color-text-tooltip-secondary))"], ["colorTextTooltipSecondaryHover", "var(--color-text-tooltip-secondary-hover, var(--fallback-color-text-tooltip-secondary-hover))"], ["colorTextTooltipSelected", "var(--color-text-tooltip-selected, var(--fallback-color-text-tooltip-selected))"], ["colorTextTooltipSelectedSecondary", "var(--color-text-tooltip-selected-secondary,var(--fallback-color-text-tooltip-selected-econdary))"], ["colorTextTooltipSelectedTertiary", "var(--color-text-tooltip-selected-tertiary, var(--fallback-color-text-tooltip-selected-tertiary))"], ["colorTextTooltipTertiary", "var(--color-text-tooltip-tertiary, var(--fallback-color-text-tooltip-tertiary))"], ["colorTextTooltipTertiaryHover", "var(--color-text-tooltip-tertiary-hover, var(--fallback-color-text-tooltip-tertiary-hover))"], ["colorTextTooltipWarning", "var(--color-text-tooltip-warning, var(--fallback-color-text-tooltip-warning))"], ["colorTextWarning", "var(--color-text-warning, var(--fallback-color-text-warning))"], ["colorTextWarningSecondary", "var(--color-text-warning-secondary, var(--fallback-color-text-warning-secondary))"], ["colorTextWarningTertiary", "var(--color-text-warning-tertiary, var(--fallback-color-text-warning-tertiary))"], ["colorTextonvoting", "var(--color-textonvoting)"], ["textInherit", "inherit"]],
  fontFamily: [["fontInter", "var(--font-family-default)"], ["fontUi", "var(--font-family-default)"], ["fontWhyte", "var(--font-family-display)"], ["fpl__textDisplayFontFamily", "var(--text-display-font-family)"], ["fpl__textHeadingLargeFontFamily", "var(--text-heading-large-font-family)"], ["fpl__textHeadingMediumFontFamily", "var(--text-heading-medium-font-family)"], ["fpl__textHeadingSmallFontFamily", "var(--text-heading-small-font-family)"], ["fpl__textBodyLargeFontFamily", "var(--text-body-large-font-family)"], ["fpl__textBodyLargeStrongFontFamily", "var(--text-body-large-strong-font-family)"], ["fpl__textBodyMediumFontFamily", "var(--text-body-medium-font-family)"], ["fpl__textBodyMediumStrongFontFamily", "var(--text-body-medium-strong-font-family)"], ["fpl__textBodySmallFontFamily", "var(--text-body-small-font-family)"], ["fpl__textBodySmallStrongFontFamily", "var(--text-body-small-strong-font-family)"]],
  fontSize: [["font11", "11px"], ["font12", "12px"], ["font13", "13px"], ["font14", "14px"], ["font15", "15px"], ["font16", "16px"], ["font18", "18px"], ["font20", "20px"], ["font22", "22px"], ["font24", "24px"], ["font32", "32px"], ["fpl__textDisplayFontSize", "var(--text-display-font-size)"], ["fpl__textHeadingLargeFontSize", "var(--text-heading-large-font-size)"], ["fpl__textHeadingMediumFontSize", "var(--text-heading-medium-font-size)"], ["fpl__textHeadingSmallFontSize", "var(--text-heading-small-font-size)"], ["fpl__textBodyLargeFontSize", "var(--text-body-large-font-size)"], ["fpl__textBodyLargeStrongFontSize", "var(--text-body-large-strong-font-size)"], ["fpl__textBodyMediumFontSize", "var(--text-body-medium-font-size)"], ["fpl__textBodyMediumStrongFontSize", "var(--text-body-medium-strong-font-size)"], ["fpl__textBodySmallFontSize", "var(--text-body-small-font-size)"], ["fpl__textBodySmallStrongFontSize", "var(--text-body-small-strong-font-size)"]],
  fontStyle: [["italic", "italic"], ["normal", "normal"]],
  fontWeight: [["fontMedium", 500], ["fontSemiBold", 600], ["fontBold", 700], ["fontNormal", 400], ["fpl__textDisplayFontWeight", "var(--text-display-font-weight)"], ["fpl__textHeadingLargeFontWeight", "var(--text-heading-large-font-weight)"], ["fpl__textHeadingMediumFontWeight", "var(--text-heading-medium-font-weight)"], ["fpl__textHeadingSmallFontWeight", "var(--text-heading-small-font-weight)"], ["fpl__textBodyLargeFontWeight", "var(--text-body-large-font-weight)"], ["fpl__textBodyLargeStrongFontWeight", "var(--text-body-large-strong-font-weight)"], ["fpl__textBodyMediumFontWeight", "var(--text-body-medium-font-weight)"], ["fpl__textBodyMediumStrongFontWeight", "var(--text-body-medium-strong-font-weight)"], ["fpl__textBodySmallFontWeight", "var(--text-body-small-font-weight)"], ["fpl__textBodySmallStrongFontWeight", "var(--text-body-small-strong-font-weight)"]],
  letterSpacing: [["fpl__textDisplayLetterSpacing", "var(--text-display-letter-spacing)"], ["fpl__textHeadingLargeLetterSpacing", "var(--text-heading-large-letter-spacing)"], ["fpl__textHeadingMediumLetterSpacing", "var(--text-heading-medium-letter-spacing)"], ["fpl__textHeadingSmallLetterSpacing", "var(--text-heading-small-letter-spacing)"], ["fpl__textBodyLargeLetterSpacing", "var(--text-body-large-letter-spacing)"], ["fpl__textBodyLargeStrongLetterSpacing", "var(--text-body-large-strong-letter-spacing)"], ["fpl__textBodyMediumLetterSpacing", "var(--text-body-medium-letter-spacing)"], ["fpl__textBodyMediumStrongLetterSpacing", "var(--text-body-medium-strong-letter-spacing)"], ["fpl__textBodySmallLetterSpacing", "var(--text-body-small-letter-spacing)"], ["fpl__textBodySmallStrongLetterSpacing", "var(--text-body-small-strong-letter-spacing)"], ["spacingCompact", "-0.01em"], ["spacingWide", "0.005em"]],
  lineHeight: [["fpl__textDisplayLineHeight", "var(--text-display-line-height)"], ["fpl__textHeadingLargeLineHeight", "var(--text-heading-large-line-height)"], ["fpl__textHeadingMediumLineHeight", "var(--text-heading-medium-line-height)"], ["fpl__textHeadingSmallLineHeight", "var(--text-heading-small-line-height)"], ["fpl__textBodyLargeLineHeight", "var(--text-body-large-line-height)"], ["fpl__textBodyLargeStrongLineHeight", "var(--text-body-large-strong-line-height)"], ["fpl__textBodyMediumLineHeight", "var(--text-body-medium-line-height)"], ["fpl__textBodyMediumStrongLineHeight", "var(--text-body-medium-strong-line-height)"], ["fpl__textBodySmallLineHeight", "var(--text-body-small-line-height)"], ["fpl__textBodySmallStrongLineHeight", "var(--text-body-small-strong-line-height)"], ["lh1_5Lines", "1.5"], ["lhNormal", "normal"], ["lh0", "0px"], ["lh1", "1px"], ["lh2", "2px"], ["lh4", "4px"], ["lh6", "6px"], ["lh8", "8px"], ["lh10", "10px"], ["lh12", "12px"], ["lh14", "14px"], ["lh16", "16px"], ["lh18", "18px"], ["lh20", "20px"], ["lh24", "24px"], ["lh28", "28px"], ["lh32", "32px"], ["lh36", "36px"]],
  textAlign: [["alignLeft", "left"], ["alignCenter", "center"], ["alignRight", "right"]],
  textDecoration: [["noUnderline", "none"], ["underline", "underline"]],
  whiteSpace: [["noWrap", "nowrap"], ["preWrap", "pre-wrap"], ["pre", "pre"]],
  wordBreak: [["breakWord", "break-word"]],
  zIndex: [["zIndexMinus1", -1], ["zIndexModal", modalZ], ["zIndexSecondaryModal", secondaryModalZ], ["zIndexTertiaryModal", curatorTertiaryModalZ], ["zIndexTopBar", topBarZ], ["zIndexTemplateModalTeamName", templateModalTeamName], ["zIndex0", 0], ["zIndex1", 1]],
  boxShadow: [["elevation100", "var(--elevation-100)"], ["elevation200", "var(--elevation-200)"], ["elevation300", "var(--elevation-300)"], ["elevation400", "var(--elevation-400)"], ["elevation500", "var(--elevation-500)"], ["shadowNone", "none"]],
  appearance: [["appearanceNone", "none"]],
  boxSizing: [["borderBox", "border-box"]],
  cursor: [["cursorDefault", "default"], ["cursorPointer", "pointer"], ["cursorText", "text"]],
  float: [["floatLeft", "left"], ["floatRight", "right"]],
  pointerEvents: [["eventsAll", "all"], ["eventsAuto", "auto"], ["eventsNone", "none"]],
  resize: [["resizeNone", "none"]],
  userSelect: [["selectNone", "none"]],
  verticalAlign: [["alignMiddle", "middle"], ["alignTop", "top"]],
  visibility: [["invisible", "hidden"], ["visible", "visible"]],
  height: [["hToolbar", "var(--toolbar-height)"], ["hAuto", "auto"], ["hFull", "100%"], ["hInherit", "inherit"], ["hFitContent", "fit-content"], ["h0", "0px"], ["h1", "1px"], ["h2", "2px"], ["h4", "4px"], ["h6", "6px"], ["h8", "8px"], ["h10", "10px"], ["h12", "12px"], ["h14", "14px"], ["h16", "16px"], ["h18", "18px"], ["h20", "20px"], ["h24", "24px"], ["h28", "28px"], ["h32", "32px"], ["h36", "36px"], ["h40", "40px"], ["h44", "44px"], ["h48", "48px"], ["h64", "64px"], ["h100", "100px"], ["h150", "150px"], ["h200", "200px"], ["h250", "250px"], ["h300", "300px"], ["h350", "350px"], ["h400", "400px"]],
  minHeight: [["minHFull", "100%"], ["minH0", "0px"], ["minH1", "1px"], ["minH2", "2px"], ["minH4", "4px"], ["minH6", "6px"], ["minH8", "8px"], ["minH10", "10px"], ["minH12", "12px"], ["minH14", "14px"], ["minH16", "16px"], ["minH18", "18px"], ["minH20", "20px"], ["minH24", "24px"], ["minH28", "28px"], ["minH32", "32px"], ["minH36", "36px"], ["minH40", "40px"], ["minH44", "44px"], ["minH48", "48px"], ["minH64", "64px"], ["minH100", "100px"], ["minH150", "150px"], ["minH200", "200px"], ["minH250", "250px"], ["minH300", "300px"], ["minH350", "350px"], ["minH400", "400px"]],
  maxHeight: [["maxHFull", "100%"], ["maxH0", "0px"], ["maxH1", "1px"], ["maxH2", "2px"], ["maxH4", "4px"], ["maxH6", "6px"], ["maxH8", "8px"], ["maxH10", "10px"], ["maxH12", "12px"], ["maxH14", "14px"], ["maxH16", "16px"], ["maxH18", "18px"], ["maxH20", "20px"], ["maxH24", "24px"], ["maxH28", "28px"], ["maxH32", "32px"], ["maxH36", "36px"], ["maxH40", "40px"], ["maxH44", "44px"], ["maxH48", "48px"], ["maxH64", "64px"], ["maxH100", "100px"], ["maxH150", "150px"], ["maxH200", "200px"], ["maxH250", "250px"], ["maxH300", "300px"], ["maxH350", "350px"], ["maxH400", "400px"]],
  width: [["wHalf", "50%"], ["wAuto", "auto"], ["wFull", "100%"], ["wFitContent", "fit-content"], ["w0", "0px"], ["w1", "1px"], ["w2", "2px"], ["w4", "4px"], ["w6", "6px"], ["w8", "8px"], ["w10", "10px"], ["w12", "12px"], ["w14", "14px"], ["w16", "16px"], ["w18", "18px"], ["w20", "20px"], ["w24", "24px"], ["w28", "28px"], ["w32", "32px"], ["w36", "36px"], ["w40", "40px"], ["w44", "44px"], ["w48", "48px"], ["w64", "64px"], ["w100", "100px"], ["w150", "150px"], ["w200", "200px"], ["w250", "250px"], ["w300", "300px"], ["w350", "350px"], ["w400", "400px"]],
  maxWidth: [["maxWFull", "100%"], ["maxWUnset", "unset"], ["maxW0", "0px"], ["maxW1", "1px"], ["maxW2", "2px"], ["maxW4", "4px"], ["maxW6", "6px"], ["maxW8", "8px"], ["maxW10", "10px"], ["maxW12", "12px"], ["maxW14", "14px"], ["maxW16", "16px"], ["maxW18", "18px"], ["maxW20", "20px"], ["maxW24", "24px"], ["maxW28", "28px"], ["maxW32", "32px"], ["maxW36", "36px"], ["maxW40", "40px"], ["maxW44", "44px"], ["maxW48", "48px"], ["maxW64", "64px"], ["maxW100", "100px"], ["maxW150", "150px"], ["maxW200", "200px"], ["maxW250", "250px"], ["maxW300", "300px"], ["maxW350", "350px"], ["maxW400", "400px"]],
  marginTop: [["mtAuto", "auto"], ["mt0", "0px"], ["mt1", "1px"], ["mt2", "2px"], ["mt4", "4px"], ["mt6", "6px"], ["mt8", "8px"], ["mt10", "10px"], ["mt12", "12px"], ["mt14", "14px"], ["mt16", "16px"], ["mt18", "18px"], ["mt20", "20px"], ["mt24", "24px"], ["mt28", "28px"], ["mt32", "32px"], ["mt36", "36px"]],
  marginRight: [["mrAuto", "auto"], ["mr0", "0px"], ["mr1", "1px"], ["mr2", "2px"], ["mr4", "4px"], ["mr6", "6px"], ["mr8", "8px"], ["mr10", "10px"], ["mr12", "12px"], ["mr14", "14px"], ["mr16", "16px"], ["mr18", "18px"], ["mr20", "20px"], ["mr24", "24px"], ["mr28", "28px"], ["mr32", "32px"], ["mr36", "36px"]],
  marginBottom: [["mbAuto", "auto"], ["mb0", "0px"], ["mb1", "1px"], ["mb2", "2px"], ["mb4", "4px"], ["mb6", "6px"], ["mb8", "8px"], ["mb10", "10px"], ["mb12", "12px"], ["mb14", "14px"], ["mb16", "16px"], ["mb18", "18px"], ["mb20", "20px"], ["mb24", "24px"], ["mb28", "28px"], ["mb32", "32px"], ["mb36", "36px"]],
  marginLeft: [["mlAuto", "auto"], ["ml0", "0px"], ["ml1", "1px"], ["ml2", "2px"], ["ml4", "4px"], ["ml6", "6px"], ["ml8", "8px"], ["ml10", "10px"], ["ml12", "12px"], ["ml14", "14px"], ["ml16", "16px"], ["ml18", "18px"], ["ml20", "20px"], ["ml24", "24px"], ["ml28", "28px"], ["ml32", "32px"], ["ml36", "36px"]],
  minWidth: [["minW0", "0px"], ["minW1", "1px"], ["minW2", "2px"], ["minW4", "4px"], ["minW6", "6px"], ["minW8", "8px"], ["minW10", "10px"], ["minW12", "12px"], ["minW14", "14px"], ["minW16", "16px"], ["minW18", "18px"], ["minW20", "20px"], ["minW24", "24px"], ["minW28", "28px"], ["minW32", "32px"], ["minW36", "36px"], ["minW40", "40px"], ["minW44", "44px"], ["minW48", "48px"], ["minW64", "64px"], ["minW100", "100px"], ["minW150", "150px"], ["minW200", "200px"], ["minW250", "250px"], ["minW300", "300px"], ["minW350", "350px"], ["minW400", "400px"]],
  gap: [["gap0", "0px"], ["gap1", "1px"], ["gap2", "2px"], ["gap4", "4px"], ["gap6", "6px"], ["gap8", "8px"], ["gap10", "10px"], ["gap12", "12px"], ["gap14", "14px"], ["gap16", "16px"], ["gap18", "18px"], ["gap20", "20px"], ["gap24", "24px"], ["gap28", "28px"], ["gap32", "32px"], ["gap36", "36px"]],
  rowGap: [["rowGap0", "0px"], ["rowGap1", "1px"], ["rowGap2", "2px"], ["rowGap4", "4px"], ["rowGap6", "6px"], ["rowGap8", "8px"], ["rowGap10", "10px"], ["rowGap12", "12px"], ["rowGap14", "14px"], ["rowGap16", "16px"], ["rowGap18", "18px"], ["rowGap20", "20px"], ["rowGap24", "24px"], ["rowGap28", "28px"], ["rowGap32", "32px"], ["rowGap36", "36px"]],
  columnGap: [["columnGap0", "0px"], ["columnGap1", "1px"], ["columnGap2", "2px"], ["columnGap4", "4px"], ["columnGap6", "6px"], ["columnGap8", "8px"], ["columnGap10", "10px"], ["columnGap12", "12px"], ["columnGap14", "14px"], ["columnGap16", "16px"], ["columnGap18", "18px"], ["columnGap20", "20px"], ["columnGap24", "24px"], ["columnGap28", "28px"], ["columnGap32", "32px"], ["columnGap36", "36px"]],
  margin: [["m0", "0px"], ["m1", "1px"], ["m2", "2px"], ["m4", "4px"], ["m6", "6px"], ["m8", "8px"], ["m10", "10px"], ["m12", "12px"], ["m14", "14px"], ["m16", "16px"], ["m18", "18px"], ["m20", "20px"], ["m24", "24px"], ["m28", "28px"], ["m32", "32px"], ["m36", "36px"]],
  padding: [["p0", "0px"], ["p1", "1px"], ["p2", "2px"], ["p4", "4px"], ["p6", "6px"], ["p8", "8px"], ["p10", "10px"], ["p12", "12px"], ["p14", "14px"], ["p16", "16px"], ["p18", "18px"], ["p20", "20px"], ["p24", "24px"], ["p28", "28px"], ["p32", "32px"], ["p36", "36px"]],
  paddingTop: [["pt0", "0px"], ["pt1", "1px"], ["pt2", "2px"], ["pt4", "4px"], ["pt6", "6px"], ["pt8", "8px"], ["pt10", "10px"], ["pt12", "12px"], ["pt14", "14px"], ["pt16", "16px"], ["pt18", "18px"], ["pt20", "20px"], ["pt24", "24px"], ["pt28", "28px"], ["pt32", "32px"], ["pt36", "36px"]],
  paddingRight: [["pr0", "0px"], ["pr1", "1px"], ["pr2", "2px"], ["pr4", "4px"], ["pr6", "6px"], ["pr8", "8px"], ["pr10", "10px"], ["pr12", "12px"], ["pr14", "14px"], ["pr16", "16px"], ["pr18", "18px"], ["pr20", "20px"], ["pr24", "24px"], ["pr28", "28px"], ["pr32", "32px"], ["pr36", "36px"]],
  paddingBottom: [["pb0", "0px"], ["pb1", "1px"], ["pb2", "2px"], ["pb4", "4px"], ["pb6", "6px"], ["pb8", "8px"], ["pb10", "10px"], ["pb12", "12px"], ["pb14", "14px"], ["pb16", "16px"], ["pb18", "18px"], ["pb20", "20px"], ["pb24", "24px"], ["pb28", "28px"], ["pb32", "32px"], ["pb36", "36px"]],
  paddingLeft: [["pl0", "0px"], ["pl1", "1px"], ["pl2", "2px"], ["pl4", "4px"], ["pl6", "6px"], ["pl8", "8px"], ["pl10", "10px"], ["pl12", "12px"], ["pl14", "14px"], ["pl16", "16px"], ["pl18", "18px"], ["pl20", "20px"], ["pl24", "24px"], ["pl28", "28px"], ["pl32", "32px"], ["pl36", "36px"]]
};
class a {
  get mxAuto() {
    return this.mrAuto.mlAuto;
  }
  get b0() {
    return this.bt0.br0.bb0.bl0;
  }
  get b1() {
    return this.bSolid.bt1.br1.bb1.bl1;
  }
  get b2() {
    return this.bSolid.bt2.br2.bb2.bl2;
  }
  get textDisplay() {
    return this.fpl__textDisplayFontFamily.fpl__textDisplayFontSize.fpl__textDisplayFontWeight.fpl__textDisplayLetterSpacing.fpl__textDisplayLineHeight;
  }
  get textHeadingLarge() {
    return this.fpl__textHeadingLargeFontFamily.fpl__textHeadingLargeFontSize.fpl__textHeadingLargeFontWeight.fpl__textHeadingLargeLetterSpacing.fpl__textHeadingLargeLineHeight;
  }
  get textHeadingMedium() {
    return this.fpl__textHeadingMediumFontFamily.fpl__textHeadingMediumFontSize.fpl__textHeadingMediumFontWeight.fpl__textHeadingMediumLetterSpacing.fpl__textHeadingMediumLineHeight;
  }
  get textHeadingSmall() {
    return this.fpl__textHeadingSmallFontFamily.fpl__textHeadingSmallFontSize.fpl__textHeadingSmallFontWeight.fpl__textHeadingSmallLetterSpacing.fpl__textHeadingSmallLineHeight;
  }
  get textBodyLarge() {
    return this.fpl__textBodyLargeFontFamily.fpl__textBodyLargeFontSize.fpl__textBodyLargeFontWeight.fpl__textBodyLargeLetterSpacing.fpl__textBodyLargeLineHeight;
  }
  get textBodyLargeStrong() {
    return this.fpl__textBodyLargeStrongFontFamily.fpl__textBodyLargeStrongFontSize.fpl__textBodyLargeStrongFontWeight.fpl__textBodyLargeStrongLetterSpacing.fpl__textBodyLargeStrongLineHeight;
  }
  get textBodyMedium() {
    return this.fpl__textBodyMediumFontFamily.fpl__textBodyMediumFontSize.fpl__textBodyMediumFontWeight.fpl__textBodyMediumLetterSpacing.fpl__textBodyMediumLineHeight;
  }
  get textBodyMediumStrong() {
    return this.fpl__textBodyMediumStrongFontFamily.fpl__textBodyMediumStrongFontSize.fpl__textBodyMediumStrongFontWeight.fpl__textBodyMediumStrongLetterSpacing.fpl__textBodyMediumStrongLineHeight;
  }
  get textBodySmall() {
    return this.fpl__textBodySmallFontFamily.fpl__textBodySmallFontSize.fpl__textBodySmallFontWeight.fpl__textBodySmallLetterSpacing.fpl__textBodySmallLineHeight;
  }
  get textBodySmallStrong() {
    return this.fpl__textBodySmallStrongFontFamily.fpl__textBodySmallStrongFontSize.fpl__textBodySmallStrongFontWeight.fpl__textBodySmallStrongLetterSpacing.fpl__textBodySmallStrongLineHeight;
  }
  get flexNone() {
    return this.flexGrow0.flexShrink0.flexBasisAuto;
  }
  get flexAuto() {
    return this.flexGrow1.flexShrink1.flexBasisAuto;
  }
  get flex0() {
    return this.flexGrow0.flexShrink1.flexBasis0;
  }
  get flex1() {
    return this.flexGrow1.flexShrink1.flexBasis0;
  }
  get fillPositionedContainer() {
    return this.absolute.top0.right0.bottom0.left0;
  }
  get truncate() {
    return this.ellipsis.noWrap.overflowHidden;
  }
  get mx0() {
    return this.ml0.mr0;
  }
  get mx1() {
    return this.ml1.mr1;
  }
  get mx2() {
    return this.ml2.mr2;
  }
  get mx4() {
    return this.ml4.mr4;
  }
  get mx6() {
    return this.ml6.mr6;
  }
  get mx8() {
    return this.ml8.mr8;
  }
  get mx10() {
    return this.ml10.mr10;
  }
  get mx12() {
    return this.ml12.mr12;
  }
  get mx14() {
    return this.ml14.mr14;
  }
  get mx16() {
    return this.ml16.mr16;
  }
  get mx18() {
    return this.ml18.mr18;
  }
  get mx20() {
    return this.ml20.mr20;
  }
  get mx24() {
    return this.ml24.mr24;
  }
  get mx28() {
    return this.ml28.mr28;
  }
  get mx32() {
    return this.ml32.mr32;
  }
  get mx36() {
    return this.ml36.mr36;
  }
  get my0() {
    return this.mt0.mb0;
  }
  get my1() {
    return this.mt1.mb1;
  }
  get my2() {
    return this.mt2.mb2;
  }
  get my4() {
    return this.mt4.mb4;
  }
  get my6() {
    return this.mt6.mb6;
  }
  get my8() {
    return this.mt8.mb8;
  }
  get my10() {
    return this.mt10.mb10;
  }
  get my12() {
    return this.mt12.mb12;
  }
  get my14() {
    return this.mt14.mb14;
  }
  get my16() {
    return this.mt16.mb16;
  }
  get my18() {
    return this.mt18.mb18;
  }
  get my20() {
    return this.mt20.mb20;
  }
  get my24() {
    return this.mt24.mb24;
  }
  get my28() {
    return this.mt28.mb28;
  }
  get my32() {
    return this.mt32.mb32;
  }
  get my36() {
    return this.mt36.mb36;
  }
  get px0() {
    return this.pl0.pr0;
  }
  get px1() {
    return this.pl1.pr1;
  }
  get px2() {
    return this.pl2.pr2;
  }
  get px4() {
    return this.pl4.pr4;
  }
  get px6() {
    return this.pl6.pr6;
  }
  get px8() {
    return this.pl8.pr8;
  }
  get px10() {
    return this.pl10.pr10;
  }
  get px12() {
    return this.pl12.pr12;
  }
  get px14() {
    return this.pl14.pr14;
  }
  get px16() {
    return this.pl16.pr16;
  }
  get px18() {
    return this.pl18.pr18;
  }
  get px20() {
    return this.pl20.pr20;
  }
  get px24() {
    return this.pl24.pr24;
  }
  get px28() {
    return this.pl28.pr28;
  }
  get px32() {
    return this.pl32.pr32;
  }
  get px36() {
    return this.pl36.pr36;
  }
  get py0() {
    return this.pt0.pb0;
  }
  get py1() {
    return this.pt1.pb1;
  }
  get py2() {
    return this.pt2.pb2;
  }
  get py4() {
    return this.pt4.pb4;
  }
  get py6() {
    return this.pt6.pb6;
  }
  get py8() {
    return this.pt8.pb8;
  }
  get py10() {
    return this.pt10.pb10;
  }
  get py12() {
    return this.pt12.pb12;
  }
  get py14() {
    return this.pt14.pb14;
  }
  get py16() {
    return this.pt16.pb16;
  }
  get py18() {
    return this.pt18.pb18;
  }
  get py20() {
    return this.pt20.pb20;
  }
  get py24() {
    return this.pt24.pb24;
  }
  get py28() {
    return this.pt28.pb28;
  }
  get py32() {
    return this.pt32.pb32;
  }
  get py36() {
    return this.pt36.pb36;
  }
}
Object.entries(t).forEach(([o, r]) => {
  let e = Object.entries(r).map(([o, r]) => r);
  Object.defineProperties(a.prototype, e.reduce((r, [e, l]) => (r[e] = {
    get() {
      return this.add({
        [o]: l
      });
    },
    enumerable: !0,
    configurable: !0
  }, r), {}));
});
export class $$n0 extends a {
  constructor(o) {
    super();
    this.rules = o || {};
  }
  add(o) {
    let r = o instanceof $$n0 ? o.rules : o;
    return new $$n0({
      ...this.rules,
      ...r
    });
  }
  get $() {
    return this.rules;
  }
  str() {
    return Object.entries(this.rules).map(([o, r]) => `${o.replace(/[A-Z]/g, o => `-${o.toLowerCase()}`)}: ${r}`).join("; ");
  }
  toString() {
    throwError("Used toString on StyleBuilder. Use `$` or `str` instead.");
  }
  if(o, r, e) {
    return o ? this.add(r) : e ? this.add(e) : this;
  }
  case(o, r) {
    for (let [r, e] of o) if (r) return this.add(e);
    return void 0 !== r ? this.add(r) : this;
  }
  match(o, r) {
    let e = r[o];
    return e ? this.add(e) : this;
  }
}
export const r = $$n0;
