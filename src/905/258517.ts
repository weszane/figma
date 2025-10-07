import { reportError } from '../905/11'
import { I as _$$I } from '../905/117966'
import { fullscreenPerfManager, gpuFullscreenEventNames } from '../905/125218'
import { ServiceCategories } from '../905/165054'
import { buildAnalyticsContext } from '../905/210851'
import { analyticsEventManager, trackEventAnalytics, trackFullScreenAnalytics } from '../905/449184'
import { sendHistogram } from '../905/485103'
import { AggregationType, LanguageType } from '../905/535806'
import { distributionAnalytics, globalPerfTimer, reactTimerGroup, timerEventNames } from '../905/542194'
import { currentSelectionAtom } from '../905/617744'
import { EventEmitter } from '../905/690073'
import { logCustom, setModeEventHandler } from '../905/714362'
import { debounce } from '../905/915765'
import { eventLogger } from '../905/945673'
import { atomStoreManager } from '../figma_app/27355'
import { isDevEnvironment } from '../figma_app/169182'
import { Rf } from '../figma_app/546509'
import { contextLostHandler, contextRestoredHandler, memoryPerformanceKeys, postPerfMetric, sendConsecutiveFlushes, sendConsecutiveImageChangeSkips, sendDirtyAfterLoad } from '../figma_app/553184'
import { incrementNumAnimationsFromCpp, incrementNumAnimationsFromTs, onContextRestored, setIndependentLayerActive, setIndependentLayerAdded, setIndependentLayerAnimationActive, setIndependentLayerRemoved, setNonIndependentLayerAnimationActive, updateMaxRenderedTileBytesUsed, updateMaxRenderLayerCount } from '../figma_app/682945'
import { DocumentSaveEvent, Multiplayer } from '../figma_app/763686'

// Original: let A = []
// Original: function y(e) { ... }
let renderingTraceHtml: string[] = []

function generateTileImageHtml(tileData: string): string {
  return `<img src="data:image/png;base64, ${tileData}" alt="Image of tile" />`
}

class MultiplayerRoundTripReporter {
  private roundTripTimes: number[] = []
  private report = debounce(() => {
    if (this.roundTripTimes.length === 0)
      return
    const sum = this.roundTripTimes.reduce((acc, time) => acc + time, 0)
    const average = Math.round(1000 * sum / this.roundTripTimes.length)
    this.roundTripTimes = []
    sendHistogram('performance.multiplayer.round_trip_time', average)
  }, 60000)

  reportMultiplayerRoundTripTime(time: number): void {
    this.roundTripTimes.push(time)
    this.report()
  }
}

const multiplayerRoundTripReporter = new MultiplayerRoundTripReporter()

class RenderingTracer {
  recordRenderingEvent(event: string, data: any): void {
    let html = ''
    if (event === 'transferState') {
      let isFirstRow = true
      let currentY = 0
      html += '<h1>Transfer State Tiles</h1><table><tr>'
      for (let i = 0; i < data.tiles.length; i++) {
        const tile = data.tiles[i]
        if (!isFirstRow && tile.y !== currentY) {
          html += '</tr><tr>'
        }
        html += `<td>${generateTileImageHtml(tile.tile)}</td>`
        currentY = tile.y
        isFirstRow = false
      }
      html += '</tr></table>'
    }
    else if (event === 'renderTile') {
      html += '<h1>Rendered Tile</h1>'
      html += `<h2>x = ${data.x}, y = ${data.y}, GUID = ${data.guid}</h2>`
      html += generateTileImageHtml(data.tile)
    }
    else if (event === 'drawToTileStackTile') {
      html += '<h1>Draw to Tile Stack Tile</h1>'
      html += `<h2>debugInfo = ${data.debugInfo}</h2>`
      html += generateTileImageHtml(data.tile)
    }
    renderingTraceHtml.push(html)
  }

