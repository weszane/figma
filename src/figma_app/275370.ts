import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { generateUUIDv4 } from "../905/871474";
import { createNoOpValidator } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
import { openFileKeyAtom, openFileLibraryKeyAtom } from "../figma_app/516028";
var $$d3 = (e => (e[e.RAW_VARIABLES = 0] = "RAW_VARIABLES", e[e.RAW_TEXT_STYLES = 1] = "RAW_TEXT_STYLES", e[e.COMPONENT = 2] = "COMPONENT", e[e.FRAGMENT = 3] = "FRAGMENT", e[e.GENERATED_VARIABLES = 4] = "GENERATED_VARIABLES", e[e.GENERATED_TYPOGRAPHY = 5] = "GENERATED_TYPOGRAPHY", e[e.GUIDELINES_MD = 6] = "GUIDELINES_MD", e[e.GLOBAL_CSS = 7] = "GLOBAL_CSS", e[e.COMPONENTS_LIST_VARIABLES = 8] = "COMPONENTS_LIST_VARIABLES", e[e.COMPONENTS_LIST_TYPOGRAPHY = 9] = "COMPONENTS_LIST_TYPOGRAPHY", e))($$d3 || {});
export async function $$c0({
  type: e,
  blob: t,
  components_list: r,
  key: i
}) {
  let a = atomStoreManager.get(openFileKeyAtom) ?? void 0;
  let s = atomStoreManager.get(openFileLibraryKeyAtom) ?? void 0;
  if (!a || !s) throw Error("Missing file_key or library_key");
  if (!t && !r) throw Error("Need atleast a blob or component_list to be uploaded");
  await sendWithRetry.post("/api/make/create_ds_import", {
    artifact_type: e,
    artifact_blob: t,
    components_list: r,
    artifact_key: i,
    file_key: a,
    library_key: s
  });
}
export async function $$u1() {
  let e = atomStoreManager.get(openFileKeyAtom) ?? void 0;
  let t = atomStoreManager.get(openFileLibraryKeyAtom) ?? void 0;
  if (!e || !t) throw Error("Missing file_key or library_key");
  return (await sendWithRetry.post("/api/recommend/components", {
    subscribed_library_keys: [t],
    source: "figma_make",
    open_file_key: e,
    query_id: generateUUIDv4(),
    session_id: generateUUIDv4()
  })).data.meta.components;
}
export function $$p2(e) {
  let t = createNoOpValidator();
  let r = debugState.getState().currentUserOrgId;
  return t.validate(async ({
    xr: t
  }) => {
    let n = r ? `org_id=${r}&` : "";
    let i = e ? `library_key=${e}&` : "";
    let a = `/api/make/ds_import_libraries?${n}${i}`;
    return await t.get(a);
  });
}
export const $x = $$c0;
export const Eu = $$u1;
export const N6 = $$p2;
export const tc = $$d3;
