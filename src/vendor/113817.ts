import { mountBuffer, unmount } from "../vendor/523005";
import Q from "../vendor/812650";
import { log } from "../vendor/448752";
import { wrapHunspellInterface } from "../vendor/816079";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.hunspellLoader = A => {
  let {
    cwrap,
    FS,
    _free,
    allocateUTF8,
    _malloc,
    getValue,
    UTF8ToString
  } = A;
  let t = wrapHunspellInterface(cwrap);
  let y = `/${Q(45)}`;
  FS.mkdir(y);
  log(`hunspellLoader: mount path for bufferFile created at ${y}`);
  let a = (...A) => {
    let I = [...A];
    let B = I.pop();
    let g = I.map(A => allocateUTF8(A.normalize()));
    let Q = B(...g);
    g.forEach(A => _free(A));
    return Q;
  };
  return {
    mountBuffer: mountBuffer(FS, y),
    unmount: unmount(FS, y),
    create: (A, I) => {
      let B = allocateUTF8(A);
      let g = allocateUTF8(I);
      let Q = t.create(B, g);
      return {
        dispose: () => {
          t.destroy(Q);
          _free(B);
          _free(g);
        },
        spell: A => !!a(A, A => t.spell(Q, A)),
        suggest: A => {
          let I = _malloc(4);
          let B = a(A, A => t.suggest(Q, I, A));
          let g = getValue(I, "*");
          let C = B > 0 ? Array.from(Array(B).keys()).map(A => UTF8ToString(getValue(g + 4 * A, "*"))) : [];
          t.free_list(Q, I, B);
          _free(I);
          return C;
        },
        addDictionary: A => 1 !== a(A, A => t.add_dic(Q, A)),
        addWord: A => a(A, A => t.add(Q, A)),
        addWordWithAffix: (A, I) => a(A, I, (A, I) => t.add_with_affix(Q, A, I)),
        removeWord: A => a(A, A => t.remove(Q, A))
      };
    }
  };
};