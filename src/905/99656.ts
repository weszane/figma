import { createContext, useCallback, useContext } from 'react';
import { generateHashId } from '../905/62762';
import { getAnonymousId } from '../905/449184';
import { logger } from '../905/651849';
import { defaultSdkImplementation } from '../905/931912';
import { getInitialOptions } from '../figma_app/169182';
import { SdkMessageType } from '../figma_app/714966';

// Sampling method enumeration for better type safety
enum SamplingMethod {
  USER = 'user',
  EVENT = 'event',
}

/**
 * Custom error class for sampling-related errors
 */
class SamplingConfigurationError extends Error {}

/**
 * Represents a sampling rate as a fraction
 */
class SamplingRate {
  public readonly numerator: number;
  public readonly denominator: number;
  constructor(numerator: number, denominator: number) {
    if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
      throw new SamplingConfigurationError('Expected `numerator` and `denominator` to be integers');
    }
    if (denominator === 0) {
      throw new SamplingConfigurationError('Expected `denominator` to be larger than 0');
    }
    if (numerator > denominator) {
      throw new SamplingConfigurationError('Sampling rate must be a fraction between 0 and 1');
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }
  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }
}

/**
 * Generates a sampling key for consistent sampling decisions
 * @param eventName - Name of the event
 * @param method - Sampling method (user or event)
 * @param samplingRate - The sampling rate configuration
 * @returns Formatted sampling key
 */
function generateSamplingKey(eventName: string, method: string, samplingRate: SamplingRate): string {
  return `${eventName}_sampled_by_${method}_${samplingRate.numerator}_${samplingRate.denominator}`;
}

/**
 * Determines if a value should be sampled based on the sampling rate
 * @param value - Numeric value to check
 * @param samplingRate - Sampling rate configuration
 * @returns True if the value should be sampled
 */
function shouldSample(value: number, samplingRate: SamplingRate): boolean {
  return value % samplingRate.denominator < samplingRate.numerator;
}

/**
 * Sampling strategies for different methods
 */
const samplingStrategies = {
  [SamplingMethod.USER]: (eventName: string, samplingRate: SamplingRate): boolean => {
    const samplingKey = generateSamplingKey(eventName, 'user', samplingRate);
    const userId = getInitialOptions().user_data?.id;
    if (userId !== undefined) {
      return shouldSample(generateHashId(`${samplingKey}${userId}`), samplingRate);
    }
    const anonymousId = getAnonymousId();
    if (anonymousId !== undefined) {
      return shouldSample(generateHashId(`${samplingKey}${anonymousId}`), samplingRate);
    }
    logger.warn('[Sprigma] Tried to sample an event tracking call by user, but neither user ID nor anonymous ID are available. Skipping tracking attempt');
    return false;
  },
  [SamplingMethod.EVENT]: (eventName: string, samplingRate: SamplingRate): boolean => {
    return shouldSample(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), samplingRate);
  }
};
/**
 * Logs a warning when Sprig is not properly set up
 */
function logSprigNotSetupWarning(): void {
  logger.warn('[Sprigma] Detected attempt to use Sprig where it hasn\'t been setup. This is a no-op');
}

/**
 * Default Sprig API implementation that logs warnings for uninitialized usage
 */
const defaultSprigApi = {
  sendMessage(...args: any[]): void {
    logSprigNotSetupWarning()
    // Type assertion to handle spread argument limitations
    ;
    (defaultSdkImplementation.sendMessage as any)(...args);
  },
  listenForMatchingMessage: (messageType: any) => {
    logSprigNotSetupWarning();
    return defaultSdkImplementation.listenForMatchingMessage(messageType);
  },
  setCallbacks(...args: any[]): void {
    logSprigNotSetupWarning()
    // Type assertion to handle spread argument limitations
    ;
    (defaultSdkImplementation.setCallbacks as any)(...args);
  },
  tearDown(...args: any[]): void {
    logSprigNotSetupWarning()
    // Type assertion to handle spread argument limitations
    ;
    (defaultSdkImplementation.tearDown as any)(...args);
  }
};

// Create context with default API (originally $$_0)
const SprigContext = createContext(defaultSprigApi);

/**
 * Hook for accessing Sprig functionality with sampling capabilities (originally $$$$A1)
 * @returns Object containing Sprig methods and utilities
 */
export function useSprigWithSampling() {
  const sprigApi = useContext(SprigContext);

  // Basic Sprig tracking function
  const trackEvent = useCallback((...args: any[]) => {
    sprigApi.sendMessage({
      type: SdkMessageType.Call,
      content: {
        args
      }
    });
  }, [sprigApi]);

  // Enhanced tracking with sampling capabilities
  const trackEventWithSampling = useCallback((eventName: string, options: {
    method?: SamplingMethod;
    samplingRateNumerator?: number;
    samplingRateDenominator: number;
  }, ...extraArgs: any[]) => {
    // Only proceed if not using default API
    if (sprigApi !== defaultSprigApi) {
      try {
        const {
          method = SamplingMethod.USER,
          samplingRateNumerator = 1,
          samplingRateDenominator
        } = options;
        const samplingRate = new SamplingRate(samplingRateNumerator, samplingRateDenominator);
        logger.debug('[Sprigma] Attempted to track event with sampling:', {
          eventName,
          method,
          samplingRate: samplingRate.toString(),
          extraArgs
        });

        // Check if event should be tracked based on sampling
        const shouldTrack = samplingStrategies[method](eventName, samplingRate);
        if (shouldTrack) {
          const samplingKey = generateSamplingKey(eventName, method, samplingRate);
          trackEvent('track', samplingKey, ...extraArgs);
        } else {
          logger.debug('[Sprigma] Skipped tracking event due to sampling:', eventName);
        }
      } catch (error) {
        if (error instanceof SamplingConfigurationError) {
          logger.error('[Sprigma] Call to `sprigTrackWithSampling` with invalid sampling rate, tracking attempt skipped', {
            eventName,
            options,
            extraArgs,
            error
          });
        } else {
          throw error;
        }
      }
    }
  }, [trackEvent, sprigApi]);

  // Set property function
  const setProperty = useCallback((name: string, value: any) => {
    sprigApi.sendMessage({
      type: SdkMessageType.SetProperty,
      content: {
        name,
        value
      }
    });
  }, [sprigApi]);

  // Get property function
  const getProperty = useCallback(async (name: string): Promise<any> => {
    const messageListener = sprigApi.listenForMatchingMessage(SdkMessageType.GetProperty);
    sprigApi.sendMessage({
      type: SdkMessageType.GetProperty,
      content: {
        name
      }
    });
    const response = await messageListener;
    // Type assertion to handle dynamic content structure
    return (response as any)?.content?.value;
  }, [sprigApi]);
  return {
    Sprig: trackEvent,
    sprigTrackWithSampling: trackEventWithSampling,
    setProperty,
    getProperty
  };
}

// Export context and hook with original names for backward compatibility
export const M = SprigContext; // originally M
export const A = useSprigWithSampling; // originally A