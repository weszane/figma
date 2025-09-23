// Original file: /Users/allen/sigma-main/src/figma_app/623293.ts
// Refactored to improve readability, maintainability, and organization.
// Grouped related functionality: script loading, browser fixes, and clipboard operations.
// Renamed functions and classes to descriptive names.
// Added JSDoc comments and type annotations.
// Split large functions into smaller units.
// Used early returns and guard clauses.
// Updated export aliases to match new names.

import dompurify from 'dompurify';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { CustomCauseError } from '../905/194389';
import { getFeatureFlags } from '../905/601108';
import { logInfo } from '../905/714362';
import { Dm } from '../figma_app/8833';
import { getInitialOptions } from '../figma_app/169182';
import { BrowserInfo } from '../figma_app/778880';
import { isInteractionPathCheck } from '../figma_app/897289';

// Script Loading Section

/**
 * Custom error class for script load failures.
 * Original: $$m3
 */
export class ScriptLoadError extends CustomCauseError {
  constructor(cause: any) {
    super('Script load error.', cause);
  }
}

/**
 * Creates a script element with specified attributes.
 * Original: g
 */
function createScriptElement(id?: string, cors: boolean = false, doc: Document = window.document): HTMLScriptElement {
  const script = doc.createElement('script');
  if (id && id.length > 0) {
    script.id = id;
  }
  script.type = 'text/javascript';
  script.async = true;
  script.setAttribute('nonce', getInitialOptions().csp_nonce);
  if (cors) {
    script.crossOrigin = 'anonymous';
  }
  return script;
}

/**
 * Loads a script asynchronously with retry logic and optional condition waiting.
 * Original: $$f4
 */
export async function loadScript(src: string, options?: {
  window?: Window;
  id?: string;
  cors?: boolean;
  retry?: boolean;
  waitForCondition?: () => boolean;
}) {
  const doc = options?.window?.document || window.document;
  if (!src) {
    console.error('bad src');
    reportError(ServiceCategories.CLIENT_PLATFORM, new Error('bad loadScript src'));
    throw new Error('bad src');
  }
  const id = options?.id;
  const cors = options?.cors !== false;
  const retry = options?.retry !== false;
  const waitForCondition = options?.waitForCondition;
  const originalError = new Error('original async stack');
  return new Promise((resolve, reject) => {
    const handleLoad = async (script: HTMLScriptElement) => {
      if (waitForCondition) {
        try {
          await waitForConditionWithTimeout(waitForCondition);
        } catch (error) {
          logInfo('loadScript', 'waitForCondition timed out', {
            src
          });
          reject(error);
          return;
        }
      }
      resolve(script);
    };
    const script = createScriptElement(id, cors, doc);
    const handleError = (event: Event) => {
      const logAndReject = (errorEvent: Event) => {
        logInfo('loadScript', 'Script load error event', {
          event: errorEvent
        });
        reject(new ScriptLoadError({
          cause: originalError
        }));
      };
      if (!retry) {
        logAndReject(event);
        return;
      }
      doc.head.removeChild(script);
      const retryScript = createScriptElement(id, cors, doc);
      retryScript.onload = () => handleLoad(retryScript);
      retryScript.onerror = (e: any) => {
        doc.head.removeChild(retryScript);
        logAndReject(e);
      };
      if (!src) {
        reject(new CustomCauseError('invalid src', {
          cause: originalError
        }));
        return;
      }
      const separator = src.includes('?') ? '&' : '?';
      retryScript.src = `${src}${separator}lsRetry=${Math.random()}`;
      doc.head.appendChild(retryScript);
      const errorMessage = typeof event === 'string' ? event : (event as ErrorEvent).message;
      logInfo('loadScript', 'Retrying script load', {
        originalSrc: src,
        retrySrc: retryScript.src,
        initialError: errorMessage
      });
    };
    script.onload = () => handleLoad(script);
    script.onerror = handleError;
    script.src = src;
    doc.head.appendChild(script);
  }).catch(error => {
    console.error(`Fetching ${src} failed: ${error.toString()}`);
    throw error;
  });
}

/**
 * Waits for a condition with a timeout.
 * Helper for loadScript.
 */
async function waitForConditionWithTimeout(condition: () => boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      if (condition()) {
        resolve();
        return;
      }
      if (++attempts >= 50) {
        reject(new Error('waitForCondition timed out'));
        return;
      }
      scheduler.postTask(check, {
        delay: 100,
        priority: 'background'
      });
    };
    check();
  });
}

// Browser Fixes Section

/**
 * Injects a script to fix TextDecoder issues in specific WebKit versions.
 * Original: $$E1
 */
