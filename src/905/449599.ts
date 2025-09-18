import { ShareContext } from '../905/91820'
import { splitEmojiAndText } from '../905/225144'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { buildFileUrl } from '../905/612685'
import { getSingletonSceneGraph } from '../905/700578'
import { generateUUIDv4 } from '../905/871474'
import { copyShareLinkOptimistic } from '../figma_app/78808'
import { buildUploadUrl } from '../figma_app/169182'
import { addPeriodIfNeeded, BORDER_RADIUS, CALCULATED_LINE_HEIGHT, CODE_STYLE, DROP_SHADOWS, EMPTY_ARRAY, getLoadingText, getSummaryHeader, GRAY_COLOR, HEIGHT_MEDIUM, LINE_HEIGHT_ALT, LINE_HEIGHT_DEFAULT, PADDING_SMALL, PADDING_TINY, processSummaryData, SPACING_LARGE, SPACING_MEDIUM, SPACING_SMALL, SummaryUtils, TEXT_STYLE, WIDTH_EXTRA, WIDTH_LARGE } from '../figma_app/274571'
import { AiSummaryEventType, trackSummaryFileEvent } from '../figma_app/864246'

let d = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2H3C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11V12C1.89543 12 1 11.1046 1 10V3C1 1.89543 1.89543 1 3 1H10C11.1046 1 12 1.89543 12 3H11C11 2.44772 10.5523 2 10 2ZM6 5H13C13.5523 5 14 5.44772 14 6V13C14 13.5523 13.5523 14 13 14H6C5.44772 14 5 13.5523 5 13V6C5 5.44772 5.44772 5 6 5ZM4 6C4 4.89543 4.89543 4 6 4H13C14.1046 4 15 4.89543 15 6V13C15 14.1046 14.1046 15 13 15H6C4.89543 15 4 14.1046 4 13V6Z" fill="black" fill-opacity="0.9"/>
</svg>
`
let c = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52567 13.6568L8.17732 11.0052L8.88443 11.7123L6.23278 14.3639C4.96357 15.6331 2.90579 15.6331 1.63658 14.3639C0.367378 13.0947 0.367377 11.0369 1.63658 9.76772L4.28823 7.11607L4.99534 7.82317L2.34369 10.4748C1.46501 11.3535 1.46501 12.7781 2.34369 13.6568C3.22237 14.5355 4.64699 14.5355 5.52567 13.6568ZM11.7129 8.88383L11.0057 8.17673L13.6574 5.52507C14.5361 4.6464 14.5361 3.22177 13.6574 2.34309C12.7787 1.46441 11.3541 1.46442 10.4754 2.34309L7.82377 4.99475L7.11666 4.28764L9.76831 1.63599C11.0375 0.366784 13.0953 0.366784 14.3645 1.63599C15.6337 2.90519 15.6337 4.96298 14.3645 6.23218L11.7129 8.88383ZM6.26224 10.5043L10.5049 6.26164L9.73885 5.49561L5.49621 9.73825L6.26224 10.5043Z" fill="black" fill-opacity="0.9"/>
</svg>
`
let u = `
<svg width='540' height='4' viewBox='0 0 540 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M540 0H0C0 2.20914 1.79087 4 4.00001 4H5C5 2.89543 5.89543 2 7 2H11C12.1046 2 13 2.89543 13 4H22.4194C22.4194 2.89543 23.3148 2 24.4194 2H28.4194C29.5239 2 30.4194 2.89543 30.4194 4H39.8387C39.8387 2.89543 40.7341 2 41.8387 2H45.8387C46.9433 2 47.8387 2.89543 47.8387 4H57.2581C57.2581 2.89543 58.1535 2 59.2581 2H63.2581C64.3626 2 65.2581 2.89543 65.2581 4H74.6774C74.6774 2.89543 75.5729 2 76.6774 2H80.6774C81.782 2 82.6774 2.89543 82.6774 4H92.0968C92.0968 2.89543 92.9922 2 94.0968 2H98.0968C99.2013 2 100.097 2.89543 100.097 4H109.516C109.516 2.89543 110.412 2 111.516 2H115.516C116.621 2 117.516 2.89543 117.516 4H126.935C126.935 2.89543 127.831 2 128.935 2H132.935C134.04 2 134.935 2.89543 134.935 4H144.355C144.355 2.89543 145.25 2 146.355 2H150.355C151.459 2 152.355 2.89543 152.355 4H161.774C161.774 2.89543 162.67 2 163.774 2H167.774C168.879 2 169.774 2.89543 169.774 4H179.194C179.194 2.89543 180.089 2 181.194 2H185.194C186.298 2 187.194 2.89543 187.194 4H196.613C196.613 2.89543 197.508 2 198.613 2H202.613C203.717 2 204.613 2.89543 204.613 4H214.032C214.032 2.89543 214.928 2 216.032 2H220.032C221.137 2 222.032 2.89543 222.032 4H231.452C231.452 2.89543 232.347 2 233.452 2H237.452C238.556 2 239.452 2.89543 239.452 4H248.871C248.871 2.89543 249.766 2 250.871 2H254.871C255.976 2 256.871 2.89543 256.871 4H266.29C266.29 2.89543 267.186 2 268.29 2H272.29C273.395 2 274.29 2.89543 274.29 4H283.71C283.71 2.89543 284.605 2 285.71 2H289.71C290.814 2 291.71 2.89543 291.71 4H301.129C301.129 2.89543 302.024 2 303.129 2H307.129C308.234 2 309.129 2.89543 309.129 4H318.548C318.548 2.89543 319.444 2 320.548 2H324.548C325.653 2 326.548 2.89543 326.548 4H335.968C335.968 2.89543 336.863 2 337.968 2H341.968C343.072 2 343.968 2.89543 343.968 4H353.387C353.387 2.89543 354.283 2 355.387 2H359.387C360.492 2 361.387 2.89543 361.387 4H370.806C370.806 2.89543 371.702 2 372.806 2H376.806C377.911 2 378.806 2.89543 378.806 4H388.226C388.226 2.89543 389.121 2 390.226 2H394.226C395.33 2 396.226 2.89543 396.226 4H405.645C405.645 2.89543 406.541 2 407.645 2H411.645C412.75 2 413.645 2.89543 413.645 4H423.064C423.064 2.89543 423.96 2 425.064 2H429.064C430.169 2 431.064 2.89543 431.064 4H440.484C440.484 2.89543 441.379 2 442.484 2H446.484C447.588 2 448.484 2.89543 448.484 4H457.903C457.903 2.89543 458.799 2 459.903 2H463.903C465.008 2 465.903 2.89543 465.903 4H475.322C475.322 2.89543 476.218 2 477.322 2H481.322C482.427 2 483.322 2.89543 483.322 4H492.742C492.742 2.89543 493.637 2 494.742 2H498.742C499.846 2 500.742 2.89543 500.742 4H510.161C510.161 2.89543 511.057 2 512.161 2H516.161C517.266 2 518.161 2.89543 518.161 4H527.581C527.581 2.89543 528.476 2 529.581 2H533.581C534.685 2 535.581 2.89543 535.581 4H536C538.209 4 540 2.20914 540 0Z' fill='white'/>
</svg>
`
let p = buildUploadUrl('134d67d38337bfa10e028cc6e579ffc7ab7fedc5')
let m = `<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.909091V0H0.941176V0.909091C0.941176 2.66636 2.416 4.09091 4.23529 4.09091H8V5H4.23529C1.89621 5 0 3.16844 0 0.909091Z" fill="#C4C4C4"/>
</svg>`
// Original function A: Creates a button component with SVG icon and text
/**
 * Creates a button component with an SVG icon and text label.
 * @param e - The widget context.
 * @param t - The button text.
 * @param i - The tooltip text.
 * @param n - The onClick handler.
 * @param r - The SVG source.
 * @returns The rendered AutoLayout component.
 */
