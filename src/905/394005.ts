import { trackEventAnalytics } from '../905/449184';
import { FJ } from '../905/508367';
import { customHistory } from '../905/612521';
import { logDebug, logError } from '../905/714362';
import { createDeferredPromise } from '../905/874553';
import { getInitialOptions } from '../figma_app/169182';
import { throwTypeError } from '../figma_app/465776';

// Constants
const AWS_WAF_TOKEN_CHALLENGE_ATTEMPTS_KEY = 'aws_waf_token_challenge_attempts';

// Type definitions for WAF validation

/**
 * Web Application Firewall (WAF) Manager
 * Handles CAPTCHA and challenge validation for AWS WAF integration
 */
export class WAFManager {
  WAF_POPUP_MODAL = 'WAF-popup-modal';
  WAF_REFRESH_MODAL = 'WAF-refresh-modal';
  WAF_EVENT_NAME = 'WAF challenge';
  constructor() {
    // Bind event handlers to maintain context
    this.onMessage = this.onMessage.bind(this);
  }

  /**
   * Tracks WAF-related events with analytics
   */
  trackEvent = (eventName, eventData) => {
    trackEventAnalytics(eventName, {
      ...eventData,
      visibilityState: document.visibilityState
    }, {
      batchRequest: false,
      forwardToDatadog: true
    });
  };

  /**
   * Handles messages from WAF validation iframe/popup
   */
  onMessage = event => {
    if (!this.pendingWAFVerification || event.data !== 'waf-successful') {
      return;
    }
    logDebug('[WAFManager]', 'WAF validation successful', {
      type: this.pendingWAFVerification.type
    });
    if (this.pendingWAFVerification.type === 'captcha') {
      this.handleCaptchaSuccess();
    } else {
      this.handleChallengeSuccess();
    }
    this.cleanupAndResolve(this.pendingWAFVerification.deferred, 'success');
  };

  /**
   * Handles successful CAPTCHA validation
   */
  handleCaptchaSuccess() {
    if (!this.pendingWAFVerification) return;
    if (this.pendingWAFVerification.popupWindow) {
      const {
        popupWindow
      } = this.pendingWAFVerification;
      popupWindow.close();
      document.getElementById(this.WAF_POPUP_MODAL)?.remove();
    } else {
      this.openRefreshModal();
    }
  }

  /**
   * Handles successful challenge validation
   */
  handleChallengeSuccess() {
    if (!this.pendingWAFVerification) return;
    if (this.pendingWAFVerification.type === 'challenge') {
      this.pendingWAFVerification.clearTimeout?.();
    } else {
      throwTypeError(this.pendingWAFVerification);
    }
  }

  /**
   * Waits for WAF validation to complete (challenge or captcha)
   */
  waitForWAFValidation(validationType) {
    if (this.pendingWAFVerification) {
      return this.pendingWAFVerification.deferred.promise;
    }
    const deferred = createDeferredPromise();
    const startTime = performance.now();
    this.updateChallengeAttempts();
    if (validationType === 'challenge') {
      return this.initializeChallengeValidation(deferred, startTime);
    }
    if (validationType === 'captcha') {
      return this.initializeCaptchaValidation(deferred, startTime);
    }

    // Fallback for unknown validation type
    throwTypeError(validationType, {
      reportAsSentryError: true
    });
    return Promise.reject(new Error(`Unknown validation type: ${validationType}`));
  }

  /**
   * Updates challenge attempts in localStorage
   */
  updateChallengeAttempts() {
    try {
      const storedAttempts = localStorage.getItem(AWS_WAF_TOKEN_CHALLENGE_ATTEMPTS_KEY);
      if (storedAttempts) {
        const attemptData = JSON.parse(storedAttempts);
        attemptData.attempts = 1;
        localStorage.setItem(AWS_WAF_TOKEN_CHALLENGE_ATTEMPTS_KEY, JSON.stringify(attemptData));
      }
    } catch (error) {
      console.error('Failed to update WAF challenge attempts:', error);
    }
  }

