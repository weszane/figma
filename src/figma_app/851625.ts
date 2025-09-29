import { APILoadingStatus } from "../905/520829";

/**
 * Represents the state of an API loading operation.
 */
interface ApiLoadingState<T = any> {
  status: APILoadingStatus;
  value?: T;
  error?: any;
}

/**
 * Creates an initial API loading state.
 * Original: $$s3
 */
export function createInitState(): ApiLoadingState {
  return {
    status: APILoadingStatus.INIT
  };
}

/**
 * Creates a loading API loading state.
 * Original: $$o6
 */
export function createLoadingState(): ApiLoadingState {
  return {
    status: APILoadingStatus.LOADING
  };
}

/**
 * Creates a success API loading state with a value.
 * Original: $$l2
 */
export function createSuccessState<T>(value: T): ApiLoadingState<T> {
  return {
    status: APILoadingStatus.SUCCESS,
    value
  };
}

/**
 * Creates a failure API loading state with an error.
 * Original: $$d5
 */
export function createFailureState(error: any): ApiLoadingState {
  return {
    status: APILoadingStatus.FAILURE,
    error
  };
}

/**
 * Checks if the state is initial.
 * Original: $$c8
 */
export function isInit(state: ApiLoadingState): boolean {
  return state.status === APILoadingStatus.INIT;
}

/**
 * Checks if the state is loading.
 * Original: $$u1
 */
export function isLoading(state: ApiLoadingState): boolean {
  return state.status === APILoadingStatus.LOADING;
}

/**
 * Checks if the state is success.
 * Original: $$p7
 */
export function isSuccess(state: ApiLoadingState): boolean {
  return state.status === APILoadingStatus.SUCCESS;
}

/**
 * Checks if the state is failure.
 * Original: $$_4
 */
export function isFailure(state: ApiLoadingState): boolean {
  return state.status === APILoadingStatus.FAILURE;
}

/**
 * Gets the value from a success state, or undefined otherwise.
 * Original: $$h0
 */
export function getValue<T>(state: ApiLoadingState<T>): T | undefined {
  return isSuccess(state) ? state.value : undefined;
}

// Aliases for backward compatibility or external usage
// Original exports: Cz = $$h0, Mx = $$u1, NY = $$l2, Ok = $$s3, ok = $$_4, uW = $$d5, ux = $$o6, xj = $$p7, yx = $$c8
export const Cz = getValue;
export const Mx = isLoading;
export const NY = createSuccessState;
export const Ok = createInitState;
export const ok = isFailure;
export const uW = createFailureState;
export const ux = createLoadingState;
export const xj = isSuccess;
export const yx = isInit;
