import { NC } from "../905/17179";
import { nF } from "../905/350402";
import { N } from "../905/696711";
import { U } from "../figma_app/477548";
let $$o2 = nF((e, t, {
  loadingKey: i
}) => {
  let n = e.getState();
  let r = n.openFile ? n.openFile.key : void 0;
  if (n.contacts.appData.contactsFetched && (!r || n.contacts.appData.fileKey === r)) return;
  let o = U.getContacts({
    orgId: n.currentUserOrgId || void 0,
    fileKey: r
  }).then(({
    data: t
  }) => {
    let i = t.meta;
    e.dispatch($$l1({
      users: i,
      fileKey: r
    }));
  }).catch(e => { });
  N(o, e, i);
});
let $$l1 = NC("CONTACTS_SET");
let $$d0 = NC("CONTACTS_RESET");
export const cL = $$d0;
export const hZ = $$l1;
export const um = $$o2; 
