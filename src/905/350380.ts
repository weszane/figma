import { useEffect, useState } from 'react'
import { reportError } from '../905/11'
import { ServiceCategories as _$$e } from '../905/165054'
import { D } from '../905/417423'
import { useCurrentFileKey } from '../figma_app/516028'

export function $$l0() {
  let [e, t] = useState(null)
  let i = useCurrentFileKey()
  useEffect(() => {
    let n = async () => {
      if (i) {
        try {
          let e = (await D.getRecommendedHubFileFragments({
            file_key: i,
          })).data.meta.results.map(e => ({
            ...e,
            type: 'hub-file-fragment',
          }))
          t(e)
        }
        catch (e) {
          t([])
          reportError(_$$e.AI_FOR_PRODUCTION, new Error(`Recommended hub file fragments error: ${e.message}`))
        }
      }
    }
    e === null && n()
  }, [i, e])
  return {
    recommendedHubFileFragments: e,
  }
}
export const v = $$l0
