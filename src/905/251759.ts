import classNames from 'classnames';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { renderI18nText } from '../905/303541';
import { ConnectedPointingDropdown } from '../905/504727';
import { SvgComponent } from '../905/714743';
import { hideDropdownAction, showDropdownThunk } from '../905/929976';
import { c$ } from '../figma_app/236327';
import { withTrackedClick } from '../figma_app/831799';
import { A } from '../svg/763165';
let switcherDropdownType = 'CART_CURRENCY_SWITCHER_DROPDOWN_TYPE';
let currencyOptions = {
  jpy: {
    currency: 'jpy',
    optionLeft: renderI18nText('universal_upgrade.currency_switcher_option.japanese_yen'),
    optionRight: renderI18nText('universal_upgrade.currency_switcher_option.jpy_symbol'),
    headerShort: renderI18nText('universal_upgrade.currency_switcher.short_pricing_in_jpy'),
    headerLong: renderI18nText('universal_upgrade.currency_switcher.pricing_in_jpy')
  },
  usd: {
    currency: 'usd',
    optionLeft: renderI18nText('universal_upgrade.currency_switcher_option.us_dollar'),
    optionRight: renderI18nText('universal_upgrade.currency_switcher_option.usd_symbol'),
    headerShort: renderI18nText('universal_upgrade.currency_switcher.short_pricing_in_usd'),
    headerLong: renderI18nText('universal_upgrade.currency_switcher.pricing_in_usd')
  },
  eur: {
    currency: 'eur',
    optionLeft: renderI18nText('universal_upgrade.currency_switcher_option.european_euro'),
    optionRight: renderI18nText('universal_upgrade.currency_switcher_option.eur_symbol'),
    headerShort: renderI18nText('universal_upgrade.currency_switcher.short_pricing_in_eur'),
    headerLong: renderI18nText('universal_upgrade.currency_switcher.pricing_in_eur')
  },
  cad: {
    currency: 'cad',
    optionLeft: renderI18nText('universal_upgrade.currency_switcher_option.cad_dollar'),
    optionRight: renderI18nText('universal_upgrade.currency_switcher_option.cad_symbol'),
    headerShort: renderI18nText('universal_upgrade.currency_switcher.short_pricing_in_cad'),
    headerLong: renderI18nText('universal_upgrade.currency_switcher.pricing_in_cad')
  },
  gbp: {
    currency: 'gbp',
    optionLeft: renderI18nText('universal_upgrade.currency_switcher_option.british_pound'),
    optionRight: renderI18nText('universal_upgrade.currency_switcher_option.gbp_symbol'),
    headerShort: renderI18nText('universal_upgrade.currency_switcher.short_pricing_in_gbp'),
    headerLong: renderI18nText('universal_upgrade.currency_switcher.pricing_in_gbp')
  }
};
/**
 * CurrencyOption type for currencyOptions object
 */
export interface CurrencyOption {
  currency: string;
  optionLeft: string;
  optionRight: string;
  headerShort: string;
  headerLong: string;
}

/**
 * Props for CurrencySwitcherDropdown component ($$A0)
 */
export interface CurrencySwitcherDropdownProps {
  currency: keyof typeof currencyOptions;
  supportedCurrencies: string[];
  shortFormDisplay?: boolean;
  paddingOverride?: number | null;
  dropdownShown: {
    type?: string;
    data?: {
      targetRect?: DOMRect;
    };
  };
  changeCurrency: (currency: string) => void;
}

/**
 * CurrencySwitcherDropdown component ($$A0)
 * Handles currency selection dropdown logic and rendering.
 */
export function CurrencySwitcherDropdown(props: CurrencySwitcherDropdownProps) {
  const caretRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const dropdownShown = useSelector((state: any) => state.dropdownShown);
  const isDropdownVisible = dropdownShown?.type === switcherDropdownType;
  const availableCurrencies = Object.keys(currencyOptions).filter(currency => props.supportedCurrencies.includes(currency));
  const currentCurrencyOption = currencyOptions[props.currency];

  /**
   * Handles click on the dropdown container.
   * Toggles dropdown visibility.
   */
  const handleDropdownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isDropdownVisible) {
      dispatch(hideDropdownAction());
    } else if (caretRef.current) {
      dispatch(showDropdownThunk({
        type: switcherDropdownType,
        data: {
          targetRect: caretRef.current.getBoundingClientRect()
        }
      }));
    }
  };
  return jsxs('div', {
    className: 'currency_switcher--dropdownContainer--HANwa text--fontPos11--2LvXf text--_fontBase--QdLsd',
    onClick: handleDropdownClick,
    role: 'button',
    tabIndex: 0,
    style: props.paddingOverride !== null ? {
      paddingRight: props.paddingOverride
    } : {},
    children: [jsx('span', {
      className: 'currency_switcher--displayedCurrency--c3Uz-',
      children: props.shortFormDisplay ? currentCurrencyOption.headerShort : currentCurrencyOption.headerLong
    }), jsx('div', {
      className: 'currency_switcher--caretContainer--8KG1H',
      ref: caretRef,
      children: jsx(SvgComponent, {
        svg: A,
        className: classNames('currency_switcher--caret--hshB4', isDropdownVisible ? 'currency_switcher--caretDown--ISJvk' : '')
      })
    }), isDropdownVisible && jsx(ConnectedPointingDropdown, {
      targetRect: props.dropdownShown.data?.targetRect,
      lean: 'left',
      minWidth: 225,
      maxWidth: 225,
      showPoint: false,
      propagateCloseClick: true,
      children: availableCurrencies.map(currency => jsx(CurrencyDropdownOption, {
        onClick: props.changeCurrency.bind(null, currency),
        currency,
        trackingProperties: {
          prevCurrencyCode: props.currency,
          newCurrencyCode: currency
        },
        trackingEventName: 'currency_toggled'
      }, currency))
    })]
  });
}

/**
 * Sorts currency keys, prioritizing 'usd'
 * (original _.sort logic)
 */
export const sortedCurrencyKeys = Object.keys(currencyOptions).sort((a, b) => a === 'usd' ? 1 : b === 'usd' ? -1 : a.localeCompare(b));

/**
 * Props for CurrencyDropdownOption component (y)
 */
export interface CurrencyDropdownOptionProps {
  currency: keyof typeof currencyOptions;
  onClick: () => void;
  trackingProperties: {
    prevCurrencyCode: string;
    newCurrencyCode: string;
  };
  trackingEventName: string;
}

/**
 * CurrencyDropdownOption component (y)
 * Renders a single currency option in the dropdown.
 */
export const CurrencyDropdownOption = withTrackedClick((props: CurrencyDropdownOptionProps) => {
  const option = currencyOptions[props.currency];
  return jsx(c$, {
    onClick: props.onClick,
    children: jsxs('div', {
      className: 'currency_switcher--dropdownOption--6dFex',
      children: [jsx('div', {
        children: option.optionLeft
      }), jsx('div', {
        children: option.optionRight
      })]
    })
  });
});

// Export refactored main component as D
export const D = CurrencySwitcherDropdown;