import { baseErrorSeverity } from "../905/44199"
import { autocompleteAddToken, autocompleteInputChange, autocompleteReset, autocompleteSet, setErrorMessage } from "../905/748726"
// Origin: /Users/allen/sigma-main/src/figma_app/761870.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// Assumed dependencies:
// - `d.ERROR` is an error state constant imported from "../905/44199"
// - Action creators (autocompleteReset, setErrorMessage, etc.) are imported from "../905/748726"
// - Token content may be a string or an object with an `email` property

// Type definitions for tokens and state
export const TokenState  = {
  ERROR: baseErrorSeverity.ERROR, // Add other states as needed
}
export interface Token {
  content: string | {
    email: string
  }
  state: any
}
export interface AutocompleteState {
  inputValue: string
  tokens: Token[]
  errorMessage: string
}

// Function to check if autocomplete is valid (no error tokens, valid input)
export function isAutocompleteValid(state: AutocompleteState, validateInput: (input: string) => {
  state: any
}): boolean {
  // Check if there are any tokens or input value
  let isValid = state.tokens && state.tokens.length > 0 || state.inputValue && state.inputValue.length > 0

  // If any token is in error state, invalidate
  if (state.tokens.some(token => token.state === TokenState.ERROR)) {
    isValid = false
  }

  // If input value is present and validation returns error, invalidate
  if (state.inputValue && state.inputValue.length > 0 && validateInput(state.inputValue).state === TokenState.ERROR) {
    isValid = false
  }
  return isValid
}

// Function to get all token contents and input value as lowercase strings
export function getAllAutocompleteStrings(state: AutocompleteState): string[] {
  const result: string[] = state.tokens.map(token => typeof token.content === "string" ? token.content.toLowerCase() : token.content.email.toLowerCase())
  if (state.inputValue) {
    result.push(state.inputValue.trim().toLowerCase())
  }
  return result
}

// Function to get all token contents as lowercase strings
export function getTokenStrings(state: AutocompleteState): string[] {
  return state.tokens.map(token => typeof token.content === "string" ? token.content.toLowerCase() : token.content.email.toLowerCase())
}

// Function to get all token contents and input value as lowercase strings (same as getAllAutocompleteStrings)
export function getAllAutocompleteEmails(state: AutocompleteState): string[] {
  const result: string[] = state.tokens.map(token => typeof token.content === "string" ? token.content.toLowerCase() : token.content.email.toLowerCase())
  if (state.inputValue) {
    result.push(state.inputValue.trim().toLowerCase())
  }
  return result
}

// Function to return initial autocomplete state
export function getInitialAutocompleteState(): AutocompleteState {
  return {
    inputValue: "",
    tokens: [],
    errorMessage: "",
  }
}

// Reducer function for autocomplete state
export function autocompleteReducer(state: AutocompleteState = getInitialAutocompleteState(), action: any): AutocompleteState {
  // Note: The action matching logic assumes action creators have a .matches method
  if (autocompleteReset.matches(action)) {
    return getInitialAutocompleteState()
  }
  if (autocompleteSet.matches(action)) {
    // Replace state with payload
    return {
      ...action.payload,
    }
  }
  if (autocompleteAddToken.matches(action)) {
    // Add token and reset input value
    return {
      ...state,
      tokens: state.tokens.concat(action.payload),
      inputValue: "",
    }
  }
  if (autocompleteInputChange.matches(action)) {
    // Update input value
    return {
      ...state,
      inputValue: action.payload,
    }
  }
  if (setErrorMessage.matches(action)) {
    // Set error message
    return {
      ...state,
      errorMessage: action.payload,
    }
  }
  // Return unchanged state for unknown actions
  return state
}

// Export statements preserving original names
export const F5 = isAutocompleteValid
export const N$ = getTokenStrings
export const Rs = getInitialAutocompleteState
export const Z = getAllAutocompleteEmails
export const nx = autocompleteReducer
export const um = getAllAutocompleteStrings
