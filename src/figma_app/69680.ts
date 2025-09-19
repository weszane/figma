import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { atom, atomWithDefault } from '../figma_app/27355'

export const initialViewAtom = atom<string | undefined>(undefined);

export const reduxViewSubscriptionAtom = createReduxSubscriptionAtomWithState(
  state => state.universalInsertModal.initialFdView
);

export const defaultViewAtom = atomWithDefault<string>((get) => {
  const reduxView = get(reduxViewSubscriptionAtom);
  const initialView = get(initialViewAtom);
  return reduxView || initialView || 'recents_and_saved';
});

export const isModalOpenAtom = atom(false);

export const HT = defaultViewAtom;
export const RB = isModalOpenAtom;
export const hO = initialViewAtom;