function createButton(e: any, t: string, i: string, n: () => void, r: string) {
  const {
    widget,
  } = e
  const {
    AutoLayout,
    SVG,
    Text,
  } = widget
  return e.widget.h(AutoLayout, {
    name: 'Extra top padding',
    overflow: 'visible',
    direction: 'horizontal',
    tooltip: i,
    height: 30,
    padding: {
      top: 7,
      right: 13,
      bottom: 7,
      left: 8,
    },
    horizontalAlignItems: 'center',
    verticalAlignItems: 'center',
    spacing: 6,
    cornerRadius: 6,
    fill: '#F5F5F5',
    hoverStyle: {
      fill: '#E6E6E6',
    },
    onClick: n,
  }, e.widget.h(SVG, {
    src: r,
  }), e.widget.h(Text, {
    name: '',
    fill: '#000C',
    lineHeight: 22,
    fontSize: 11,
    fontFamily: 'Inter',
    fontWeight: 500,
  }, t))
}

// Original function b: Renders a header with optional emoji
/**
 * Renders a header component with optional emoji and text.
 * @param e - The widget context.
 * @param t - The header text.
 * @returns The rendered AutoLayout component.
 */
function renderHeader(e: any, t: string) {
  let emojiElements: any[] | undefined
  const {
    widget,
  } = e
  const {
    AutoLayout,
    Frame,
    Text,
  } = widget
  const createText = (text: string) => widget.h(Text, {
    ...TEXT_STYLE,
    fontWeight: 'bold',
    spacing: 8,
    width: 'fill-parent',
  }, text)
  let layoutProps: any = {
    direction: 'vertical' as const,
    padding: {
      vertical: 3,
    },
    width: WIDTH_LARGE,
    verticalAlignItems: undefined,
  }
  let textElement = createText(t)
  layoutProps = {
    ...layoutProps,
    direction: 'horizontal' as const,
    verticalAlignItems: 'center',
    padding: {
      top: 8,
    },
  }
  const {
    emoji,
    text,
  } = splitEmojiAndText(t)
  textElement = createText(text.trim())
  if (emoji) {
    emojiElements = [((e: any, emoji: string) => {
      const {
        widget,
      } = e
      const {
        AutoLayout,
      } = widget
      return widget.h(AutoLayout, {
        fill: {
          r: 0.9,
          g: 0.9,
          b: 0.9,
          a: 0,
        },
        width: LINE_HEIGHT_ALT,
        height: LINE_HEIGHT_ALT,
        horizontalAlignItems: 'center',
        verticalAlignItems: 'center',
        cornerRadius: 6,
      }, ((e: any, emoji: string) => {
        const {
          widget,
        } = e
        const {
          Text,
        } = widget
        return e.widget.h(Text, {
          fontSize: 14,
        }, emoji)
      })(e, emoji))
    })(e, emoji), e.widget.h(Frame, {
      width: SPACING_SMALL,
      height: 'fill-parent',
    })]
  }
  return e.widget.h(AutoLayout, layoutProps, emojiElements || [], textElement)
}