  saveRenderingTrace(): void {
    if (renderingTraceHtml.length === 0)
      return
    let html = `<!doctype html>
<html>
<head>
  <title>Rendering Trace</title>
  <meta charset="utf-8">
  <style>
    td {
      padding: 2px;
    }
  </style>
</head>
<body>`
    html += renderingTraceHtml.join('')
    html += `
</body>
</html>`
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([html], { type: 'text/html' }))
    link.download = 'rendering_trace.html'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    renderingTraceHtml.length = 0
  }
}

const renderingTracer = new RenderingTracer()

class FullscreenHandler {
  private events = new EventEmitter('fullscreen')

  constructor() {
    setModeEventHandler(this.trackFromFullscreen.bind(this))
  }

  trackFromFullscreen(event: any, context: any, options: any): void {
    trackFullScreenAnalytics(event, buildAnalyticsContext(context), {
      forwardToDatadog: options.forwardToDatadog,
      batchRequest: options.batchRequest ?? undefined,
      addToRUM: options.addToRUM ?? undefined,
    })
  }

  trackDefinedEventFromFullscreen(event: any, context: any): void {
    analyticsEventManager.trackDefinedFullscreenEvent(event, buildAnalyticsContext(context))
  }

  resetDefinedAnalyticsForDocument(): void {
    analyticsEventManager.resetDefinedAnalyticsForDocument()
  }

  slogFromFullscreen(...args: any[]): any {
    return logCustom(...args)
  }

  reportContextLost(): void {
    contextLostHandler()
  }

  reportContextRestored(): void {
    contextRestoredHandler()
    onContextRestored()
  }

  reportRenderLayerCount(count: number): void {
    updateMaxRenderLayerCount(count)
  }

  reportIndependentLayerAnimationActive(): void {
    setIndependentLayerAnimationActive()
  }

  reportNonIndependentLayerAnimationActive(): void {
    setNonIndependentLayerAnimationActive()
  }

  reportIndependentLayerActive(): void {
    setIndependentLayerActive()
  }

  reportIndependentLayerAdded(): void {
    setIndependentLayerAdded()
  }

  reportIndependentLayerRemoved(): void {
    setIndependentLayerRemoved()
  }

  reportRenderedTileBytesUsed(bytes: number): void {
    updateMaxRenderedTileBytesUsed(bytes)
  }

  reportAnimationFromCpp(): void {
    incrementNumAnimationsFromCpp()
  }

  reportAnimationFromTs(): void {
    incrementNumAnimationsFromTs()
  }

  recordRenderingEvent(event: string, data: any): void {
    renderingTracer.recordRenderingEvent(event, data)
  }

  saveRenderingTrace(): void {
    renderingTracer.saveRenderingTrace()
  }

  reportDirtyAfterLoad(sessionId: string): void {
    const isDev = isDevEnvironment()
    trackEventAnalytics('dirty_after_load', {
      registersDump: Multiplayer?.pendingRegistersDump(isDev).substring(0, 10000),
      sessionID: sessionId,
    })
    sendDirtyAfterLoad()
  }

  reportConsecutiveFlushes(): void {
    sendConsecutiveFlushes()
  }

  reportConsecutiveImageChangeSkips(): void {
    sendConsecutiveImageChangeSkips()
  }

  reportPerfEvent(event: DocumentSaveEvent): void {
    switch (event) {
      case DocumentSaveEvent.AFTER_FIRST_RENDER:
        postPerfMetric('AFTER_FIRST_RENDER')
        fullscreenPerfManager.start('AFTER_FIRST_RENDER')
        break
      case DocumentSaveEvent.DOCUMENT_STARTED_SAVING:
        postPerfMetric('DOCUMENT_STARTED_SAVING')
        break
      case DocumentSaveEvent.DOCUMENT_FINISHED_SAVING:
        postPerfMetric('DOCUMENT_FINISHED_SAVING')
        break
    }
  }

  reportContextRestore(): void {
    this.events.trigger('context-restore')
  }

  reportMultiplayerRoundTripTime(time: number): void {
    multiplayerRoundTripReporter.reportMultiplayerRoundTripTime(time)
  }

