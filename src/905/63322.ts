// Original class name: $$n0
/**
 * Handles progressive notifications based on immediate and delayed ratios with a callback.
 */
export class ProgressiveNotificationHandler {
  private immediateRatio: number;
  private delayedRatio: number;
  private delayMsec: number;
  private callback: () => void;
  private _current: number;
  private _timer: number;
  private _notifyImmediate: number;
  private _notifyDelayed: number;

  /**
   * Constructs a ProgressiveNotificationHandler.
   * @param initialThreshold - The initial threshold value for notifications.
   * @param immediateRatio - Ratio for immediate notifications.
   * @param delayedRatio - Ratio for delayed notifications.
   * @param delayMsec - Delay in milliseconds for delayed notifications.
   * @param callback - Callback function to execute on notification.
   */
  constructor(
    initialThreshold: number,
    immediateRatio: number,
    delayedRatio: number,
    delayMsec: number,
    callback: () => void
  ) {
    this.immediateRatio = immediateRatio;
    this.delayedRatio = delayedRatio;
    this.delayMsec = delayMsec;
    this.callback = callback;
    this._current = 0;
    this._timer = 0;
    this._notifyImmediate = initialThreshold;
    this._notifyDelayed = initialThreshold;
  }

  /**
   * Sets the current value and triggers notifications if thresholds are exceeded.
   * @param value - The new current value.
   */
  setCurrent(value: number): void {
    if (value > this._notifyDelayed) {
      this._notifyDelayed = value;
      if (value > this._notifyImmediate) {
        this.notifyNow();
      } else {
        this.notifySoon();
      }
    }
    this._current = value;
  }

  /**
   * Immediately notifies by updating thresholds and calling the callback.
   */
  notifyNow(): void {
    this._notifyDelayed = this._current * this.delayedRatio;
    this._notifyImmediate = this._current * this.immediateRatio;
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = 0;
    }
    this.callback();
  }

  /**
   * Schedules a delayed notification if not already scheduled.
   */
  notifySoon(): void {
    if (!this._timer) {
      this._timer = setTimeout(() => {
        this.notifyNow();
      }, this.delayMsec);
    }
  }
}

// Original export: export const K = $$n0;
export const K = ProgressiveNotificationHandler;