// Original v: Constants object
/**
 * Constants for text formatting.
 */
const TextConstants = {
  NEWLINE: '\n',
  LIST_BULLET: '\u2022',
}

// Original function I: Renders background component
/**
 * Renders the background component with image and gradients.
 * @param e - The widget context.
 * @returns The rendered AutoLayout component.
 */
function renderBackground(e: any) {
  const {
    widget,
  } = e
  const {
    AutoLayout,
    Rectangle,
  } = widget
  const imageRect = e.widget.h(Rectangle, {
    fill: {
      type: 'image',
      src: p,
      imageSize: {
        width: HEIGHT_MEDIUM,
        height: HEIGHT_MEDIUM,
      },
      scaleMode: 'tile',
      scalingFactor: 1,
    },
    height: 9999,
    width: HEIGHT_MEDIUM,
    positioning: 'absolute',
    y: 0,
  })
  return e.widget.h(AutoLayout, {
    height: 'fill-parent',
    width: HEIGHT_MEDIUM,
  }, imageRect, ((e: any) => {
    const {
      widget,
    } = e
    const {
      AutoLayout,
      Rectangle,
    } = widget
    return e.widget.h(AutoLayout, {
      direction: 'vertical',
      height: 'fill-parent',
      width: HEIGHT_MEDIUM,
    }, e.widget.h(AutoLayout, {
      fill: {
        r: 1,
        g: 1,
        b: 1,
        a: 0,
      },
      height: 'fill-parent',
      width: HEIGHT_MEDIUM,
    }), e.widget.h(Rectangle, {
      fill: {
        type: 'gradient-linear',
        gradientHandlePositions: [{
          x: 0.5,
          y: 0,
        }, {
          x: 1,
          y: 1,
        }, {
          x: 0,
          y: 0,
        }],
        gradientStops: [{
          position: 0,
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 0,
          },
        }, {
          position: 1,
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
          },
        }],
      },
      height: 40,
      width: HEIGHT_MEDIUM,
      y: {
        type: 'bottom',
        offset: 56,
      },
    }), e.widget.h(Rectangle, {
      fill: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
      height: 16,
      width: HEIGHT_MEDIUM,
      y: {
        type: 'bottom',
        offset: 16,
      },
    }))
  })(e))
}

