import { useEffect, useRef } from 'react';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { sendWithRetry } from '../905/910117';
import { getInitialOptions } from '../figma_app/169182';
import { BrowserInfo } from '../figma_app/778880';
import { desktopAPIInstance } from '../figma_app/876459';

/**
 * Generates tags describing the current client environment.
 * @returns {string[]} Array of environment tags.
 * (Original: c)
 */
export function getClientTags(): string[] {
  const tags: string[] = [];
  // OS detection
  for (const os of ['mac', 'windows', 'linux', 'ios', 'chromeos']) {
    if (BrowserInfo[os]) {
      tags.push(`os:${os}`);
      break;
    }
  }
  // Browser detection
  if (desktopAPIInstance) {
    tags.push('browser:figma_desktop');
  } else {
    for (const browser of ['chrome', 'firefox', 'safari', 'msedge', 'msie', 'ios', 'android']) {
      if (BrowserInfo[browser]) {
        tags.push(`browser:${browser}`);
        break;
      }
    }
  }
  tags.push(`client_version:${getInitialOptions().release_manifest_git_commit}`);
  return tags;
}

/**
 * Converts an object to an array of tag strings.
 * @param {Record<string, string>} obj
 * @returns {string[]} Array of tags.
 * (Original: u)
 */
export function objectToTags(obj: Record<string, string>): string[] {
  return Object.entries(obj).map(([key, value]) => `${key}:${value}`);
}
const figmaUrl: string = getInitialOptions().figma_url ?? '';

/**
 * Sends a metric to the web logger.
 * @param {string} metric
 * @param {Record<string, string>} tags
 * (Original: $$m2)
 */
export async function sendMetric(metric: string, tags: Record<string, any> = {}): Promise<void> {
  await sendWithRetry.crossOriginPost(`${figmaUrl}/api/web_logger/metrics/${metric}`, {
    tags: [...getClientTags(), ...objectToTags(tags)].join(',')
  }, {
    rawResponse: true
  });
}

/**
 * Sends a histogram value to the web logger.
 * @param {string} metric
 * @param {number} value
 * @param {Record<string, string>} tags
 * (Original: $$h3)
 */
export function sendHistogram(metric: string, value: number, tags: Record<string, string> = {}): void {
  sendWithRetry.crossOriginPost(`${figmaUrl}/api/web_logger/histogram/${metric}`, {
    value,
    tags: [...getClientTags(), ...objectToTags(tags)].join(',')
  }, {
    rawResponse: true
  }).catch(err => {
    if (err.status >= 400 && err.status < 500) {
      reportError(ServiceCategories.DATA_INFRA, err);
    }
  });
}

/**
 * Sends batched metrics to the web logger.
 * @param {Array<{metric: string, tags: Record<string, string>}>} metrics
 * (Original: $$g1)
 */
export async function sendBatchedMetrics(metrics: Array<{
  metric: string;
  tags: Record<string, string>;
}>): Promise<void> {
  if (metrics.length === 0) return;
  await sendWithRetry.crossOriginPost(`${figmaUrl}/api/web_logger/metrics_batched`, metrics.map(m => ({
    metric: m.metric,
    tags: [...getClientTags(), ...objectToTags(m.tags)].join(',')
  })), {
    rawResponse: true
  });
}

/**
 * Sends batched histogram values to the web logger.
 * @param {Array<{metric: string, value: number, tags: Record<string, string>}>} histograms
 * (Original: $$f4)
 */
export async function sendBatchedHistograms(histograms: Array<{
  metric: string;
  value: number;
  tags: Record<string, string>;
}>): Promise<void> {
  if (histograms.length === 0) return;
  await sendWithRetry.crossOriginPost(`${figmaUrl}/api/web_logger/histogram_batched`, histograms.map(h => ({
    metric: h.metric,
    value: h.value,
    tags: [...getClientTags(), ...objectToTags(h.tags)].join(',')
  })), {
    rawResponse: true
  });
}

/**
 * Timer utility for tracking visibility and offline state.
 * (Original: $$A0)
 */
