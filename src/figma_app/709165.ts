import { z } from 'zod'

export function ignore(_e) {
  return z.any().transform(e => e)
}
export let coerce = {
  ...z.coerce,
  null(e) {
    return z.preprocess(e => void 0 === e ? null : e, e)
  },
  undefined(e) {
    return z.preprocess((e) => {
      if (e !== null)
        return e
    }, e)
  },
}
export function filteredArray(e) {
  return z.array(z.unknown()).transform(t => t.filter(t => e.safeParse(t).success))
}
