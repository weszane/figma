import { useEffect, useState } from 'react'
/**
 * useDelayedTrue - Custom hook to set a boolean state to true after a delay.
 * @param delay - Delay in milliseconds before setting the state to true. Default is 10ms.
 * @returns Boolean state indicating if the delay has passed.
 */
export function useDelayedTrue(delay: number = 10): boolean {
  const [isTrue, setIsTrue] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTrue(true)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [delay])

  return isTrue
}

// Original export name: Z
export const Z = useDelayedTrue