export class WebLoggerTimer {
  _startTime: number;
  _timerId: ReturnType<typeof setTimeout> | null;
  public metadata: any;
  public finished: boolean;
  public backgrounded: boolean;
  public offlined: boolean;

  /**
   * Handles visibility change events.
   */
  public onVisibilityChange = (): void => {
    if (document.visibilityState === 'hidden') {
      this.backgrounded = true;
    }
  };

  /**
   * Handles offline events.
   */
  public onOffline = (): void => {
    this.offlined = true;
  };

  /**
   * Stops the timer and invokes the callback.
   * @param {(duration: number, backgrounded: boolean, offlined: boolean) => void} callback
   * @param {{ skipIfIdle?: boolean }} [options]
   */
  public stop = (callback: (duration: number, backgrounded: boolean, offlined: boolean) => void, options?: {
    skipIfIdle?: boolean;
  }): void => {
    const skipIfIdle = options?.skipIfIdle === undefined || options.skipIfIdle === true;
    if (this.finished) return;
    if (this._timerId) clearTimeout(this._timerId);
    this.finished = true;
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    document.removeEventListener('offline', this.onOffline);
    const duration = Math.round(performance.now() - this._startTime);
    if (!this.backgrounded && !this.offlined || !skipIfIdle) {
      callback(duration, this.backgrounded, this.offlined);
    }
  };

  /**
   * @param {object} [options]
   * @param {object} [metadata]
   */
  constructor(options: {
    onTimeout?: (backgrounded: boolean, offlined: boolean) => void;
    timeoutMs?: number;
  } = {}, metadata?: any) {
    this._startTime = performance.now();
    this._timerId = null;
    this.metadata = metadata ?? null;
    this.finished = false;
    this.backgrounded = document.visibilityState === 'hidden';
    this.offlined = navigator.onLine === false;
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    document.addEventListener('offline', this.onOffline);
    if (options.onTimeout) {
      if (!options.timeoutMs) throw new Error('onTimeout specified without timeoutMs');
      this._timerId = setTimeout(() => {
        if (!this.finished) options.onTimeout!(this.backgrounded, this.offlined);
      }, options.timeoutMs);
    }
  }
}

/**
 * React hook to stop timer when a condition is met.
 * @param {boolean} condition
 * @param {(duration: number, backgrounded: boolean, offlined: boolean) => void} callback
 * @param {object} [options]
 * (Original: $$y6)
 */
export function useWebLoggerTimer(condition: boolean, callback: (duration: number, backgrounded: boolean, offlined: boolean) => void, options?: any): void {
  const enabled = options?.enabled ?? true;
  const timerRef = useRef<WebLoggerTimer | null>(null);
  if (enabled && !timerRef.current) {
    timerRef.current = new WebLoggerTimer(options);
  }
  const stoppedRef = useRef(false);
  if (!stoppedRef.current && condition && timerRef.current) {
    timerRef.current.stop(callback, {
      skipIfIdle: false
    });
    stoppedRef.current = true;
  }
}

/**
 * React hook to stop timer on effect.
 * @param {boolean} condition
 * @param {(duration: number) => void} callback
 * @param {object} [options]
 * (Original: $$b7)
 */
export function useWebLoggerTimerEffect(condition: boolean, callback: (duration: number) => void, options?: object): void {
  const timerRef = useRef<WebLoggerTimer | undefined>(undefined);
  if (!timerRef.current) {
    timerRef.current = new WebLoggerTimer();
  }
  const stoppedRef = useRef(false);
  useEffect(() => {
    if (!stoppedRef.current && condition) {
      timerRef.current!.stop(duration => callback(duration), options);
      stoppedRef.current = true;
    }
  }, [condition, callback, options]);
}

// Exported aliases for backward compatibility
export const rw = WebLoggerTimer;
export const BO = sendBatchedMetrics;
export const Rh = sendMetric;
export const S3 = sendHistogram;
export const rI = sendBatchedHistograms;
export const aD = sendHistogram;
export const I = useWebLoggerTimer;
export const oY = useWebLoggerTimerEffect;
