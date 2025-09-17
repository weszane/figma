import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ButtonLargeWide } from "../905/521428";
import { ModalCloseButton } from "../905/17223";
import { EnhancedInput } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { j as _$$j } from "../5430/272190";
import { G } from "../905/971006";
import { getSelectedView } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { qE } from "../figma_app/152745";
import { H } from "../905/216861";
import { createEmptyAddress } from "../figma_app/831101";
import { registerModal } from "../905/102752";
import { ModalContainer } from "../figma_app/918700";
import { X } from "../905/33014";
import { A as _$$A } from "../905/289352";
export let $$w0 = registerModal(function (e) {
  let t = useDispatch();
  let r = selectCurrentUser();
  let g = getSelectedView();
  let w = H();
  let [C, L] = useState("");
  let [T, I] = useState("");
  let [N, E] = useState(createEmptyAddress());
  let [S, R] = useState("");
  let [k, A] = useState(!0);
  let [P, M] = useState(!1);
  G();
  let O = useCallback(() => {
    if (!r || P) return;
    if (!C) {
      t(FlashActions.error(getI18nString("community.seller.collect_tax_info_modal.enter_a_first_name")));
      return;
    }
    if (!T) {
      t(FlashActions.error(getI18nString("community.seller.collect_tax_info_modal.enter_a_last_name")));
      return;
    }
    let {
      line1,
      city,
      country,
      region,
      postal_code
    } = N;
    if (!line1 || !city || !country || !postal_code || "US" === country && !region) {
      t(FlashActions.error(getI18nString("community.seller.collect_tax_info_modal.enter_a_valid_address")));
      return;
    }
    if (S && !k) {
      t(FlashActions.error(getI18nString("community.seller.collect_tax_info_modal.enter_a_valid_vat_id")));
      return;
    }
    M(!0);
    t(_$$j({
      user: r,
      callback: t => {
        e.setupStripeCallback(t);
        M(!1);
        t && w();
      },
      selectedView: g,
      firstName: C,
      lastName: T,
      address: N,
      vatId: S
    }));
  }, [N, w, r, t, C, P, k, T, e, g, S]);
  return jsxs(ModalContainer, {
    className: "collect_tax_info_modal--container--F6VXQ",
    children: [jsx(ModalCloseButton, {
      dispatch: t
    }), jsx("div", {
      className: "collect_tax_info_modal--title--wFmJh text--fontPos20--Bcz97 text--_fontBase--QdLsd",
      children: renderI18nText("community.seller.collect_tax_info_modal.title")
    }), jsx("div", {
      className: "collect_tax_info_modal--body--M1wrr text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: renderI18nText("community.seller.collect_tax_info_modal.body")
    }), jsxs("div", {
      className: "xh8yej3",
      children: [jsx(EnhancedInput, {
        value: C,
        htmlName: "firstName",
        label: getI18nString("community.seller.collect_tax_info_modal.first_name"),
        onChange: e => {
          L(e.target.value);
        },
        trackingFieldName: "First name",
        dataTestId: "first-name"
      }), jsx(EnhancedInput, {
        value: T,
        htmlName: "lastName",
        label: getI18nString("community.seller.collect_tax_info_modal.last_name"),
        onChange: e => {
          I(e.target.value);
        },
        trackingFieldName: "Last name",
        dataTestId: "last-name"
      }), jsx(X, {
        updateAddress: E,
        address: N,
        countryCodesOverride: qE,
        dontSeeYourCountryLink: "https://help.figma.com/hc/articles/12067637274519-About-selling-Community-resources#What_countries_are_supported?"
      }), jsx(_$$A, {
        onChange: R,
        country: N.country,
        setIsVatIdValid: A,
        vatId: S,
        isCommunityCheckout: !0
      })]
    }), jsx("div", {
      className: "collect_tax_info_modal--buttonWrapper--fl7ot",
      children: jsxs(ButtonLargeWide, {
        onClick: O,
        children: [P && jsx("span", {
          className: "collect_tax_info_modal--loadingIcon--iCbii",
          children: jsx(LoadingSpinner, {
            shouldMatchTextColor: !0
          })
        }), renderI18nText("community.seller.collect_tax_info_modal.continue_to_stripe")]
      })
    })]
  });
}, "CommunityCollectTaxInfoModal");
export const s = $$w0;