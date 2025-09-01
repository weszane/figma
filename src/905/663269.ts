import { ViewDefinition } from '../905/119879'
import d from '../905/419236'
import a from '../905/552287'
import { S } from '../905/578699'
import { INTERNAL_SYMBOL } from '../905/957591'
import { Ay } from '../figma_app/28817'

export class $$l0 {
  constructor(e, t) {
    for (let i of (this.viewDefs = e, this.schema = t, Object.keys(e))) this.views.set(i, void 0)
  }

  views = new Map()
  createViewDef(e) {
    return new ViewDefinition(e, this.viewDefs[e], this.schema.objects.get('root'), this.schema, {
      shouldValidateDeprecated: !0,
      shouldUseMissingFields: !1,
    })
  }

  set(e, t) {
    if (this.views.has(e))
      throw new Error(`View ${e} already exists in the registry.`)
    this.views.set(e, t)
  }

  get(e) {
    this.views.has(e) && void 0 === this.views.get(e) && this.views.set(e, this.createViewDef(e))
    return this.views.get(e) || null
  }

  entries() {
    for (let e of this.views.keys()) void 0 === this.views.get(e) && this.views.set(e, this.createViewDef(e))
    return this.views.entries()
  }
}
export function $$c5(e) {
  return !!e && typeof e == 'object' && e.hasOwnProperty(INTERNAL_SYMBOL)
}
export class $$u1 extends Ay {
  optimisticallyCreate(e, t) {
    return this.applyMutations(e, t, 'create')
  }

  optimisticallyUpdate(e, t) {
    return this.applyMutations(e, t, 'update')
  }

  optimisticallyDelete(e, t) {
    return this.applyMutations(e, t, 'delete')
  }

  optimisticallyCreateWithUUID(e, t) {
    return this.applyMutationsWithUUID(e, t, 'create')
  }

  optimisticallyUpdateWithUUID(e, t) {
    return this.applyMutationsWithUUID(e, t, 'update')
  }

  optimisticallyDeleteWithUUID(e, t) {
    return this.applyMutationsWithUUID(e, t, 'delete')
  }

  getIdFromUuid(e, t) {
    return super.getIdFromUuid(e, t)
  }
}
export { getResourceDataOrFallback as oA } from '../905/419236'
export { dZ } from '../905/552287'
export { lw, tT } from '../905/957591'
export const iO = $$l0
export const Oh = $$u1
export const Sj = S
export const bu = $$c5
