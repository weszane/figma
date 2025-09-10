import { atom } from 'jotai';
import { debugState } from '../905/407919';
import { atomStoreManager, createRemovableAtomFamily } from '../figma_app/27355';
import { openFileKeyAtom } from '../figma_app/516028';

/**
 * Default options for removable atom family.
 * (original: s)
 */
const defaultRemovableAtomOptions = {
  preserveValue: false
};

/**
 * Creates a removable atom family with optional preservation of values.
 * @param initializer - Function to initialize atom family.
 * @param options - Options to control preservation behavior.
 * @returns Atom family instance.
 * (original: $$o1)
 */
export const setupRemovableAtomFamily = (
  initializer: Parameters<typeof createRemovableAtomFamily>[0],
  options = defaultRemovableAtomOptions
) => {
  const removableAtomFamily = createRemovableAtomFamily(initializer);

  return atom(
    get => {
      const fileKey = debugState ? get(openFileKeyAtom) : 'FILE_KEY';
      if (!options.preserveValue) {
        removableAtomFamily.setShouldRemove((_, key) => key !== fileKey);
      }
      return get(removableAtomFamily(fileKey));
    },
    (get, set, ...args) => set(removableAtomFamily(get(openFileKeyAtom)), ...args)
  );
};

/**
 * Stores references to created atoms and their initial values.
 * (original: l)
 */
const atomReferences: {
  atomRef: WeakRef<ReturnType<typeof atom>>;
  initialValue: unknown;
}[] = [];

/**
 * Creates an atom and tracks its reference and initial value.
 * @param initialValue - The initial value for the atom.
 * @returns The created atom.
 * (original: $$d2)
 */
export const createTrackedAtom = <T>(initialValue: T) => {
  const trackedAtom = atom(initialValue);
  atomReferences.push({
    atomRef: new WeakRef(trackedAtom),
    initialValue
  });
  return trackedAtom;
};

/**
 * Resets all tracked atoms to their initial values, removing any that have been garbage collected.
 * (original: $$c0)
 */
export const resetTrackedAtoms = () => {
  for (let i = atomReferences.length - 1; i >= 0; i--) {
    const { atomRef, initialValue } = atomReferences[i];
    const atomInstance = atomRef.deref();
    if (atomInstance) {
      atomStoreManager.set(atomInstance, initialValue);
    } else {
      atomReferences.splice(i, 1);
    }
  }
};

// Export refactored names for external usage
export const Bc = resetTrackedAtoms;
export const Wh = setupRemovableAtomFamily;
export const rt = createTrackedAtom;