  /**
   * Initializes challenge validation with iframe
   */
  initializeChallengeValidation(deferred, startTime) {
    const clearTimeoutFn = this.createTimeout(deferred, 5000);
    const iframe = this.createWAFIframe();
    window.addEventListener('message', this.onMessage);
    this.pendingWAFVerification = {
      type: 'challenge',
      deferred,
      iframe,
      clearTimeout: clearTimeoutFn,
      startTime
    };
    return deferred.promise;
  }

  /**
   * Initializes captcha validation with popup
   */
  initializeCaptchaValidation(deferred, startTime) {
    this.pendingWAFVerification = {
      type: 'captcha',
      deferred,
      startTime
    };
    this.openPopupInterstitialModal();
    return deferred.promise;
  }

  /**
   * Creates a hidden iframe for WAF validation
   */
  createWAFIframe() {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.zIndex = '-9999';
    iframe.style.height = '0';
    iframe.style.width = '0';
    iframe.id = 'waf-iframe';

    // Determine iframe source based on context
    const isEmbedContext = getInitialOptions().frame_context?.type === 'embed';
    iframe.src = isEmbedContext ? `${window.location.origin}/embed/waf-validation` : `${window.location.origin}/waf-validation`;
    document.body.appendChild(iframe);
    return iframe;
  }

  /**
   * Opens the popup modal for CAPTCHA verification
   */
  openPopupInterstitialModal() {
    if (document.getElementById(this.WAF_POPUP_MODAL)) {
      return;
    }
    const modal = this.createModal(this.WAF_POPUP_MODAL, {
      title: 'Figma needs to verify you are not a bot.',
      subtitle: 'Please click \'Verify\' and complete the CAPTCHA.',
      buttonText: 'Verify',
      buttonId: 'WAF-open-popup-button'
    });
    document.body.appendChild(modal);
    this.attachPopupButtonHandler();
  }

  /**
   * Attaches click handler to the popup verification button
   */
  attachPopupButtonHandler() {
    const button = document.getElementById('WAF-open-popup-button');
    button?.addEventListener('click', () => {
      if (!this.pendingWAFVerification || this.pendingWAFVerification.type !== 'captcha') {
        this.openRefreshModal();
        return;
      }
      const popup = FJ(`${window.location.origin}/waf-validation-captcha`, '_blank', 'popup');
      if (!popup) {
        this.openRefreshModal();
        return;
      }
      this.monitorPopupWindow(popup);
      this.pendingWAFVerification.popupWindow = popup;
      window.addEventListener('message', this.onMessage);
    });
  }

  /**
   * Monitors popup window for closure
   */
  monitorPopupWindow(popup) {
    const checkInterval = setInterval(() => {
      if (popup.closed) {
        if (this.pendingWAFVerification) {
          this.openRefreshModal();
        }
        clearInterval(checkInterval);
      }
    }, 500);
  }

  /**
   * Opens the refresh modal when verification fails
   */
  openRefreshModal() {
    // Remove popup modal if it exists
    const popupModal = document.getElementById(this.WAF_POPUP_MODAL);
    popupModal?.remove();
    if (document.getElementById(this.WAF_REFRESH_MODAL)) {
      return;
    }
    const modal = this.createModal(this.WAF_REFRESH_MODAL, {
      title: 'Figma could not verify that you are not a bot.',
      subtitle: 'Please refresh the page to continue.',
      buttonText: 'Refresh',
      buttonId: 'WAF-refresh-button'
    });
    document.body.appendChild(modal);
    this.attachRefreshButtonHandler();
  }

  /**
   * Attaches click handler to the refresh button
   */
  attachRefreshButtonHandler() {
    const button = document.getElementById('WAF-refresh-button');
    button?.addEventListener('click', () => {
      customHistory.reload('WAF');
    });
  }

