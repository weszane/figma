import classNames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { validateVatGstId } from '../905/57562'
import { getI18nString } from '../905/303541'
import { getFeatureFlags } from '../905/601108'
import { debounce } from '../905/915765'
import { conditionalFeatureFlag } from '../figma_app/169182'
import { EnhancedInput } from '../figma_app/637027'

/**
 * Country codes for VAT/GST validation.
 * Original variable: p
 */
export enum CountryCode {
  AUSTRALIA = 'AU',
  JAPAN = 'JP',
  LIECHTENSTEIN = 'LI',
  MEXICO = 'MX',
  RUSSIA = 'RU',
  SWITZERLAND = 'CH',
  SOUTH_AFRICA = 'ZA',
  UNITED_KINGDOM = 'GB',
  INDIA = 'IN',
  CANADA = 'CA',
  SOUTH_KOREA = 'KR',
  NORWAY = 'NO',
  SINGAPORE = 'SG',
  EGYPT = 'EG',
  MALAYSIA = 'MY',
  KENYA = 'KE',
  PERU = 'PE',
  PHILIPPINES = 'PH',
  THAILAND = 'TH',
  TANZANIA = 'TZ',
  AUSTRIA = 'AT',
  BELGIUM = 'BE',
  BULGARIA = 'BG',
  CROATIA = 'HR',
  CYPRUS = 'CY',
  CZECHIA = 'CZ',
  DENMARK = 'DK',
  ESTONIA = 'EE',
  FINLAND = 'FI',
  FRANCE = 'FR',
  GERMANY = 'DE',
  GREECE = 'GR',
  HUNGARY = 'HU',
  IRELAND = 'IE',
  ITALY = 'IT',
  LATVIA = 'LV',
  LITHUANIA = 'LT',
  LUXEMBOURG = 'LU',
  MALTA = 'MT',
  NETHERLANDS = 'NL',
  POLAND = 'PL',
  PORTUGAL = 'PT',
  ROMANIA = 'RO',
  SLOVAKIA = 'SK',
  SLOVENIA = 'SI',
  SPAIN = 'ES',
  SWEDEN = 'SE',
  NULL = 'N/A',
}

/**
 * Canadian region codes.
 * Original variable: m
 */
export enum CanadianRegion {
  QUEBEC = 'QC',
}

/**
 * VAT/GST format and metadata per country/region.
 * Original variable: h
 */
export interface VatGstFormat {
  exampleFormat: string
  name?: string
  regions?: string[]
  communityDisabled?: boolean
}

export const VatGstFormats: Record<string, VatGstFormat> = {
  GB: { exampleFormat: 'GB123456789' },
  AT: { exampleFormat: 'ATU12345678' },
  BE: { exampleFormat: 'BE1234567890' },
  BG: { exampleFormat: 'BG123456789' },
  HR: { exampleFormat: 'HR12345678901' },
  CY: { exampleFormat: 'CY12345678L' },
  CZ: { exampleFormat: 'CZ1234567890' },
  DK: { exampleFormat: 'DK12345678' },
  EE: { exampleFormat: 'EE123456789' },
  FI: { exampleFormat: 'FI12345678' },
  FR: { exampleFormat: 'FRAB123456789' },
  DE: { exampleFormat: 'DE123456789' },
  GR: { exampleFormat: 'EL123456789' },
  HU: { exampleFormat: 'HU12345678' },
  IE: { exampleFormat: 'IE1234567AB' },
  IT: { exampleFormat: 'IT12345678901' },
  LV: { exampleFormat: 'LV12345678901' },
  LT: { exampleFormat: 'LT123456789012' },
  LU: { exampleFormat: 'LU12345678' },
  MT: { exampleFormat: 'MT12345678' },
  NL: { exampleFormat: 'NL123456789B12' },
  PL: { exampleFormat: 'PL1234567890' },
  PT: { exampleFormat: 'PT123456789' },
  RO: { exampleFormat: 'RO1234567890' },
  SK: { exampleFormat: 'SK1234567890' },
  SI: { exampleFormat: 'SI12345678' },
  ES: { exampleFormat: 'ESA1234567Z' },
  SE: { exampleFormat: 'SE123456789012' },
  CA: {
    exampleFormat: '123456789RT0001',
    name: 'GST/HST',
    regions: [CanadianRegion.QUEBEC],
    communityDisabled: true,
  },
  QC: {
    exampleFormat: '1234567890TQ0001',
    name: 'QST',
  },
  KR: { exampleFormat: '123-45-67890' },
  NO: { exampleFormat: '123456789MVA' },
  SG: { exampleFormat: 'M12345678A' },
  EG: { exampleFormat: '123456789' },
  AU: { exampleFormat: '12345678910' },
  MY: { exampleFormat: '12345678, C 1234567890, C 12345678901, A12-3456-78912345' },
  KE: { exampleFormat: 'P123456789A' },
  PE: { exampleFormat: '12345678901' },
  PH: { exampleFormat: '123456789012' },
  TH: { exampleFormat: '1234567890123' },
  TZ: { exampleFormat: '12345678A' },
}