// Original function E: Creates a spacer component
/**
 * Creates a spacer component with specified width.
 * @param e - The widget context.
 * @param t - The width of the spacer.
 * @returns The rendered AutoLayout component.
 */
function createSpacer(e: any, t: number) {
  const {
    widget,
  } = e
  const {
    AutoLayout,
  } = widget
  return e.widget.h(AutoLayout, {
    height: 'fill-parent',
    width: t,
  })
}

// Original S: Class for managing summary listeners
/**
 * Manages listeners for summary mount events.
 */
class SummaryListenerManager {
  summaryMountedListeners: Record<string, (nodeId: string, items: any[]) => void> = {}

  /**
   * Attaches a mounted listener.
   * @param listener - The listener function.
   * @returns The listener ID.
   */
  attachMountedListener(listener: (nodeId: string, items: any[]) => void): string {
    const id = generateUUIDv4()
    this.summaryMountedListeners[id] = listener
    return id
  }

  /**
   * Removes a listener by ID.
   * @param id - The listener ID.
   * @returns True if removed, false otherwise.
   */
  removeListener(id: string): boolean {
    if (id in this.summaryMountedListeners) {
      delete this.summaryMountedListeners[id]
      return true
    }
    return false
  }

  /**
   * Clears all listeners.
   */
  clearListeners(): void {
    this.summaryMountedListeners = {}
  }

  /**
   * Notifies all listeners of a summary mount event.
   * @param nodeId - The node ID.
   * @param items - The summary items.
   */
  onSummaryMount(nodeId: string, items: any[]): void {
    Object.values(this.summaryMountedListeners).forEach((listener) => {
      try {
        listener(nodeId, items)
      }
      catch {
        // Ignore errors in listeners
      }
    })
  }
}
const summaryListenerManager = new SummaryListenerManager()

// Update references in the main code to use new names
// For example, replace A with createButton, b with renderHeader, etc.
// Also, export these if needed, but since the main export is V = $$w0, and these are used internally, keep them as is or export if required.
/**
 * Main widget entry point for AI summary.
 * @param context - The widget context containing figma and widget APIs.
 * @returns The rendered widget component.
 */
export function SummaryWidget({
  figma: context,
}) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    useSyncedState,
    useWidgetId,
  } = widget
  widget.register(() => {
    const [, summaryItems] = useSyncedState('ai-summary-items', EMPTY_ARRAY)
    const widgetId = useWidgetId()
    widget.useEffect(() => {
      const [isMounted, setMounted] = useSyncedState('mounted', false)
      if (!isMounted) {
        setMounted(true)
        widget.waitForTask(new Promise(() => {
          summaryListenerManager.onSummaryMount(widgetId, summaryItems)
        }))
      }
    }, [])
    return context.widget.h(AutoLayout, {
      fill: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      direction: 'vertical',
      spacing: 0,
      effect: DROP_SHADOWS,
      width: WIDTH_EXTRA,
    }, renderSummaryHeader(context), renderSummaryFooter(context))
  })
}

/**
 * Renders the summary header section.
 * @param context - The widget context.
 * @returns The rendered header component.
 */