  /**
   * Creates a modal element with the specified configuration
   */
  createModal(id, config) {
    const modal = document.createElement('div');
    modal.id = id;
    modal.style.cssText = 'position: fixed; display: flex; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0,0,0,0.5); z-index: 1000; align-items: center; justify-content: center;';
    modal.innerHTML = `
      <div style="background-color: var(--color-bg, white); height: 150px; width: 50%; max-width: 450px; display: flex; flex-direction: column; padding: 8px;">
        <div style="font-family: Inter; color: var(--color-text, black); flex: 1; display: flex; flex-direction: column;">
          <div>${config.title}</div>
          <div style="margin-top: 4px">${config.subtitle}</div>
        </div>
        <div style="margin-left: auto">
          <button id="${config.buttonId}" style="cursor: pointer; margin-left: auto; font-family: Inter; background-color: var(--color-bg-brand); padding: 0 12px; font-weight: 500; height: 32px;">${config.buttonText}</button>
        </div>
      </div>
    `;
    return modal;
  }

  /**
   * Cleans up WAF verification state and resolves the deferred promise
   */
  cleanupAndResolve(deferred, state) {
    if (!this.pendingWAFVerification) {
      return;
    }
    const {
      type,
      startTime
    } = this.pendingWAFVerification;
    this.trackEvent(this.WAF_EVENT_NAME, {
      durationMs: Math.round(performance.now() - startTime),
      state,
      type
    });
    if (type === 'challenge') {
      this.pendingWAFVerification.iframe?.remove();
      this.pendingWAFVerification.clearTimeout?.();
    }
    window.removeEventListener('message', this.onMessage);
    this.pendingWAFVerification = undefined;
    deferred.resolve();
  }

  /**
   * Gets the current WAF state from the iframe
   */
  async getWafStateFromIframe() {
    if (this.pendingWAFVerification?.type !== 'challenge') {
      return 'stuck';
    }
    const contentWindow = this.pendingWAFVerification?.iframe?.contentWindow;
    if (!contentWindow) {
      return 'stuck';
    }

    // Check if AWS WAF Integration is available
    const wafIntegration = contentWindow.AwsWafIntegration;
    if (!wafIntegration) {
      return 'stuck:waf-script-not-loaded';
    }
    try {
      await wafIntegration.forceRefreshToken();
      logDebug('[WAFManager]', 'AwsWafIntegration.forceRefreshToken succeeded', {}, {
        reportAsSentryError: false
      });
      return 'success';
    } catch (error) {
      logError('[WAFManager]', 'AwsWafIntegration.forceRefreshToken failed', {
        error
      }, {
        reportAsSentryError: true
      });
      return 'stuck:waf-token-refresh-failed';
    }
  }

  /**
   * Creates a timeout for WAF validation
   */
  createTimeout(deferred, timeoutMs) {
    const timeoutId = window.setTimeout(() => {
      logError('[WAFManager]', 'WAF validation timed out.', {}, {
        reportAsSentryError: true
      });
      this.getWafStateFromIframe().then(state => {
        this.cleanupAndResolve(deferred, state);
      });
    }, timeoutMs);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }
}

// Create singleton instance
export const wafManager = new WAFManager();

/**
 * Extracts WAF challenge type from XHR response
 * @param xhr - XMLHttpRequest object
 * @returns WAF challenge type or null
 */
export function getWAFChallengeType(xhr) {
  if (!xhr.responseURL || !xhr.responseURL.startsWith(window.location.origin)) {
    return null;
  }
  const wafAction = xhr.getResponseHeader('x-amzn-waf-action');
  if (!wafAction) {
    return null;
  }
  return wafAction === 'challenge' ? 'challenge' : 'captcha';
}

// Legacy exports for backward compatibility
export const H = getWAFChallengeType;
export const K = wafManager;