export function injectTextDecoderFix(): void {
  const shouldInject = (BrowserInfo.safari && Number(BrowserInfo.version) >= 18 && Number(BrowserInfo.version) < 19 || BrowserInfo.ios && BrowserInfo.chrome && Number(BrowserInfo.version) >= 135 && Number(BrowserInfo.version) <= 137 || BrowserInfo.webkit && Number(BrowserInfo.version) >= 135 && Number(BrowserInfo.version) <= 137) && getFeatureFlags().hook_webkit_text_decoder;
  if (!shouldInject) return;
  const script = createScriptElement(undefined, true);
  script.text = `
    try {
      const originalDecode = TextDecoder.prototype.decode;
      TextDecoder.prototype.decode = function (input, options = {}) {
        if (!this.bytesSinceDecoderReset) {
          this.bytesSinceDecoderReset = 0;
        }
        this.bytesSinceDecoderReset += input.byteLength;
        if (this.bytesSinceDecoderReset > 1024 * 1024 * 1024) {
          this.bytesSinceDecoderReset = 0;
          this.delegate = new TextDecoder(this.encoding, this.options);
        }
        if (this.delegate) {
          return this.delegate.decode(input, options);
        }
        return originalDecode.call(this, input, options);
      };
    } catch (e) {
      // noop
    }
  `;
  document.head.appendChild(script);
}

// Clipboard Operations Section

/**
 * Checks if clipboard operations are supported and allowed.
 * Original: y
 */
function isClipboardSupported(): boolean {
  const hasClipboardAPI = !!(navigator.clipboard && navigator.clipboard.read && navigator.clipboard.write);
  const hasMobileAPI = !!window.FigmaMobile?.readClipboardData;
  return (hasClipboardAPI || hasMobileAPI) && !isInteractionPathCheck();
}

/**
 * Copies text using the legacy method.
 * Original: b
 */
async function copyTextLegacy(text: string, options: {
  withLineBreaks?: boolean;
} = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const activeElement = document.activeElement;
    let success = false;
    try {
      if (text.length > 104857.6) {
        console.warn('string too long for copyText usage watchdog timer of 1s. formatting will take too long');
      }
      const element = options.withLineBreaks ? document.createElement('textarea') : document.createElement('input');
      element.style.cssText = 'position: fixed; top: -100px';
      element.classList.add(Dm);
      document.body.appendChild(element);
      element.value = text;
      element.focus();
      element.select();
      success = document.execCommand('copy') || !!BrowserInfo.msedge;
      element.remove();
    } finally {
      (activeElement as HTMLElement)?.focus();
    }
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}

/**
 * Copies text to clipboard, preferring modern API.
 * Original: $$T0
 */
export async function copyTextToClipboard(text: string, options: {
  withLineBreaks?: boolean;
} = {}): Promise<void> {
  if (isClipboardSupported()) {
    try {
      const processedText = options.withLineBreaks ? text : text.replace(/\s+$/gm, '');
      await navigator.clipboard.writeText(processedText);
      return;
    } catch {
      // Fall through to legacy
    }
  }
  return copyTextLegacy(text, options);
}

/**
 * Creates and writes a rich text clipboard item.
 * Original: I
 */
async function writeRichTextToClipboard(html: string, plainText?: string): Promise<void> {
  const htmlBlob = new Blob([html], {
    type: 'text/html'
  });
  let plainBlob: Blob;
  if (plainText === undefined) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = dompurify().sanitize(html);
    plainBlob = new Blob([tempDiv.innerText], {
      type: 'text/plain'
    });
  } else {
    plainBlob = new Blob([plainText], {
      type: 'text/plain'
    });
  }
  const item = new ClipboardItem({
    'text/plain': plainBlob,
    'text/html': htmlBlob
  });
  await navigator.clipboard.write([item]);
}

/**
 * Copies rich text to clipboard, preferring modern API.
 * Original: $$S2
 */
export async function copyRichTextToClipboard(html: string): Promise<void> {
  if (isClipboardSupported()) {
    try {
      await writeRichTextToClipboard(html);
      return;
    } catch {
      // Fall through to legacy
    }
  }
  return new Promise((resolve, reject) => {
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = 'position: fixed; transform: translateX(-200%)';
    tempDiv.innerHTML = dompurify().sanitize(html);
    tempDiv.classList.add(Dm);
    document.body.appendChild(tempDiv);
    try {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(tempDiv);
        selection.removeAllRanges();
        selection.addRange(range);
        if (document.execCommand('copy')) {
          resolve();
        } else {
          reject();
        }
      } else {
        reject();
      }
    } catch {
      reject();
    } finally {
      tempDiv.remove();
    }
  });
}

/**
 * Copies text with plain text fallback for rich text.
 * Original: $$v5
 */
export async function copyTextWithPlainFallback(html: string, plainText: string): Promise<void> {
  if (isClipboardSupported()) {
    try {
      await writeRichTextToClipboard(html, plainText);
      return;
    } catch {
      // Fall through to legacy
    }
  }
  return copyTextLegacy(plainText);
}

// Export aliases with refactored names
export const Dk = copyTextToClipboard; // Original: $$T0
export const RM = injectTextDecoderFix; // Original: $$E1
export const Xt = copyRichTextToClipboard; // Original: $$S2
export const gX = ScriptLoadError; // Original: $$m3
export const k0 = loadScript; // Original: $$f4
export const wY = copyTextWithPlainFallback; // Original: $$v5
