import { w } from '../figma_app/119601'
import { getFalseValue } from '../figma_app/897289'

export function $$a0() {
  if (!w() && !getFalseValue())
    throw new Error('Endpoint requires authenticated user')
}
export const r = $$a0
