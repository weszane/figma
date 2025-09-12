import { useRecording } from '../905/959312'

/**
 * Enhances props with a recording-enabled onChange handler.
 * @param props - Original props including onChange and recordingKey.
 * @returns Props with onChange replaced by recording logic.
 * (Original function: $$r0)
 */
export function setupRecordingHandler({
  onChange,
  recordingKey,
  ...restProps
}: {
  onChange: (...args: any[]) => void
  recordingKey: string
  disabled?: boolean
  [key: string]: any
}) {
  // useRecording hook wraps the onChange handler with recording logic
  const recordingOnChange = useRecording(onChange, {
    eventName: 'change',
    recordingKey,
  }, [onChange, restProps.disabled])

  return {
    ...restProps,
    onChange: recordingOnChange,
  }
}

// Export with refactored name for clarity
export const W = setupRecordingHandler
