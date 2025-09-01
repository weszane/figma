export function $$n4(e) {
  return !e || e.questions.every(e => {
    switch (e.inputType) {
      case "text":
        return !e.value;
      case "multi_select":
      case "single_select":
        return e.options.every(e => !e.isSelected);
    }
  });
}
export function $$r2(e, t) {
  return !e || $$n4(e) && !t ? 0 : function e(t) {
    let i = 0;
    t.forEach(t => {
      switch (t.inputType) {
        case "text":
          $$s0(t) && i++;
          break;
        case "multi_select":
        case "single_select":
          $$s0(t) && i++;
          t.options.forEach(t => {
            t.isSelected && t.subQuestions && (i += e(t.subQuestions));
          });
      }
    });
    return i;
  }(e.questions);
}
export function $$a5(e, t) {
  return $$r2(e, t) > 0;
}
export function $$s0(e) {
  switch (e.inputType) {
    case "text":
      return !e.value;
    case "multi_select":
    case "single_select":
      return e.options.every(e => !e.isSelected);
  }
}
export const G6 = $$s0;
export const HX = function e(t) {
  return t.map(t => function (t) {
    switch (t.inputType) {
      case "text":
        return {
          ...t,
          value: ""
        };
      case "multi_select":
      case "single_select":
        return {
          ...t,
          options: t.options.map(t => ({
            ...t,
            isSelected: !1,
            subQuestions: t.subQuestions ? e(t.subQuestions) : void 0
          }))
        };
    }
  }(t));
};
export const UR = $$r2;
export const ir = function e(t) {
  for (let [i, n] of t.entries()) switch (n.inputType) {
    case "text":
      if ($$s0(n)) return [i];
      break;
    case "multi_select":
    case "single_select":
      if ($$s0(n)) return [i];
      for (let [t, r] of n.options.entries()) if (r.isSelected && r.subQuestions) {
        let n = e(r.subQuestions);
        if (n) return [i, t, n[0]];
      }
  }
};
export const qu = $$n4;
export const wT = $$a5;