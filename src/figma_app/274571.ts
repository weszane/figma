import { x } from '../905/239551'
import { getI18nString } from '../905/303541'
import { getSingletonSceneGraph } from '../905/700578'

// Constants for dimensions and values
export const EMPTY_ARRAY: any[] = []
export const PADDING_SMALL = 8
export const WIDTH_LARGE = 436
export const HEIGHT_MEDIUM = 36
export const WIDTH_EXTRA = 524
export const PADDING_TINY = 4
export const LINE_HEIGHT_DEFAULT = 24
export const LINE_HEIGHT_ALT = 24
export const SPACING_SMALL = 6
export const SPACING_MEDIUM = 18
export const SPACING_LARGE = 12
export const GRAY_COLOR = '#C4C4C4'
export const BORDER_RADIUS = 4

// Drop shadow styles for UI elements
export const DROP_SHADOWS = [
  {
    type: 'drop-shadow',
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 1 },
    blur: 3,
  },
  {
    type: 'drop-shadow',
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 3 },
    blur: 8,
  },
  {
    type: 'drop-shadow',
    color: { r: 0, g: 0, b: 0, a: 0.18 },
    offset: { x: 0, y: 0 },
    blur: 0.5,
  },
]

// Font styles
export const TEXT_STYLE = {
  fontFamily: 'Inter',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 24,
  letterSpacing: -0.084,
  width: 436,
}

export const CODE_STYLE = {
  fontFamily: 'Roboto Mono',
  fontSize: 11,
  fontWeight: 400,
  lineHeight: 24,
  width: WIDTH_LARGE,
}

// Calculated values
export const CALCULATED_LINE_HEIGHT = 8 * TEXT_STYLE.fontSize / 14

/**
 * Sets the synced state for AI summary items and optionally renders the widget.
 * Original: $$S14
 * @param widget - The widget instance.
 * @param items - The summary items to sync.
 * @param render - Whether to render the widget.
 */
export function setSummaryItems(widget: any, items: any, render = true): void {
  if (widget.isAlive) {
    widget.setWidgetSyncedState('syncedState:ai-summary-items', JSON.stringify(items))
    if (render) {
      x.renderFirstPartyWidget(widget.widgetId, widget.guid)
    }
  }
}

/**
 * Sets the synced state for summarized timestamp and optionally renders the widget.
 * Original: $$v6
 * @param widget - The widget instance.
 * @param date - The date to set.
 * @param render - Whether to render the widget.
 */
export function setSummarizedAt(widget: any, date: Date, render = true): void {
  if (widget.isAlive) {
    widget.setWidgetSyncedState('syncedState:summarized-at', `${date.getTime()}`)
    if (render) {
      x.renderFirstPartyWidget(widget.widgetId, widget.guid)
    }
  }
}

/**
 * Utility class for summary operations.
 * Original: $$A10
 */
export class SummaryUtils {
  /**
   * Copies summary data to clipboard.
   * @param items - The summary items.
   * @param timestamp - The timestamp.
   */
  static copySummaryDataToClipboard(items: any[], timestamp: string): void {
    const formattedText = formatSummaryText(items, timestamp)
    navigator.clipboard.writeText(formattedText)
  }
}

/**
 * Formats summary text for clipboard.
 * Original: $$x0
 * @param items - The summary items.
 * @param timestamp - The timestamp.
 * @returns The formatted text.
 */
export function formatSummaryText(items: any[], timestamp: string): string {
  let result = ''
  result += `${getSummaryHeader(timestamp)}\n`
  items.forEach((item) => {
    if (item.type === 'h2') {
      result += '\n'
    }
    switch (item.type) {
      case 'li':
        result += `\u2022 ${item.content}\n`
        break
      case 'p':
      case 'h1':
      case 'h2':
      default:
        result += `${item.content}\n`
        break
    }
  })
  result += `\n${getI18nString('whiteboard.ai.summary.summary_footer_disclaimer')}`
  return result
}

/**
 * Adds a period to the end of text if it doesn't end with ellipsis.
 * Original: $$N15
 * @param text - The input text.
 * @returns The text with period if needed.
 */
export function addPeriodIfNeeded(text: string): string {
  return text.endsWith('...') ? getLoadingText() : `${text}.`
}

/**
 * Gets the summary header disclaimer.
 * Original: $$C8
 * @param timestamp - The timestamp string.
 * @returns The header string.
 */
export function getSummaryHeader(timestamp: string): string {
  const date = new Date()
  const parsedTime = parseInt(timestamp, 10)
  if (parsedTime) {
    date.setTime(parsedTime)
    return getI18nString('whiteboard.ai.summary.summary_header_disclaimer', {
      summaryGenerationDate: date,
    })
  }
  return getI18nString('whiteboard.ai.summary.summary_header_disclaimer_no_date')
}

/**
 * Gets the loading text.
 * Original: $$w16
 * @returns The loading text.
 */
export function getLoadingText(): string {
  return getI18nString('whiteboard.ai_summary.loading_text')
}

/**
 * Processes summary data and updates the widget.
 * Original: $$O2
 * @param widgetId - The widget ID.
 * @param data - The summary data.
 * @param options - Additional options.
 * @returns Whether the operation was successful.
 */
export function processSummaryData(widgetId: string, data: any, options?: any): boolean {
  const hasData = data.length > 0
  const hasOptions = options && options.length > 0
  if (!hasData || hasOptions) {
    return false
  }
  const sceneGraph = getSingletonSceneGraph().get(widgetId)
  if (!sceneGraph) {
    return false
  }
  setSummaryItems(sceneGraph, (parsedData: any) => {
    const items = JSON.parse(parsedData)
    const result = [
      {
        type: 'p',
        context: 'tldr',
        content: items.summary,
      },
    ]
    items.supporting_points.forEach(({ header, two_to_five_supporting_points }: any) => {
      result.push({
        type: 'h2',
        content: header,
        context: 'main_theme',
      })
      two_to_five_supporting_points.forEach((point: string) => {
        result.push({
          type: 'li',
          content: point,
          context: 'supporting_point',
        })
      })
    })
    return result
  })
  return true
}

// Updated exports with refactored names
export const Aq = formatSummaryText
export const Ax = PADDING_SMALL
export const Ay = processSummaryData
export const Bb = TEXT_STYLE
export const E_ = LINE_HEIGHT_ALT
export const Fx = GRAY_COLOR
export const Gw = setSummarizedAt
export const H0 = LINE_HEIGHT_DEFAULT
export const IM = getSummaryHeader
export const JT = EMPTY_ARRAY
export const NY = SummaryUtils
export const QU = CODE_STYLE
export const Re = SPACING_SMALL
export const Ub = HEIGHT_MEDIUM
export const WN = setSummaryItems
export const Yc = addPeriodIfNeeded
export const ZG = getLoadingText
export const _t = WIDTH_EXTRA
export const bH = BORDER_RADIUS
export const co = DROP_SHADOWS
export const iL = CALCULATED_LINE_HEIGHT
export const ju = WIDTH_LARGE
export const kO = SPACING_MEDIUM
export const pA = PADDING_TINY
export const xe = SPACING_LARGE
