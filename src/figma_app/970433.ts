/**
 * Creates an event object with name, trackingName, and parameters.
 * Original function name: $$n0
 */
export function createTrackEvent({
  name,
  trackingName,
  parameters
}: {
  name: string;
  trackingName: string;
  parameters: Record<string, any>;
}) {
  return {
    name,
    parameters,
    trackingName
  };
}

/**
 * Refactored export for createEvent.
 * Original export name: k
 */
export const k = createTrackEvent;
