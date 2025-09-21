import { cssBuilderInstance } from "../cssbuilder/589278";
import { createOptimistThunk } from "../905/350402";
import { s6 } from "../figma_app/443991";
import { showModalHandler } from "../905/156213";
import { ck } from "../905/952832";
import { _ } from "../905/549496";
let $$d0 = createOptimistThunk((e, {
  entity: t,
  entityType: r,
  shape: i
}) => {
  let o = document.createElement("input");
  o.type = "file";
  o.accept = "image/*";
  o.className = cssBuilderInstance.hidden.$;
  o.style.display = "none";
  o.onchange = () => {
    let n = o.files;
    null !== n && n.length > 0 && (e.dispatch(s6({
      entity: t,
      entityType: r,
      file: n[0],
      shape: i || "CIRCLE"
    })), e.dispatch(showModalHandler({
      type: _,
      showModalsBeneath: !0
    })));
  };
  document.body.appendChild(o);
  o.click();
});
let $$c1 = createOptimistThunk((e, {
  team: t
}) => {
  e.dispatch($$d0({
    entity: t,
    entityType: ck.TEAM,
    shape: "SQUARE"
  }));
});
export const X = $$d0;
export const o = $$c1;