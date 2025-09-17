import type { IUser } from '../905/895600'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { StatsigAtom } from '../905/425366'
import { isPlanKeyTargetingEnabled } from '../905/683495'
import { prefetchAtom } from '../905/895600'
import { useAtomWithSubscription, Xr } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Returns a callback to prefetch user plan key data.
 * Original function: $$d1
 */
export function getPrefetchPlanKeyHandler() {
  const setPlanContext = useSetAtom(prefetchAtom)

  return useCallback((teamContext) => {
    const userData = getInitialOptions().user_data || {}
    const userId = userData.id
    const orgId = userData.org_id || null
    const teamId = teamContext?.teamId || null

    // 构建 planKey：优先组织，其次团队
    let planKey: string | null = null
    if (orgId) {
      planKey = `organization::${orgId}`
    }
    else if (teamId) {
      planKey = `team::${teamId}`
    }

    // 只有 userId 存在才设置上下文
    const context: IUser[] = userId
      ? [{
          userId,
          teamId,
          orgId,
          planKey,
        }]
      : []

    setPlanContext(context)
  }, [setPlanContext])
}

/**
 * Retrieves custom IDs from StatsigAtom.
 * Original function: $$c0
 */
export function getCustomIDsFromStatsig(): any {
  const statsig = useAtomWithSubscription(StatsigAtom)
  return statsig?.evaluated_keys?.customIDs
}

// Exported names refactored for clarity
export const kh = getCustomIDsFromStatsig
export const vb = getPrefetchPlanKeyHandler
