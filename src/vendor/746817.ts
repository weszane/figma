import { eq } from "../vendor/154607";
import { Zp, ZS } from "../vendor/607848";
export let $$$$A0 = (e, t) => {
  let n;
  switch (e.code) {
    case eq.invalid_type:
      n = e.received === Zp.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
      break;
    case eq.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ZS.jsonStringifyReplacer)}`;
      break;
    case eq.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ZS.joinValues(e.keys, ", ")}`;
      break;
    case eq.invalid_union:
      n = "Invalid input";
      break;
    case eq.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ZS.joinValues(e.options)}`;
      break;
    case eq.invalid_enum_value:
      n = `Invalid enum value. Expected ${ZS.joinValues(e.options)}, received '${e.received}'`;
      break;
    case eq.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case eq.invalid_return_type:
      n = "Invalid function return type";
      break;
    case eq.invalid_date:
      n = "Invalid date";
      break;
    case eq.invalid_string:
      "object" == typeof e.validation ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ZS.assertNever(e.validation) : n = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
      break;
    case eq.too_small:
      n = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
      break;
    case eq.too_big:
      n = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
      break;
    case eq.custom:
      n = "Invalid input";
      break;
    case eq.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case eq.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case eq.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError;
      ZS.assertNever(e);
  }
  return {
    message: n
  };
};
export const A = $$$$A0;