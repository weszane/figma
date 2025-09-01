export let $$n0 = e => ({
  copyExportRestrictedArgs: e.openFile ? {
    canEdit: e.openFile.canEdit,
    canExport: e.openFile.canExport,
    viewerExportRestricted: e.openFile.viewerExportRestricted
  } : null
});
export const S = $$n0;