import { z } from "../905/239603";
import { createSimpleMetaValidator, createMetaValidator } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
import { FlashActions } from "../905/573154";
import { createOptimistThunk } from "../905/350402";
import { FRequestStatusType } from "../figma_app/191312";
import { convertSinatraModel } from "../905/412108";
import { PluginVersionsRecordSchema } from "../figma_app/155287";
var u = (e => (e.PENDING = "pending", e.APPROVED = "approved", e.REJECTED = "rejected", e))(u || {});
let p = convertSinatraModel(z.object({
  prompt: z.string(),
  inputType: z.literal("single_select"),
  options: z.array(z.lazy(() => f))
}));
let m = convertSinatraModel(z.object({
  prompt: z.string(),
  inputType: z.literal("multi_select"),
  options: z.array(z.lazy(() => f))
}));
let h = convertSinatraModel(z.object({
  prompt: z.string().nullish(),
  inputType: z.literal("text"),
  value: z.string().nullish(),
  placeholder: z.string()
}));
let g = convertSinatraModel.discriminatedUnion("inputType", [p, m, h]);
let f = convertSinatraModel(z.object({
  label: z.string(),
  subQuestions: z.array(g).nullish(),
  isSelected: z.boolean().optional()
}));
let _ = convertSinatraModel(z.object({
  version: z.string(),
  questions: z.array(g)
}));
let $$A0 = z.array(g);
let y = {
  updatedAt: z.coerce.date(),
  pluginId: z.string(),
  status: z.nativeEnum(FRequestStatusType),
  responses: $$A0,
  formVersion: z.union([z.string(), z.number()])
};
let b = convertSinatraModel(z.object(y));
let v = {
  ...y,
  plugin: PluginVersionsRecordSchema
};
convertSinatraModel(z.object(v));
convertSinatraModel(z.object({
  ...v,
  id: z.string(),
  createdAt: z.coerce.date(),
  publisherEmail: z.string().nullable()
}));
export let $$I1 = new class {
  constructor() {
    this.SecurityFormValidator = createSimpleMetaValidator("SecurityFormValidator", _);
    this.GetSecurityFormResponseValidator = createSimpleMetaValidator("GetSecurityFormResponseValidator", b);
    this.SubmitSecurityFormResponseValidator = createSimpleMetaValidator("SubmitSecurityFormResponseValidator", z.union([z.boolean(), b]));
    this.DeleteSecurityFormResponseValidator = createMetaValidator("DeleteSecurityFormResponseValidator", z.undefined(), null, !0);
    this.getBlankSecurityForm = async e => {
      let {
        data
      } = await this.SecurityFormValidator.validate(async ({
        xr: t
      }) => e ? await t.get("/api/plugin_security_form", {
        version: e
      }) : await t.get("/api/plugin_security_form"));
      let {
        meta
      } = t;
      return {
        questions: meta.questions,
        version: meta.version
      };
    };
    this.submitSecurityFormResponse = async (e, t, i) => {
      let n = "plugin" === t ? `/api/plugins/${e}/plugin_security_form_response` : `/api/widgets/${e}/plugin_security_form_response`;
      await this.SubmitSecurityFormResponseValidator.validate(async ({
        xr: e
      }) => await e.post(n, this.recursivelyChangeCamelCaseToSnakeCase({
        response: i.questions,
        version: i.version
      })));
    };
    this.recursivelyChangeCamelCaseToSnakeCase = e => Array.isArray(e) ? e.map(this.recursivelyChangeCamelCaseToSnakeCase) : "object" == typeof e && null !== e ? Object.entries(e).reduce((e, [t, i]) => {
      let n = t.replace(/([A-Z])/g, "_$1").toLowerCase();
      return {
        ...e,
        [n]: this.recursivelyChangeCamelCaseToSnakeCase(i)
      };
    }, {}) : e;
    this.deleteSecurityFormResponse = async (e, t, i) => {
      let n = "plugin" === t ? `/api/plugins/${e}/plugin_security_form_response` : `/api/widgets/${e}/plugin_security_form_response`;
      await this.DeleteSecurityFormResponseValidator.validate(async ({
        xr: e
      }) => await e.del(n, {
        version: i
      }));
    };
    this.approveReviewPluginSecurityForms = createOptimistThunk((e, t) => {
      let {
        securityFormId,
        pluginId,
        formVersion,
        removeFromPendingForms
      } = t;
      sendWithRetry.put("/api/admin/plugin_security_form_response/status", {
        plugin_id: pluginId,
        form_version: formVersion,
        status: FRequestStatusType.APPROVED
      }).then(() => {
        removeFromPendingForms(securityFormId);
        e.dispatch(FlashActions.flash("Approved security form."));
      }).catch(t => {
        e.dispatch(FlashActions.error("Unable to approve security form."));
      });
    });
    this.rejectReviewPluginSecurityForms = createOptimistThunk((e, t) => {
      let {
        securityFormId,
        pluginId,
        formVersion,
        removeFromPendingForms
      } = t;
      sendWithRetry.put("/api/admin/plugin_security_form_response/status", {
        plugin_id: pluginId,
        form_version: formVersion,
        status: FRequestStatusType.REJECTED
      }).then(() => {
        removeFromPendingForms(securityFormId);
        e.dispatch(FlashActions.flash("Rejected security form."));
      }).catch(t => {
        e.dispatch(FlashActions.error("Unable to reject security form."));
      });
    });
  }
}();
export const E3 = $$A0;
export const is = $$I1;
