import { createContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import { observableState } from '../905/441145';
import { initializeLiveGraph } from '../905/761735';
import { getFalseValue, isInteractionPathCheck } from '../figma_app/897289';

/**
 * Context for LivegraphProvider (original: $$d1)
 */
export const LivegraphContext = createContext(null);

/**
 * Provider component for LivegraphContext (original: $$u0)
 * Ensures only a single userId is provided at a time.
 * @param {object} props
 * @param {string|null} props.userId - The user ID for the client
 * @param {React.ReactNode} props.children - Child components
 */
export function LivegraphProvider({
  userId = null,
  children
}: {
  userId?: string | null;
  children: React.ReactNode;
}) {
  // Track the current userId (original: n)
  let currentUserId: string | null | undefined;
  useLayoutEffect(() => {
    if (typeof currentUserId !== 'undefined' && userId !== currentUserId && !getFalseValue() && !isInteractionPathCheck()) {
      throw new Error('Only a single userId should be provided to LivegraphProvider at any time');
    }
    currentUserId = userId;
    return () => {
      currentUserId = undefined;
    };
  }, [userId]);

  // Memoize client instance (original: i)
  const client = useMemo(() => initializeLiveGraph(userId), [userId]);

  // State for client (original: [d, u])
  const [clientState, setClientState] = useState(client);
  useEffect(() => {
    observableState.addListener(setClientState);
    return () => {
      observableState.removeListener(setClientState);
    };
  }, [setClientState]);
  return jsx(LivegraphContext.Provider, {
    value: {
      client: clientState
    },
    children
  });
}

/** Exported context and provider for external usage */
export const oD = LivegraphProvider; // original: $$u0
export const ob = LivegraphContext; // original: $$d1