  reportBranchingLoadTime(duration: number, functionName: string, sourceFileKey: string, branchFileKey: string, diffType?: string, branchModalTrackingId?: string): void {
    const direction = atomStoreManager.get(currentSelectionAtom)
    let data: any = {
      branchFileKey,
      sourceFileKey,
      durationMs: 1000 * duration,
      loadType: AggregationType.GRANULAR,
      functionName,
      profileStep: LanguageType.CPP_ONLY,
      branchModalTrackingId,
      direction,
    }
    if (diffType) {
      data = { diffType, ...data }
    }
    trackEventAnalytics('Branch Modal Load Time', data)
  }

  reportQuantizedColorEqualsUse(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number): void {
    const data = {
      ..._$$I(new Error().stack),
      color1: JSON.stringify({ r: r1, g: g1, b: b1, a: a1 }),
      color2: JSON.stringify({ r: r2, g: g2, b: b2, a: a2 }),
    }
    trackEventAnalytics('quantized_color_equal_use', data)
  }

  tryReportError(error: string): void {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error(error))
  }

  startPerfTimer(event: string): void {
    if (timerEventNames.has(event))
      reactTimerGroup.start(event)
    if (gpuFullscreenEventNames.has(event))
      fullscreenPerfManager.startFs(event)
  }

  stopPerfTimer(event: string): void {
    if (timerEventNames.has(event))
      reactTimerGroup.stop(event)
    if (gpuFullscreenEventNames.has(event))
      fullscreenPerfManager.stopFs(event)
  }

  startOpsTimer(name: string, key: string): void {
    globalPerfTimer.start(name, { key })
  }

  stopOpsTimer(name: string, key: string): any {
    return globalPerfTimer.stop(name, key)
  }

  createDistribution(name: string, options: any): void {
    distributionAnalytics.create(name, options)
  }

  addToDistribution(name: string, value: any): void {
    distributionAnalytics.add(name, value)
  }

  resetDistribution(name: string): void {
    distributionAnalytics.reset(name)
  }

  getDistributionAnalyticsProperties(name: string): any {
    return distributionAnalytics.analyticsProperties(name)
  }

  removeDistribution(name: string): void {
    distributionAnalytics.remove(name)
  }

  tryStopOpsTimer(name: string, key: string): any {
    return globalPerfTimer.tryStop(name, key)
  }

  pauseOpsTimer(name: string, key: string): any {
    return globalPerfTimer.pause(name, key)
  }

  resumeOpsTimer(name: string, key: string): any {
    return globalPerfTimer.resume(name, key)
  }

  trySetAttributeOpsTimer(name: string, key: string, attr: string, value: any): any {
    return globalPerfTimer.trySetAttribute(name, key, attr, value)
  }

  tryGetAttributesOpsTimer(name: string, key: string): any {
    return globalPerfTimer.tryGetAttribute(name, key)
  }

  getOpsTimer(name: string, key: string): any {
    return globalPerfTimer.report().get(name)?.get(key) || null
  }

  logNumericMetric(metric: string, value: number): void {
    for (const key of memoryPerformanceKeys) {
      if (metric.startsWith(key)) {
        sendHistogram(metric, value)
        break
      }
    }
    if (eventLogger.isNumberEvent(metric)) {
      eventLogger.loadTimer.logEvent(metric, value)
    }
    if (metric === 'receiveNodeChanges') {
      fullscreenPerfManager.logNodeChangeMsg(value)
    }
  }

  logStringMetric(metric: string, value: string): void {
    if (eventLogger.isStringEvent(metric)) {
      eventLogger.loadTimer.logEvent(metric, value)
    }
    if (gpuFullscreenEventNames.has(metric)) {
      fullscreenPerfManager.startFs(metric)
    }
  }

  handleAllocationFailureWithNative(failure: any): boolean {
    const rf = Rf()
    if (rf?.handleAllocationFailure) {
      rf.handleAllocationFailure(failure)
      rf.handleAllocationFailure = undefined
      return true
    }
    return false
  }
}

export const fullscreenHandler = new FullscreenHandler()
export const F = fullscreenHandler