function renderSummaryHeader(context: any) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    useEffect,
    useSyncedState,
    useWidgetId,
  } = widget
  const widgetId = useWidgetId()
  const [isLoading] = useSyncedState('loading', false)
  const [summarizedAt] = useSyncedState('summarized-at', '')
  const [loadingText, setLoadingText] = useSyncedState('loadingText', `${getLoadingText()}...`)
  const sceneGraph = getSingletonSceneGraph()
  useEffect(() => {
    if (isLoading) {
      widget.waitForTask(new Promise<void>((resolve) => {
        setTimeout(() => {
          if (sceneGraph.get(widgetId))
            setLoadingText(addPeriodIfNeeded)
          resolve()
        }, 500)
      }))
    }
  })
  return context.widget.h(AutoLayout, {
    cornerRadius: {
      topLeft: 8,
      topRight: 8,
      bottomLeft: 0,
      bottomRight: 0,
    },
    fill: '#FFFFFF',
    width: WIDTH_EXTRA,
  }, renderBackground(context), isLoading
    ? renderLoadingState(context, {
        loadingText,
        paddingLeft: 8,
        paddingRight: 8,
      })
    : renderSummaryContent(context, summarizedAt), renderBackground(context))
}

/**
 * Renders the loading state.
 * @param context - The widget context.
 * @param options - Loading text and padding.
 * @returns The loading component.
 */
function renderLoadingState(context: any, options: {
  loadingText: string
  paddingLeft: number
  paddingRight: number
}) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    Text,
  } = widget
  const {
    loadingText,
    paddingLeft,
    paddingRight,
  } = options
  return context.widget.h(AutoLayout, {
    fill: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    direction: 'vertical',
    spacing: 0,
    effect: DROP_SHADOWS,
    width: 'fill-parent',
    padding: {
      top: 32,
      bottom: 24,
      left: paddingLeft,
      right: paddingRight,
    },
  }, context.widget.h(Text, TEXT_STYLE, loadingText))
}

/**
 * Renders the summary content.
 * @param context - The widget context.
 * @param summarizedAt - The summary timestamp.
 * @returns The summary content component.
 */
function renderSummaryContent(context: any, summarizedAt: string) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    Frame,
    useSyncedState,
  } = widget
  const [summaryItems] = useSyncedState('ai-summary-items', EMPTY_ARRAY)

  // Group summary items by headers and bullets
  const groupedItems = groupSummaryItems(summaryItems)

  // Header section
  const headerSection = context.widget.h(Frame, {
    height: 24,
    width: 'fill-parent',
  }, context.widget.h(AutoLayout, {
    direction: 'horizontal',
    width: WIDTH_LARGE,
    spacing: 8,
  }, renderSummaryTitle(context, summarizedAt)))

  // Main summary content
  const summaryContent = groupedItems.map(item => renderSummaryPrimitive(context, item))

  // Layout with padding and spacers
  const paddedContent = context.widget.h(AutoLayout, {
    direction: 'horizontal',
    width: 'fill-parent',
  }, createSpacer(context, PADDING_SMALL), context.widget.h(AutoLayout, {
    direction: 'vertical',
    width: 'fill-parent',
    padding: {},
  }, headerSection, ...summaryContent), createSpacer(context, PADDING_SMALL))

  // Action buttons section
  const actionButtons = renderSummaryActions(context, summaryItems)
  return context.widget.h(AutoLayout, {
    direction: 'vertical',
    width: 'fill-parent',
    padding: {
      top: 40,
      bottom: 32,
    },
  }, paddedContent, actionButtons)
}

/**
 * Groups summary items by headers and bullets.
 * @param items - The summary items array.
 * @returns Grouped summary items.
 */
function groupSummaryItems(items: any[]): Array<{
  primitive: any
  summaryStateIndex: number
}> {
  const grouped: Array<{
    primitive: any
    summaryStateIndex: number
  }> = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const last = grouped.length > 0 ? grouped[grouped.length - 1] : null
    if (item.type === 'h2') {
      const group = {
        type: 'header_bullet_group',
        header: item,
        bullets: [],
      }
      grouped.push({
        primitive: group,
        summaryStateIndex: i,
      })
    }
    else {
      if (last && last.primitive.type === 'header_bullet_group' && item.type === 'li') {
        last.primitive.bullets.push(item)
      }
      else {
        grouped.push({
          primitive: item,
          summaryStateIndex: i,
        })
      }
    }
  }
  return grouped
}

/**
 * Renders the summary title.
 * @param context - The widget context.
 * @param summarizedAt - The summary timestamp.
 * @returns The summary title component.
 */
