import type { ReactNode } from 'react'
import { Provider } from 'jotai/react'
import { useEffect, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { atomStoreManager } from '../905/490038'

/**
 * Props for AtomProvider (original: $$o0)
 */
interface AtomProviderProps {
  children: ReactNode
}

/**
 * AtomProvider component
 * Handles rerendering when atomStoreManager triggers updates.
 * @param props - AtomProviderProps
 */
export function AtomProvider({ children }: AtomProviderProps) {
  const [, setVersion] = useState(0)

  useEffect(() => {
    // Handler to trigger rerender
    const rerenderHandler = () => setVersion(v => v + 1)
    atomStoreManager.rerenderAtomsProviders.add(rerenderHandler)
    return () => {
      atomStoreManager.rerenderAtomsProviders.delete(rerenderHandler)
    }
  }, [])

  return jsx(Provider, {
    store: atomStoreManager.jotaiAtomStore,
    children,
  })
}

// Export with original name for compatibility
export const A = AtomProvider
