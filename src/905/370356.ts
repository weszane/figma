import { Ay } from "../905/612521";
import { XHR } from "../905/910117";
import { Ts } from "../905/194276";
import { qB } from "../905/862321";
import { showModalHandler } from "../905/156213";
import { x } from "../905/749159";
export async function $$d0(e, t) {
  try {
    await XHR.post("/api/files/edit_request", {
      file_key: t
    });
    return !0;
  } catch (t) {
    t.message.includes("Org access needed") && (e(Ts({
      origin: "ask_to_edit_button_click",
      formState: qB.JOIN_ORG,
      redirectUrl: Ay.location.pathname
    })), e(showModalHandler({
      type: x,
      data: {}
    })));
    return !1;
  }
}
export const E = $$d0;