function renderSummaryTitle(context: any, summarizedAt: string) {
  const {
    widget,
  } = context
  const {
    Text,
  } = widget
  const headerText = getSummaryHeader(summarizedAt)
  return context.widget.h(Text, {
    ...CODE_STYLE,
    fill: {
      type: 'solid',
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.55,
      },
    },
    width: 'hug-contents',
  }, headerText, TextConstants.NEWLINE)
}

/**
 * Renders a summary primitive (header group or item).
 * @param context - The widget context.
 * @param item - The grouped summary item.
 * @returns The rendered component.
 */
function renderSummaryPrimitive(context: any, item: {
  primitive: any
  summaryStateIndex: number
}) {
  const {
    primitive,
  } = item
  if (primitive.type === 'header_bullet_group') {
    return renderHeaderBulletGroup(context, primitive)
  }
  return renderSummaryItem(context, primitive)
}

/**
 * Renders a header with its bullet items.
 * @param context - The widget context.
 * @param group - The header bullet group.
 * @returns The rendered group component.
 */
function renderHeaderBulletGroup(context: any, group: any) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    Frame,
  } = widget
  const bullets = group.bullets.map((bullet: any, idx: number) => renderBulletItem(context, bullet.content, idx === group.bullets.length - 1))
  return context.widget.h(AutoLayout, {
    direction: 'vertical',
    width: 'hug-contents',
  }, renderHeader(context, group.header.content), context.widget.h(AutoLayout, {
    direction: 'horizontal',
    width: 'fill-parent',
  }, context.widget.h(Frame, {
    width: SPACING_LARGE,
    height: 'fill-parent',
  }), context.widget.h(AutoLayout, {
    direction: 'vertical',
    width: 'fill-parent',
    overflow: 'visible',
  }, ...bullets)))
}

/**
 * Renders a bullet item.
 * @param context - The widget context.
 * @param content - The bullet content.
 * @param isLast - Whether this is the last bullet.
 * @returns The rendered bullet component.
 */
function renderBulletItem(context: any, content: string, isLast: boolean = false) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    Frame,
    SVG,
    Text,
  } = widget

  // Vertical line and bullet SVG
  const line = context.widget.h(AutoLayout, {
    width: 1,
    height: 'fill-parent',
  }, context.widget.h(Frame, {
    height: LINE_HEIGHT_DEFAULT / 2,
    width: 'fill-parent',
    hidden: !isLast,
    fill: GRAY_COLOR,
  }), context.widget.h(Frame, {
    height: 'fill-parent',
    width: 'fill-parent',
    hidden: isLast,
    fill: GRAY_COLOR,
  }))
  const bulletSvg = context.widget.h(AutoLayout, {
    height: LINE_HEIGHT_DEFAULT / 2 + BORDER_RADIUS,
    verticalAlignItems: 'end',
    overflow: 'visible',
    positioning: 'absolute',
    x: 0,
  }, context.widget.h(SVG, {
    src: m,
  }))
  const bulletText = context.widget.h(AutoLayout, {
    padding: {
      vertical: 4,
    },
    width: 'fill-parent',
  }, context.widget.h(Text, {
    ...TEXT_STYLE,
    lineHeight: LINE_HEIGHT_DEFAULT,
    width: 'fill-parent',
    letterSpacing: -0.006,
  }, content))
  return context.widget.h(AutoLayout, {
    direction: 'horizontal',
    width: 'fill-parent',
    overflow: 'hidden',
    spacing: SPACING_MEDIUM,
  }, line, bulletSvg, bulletText)
}

/**
 * Renders a summary item (h1, h2, li, or default).
 * @param context - The widget context.
 * @param item - The summary item.
 * @returns The rendered item component.
 */
function renderSummaryItem(context: any, item: any) {
  switch (item.type) {
    case 'h1':
      return renderH1(context, item.content)
    case 'h2':
      return renderHeader(context, item.content)
    case 'li':
      return renderListItem(context, item.content)
    default:
      return renderDefaultText(context, item.content)
  }
}

/**
 * Renders an h1 header.
 * @param context - The widget context.
 * @param text - The header text.
 * @returns The rendered h1 component.
 */
function renderH1(context: any, text: string) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    Text,
  } = widget
  const layoutProps = {
    direction: 'vertical',
    padding: {
      vertical: 8,
    },
    width: 'fill-parent',
  }
  const textStyle = {
    ...TEXT_STYLE,
    lineHeight: 32,
    fontSize: 24,
    fontWeight: 'medium',
    spacing: 8,
    letterSpacing: -0.25,
  }
  return context.widget.h(AutoLayout, layoutProps, context.widget.h(Text, textStyle, text))
}

