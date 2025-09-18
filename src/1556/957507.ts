import { createSelector } from "../vendor/925040";
let l = createSelector(e => e.dropdownShown, e => e?.type);
let $$o0 = e => createSelector(l, t => t === e);
export const E = $$o0;