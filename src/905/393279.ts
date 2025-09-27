import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { noop } from 'lodash-es';
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { ButtonWhite, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { hZ } from "../905/748726";
import { UpgradeAction } from "../905/370443";
import { ContactsAnalyticsTracker, ENTRYPOINT_SHARE_MODAL } from "../905/331019";
import { F5 } from "../figma_app/761870";
import { P, D } from "../905/392438";
import { b8 } from "../figma_app/926061";
var l = o;
let _ = "token_form--button--iN86T";
export class $$A0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.renderOptions = () => {
      if (!this.props.options || !this.props.dropdownKey) return null;
      let e = "" === this.props.autocomplete.inputValue;
      let t = 0 === this.props.autocomplete.tokens.length;
      if (this.props.hideDropdownOnEmpty && t && e) return null;
      let {
        onInviteLevelChange = noop,
        getSelectText,
        getSelectTextDescription
      } = this.props;
      return jsx("div", {
        "data-testid": "token-form-options",
        children: jsx(b8, {
          value: this.props.inviteLevel,
          options: this.props.options,
          getPermissionName: getSelectText,
          getPermissionDescription: getSelectTextDescription,
          showSeparators: this.props.showDropdownSeparators,
          onChange: onInviteLevelChange
        })
      });
    };
    this.onAutocompleteChange = e => {
      this.props.onAutocompleteChange ? this.props.onAutocompleteChange(e) : this.props.dispatch(hZ({
        ...e,
        errorMessage: this.getErrorMessage(e.tokens, e.inputValue)
      }));
    };
    this.onSubmit = e => {
      e?.preventDefault();
      F5(this.props.autocomplete, this.props.validateToken) && this.props.onSubmit && this.props.onSubmit(this.props.autocomplete);
    };
    this.contactsAnalytics = new ContactsAnalyticsTracker(ENTRYPOINT_SHARE_MODAL);
  }
  getErrorMessage(e, t) {
    return this.props.validateToken(t).errorMessage || e.find(e => e.errorMessage)?.errorMessage || "";
  }
  render() {
    let {
      autocomplete,
      validateToken
    } = this.props;
    let i = F5(autocomplete, validateToken);
    let r = this.props.buttonClassName ? l()(_, this.props.buttonClassName) : _;
    return jsxs("form", {
      onSubmit: this.onSubmit,
      children: [jsxs("div", {
        className: this.props.multiLineForm ? "token_form--column--aDJPW" : "token_form--row--V82kl",
        children: [jsx("div", {
          className: this.props.multiLineForm ? "" : "token_form--autocompleteWrapper--GWPvU",
          children: jsx(P, {
            SearchResultCTA: this.props.SearchResultCTA,
            SearchResultComponent: this.props.SearchResultComponent,
            SearchResultHeaderComponent: this.props.SearchResultHeaderComponent,
            TokenComponent: this.props.TokenComponent,
            addTokenOnInputBlur: this.props.addOnBlur,
            autoFocus: this.props.shouldAutoFocus,
            autocomplete: this.props.autocomplete,
            fixedAutocompleteResults: this.props.fixedAutocompleteResults,
            getSearchResults: e => "" === e.inputValue && this.props.hideDropdownOnEmpty ? [] : this.props.getSearchResults?.(e) ?? [],
            getTokenForSearchResultOverride: this.props.searchResultToken,
            id: this.props.id,
            inputWrapperClassName: !getFeatureFlags().team_permission_modal_styling && this.props.joinLinkShown ? "token_form--inviteInputFtrV2--xb7d6" : void 0,
            onChange: this.onAutocompleteChange,
            onLifecycleEvent: ({
              eventType: e,
              autocomplete: t,
              searchResults: i,
              selectedSearchResultIndex: n
            }) => {
              switch (e) {
                case D.RESULTS_FETCHED:
                  i.length > 0 && this.contactsAnalytics.trackQueryResult(t.inputValue, i.length);
                  break;
                case D.TOKEN_ADDED:
                  null !== n && this.contactsAnalytics.trackResultClicked(t.inputValue, n, i.length);
                  break;
                case D.INPUT_BLURRED:
                  "" === t.inputValue && this.contactsAnalytics.endSession("input blurred");
                  break;
                case D.ESCAPE_PRESSED:
                  t.tokens.length || this.props.onHideModal?.();
              }
            },
            onSubmit: this.onSubmit,
            placeholder: this.props.placeholderText ?? getI18nString("folder_permissions_modal.email_comma_separated"),
            renderOptions: this.renderOptions,
            tokenClassName: this.props.tokenClassName,
            useContainerForWidth: !0,
            validateToken: this.props.validateToken,
            validateTokensAsEmail: this.props.validateTokensAsEmail
          }, this.props.dropdownShown ? "dropdown" : "")
        }), this.props.onSubmit && (this.props.isSubmitting ? jsx(ButtonWhite, {
          className: r,
          disabled: !0,
          children: this.props.buttonText
        }) : jsx(ButtonBasePrimaryTracked, {
          className: this.props.joinLinkShown ? "token_form--buttonFtrV2--UWPO3" : r,
          trackingProperties: {
            numInvites: this.props.autocomplete.tokens.length,
            trackingDescriptor: UpgradeAction.SEND_INVITES
          },
          disabled: !i,
          type: "submit",
          children: this.props.buttonText
        }))]
      }), this.props.autocomplete.errorMessage && jsx("p", {
        className: "token_form--errorMessage--sB4oU",
        children: this.props.autocomplete.errorMessage
      })]
    });
  }
}
export const e = $$A0;