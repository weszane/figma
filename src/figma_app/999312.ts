import { createContext, useContext } from "react"

enum CommunityContextEnum {
  DOT_COM_COMMUNITY = "dot_com_community",
  RESOURCE_HUB = "resource_hub",
}

export const CommunityContext = createContext<CommunityContextEnum>(CommunityContextEnum.DOT_COM_COMMUNITY)

/**
 * Hook to check if current community context is resource hub
 * Original function: $$s0
 */
export function useIsResourceHub(): boolean {
  const contextValue = useContext(CommunityContext)
  return contextValue === CommunityContextEnum.RESOURCE_HUB
}

export const AG = useIsResourceHub
export const Rj = CommunityContext
export const mk = CommunityContextEnum
