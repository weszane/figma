export function $$n1(e) {
  return e.map(e => ({
    name: e.title,
    lines: $$r0(e.code),
    language: function (e) {
      switch (e) {
        case "TYPESCRIPT":
          return "tsx";
        case "CPP":
          return "cpp";
        case "RUBY":
          return "ruby";
        case "CSS":
          return "css";
        case "JAVASCRIPT":
          return "jsx";
        case "HTML":
          return "html";
        case "JSON":
          return "json";
        case "GRAPHQL":
          return "graphql";
        case "PYTHON":
          return "python";
        case "GO":
          return "go";
        case "SQL":
          return "sql";
        case "SWIFT":
          return "swift";
        case "KOTLIN":
          return "kotlin";
        case "RUST":
          return "rust";
        case "BASH":
          return "bash";
        case "PLAINTEXT":
          return "plaintext";
        case "DART":
          return "dart";
      }
    }(e.language)
  }));
}
export function $$r0(e) {
  return e.split("\n").map(e => ({
    code: e,
    indent: Math.floor(function (e) {
      let t = 0;
      for (let i of e) if (a[i]) t += a[i];else break;
      return t;
    }(e) / 2),
    excludeFromCopy: !1
  }));
}
let a = {
  " ": 1,
  "	": 2
};
export const Xl = $$r0;
export const Z0 = $$n1;