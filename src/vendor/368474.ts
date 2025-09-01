import { ZodIssueCode } from "../vendor/582700";
import { ZodParsedType, util } from "../vendor/781583";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
let o = (e, r) => {
  let n;
  switch (e.code) {
    case ZodIssueCode.invalid_type:
      n = e.received === ZodParsedType.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${util.joinValues(e.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      n = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${util.joinValues(e.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      n = `Invalid enum value. Expected ${util.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      n = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      "object" == typeof e.validation ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : util.assertNever(e.validation) : n = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
      break;
    case ZodIssueCode.too_small:
      n = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
      break;
    case ZodIssueCode.too_big:
      n = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
      break;
    case ZodIssueCode.custom:
      n = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = r.defaultError;
      util.assertNever(e);
  }
  return {
    message: n
  };
};
exports.$$default = o;