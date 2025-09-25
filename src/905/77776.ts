import { parseStyleString } from "../figma_app/276332";
import { toSlug } from "../905/232489";
let a = /(var\s*\(\s*)(--[\w\-_]*)(\s*,\s*.*\)|\))/i;
let $$s2 = /\/\*BOUND_VAR_START_(.*?)\*\//g;
let $$o1 = /\/\*BOUND_VAR_END\*\//g;
let $$l4 = /\/\*BOUND_STYLE_START_(.*?)\*\//g;
let $$d3 = /\/\*BOUND_STYLE_END\*\//g;
export class $$c0 {
  constructor(e, t, i, n, r) {
    this.name = e;
    this.wrappedValue = t;
    this.preferences = i;
    this.figmaVariable = n;
    this.figmaStyle = r;
  }
  get value() {
    if (this.preferences.generateForCodePanel && this.figmaVariable) {
      let e = function (e, t) {
        if (e.id) {
          if (e.codeSyntax && e.codeSyntax.WEB) {
            let t = e.codeSyntax.WEB;
            if (t?.includes("var(--")) {
              let i = t?.match(a);
              if (i && 4 === i.length) return `${i[1]}/*BOUND_VAR_START_${e.id}*/${i[2]}/*BOUND_VAR_END*/${i[3]}`;
            }
            return `/*BOUND_VAR_START_${e.id}*/${e.codeSyntax.WEB}/*BOUND_VAR_END*/`;
          }
          return `var(/*BOUND_VAR_START_${e.id}*/--${toSlug(e.name)}/*BOUND_VAR_END*/, ${t})`;
        }
      }(this.figmaVariable, this.wrappedValue.value);
      if (e) return e;
    }
    if (this.preferences.generateForCodePanel && this.figmaStyle) {
      let e = function (e, t, i) {
        if (e) return `var(/*BOUND_STYLE_START_${e}*/--${t}/*BOUND_STYLE_END*/, ${i})`;
      }(parseStyleString(this.figmaStyle)?.key ?? "", toSlug(this.name), this.wrappedValue.value);
      if (e) return e;
    }
    return this.figmaVariable && this.figmaVariable.codeSyntax && this.figmaVariable.codeSyntax.WEB ? this.figmaVariable.codeSyntax.WEB : `var(--${toSlug(this.name)}, ${this.wrappedValue.value})`;
  }
  getDefinition() {
    return this.preferences.generateForCodePanel && this.figmaVariable ? `/*BOUND_VAR_START_${this.figmaVariable.id}*/--${toSlug(this.name)}/*BOUND_VAR_END*/: ${this.wrappedValue.value}` : `--${toSlug(this.name)}: ${this.wrappedValue.value}`;
  }
  equals(e) {
    return this.value === e.value;
  }
  rawValueEquals(e) {
    let t = e instanceof $$c0 ? e.wrappedValue : e.value;
    return this.wrappedValue.value === t;
  }
}
export const kz = $$c0;
export const M$ = $$o1;
export const Z4 = $$s2;
export const Q6 = $$d3;
export const NT = $$l4;