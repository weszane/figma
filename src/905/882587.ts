export function $$n0(e, t) {
  if (e && t) return {
    type: "parameter-entry",
    parameters: e.map(e => ({
      type: "plugin-parameter",
      name: e.name,
      key: e.key,
      valueType: "string",
      description: e.description,
      optional: e.optional,
      allowFreeform: e.allowFreeform
    })),
    commandName: t
  };
}
export const c = $$n0;