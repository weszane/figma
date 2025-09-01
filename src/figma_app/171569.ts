export let $$n0;
class i {
  constructor(e) {
    this._store = e;
  }
  get _state() {
    if (!this._store) throw Error("Calling _state without a valid store");
    return this._store.getState();
  }
  isInOrg() {
    return !!this._state.currentUserOrgId;
  }
}
export function $$a1(e) {
  $$n0 = new i(e);
}
export const Zc = $$n0;
export const jx = $$a1;