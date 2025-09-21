import { atom, atomStoreManager } from '../figma_app/27355'

let $$n0;
((e) => {
  e.indexedFragmentDataAtom = atom({})
  e.setIndexedFragmentData = function (t) {
    atomStoreManager.set(e.indexedFragmentDataAtom, t)
  }
  e.getIndexedFragmentData = () => atomStoreManager.get(e.indexedFragmentDataAtom)
})($$n0 || ($$n0 = {}))
export const L = $$n0
