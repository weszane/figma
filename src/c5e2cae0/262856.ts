import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import l from "classnames";
import { WB } from "../905/761735";
import { BigTextInputForwardRef, ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { R } from "../c5e2cae0/276031";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { hideModal } from "../905/156213";
import { setCompanyDetailsAction } from "../figma_app/482142";
import { teamAPIClient } from "../905/834575";
import { registerModal } from "../905/102752";
import { HeaderModal } from "../905/519092";
import { v0, hF, pL } from "../905/289198";
var n = l;
let j = memo(function (e) {
  let t = useDispatch();
  let {
    displayName,
    legalName
  } = e;
  let [f, j] = useState(displayName || "");
  let [S, T] = useState(legalName || "");
  let {
    isLoading,
    withLoading
  } = R();
  let C = () => {
    t(hideModal());
  };
  let w = async a => {
    a.preventDefault();
    await withLoading(async () => {
      if (e.updateNameImmediately && e.team) try {
        e.canSeeBillingAddressExp ? await WB().optimisticallyUpdate({
          Plan: {
            [`team::${e.team.id}`]: {
              name: f
            }
          }
        }, teamAPIClient.updateDisplayName({
          teamId: e.team.id,
          updatedDisplayName: f
        })) : await WB().optimisticallyUpdate({
          Plan: {
            [`team::${e.team.id}`]: {
              name: f
            }
          }
        }, teamAPIClient.updateTeamName({
          teamId: e.team.id,
          updatedDisplayName: f,
          updatedLegalName: S
        }));
      } catch (s) {
        let a = e.canSeeBillingAddressExp ? getI18nString("update_company_details_modal.update_display_name.error") : getI18nString("update_company_details_modal.update_team_name.error");
        t(FlashActions.error(resolveMessage(s) || a));
        return s;
      } else t(setCompanyDetailsAction({
        legalName: S,
        displayName: f
      }));
      C();
    });
  };
  return jsx(HeaderModal, {
    onClose: C,
    title: e.modalTitle,
    minWidth: 448,
    maxWidth: 448,
    fixedTop: !0,
    children: jsxs("form", {
      onSubmit: w,
      className: cssBuilderInstance.p16.$,
      children: [jsxs("div", {
        className: cssBuilderInstance.mt4.$,
        children: [jsxs("label", {
          htmlFor: "teamName",
          className: cssBuilderInstance.colorTextSecondary.$,
          children: [jsx("strong", {
            className: cssBuilderInstance.block.colorText.$,
            children: renderI18nText("pro_cart.review.edit_details.team_name_label")
          }), renderI18nText("pro_cart.review.edit_details.team_name_description")]
        }), jsx(BigTextInputForwardRef, {
          value: f,
          id: "teamName",
          onChange: e => {
            j(e.target.value);
          },
          dataTestId: "company-team-name",
          className: cssBuilderInstance.block.mt8.wFull.$
        })]
      }), !e.canSeeBillingAddressExp && jsxs("div", {
        className: cssBuilderInstance.mt20.$,
        children: [jsxs("label", {
          htmlFor: "legalName",
          className: cssBuilderInstance.colorTextSecondary.$,
          children: [jsx("strong", {
            className: cssBuilderInstance.block.colorText.$,
            children: renderI18nText("pro_cart.review.edit_details.company_name_label")
          }), renderI18nText("pro_cart.review.edit_details.company_name_description")]
        }), jsx(BigTextInputForwardRef, {
          value: S,
          id: "legalName",
          onChange: e => {
            T(e.target.value);
          },
          dataTestId: "company-name",
          className: cssBuilderInstance.block.mt8.wFull.$
        })]
      }), jsxs("div", {
        className: n()(v0, hF),
        children: [jsx(ButtonSecondaryTracked, {
          onClick: C,
          disabled: isLoading,
          children: renderI18nText("pro_cart.review.edit_details.cancel")
        }), jsx(ButtonBasePrimaryTracked, {
          className: pL,
          disabled: isLoading,
          type: "submit",
          children: renderI18nText("pro_cart.review.edit_details.save")
        })]
      })]
    })
  });
});
let $$S0 = registerModal(j, "UpdateCompanyDetailsModal");
export const L = $$S0;