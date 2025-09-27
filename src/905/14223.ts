import { createActionCreator } from '../905/73481';
import { createOptimistThunk } from '../905/350402';
import { setupLoadingStateHandler } from '../905/696711';
import { contactsAPIService } from '../figma_app/477548';

/**
 * Action creator for setting contacts.
 * Original name: $$l1
 */
export const setContacts = createActionCreator('CONTACTS_SET');

/**
 * Action creator for resetting contacts.
 * Original name: $$d0
 */
export const resetContacts = createActionCreator('CONTACTS_RESET');

/**
 * Thunk for fetching contacts with optimist pattern.
 * Original name: $$o2
 */
export const fetchContactsOptimist = createOptimistThunk((context, {
  loadingKey
}) => {
  const state = context.getState();
  const fileKey = state.openFile ? state.openFile.key : undefined;

  // Guard clause: Only fetch if contacts not already fetched or fileKey changed
  if (state.contacts.appData.contactsFetched && (!fileKey || state.contacts.appData.fileKey === fileKey)) {
    return;
  }
  const contactsPromise = contactsAPIService.getContacts({
    orgId: state.currentUserOrgId || undefined,
    fileKey
  }).then(({
    data
  }) => {
    const users = data.meta;
    context.dispatch(setContacts({
      users,
      fileKey
    }));
  }).catch(() => {
    // Error handling can be expanded if needed
  });
  setupLoadingStateHandler(contactsPromise, context, loadingKey);
});

/**
 * Exported variables with refactored names.
 */
export const cL = resetContacts;
export const hZ = setContacts;
export const um = fetchContactsOptimist;