/**
 * Returns the correct country or region code for VAT/GST validation.
 * Original function: g
 */
export function getVatGstRegionCode(country: string, region?: string): string {
  if (Object.values(CountryCode).includes(country as CountryCode)) {
    if (!region)
      return country
    if (VatGstFormats[country]?.regions?.includes(region))
      return region
  }
  return CountryCode.NULL
}

/**
 * Set of supported VAT/GST countries.
 * Original variable: f
 */
export const SupportedVatGstCountries: Set<string> = new Set([
  CountryCode.JAPAN,
  CountryCode.LIECHTENSTEIN,
  CountryCode.MEXICO,
  CountryCode.RUSSIA,
  CountryCode.SWITZERLAND,
  CountryCode.SOUTH_AFRICA,
  CountryCode.UNITED_KINGDOM,
  CountryCode.INDIA,
  CountryCode.CANADA,
  CountryCode.SOUTH_KOREA,
  CountryCode.NORWAY,
  CountryCode.SINGAPORE,
  CountryCode.EGYPT,
  CountryCode.AUSTRALIA,
  CountryCode.MALAYSIA,
  CountryCode.KENYA,
  CountryCode.PERU,
  conditionalFeatureFlag('vat_save_ph', CountryCode.PHILIPPINES, CountryCode.NULL),
  conditionalFeatureFlag('vat_save_th', CountryCode.THAILAND, CountryCode.NULL),
  conditionalFeatureFlag('vat_save_tz', CountryCode.TANZANIA, CountryCode.NULL),
  ...[
    CountryCode.AUSTRIA,
    CountryCode.BELGIUM,
    CountryCode.BULGARIA,
    CountryCode.CROATIA,
    CountryCode.CYPRUS,
    CountryCode.CZECHIA,
    CountryCode.DENMARK,
    CountryCode.ESTONIA,
    CountryCode.FINLAND,
    CountryCode.FRANCE,
    CountryCode.GERMANY,
    CountryCode.GREECE,
    CountryCode.HUNGARY,
    CountryCode.IRELAND,
    CountryCode.ITALY,
    CountryCode.LATVIA,
    CountryCode.LITHUANIA,
    CountryCode.LUXEMBOURG,
    CountryCode.MALTA,
    CountryCode.NETHERLANDS,
    CountryCode.POLAND,
    CountryCode.PORTUGAL,
    CountryCode.ROMANIA,
    CountryCode.SLOVAKIA,
    CountryCode.SLOVENIA,
    CountryCode.SPAIN,
    CountryCode.SWEDEN,
  ],
])

/**
 * Returns the label for the VAT/GST input field.
 * Original function: $$A
 */
export function getVatGstInputLabel(country: string, region?: string): string {
  const code = getVatGstRegionCode(country, region)
  return getI18nString('tax.optional_vat_gst_id.input_label', {
    taxType: VatGstFormats[code]?.name || 'VAT/GST',
  })
}

/**
 * Props for VatGstInput component.
 * Original function: $$y0
 */
