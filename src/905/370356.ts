import { customHistory } from "../905/612521";
import { sendWithRetry } from "../905/910117";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { showModalHandler } from "../905/156213";
import { AuthModal } from "../905/749159";
export async function $$d0(e, t) {
  try {
    await sendWithRetry.post("/api/files/edit_request", {
      file_key: t
    });
    return !0;
  } catch (t) {
    t.message.includes("Org access needed") && (e(AUTH_INIT({
      origin: "ask_to_edit_button_click",
      formState: AuthFlowStep.JOIN_ORG,
      redirectUrl: customHistory.location.pathname
    })), e(showModalHandler({
      type: AuthModal,
      data: {}
    })));
    return !1;
  }
}
export const E = $$d0;
