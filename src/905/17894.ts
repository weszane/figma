
export let unsetSymbol = Symbol('UNSET');

export const withSubmissionError = {
  SubmissionError: class {
    error: any;
    constructor(e) {
      this.error = e
    }
  }
}
export const A = unsetSymbol
export const o = withSubmissionError