/**
 * Renders a list item.
 * @param context - The widget context.
 * @param text - The list item text.
 * @returns The rendered list item component.
 */
function renderListItem(context: any, text: string) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    Text,
  } = widget
  const bullet = context.widget.h(Text, {
    ...TEXT_STYLE,
    paragraphIndent: 8,
    width: CALCULATED_LINE_HEIGHT + 16,
    padding: {
      right: 8,
    },
  }, TextConstants.LIST_BULLET)
  const content = context.widget.h(Text, {
    ...TEXT_STYLE,
    width: 'fill-parent',
  }, text)
  return context.widget.h(AutoLayout, {
    direction: 'horizontal',
    padding: {
      vertical: 3,
    },
    width: WIDTH_LARGE,
  }, bullet, content)
}

/**
 * Renders default text.
 * @param context - The widget context.
 * @param text - The text content.
 * @returns The rendered text component.
 */
function renderDefaultText(context: any, text: string) {
  const {
    widget,
  } = context
  const {
    Text,
  } = widget
  return context.widget.h(Text, TEXT_STYLE, text)
}

/**
 * Renders the summary action buttons.
 * @param context - The widget context.
 * @param summaryItems - The summary items array.
 * @returns The rendered action buttons component.
 */
function renderSummaryActions(context: any, summaryItems: any[]) {
  const {
    widget,
  } = context
  const {
    AutoLayout,
    useSyncedState,
    useWidgetId,
  } = widget
  const [summaryText] = useSyncedState('ai-summary', '')
  const [items] = useSyncedState('ai-summary-items', EMPTY_ARRAY)
  const widgetId = useWidgetId()
  const [summarizedAt] = useSyncedState('summarized-at', '')
  return context.widget.h(AutoLayout, {
    width: 'fill-parent',
    direction: 'horizontal',
    spacing: 8,
    padding: {
      top: 20,
    },
  }, createButton(context, getI18nString('whiteboard.ai_summary.copy_button_text'), getI18nString('whiteboard.ai_summary.copy_button_tooltip'), () => {
    trackSummaryFileEvent(AiSummaryEventType.TEXT_COPIED, {
      summary_node_id: widgetId,
    })
    if (summaryText.length > 0)
      processSummaryData(widgetId, summaryText, items)
    SummaryUtils.copySummaryDataToClipboard(summaryItems, summarizedAt)
    debugState.dispatch(VisualBellActions.enqueue({
      message: getI18nString('whiteboard.ai_summary.copy_text_to_clipboard'),
      error: false,
      type: 'copy-summary-text-to-clipboard',
    }))
  }, d), createButton(context, getI18nString('whiteboard.ai_summary.copy_link_button_text'), getI18nString('whiteboard.ai_summary.copy_link_button_tooltip'), () => {
    trackSummaryFileEvent(AiSummaryEventType.LINK_COPIED, {
      summary_node_id: widgetId,
    })
    if (summaryText.length > 0)
      processSummaryData(widgetId, summaryText, items)
    const openFile = debugState.getState().openFile
    if (!openFile)
      return
    const url = buildFileUrl({
      file: openFile,
      nodeId: widgetId,
    })
    debugState.dispatch(copyShareLinkOptimistic({
      fileKey: openFile.key,
      url,
      source: ShareContext.AI_SUMMARY_COPY_LINK_BUTTON,
      visualBellMessageOverride: getI18nString('whiteboard.ai_summary.copied_link_to_clipboard'),
    }))
  }, c))
}

/**
 * Renders the summary footer section.
 * @param context - The widget context.
 * @returns The rendered footer component.
 */
function renderSummaryFooter(context: any) {
  const {
    widget,
  } = context
  const {
    Frame,
    SVG,
  } = widget
  return widget.h(Frame, {
    width: WIDTH_EXTRA,
    height: PADDING_TINY,
  }, widget.h(SVG, {
    height: PADDING_TINY,
    width: 'fill-parent',
    src: u,
  }))
}
export const V = SummaryWidget