export interface VatGstInputProps {
  variant?: 'default' | 'regional'
  onChange: (value: string) => void
  setIsVatIdValid?: (valid: boolean) => void
  country: string
  region?: string
  vatId: string
  hasTaxIdVerificationError?: boolean
  isCommunityCheckout?: boolean
}

/**
 * VAT/GST Input React component.
 * Original function: $$y0
 */
export const VatGstInput: React.FC<VatGstInputProps> = ({
  variant = 'default',
  onChange,
  setIsVatIdValid,
  country,
  region,
  vatId,
  hasTaxIdVerificationError,
  isCommunityCheckout,
}) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const countryRef = useRef(country)
  const regionRef = useRef(region || '')
  const debouncedValidate = useMemo(() => debounce(validateVatGstId, 500), [])

  // Reset error and validity
  const resetValidation = useCallback(() => {
    setErrorMsg('')
    setIsVatIdValid?.(true)
  }, [setIsVatIdValid])

  // Set error and invalid
  const setInvalid = useCallback((msg: string) => {
    setErrorMsg(msg)
    setIsVatIdValid?.(false)
  }, [setIsVatIdValid])

  // Reset input and placeholder
  const resetInput = useCallback(() => {
    onChange('')
    resetValidation()
    setPlaceholder('')
  }, [onChange, resetValidation])

  // Validate VAT/GST ID on change
  useEffect(() => {
    debouncedValidate(vatId, country, resetValidation, setInvalid, region)
  }, [debouncedValidate, vatId, country, resetValidation, setInvalid, region])

  // Reset on country change
  useEffect(() => {
    if (countryRef.current !== country) {
      resetInput()
      countryRef.current = country
    }
  }, [country, resetInput])

  // Reset on region change
  useEffect(() => {
    if (region && regionRef.current !== region) {
      resetInput()
      regionRef.current = region
    }
  }, [region, resetInput])

  // Determine if input should be shown
  const shouldShowInput = useMemo(() => {
    if (
      isCommunityCheckout
      && (
        (getFeatureFlags().cmty_disable_vat_for_india && country === CountryCode.INDIA)
        || VatGstFormats[country]?.communityDisabled
      )
    ) {
      return false
    }
    if (region === undefined) {
      return SupportedVatGstCountries.has(country)
    }
    return SupportedVatGstCountries.has(country) && !!VatGstFormats[country]?.regions?.includes(region)
  }, [isCommunityCheckout, country, region])

  if (!shouldShowInput)
    return null

  return jsx(
    Fragment,
    {
      children: [
        jsx(EnhancedInput, {
          className: classNames('vat_input--inputBox--o9iEf basic_form--labeledInputGroup--aeD6L', {
            'vat_input--error--PX8cc': hasTaxIdVerificationError,
          }),
          dataTestId: 'vat-gst-id-input',
          hasError: hasTaxIdVerificationError || !!errorMsg,
          htmlName: variant === 'regional' ? 'regionalVatId' : 'vatId',
          label: getVatGstInputLabel(country, region),
          onBlur: () => {
            setPlaceholder(getVatGstInputLabel(region ?? country))
          },
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
          },
          onFocus: () => {
            const code = getVatGstRegionCode(country, region)
            const example = VatGstFormats[code]?.exampleFormat
            if (example) {
              setPlaceholder(getI18nString('tax.example_vat_format_placeholder', {
                exampleFormat: example,
              }))
            }
          },
          placeholder,
          tooltip: getI18nString('tax.vat.input_tooltip'),
          trackingFieldName: 'VAT/GST ID',
          value: vatId,
        }),
        errorMsg
          ? jsx(
              'div',
              {
                'className': 'vat_input--errorMessageContainer--O8ez0',
                'data-testid': 'vat-gst-id-input-error',
                'children': jsx(
                  'span',
                  {
                    className: 'vat_input--errorMessage--AE03w',
                    children: errorMsg,
                  },
                ),
              },
            )
          : null,
      ],
    },
  )
}


// Export refactored names for imports
export const A = VatGstInput
