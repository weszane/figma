import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalCloseButton } from "../905/17223";
import { BigTextInputForwardRef, ButtonSecondary, ButtonBasePrimary } from "../figma_app/637027";
import { RecordingScrollContainer } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { W } from "../5430/573261";
import { hideModal, showModalHandler } from "../905/156213";
import { xF, yo } from "../figma_app/494261";
import { extractPluginIdFromUrl, extractWidgetIdFromUrl } from "../figma_app/300692";
import { registerModal } from "../905/102752";
import { ConfirmationModal2, ModalContainer } from "../figma_app/918700";
let x = "allowlist_plugins_modals--allowListInputDescription--0Tdk6";
let b = "allowlist_plugins_modals--allowListInput--ISr-U";
let v = "allowlist_plugins_modals--allowListInputButtonContainer--O-n-P";
let f = "allowlist_plugins_modals--allowListInputButton--pwJbk";
let j = jsxs(Fragment, {
  children: [`AMENDMENT TO FIGMA MASTER SUBSCRIPTION AGREEMENT

This Amendment to the Figma Master Subscription Agreement (this \u201CAmendment\u201D) shall amend the Figma Master Subscription Agreement previously entered into and currently in effect between Figma, Inc. and Customer for use of the Figma Platform (the \u201CAgreement\u201D). Capitalized terms used and not defined herein will have the same meanings and definitions as set forth in the Agreement. In the event of a conflict or inconsistency between the terms of this Amendment and the Agreement, the terms of this Amendment will prevail. All provisions of the Agreement, except those which are explicitly changed below by this Third Amendment, shall remain in full force and effect.

WHEREAS, Figma grants to Customer access to and use of the Figma Platform;

WHEREAS, the parties wish to amend the Agreement in certain respects in accordance with the terms and conditions set forth herein;

NOW THEREFORE, Figma and Customer hereby agree as follows:`, jsxs("ol", {
    style: {
      listStyleType: "decimal",
      listStylePosition: "outside",
      paddingLeft: "20px"
    },
    children: [jsx("li", {
      children: `Section 1 of the Agreement is hereby amended by inserting the following definition as
        Section 1.H immediately after Section 1.G: \u201CApplications and Materials\u201D means any
        application(s) and/or material(s) that are developed by Customer, including, but not limited
        to, design files, plugins, component libraries, and code components that can be made
        available via, and published to, the Figma Platform for use by other Authorized users or
        other users of the Figma Platform outside of Customer\u2019s organization, in accordance with the
        functionality of the Figma Platform.`
    }), jsx("li", {
      children: `Section 2 of the Agreement is hereby amended by inserting the following Section 2.E
        immediately after Section 2.D: Applications and Materials. Customer may submit Applications
        and Materials to the Figma Platform for publication to and to be made available via the
        Figma Platform. Such Applications and Materials can be made available to Authorized Users
        only or publicly to other users of the Figma Platform outside of Customer\u2019s organization,
        depending on the sharing permissions and designations selected by Customer at the time of
        submission of the Applications and Materials. The Figma Platform may also make available
        Applications and Materials that are created by third parties outside of Customer\u2019s
        organization, but can be installed by Authorized Users for use with the Figma Platform
        (\u201CThird-Party Applications and Materials\u201D). Subject to Customer\u2019s payment of all fees and
        compliance with the terms and conditions of this Agreement, Figma grants to Customer a
        limited, worldwide, non-exclusive, non-transferable, non-sublicensable right during the
        Order Term to install and use the Third-Party Applications and Materials and to permit its
        Authorized Users to install and use the Third-Party Applications and Materials, solely in
        connection with the functionality of the Figma Platform.`
    }), jsx("li", {
      children: `Section 3.A of the Agreement is deleted in its entirety and replaced with the following: Use
        Restrictions. Except as otherwise explicitly provided in this Agreement or as may be
        expressly permitted by applicable law, Customer will not, and will not permit or authorize
        third parties to: (1) rent, lease, or otherwise permit third parties to use the Figma
        Platform, Third-Party Applications and Materials, or Documentation; (2) use the Figma
        Platform, Third-Party Applications and Materials, or Documentation to provide services to
        third parties (e.g., as a service bureau); (3) circumvent or disable any security or other
        technological features or measures of the Figma Platform; (4) reverse engineer, decompile,
        disassemble or otherwise attempt to discover the source code, object code or underlying
        structure, ideas, know-how or algorithms relevant to the Figma Platform or Third-Party
        Applications and Materials; (5) modify, translate, or create derivative works based on the
        Figma Platform, Third-Party Applications and Materials, or Documentation; or (6) remove any
        proprietary notices or labels from the Figma Platform, Third-Party Applications and
        Materials or Documentation.`
    }), jsx("li", {
      children: `The first sentence of Section 3.B of the Agreement is deleted in its entirety and replaced
        with the following: Customer is responsible and liable for all actions and inactions by its
        Authorized Users or by any other person or entity to whom Customer or an Authorized User
        may, directly or indirectly, provide access to or permit to use the Figma Platform,
        Third-Party Applications and Materials or Documentation; in each case, as if such action or
        inaction were an action or inaction of Customer.`
    }), jsx("li", {
      children: `Section 4 of the Agreement is hereby amended by inserting the following Section 4.C
        immediately after Section 4.B: Customer hereby grants Figma a worldwide, non-exclusive,
        royalty-free right and license (with the right to sublicense) to use, reproduce, distribute
        copies of, publicly perform, publicly display, use and make the Applications and Materials
        available via the Figma Platform for installation and use by Authorized Users or other users
        of the Figma Platform as permitted by the functionality of the Figma Platform.`
    }), jsx("li", {
      children: `Section 5 of the Agreement is hereby amended by inserting the following Section 5.C
        immediately after Section 5.B: Subject to the rights granted to Figma under this Agreement,
        Customer owns all right, title, and interest in and to the Applications and Materials
        (excluding Third-Party Applications and Materials). No ownership rights in the Applications
        and Materials are transferred to Figma when Applications and Materials are published on the
        Figma Platform.`
    }), jsx("li", {
      children: `Section 6.A of the Agreement is deleted in its entirety and replaced with the following: In
        addition to Third-Party Applications and Materials, third parties may make available
        third-party products or services, including, for example, mobile applications, integrations,
        and other services (\u201CThird-Party Services\u201D) that Customer may elect to purchase or use. Any
        acquisition by Customer of such Third-Party Services and any exchange of data between
        Customer and any Third-Party Service or Third-Party Service provider is solely between
        Customer and the applicable third-party provider. Figma does not warrant or provide support
        for Third-Party Services (including Third-Party Applications and Materials), whether or not
        they are designated by Figma as \u201Crecommended\u201D \u201Ccertified\u201D or otherwise.`
    }), jsx("li", {
      children: `Section 10 of the Agreement is hereby amended by inserting the following sentence to the end
        of Section 10.B. Figma makes no warranties with respect to the Third-Party Applications and
        Materials or Third-Party Services, including whether they will perform their intended
        functions or deliver any expected results. Customer acknowledges that Customer assumes all
        risk arising from use of the Third-Party Applications and Materials and Third-Party
        Services.`
    }), jsx("li", {
      children: `Section 10.C of the Agreement is deleted in its entirety and replaced with the following:
        Customer Warranties. Customer represents and warrants to Figma that: (1) Customer is the
        creator and owner of the Customer Data and any Applications and Materials that are submitted
        to the Figma Platform, or has the necessary licenses, rights, consents, and permissions to
        authorize Figma to use the Customer Data and Applications and Materials as necessary to
        exercise the licenses granted by Customer in this Agreement; (2) Customer Data and
        Applications and Materials, and the use of Customer Data and Applications and Materials, as
        contemplated by this Agreement, do not and will not: (a) infringe, violate, or
        misappropriate any third-party right, including any copyright, trademark, patent, trade
        secret, moral right, privacy right, right of publicity, or any other intellectual property
        or proprietary right; or (b) violate any applicable law or regulation; and (3) Customer will
        use the Figma Platform in compliance with the Documentation, any instructions provided by
        Figma, and all applicable laws and regulations.`
    }), jsx("li", {
      children: `Section 11.B(2) of the Agreement is hereby amended by inserting the following item (vi)
        immediately after item (v): ; or (vi) use of Third-Party Services, the Applications and
        Materials or Third-Party Applications and Materials that are made available on the Figma
        Platform.`
    }), jsx("li", {
      children: `Miscellaneous. This Amendment may be executed in counterparts, each of which shall be deemed
        to be an original and together shall be deemed to be one and the same document. The parties
        agree the electronic signatures appearing on this Agreement shall be treated, for purposes
        of validity, enforceability, as well as admissibility, the same as hand-written signatures.`
    })]
  }), jsx("br", {}), `Customer and Figma hereby acknowledge and agree that although Section 16 of the Agreement
    requires that all modifications to the Agreement be in a writing signed by both parties, Figma\u2019s
    presentation of this Amendment to Customer via the Figma Platform and Customer\u2019s action of
    clicking \u201CACCEPT & CONTINUE\u201D will satisfy the requirements for amending the Agreement and
    constitute such a writing signed by both parties. By clicking \u201CACCEPT & CONTINUE\u201D, Customer
    agrees to be bound by the Agreement as amended herein by this Amendment and will not assert that
    this Amendment is unenforceable in the future. Figma also agrees to be bound by the Agreement as
    amended and\xa0will not assert that this Amendment is unenforceable in the future.`]
});
let $$y0 = registerModal(function ({
  org: e,
  extensionType: t
}) {
  let a = useDispatch<AppDispatch>();
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("allowlist_plugins_modals.msa_amendment_modal.title"),
    confirmText: getI18nString("allowlist_plugins_modals.msa_amendment_modal.accept_button"),
    onConfirm: () => {
      a(xF({
        orgId: e.currentUserOrgId
      }));
      "plugin" === t ? a(yo({
        payload: {
          plugins_whitelist_enforced: !1
        },
        successMessage: getI18nString("allowlist_plugins_modals.msa_amendment_modal.success_notification")
      })) : a(yo({
        payload: {
          widgets_whitelist_enforced: !1
        },
        successMessage: getI18nString("allowlist_widgets_modals.msa_amendment_modal.success_notification")
      }));
      a(hideModal());
    },
    onCancel: () => {
      a(hideModal());
    },
    dontClose: !0,
    disableClickOutsideToHide: !0,
    tintedModalBackground: !0,
    size: "medium",
    children: jsx(RecordingScrollContainer, {
      className: "allowlist_plugins_modals--pluginsOptInModalText--5-lJB text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: j
    })
  });
}, "AllowListPluginsMSAAmendmentModal");
let $$w1 = registerModal(function (e) {
  let t = useDispatch<AppDispatch>();
  let [a, o] = useState("");
  let m = () => {
    t(hideModal());
    o("");
  };
  return jsxs(ModalContainer, {
    size: "small",
    title: getI18nString("allowlist_plugins_modals.add_plugin.title"),
    onHide: m,
    children: [jsx(ModalCloseButton, {
      dispatch: t
    }), jsx("div", {
      className: x,
      children: renderI18nText("allowlist_plugins_modals.add_plugin.details")
    }), jsxs("form", {
      onSubmit: n => {
        n.preventDefault();
        let s = extractPluginIdFromUrl(a);
        if (s) {
          m();
          t(showModalHandler({
            type: W(),
            data: {
              mode: "review",
              extensionId: s,
              orgId: e.currentUserOrgId,
              extensionType: "plugin",
              isAllowed: !1
            }
          }));
          return;
        }
        t(VisualBellActions.enqueue({
          error: !0,
          message: getI18nString("allowlist_plugins_modals.add_plugin.invalid_url_notification")
        }));
      },
      children: [jsx(BigTextInputForwardRef, {
        onChange: e => o(e.currentTarget.value),
        value: a,
        className: b,
        autoFocus: !0
      }), jsxs("div", {
        className: v,
        children: [jsx(ButtonSecondary, {
          onClick: m,
          className: f,
          type: "button",
          children: renderI18nText("general.cancel")
        }), jsx(ButtonBasePrimary, {
          disabled: !extractPluginIdFromUrl(a),
          className: f,
          type: "submit",
          children: renderI18nText("allowlist_plugins_modals.add_plugin.add_button")
        })]
      })]
    })]
  });
}, "AllowlistPluginsInputModal");
let $$k2 = registerModal(function (e) {
  let t = useDispatch<AppDispatch>();
  let [a, o] = useState("");
  let m = () => {
    t(hideModal());
    o("");
  };
  return jsxs(ModalContainer, {
    size: "small",
    title: getI18nString("allowlist_widgets_modals.add_widget.title"),
    onHide: m,
    children: [jsx(ModalCloseButton, {
      dispatch: t
    }), jsx("div", {
      className: x,
      children: renderI18nText("allowlist_widgets_modals.add_widget.details")
    }), jsxs("form", {
      onSubmit: n => {
        n.preventDefault();
        let s = extractWidgetIdFromUrl(a);
        if (s) {
          m();
          t(showModalHandler({
            type: W(),
            data: {
              mode: "review",
              extensionId: s,
              orgId: e.currentUserOrgId,
              extensionType: "widget",
              isAllowed: !1
            }
          }));
          return;
        }
        t(VisualBellActions.enqueue({
          error: !0,
          message: getI18nString("allowlist_widgets_modals.add_widget.invalid_url_notification")
        }));
      },
      children: [jsx(BigTextInputForwardRef, {
        onChange: e => o(e.currentTarget.value),
        value: a,
        className: b,
        autoFocus: !0
      }), jsxs("div", {
        className: v,
        children: [jsx(ButtonSecondary, {
          onClick: m,
          className: f,
          type: "button",
          children: renderI18nText("general.cancel")
        }), jsx(ButtonBasePrimary, {
          disabled: !extractWidgetIdFromUrl(a),
          className: f,
          type: "submit",
          children: renderI18nText("allowlist_widgets_modals.add_widget.add_button")
        })]
      })]
    })]
  });
}, "AllowListWidgetsInputModal");
export const WO = $$y0;
export const eu = $$w1;
export const zb = $$k2;
