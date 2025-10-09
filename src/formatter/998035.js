var r = Object.defineProperty;
var i = e => {
  throw TypeError(e);
};
var a = (e, t) => {
  for (var n in t) r(e, n, {
    get: t[n],
    enumerable: !0
  });
};
var o = (e, t, n) => t.has(e) || i("Cannot " + n);
var s = (e, t, n) => (o(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var _ = (e, t, n) => t.has(e) ? i("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
var l = (e, t, n, r) => (o(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var u = {};
a(u, {
  languages: () => $$aY1,
  options: () => $$aG2,
  printers: () => $$aX3
});
var c = {};
a(c, {
  canAttachComment: () => nI,
  embed: () => ri,
  experimentalFeatures: () => aJ,
  getCommentChildNodes: () => nO,
  getVisitorKeys: () => L,
  handleComments: () => tW,
  insertPragma: () => rh,
  isBlockComment: () => J,
  isGap: () => nj,
  massageAstNode: () => e2,
  print: () => aR,
  printComment: () => tK,
  willPrintOwnComments: () => nB
});
var p = (e, t, n, r) => {
  if (!(e && null == t)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
};
var d = (e, t, n) => {
  if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[n < 0 ? t.length + n : n] : t.at(n);
};
var m = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var f = e => !(function (e) {
  return 12288 === e || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}(e) || function (e) {
  return e >= 4352 && e <= 4447 || 8986 === e || 8987 === e || 9001 === e || 9002 === e || e >= 9193 && e <= 9196 || 9200 === e || 9203 === e || 9725 === e || 9726 === e || 9748 === e || 9749 === e || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || 9855 === e || e >= 9866 && e <= 9871 || 9875 === e || 9889 === e || 9898 === e || 9899 === e || 9917 === e || 9918 === e || 9924 === e || 9925 === e || 9934 === e || 9940 === e || 9962 === e || 9970 === e || 9971 === e || 9973 === e || 9978 === e || 9981 === e || 9989 === e || 9994 === e || 9995 === e || 10024 === e || 10060 === e || 10062 === e || e >= 10067 && e <= 10069 || 10071 === e || e >= 10133 && e <= 10135 || 10160 === e || 10175 === e || 11035 === e || 11036 === e || 11088 === e || 11093 === e || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || 94192 === e || 94193 === e || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || 110589 === e || 110590 === e || e >= 110592 && e <= 110882 || 110898 === e || e >= 110928 && e <= 110930 || 110933 === e || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || 126980 === e || 127183 === e || 127374 === e || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || 127568 === e || 127569 === e || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || 127988 === e || e >= 127992 && e <= 128062 || 128064 === e || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || 128378 === e || 128405 === e || 128406 === e || 128420 === e || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || 128716 === e || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || 128747 === e || 128748 === e || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || 129008 === e || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}(e));
var h = /[^\x20-\x7F]/u;
var y = function (e) {
  if (!e) return 0;
  if (!h.test(e)) return e.length;
  e = e.replace(m(), "  ");
  let t = 0;
  for (let n of e) {
    let e = n.codePointAt(0);
    e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || (t += f(e) ? 1 : 2);
  }
  return t;
};
function g(e) {
  return (t, n, r) => {
    let i = !!(null != r && r.backwards);
    if (!1 === n) return !1;
    let {
      length
    } = t;
    let o = n;
    for (; o >= 0 && o < length;) {
      let n = t.charAt(o);
      if (e instanceof RegExp) {
        if (!e.test(n)) return o;
      } else if (!e.includes(n)) return o;
      i ? o-- : o++;
    }
    return (-1 === o || o === length) && o;
  };
}
g(/\s/u);
var b = g(" 	");
var D = g(",; 	");
var x = g(/[^\n\r]/u);
var v = function (e, t, n) {
  let r = !!(null != n && n.backwards);
  if (!1 === t) return !1;
  let i = e.charAt(t);
  if (r) {
    if ("\r" === e.charAt(t - 1) && i === `
`) return t - 2;
    if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t - 1;
  } else {
    if ("\r" === i && e.charAt(t + 1) === `
`) return t + 2;
    if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t + 1;
  }
  return t;
};
var T = function (e, t, n = {}) {
  let r = b(e, n.backwards ? t - 1 : t, n);
  let i = v(e, r, n);
  return r !== i;
};
var S = function (e, t) {
  if (!1 === t) return !1;
  if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
    for (let n = t + 2; n < e.length; ++n) if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
  }
  return t;
};
var C = function (e, t) {
  return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? x(e, t) : t);
};
var E = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = D(e, r);
    r = S(e, r);
    r = b(e, r);
  }
  r = C(e, r);
  return !1 !== (r = v(e, r)) && T(e, r);
};
var w = function (e) {
  return Array.isArray(e) && e.length > 0;
};
var A = new Proxy(() => {}, {
  get: () => A
});
var k = function (e, t) {
  let n = !0 === t || "'" === t ? "'" : '"';
  let r = "'" === n ? '"' : "'";
  let i = 0;
  let a = 0;
  for (let t of e) t === n ? i++ : t === r && a++;
  return i > a ? r : n;
};
var F = function (e, t, n) {
  let r = '"' === t ? "'" : '"';
  let i = p(!1, e, /\\(.)|(["'])/gsu, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(i) ? i : "\\" + i));
  return t + i + t;
};
var P = function (e, t) {
  A(/^(?<quote>["']).*\k<quote>$/su.test(e));
  let n = e.slice(1, -1);
  let r = "json" !== t.parser && "jsonc" !== t.parser && ("json5" !== t.parser || "preserve" !== t.quoteProps || t.singleQuote) ? t.__isInHtmlAttribute ? "'" : k(n, t.singleQuote) : '"';
  return e.charAt(0) === r ? e : F(n, r, !1);
};
function N(e) {
  var t;
  var n;
  var r;
  let i = (null == (t = e.range) ? void 0 : t[0]) ?? e.start;
  let a = null == (r = (null == (n = e.declaration) ? void 0 : n.decorators) ?? e.decorators) ? void 0 : r[0];
  return a ? Math.min(N(a), i) : i;
}
function I(e) {
  var t;
  return (null == (t = e.range) ? void 0 : t[1]) ?? e.end;
}
function O(e, t) {
  let n = N(e);
  return Number.isInteger(n) && n === N(t);
}
var B = null;
function j(e) {
  if (null !== B && (B.property, 1)) {
    let e = B;
    B = j.prototype = null;
    return e;
  }
  B = j.prototype = e ?? Object.create(null);
  return new j();
}
for (let e = 0; e <= 10; e++) j();
var M = function (e, t = "type") {
  j(e);
  return function (n) {
    let r = n[t];
    let i = e[r];
    if (!Array.isArray(i)) throw Object.assign(Error(`Missing visitor keys for '${r}'.`), {
      node: n
    });
    return i;
  };
};
var L = M({
  ArrayExpression: ["elements"],
  AssignmentExpression: ["left", "right"],
  BinaryExpression: ["left", "right"],
  InterpreterDirective: [],
  Directive: ["value"],
  DirectiveLiteral: [],
  BlockStatement: ["directives", "body"],
  BreakStatement: ["label"],
  CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  CatchClause: ["param", "body"],
  ConditionalExpression: ["test", "consequent", "alternate"],
  ContinueStatement: ["label"],
  DebuggerStatement: [],
  DoWhileStatement: ["body", "test"],
  EmptyStatement: [],
  ExpressionStatement: ["expression"],
  File: ["program"],
  ForInStatement: ["left", "right", "body"],
  ForStatement: ["init", "test", "update", "body"],
  FunctionDeclaration: ["id", "typeParameters", "params", "returnType", "body", "predicate"],
  FunctionExpression: ["id", "typeParameters", "params", "returnType", "body"],
  Identifier: ["typeAnnotation", "decorators"],
  IfStatement: ["test", "consequent", "alternate"],
  LabeledStatement: ["label", "body"],
  StringLiteral: [],
  NumericLiteral: [],
  NullLiteral: [],
  BooleanLiteral: [],
  RegExpLiteral: [],
  LogicalExpression: ["left", "right"],
  MemberExpression: ["object", "property"],
  NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  Program: ["directives", "body"],
  ObjectExpression: ["properties"],
  ObjectMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  ObjectProperty: ["key", "value", "decorators"],
  RestElement: ["argument", "typeAnnotation", "decorators"],
  ReturnStatement: ["argument"],
  SequenceExpression: ["expressions"],
  ParenthesizedExpression: ["expression"],
  SwitchCase: ["test", "consequent"],
  SwitchStatement: ["discriminant", "cases"],
  ThisExpression: [],
  ThrowStatement: ["argument"],
  TryStatement: ["block", "handler", "finalizer"],
  UnaryExpression: ["argument"],
  UpdateExpression: ["argument"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id", "init"],
  WhileStatement: ["test", "body"],
  WithStatement: ["object", "body"],
  AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"],
  ArrayPattern: ["elements", "typeAnnotation", "decorators"],
  ArrowFunctionExpression: ["typeParameters", "params", "returnType", "body", "predicate"],
  ClassBody: ["body"],
  ClassExpression: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"],
  ClassDeclaration: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"],
  ExportAllDeclaration: ["source", "attributes", "exported"],
  ExportDefaultDeclaration: ["declaration"],
  ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"],
  ExportSpecifier: ["local", "exported"],
  ForOfStatement: ["left", "right", "body"],
  ImportDeclaration: ["specifiers", "source", "attributes"],
  ImportDefaultSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportSpecifier: ["imported", "local"],
  ImportExpression: ["source", "options"],
  MetaProperty: ["meta", "property"],
  ClassMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  ObjectPattern: ["properties", "typeAnnotation", "decorators"],
  SpreadElement: ["argument"],
  Super: [],
  TaggedTemplateExpression: ["tag", "typeParameters", "quasi", "typeArguments"],
  TemplateElement: [],
  TemplateLiteral: ["quasis", "expressions"],
  YieldExpression: ["argument"],
  AwaitExpression: ["argument"],
  BigIntLiteral: [],
  ExportNamespaceSpecifier: ["exported"],
  OptionalMemberExpression: ["object", "property"],
  OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  ClassProperty: ["decorators", "key", "typeAnnotation", "value", "variance"],
  ClassAccessorProperty: ["decorators", "key", "typeAnnotation", "value"],
  ClassPrivateProperty: ["decorators", "key", "typeAnnotation", "value", "variance"],
  ClassPrivateMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  PrivateName: ["id"],
  StaticBlock: ["body"],
  AnyTypeAnnotation: [],
  ArrayTypeAnnotation: ["elementType"],
  BooleanTypeAnnotation: [],
  BooleanLiteralTypeAnnotation: [],
  NullLiteralTypeAnnotation: [],
  ClassImplements: ["id", "typeParameters"],
  DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
  DeclareFunction: ["id", "predicate"],
  DeclareInterface: ["id", "typeParameters", "extends", "body"],
  DeclareModule: ["id", "body"],
  DeclareModuleExports: ["typeAnnotation"],
  DeclareTypeAlias: ["id", "typeParameters", "right"],
  DeclareOpaqueType: ["id", "typeParameters", "supertype"],
  DeclareVariable: ["id"],
  DeclareExportDeclaration: ["declaration", "specifiers", "source", "attributes"],
  DeclareExportAllDeclaration: ["source", "attributes"],
  DeclaredPredicate: ["value"],
  ExistsTypeAnnotation: [],
  FunctionTypeAnnotation: ["typeParameters", "params", "rest", "returnType", "this"],
  FunctionTypeParam: ["name", "typeAnnotation"],
  GenericTypeAnnotation: ["id", "typeParameters"],
  InferredPredicate: [],
  InterfaceExtends: ["id", "typeParameters"],
  InterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  InterfaceTypeAnnotation: ["extends", "body"],
  IntersectionTypeAnnotation: ["types"],
  MixedTypeAnnotation: [],
  EmptyTypeAnnotation: [],
  NullableTypeAnnotation: ["typeAnnotation"],
  NumberLiteralTypeAnnotation: [],
  NumberTypeAnnotation: [],
  ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"],
  ObjectTypeInternalSlot: ["id", "value"],
  ObjectTypeCallProperty: ["value"],
  ObjectTypeIndexer: ["variance", "id", "key", "value"],
  ObjectTypeProperty: ["key", "value", "variance"],
  ObjectTypeSpreadProperty: ["argument"],
  OpaqueType: ["id", "typeParameters", "supertype", "impltype"],
  QualifiedTypeIdentifier: ["qualification", "id"],
  StringLiteralTypeAnnotation: [],
  StringTypeAnnotation: [],
  SymbolTypeAnnotation: [],
  ThisTypeAnnotation: [],
  TupleTypeAnnotation: ["types", "elementTypes"],
  TypeofTypeAnnotation: ["argument", "typeArguments"],
  TypeAlias: ["id", "typeParameters", "right"],
  TypeAnnotation: ["typeAnnotation"],
  TypeCastExpression: ["expression", "typeAnnotation"],
  TypeParameter: ["bound", "default", "variance"],
  TypeParameterDeclaration: ["params"],
  TypeParameterInstantiation: ["params"],
  UnionTypeAnnotation: ["types"],
  Variance: [],
  VoidTypeAnnotation: [],
  EnumDeclaration: ["id", "body"],
  EnumBooleanBody: ["members"],
  EnumNumberBody: ["members"],
  EnumStringBody: ["members"],
  EnumSymbolBody: ["members"],
  EnumBooleanMember: ["id", "init"],
  EnumNumberMember: ["id", "init"],
  EnumStringMember: ["id", "init"],
  EnumDefaultedMember: ["id"],
  IndexedAccessType: ["objectType", "indexType"],
  OptionalIndexedAccessType: ["objectType", "indexType"],
  JSXAttribute: ["name", "value"],
  JSXClosingElement: ["name"],
  JSXElement: ["openingElement", "children", "closingElement"],
  JSXEmptyExpression: [],
  JSXExpressionContainer: ["expression"],
  JSXSpreadChild: ["expression"],
  JSXIdentifier: [],
  JSXMemberExpression: ["object", "property"],
  JSXNamespacedName: ["namespace", "name"],
  JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"],
  JSXSpreadAttribute: ["argument"],
  JSXText: [],
  JSXFragment: ["openingFragment", "children", "closingFragment"],
  JSXOpeningFragment: [],
  JSXClosingFragment: [],
  Noop: [],
  Placeholder: [],
  V8IntrinsicIdentifier: [],
  ArgumentPlaceholder: [],
  BindExpression: ["object", "callee"],
  ImportAttribute: ["key", "value"],
  Decorator: ["expression"],
  DoExpression: ["body"],
  ExportDefaultSpecifier: ["exported"],
  RecordExpression: ["properties"],
  TupleExpression: ["elements"],
  ModuleExpression: ["body"],
  TopicReference: [],
  PipelineTopicExpression: ["expression"],
  PipelineBareFunction: ["callee"],
  PipelinePrimaryTopicReference: [],
  TSParameterProperty: ["parameter", "decorators"],
  TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"],
  TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"],
  TSQualifiedName: ["left", "right"],
  TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSPropertySignature: ["key", "typeAnnotation"],
  TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSIndexSignature: ["parameters", "typeAnnotation"],
  TSAnyKeyword: [],
  TSBooleanKeyword: [],
  TSBigIntKeyword: [],
  TSIntrinsicKeyword: [],
  TSNeverKeyword: [],
  TSNullKeyword: [],
  TSNumberKeyword: [],
  TSObjectKeyword: [],
  TSStringKeyword: [],
  TSSymbolKeyword: [],
  TSUndefinedKeyword: [],
  TSUnknownKeyword: [],
  TSVoidKeyword: [],
  TSThisType: [],
  TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSTypeReference: ["typeName", "typeParameters", "typeArguments"],
  TSTypePredicate: ["parameterName", "typeAnnotation"],
  TSTypeQuery: ["exprName", "typeParameters", "typeArguments"],
  TSTypeLiteral: ["members"],
  TSArrayType: ["elementType"],
  TSTupleType: ["elementTypes"],
  TSOptionalType: ["typeAnnotation"],
  TSRestType: ["typeAnnotation"],
  TSNamedTupleMember: ["label", "elementType"],
  TSUnionType: ["types"],
  TSIntersectionType: ["types"],
  TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
  TSInferType: ["typeParameter"],
  TSParenthesizedType: ["typeAnnotation"],
  TSTypeOperator: ["typeAnnotation"],
  TSIndexedAccessType: ["objectType", "indexType"],
  TSMappedType: ["typeParameter", "nameType", "typeAnnotation"],
  TSLiteralType: ["literal"],
  TSExpressionWithTypeArguments: ["expression", "typeParameters"],
  TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  TSInterfaceBody: ["body"],
  TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
  TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"],
  TSAsExpression: ["expression", "typeAnnotation"],
  TSSatisfiesExpression: ["expression", "typeAnnotation"],
  TSTypeAssertion: ["typeAnnotation", "expression"],
  TSEnumDeclaration: ["id", "members"],
  TSEnumMember: ["id", "initializer"],
  TSModuleDeclaration: ["id", "body"],
  TSModuleBlock: ["body"],
  TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"],
  TSImportEqualsDeclaration: ["id", "moduleReference"],
  TSExternalModuleReference: ["expression"],
  TSNonNullExpression: ["expression"],
  TSExportAssignment: ["expression"],
  TSNamespaceExportDeclaration: ["id"],
  TSTypeAnnotation: ["typeAnnotation"],
  TSTypeParameterInstantiation: ["params"],
  TSTypeParameterDeclaration: ["params"],
  TSTypeParameter: ["constraint", "default", "name"],
  ChainExpression: ["expression"],
  ExperimentalRestProperty: ["argument"],
  ExperimentalSpreadProperty: ["argument"],
  Literal: [],
  MethodDefinition: ["decorators", "key", "value"],
  PrivateIdentifier: [],
  Property: ["key", "value"],
  PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"],
  AccessorProperty: ["decorators", "key", "typeAnnotation", "value"],
  TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"],
  TSAbstractKeyword: [],
  TSAbstractMethodDefinition: ["key", "value"],
  TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
  TSAsyncKeyword: [],
  TSClassImplements: ["expression", "typeArguments", "typeParameters"],
  TSDeclareKeyword: [],
  TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"],
  TSEnumBody: ["members"],
  TSExportKeyword: [],
  TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"],
  TSPrivateKeyword: [],
  TSProtectedKeyword: [],
  TSPublicKeyword: [],
  TSReadonlyKeyword: [],
  TSStaticKeyword: [],
  TSTemplateLiteralType: ["quasis", "types"],
  AsConstExpression: ["expression"],
  AsExpression: ["expression", "typeAnnotation"],
  BigIntLiteralTypeAnnotation: [],
  BigIntTypeAnnotation: [],
  ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"],
  ComponentParameter: ["name", "local"],
  ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"],
  ComponentTypeParameter: ["name", "typeAnnotation"],
  ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"],
  DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"],
  DeclareEnum: ["id", "body"],
  DeclareHook: ["id"],
  DeclareNamespace: ["id", "body"],
  EnumBigIntBody: ["members"],
  EnumBigIntMember: ["id", "init"],
  HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"],
  HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"],
  InferTypeAnnotation: ["typeParameter"],
  KeyofTypeAnnotation: ["argument"],
  ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"],
  QualifiedTypeofIdentifier: ["qualification", "id"],
  TupleTypeLabeledElement: ["label", "elementType", "variance"],
  TupleTypeSpreadElement: ["label", "typeAnnotation"],
  TypeOperator: ["typeAnnotation"],
  TypePredicate: ["parameterName", "typeAnnotation", "asserts"],
  NGRoot: ["node"],
  NGPipeExpression: ["left", "right", "arguments"],
  NGChainedExpression: ["expressions"],
  NGEmptyExpression: [],
  NGMicrosyntax: ["body"],
  NGMicrosyntaxKey: [],
  NGMicrosyntaxExpression: ["expression", "alias"],
  NGMicrosyntaxKeyedExpression: ["key", "expression"],
  NGMicrosyntaxLet: ["key", "value"],
  NGMicrosyntaxAs: ["key", "alias"],
  JsExpressionRoot: ["node"],
  JsonRoot: ["node"],
  TSJSDocAllType: [],
  TSJSDocUnknownType: [],
  TSJSDocNullableType: ["typeAnnotation"],
  TSJSDocNonNullableType: ["typeAnnotation"],
  NeverTypeAnnotation: [],
  UndefinedTypeAnnotation: [],
  UnknownTypeAnnotation: [],
  SatisfiesExpression: ["expression", "typeAnnotation"]
});
var R = function (e) {
  let t = new Set(e);
  return e => t.has(e?.type);
};
var J = R(["Block", "CommentBlock", "MultiLine"]);
var q = R(["AnyTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "BooleanTypeAnnotation", "BigIntTypeAnnotation", "SymbolTypeAnnotation", "StringTypeAnnotation", "NeverTypeAnnotation", "UndefinedTypeAnnotation", "UnknownTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation"]);
var U = function ({
  type: e
}) {
  return e.startsWith("TS") && e.endsWith("Keyword");
};
function z(e, t) {
  return t(e) || function (e, {
    getVisitorKeys: t,
    predicate: n
  }) {
    for (let r of function* (e, t) {
      let n = [e];
      for (let e = 0; e < n.length; e++) for (let r of function* (e, t) {
        let {
          getVisitorKeys,
          filter = () => !0
        } = t;
        let i = e => null !== e && "object" == typeof e && filter(e);
        for (let t of getVisitorKeys(e)) {
          let n = e[t];
          if (Array.isArray(n)) for (let e of n) i(e) && (yield e);else i(n) && (yield n);
        }
      }(n[e], t)) {
        yield r;
        n.push(r);
      }
    }(e, {
      getVisitorKeys: t
    })) if (n(r)) return !0;
    return !1;
  }(e, {
    getVisitorKeys: L,
    predicate: t
  });
}
function K(e) {
  return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || ef(e) || eh(e) || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || eX(e) || "TSNonNullExpression" === e.type || "ChainExpression" === e.type;
}
function W(e) {
  if (e.expressions) return ["expressions", 0];
  if (e.left) return ["left"];
  if (e.test) return ["test"];
  if (e.object) return ["object"];
  if (e.callee) return ["callee"];
  if (e.tag) return ["tag"];
  if (e.argument) return ["argument"];
  if (e.expression) return ["expression"];
  throw Error("Unexpected node has no left side.");
}
var V = R(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose", "Hashbang", "InterpreterDirective"]);
var $ = R(["ExportDefaultDeclaration", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "DeclareExportAllDeclaration"]);
var H = R(["ArrayExpression", "TupleExpression"]);
var G = R(["ObjectExpression", "RecordExpression"]);
function X(e) {
  return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value;
}
function Y(e) {
  return "UnaryExpression" === e.type && ("+" === e.operator || "-" === e.operator) && X(e.argument);
}
function Q(e) {
  return !!(e && ("StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value));
}
function Z(e) {
  return "RegExpLiteral" === e.type || "Literal" === e.type && !!e.regex;
}
var ee = R(["Literal", "BooleanLiteral", "BigIntLiteral", "DirectiveLiteral", "NullLiteral", "NumericLiteral", "RegExpLiteral", "StringLiteral"]);
var et = R(["Identifier", "ThisExpression", "Super", "PrivateName", "PrivateIdentifier"]);
var en = R(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]);
var er = R(["FunctionExpression", "ArrowFunctionExpression"]);
function ei(e) {
  return ef(e) && "Identifier" === e.callee.type && ["async", "inject", "fakeAsync", "waitForAsync"].includes(e.callee.name);
}
var ea = R(["JSXElement", "JSXFragment"]);
function eo(e) {
  return e.method && "init" === e.kind || "get" === e.kind || "set" === e.kind;
}
function es(e) {
  return ("ObjectTypeProperty" === e.type || "ObjectTypeInternalSlot" === e.type) && !e.$$static && !e.method && "get" !== e.kind && "set" !== e.kind && "FunctionTypeAnnotation" === e.value.type;
}
var e_ = R(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
function el(e) {
  return eh(e) || "BindExpression" === e.type && !!e.object;
}
var eu = R(["TSThisType", "NullLiteralTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType"]);
function ec(e) {
  return U(e) || q(e) || eu(e) || ("GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type) && !e.typeParameters && !e.typeArguments;
}
var ep = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
function ed(e, t) {
  var n;
  var r;
  var i;
  if (e?.type !== "CallExpression" || e.optional) return !1;
  let a = eL(e);
  if (1 === a.length) {
    if (ei(e) && ed(t)) return er(a[0]);
    if ("Identifier" === (n = e.callee).type && ("beforeEach" === n.name || "beforeAll" === n.name || "afterEach" === n.name || "afterAll" === n.name)) return ei(a[0]);
  } else if ((2 === a.length || 3 === a.length) && ("TemplateLiteral" === a[0].type || Q(a[0])) && (r = e.callee, ep.some(e => function (e, t) {
    let n = t.split(".");
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      if (0 === t) return "Identifier" === e.type && e.name === r;
      if ("MemberExpression" !== e.type || e.optional || e.computed || "Identifier" !== e.property.type || e.property.name !== r) return !1;
      e = e.object;
    }
  }(r, e)))) return (!a[2] || !!X(a[2])) && ((2 === a.length ? er(a[1]) : ("FunctionExpression" === (i = a[1]).type || "ArrowFunctionExpression" === i.type && "BlockStatement" === i.body.type) && ej(a[1]).length <= 1) || ei(a[1]));
  return !1;
}
var em = e => t => (t?.type === "ChainExpression" && (t = t.expression), e(t));
var ef = em(R(["CallExpression", "OptionalCallExpression"]));
var eh = em(R(["MemberExpression", "OptionalMemberExpression"]));
function ey(e, t = 5) {
  return function e(t, n) {
    let r = 0;
    for (let i in t) {
      let a = t[i];
      if (a && "object" == typeof a && "string" == typeof a.type && (r++, r += e(a, n - r)), r > n) break;
    }
    return r;
  }(e, t) <= t;
}
function eg(e, t) {
  let {
    printWidth
  } = t;
  if (eW(e)) return !1;
  let r = .25 * printWidth;
  if ("ThisExpression" === e.type || "Identifier" === e.type && e.name.length <= r || Y(e) && !eW(e.argument)) return !0;
  let i = "Literal" === e.type && "regex" in e && e.regex.pattern || "RegExpLiteral" === e.type && e.pattern;
  return i ? i.length <= r : Q(e) ? P(eE(e), t).length <= r : "TemplateLiteral" === e.type ? 0 === e.expressions.length && e.quasis[0].value.raw.length <= r && !e.quasis[0].value.raw.includes(`
`) : "UnaryExpression" === e.type ? eg(e.argument, {
    printWidth
  }) : "CallExpression" === e.type && 0 === e.$$arguments.length && "Identifier" === e.callee.type ? e.callee.name.length <= r - 2 : ee(e);
}
function eb(e, t) {
  return ea(t) ? eU(t) : eW(t, ez.Leading, t => T(e, I(t)));
}
function eD(e) {
  return e.quasis.some(e => e.value.raw.includes(`
`));
}
function ex(e, t) {
  return ("TemplateLiteral" === e.type && eD(e) || "TaggedTemplateExpression" === e.type && eD(e.quasi)) && !T(t, N(e), {
    backwards: !0
  });
}
function ev(e) {
  if (!eW(e)) return !1;
  let t = d(!1, eV(e, ez.Dangling), -1);
  return t && !J(t);
}
function eT(e) {
  let {
    node,
    parent,
    key
  } = e;
  return "callee" === key && ef(node) && ef(parent) && parent.$$arguments.length > 0 && node.$$arguments.length > parent.$$arguments.length;
}
var eS = new Set(["!", "-", "+", "~"]);
function eC(e, t = 2) {
  if (t <= 0) return !1;
  if ("ChainExpression" === e.type || "TSNonNullExpression" === e.type) return eC(e.expression, t);
  let n = e => eC(e, t - 1);
  if (Z(e)) return 5 >= y(e.pattern ?? e.regex.pattern);
  if (ee(e) || et(e) || "ArgumentPlaceholder" === e.type) return !0;
  if ("TemplateLiteral" === e.type) return e.quasis.every(e => !e.value.raw.includes(`
`)) && e.expressions.every(n);
  if (G(e)) return e.properties.every(e => !e.computed && (e.shorthand || e.value && n(e.value)));
  if (H(e)) return e.elements.every(e => null === e || n(e));
  if (eH(e)) {
    if ("ImportExpression" === e.type || eC(e.callee, t)) {
      let r = eL(e);
      return r.length <= t && r.every(n);
    }
    return !1;
  }
  return eh(e) ? eC(e.object, t) && eC(e.property, t) : (!!("UnaryExpression" === e.type && eS.has(e.operator)) || "UpdateExpression" === e.type) && eC(e.argument, t);
}
function eE(e) {
  var t;
  return (null == (t = e.extra) ? void 0 : t.raw) ?? e.raw;
}
function ew(e, t = "es5") {
  return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t);
}
function eA(e, t) {
  switch (e.type) {
    case "BinaryExpression":
    case "LogicalExpression":
    case "AssignmentExpression":
    case "NGPipeExpression":
      return eA(e.left, t);
    case "MemberExpression":
    case "OptionalMemberExpression":
      return eA(e.object, t);
    case "TaggedTemplateExpression":
      return "FunctionExpression" !== e.tag.type && eA(e.tag, t);
    case "CallExpression":
    case "OptionalCallExpression":
      return "FunctionExpression" !== e.callee.type && eA(e.callee, t);
    case "ConditionalExpression":
      return eA(e.test, t);
    case "UpdateExpression":
      return !e.prefix && eA(e.argument, t);
    case "BindExpression":
      return e.object && eA(e.object, t);
    case "SequenceExpression":
      return eA(e.expressions[0], t);
    case "ChainExpression":
    case "TSSatisfiesExpression":
    case "TSAsExpression":
    case "TSNonNullExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return eA(e.expression, t);
    default:
      return t(e);
  }
}
var ek = {
  "==": !0,
  "!=": !0,
  "===": !0,
  "!==": !0
};
var eF = {
  "*": !0,
  "/": !0,
  "%": !0
};
var eP = {
  ">>": !0,
  ">>>": !0,
  "<<": !0
};
function eN(e, t) {
  return !(eO(t) !== eO(e) || "**" === e || ek[e] && ek[t] || "%" === t && eF[e] || "%" === e && eF[t] || t !== e && eF[t] && eF[e] || eP[e] && eP[t]);
}
var eI = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((e, t) => e.map(e => [e, t])));
function eO(e) {
  return eI.get(e);
}
var eB = new WeakMap();
function ej(e) {
  if (eB.has(e)) return eB.get(e);
  let t = [];
  e.$$this && t.push(e.$$this);
  Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params);
  e.rest && t.push(e.rest);
  eB.set(e, t);
  return t;
}
var eM = new WeakMap();
function eL(e) {
  if (eM.has(e)) return eM.get(e);
  if ("ChainExpression" === e.type) return eL(e.expression);
  let t = e.$$arguments;
  "ImportExpression" === e.type && (t = [e.source], e.options && t.push(e.options));
  eM.set(e, t);
  return t;
}
function eR(e, t) {
  let {
    node
  } = e;
  if ("ChainExpression" === node.type) return e.call(() => eR(e, t), "expression");
  "ImportExpression" === node.type ? (e.call(e => t(e, 0), "source"), node.options && e.call(e => t(e, 1), "options")) : e.each(t, "arguments");
}
function eJ(e, t) {
  let n = [];
  if ("ChainExpression" === e.type && (e = e.expression, n.push("expression")), "ImportExpression" === e.type) {
    if (0 === t || t === (e.options ? -2 : -1)) return [...n, "source"];
    if (e.options && (1 === t || -1 === t)) return [...n, "options"];
    throw RangeError("Invalid argument index");
  }
  if (t < 0 && (t = e.$$arguments.length + t), t < 0 || t >= e.$$arguments.length) throw RangeError("Invalid argument index");
  return [...n, "arguments", t];
}
function eq(e) {
  return "prettier-ignore" === e.value.trim() && !e.unignore;
}
function eU(e) {
  return e?.prettierIgnore || eW(e, ez.PrettierIgnore);
}
var ez = {
  Leading: 2,
  Trailing: 4,
  Dangling: 8,
  Block: 16,
  Line: 32,
  PrettierIgnore: 64,
  First: 128,
  Last: 256
};
var eK = (e, t) => {
  if ("function" == typeof e && (t = e, e = 0), e || t) return (n, r, i) => !(e & ez.Leading && !n.leading || e & ez.Trailing && !n.trailing || e & ez.Dangling && (n.leading || n.trailing) || e & ez.Block && !J(n) || e & ez.Line && !V(n) || e & ez.First && 0 !== r || e & ez.Last && r !== i.length - 1 || e & ez.PrettierIgnore && !eq(n) || t && !t(n));
};
function eW(e, t, n) {
  if (!w(e?.comments)) return !1;
  let r = eK(t, n);
  return !r || e.comments.some(r);
}
function eV(e, t, n) {
  if (!Array.isArray(e?.comments)) return [];
  let r = eK(t, n);
  return r ? e.comments.filter(r) : e.comments;
}
var e$ = (e, {
  originalText: t
}) => E(t, I(e));
function eH(e) {
  return ef(e) || "NewExpression" === e.type || "ImportExpression" === e.type;
}
function eG(e) {
  return e && ("ObjectProperty" === e.type || "Property" === e.type && !eo(e));
}
var eX = R(["TSAsExpression", "TSSatisfiesExpression", "AsExpression", "AsConstExpression", "SatisfiesExpression"]);
var eY = R(["UnionTypeAnnotation", "TSUnionType"]);
var eQ = R(["IntersectionTypeAnnotation", "TSIntersectionType"]);
var eZ = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]);
var e0 = e => {
  for (let t of e.quasis) delete t.value;
};
function e1(e, t, n) {
  var r;
  var i;
  if ("Program" === e.type && delete t.sourceType, ("BigIntLiteral" === e.type || "BigIntLiteralTypeAnnotation" === e.type) && e.value && (t.value = e.value.toLowerCase()), ("BigIntLiteral" === e.type || "Literal" === e.type) && e.bigint && (t.bigint = e.bigint.toLowerCase()), "EmptyStatement" === e.type || "JSXText" === e.type || "JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;
  if (("Property" === e.type || "ObjectProperty" === e.type || "MethodDefinition" === e.type || "ClassProperty" === e.type || "ClassMethod" === e.type || "PropertyDefinition" === e.type || "TSDeclareMethod" === e.type || "TSPropertySignature" === e.type || "ObjectTypeProperty" === e.type || "ImportAttribute" === e.type) && e.key && !e.computed) {
    let {
      key
    } = e;
    Q(key) || X(key) ? t.key = String(key.value) : "Identifier" === key.type && (t.key = key.name);
  }
  if ("JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(e => "JSXAttribute" === e.type && "jsx" === e.name.name)) for (let {
    type,
    expression
  } of t.children) "JSXExpressionContainer" === type && "TemplateLiteral" === expression.type && e0(expression);
  "JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && e0(t.value.expression);
  "JSXAttribute" === e.type && (null == (r = e.value) ? void 0 : r.type) === "Literal" && /["']|&quot;|&apos;/u.test(e.value.value) && (t.value.value = p(!1, e.value.value, /["']|&quot;|&apos;/gu, '"'));
  let a = e.expression || e.callee;
  if ("Decorator" === e.type && "CallExpression" === a.type && "Component" === a.callee.name && 1 === a.$$arguments.length) {
    let n = e.expression.$$arguments[0].properties;
    for (let [e, r] of t.expression.$$arguments[0].properties.entries()) switch (n[e].key.name) {
      case "styles":
        H(r.value) && e0(r.value.elements[0]);
        break;
      case "template":
        "TemplateLiteral" === r.value.type && e0(r.value);
    }
  }
  "TaggedTemplateExpression" === e.type && ("MemberExpression" === e.tag.type || "Identifier" === e.tag.type && ("gql" === e.tag.name || "graphql" === e.tag.name || "css" === e.tag.name || "md" === e.tag.name || "markdown" === e.tag.name || "html" === e.tag.name) || "CallExpression" === e.tag.type) && e0(t.quasi);
  "TemplateLiteral" === e.type && (null != (i = e.leadingComments) && i.some(e => J(e) && ["GraphQL", "HTML"].some(t => e.value === ` ${t} `)) || "CallExpression" === n.type && "graphql" === n.callee.name || !e.leadingComments) && e0(t);
  "ChainExpression" === e.type && "TSNonNullExpression" === e.expression.type && (t.type = "TSNonNullExpression", t.expression.type = "ChainExpression");
  "TSMappedType" === e.type && (delete t.key, delete t.constraint);
  "TSEnumDeclaration" === e.type && delete t.body;
}
e1.ignoredProperties = eZ;
var e2 = e1;
var e3 = "string";
var e6 = "array";
var e4 = "cursor";
var e8 = "indent";
var e5 = "align";
var e7 = "trim";
var e9 = "group";
var te = "fill";
var tt = "if-break";
var tn = "indent-if-break";
var tr = "line-suffix";
var ti = "line-suffix-boundary";
var ta = "line";
var to = "label";
var ts = "break-parent";
var t_ = new Set([e4, e8, e5, e7, e9, te, tt, tn, tr, ti, ta, to, ts]);
var tl = function (e) {
  if ("string" == typeof e) return e3;
  if (Array.isArray(e)) return e6;
  if (!e) return;
  let {
    type
  } = e;
  if (t_.has(type)) return type;
};
var tu = e => new Intl.ListFormat("en-US", {
  type: "disjunction"
}).format(e);
var tc = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(function (e) {
      let t = null === e ? "null" : typeof e;
      if ("string" !== t && "object" !== t) return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if (tl(e)) throw Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if ("[object Object]" !== n) return `Unexpected doc '${n}'.`;
      let r = tu([...t_].map(e => `'${e}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }(e));
    this.doc = e;
  }
};
var tp = {};
var td = function (e, t, n, r) {
  let i = [e];
  for (; i.length > 0;) {
    let e = i.pop();
    if (e === tp) {
      n(i.pop());
      continue;
    }
    n && i.push(e, tp);
    let a = tl(e);
    if (!a) throw new tc(e);
    if (t?.(e) !== !1) switch (a) {
      case e6:
      case te:
        {
          let t = a === e6 ? e : e.parts;
          for (function () {
            let e = t.length;
            let n = e - 1;
          }(); n >= 0; --n) i.push(t[n]);
          break;
        }
      case tt:
        i.push(e.flatContents, e.breakContents);
        break;
      case e9:
        if (r && e.expandedStates) for (function () {
          let t = e.expandedStates.length;
          let n = t - 1;
        }(); n >= 0; --n) i.push(e.expandedStates[n]);else i.push(e.contents);
        break;
      case e5:
      case e8:
      case tn:
      case to:
      case tr:
        i.push(e.contents);
        break;
      case e3:
      case e4:
      case e7:
      case ti:
      case ta:
      case ts:
        break;
      default:
        throw new tc(e);
    }
  }
};
var tm = () => {};
function tf(e) {
  tm(e);
  return {
    type: e8,
    contents: e
  };
}
function th(e, t) {
  tm(t);
  return {
    type: e5,
    contents: t,
    n: e
  };
}
function ty(e, t = {}) {
  tm(e);
  tm(t.expandedStates, !0);
  return {
    type: e9,
    id: t.id,
    contents: e,
    break: !!t.shouldBreak,
    expandedStates: t.expandedStates
  };
}
function tg(e, t) {
  return ty(e[0], {
    ...t,
    expandedStates: e
  });
}
function tb(e) {
  tm(e);
  return {
    type: te,
    parts: e
  };
}
function tD(e, t = "", n = {}) {
  tm(e);
  "" !== t && tm(t);
  return {
    type: tt,
    breakContents: e,
    flatContents: t,
    groupId: n.groupId
  };
}
function tx(e, t) {
  tm(e);
  return {
    type: tn,
    contents: e,
    groupId: t.groupId,
    negate: t.negate
  };
}
function tv(e) {
  tm(e);
  return {
    type: tr,
    contents: e
  };
}
var tT = {
  type: ti
};
var tS = {
  type: ts
};
var tC = {
  type: ta,
  hard: !0
};
var tE = {
  type: ta
};
var tw = {
  type: ta,
  soft: !0
};
var tA = [tC, tS];
var tk = [{
  type: ta,
  hard: !0,
  literal: !0
}, tS];
var tF = {
  type: e4
};
function tP(e, t) {
  tm(e);
  tm(t);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    0 !== r && n.push(e);
    n.push(t[r]);
  }
  return n;
}
function tN(e, t) {
  tm(t);
  return e ? {
    type: to,
    label: e,
    contents: t
  } : t;
}
function tI(e, t) {
  if ("string" == typeof e) return t(e);
  let n = new Map();
  return function e(r) {
    if (n.has(r)) return n.get(r);
    let i = function (n) {
      switch (tl(n)) {
        case e6:
          return t(n.map(e));
        case te:
          return t({
            ...n,
            parts: n.parts.map(e)
          });
        case tt:
          return t({
            ...n,
            breakContents: e(n.breakContents),
            flatContents: e(n.flatContents)
          });
        case e9:
          {
            let {
              expandedStates,
              contents
            } = n;
            i = expandedStates ? (r = expandedStates.map(e))[0] : e(contents);
            return t({
              ...n,
              contents,
              expandedStates
            });
          }
        case e5:
        case e8:
        case tn:
        case to:
        case tr:
          return t({
            ...n,
            contents: e(n.contents)
          });
        case e3:
        case e4:
        case e7:
        case ti:
        case ta:
        case ts:
          return t(n);
        default:
          throw new tc(n);
      }
    }(r);
    n.set(r, i);
    return i;
  }(e);
}
function tO(e, t, n) {
  let r = n;
  let i = !1;
  td(e, function (e) {
    if (i) return !1;
    let n = t(e);
    void 0 !== n && (i = !0, r = n);
  });
  return r;
}
function tB(e) {
  if (e.type === e9 && e.$$break || e.type === ta && e.hard || e.type === ts) return !0;
}
function tj(e) {
  return tO(e, tB, !1);
}
function tM(e) {
  if (e.length > 0) {
    let t = d(!1, e, -1);
    t.expandedStates || t.$$break || (t.$$break = "propagated");
  }
  return null;
}
function tL(e) {
  return e.type !== ta || e.hard ? e.type === tt ? e.flatContents : e : e.soft ? "" : " ";
}
function tR(e) {
  return tI(e, e => function (e) {
    switch (tl(e)) {
      case te:
        if (e.parts.every(e => "" === e)) return "";
        break;
      case e9:
        if (!e.contents && !e.id && !e.$$break && !e.expandedStates) return "";
        if (e.contents.type === e9 && e.contents.id === e.id && e.contents.$$break === e.$$break && e.contents.expandedStates === e.expandedStates) return e.contents;
        break;
      case e5:
      case e8:
      case tn:
      case tr:
        if (!e.contents) return "";
        break;
      case tt:
        if (!e.flatContents && !e.breakContents) return "";
        break;
      case e6:
        {
          let t = [];
          for (let n of e) {
            if (!n) continue;
            let [e, ...r] = Array.isArray(n) ? n : [n];
            "string" == typeof e && "string" == typeof d(!1, t, -1) ? t[t.length - 1] += e : t.push(e);
            t.push(...r);
          }
          return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
        }
      case e3:
      case e4:
      case e7:
      case ti:
      case ta:
      case to:
      case ts:
        break;
      default:
        throw new tc(e);
    }
    return e;
  }(e));
}
function tJ(e, t = tk) {
  return tI(e, e => "string" == typeof e ? tP(t, e.split(`
`)) : e);
}
function tq(e) {
  if (e.type === ta) return !0;
}
function tU(e, t) {
  return e.type === to ? {
    ...e,
    contents: t(e.contents)
  } : t(e);
}
var tz = function (e) {
  let t = `*${e.value}*`.split(`
`);
  return t.length > 1 && t.every(e => "*" === e.trimStart()[0]);
};
function tK(e, t) {
  let n = e.node;
  if (V(n)) return t.originalText.slice(N(n), I(n)).trimEnd();
  if (J(n)) {
    let e;
    return tz(n) ? ["/*", tP(tA, (e = n.value.split(`
`)).map((t, n) => 0 === n ? t.trimEnd() : " " + (n < e.length - 1 ? t.trim() : t.trimStart()))), "*/"] : ["/*", tJ(n.value), "*/"];
  }
  throw Error("Not a comment: " + JSON.stringify(n));
}
var tW = {};
function tV(e, t) {
  let n;
  let r;
  (e.comments ?? (e.comments = [])).push(t);
  t.printed = !1;
  t.nodeDescription = (n = e.type || e.kind || "(unknown type)", (r = String(e.name || e.id && ("object" == typeof e.id ? e.id.name : e.id) || e.key && ("object" == typeof e.key ? e.key.name : e.key) || e.value && ("object" == typeof e.value ? "" : String(e.value)) || e.operator || "")).length > 20 && (r = r.slice(0, 19) + "\u2026"), n + (r ? " " + r : ""));
}
function t$(e, t) {
  t.leading = !0;
  t.trailing = !1;
  tV(e, t);
}
function tH(e, t, n) {
  t.leading = !1;
  t.trailing = !1;
  n && (t.marker = n);
  tV(e, t);
}
function tG(e, t) {
  t.leading = !1;
  t.trailing = !0;
  tV(e, t);
}
a(tW, {
  endOfLine: () => t0,
  ownLine: () => tZ,
  remaining: () => t1
});
var tX = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = b(e, r);
    r = S(e, r);
    r = C(e, r);
    r = v(e, r);
  }
  return r;
};
var tY = function (e, t) {
  let n = tX(e, t);
  return !1 === n ? "" : e.charAt(n);
};
var tQ = function (e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
};
function tZ(e) {
  return [nC, ne, nc, nu, t7, t4, t8, t5, nr, ng, nf, ny, nb, nD, na, np, nd, t9, nk].some(t => t(e));
}
function t0(e) {
  return [t6, nc, ne, nb, t4, t8, t5, nr, np, nm, nh, ny, nT, nd, nw, nA, nF].some(t => t(e));
}
function t1(e) {
  return [nC, t4, t8, nt, nl, na, ny, n_, ns, nE, nd, nS].some(t => t(e));
}
function t2(e, t) {
  let n = (e.body || e.properties).find(({
    type: e
  }) => "EmptyStatement" !== e);
  n ? t$(n, t) : tH(e, t);
}
function t3(e, t) {
  "BlockStatement" === e.type ? t2(e, t) : t$(e, t);
}
function t6({
  comment: e,
  followingNode: t
}) {
  var n;
  return !!(t && J(n = e) && "*" === n.value[0] && /@(?:type|satisfies)\b/u.test(n.value)) && (t$(t, e), !0);
}
function t4({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  if (n?.type !== "IfStatement" || !r) return !1;
  if (")" === tY(i, I(e))) {
    tG(t, e);
    return !0;
  }
  if (t === n.consequent && r === n.alternate) {
    let r = tX(i, I(n.consequent));
    if (N(e) < r || "BlockStatement" === n.alternate.type) {
      if ("BlockStatement" === t.type) tG(t, e);else {
        let r = V(e) || e.loc.start.line === e.loc.end.line;
        let i = e.loc.start.line === t.loc.start.line;
        r && i ? tG(t, e) : tH(n, e);
      }
      return !0;
    }
  }
  return "BlockStatement" === r.type ? (t2(r, e), !0) : "IfStatement" === r.type ? (t3(r.consequent, e), !0) : n.consequent === r && (t$(r, e), !0);
}
function t8({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  return n?.type === "WhileStatement" && !!r && (")" === tY(i, I(e)) ? (tG(t, e), !0) : "BlockStatement" === r.type ? (t2(r, e), !0) : n.body === r && (t$(r, e), !0));
}
function t5({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return (n?.type === "TryStatement" || n?.type === "CatchClause") && !!r && ("CatchClause" === n.type && t ? (tG(t, e), !0) : "BlockStatement" === r.type ? (t2(r, e), !0) : "TryStatement" === r.type ? (t3(r.finalizer, e), !0) : "CatchClause" === r.type && (t3(r.body, e), !0));
}
function t7({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  return !!eh(t) && n?.type === "Identifier" && (t$(t, e), !0);
}
function t9({
  comment: e,
  enclosingNode: t,
  followingNode: n,
  options: r
}) {
  return !!r.experimentalTernaries && (t?.type === "ConditionalExpression" || t?.type === "ConditionalTypeAnnotation" || t?.type === "TSConditionalType") && (n?.type === "ConditionalExpression" || n?.type === "ConditionalTypeAnnotation" || n?.type === "TSConditionalType") && (tH(t, e), !0);
}
function ne({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i,
  options: a
}) {
  let o = t && !tQ(i, I(t), N(e));
  return (!t || !o) && (n?.type === "ConditionalExpression" || n?.type === "ConditionalTypeAnnotation" || n?.type === "TSConditionalType") && !!r && (a.experimentalTernaries && n.alternate === r && !(J(e) && !tQ(a.originalText, N(e), I(e))) ? tH(n, e) : t$(r, e), !0);
}
function nt({
  comment: e,
  precedingNode: t,
  enclosingNode: n
}) {
  return !!eG(n) && !!n.shorthand && n.key === t && "AssignmentPattern" === n.value.type && (tG(n.value.left, e), !0);
}
var nn = new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
function nr({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  if (nn.has(n?.type)) {
    if (w(n.decorators) && r?.type !== "Decorator") {
      tG(d(!1, n.decorators, -1), e);
      return !0;
    }
    if (n.body && r === n.body) {
      t2(n.body, e);
      return !0;
    }
    if (r) {
      if (n.superClass && r === n.superClass && t && (t === n.id || t === n.typeParameters)) {
        tG(t, e);
        return !0;
      }
      for (let i of ["implements", "extends", "mixins"]) if (n[i] && r === n[i][0]) {
        t && (t === n.id || t === n.typeParameters || t === n.superClass) ? tG(t, e) : tH(n, e, i);
        return !0;
      }
    }
  }
  return !1;
}
var ni = new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "TSParameterProperty"]);
function na({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  text: r
}) {
  return n && t && "(" === tY(r, I(e)) && ("Property" === n.type || "TSDeclareMethod" === n.type || "TSAbstractMethodDefinition" === n.type) && "Identifier" === t.type && n.key === t && ":" !== tY(r, I(t)) ? (tG(t, e), !0) : !!(t?.type === "Decorator" && ni.has(n?.type) && (V(e) || "ownLine" === e.placement)) && (tG(t, e), !0);
}
var no = new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
function ns({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  text: r
}) {
  return "(" === tY(r, I(e)) && !!(t && no.has(n?.type)) && (tG(t, e), !0);
}
function n_({
  comment: e,
  enclosingNode: t,
  text: n
}) {
  if (t?.type !== "ArrowFunctionExpression") return !1;
  let r = tX(n, I(e));
  return !1 !== r && "=>" === n.slice(r, r + 2) && (tH(t, e), !0);
}
function nl({
  comment: e,
  enclosingNode: t,
  text: n
}) {
  return ")" === tY(n, I(e)) && (t && (nP(t) && 0 === ej(t).length || eH(t) && 0 === eL(t).length) ? (tH(t, e), !0) : (t?.type === "MethodDefinition" || t?.type === "TSAbstractMethodDefinition") && 0 === ej(t.value).length && (tH(t.value, e), !0));
}
function nu({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  return t?.type === "ComponentTypeParameter" && (n?.type === "DeclareComponent" || n?.type === "ComponentTypeAnnotation") && r?.type !== "ComponentTypeParameter" ? (tG(t, e), !0) : (t?.type === "ComponentParameter" || t?.type === "RestElement") && n?.type === "ComponentDeclaration" && ")" === tY(i, I(e)) && (tG(t, e), !0);
}
function nc({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  return t?.type === "FunctionTypeParam" && n?.type === "FunctionTypeAnnotation" && r?.type !== "FunctionTypeParam" ? (tG(t, e), !0) : (t?.type === "Identifier" || t?.type === "AssignmentPattern" || t?.type === "ObjectPattern" || t?.type === "ArrayPattern" || t?.type === "RestElement" || t?.type === "TSParameterProperty") && nP(n) && ")" === tY(i, I(e)) ? (tG(t, e), !0) : !J(e) && (n?.type === "FunctionDeclaration" || n?.type === "FunctionExpression" || n?.type === "ObjectMethod") && r?.type === "BlockStatement" && n.body === r && tX(i, I(e)) === N(r) && (t2(r, e), !0);
}
function np({
  comment: e,
  enclosingNode: t
}) {
  return t?.type === "LabeledStatement" && (t$(t, e), !0);
}
function nd({
  comment: e,
  enclosingNode: t
}) {
  return (t?.type === "ContinueStatement" || t?.type === "BreakStatement") && !t.label && (tG(t, e), !0);
}
function nm({
  comment: e,
  precedingNode: t,
  enclosingNode: n
}) {
  return !!ef(n) && !!t && n.callee === t && n.$$arguments.length > 0 && (t$(n.$$arguments[0], e), !0);
}
function nf({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return eY(n) ? (eq(e) && (r.prettierIgnore = !0, e.unignore = !0), !!t && (tG(t, e), !0)) : (eY(r) && eq(e) && (r.types[0].prettierIgnore = !0, e.unignore = !0), !1);
}
function nh({
  comment: e,
  enclosingNode: t
}) {
  return !!eG(t) && (t$(t, e), !0);
}
function ny({
  comment: e,
  enclosingNode: t,
  ast: n,
  isLastComment: r
}) {
  var i;
  return (null == (i = n?.body) ? void 0 : i.length) === 0 ? (r ? tH(n, e) : t$(n, e), !0) : !(t?.type !== "Program" || 0 !== t.body.length || w(t.directives)) && (r ? tH(t, e) : t$(t, e), !0);
}
function ng({
  comment: e,
  enclosingNode: t
}) {
  return (t?.type === "ForInStatement" || t?.type === "ForOfStatement") && (t$(t, e), !0);
}
function nb({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  text: r
}) {
  if (n?.type === "ImportSpecifier" || n?.type === "ExportSpecifier") {
    t$(n, e);
    return !0;
  }
  let i = t?.type === "ImportSpecifier" && n?.type === "ImportDeclaration";
  let a = t?.type === "ExportSpecifier" && n?.type === "ExportNamedDeclaration";
  return !!((i || a) && T(r, I(e))) && (tG(t, e), !0);
}
function nD({
  comment: e,
  enclosingNode: t
}) {
  return t?.type === "AssignmentPattern" && (t$(t, e), !0);
}
var nx = new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]);
var nv = new Set(["ObjectExpression", "RecordExpression", "ArrayExpression", "TupleExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
function nT({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  return !!(nx.has(t?.type) && n && (nv.has(n.type) || J(e))) && (t$(n, e), !0);
}
function nS({
  comment: e,
  enclosingNode: t,
  followingNode: n,
  text: r
}) {
  return !n && (t?.type === "TSMethodSignature" || t?.type === "TSDeclareFunction" || t?.type === "TSAbstractMethodDefinition") && ";" === tY(r, I(e)) && (tG(t, e), !0);
}
function nC({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  if (eq(e) && t?.type === "TSMappedType" && n?.type === "TSTypeParameter" && n.constraint) {
    t.prettierIgnore = !0;
    e.unignore = !0;
    return !0;
  }
}
function nE({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return n?.type === "TSMappedType" && (r?.type === "TSTypeParameter" && r.name ? (t$(r.name, e), !0) : t?.type === "TSTypeParameter" && !!t.constraint && (tG(t.constraint, e), !0));
}
function nw({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  return !!t && "SwitchCase" === t.type && !t.test && !!n && n === t.consequent[0] && ("BlockStatement" === n.type && V(e) ? t2(n, e) : tH(t, e), !0);
}
function nA({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return !!(eY(t) && (("TSArrayType" === n.type || "ArrayTypeAnnotation" === n.type) && !r || eQ(n))) && (tG(d(!1, t.types, -1), e), !0);
}
function nk({
  comment: e,
  enclosingNode: t,
  precedingNode: n,
  followingNode: r
}) {
  if ((t?.type === "ObjectPattern" || t?.type === "ArrayPattern") && r?.type === "TSTypeAnnotation") {
    n ? tG(n, e) : tH(t, e);
    return !0;
  }
}
function nF({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  var i;
  if (!r && n?.type === "UnaryExpression" && (t?.type === "LogicalExpression" || t?.type === "BinaryExpression")) {
    let r = (null == (i = n.argument.loc) ? void 0 : i.start.line) !== t.right.loc.start.line;
    let a = V(e) || e.loc.start.line === e.loc.end.line;
    let o = e.loc.start.line === t.right.loc.start.line;
    if (r && a && o) {
      tG(t.right, e);
      return !0;
    }
  }
  return !1;
}
var nP = R(["ArrowFunctionExpression", "FunctionExpression", "FunctionDeclaration", "ObjectMethod", "ClassMethod", "TSDeclareFunction", "TSCallSignatureDeclaration", "TSConstructSignatureDeclaration", "TSMethodSignature", "TSConstructorType", "TSFunctionType", "TSDeclareMethod"]);
var nN = new Set(["EmptyStatement", "TemplateElement", "TSEmptyBodyFunctionExpression", "ChainExpression"]);
function nI(e) {
  return !nN.has(e.type);
}
function nO(e, t) {
  var n;
  if (("typescript" === t.parser || "flow" === t.parser || "acorn" === t.parser || "espree" === t.parser || "meriyah" === t.parser || "__babel_estree" === t.parser) && "MethodDefinition" === e.type && (null == (n = e.value) ? void 0 : n.type) === "FunctionExpression" && 0 === ej(e.value).length && !e.value.returnType && !w(e.value.typeParameters) && e.value.body) return [...(e.decorators || []), e.key, e.value.body];
}
function nB(e) {
  let {
    node,
    parent
  } = e;
  return (ea(node) || parent && ("JSXSpreadAttribute" === parent.type || "JSXSpreadChild" === parent.type || eY(parent) || ("ClassDeclaration" === parent.type || "ClassExpression" === parent.type) && parent.superClass === node)) && (!eU(node) || eY(parent));
}
function nj(e, {
  parser: t
}) {
  if ("flow" === t || "babel-flow" === t) return "" === (e = p(!1, e, /[\s(]/gu, "")) || "/*" === e || "/*::" === e;
}
var nM = Symbol("MODE_BREAK");
var nL = Symbol("MODE_FLAT");
var nR = Symbol("cursor");
var nJ = Symbol("DOC_FILL_PRINTED_LENGTH");
function nq() {
  return {
    value: "",
    length: 0,
    queue: []
  };
}
function nU(e, t, n) {
  let r = "dedent" === t.type ? e.queue.slice(0, -1) : [...e.queue, t];
  let i = "";
  let a = 0;
  let o = 0;
  let s = 0;
  for (let e of r) switch (e.type) {
    case "indent":
      u();
      n.useTabs ? _(1) : l(n.tabWidth);
      break;
    case "stringAlign":
      u();
      i += e.n;
      a += e.n.length;
      break;
    case "numberAlign":
      o += 1;
      s += e.n;
      break;
    default:
      throw Error(`Unexpected type '${e.type}'`);
  }
  c();
  return {
    ...e,
    value: i,
    length: a,
    queue: r
  };
  function _(e) {
    i += "	".repeat(e);
    a += n.tabWidth * e;
  }
  function l(e) {
    i += " ".repeat(e);
    a += e;
  }
  function u() {
    n.useTabs ? (o > 0 && _(o), o = 0, s = 0) : c();
  }
  function c() {
    s > 0 && l(s);
    o = 0;
    s = 0;
  }
}
function nz(e) {
  let t = 0;
  let n = 0;
  let r = e.length;
  e: for (; r--;) {
    let i = e[r];
    if (i === nR) {
      n++;
      continue;
    }
    for (let n = i.length - 1; n >= 0; n--) {
      let a = i[n];
      if (" " === a || "	" === a) t++;else {
        e[r] = i.slice(0, n + 1);
        break e;
      }
    }
  }
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0;) e.push(nR);
  return t;
}
function nK(e, t, n, r, i, a) {
  if (n === Number.POSITIVE_INFINITY) return !0;
  let o = t.length;
  let s = [e];
  let _ = [];
  for (; n >= 0;) {
    if (0 === s.length) {
      if (0 === o) return !0;
      s.push(t[--o]);
      continue;
    }
    let {
      mode,
      doc
    } = s.pop();
    let u = tl(doc);
    switch (u) {
      case e3:
        _.push(doc);
        n -= y(doc);
        break;
      case e6:
      case te:
        {
          let t = u === e6 ? doc : doc.parts;
          let n = doc[nJ] ?? 0;
          for (let r = t.length - 1; r >= n; r--) s.push({
            mode,
            doc: t[r]
          });
          break;
        }
      case e8:
      case e5:
      case tn:
      case to:
        s.push({
          mode,
          doc: doc.contents
        });
        break;
      case e7:
        n += nz(_);
        break;
      case e9:
        {
          if (a && doc.$$break) return !1;
          let t = doc.$$break ? nM : mode;
          let n = doc.expandedStates && t === nM ? d(!1, doc.expandedStates, -1) : doc.contents;
          s.push({
            mode: t,
            doc: n
          });
          break;
        }
      case tt:
        {
          let t = (doc.groupId ? i[doc.groupId] || nL : mode) === nM ? doc.breakContents : doc.flatContents;
          t && s.push({
            mode,
            doc: t
          });
          break;
        }
      case ta:
        if (mode === nM || doc.hard) return !0;
        doc.soft || (_.push(" "), n--);
        break;
      case tr:
        r = !0;
        break;
      case ti:
        if (r) return !1;
    }
  }
  return !1;
}
function nW(e, t) {
  var n;
  let r;
  let i;
  let a = {};
  let o = t.printWidth;
  let s = function (e) {
    switch (e) {
      case "cr":
        return "\r";
      case "crlf":
        return `\r
`;
      default:
        return `
`;
    }
  }(t.endOfLine);
  let _ = 0;
  let l = [{
    ind: nq(),
    mode: nM,
    doc: e
  }];
  let u = [];
  let c = !1;
  let m = [];
  let f = 0;
  for (r = new Set(), i = [], td(e, function (e) {
    if (e.type === ts && tM(i), e.type === e9) {
      if (i.push(e), r.has(e)) return !1;
      r.add(e);
    }
  }, function (e) {
    e.type === e9 && i.pop().$$break && tM(i);
  }, !0); l.length > 0;) {
    let {
      ind,
      mode,
      doc
    } = l.pop();
    switch (tl(doc)) {
      case e3:
        {
          let e = s !== `
` ? p(!1, doc, `
`, s) : doc;
          u.push(e);
          l.length > 0 && (_ += y(e));
          break;
        }
      case e6:
        for (let t = doc.length - 1; t >= 0; t--) l.push({
          ind,
          mode,
          doc: doc[t]
        });
        break;
      case e4:
        if (f >= 2) throw Error("There are too many 'cursor' in doc.");
        u.push(nR);
        f++;
        break;
      case e8:
        l.push({
          ind: nU(ind, {
            type: "indent"
          }, t),
          mode,
          doc: doc.contents
        });
        break;
      case e5:
        l.push({
          ind: (n = doc.n) === Number.NEGATIVE_INFINITY ? ind.root || nq() : n < 0 ? nU(ind, {
            type: "dedent"
          }, t) : n ? "root" === n.type ? {
            ...ind,
            root: ind
          } : nU(ind, {
            type: "string" == typeof n ? "stringAlign" : "numberAlign",
            n: n
          }, t) : ind,
          mode,
          doc: doc.contents
        });
        break;
      case e7:
        _ -= nz(u);
        break;
      case e9:
        switch (mode) {
          case nL:
            if (!c) {
              l.push({
                ind,
                mode: doc.$$break ? nM : nL,
                doc: doc.contents
              });
              break;
            }
          case nM:
            {
              c = !1;
              let t = {
                ind,
                mode: nL,
                doc: doc.contents
              };
              let n = o - _;
              let r = m.length > 0;
              if (!doc.$$break && nK(t, l, n, r, a)) l.push(t);else if (doc.expandedStates) {
                let t = d(!1, doc.expandedStates, -1);
                if (doc.$$break) l.push({
                  ind,
                  mode: nM,
                  doc: t
                });else for (let o = 1; o < doc.expandedStates.length + 1; o++) if (o >= doc.expandedStates.length) {
                  l.push({
                    ind,
                    mode: nM,
                    doc: t
                  });
                  break;
                } else {
                  let t = {
                    ind,
                    mode: nL,
                    doc: doc.expandedStates[o]
                  };
                  if (nK(t, l, n, r, a)) {
                    l.push(t);
                    break;
                  }
                }
              } else l.push({
                ind,
                mode: nM,
                doc: doc.contents
              });
            }
        }
        doc.id && (a[doc.id] = d(!1, l, -1).mode);
        break;
      case te:
        {
          let t = o - _;
          let n = doc[nJ] ?? 0;
          let {
            parts
          } = doc;
          let u = parts.length - n;
          if (0 === u) break;
          let c = parts[n + 0];
          let p = parts[n + 1];
          let d = {
            ind,
            mode: nL,
            doc: c
          };
          let f = {
            ind,
            mode: nM,
            doc: c
          };
          let h = nK(d, [], t, m.length > 0, a, !0);
          if (1 === u) {
            h ? l.push(d) : l.push(f);
            break;
          }
          let y = {
            ind,
            mode: nL,
            doc: p
          };
          let g = {
            ind,
            mode: nM,
            doc: p
          };
          if (2 === u) {
            h ? l.push(y, d) : l.push(g, f);
            break;
          }
          let b = parts[n + 2];
          let D = {
            ind,
            mode,
            doc: {
              ...doc,
              [nJ]: n + 2
            }
          };
          nK({
            ind,
            mode: nL,
            doc: [c, p, b]
          }, [], t, m.length > 0, a, !0) ? l.push(D, y, d) : h ? l.push(D, g, d) : l.push(D, g, f);
          break;
        }
      case tt:
      case tn:
        {
          let t = doc.groupId ? a[doc.groupId] : mode;
          if (t === nM) {
            let t = doc.type === tt ? doc.breakContents : doc.negate ? doc.contents : tf(doc.contents);
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          if (t === nL) {
            let t = doc.type === tt ? doc.flatContents : doc.negate ? tf(doc.contents) : doc.contents;
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          break;
        }
      case tr:
        m.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case ti:
        m.length > 0 && l.push({
          ind,
          mode,
          doc: tC
        });
        break;
      case ta:
        switch (mode) {
          case nL:
            if (doc.hard) c = !0;else {
              doc.soft || (u.push(" "), _ += 1);
              break;
            }
          case nM:
            if (m.length > 0) {
              l.push({
                ind,
                mode,
                doc
              }, ...m.reverse());
              m.length = 0;
              break;
            }
            doc.literal ? ind.root ? (u.push(s, ind.root.value), _ = ind.root.length) : (u.push(s), _ = 0) : (_ -= nz(u), u.push(s + ind.value), _ = ind.length);
        }
        break;
      case to:
        l.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case ts:
        break;
      default:
        throw new tc(doc);
    }
    0 === l.length && m.length > 0 && (l.push(...m.reverse()), m.length = 0);
  }
  let h = u.indexOf(nR);
  if (-1 !== h) {
    let e = u.indexOf(nR, h + 1);
    if (-1 === e) return {
      formatted: u.filter(e => e !== nR).join("")
    };
    let t = u.slice(0, h).join("");
    let n = u.slice(h + 1, e).join("");
    return {
      formatted: t + n + u.slice(e + 1).join(""),
      cursorNodeStart: t.length,
      cursorNodeText: n
    };
  }
  return {
    formatted: u.join("")
  };
}
var nV = function (e, t, n = 0) {
  let r = 0;
  for (let i = n; i < e.length; ++i) "	" === e[i] ? r = r + t - r % t : r++;
  return r;
};
var n$ = function (e, t) {
  let n = e.lastIndexOf(`
`);
  return -1 === n ? 0 : nV(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
};
function nH(e, t, n) {
  let {
    node
  } = e;
  if ("TemplateLiteral" === node.type && function ({
    node: e,
    parent: t
  }) {
    let n = /^[fx]?(?:describe|it|test)$/u;
    return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name));
  }(e)) {
    let r = function (e, t, n) {
      let {
        node: _node
      } = e;
      let i = _node.quasis[0].value.raw.trim().split(/\s*\|\s*/u);
      if (i.length > 1 || i.some(e => e.length > 0)) {
        t.__inJestEach = !0;
        let a = e.map(n, "expressions");
        t.__inJestEach = !1;
        let o = [];
        let s = a.map(e => "${" + nW(e, {
          ...t,
          printWidth: Number.POSITIVE_INFINITY,
          endOfLine: "lf"
        }).formatted + "}");
        let _ = [{
          hasLineBreak: !1,
          cells: []
        }];
        for (let e = 1; e < _node.quasis.length; e++) {
          let t = d(!1, _, -1);
          let n = s[e - 1];
          t.cells.push(n);
          n.includes(`
`) && (t.hasLineBreak = !0);
          _node.quasis[e].value.raw.includes(`
`) && _.push({
            hasLineBreak: !1,
            cells: []
          });
        }
        let l = Array.from({
          length: Math.max(i.length, ..._.map(e => e.cells.length))
        }).fill(0);
        let u = [{
          cells: i
        }, ..._.filter(e => e.cells.length > 0)];
        for (let {
          cells
        } of u.filter(e => !e.hasLineBreak)) for (let [t, n] of cells.entries()) l[t] = Math.max(l[t], y(n));
        o.push(tT, "`", tf([tA, tP(tA, u.map(e => tP(" | ", e.cells.map((t, n) => e.hasLineBreak ? t : t + " ".repeat(l[n] - y(t))))))]), tA, "`");
        return o;
      }
    }(e, n, t);
    if (r) return r;
  }
  let i = "expressions";
  "TSTemplateLiteralType" === node.type && (i = "types");
  let a = [];
  let o = e.map(t, i);
  a.push(tT, "`");
  let s = 0;
  e.each(({
    index: e,
    node: _
  }) => {
    if (a.push(t()), _.tail) return;
    let {
      tabWidth
    } = n;
    let u = _.value.raw;
    let c = u.includes(`
`) ? n$(u, tabWidth) : s;
    s = c;
    let p = o[e];
    let d = node[i][e];
    let m = tQ(n.originalText, I(_), N(node.quasis[e + 1]));
    if (!m) {
      let e = nW(p, {
        ...n,
        printWidth: Number.POSITIVE_INFINITY
      }).formatted;
      e.includes(`
`) ? m = !0 : p = e;
    }
    m && (eW(d) || "Identifier" === d.type || eh(d) || "ConditionalExpression" === d.type || "SequenceExpression" === d.type || eX(d) || e_(d)) && (p = [tf([tw, p]), tw]);
    let f = 0 === c && u.endsWith(`
`) ? th(Number.NEGATIVE_INFINITY, p) : function (e, t, n) {
      tm(e);
      let r = e;
      if (t > 0) {
        for (let e = 0; e < Math.floor(t / n); ++e) r = tf(r);
        r = th(t % n, r);
        r = th(Number.NEGATIVE_INFINITY, r);
      }
      return r;
    }(p, c, tabWidth);
    a.push(ty(["${", f, tT, "}"]));
  }, "quasis");
  a.push("`");
  return a;
}
function nG(e, t) {
  return e.map(e => function (e, t) {
    let {
      node
    } = e;
    let r = t();
    eW(node) && (r = ty([tf([tw, r]), tw]));
    return ["${", r, tT, "}"];
  }(e, t), "expressions");
}
function nX(e, t) {
  return tI(e, e => "string" == typeof e ? t ? p(!1, e, /(\\*)`/gu, "$1$1\\`") : nY(e) : e);
}
function nY(e) {
  return p(!1, e, /([\\`]|\$\{)/gu, String.raw`\$1`);
}
var nQ = [(e, t) => "ObjectExpression" === e.type && "properties" === t, (e, t) => "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t, (e, t) => "Decorator" === e.type && "expression" === t];
function nZ(e, t) {
  return eW(e, ez.Block | ez.Leading, ({
    value: e
  }) => e === ` ${t} `);
}
function n0({
  node: e,
  parent: t
}, n) {
  return nZ(e, n) || ("AsConstExpression" === t.type || "TSAsExpression" === t.type && "TSTypeReference" === t.typeAnnotation.type && "Identifier" === t.typeAnnotation.typeName.type && "const" === t.typeAnnotation.typeName.name) && nZ(t, n) || "ExpressionStatement" === t.type && nZ(t, n);
}
async function n1(e, t, n) {
  let {
    node
  } = n;
  let i = node.quasis.map(e => e.value.raw);
  let a = 0;
  let o = i.reduce((e, t, n) => 0 === n ? t : e + "@prettier-placeholder-" + a++ + "-id" + t, "");
  let s = function (e, t) {
    if (!w(t)) return e;
    let n = 0;
    let r = tI(tR(e), e => "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/u).map((e, r) => r % 2 == 0 ? tJ(e) : (n++, t[e])) : e);
    return t.length === n ? r : null;
  }(await e(o, {
    parser: "scss"
  }), nG(n, t));
  if (!s) throw Error("Couldn't insert all the expressions");
  return ["`", tf([tA, s]), tw, "`"];
}
function n2(e) {
  return "Identifier" === e.type && "styled" === e.name;
}
function n3(e) {
  return /^[A-Z]/u.test(e.object.name) && "extend" === e.property.name;
}
var n6 = function (e) {
  let t;
  let n;
  if (function ({
    node: e,
    parent: t,
    grandparent: n
  }) {
    return n && e.quasis && "JSXExpressionContainer" === t.type && "JSXElement" === n.type && "style" === n.openingElement.name.name && n.openingElement.attributes.some(e => "JSXAttribute" === e.type && "jsx" === e.name.name) || t?.type === "TaggedTemplateExpression" && "Identifier" === t.tag.type && "css" === t.tag.name || t?.type === "TaggedTemplateExpression" && "MemberExpression" === t.tag.type && "css" === t.tag.object.name && ("global" === t.tag.property.name || "resolve" === t.tag.property.name);
  }(e) || function ({
    parent: e
  }) {
    if (!e || "TaggedTemplateExpression" !== e.type) return !1;
    let t = "ParenthesizedExpression" === e.tag.type ? e.tag.expression : e.tag;
    switch (t.type) {
      case "MemberExpression":
        return n2(t.object) || n3(t);
      case "CallExpression":
        return n2(t.callee) || "MemberExpression" === t.callee.type && ("MemberExpression" === t.callee.object.type && (n2(t.callee.object.object) || n3(t.callee.object)) || "CallExpression" === t.callee.object.type && n2(t.callee.object.callee));
      case "Identifier":
        return "css" === t.name;
      default:
        return !1;
    }
  }(e) || function ({
    parent: e,
    grandparent: t
  }) {
    return t?.type === "JSXAttribute" && "JSXExpressionContainer" === e.type && "JSXIdentifier" === t.name.type && "css" === t.name.name;
  }(e) || (t = e => "TemplateLiteral" === e.type, n = (e, t) => eG(e) && !e.computed && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t, e.match(t, (e, t) => H(e) && "elements" === t, n, ...nQ) || e.match(t, n, ...nQ))) return n1;
};
async function n4(e, t, n) {
  let {
    node
  } = n;
  let i = node.quasis.length;
  let a = nG(n, t);
  let o = [];
  for (let t = 0; t < i; t++) {
    let n = node.quasis[t];
    let s = 0 === t;
    let _ = t === i - 1;
    let l = n.value.cooked;
    let u = l.split(`
`);
    let c = u.length;
    let p = a[t];
    let d = c > 2 && "" === u[0].trim() && "" === u[1].trim();
    let m = c > 2 && "" === u[c - 1].trim() && "" === u[c - 2].trim();
    let f = u.every(e => /^\s*(?:#[^\n\r]*)?$/u.test(e));
    if (!_ && /#[^\n\r]*$/u.test(u[c - 1])) return null;
    let h = null;
    (h = f ? function (e) {
      let t = [];
      let n = !1;
      let r = e.map(e => e.trim());
      for (let [e, i] of r.entries()) "" !== i && ("" === r[e - 1] && n ? t.push([tA, i]) : t.push(i), n = !0);
      return 0 === t.length ? null : tP(tA, t);
    }(u) : await e(l, {
      parser: "graphql"
    })) ? (h = nX(h, !1), !s && d && o.push(""), o.push(h), !_ && m && o.push("")) : s || _ || !d || o.push("");
    p && o.push(p);
  }
  return ["`", tf([tA, tP(tA, o)]), tA, "`"];
}
var n8 = function (e) {
  if (function ({
    node: e,
    parent: t
  }) {
    return n0({
      node: e,
      parent: t
    }, "GraphQL") || t && ("TaggedTemplateExpression" === t.type && ("MemberExpression" === t.tag.type && "graphql" === t.tag.object.name && "experimental" === t.tag.property.name || "Identifier" === t.tag.type && ("gql" === t.tag.name || "graphql" === t.tag.name)) || "CallExpression" === t.type && "Identifier" === t.callee.type && "graphql" === t.callee.name);
  }(e)) return n4;
};
var n5 = 0;
async function n7(e, t, n, r, i) {
  let {
    node
  } = r;
  let o = n5;
  n5 = n5 + 1 >>> 0;
  let s = e => `PRETTIER_HTML_PLACEHOLDER_${e}_${o}_IN_JS`;
  let _ = node.quasis.map((e, t, n) => t === n.length - 1 ? e.value.cooked : e.value.cooked + s(t)).join("");
  let l = nG(r, n);
  let u = RegExp(s(String.raw`(\d+)`), "gu");
  let c = 0;
  let d = tI(await t(_, {
    parser: e,
    __onHtmlRoot(e) {
      c = e.children.length;
    }
  }), e => {
    if ("string" != typeof e) return e;
    let t = [];
    let n = e.split(u);
    for (let e = 0; e < n.length; e++) {
      let r = n[e];
      if (e % 2 == 0) {
        r && (r = nY(r), i.__embeddedInHtml && (r = p(!1, r, /<\/(?=script\b)/giu, String.raw`<\/`)), t.push(r));
        continue;
      }
      let a = Number(r);
      t.push(l[a]);
    }
    return t;
  });
  let m = /^\s/u.test(_) ? " " : "";
  let f = /\s$/u.test(_) ? " " : "";
  let h = "ignore" === i.htmlWhitespaceSensitivity ? tA : m && f ? tE : null;
  return h ? ty(["`", tf([h, ty(d)]), h, "`"]) : tN({
    hug: !1
  }, ty(["`", m, c > 1 ? tf(ty(d)) : ty(d), f, "`"]));
}
var n9 = n7.bind(void 0, "html");
var re = n7.bind(void 0, "angular");
var rt = function (e) {
  return n0(e, "HTML") || e.match(e => "TemplateLiteral" === e.type, (e, t) => "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t) ? n9 : e.match(e => "TemplateLiteral" === e.type, (e, t) => eG(e) && !e.computed && "Identifier" === e.key.type && "template" === e.key.name && "value" === t, ...nQ) ? re : void 0;
};
async function rn(e, t, n) {
  let r;
  let {
    node
  } = n;
  let a = p(!1, node.quasis[0].value.raw, /((?:\\\\)*)\\`/gu, (e, t) => "\\".repeat(t.length / 2) + "`");
  let o = null === (r = a.match(/^([^\S\n]*)\S/mu)) ? "" : r[1];
  let s = "" !== o;
  s && (a = p(!1, a, RegExp(`^${o}`, "gmu"), ""));
  let _ = nX(await e(a, {
    parser: "markdown",
    __inJsTemplate: !0
  }), !0);
  return ["`", s ? tf([tw, _]) : [tk, th(Number.NEGATIVE_INFINITY, _)], tw, "`"];
}
var rr = function (e) {
  if (function ({
    node: e,
    parent: t
  }) {
    return t?.type === "TaggedTemplateExpression" && 1 === e.quasis.length && "Identifier" === t.tag.type && ("md" === t.tag.name || "markdown" === t.tag.name);
  }(e)) return rn;
};
var ri = function (e) {
  let t;
  let {
    node
  } = e;
  if (!("TemplateLiteral" !== node.type || function ({
    quasis: e
  }) {
    return e.some(({
      value: {
        cooked: e
      }
    }) => null === e);
  }(node))) {
    for (let r of [n6, n8, rt, rr]) if (t = r(e)) return 1 === node.quasis.length && "" === node.quasis[0].value.raw.trim() ? "``" : async (...e) => {
      let n = await t(...e);
      return n && tN({
        embed: !0,
        ...n.label
      }, n);
    };
  }
};
var ra = /\*\/$/;
var ro = /^\/\*\*?/;
var rs = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
var r_ = /(^|\s+)\/\/([^\n\r]*)/g;
var rl = /^(\r?\n)+/;
var ru = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g;
var rc = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g;
var rp = /(\r?\n|^) *\* ?/g;
var rd = [];
function rm(e, t) {
  return [...rd, ...(Array.isArray(t) ? t : [t])].map(t => `@${e} ${t}`.trim());
}
var rf = function (e) {
  if (!e.startsWith("#!")) return "";
  let t = e.indexOf(`
`);
  return -1 === t ? e : e.slice(0, t);
};
function rh(e) {
  let t;
  let n;
  let {
    shebang,
    text,
    pragmas,
    comments
  } = function (e) {
    let t;
    let n = rf(e);
    n && (e = e.slice(n.length + 1));
    let {
      pragmas: _pragmas,
      comments: _comments
    } = function (e) {
      let t = `
`;
      e = p(!1, e.replace(ro, "").replace(ra, ""), rp, "$1");
      let n = "";
      for (; n !== e;) {
        n = e;
        e = p(!1, e, ru, `${t}$1 $2${t}`);
      }
      e = e.replace(rl, "").trimEnd();
      let r = Object.create(null);
      let i = p(!1, e, rc, "").replace(rl, "").trimEnd();
      let a;
      for (; a = rc.exec(e);) {
        let e = p(!1, a[2], r_, "");
        if ("string" == typeof r[a[1]] || Array.isArray(r[a[1]])) {
          let t = r[a[1]];
          r[a[1]] = [...rd, ...(Array.isArray(t) ? t : [t]), e];
        } else r[a[1]] = e;
      }
      return {
        comments: i,
        pragmas: r
      };
    }((t = e.match(rs)) ? t[0].trimStart() : "");
    return {
      shebang: n,
      text: e,
      pragmas: _pragmas,
      comments: _comments
    };
  }(e);
  let s = null == (n = null == (t = text.match(rs)) ? void 0 : t[0]) ? text : text.slice(n.length);
  return (shebang ? `${shebang}
` : "") + function ({
    comments: e = "",
    pragmas: t = {}
  }) {
    let n = `
`;
    let r = Object.keys(t);
    let i = r.flatMap(e => rm(e, t[e])).map(e => ` * ${e}${n}`).join("");
    if (!e) {
      if (0 === r.length) return "";
      if (1 === r.length && !Array.isArray(t[r[0]])) {
        let e = t[r[0]];
        return `/** ${rm(r[0], e)[0]} */`;
      }
    }
    let a = e.split(n).map(e => ` * ${e}`).join(n) + n;
    return "/**" + n + (e ? a : "") + (e && r.length > 0 ? " *" + n : "") + i + " */";
  }({
    pragmas: {
      format: "",
      ...pragmas
    },
    comments: comments.trimStart()
  }) + (s.startsWith(`
`) ? `
` : `

`) + s;
}
var ry = function (e, t) {
  let {
    originalText,
    [Symbol.$$for("comments")]: r,
    locStart,
    locEnd,
    [Symbol.$$for("printedComments")]: o
  } = t;
  let {
    node
  } = e;
  let _ = locStart(node);
  let l = locEnd(node);
  for (let e of r) locStart(e) >= _ && locEnd(e) <= l && o.add(e);
  return originalText.slice(_, l);
};
function rg(e, t) {
  var n;
  var r;
  var i;
  var a;
  var o;
  var s;
  var _;
  var l;
  var u;
  var c;
  if (e.isRoot) return !1;
  let {
    node,
    key,
    parent
  } = e;
  if (t.__isInHtmlInterpolation && !t.bracketSpacing && G(node) && function e(t) {
    let {
      parent: _parent,
      key: _key
    } = t;
    switch (_parent.type) {
      case "NGPipeExpression":
        if ("arguments" === _key && t.isLast) return t.callParent(e);
        break;
      case "ObjectProperty":
        if ("value" === _key) return t.callParent(() => "properties" === t.key && t.isLast);
        break;
      case "BinaryExpression":
      case "LogicalExpression":
        if ("right" === _key) return t.callParent(e);
        break;
      case "ConditionalExpression":
        if ("alternate" === _key) return t.callParent(e);
        break;
      case "UnaryExpression":
        if (_parent.prefix) return t.callParent(e);
    }
    return !1;
  }(e)) return !0;
  if (rb(node)) return !1;
  if ("Identifier" === node.type) {
    if (null != (n = node.extra) && n.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(node.name) || "left" === key && ("async" === node.name && !parent.await || "let" === node.name) && "ForOfStatement" === parent.type) return !0;
    if ("let" === node.name) {
      let t = null == (r = e.findAncestor(e => "ForOfStatement" === e.type)) ? void 0 : r.left;
      if (t && eA(t, e => e === node)) return !0;
    }
    if ("object" === key && "let" === node.name && "MemberExpression" === parent.type && parent.computed && !parent.optional) {
      let t = e.findAncestor(e => "ExpressionStatement" === e.type || "ForStatement" === e.type || "ForInStatement" === e.type);
      let n = t ? "ExpressionStatement" === t.type ? t.expression : "ForStatement" === t.type ? t.init : t.left : void 0;
      if (n && eA(n, e => e === node)) return !0;
    }
    if ("expression" === key) switch (node.name) {
      case "await":
      case "interface":
      case "module":
      case "using":
      case "yield":
      case "let":
      case "component":
      case "hook":
      case "type":
        {
          let t = e.findAncestor(e => !eX(e));
          if (t !== parent && "ExpressionStatement" === t.type) return !0;
        }
    }
    return !1;
  }
  if ("ObjectExpression" === node.type || "FunctionExpression" === node.type || "ClassExpression" === node.type || "DoExpression" === node.type) {
    let t = null == (i = e.findAncestor(e => "ExpressionStatement" === e.type)) ? void 0 : i.expression;
    if (t && eA(t, e => e === node)) return !0;
  }
  if ("ObjectExpression" === node.type) {
    let t = null == (a = e.findAncestor(e => "ArrowFunctionExpression" === e.type)) ? void 0 : a.body;
    if (t && "SequenceExpression" !== t.type && "AssignmentExpression" !== t.type && eA(t, e => e === node)) return !0;
  }
  switch (parent.type) {
    case "ParenthesizedExpression":
      return !1;
    case "ClassDeclaration":
    case "ClassExpression":
      if ("superClass" === key && ("ArrowFunctionExpression" === node.type || "AssignmentExpression" === node.type || "AwaitExpression" === node.type || "BinaryExpression" === node.type || "ConditionalExpression" === node.type || "LogicalExpression" === node.type || "NewExpression" === node.type || "ObjectExpression" === node.type || "SequenceExpression" === node.type || "TaggedTemplateExpression" === node.type || "UnaryExpression" === node.type || "UpdateExpression" === node.type || "YieldExpression" === node.type || "TSNonNullExpression" === node.type || "ClassExpression" === node.type && w(node.decorators))) return !0;
      break;
    case "ExportDefaultDeclaration":
      return function e(t, n) {
        let {
          node: _node2,
          parent: _parent2
        } = t;
        return "FunctionExpression" === _node2.type || "ClassExpression" === _node2.type ? "ExportDefaultDeclaration" === _parent2.type || !rg(t, n) : !(!K(_node2) || "ExportDefaultDeclaration" !== _parent2.type && rg(t, n)) && t.call(() => e(t, n), ...W(_node2));
      }(e, t) || "SequenceExpression" === node.type;
    case "Decorator":
      if ("expression" === key && ("ChainExpression" === (c = node).type && (c = c.expression), !(rD(c) || ef(c) && !c.optional && rD(c.callee)))) return !0;
      break;
    case "TypeAnnotation":
      if (e.match(void 0, void 0, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type) && z(node, e => "ObjectTypeAnnotation" === e.type && z(e, e => "FunctionTypeAnnotation" === e.type))) return !0;
      break;
    case "BinaryExpression":
      if ("left" === key && ("in" === parent.operator || "instanceof" === parent.operator) && "UnaryExpression" === node.type) return !0;
      break;
    case "VariableDeclarator":
      if ("init" === key && e.match(void 0, void 0, (e, t) => "declarations" === t && "VariableDeclaration" === e.type, (e, t) => "left" === t && "ForInStatement" === e.type)) return !0;
  }
  switch (node.type) {
    case "UpdateExpression":
      if ("UnaryExpression" === parent.type) return node.prefix && ("++" === node.operator && "+" === parent.operator || "--" === node.operator && "-" === parent.operator);
    case "UnaryExpression":
      switch (parent.type) {
        case "UnaryExpression":
          return node.operator === parent.operator && ("+" === node.operator || "-" === node.operator);
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "TSNonNullExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "BinaryExpression":
          return "left" === key && "**" === parent.operator;
        default:
          return !1;
      }
    case "BinaryExpression":
      if ("UpdateExpression" === parent.type || "in" === node.operator && function (e) {
        let t = 0;
        let {
          node: _node3
        } = e;
        for (; _node3;) {
          let r = e.getParentNode(t++);
          if (r?.type === "ForStatement" && r.init === _node3) return !0;
          n = r;
        }
        return !1;
      }(e)) return !0;
      if ("|>" === node.operator && null != (o = node.extra) && o.parenthesized) {
        let t = e.grandparent;
        if ("BinaryExpression" === t.type && "|>" === t.operator) return !0;
      }
    case "TSTypeAssertion":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
    case "LogicalExpression":
      switch (parent.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
          return !eX(node);
        case "ConditionalExpression":
          return eX(node) || "LogicalExpression" === node.type && "??" === node.operator;
        case "CallExpression":
        case "NewExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "ClassExpression":
        case "ClassDeclaration":
          return "superClass" === key;
        case "TSTypeAssertion":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "JSXSpreadAttribute":
        case "SpreadElement":
        case "BindExpression":
        case "AwaitExpression":
        case "TSNonNullExpression":
        case "UpdateExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "AssignmentExpression":
        case "AssignmentPattern":
          return "left" === key && ("TSTypeAssertion" === node.type || eX(node));
        case "LogicalExpression":
          if ("LogicalExpression" === node.type) return parent.operator !== node.operator;
        case "BinaryExpression":
          {
            let {
              operator,
              type
            } = node;
            if (!operator && "TSTypeAssertion" !== type) return !0;
            let n = eO(operator);
            let r = parent.operator;
            let i = eO(r);
            return i > n || "right" === key && i === n || i === n && !eN(r, operator) || (i < n && "%" === operator ? "+" === r || "-" === r : !!(eP[r] || "|" === r || "^" === r || "&" === r));
          }
        default:
          return !1;
      }
    case "SequenceExpression":
      switch (parent.type) {
        case "ReturnStatement":
        case "ForStatement":
          return !1;
        case "ExpressionStatement":
          return "expression" !== key;
        case "ArrowFunctionExpression":
          return "body" !== key;
        default:
          return !0;
      }
    case "YieldExpression":
      if ("AwaitExpression" === parent.type || "TSTypeAssertion" === parent.type) return !0;
    case "AwaitExpression":
      switch (parent.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "SpreadElement":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "BindExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "ConditionalExpression":
          return "test" === key;
        case "BinaryExpression":
          return !(!node.argument && "|>" === parent.operator);
        default:
          return !1;
      }
    case "TSFunctionType":
      if (e.match(e => "TSFunctionType" === e.type, (e, t) => "typeAnnotation" === t && "TSTypeAnnotation" === e.type, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type)) return !0;
    case "TSConditionalType":
    case "TSConstructorType":
      if ("extendsType" === key && "TSConditionalType" === parent.type) {
        if ("TSConditionalType" === node.type) return !0;
        let {
          typeAnnotation
        } = node.returnType || node.typeAnnotation;
        if ("TSTypePredicate" === typeAnnotation.type && typeAnnotation.typeAnnotation && (e = typeAnnotation.typeAnnotation.typeAnnotation), "TSInferType" === typeAnnotation.type && typeAnnotation.typeParameter.constraint) return !0;
      }
      if ("checkType" === key && "TSConditionalType" === parent.type) return !0;
    case "TSUnionType":
    case "TSIntersectionType":
      if (("TSUnionType" === parent.type || "TSIntersectionType" === parent.type) && parent.types.length > 1 && (!node.types || node.types.length > 1)) return !0;
    case "TSInferType":
      if ("TSInferType" === node.type) {
        if ("TSRestType" === parent.type) return !1;
        if ("types" === key && ("TSUnionType" === parent.type || "TSIntersectionType" === parent.type) && "TSTypeParameter" === node.typeParameter.type && node.typeParameter.constraint) return !0;
      }
    case "TSTypeOperator":
      return "TSArrayType" === parent.type || "TSOptionalType" === parent.type || "TSRestType" === parent.type || "objectType" === key && "TSIndexedAccessType" === parent.type || "TSTypeOperator" === parent.type || "TSTypeAnnotation" === parent.type && e.grandparent.type.startsWith("TSJSDoc");
    case "TSTypeQuery":
      return "objectType" === key && "TSIndexedAccessType" === parent.type || "elementType" === key && "TSArrayType" === parent.type;
    case "TypeOperator":
      return "ArrayTypeAnnotation" === parent.type || "NullableTypeAnnotation" === parent.type || "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type) || "TypeOperator" === parent.type;
    case "TypeofTypeAnnotation":
      return "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type) || "elementType" === key && "ArrayTypeAnnotation" === parent.type;
    case "ArrayTypeAnnotation":
      return "NullableTypeAnnotation" === parent.type;
    case "IntersectionTypeAnnotation":
    case "UnionTypeAnnotation":
      return "TypeOperator" === parent.type || "ArrayTypeAnnotation" === parent.type || "NullableTypeAnnotation" === parent.type || "IntersectionTypeAnnotation" === parent.type || "UnionTypeAnnotation" === parent.type || "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type);
    case "InferTypeAnnotation":
    case "NullableTypeAnnotation":
      return "ArrayTypeAnnotation" === parent.type || "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type);
    case "ComponentTypeAnnotation":
    case "FunctionTypeAnnotation":
      {
        if ("ComponentTypeAnnotation" === node.type && (null === node.rendersType || void 0 === node.rendersType)) return !1;
        if (e.match(void 0, (e, t) => "typeAnnotation" === t && "TypeAnnotation" === e.type, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type) || e.match(void 0, (e, t) => "typeAnnotation" === t && "TypePredicate" === e.type, (e, t) => "typeAnnotation" === t && "TypeAnnotation" === e.type, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type)) return !0;
        let t = "NullableTypeAnnotation" === parent.type ? e.grandparent : parent;
        return "UnionTypeAnnotation" === t.type || "IntersectionTypeAnnotation" === t.type || "ArrayTypeAnnotation" === t.type || "objectType" === key && ("IndexedAccessType" === t.type || "OptionalIndexedAccessType" === t.type) || "checkType" === key && "ConditionalTypeAnnotation" === parent.type || "extendsType" === key && "ConditionalTypeAnnotation" === parent.type && (null == (s = node.returnType) ? void 0 : s.type) === "InferTypeAnnotation" && (null == (_ = node.returnType) ? void 0 : _.typeParameter.bound) || "NullableTypeAnnotation" === t.type || "FunctionTypeParam" === parent.type && null === parent.name && ej(node).some(e => {
          var t;
          return (null == (t = e.typeAnnotation) ? void 0 : t.type) === "NullableTypeAnnotation";
        });
      }
    case "ConditionalTypeAnnotation":
      if ("extendsType" === key && "ConditionalTypeAnnotation" === parent.type && "ConditionalTypeAnnotation" === node.type || "checkType" === key && "ConditionalTypeAnnotation" === parent.type) return !0;
    case "OptionalIndexedAccessType":
      return "objectType" === key && "IndexedAccessType" === parent.type;
    case "StringLiteral":
    case "NumericLiteral":
    case "Literal":
      if ("string" == typeof node.value && "ExpressionStatement" === parent.type && !parent.directive) {
        let t = e.grandparent;
        return "Program" === t.type || "BlockStatement" === t.type;
      }
      return "object" === key && "MemberExpression" === parent.type && "number" == typeof node.value;
    case "AssignmentExpression":
      {
        let t = e.grandparent;
        return "body" === key && "ArrowFunctionExpression" === parent.type || ("key" !== key || "ClassProperty" !== parent.type && "PropertyDefinition" !== parent.type || !parent.computed) && ("init" !== key && "update" !== key || "ForStatement" !== parent.type) && ("ExpressionStatement" === parent.type ? "ObjectPattern" === node.left.type : !("key" === key && "TSPropertySignature" === parent.type || "AssignmentExpression" === parent.type || "SequenceExpression" === parent.type && "ForStatement" === t.type && (t.init === parent || t.update === parent) || "value" === key && "Property" === parent.type && "ObjectPattern" === t.type && t.properties.includes(parent) || "NGChainedExpression" === parent.type || "node" === key && "JsExpressionRoot" === parent.type));
      }
    case "ConditionalExpression":
      switch (parent.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "SpreadElement":
        case "BinaryExpression":
        case "LogicalExpression":
        case "NGPipeExpression":
        case "ExportDefaultDeclaration":
        case "AwaitExpression":
        case "JSXSpreadAttribute":
        case "TSTypeAssertion":
        case "TypeCastExpression":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
          return !0;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "ConditionalExpression":
          return !t.experimentalTernaries && "test" === key;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        default:
          return !1;
      }
    case "FunctionExpression":
      switch (parent.type) {
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "TaggedTemplateExpression":
          return !0;
        default:
          return !1;
      }
    case "ArrowFunctionExpression":
      switch (parent.type) {
        case "BinaryExpression":
          return "|>" !== parent.operator || (null == (l = node.extra) ? void 0 : l.parenthesized);
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "AwaitExpression":
        case "TSTypeAssertion":
          return !0;
        case "ConditionalExpression":
          return "test" === key;
        default:
          return !1;
      }
    case "ClassExpression":
      if ("NewExpression" === parent.type) return "callee" === key;
      break;
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "CallExpression":
    case "MemberExpression":
      if (e.match(void 0, (e, t) => "expression" === t && "ChainExpression" === e.type, (e, t) => "tag" === t && "TaggedTemplateExpression" === e.type) || e.match(e => "OptionalCallExpression" === e.type || "OptionalMemberExpression" === e.type, (e, t) => "tag" === t && "TaggedTemplateExpression" === e.type) || e.match(e => "OptionalCallExpression" === e.type || "OptionalMemberExpression" === e.type, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "tag" === t && "TaggedTemplateExpression" === e.type) || e.match(void 0, (e, t) => "expression" === t && "ChainExpression" === e.type, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "tag" === t && "TaggedTemplateExpression" === e.type) || e.match(void 0, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "expression" === t && "ChainExpression" === e.type, (e, t) => "tag" === t && "TaggedTemplateExpression" === e.type) || e.match(e => "OptionalMemberExpression" === e.type || "OptionalCallExpression" === e.type, (e, t) => "object" === t && "MemberExpression" === e.type || "callee" === t && ("CallExpression" === e.type || "NewExpression" === e.type)) || e.match(e => "OptionalMemberExpression" === e.type || "OptionalCallExpression" === e.type, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "object" === t && "MemberExpression" === e.type || "callee" === t && "CallExpression" === e.type) || e.match(e => "CallExpression" === e.type || "MemberExpression" === e.type, (e, t) => "expression" === t && "ChainExpression" === e.type) && (e.match(void 0, void 0, (e, t) => "callee" === t && ("CallExpression" === e.type && !e.optional || "NewExpression" === e.type) || "object" === t && "MemberExpression" === e.type && !e.optional) || e.match(void 0, void 0, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "object" === t && "MemberExpression" === e.type || "callee" === t && "CallExpression" === e.type)) || e.match(e => "CallExpression" === e.type || "MemberExpression" === e.type, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "expression" === t && "ChainExpression" === e.type, (e, t) => "object" === t && "MemberExpression" === e.type || "callee" === t && "CallExpression" === e.type)) return !0;
    case "TaggedTemplateExpression":
    case "TSNonNullExpression":
      if ("callee" === key && ("BindExpression" === parent.type || "NewExpression" === parent.type)) {
        let e = node;
        for (; e;) switch (e.type) {
          case "CallExpression":
          case "OptionalCallExpression":
            return !0;
          case "MemberExpression":
          case "OptionalMemberExpression":
          case "BindExpression":
            e = e.object;
            break;
          case "TaggedTemplateExpression":
            e = e.tag;
            break;
          case "TSNonNullExpression":
            e = e.expression;
            break;
          default:
            return !1;
        }
      }
      break;
    case "BindExpression":
      return "callee" === key && ("BindExpression" === parent.type || "NewExpression" === parent.type) || "object" === key && eh(parent);
    case "NGPipeExpression":
      return !("NGRoot" === parent.type || "NGMicrosyntaxExpression" === parent.type || "ObjectProperty" === parent.type && !(null != (u = node.extra) && u.parenthesized) || H(parent) || "arguments" === key && ef(parent) || "right" === key && "NGPipeExpression" === parent.type || "property" === key && "MemberExpression" === parent.type || "AssignmentExpression" === parent.type);
    case "JSXFragment":
    case "JSXElement":
      return "callee" === key || "left" === key && "BinaryExpression" === parent.type && "<" === parent.operator || !H(parent) && "ArrowFunctionExpression" !== parent.type && "AssignmentExpression" !== parent.type && "AssignmentPattern" !== parent.type && "BinaryExpression" !== parent.type && "NewExpression" !== parent.type && "ConditionalExpression" !== parent.type && "ExpressionStatement" !== parent.type && "JsExpressionRoot" !== parent.type && "JSXAttribute" !== parent.type && "JSXElement" !== parent.type && "JSXExpressionContainer" !== parent.type && "JSXFragment" !== parent.type && "LogicalExpression" !== parent.type && !ef(parent) && !eG(parent) && "ReturnStatement" !== parent.type && "ThrowStatement" !== parent.type && "TypeCastExpression" !== parent.type && "VariableDeclarator" !== parent.type && "YieldExpression" !== parent.type;
    case "TSInstantiationExpression":
      return "object" === key && eh(parent);
  }
  return !1;
}
var rb = R(["BlockStatement", "BreakStatement", "ComponentDeclaration", "ClassBody", "ClassDeclaration", "ClassMethod", "ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ContinueStatement", "DebuggerStatement", "DeclareComponent", "DeclareClass", "DeclareExportAllDeclaration", "DeclareExportDeclaration", "DeclareFunction", "DeclareHook", "DeclareInterface", "DeclareModule", "DeclareModuleExports", "DeclareNamespace", "DeclareVariable", "DeclareEnum", "DoWhileStatement", "EnumDeclaration", "ExportAllDeclaration", "ExportDefaultDeclaration", "ExportNamedDeclaration", "ExpressionStatement", "ForInStatement", "ForOfStatement", "ForStatement", "FunctionDeclaration", "HookDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "MethodDefinition", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TSDeclareFunction", "TSEnumDeclaration", "TSImportEqualsDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSNamespaceExportDeclaration", "TypeAlias", "VariableDeclaration", "WhileStatement", "WithStatement"]);
function rD(e) {
  return "Identifier" === e.type || !!eh(e) && !e.computed && !e.optional && "Identifier" === e.property.type && rD(e.object);
}
var rx = function (e, t) {
  let n = t - 1;
  n = b(e, n, {
    backwards: !0
  });
  n = v(e, n, {
    backwards: !0
  });
  n = b(e, n, {
    backwards: !0
  });
  let r = v(e, n, {
    backwards: !0
  });
  return n !== r;
};
var rv = () => !0;
function rT(e, t) {
  e.node.printed = !0;
  return t.printer.printComment(e, t);
}
function rS(e, t, n = {}) {
  let {
    node
  } = e;
  if (!w(node?.comments)) return "";
  let {
    indent = !1,
    marker,
    filter = rv
  } = n;
  let s = [];
  if (e.each(({
    node: n
  }) => {
    n.leading || n.trailing || n.marker !== marker || !filter(n) || s.push(rT(e, t));
  }, "comments"), 0 === s.length) return "";
  let _ = tP(tA, s);
  return indent ? tf([tA, _]) : _;
}
function rC(e, t) {
  let n = e.node;
  if (!n) return {};
  let r = t[Symbol.$$for("printedComments")];
  if (0 === (n.comments || []).filter(e => !r.has(e)).length) return {
    leading: "",
    trailing: ""
  };
  let i = [];
  let a = [];
  let o;
  e.each(() => {
    let n = e.node;
    if (null != r && r.has(n)) return;
    let {
      leading,
      trailing
    } = n;
    leading ? i.push(function (e, t) {
      var n;
      let r = e.node;
      let i = [rT(e, t)];
      let {
        printer,
        originalText,
        locStart,
        locEnd
      } = t;
      if (null == (n = printer.isBlockComment) ? void 0 : n.call(printer, r)) {
        let e = T(originalText, locEnd(r)) ? T(originalText, locStart(r), {
          backwards: !0
        }) ? tA : tE : " ";
        i.push(e);
      } else i.push(tA);
      let l = v(originalText, b(originalText, locEnd(r)));
      !1 !== l && T(originalText, l) && i.push(tA);
      return i;
    }(e, t)) : trailing && (o = function (e, t, n) {
      var r;
      let i = e.node;
      let a = rT(e, t);
      let {
        printer,
        originalText,
        locStart
      } = t;
      let l = null == (r = printer.isBlockComment) ? void 0 : r.call(printer, i);
      return null != n && n.hasLineSuffix && !(null != n && n.isBlock) || T(originalText, locStart(i), {
        backwards: !0
      }) ? {
        doc: tv([tA, rx(originalText, locStart(i)) ? tA : "", a]),
        isBlock: l,
        hasLineSuffix: !0
      } : !l || null != n && n.hasLineSuffix ? {
        doc: [tv([" ", a]), tS],
        isBlock: l,
        hasLineSuffix: !0
      } : {
        doc: [" ", a],
        isBlock: l,
        hasLineSuffix: !1
      };
    }(e, t, o), a.push(o.doc));
  }, "comments");
  return {
    leading: i,
    trailing: a
  };
}
function rE(e, t, n) {
  let {
    leading,
    trailing
  } = rC(e, n);
  return leading || trailing ? tU(t, e => [leading, e, trailing]) : t;
}
var rw;
var rA = class extends Error {
  name = "UnexpectedNodeError";
  constructor(e, t, n = "type") {
    super(`Unexpected ${t} node ${n}: ${JSON.stringify(e[n])}.`);
    this.node = e;
  }
};
var rk = class {
  constructor(e) {
    _(this, rw);
    l(this, rw, new Set(e));
  }
  getLeadingWhitespaceCount(e) {
    let t = s(this, rw);
    let n = 0;
    for (let r = 0; r < e.length && t.has(e.charAt(r)); r++) n++;
    return n;
  }
  getTrailingWhitespaceCount(e) {
    let t = s(this, rw);
    let n = 0;
    for (let r = e.length - 1; r >= 0 && t.has(e.charAt(r)); r--) n++;
    return n;
  }
  getLeadingWhitespace(e) {
    let t = this.getLeadingWhitespaceCount(e);
    return e.slice(0, t);
  }
  getTrailingWhitespace(e) {
    let t = this.getTrailingWhitespaceCount(e);
    return e.slice(e.length - t);
  }
  hasLeadingWhitespace(e) {
    return s(this, rw).has(e.charAt(0));
  }
  hasTrailingWhitespace(e) {
    return s(this, rw).has(d(!1, e, -1));
  }
  trimStart(e) {
    let t = this.getLeadingWhitespaceCount(e);
    return e.slice(t);
  }
  trimEnd(e) {
    let t = this.getTrailingWhitespaceCount(e);
    return e.slice(0, e.length - t);
  }
  trim(e) {
    return this.trimEnd(this.trimStart(e));
  }
  split(e, t = !1) {
    let n = `[${function (e) {
      if ("string" != typeof e) throw TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }([...s(this, rw)].join(""))}]+`;
    let r = RegExp(t ? `(${n})` : n, "u");
    return e.split(r);
  }
  hasWhitespaceCharacter(e) {
    let t = s(this, rw);
    return Array.prototype.some.call(e, e => t.has(e));
  }
  hasNonWhitespaceCharacter(e) {
    let t = s(this, rw);
    return Array.prototype.some.call(e, e => !t.has(e));
  }
  isWhitespaceOnly(e) {
    let t = s(this, rw);
    return Array.prototype.every.call(e, e => t.has(e));
  }
};
rw = new WeakMap();
var rF = new rk(` 
\r	`);
var rP = e => "" === e || e === tE || e === tA || e === tw;
function rN(e, t, n, r) {
  return e ? "" : ("JSXElement" !== n.type || n.closingElement) && (r?.type !== "JSXElement" || r.closingElement) ? tw : 1 === t.length ? tw : tA;
}
function rI(e, t, n, r) {
  return e ? tA : 1 === t.length && ("JSXElement" !== n.type || n.closingElement) && (r?.type !== "JSXElement" || r.closingElement) ? tw : tA;
}
var rO = new Set(["ArrayExpression", "TupleExpression", "JSXAttribute", "JSXElement", "JSXExpressionContainer", "JSXFragment", "ExpressionStatement", "CallExpression", "OptionalCallExpression", "ConditionalExpression", "JsExpressionRoot"]);
function rB(e, t, n) {
  let {
    node
  } = e;
  if (node.type.startsWith("JSX")) switch (node.type) {
    case "JSXAttribute":
      return function (e, t, n) {
        let {
          node: _node4
        } = e;
        let i = [];
        if (i.push(n("name")), _node4.value) {
          let a;
          if (Q(_node4.value)) {
            let n = p(!1, p(!1, eE(_node4.value).slice(1, -1), "&apos;", "'"), "&quot;", '"');
            let i = k(n, t.jsxSingleQuote);
            n = '"' === i ? p(!1, n, '"', "&quot;") : p(!1, n, "'", "&apos;");
            a = e.call(() => rE(e, tJ(i + n + i), t), "value");
          } else a = n("value");
          i.push("=", a);
        }
        return i;
      }(e, t, n);
    case "JSXIdentifier":
      return node.name;
    case "JSXNamespacedName":
      return tP(":", [n("namespace"), n("name")]);
    case "JSXMemberExpression":
      return tP(".", [n("object"), n("property")]);
    case "JSXSpreadAttribute":
    case "JSXSpreadChild":
      return function (e, t, n) {
        let {
          node: _node5
        } = e;
        return ["{", e.call(({
          node: r
        }) => {
          let i = ["...", n()];
          return eW(r) && nB(e) ? [tf([tw, rE(e, i, t)]), tw] : i;
        }, "JSXSpreadAttribute" === _node5.type ? "argument" : "expression"), "}"];
      }(e, t, n);
    case "JSXExpressionContainer":
      return function (e, t, n) {
        let {
          node: _node6
        } = e;
        let i = (e, t) => "JSXEmptyExpression" === e.type || !eW(e) && (H(e) || G(e) || "ArrowFunctionExpression" === e.type || "AwaitExpression" === e.type && (i(e.argument, e) || "JSXElement" === e.argument.type) || ef(e) || "ChainExpression" === e.type && ef(e.expression) || "FunctionExpression" === e.type || "TemplateLiteral" === e.type || "TaggedTemplateExpression" === e.type || "DoExpression" === e.type || ea(t) && ("ConditionalExpression" === e.type || e_(e)));
        return i(_node6.expression, e.parent) ? ty(["{", n("expression"), tT, "}"]) : ty(["{", tf([tw, n("expression")]), tw, tT, "}"]);
      }(e, 0, n);
    case "JSXFragment":
    case "JSXElement":
      let i;
      i = rE(e, function (e, t, n) {
        var r;
        var i;
        var a;
        var o;
        var s;
        var _;
        let l;
        let {
          node: _node7
        } = e;
        if ("JSXElement" === _node7.type && function (e) {
          if (0 === e.children.length) return !0;
          if (e.children.length > 1) return !1;
          let t = e.children[0];
          return "JSXText" === t.type && !rj(t);
        }(_node7)) return [n("openingElement"), n("closingElement")];
        let c = n("JSXElement" === _node7.type ? "openingElement" : "openingFragment");
        let p = n("JSXElement" === _node7.type ? "closingElement" : "closingFragment");
        if (1 === _node7.children.length && "JSXExpressionContainer" === _node7.children[0].type && ("TemplateLiteral" === _node7.children[0].expression.type || "TaggedTemplateExpression" === _node7.children[0].expression.type)) return [c, ...e.map(n, "children"), p];
        _node7.children = _node7.children.map(e => "JSXExpressionContainer" === e.type && Q(e.expression) && " " === e.expression.value && !eW(e.expression) ? {
          type: "JSXText",
          value: " ",
          raw: " "
        } : e);
        let m = _node7.children.some(ea);
        let f = _node7.children.filter(e => "JSXExpressionContainer" === e.type).length > 1;
        let h = "JSXElement" === _node7.type && _node7.openingElement.attributes.length > 1;
        let y = tj(c) || m || h || f;
        let g = "mdx" === e.parent.rootMarker;
        let b = t.singleQuote ? "{' '}" : '{" "}';
        let D = g ? " " : tD([b, tw], " ");
        _ = (null == (i = null == (r = _node7.openingElement) ? void 0 : r.name) ? void 0 : i.name) === "fbt";
        l = [];
        e.each(({
          node: e,
          next: t
        }) => {
          if ("JSXText" === e.type) {
            let n = eE(e);
            if (rj(e)) {
              let r;
              let i = rF.split(n, !0);
              if ("" === i[0] && (l.push(""), i.shift(), /\n/u.test(i[0]) ? l.push(rI(_, i[1], e, t)) : l.push(D), i.shift()), "" === d(!1, i, -1) && (i.pop(), r = i.pop()), 0 === i.length) return;
              for (let [e, t] of i.entries()) e % 2 == 1 ? l.push(tE) : l.push(t);
              void 0 !== r ? /\n/u.test(r) ? l.push(rI(_, d(!1, l, -1), e, t)) : l.push(D) : l.push(rN(_, d(!1, l, -1), e, t));
            } else /\n/u.test(n) ? n.match(/\n/gu).length > 1 && l.push("", tA) : l.push("", D);
          } else {
            let r = n();
            if (l.push(r), t && rj(t)) {
              let n = rF.trim(eE(t));
              let [r] = rF.split(n);
              l.push(rN(_, r, e, t));
            } else l.push(tA);
          }
        }, "children");
        let x = l;
        let v = _node7.children.some(e => rj(e));
        for (let e = x.length - 2; e >= 0; e--) {
          let t = "" === x[e] && "" === x[e + 1];
          let n = x[e] === tA && "" === x[e + 1] && x[e + 2] === tA;
          let r = (x[e] === tw || x[e] === tA) && "" === x[e + 1] && x[e + 2] === D;
          let i = x[e] === D && "" === x[e + 1] && (x[e + 2] === tw || x[e + 2] === tA);
          let a = x[e] === D && "" === x[e + 1] && x[e + 2] === D;
          let o = x[e] === tw && "" === x[e + 1] && x[e + 2] === tA || x[e] === tA && "" === x[e + 1] && x[e + 2] === tw;
          n && v || t || r || a || o ? x.splice(e, 2) : i && x.splice(e + 1, 2);
        }
        for (; x.length > 0 && rP(d(!1, x, -1));) x.pop();
        for (; x.length > 1 && rP(x[0]) && rP(x[1]);) {
          x.shift();
          x.shift();
        }
        let T = [];
        for (let [e, t] of x.entries()) {
          if (t === D) {
            if (1 === e && "" === x[e - 1]) {
              if (2 === x.length) {
                T.push(b);
                continue;
              }
              T.push([b, tA]);
              continue;
            }
            if (e === x.length - 1 || "" === x[e - 1] && x[e - 2] === tA) {
              T.push(b);
              continue;
            }
          }
          T.push(t);
          tj(t) && (y = !0);
        }
        let S = v ? tb(T) : ty(T, {
          shouldBreak: !0
        });
        if ((null == (a = t.cursorNode) ? void 0 : a.type) === "JSXText" && _node7.children.includes(t.cursorNode) ? S = [tF, S, tF] : (null == (o = t.nodeBeforeCursor) ? void 0 : o.type) === "JSXText" && _node7.children.includes(t.nodeBeforeCursor) ? S = [tF, S] : (null == (s = t.nodeAfterCursor) ? void 0 : s.type) === "JSXText" && _node7.children.includes(t.nodeAfterCursor) && (S = [S, tF]), g) return S;
        let C = ty([c, tf([tA, S]), tA, p]);
        return y ? C : tg([ty([c, ...x, p]), C]);
      }(e, t, n), t);
      return function (e, t, n) {
        let {
          parent
        } = e;
        if (rO.has(parent.type)) return t;
        let i = e.match(void 0, e => "ArrowFunctionExpression" === e.type, ef, e => "JSXExpressionContainer" === e.type);
        let a = rg(e, n);
        return ty([a ? "" : tD("("), tf([tw, t]), tw, a ? "" : tD(")")], {
          shouldBreak: i
        });
      }(e, i, t);
    case "JSXOpeningElement":
      return function (e, t, n) {
        var r;
        var i;
        let a;
        let {
          node: _node8
        } = e;
        let s = eW(_node8.name) || eW(_node8.typeParameters) || eW(_node8.typeArguments);
        if (_node8.selfClosing && 0 === _node8.attributes.length && !s) return ["<", n("name"), _node8.typeArguments ? n("typeArguments") : n("typeParameters"), " />"];
        if ((null == (r = _node8.attributes) ? void 0 : r.length) === 1 && Q(_node8.attributes[0].value) && !_node8.attributes[0].value.value.includes(`
`) && !s && !eW(_node8.attributes[0])) return ty(["<", n("name"), _node8.typeArguments ? n("typeArguments") : n("typeParameters"), " ", ...e.map(n, "attributes"), _node8.selfClosing ? " />" : ">"]);
        let _ = null == (i = _node8.attributes) ? void 0 : i.some(e => Q(e.value) && e.value.value.includes(`
`));
        let l = t.singleAttributePerLine && _node8.attributes.length > 1 ? tA : tE;
        return ty(["<", n("name"), _node8.typeArguments ? n("typeArguments") : n("typeParameters"), tf(e.map(() => [l, n()], "attributes")), ...(_node8.selfClosing ? [tE, "/>"] : (a = _node8.attributes.length > 0 && eW(d(!1, _node8.attributes, -1), ez.Trailing), 0 === _node8.attributes.length && !s || (t.bracketSameLine || t.jsxBracketSameLine) && (!s || _node8.attributes.length > 0) && !a) ? [">"] : [tw, ">"])], {
          shouldBreak: _
        });
      }(e, t, n);
    case "JSXClosingElement":
      return function (e, t, n) {
        let {
          node: _node9
        } = e;
        let i = [];
        i.push("</");
        let a = n("name");
        eW(_node9.name, ez.Leading | ez.Line) ? i.push(tf([tA, a]), tA) : eW(_node9.name, ez.Leading | ez.Block) ? i.push(" ", a) : i.push(a);
        i.push(">");
        return i;
      }(e, 0, n);
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
      return function (e, t) {
        let {
          node: _node0
        } = e;
        let r = eW(_node0);
        let i = eW(_node0, ez.Line);
        let a = "JSXOpeningFragment" === _node0.type;
        return [a ? "<" : "</", tf([i ? tA : r && !a ? " " : "", rS(e, t)]), i ? tA : "", ">"];
      }(e, t);
    case "JSXEmptyExpression":
      return function (e, t) {
        let {
          node: _node1
        } = e;
        let r = eW(_node1, ez.Line);
        return [rS(e, t, {
          indent: r
        }), r ? tA : ""];
      }(e, t);
    case "JSXText":
      throw Error("JSXText should be handled by JSXElement");
    default:
      throw new rA(node, "JSX");
  }
}
function rj(e) {
  return "JSXText" === e.type && (rF.hasNonWhitespaceCharacter(eE(e)) || !/\n/u.test(eE(e)));
}
var rM = function (e) {
  return eU(e.node) || function (e) {
    let {
      node,
      parent
    } = e;
    if (!ea(node) || !ea(parent)) return !1;
    let {
      index,
      siblings
    } = e;
    let a;
    for (let e = index; e > 0; e--) {
      let t = siblings[e - 1];
      if (!("JSXText" === t.type && !rj(t))) {
        a = t;
        break;
      }
    }
    return a?.type === "JSXExpressionContainer" && "JSXEmptyExpression" === a.expression.type && eU(a.expression);
  }(e);
};
var rL = 0;
function rR(e, t, n) {
  var r;
  let {
    node,
    parent,
    grandparent,
    key
  } = e;
  let _ = "body" !== key && ("IfStatement" === parent.type || "WhileStatement" === parent.type || "SwitchStatement" === parent.type || "DoWhileStatement" === parent.type);
  let l = "|>" === node.operator && (null == (r = e.root.extra) ? void 0 : r.__isUsingHackPipeline);
  let u = function e(t, n, r, i, a) {
    var o;
    let {
      node: _node10
    } = t;
    if (!e_(_node10)) return [ty(n())];
    let _ = [];
    eN(_node10.operator, _node10.left.operator) ? _ = t.call(t => e(t, n, r, !0, a), "left") : _.push(ty(n("left")));
    let l = rJ(_node10);
    let u = ("|>" === _node10.operator || "NGPipeExpression" === _node10.type || ("__vue_expression" === r.parser || "__vue_ts_expression" === r.parser) && rq(t.node) && !t.hasAncestor(e => !rq(e) && "JsExpressionRoot" !== e.type)) && !eb(r.originalText, _node10.right);
    let c = "NGPipeExpression" === _node10.type ? "|" : _node10.operator;
    let p = "NGPipeExpression" === _node10.type && _node10.$$arguments.length > 0 ? ty(tf([tw, ": ", tP([tE, ": "], t.map(() => th(2, ty(n())), "arguments"))])) : "";
    let d;
    if (l) d = [c, " ", n("right"), p];else {
      let i = "|>" === c && (null == (o = t.root.extra) ? void 0 : o.__isUsingHackPipeline) ? t.call(t => e(t, n, r, !0, a), "right") : n("right");
      d = [u ? tE : "", c, u ? " " : tE, i, p];
    }
    let {
      parent: _parent3
    } = t;
    let f = eW(_node10.left, ez.Trailing | ez.Line);
    let h = f || !(a && "LogicalExpression" === _node10.type) && _parent3.type !== _node10.type && _node10.left.type !== _node10.type && _node10.right.type !== _node10.type;
    if (_.push(u ? "" : " ", h ? ty(d, {
      shouldBreak: f
    }) : d), i && eW(_node10)) {
      let e = tR(rE(t, _, r));
      return e.type === te ? e.parts : Array.isArray(e) ? e : [e];
    }
    return _;
  }(e, n, t, !1, _);
  if (_) return u;
  if (l) return ty(u);
  if (ef(parent) && parent.callee === node || "UnaryExpression" === parent.type || eh(parent) && !parent.computed) return ty([tf([tw, ...u]), tw]);
  let c = "ReturnStatement" === parent.type || "ThrowStatement" === parent.type || "JSXExpressionContainer" === parent.type && "JSXAttribute" === grandparent.type || "|" !== node.operator && "JsExpressionRoot" === parent.type || "NGPipeExpression" !== node.type && ("NGRoot" === parent.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === parent.type && "NGMicrosyntax" === grandparent.type && 1 === grandparent.body.length) || node === parent.body && "ArrowFunctionExpression" === parent.type || node !== parent.body && "ForStatement" === parent.type || "ConditionalExpression" === parent.type && "ReturnStatement" !== grandparent.type && "ThrowStatement" !== grandparent.type && !ef(grandparent) || "TemplateLiteral" === parent.type;
  let p = "AssignmentExpression" === parent.type || "VariableDeclarator" === parent.type || "ClassProperty" === parent.type || "PropertyDefinition" === parent.type || "TSAbstractPropertyDefinition" === parent.type || "ClassPrivateProperty" === parent.type || eG(parent);
  let m = e_(node.left) && eN(node.operator, node.left.operator);
  if (c || rJ(node) && !m || !rJ(node) && p) return ty(u);
  if (0 === u.length) return "";
  let f = ea(node.right);
  let h = u.findIndex(e => "string" != typeof e && !Array.isArray(e) && e.type === e9);
  let y = u.slice(0, -1 === h ? 1 : h + 1);
  let g = u.slice(y.length, f ? -1 : void 0);
  let b = Symbol("logicalChain-" + ++rL);
  let D = ty([...y, tf(g)], {
    id: b
  });
  return f ? ty([D, tx(d(!1, u, -1), {
    groupId: b
  })]) : D;
}
function rJ(e) {
  return "LogicalExpression" === e.type && !!(G(e.right) && e.right.properties.length > 0 || H(e.right) && e.right.elements.length > 0 || ea(e.right));
}
var rq = e => "BinaryExpression" === e.type && "|" === e.operator;
function rU(e, t, n) {
  let {
    node
  } = e;
  if (node.type.startsWith("NG")) switch (node.type) {
    case "NGRoot":
      return [n("node"), eW(node.node) ? " //" + eV(node.node)[0].value.trimEnd() : ""];
    case "NGPipeExpression":
      return rR(e, t, n);
    case "NGChainedExpression":
      return ty(tP([";", tE], e.map(() => !function ({
        node: e
      }) {
        return z(e, rK);
      }(e) ? ["(", n(), ")"] : n(), "expressions")));
    case "NGEmptyExpression":
      return "";
    case "NGMicrosyntax":
      return e.map(() => [e.isFirst ? "" : rz(e) ? " " : [";", tE], n()], "body");
    case "NGMicrosyntaxKey":
      return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/iu.test(node.name) ? node.name : JSON.stringify(node.name);
    case "NGMicrosyntaxExpression":
      return [n("expression"), null === node.alias ? "" : [" as ", n("alias")]];
    case "NGMicrosyntaxKeyedExpression":
      {
        let {
          index,
          parent
        } = e;
        let a = rz(e) || (1 === index && ("then" === node.key.name || "else" === node.key.name || "as" === node.key.name) || (2 === index || 3 === index) && ("else" === node.key.name && "NGMicrosyntaxKeyedExpression" === parent.body[index - 1].type && "then" === parent.body[index - 1].key.name || "track" === node.key.name)) && "NGMicrosyntaxExpression" === parent.body[0].type;
        return [n("key"), a ? " " : ": ", n("expression")];
      }
    case "NGMicrosyntaxLet":
      return ["let ", n("key"), null === node.value ? "" : [" = ", n("value")]];
    case "NGMicrosyntaxAs":
      return [n("key"), " as ", n("alias")];
    default:
      throw new rA(node, "Angular");
  }
}
function rz({
  node: e,
  index: t
}) {
  return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t;
}
var rK = R(["CallExpression", "OptionalCallExpression", "AssignmentExpression"]);
function rW(e, t, n) {
  let {
    node
  } = e;
  return ty([tP(tE, e.map(n, "decorators")), rV(node, t) ? tA : tE]);
}
function rV(e, t) {
  return e.decorators.some(e => T(t.originalText, I(e)));
}
function r$(e) {
  var t;
  if ("ExportDefaultDeclaration" !== e.type && "ExportNamedDeclaration" !== e.type && "DeclareExportDeclaration" !== e.type) return !1;
  let n = null == (t = e.declaration) ? void 0 : t.decorators;
  return w(n) && O(e, n[0]);
}
var rH = class extends Error {
  name = "ArgExpansionBailout";
};
function rG(e, t = !1) {
  var n;
  return G(e) && (e.properties.length > 0 || eW(e)) || H(e) && (e.elements.length > 0 || eW(e)) || "TSTypeAssertion" === e.type && rG(e.expression) || eX(e) && rG(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type || "BlockStatement" === (n = e.body).type && (n.body.some(e => "EmptyStatement" !== e.type) || eW(n, ez.Dangling))) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type && rG(e.body, !0) || G(e.body) || H(e.body) || !t && (ef(e.body) || "ConditionalExpression" === e.body.type) || ea(e.body)) || "DoExpression" === e.type || "ModuleExpression" === e.type;
}
function rX(e, t) {
  let n = e[t];
  let r = e[t + 1];
  return "ArrowFunctionExpression" === n.type && 0 === ej(n).length && "BlockStatement" === n.body.type && "ArrayExpression" === r.type && !e.some(e => eW(e));
}
var rY = function (e, t, n) {
  let {
    node
  } = e;
  let i = eL(node);
  if (0 === i.length) return ["(", rS(e, t), ")"];
  let a = i.length - 1;
  if (2 === i.length ? rX(i, 0) : 3 === i.length && "Identifier" === i[0].type && rX(i, 1)) {
    let t = ["("];
    eR(e, (e, r) => {
      t.push(n());
      r !== a && t.push(", ");
    });
    t.push(")");
    return t;
  }
  let o = !1;
  let s = [];
  eR(e, ({
    node: e
  }, r) => {
    let i = n();
    r === a || (e$(e, t) ? (o = !0, i = [i, ",", tA, tA]) : i = [i, ",", tE]);
    s.push(i);
  });
  let _ = !t.parser.startsWith("__ng_") && "ImportExpression" !== node.type && ew(t, "all") ? "," : "";
  function l() {
    return ty(["(", tf([tE, ...s]), _, tE, ")"], {
      shouldBreak: !0
    });
  }
  if (o || "Decorator" !== e.parent.type && function (e) {
    if (e.length <= 1) return !1;
    let t = 0;
    for (let n of e) if (er(n)) {
      if ((t += 1) > 1) return !0;
    } else if (ef(n)) {
      for (let e of eL(n)) if (er(e)) return !0;
    }
    return !1;
  }(i)) return l();
  if (function (e) {
    var t;
    if (2 !== e.length) return !1;
    let [n, r] = e;
    return !!("ModuleExpression" === n.type && "ObjectExpression" === (t = r).type && 1 === t.properties.length && eG(t.properties[0]) && "Identifier" === t.properties[0].key.type && "type" === t.properties[0].key.name && Q(t.properties[0].value) && "module" === t.properties[0].value.value) || !eW(n) && ("FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type && "BlockStatement" === n.body.type) && "FunctionExpression" !== r.type && "ArrowFunctionExpression" !== r.type && "ConditionalExpression" !== r.type && function e(t) {
      if ("ParenthesizedExpression" === t.type) return e(t.expression);
      if (eX(t) || "TypeCastExpression" === t.type) {
        let {
          typeAnnotation
        } = t;
        if ("TypeAnnotation" === typeAnnotation.type && (e = typeAnnotation.typeAnnotation), "TSArrayType" === typeAnnotation.type && "TSArrayType" === (e = typeAnnotation.elementType).type && (e = typeAnnotation.elementType), "GenericTypeAnnotation" === typeAnnotation.type || "TSTypeReference" === typeAnnotation.type) {
          let t = typeAnnotation.typeArguments ?? typeAnnotation.typeParameters;
          t?.params.length === 1 && (e = t.params[0]);
        }
        return ec(typeAnnotation) && eC(t.expression, 1);
      }
      return (!eH(t) || !(eL(t).length > 1)) && (e_(t) ? eC(t.left, 1) && eC(t.right, 1) : Z(t) || eC(t));
    }(r) && !rG(r);
  }(i)) {
    let e;
    let t = s.slice(1);
    if (t.some(tj)) return l();
    try {
      e = n(eJ(node, 0), {
        expandFirstArg: !0
      });
    } catch (e) {
      if (e instanceof rH) return l();
      throw e;
    }
    return tj(e) ? [tS, tg([["(", ty(e, {
      shouldBreak: !0
    }), ", ", ...t, ")"], l()])] : tg([["(", e, ", ", ...t, ")"], ["(", ty(e, {
      shouldBreak: !0
    }), ", ", ...t, ")"], l()]);
  }
  if (function (e, t, n) {
    var r;
    var i;
    let a = d(!1, e, -1);
    if (1 === e.length) {
      let e = d(!1, t, -1);
      if (null != (r = e.label) && r.embed && (null == (i = e.label) ? void 0 : i.hug) !== !1) return !0;
    }
    let o = d(!1, e, -2);
    return !eW(a, ez.Leading) && !eW(a, ez.Trailing) && rG(a) && (!o || o.type !== a.type) && (2 !== e.length || "ArrowFunctionExpression" !== o.type || !H(a)) && !(e.length > 1 && ij(a, n));
  }(i, s, t)) {
    let e;
    let t = s.slice(0, -1);
    if (t.some(tj)) return l();
    try {
      e = n(eJ(node, -1), {
        expandLastArg: !0
      });
    } catch (e) {
      if (e instanceof rH) return l();
      throw e;
    }
    return tj(e) ? [tS, tg([["(", ...t, ty(e, {
      shouldBreak: !0
    }), ")"], l()])] : tg([["(", ...t, e, ")"], ["(", ...t, ty(e, {
      shouldBreak: !0
    }), ")"], l()]);
  }
  let u = ["(", tf([tw, ...s]), tD(_), tw, ")"];
  return eT(e) ? u : ty(u, {
    shouldBreak: s.some(tj) || o
  });
};
var rQ = e => (("ChainExpression" === e.type || "TSNonNullExpression" === e.type) && (e = e.expression), ef(e) && eL(e).length > 0);
function rZ(e, t, n) {
  let r = n("property");
  let {
    node
  } = e;
  let a = iS(e);
  return node.computed ? !node.property || X(node.property) ? [a, "[", r, "]"] : ty([a, "[", tf([tw, r]), tw, "]"]) : [a, ".", r];
}
var r0 = function e(t, n, r) {
  var i;
  let a;
  let o;
  if ("ChainExpression" === t.node.type) return t.call(() => e(t, n, r), "expression");
  let {
    parent
  } = t;
  let _ = !parent || "ExpressionStatement" === parent.type;
  let l = [];
  function u(e) {
    let {
      originalText
    } = n;
    let r = tX(originalText, I(e));
    return ")" === originalText.charAt(r) ? !1 !== r && E(originalText, r + 1) : e$(e, n);
  }
  let {
    node
  } = t;
  l.unshift({
    node,
    printed: [iS(t), iF(t, n, r), rY(t, n, r)]
  });
  node.callee && t.call(function e() {
    let {
      node: _node11
    } = t;
    if ("ChainExpression" === _node11.type) return t.call(e, "expression");
    if (ef(_node11) && (el(_node11.callee) || ef(_node11.callee))) {
      let a = u(_node11);
      l.unshift({
        node: _node11,
        hasTrailingEmptyLine: a,
        printed: [rE(t, [iS(t), iF(t, n, r), rY(t, n, r)], n), a ? tA : ""]
      });
      t.call(e, "callee");
    } else el(_node11) ? (l.unshift({
      node: _node11,
      needsParens: rg(t, n),
      printed: rE(t, eh(_node11) ? rZ(t, n, r) : iP(t, n, r), n)
    }), t.call(e, "object")) : "TSNonNullExpression" === _node11.type ? (l.unshift({
      node: _node11,
      printed: rE(t, "!", n)
    }), t.call(e, "expression")) : l.unshift({
      node: _node11,
      printed: r()
    });
  }, "callee");
  let p = [];
  let m = [l[0]];
  let f = 1;
  for (; f < l.length && ("TSNonNullExpression" === l[f].node.type || ef(l[f].node) || eh(l[f].node) && l[f].node.computed && X(l[f].node.property)); ++f) m.push(l[f]);
  if (!ef(l[0].node)) for (; f + 1 < l.length && el(l[f].node) && el(l[f + 1].node); ++f) m.push(l[f]);
  p.push(m);
  m = [];
  let h = !1;
  for (; f < l.length; ++f) {
    if (h && el(l[f].node)) {
      if (l[f].node.computed && X(l[f].node.property)) {
        m.push(l[f]);
        continue;
      }
      p.push(m);
      m = [];
      h = !1;
    }
    (ef(l[f].node) || "ImportExpression" === l[f].node.type) && (h = !0);
    m.push(l[f]);
    eW(l[f].node, ez.Trailing) && (p.push(m), m = [], h = !1);
  }
  function y(e) {
    return /^[A-Z]|^[$_]+$/u.test(e);
  }
  m.length > 0 && p.push(m);
  let g = p.length >= 2 && !eW(p[1][0].node) && function (e) {
    var t;
    let r = null == (t = e[1][0]) ? void 0 : t.node.computed;
    if (1 === e[0].length) {
      let t = e[0][0].node;
      return "ThisExpression" === t.type || "Identifier" === t.type && (y(t.name) || _ && t.name.length <= n.tabWidth || r);
    }
    let i = d(!1, e[0], -1).node;
    return eh(i) && "Identifier" === i.property.type && (y(i.property.name) || r);
  }(p);
  function b(e) {
    let t = e.map(e => e.printed);
    return e.length > 0 && d(!1, e, -1).needsParens ? ["(", ...t, ")"] : t;
  }
  let D = p.map(b);
  let x = g ? 3 : 2;
  let v = p.flat();
  let T = v.slice(1, -1).some(e => eW(e.node, ez.Leading)) || v.slice(0, -1).some(e => eW(e.node, ez.Trailing)) || p[x] && eW(p[x][0].node, ez.Leading);
  if (p.length <= x && !T && !p.some(e => d(!1, e, -1).hasTrailingEmptyLine)) return eT(t) ? D : ty(D);
  let S = d(!1, p[g ? 1 : 0], -1).node;
  let C = !ef(S) && u(S);
  let w = [b(p[0]), g ? p.slice(1, 2).map(b) : "", C ? tA : "", 0 === (i = p.slice(g ? 2 : 1)).length ? "" : tf([tA, tP(tA, i.map(b))])];
  let A = l.map(({
    node: e
  }) => e).filter(ef);
  return tN({
    memberChain: !0
  }, T || A.length > 2 && A.some(e => !e.$$arguments.every(e => eC(e))) || D.slice(0, -1).some(tj) || (a = d(!1, d(!1, p, -1), -1).node, o = d(!1, D, -1), ef(a) && tj(o) && A.slice(0, -1).some(e => e.$$arguments.some(er))) ? ty(w) : [tj(D) || C ? tS : "", tg([D, w])]);
};
function r1(e, t, n) {
  var r;
  let {
    node
  } = e;
  let a = "NewExpression" === node.type;
  let o = "ImportExpression" === node.type;
  let s = iS(e);
  let _ = eL(node);
  let l = 1 === _.length && ex(_[0], t.originalText);
  if (l || function (e) {
    let {
      node
    } = e;
    if ("CallExpression" !== node.type || node.optional || "Identifier" !== node.callee.type) return !1;
    let n = eL(node);
    return "require" === node.callee.name ? 1 === n.length && Q(n[0]) || n.length > 1 : "define" === node.callee.name && "ExpressionStatement" === e.parent.type && (1 === n.length || 2 === n.length && "ArrayExpression" === n[0].type || 3 === n.length && Q(n[0]) && "ArrayExpression" === n[1].type);
  }(e) || ed(node, e.parent)) {
    let i = [];
    if (eR(e, () => {
      i.push(n());
    }), !(l && null != (r = i[0].label) && r.embed)) return [a ? "new " : "", r2(e, n), s, iF(e, t, n), "(", tP(", ", i), ")"];
  }
  if (!o && !a && el(node.callee) && !e.call(e => rg(e, t), "callee", ...("ChainExpression" === node.callee.type ? ["expression"] : []))) return r0(e, t, n);
  let u = [a ? "new " : "", r2(e, n), s, iF(e, t, n), rY(e, t, n)];
  return o || ef(node.callee) ? ty(u) : u;
}
function r2(e, t) {
  let {
    node
  } = e;
  return "ImportExpression" === node.type ? `import${node.phase ? `.${node.phase}` : ""}` : t("callee");
}
function r3(e, t, n, r, i, a) {
  let o = function (e, t, n, r, i) {
    var a;
    let {
      node
    } = e;
    let s = node[i];
    if (!s) return "only-left";
    let _ = !r6(s);
    if (e.match(r6, r4, e => !_ || "ExpressionStatement" !== e.type && "VariableDeclaration" !== e.type)) return _ ? "ArrowFunctionExpression" === s.type && "ArrowFunctionExpression" === s.body.type ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
    if (!_ && r6(s.right) || eb(t.originalText, s)) return "break-after-operator";
    if ("ImportAttribute" === node.type || "CallExpression" === s.type && "require" === s.callee.name || "json5" === t.parser || "jsonc" === t.parser || "json" === t.parser) return "never-break-after-operator";
    let l = tO(r, tq, !1);
    if (function (e) {
      if (r4(e)) {
        let t = e.left || e.id;
        return "ObjectPattern" === t.type && t.properties.length > 2 && t.properties.some(e => {
          var t;
          return eG(e) && (!e.shorthand || (null == (t = e.value) ? void 0 : t.type) === "AssignmentPattern");
        });
      }
      return !1;
    }(node) || function (e) {
      if ("VariableDeclarator" !== e.type) return !1;
      let {
        typeAnnotation
      } = e.id;
      if (!typeAnnotation || !typeAnnotation.typeAnnotation) return !1;
      let n = r9(typeAnnotation.typeAnnotation);
      return w(n) && n.length > 1 && n.some(e => w(r9(e)) || "TSConditionalType" === e.type);
    }(node) || r5(node) && l) return "break-lhs";
    a = r;
    let u = !!eG(node) && "string" == typeof (a = tR(a)) && y(a) < t.tabWidth + 3;
    return e.call(() => function (e, t, n, r) {
      let i = e.node;
      if (e_(i) && !rJ(i)) return !0;
      switch (i.type) {
        case "StringLiteralTypeAnnotation":
        case "SequenceExpression":
          return !0;
        case "TSConditionalType":
        case "ConditionalTypeAnnotation":
          if (!t.experimentalTernaries && !function (e) {
            function t(e) {
              switch (e.type) {
                case "FunctionTypeAnnotation":
                case "GenericTypeAnnotation":
                case "TSFunctionType":
                  return !!e.typeParameters;
                case "TSTypeReference":
                  return !!(e.typeArguments ?? e.typeParameters);
                default:
                  return !1;
              }
            }
            return t(e.checkType) || t(e.extendsType);
          }(i)) break;
          return !0;
        case "ConditionalExpression":
          {
            if (!t.experimentalTernaries) {
              let {
                test
              } = i;
              return e_(test) && !rJ(test);
            }
            let {
              consequent,
              alternate
            } = i;
            return "ConditionalExpression" === consequent.type || "ConditionalExpression" === alternate.type;
          }
        case "ClassExpression":
          return w(i.decorators);
      }
      if (r) return !1;
      let a = i;
      let o = [];
      for (;;) if ("UnaryExpression" === a.type || "AwaitExpression" === a.type || "YieldExpression" === a.type && null !== a.argument) {
        a = a.argument;
        o.push("argument");
      } else if ("TSNonNullExpression" === a.type) {
        a = a.expression;
        o.push("expression");
      } else break;
      return !!(Q(a) || e.call(() => function e(t, n, r, i = !1) {
        var a;
        let {
          node
        } = t;
        let s = () => e(t, n, r, !0);
        if ("ChainExpression" === node.type || "TSNonNullExpression" === node.type) return t.call(s, "expression");
        if (ef(node)) {
          if (null != (a = r1(t, n, r).label) && a.memberChain) return !1;
          let e = eL(node);
          return !(!(0 === e.length || 1 === e.length && eg(e[0], n)) || function (e, t) {
            var n;
            let r = null == (n = e.typeParameters ?? e.typeArguments) ? void 0 : n.params;
            if (w(r)) {
              if (r.length > 1) return !0;
              if (1 === r.length) {
                let e = r[0];
                if (eY(e) || eQ(e) || "TSTypeLiteral" === e.type || "ObjectTypeAnnotation" === e.type) return !0;
              }
              if (tj(t(e.typeParameters ? "typeParameters" : "typeArguments"))) return !0;
            }
            return !1;
          }(node, r)) && t.call(s, "callee");
        }
        return eh(node) ? t.call(s, "object") : i && ("Identifier" === node.type || "ThisExpression" === node.type);
      }(e, t, n), ...o));
    }(e, t, n, u), i) ? "break-after-operator" : !function (e) {
      let t = function (e) {
        var t;
        if (r8(e)) return null == (t = e.typeParameters) ? void 0 : t.params;
      }(e);
      if (w(t)) {
        let n = "TSTypeAliasDeclaration" === e.type ? "constraint" : "bound";
        if (t.length > 1 && t.some(e => e[n] || e.$$default)) return !0;
      }
      return !1;
    }(node) ? !l && (u || "TemplateLiteral" === s.type || "TaggedTemplateExpression" === s.type || "BooleanLiteral" === s.type || X(s) || "ClassExpression" === s.type) ? "never-break-after-operator" : "fluid" : "break-lhs";
  }(e, t, n, r, a);
  let s = a ? n(a, {
    assignmentLayout: o
  }) : "";
  switch (o) {
    case "break-after-operator":
      return ty([ty(r), i, ty(tf([tE, s]))]);
    case "never-break-after-operator":
      return ty([ty(r), i, " ", s]);
    case "fluid":
      {
        let e = Symbol("assignment");
        return ty([ty(r), i, ty(tf(tE), {
          id: e
        }), tT, tx(s, {
          groupId: e
        })]);
      }
    case "break-lhs":
      return ty([r, i, " ", ty(s)]);
    case "chain":
      return [ty(r), i, tE, s];
    case "chain-tail":
      return [ty(r), i, tf([tE, s])];
    case "chain-tail-arrow-chain":
      return [ty(r), i, s];
    case "only-left":
      return r;
  }
}
function r6(e) {
  return "AssignmentExpression" === e.type;
}
function r4(e) {
  return r6(e) || "VariableDeclarator" === e.type;
}
var r8 = R(["TSTypeAliasDeclaration", "TypeAlias"]);
function r5(e) {
  var t;
  return "VariableDeclarator" === e.type && (null == (t = e.init) ? void 0 : t.type) === "ArrowFunctionExpression";
}
var r7 = R(["TSTypeReference", "GenericTypeAnnotation"]);
function r9(e) {
  var t;
  if (r7(e)) return null == (t = e.typeArguments ?? e.typeParameters) ? void 0 : t.params;
}
function ie(e, t, n, r, i) {
  var a;
  let o = e.node;
  let s = ej(o);
  let _ = i ? iF(e, n, t) : "";
  if (0 === s.length) return [_, "(", rS(e, n, {
    filter: e => ")" === tY(n.originalText, I(e))
  }), ")"];
  let {
    parent
  } = e;
  let u = ed(parent);
  let c = it(o);
  let p = [];
  if (function (e, t) {
    let {
      node
    } = e;
    let r = 0;
    let i = e => t(e, r++);
    node.$$this && e.call(i, "this");
    Array.isArray(node.parameters) ? e.each(i, "parameters") : Array.isArray(node.params) && e.each(i, "params");
    node.rest && e.call(i, "rest");
  }(e, (e, r) => {
    let i = r === s.length - 1;
    i && o.rest && p.push("...");
    p.push(t());
    i || (p.push(","), u || c ? p.push(" ") : e$(s[r], n) ? p.push(tA, tA) : p.push(tE));
  }), r && !e.match(e => "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type, (e, t) => {
    if ("CallExpression" === e.type && "arguments" === t && 1 === e.$$arguments.length && "CallExpression" === e.callee.type) {
      let t = e.callee.callee;
      return "Identifier" === t.type || "MemberExpression" === t.type && !t.computed && "Identifier" === t.object.type && "Identifier" === t.property.type;
    }
    return !1;
  }, (e, t) => "VariableDeclarator" === e.type && "init" === t || "ExportDefaultDeclaration" === e.type && "declaration" === t || "TSExportAssignment" === e.type && "expression" === t || "AssignmentExpression" === e.type && "right" === t && "MemberExpression" === e.left.type && "Identifier" === e.left.object.type && "module" === e.left.object.name && "Identifier" === e.left.property.type && "exports" === e.left.property.name, e => "VariableDeclaration" !== e.type || "const" === e.kind && 1 === e.declarations.length)) {
    if (tj(_) || tj(p)) throw new rH();
    return ty([tI(_, tL), "(", tI(p, tL), ")"]);
  }
  let m = s.every(e => !w(e.decorators));
  return c && m ? [_, "(", ...p, ")"] : u ? [_, "(", ...p, ")"] : (es(parent) || ("TypeAnnotation" === parent.type || "TSTypeAnnotation" === parent.type) && "FunctionTypeAnnotation" === parent.typeAnnotation.type && !parent.$$static && !O(parent, parent.typeAnnotation) || "TypeAlias" === parent.type || "UnionTypeAnnotation" === parent.type || "IntersectionTypeAnnotation" === parent.type || "FunctionTypeAnnotation" === parent.type && parent.returnType === o) && 1 === s.length && null === s[0].name && o.$$this !== s[0] && s[0].typeAnnotation && null === o.typeParameters && ec(s[0].typeAnnotation) && !o.rest ? "always" === n.arrowParens || "HookTypeAnnotation" === o.type ? ["(", ...p, ")"] : p : [_, "(", tf([tw, ...p]), tD(!(o.rest || (null == (a = d(!1, ej(o), -1)) ? void 0 : a.type) === "RestElement") && ew(n, "all") ? "," : ""), tw, ")"];
}
function it(e) {
  if (!e) return !1;
  let t = ej(e);
  if (1 !== t.length) return !1;
  let [n] = t;
  return !eW(n) && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && en(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && en(n.typeAnnotation) && n !== e.rest || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || G(n.right) && 0 === n.right.properties.length || H(n.right) && 0 === n.right.elements.length));
}
function ir(e, t) {
  var n;
  let r;
  e.returnType ? (r = e.returnType).typeAnnotation && (r = r.typeAnnotation) : e.typeAnnotation && (r = e.typeAnnotation);
  let i = r;
  if (!i) return !1;
  let a = null == (n = e.typeParameters) ? void 0 : n.params;
  if (a) {
    if (a.length > 1) return !1;
    if (1 === a.length) {
      let e = a[0];
      if (e.constraint || e.$$default) return !1;
    }
  }
  return 1 === ej(e).length && (en(i) || tj(t));
}
var ii = R(["VoidTypeAnnotation", "TSVoidKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword"]);
var ia = R(["ObjectTypeAnnotation", "TSTypeLiteral", "GenericTypeAnnotation", "TSTypeReference"]);
function io(e) {
  return !!(ec(e) || en(e)) || !!eY(e) && function (e) {
    let {
      types
    } = e;
    if (types.some(e => eW(e))) return !1;
    let n = types.find(e => ia(e));
    return !!n && types.every(e => e === n || ii(e));
  }(e);
}
function is(e, t, n) {
  let r = t.semi ? ";" : "";
  let {
    node
  } = e;
  let a = [iw(e)];
  a.push("type ", n("id"), n("typeParameters"));
  return [r3(e, t, n, a, " =", "TSTypeAliasDeclaration" === node.type ? "typeAnnotation" : "right"), r];
}
function i_(e, t, n) {
  let r = !1;
  return ty(e.map(({
    isFirst: e,
    previous: t,
    node: i,
    index: a
  }) => {
    let o = n();
    if (e) return o;
    let s = en(i);
    let _ = en(t);
    return _ && s ? [" & ", r ? tf(o) : o] : _ || s ? (a > 1 && (r = !0), [" & ", a > 1 ? tf(o) : o]) : tf([" &", tE, o]);
  }, "types"));
}
function il(e, t, n) {
  let {
    node
  } = e;
  let {
    parent
  } = e;
  let a = "TypeParameterInstantiation" !== parent.type && ("TSConditionalType" !== parent.type || !t.experimentalTernaries) && ("ConditionalTypeAnnotation" !== parent.type || !t.experimentalTernaries) && "TSTypeParameterInstantiation" !== parent.type && "GenericTypeAnnotation" !== parent.type && "TSTypeReference" !== parent.type && "TSTypeAssertion" !== parent.type && "TupleTypeAnnotation" !== parent.type && "TSTupleType" !== parent.type && !("FunctionTypeParam" === parent.type && !parent.name && e.grandparent.$$this !== parent) && !(("TypeAlias" === parent.type || "VariableDeclarator" === parent.type || "TSTypeAliasDeclaration" === parent.type) && eb(t.originalText, node));
  let o = io(node);
  let s = e.map(e => {
    let r = n();
    o || (r = th(2, r));
    return rE(e, r, t);
  }, "types");
  if (o) return tP(" | ", s);
  let _ = [tD([a && !eb(t.originalText, node) ? tE : "", "| "]), tP([tE, "| "], s)];
  return rg(e, t) ? ty([tf(_), tw]) : ("TupleTypeAnnotation" === parent.type || "TSTupleType" === parent.type) && parent["TupleTypeAnnotation" === parent.type && parent.types ? "types" : "elementTypes"].length > 1 ? ty([tf([tD(["(", tw]), _]), tw, tD(")")]) : ty(a ? tf(_) : _);
}
function iu(e, t, n) {
  let {
    node
  } = e;
  let i = [ik(e)];
  ("TSConstructorType" === node.type || "TSConstructSignatureDeclaration" === node.type) && i.push("new ");
  let a = ie(e, n, t, !1, !0);
  let o = [];
  "FunctionTypeAnnotation" === node.type ? o.push(!function (e) {
    var t;
    let {
      node,
      parent
    } = e;
    return "FunctionTypeAnnotation" === node.type && (es(parent) || !(("ObjectTypeProperty" === parent.type || "ObjectTypeInternalSlot" === parent.type) && !parent.variance && !parent.optional && O(parent, node) || "ObjectTypeCallProperty" === parent.type || (null == (t = e.getParentNode(2)) ? void 0 : t.type) === "DeclareFunction"));
  }(e) ? ": " : " => ", n("returnType")) : o.push(ig(e, n, node.returnType ? "returnType" : "typeAnnotation"));
  ir(node, o) && (a = ty(a));
  i.push(a, o);
  return ty(i);
}
function ic(e, t, n) {
  return [n("objectType"), iS(e), "[", n("indexType"), "]"];
}
function ip(e, t, n) {
  return ["infer ", n("typeParameter")];
}
function id(e, t, n) {
  let {
    node
  } = e;
  return [node.postfix ? "" : n, ig(e, t), node.postfix ? n : ""];
}
function im(e, t, n) {
  let {
    node
  } = e;
  return ["...", ...("TupleTypeSpreadElement" === node.type && node.label ? [n("label"), ": "] : []), n("typeAnnotation")];
}
function ih(e, t, n) {
  let {
    node
  } = e;
  return [node.variance ? n("variance") : "", n("label"), node.optional ? "?" : "", ": ", n("elementType")];
}
var iy = new WeakSet();
function ig(e, t, n = "typeAnnotation") {
  let {
    node: {
      [n]: _n
    }
  } = e;
  if (!_n) return "";
  let i = !1;
  if ("TSTypeAnnotation" === _n.type || "TypeAnnotation" === _n.type) {
    let t = e.call(ib, n);
    ("=>" === t || ":" === t && eW(_n, ez.Leading)) && (i = !0);
    iy.add(_n);
  }
  return i ? [" ", t(n)] : t(n);
}
var ib = e => e.match(e => "TSTypeAnnotation" === e.type, (e, t) => ("returnType" === t || "typeAnnotation" === t) && ("TSFunctionType" === e.type || "TSConstructorType" === e.type)) ? "=>" : e.match(e => "TSTypeAnnotation" === e.type, (e, t) => "typeAnnotation" === t && ("TSJSDocNullableType" === e.type || "TSJSDocNonNullableType" === e.type || "TSTypePredicate" === e.type)) || e.match(e => "TypeAnnotation" === e.type, (e, t) => "typeAnnotation" === t && "Identifier" === e.type, (e, t) => "id" === t && "DeclareFunction" === e.type) || e.match(e => "TypeAnnotation" === e.type, (e, t) => "typeAnnotation" === t && "Identifier" === e.type, (e, t) => "id" === t && "DeclareHook" === e.type) || e.match(e => "TypeAnnotation" === e.type, (e, t) => "bound" === t && "TypeParameter" === e.type && e.usesExtendsBound) ? "" : ":";
function iD(e, t, n) {
  let r = ib(e);
  return r ? [r, " ", n("typeAnnotation")] : n("typeAnnotation");
}
function ix(e) {
  return [e("elementType"), "[]"];
}
function iv({
  node: e
}, t) {
  let n = "TSTypeQuery" === e.type ? "exprName" : "argument";
  let r = "TypeofTypeAnnotation" === e.type || e.typeArguments ? "typeArguments" : "typeParameters";
  return ["typeof ", t(n), t(r)];
}
function iT(e, t) {
  let {
    node
  } = e;
  return ["TSTypePredicate" === node.type && node.asserts ? "asserts " : "TypePredicate" === node.type && node.kind ? `${node.kind} ` : "", t("parameterName"), node.typeAnnotation ? [" is ", ig(e, t)] : ""];
}
function iS(e) {
  let {
    node
  } = e;
  return node.optional && ("Identifier" !== node.type || node !== e.parent.key) ? ef(node) || eh(node) && node.computed || "OptionalIndexedAccessType" === node.type ? "?." : "?" : "";
}
function iC(e) {
  return e.node.definite || e.match(void 0, (e, t) => "id" === t && "VariableDeclarator" === e.type && e.definite) ? "!" : "";
}
var iE = new Set(["DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "DeclareVariable", "DeclareExportDeclaration", "DeclareExportAllDeclaration", "DeclareOpaqueType", "DeclareTypeAlias", "DeclareEnum", "DeclareInterface"]);
function iw(e) {
  let {
    node
  } = e;
  return node.declare || iE.has(node.type) && "DeclareExportDeclaration" !== e.parent.type ? "declare " : "";
}
var iA = new Set(["TSAbstractMethodDefinition", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function ik({
  node: e
}) {
  return e.$$abstract || iA.has(e.type) ? "abstract " : "";
}
function iF(e, t, n) {
  let r = e.node;
  return r.typeArguments ? n("typeArguments") : r.typeParameters ? n("typeParameters") : "";
}
function iP(e, t, n) {
  return ["::", n("callee")];
}
function iN(e, t, n) {
  return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? [" ", t] : tf([tE, t]);
}
function iI(e, t) {
  return ["...", t("argument"), ig(e, t)];
}
function iO(e) {
  return e.accessibility ? e.accessibility + " " : "";
}
function iB(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  let a = "TupleExpression" === node.type ? "#[" : "[";
  let o = "TupleTypeAnnotation" === node.type && node.types ? "types" : "TSTupleType" === node.type || "TupleTypeAnnotation" === node.type ? "elementTypes" : "elements";
  let s = node[o];
  if (0 === s.length) i.push(function (e, t, n, r) {
    let {
      node
    } = e;
    let a = node.inexact ? "..." : "";
    return eW(node, ez.Dangling) ? ty([n, a, rS(e, t, {
      indent: !0
    }), tw, "]"]) : [n, a, "]"];
  }(e, t, a, 0));else {
    var _;
    let l;
    let u;
    let c = d(!1, s, -1);
    let p = c?.type !== "RestElement" && !node.inexact;
    let m = null === c;
    let f = Symbol("array");
    let h = !t.__inJestEach && s.length > 1 && s.every((e, t, n) => {
      let r = e?.type;
      if (!H(e) && !G(e)) return !1;
      let i = n[t + 1];
      if (i && r !== i.type) return !1;
      let a = H(e) ? "elements" : "properties";
      return e[a] && e[a].length > 1;
    });
    let y = ij(node, t);
    let g = p ? m ? "," : ew(t) ? y ? tD(",", "", {
      groupId: f
    }) : tD(",") : "" : "";
    i.push(ty([a, tf([tw, y ? (l = [], e.each(({
      isLast: r,
      next: i
    }) => {
      l.push([n(), r ? g : ","]);
      r || l.push(iM(e, t) ? [tA, tA] : eW(i, ez.Leading | ez.Line) ? tA : tE);
    }, "elements"), tb(l)) : [(_ = node.inexact, u = [], e.each(({
      node: r,
      isLast: i
    }) => {
      u.push(r ? ty(n()) : "");
      (!i || _) && u.push([",", tE, r && iM(e, t) ? tw : ""]);
    }, o), _ && u.push("..."), u), g], rS(e, t)]), tw, "]"], {
      shouldBreak: h,
      id: f
    }));
  }
  i.push(iS(e), ig(e, n));
  return i;
}
function ij(e, t) {
  return H(e) && e.elements.length > 1 && e.elements.every(e => e && (X(e) || Y(e) && !eW(e.argument)) && !eW(e, ez.Trailing | ez.Line, e => !T(t.originalText, N(e), {
    backwards: !0
  })));
}
function iM({
  node: e
}, {
  originalText: t
}) {
  let n = e => S(t, C(t, e));
  let r = e => "," === t[e] ? e : r(n(e + 1));
  return E(t, r(I(e)));
}
var iL = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/;
var iR = e => iL.test(e);
var iJ = function (e) {
  return 1 === e.length ? e : e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/u, "$1").replace(/^([+-])?\./u, "$10.").replace(/(\.\d+?)0+(?=e|$)/u, "$1").replace(/\.(?=e|$)/u, "");
};
var iq = new WeakMap();
function iU(e) {
  return /^(?:\d+|\d+\.\d+)$/u.test(e);
}
function iz(e, t) {
  return !!("json" !== t.parser && "jsonc" !== t.parser && Q(e.key)) && P(eE(e.key), t).slice(1, -1) === e.key.value && !!(iR(e.key.value) && !("babel-ts" === t.parser && "ClassProperty" === e.type || "typescript" === t.parser && "PropertyDefinition" === e.type) || iU(e.key.value) && String(Number(e.key.value)) === e.key.value && "ImportAttribute" !== e.type && ("babel" === t.parser || "acorn" === t.parser || "espree" === t.parser || "meriyah" === t.parser || "__babel_estree" === t.parser));
}
function iK(e, t, n) {
  let {
    node
  } = e;
  if (node.computed) return ["[", n("key"), "]"];
  let {
    parent
  } = e;
  let {
    key
  } = node;
  if ("consistent" === t.quoteProps && !iq.has(parent)) {
    let n = e.siblings.some(e => !e.computed && Q(e.key) && !iz(e, t));
    iq.set(parent, n);
  }
  if (function (e, t) {
    let {
      key
    } = e.node;
    return ("Identifier" === key.type || X(key) && iU(iJ(eE(key))) && String(key.value) === iJ(eE(key)) && !("typescript" === t.parser || "babel-ts" === t.parser)) && ("json" === t.parser || "jsonc" === t.parser || "consistent" === t.quoteProps && iq.get(e.parent));
  }(e, t)) {
    let n = P(JSON.stringify("Identifier" === key.type ? key.name : key.value.toString()), t);
    return e.call(e => rE(e, n, t), "key");
  }
  return iz(node, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !iq.get(parent)) ? e.call(e => rE(e, /^\d/u.test(key.value) ? iJ(key.value) : key.value, t), "key") : n("key");
}
function iW(e, t, n) {
  let {
    node
  } = e;
  return node.shorthand ? n("value") : r3(e, t, n, iK(e, t, n), ":", "value");
}
var iV = ({
  node: e,
  key: t,
  parent: n
}) => "value" === t && "FunctionExpression" === e.type && ("ObjectMethod" === n.type || "ClassMethod" === n.type || "ClassPrivateMethod" === n.type || "MethodDefinition" === n.type || "TSAbstractMethodDefinition" === n.type || "TSDeclareMethod" === n.type || "Property" === n.type && eo(n));
function i$(e, t, n, r) {
  if (iV(e)) return iG(e, n, t);
  let {
    node
  } = e;
  let a = !1;
  if (("FunctionDeclaration" === node.type || "FunctionExpression" === node.type) && null != r && r.expandLastArg) {
    let {
      parent
    } = e;
    ef(parent) && (eL(parent).length > 1 || ej(node).every(e => "Identifier" === e.type && !e.typeAnnotation)) && (a = !0);
  }
  let o = [iw(e), node.async ? "async " : "", `function${node.generator ? "*" : ""} `, node.id ? t("id") : ""];
  let s = ie(e, t, n, a);
  let _ = iY(e, t);
  let l = ir(node, _);
  o.push(iF(e, n, t), ty([l ? ty(s) : s, _]), node.body ? " " : "", t("body"));
  n.semi && (node.declare || !node.body) && o.push(";");
  return o;
}
function iH(e, t, n) {
  let {
    node
  } = e;
  let {
    kind
  } = r;
  let a = node.value || node;
  let o = [];
  kind && "init" !== kind && "method" !== kind && "constructor" !== kind ? (A.ok("get" === kind || "set" === kind), o.push(kind, " ")) : a.async && o.push("async ");
  a.generator && o.push("*");
  o.push(iK(e, t, n), node.optional || node.key.optional ? "?" : "", node === a ? iG(e, t, n) : n("value"));
  return o;
}
function iG(e, t, n) {
  let r;
  let {
    node
  } = e;
  let a = ie(e, n, t);
  let o = iY(e, n);
  let s = (r = ej(node)).length > 1 && r.some(e => "TSParameterProperty" === e.type);
  let _ = ir(node, o);
  let l = [iF(e, t, n), ty([s ? ty(a, {
    shouldBreak: !0
  }) : _ ? ty(a) : a, o])];
  node.body ? l.push(" ", n("body")) : l.push(t.semi ? ";" : "");
  return l;
}
function iX(e, t) {
  if ("always" === t.arrowParens) return !1;
  if ("avoid" === t.arrowParens) {
    let t;
    let {
      node
    } = e;
    return 1 === (t = ej(node)).length && !node.typeParameters && !eW(node, ez.Dangling) && "Identifier" === t[0].type && !t[0].typeAnnotation && !eW(t[0]) && !t[0].optional && !node.predicate && !node.returnType;
  }
  return !1;
}
function iY(e, t) {
  let {
    node
  } = e;
  let r = [ig(e, t, "returnType")];
  node.predicate && r.push(t("predicate"));
  return r;
}
function iQ(e, t, n) {
  let {
    node
  } = e;
  let i = t.semi ? ";" : "";
  let a = [];
  if (node.argument) {
    let e = n("argument");
    !function (e, t) {
      if (eb(e.originalText, t) || eW(t, ez.Leading, t => tQ(e.originalText, N(t), I(t))) && !ea(t)) return !0;
      if (K(t)) {
        var n;
        let r = t;
        let i;
        for (; i = (n = r).expressions ? n.expressions[0] : n.left ?? n.test ?? n.callee ?? n.object ?? n.tag ?? n.argument ?? n.expression;) if (r = i, eb(e.originalText, r)) return !0;
      }
      return !1;
    }(t, node.argument) ? (e_(node.argument) || "SequenceExpression" === node.argument.type || t.experimentalTernaries && "ConditionalExpression" === node.argument.type && ("ConditionalExpression" === node.argument.consequent.type || "ConditionalExpression" === node.argument.alternate.type)) && (e = ty([tD("("), tf([tw, e]), tw, tD(")")])) : e = ["(", tf([tA, e]), tA, ")"];
    a.push(" ", e);
  }
  let o = eW(node, ez.Dangling);
  let s = i && o && eW(node, ez.Last | ez.Line);
  s && a.push(i);
  o && a.push(" ", rS(e, t));
  s || a.push(i);
  return a;
}
var iZ = new WeakMap();
function i0(e) {
  iZ.has(e) || iZ.set(e, "ConditionalExpression" === e.type && !eA(e, e => "ObjectExpression" === e.type));
  return iZ.get(e);
}
var i1 = e => "SequenceExpression" === e.type;
var i2 = (e, t, n) => {
  if (!(e && null == t)) {
    if (t.findLast) return t.findLast(n);
    for (let e = t.length - 1; e >= 0; e--) {
      let r = t[e];
      if (n(r, e, t)) return r;
    }
  }
};
function i3(e, t, n, r) {
  let {
    node
  } = e;
  let a = [];
  let o = i2(!1, node[r], e => "EmptyStatement" !== e.type);
  e.each(({
    node: e
  }) => {
    "EmptyStatement" !== e.type && (a.push(n()), e !== o && (a.push(tA), e$(e, t) && a.push(tA)));
  }, r);
  return a;
}
function i6(e, t, n) {
  let r = function (e, t, n) {
    let {
      node
    } = e;
    let i = w(node.directives);
    let a = node.body.some(e => "EmptyStatement" !== e.type);
    let o = eW(node, ez.Dangling);
    if (!i && !a && !o) return "";
    let s = [];
    i && (s.push(i3(e, t, n, "directives")), (a || o) && (s.push(tA), e$(d(!1, node.directives, -1), t) && s.push(tA)));
    a && s.push(i3(e, t, n, "body"));
    o && s.push(rS(e, t));
    return s;
  }(e, t, n);
  let {
    node,
    parent
  } = e;
  if ("Program" === node.type && parent?.type !== "ModuleExpression") return r ? [r, tA] : "";
  let o = [];
  if ("StaticBlock" === node.type && o.push("static "), o.push("{"), r) o.push(tf([tA, r]), tA);else {
    let t = e.grandparent;
    "ArrowFunctionExpression" !== parent.type && "FunctionExpression" !== parent.type && "FunctionDeclaration" !== parent.type && "ComponentDeclaration" !== parent.type && "HookDeclaration" !== parent.type && "ObjectMethod" !== parent.type && "ClassMethod" !== parent.type && "ClassPrivateMethod" !== parent.type && "ForStatement" !== parent.type && "WhileStatement" !== parent.type && "DoWhileStatement" !== parent.type && "DoExpression" !== parent.type && "ModuleExpression" !== parent.type && ("CatchClause" !== parent.type || t.finalizer) && "TSModuleDeclaration" !== parent.type && "StaticBlock" !== node.type && o.push(tA);
  }
  o.push("}");
  return o;
}
var i4 = function (e) {
  let t = new WeakMap();
  return function (n) {
    t.has(n) || t.set(n, Symbol(e));
    return t.get(n);
  };
};
function i8(e, t) {
  return "+" === e || "-" === e ? e + t : t;
}
var i5 = i4("typeParameters");
function i7(e, t, n, r) {
  let {
    node
  } = e;
  if (!node[r]) return "";
  if (!Array.isArray(node[r])) return n(r);
  let a = ed(e.grandparent);
  let o = e.match(e => !(1 === e[r].length && en(e[r][0])), void 0, (e, t) => "typeAnnotation" === t, e => "Identifier" === e.type, r5);
  if (0 === node[r].length || !o && (a || 1 === node[r].length && ("NullableTypeAnnotation" === node[r][0].type || io(node[r][0])))) return ["<", tP(", ", e.map(n, r)), function (e, t) {
    let {
      node: _node12
    } = e;
    if (!eW(_node12, ez.Dangling)) return "";
    let r = !eW(_node12, ez.Line);
    let i = rS(e, t, {
      indent: !r
    });
    return r ? i : [i, tA];
  }(e, t), ">"];
  let s = "TSTypeParameterInstantiation" === node.type ? "" : !function (e, t, n) {
    let {
      node: _node13
    } = e;
    return 1 === ej(_node13).length && _node13.type.startsWith("TS") && !_node13[n][0].constraint && "ArrowFunctionExpression" === e.parent.type && !(t.filepath && /\.ts$/u.test(t.filepath));
  }(e, t, r) ? ew(t) ? tD(",") : "" : ",";
  return ty(["<", tf([tw, tP([",", tE], e.map(n, r))]), s, tw, ">"], {
    id: i5(node)
  });
}
function i9(e, t, n) {
  let {
    node,
    parent
  } = e;
  let a = ["TSTypeParameter" === node.type && node.$$const ? "const " : ""];
  let o = "TSTypeParameter" === node.type ? n("name") : node.name;
  if ("TSMappedType" === parent.type) {
    parent.readonly && a.push(i8(parent.readonly, "readonly"), " ");
    a.push("[", o);
    node.constraint && a.push(" in ", n("constraint"));
    parent.nameType && a.push(" as ", e.callParent(() => n("nameType")));
    a.push("]");
    return a;
  }
  if (node.variance && a.push(n("variance")), node.$$in && a.push("in "), node.out && a.push("out "), a.push(o), node.bound && (node.usesExtendsBound && a.push(" extends "), a.push(ig(e, n, "bound"))), node.constraint) {
    let e = Symbol("constraint");
    a.push(" extends", ty(tf(tE), {
      id: e
    }), tT, tx(n("constraint"), {
      groupId: e
    }));
  }
  node.$$default && a.push(" = ", n("default"));
  return ty(a);
}
var ae = R(["ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function at(e, t, n) {
  let r;
  let {
    node
  } = e;
  let a = [iw(e), ik(e), "class"];
  let o = eW(node.id, ez.Trailing) || eW(node.typeParameters, ez.Trailing) || eW(node.superClass) || w(node.$$extends) || w(node.mixins) || w(node.$$implements);
  let s = [];
  let _ = [];
  if (node.id && s.push(" ", n("id")), s.push(n("typeParameters")), node.superClass) {
    let r = [function (e, t, n) {
      let r = n("superClass");
      let {
        parent
      } = e;
      return "AssignmentExpression" === parent.type ? ty(tD(["(", tf([tw, r]), tw, ")"], r)) : r;
    }(e, 0, n), n(node.superTypeArguments ? "superTypeArguments" : "superTypeParameters")];
    let a = e.call(e => ["extends ", rE(e, r, t)], "superClass");
    o ? _.push(tE, ty(a)) : _.push(" ", a);
  } else _.push(ai(e, t, n, "extends"));
  if (_.push(ai(e, t, n, "mixins"), ai(e, t, n, "implements")), o) {
    let e;
    e = ar(node) ? [...s, tf(_)] : tf([...s, _]);
    r = an(node);
    a.push(ty(e, {
      id: r
    }));
  } else a.push(...s, ..._);
  let l = node.body;
  o && w(l.body) ? a.push(tD(tA, " ", {
    groupId: r
  })) : a.push(" ");
  a.push(n("body"));
  return a;
}
var an = i4("heritageGroup");
function ar(e) {
  var t;
  return e.typeParameters && !eW(e.typeParameters, ez.Trailing | ez.Line) && !(["extends", "mixins", "implements"].reduce((e, n) => e + (Array.isArray(t[n]) ? t[n].length : 0), (t = e).superClass ? 1 : 0) > 1);
}
function ai(e, t, n, r) {
  let {
    node
  } = e;
  if (!w(node[r])) return "";
  let a = rS(e, t, {
    marker: r
  });
  return [ar(node) ? tD(" ", tE, {
    groupId: i5(node.typeParameters)
  }) : tE, a, a && tA, r, ty(tf([tE, tP([",", tE], e.map(n, r))]))];
}
function aa(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  w(node.decorators) && i.push(rW(e, t, n));
  i.push(iO(node));
  node.$$static && i.push("static ");
  i.push(ik(e));
  node.override && i.push("override ");
  i.push(iH(e, t, n));
  return i;
}
function ao(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  let a = t.semi ? ";" : "";
  w(node.decorators) && i.push(rW(e, t, n));
  i.push(iw(e), iO(node));
  node.$$static && i.push("static ");
  i.push(ik(e));
  node.override && i.push("override ");
  node.readonly && i.push("readonly ");
  node.variance && i.push(n("variance"));
  ("ClassAccessorProperty" === node.type || "AccessorProperty" === node.type || "TSAbstractAccessorProperty" === node.type) && i.push("accessor ");
  i.push(iK(e, t, n), iS(e), iC(e), ig(e, n));
  return [r3(e, t, n, i, " =", "TSAbstractPropertyDefinition" === node.type || "TSAbstractAccessorProperty" === node.type ? void 0 : "value"), a];
}
var as = R(["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"]);
var a_ = R(["FunctionExpression", "ArrowFunctionExpression"]);
function al({
  node: e,
  parent: t
}, n) {
  return ("markdown" === n.parentParser || "mdx" === n.parentParser) && "ExpressionStatement" === e.type && ea(e.expression) && "Program" === t.type && 1 === t.body.length;
}
function au({
  node: e,
  parent: t
}, n) {
  return ("__vue_event_binding" === n.parser || "__vue_ts_event_binding" === n.parser) && "ExpressionStatement" === e.type && "Program" === t.type && 1 === t.body.length;
}
function ac(e) {
  return e.toLowerCase();
}
function ap({
  pattern: e,
  flags: t
}) {
  t = [...t].sort().join("");
  return `/${e}/${t}`;
}
function ad(e, t) {
  let n = e.slice(1, -1);
  if (n.includes('"') || n.includes("'")) return e;
  let r = t.singleQuote ? "'" : '"';
  return r + n + r;
}
var am = function (e, t, n) {
  let r = e.originalText.slice(t, n);
  for (let i of e[Symbol.$$for("comments")]) {
    let e = N(i);
    if (e > n) break;
    let a = I(i);
    if (a < t) continue;
    let o = a - e;
    r = r.slice(0, e - t) + " ".repeat(o) + r.slice(a - t);
  }
  return r;
};
var af = e => "ExportDefaultDeclaration" === e.type || "DeclareExportDeclaration" === e.type && e.$$default;
function ah(e, t, n) {
  let {
    node
  } = e;
  let i = [r$(e.node) ? [tP(tA, e.map(n, "declaration", "decorators")), tA] : "", iw(e), "export", af(node) ? " default" : ""];
  let {
    declaration,
    exported
  } = r;
  eW(node, ez.Dangling) && (i.push(" ", rS(e, t)), ev(node) && i.push(tA));
  declaration ? i.push(" ", n("declaration")) : (i.push(ag(node.exportKind)), "ExportAllDeclaration" === node.type || "DeclareExportAllDeclaration" === node.type ? (i.push(" *"), exported && i.push(" as ", n("exported"))) : i.push(ax(e, t, n)), i.push(aD(e, t, n), aT(e, t, n)));
  i.push(t.semi && (!node.declaration || af(node) && !ay(node.declaration)) ? ";" : "");
  return i;
}
var ay = R(["ClassDeclaration", "ComponentDeclaration", "FunctionDeclaration", "TSInterfaceDeclaration", "DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "HookDeclaration", "TSDeclareFunction", "EnumDeclaration"]);
function ag(e, t = !0) {
  return e && "value" !== e ? `${t ? " " : ""}${e}${t ? "" : " "}` : "";
}
function ab(e, t) {
  return ag(e.importKind, t);
}
function aD(e, t, n) {
  let {
    node
  } = e;
  if (!node.source) return "";
  let i = [];
  av(node, t) && i.push(" from");
  i.push(" ", n("source"));
  return i;
}
function ax(e, t, n) {
  let {
    node
  } = e;
  if (!av(node, t)) return "";
  let i = [" "];
  if (w(node.specifiers)) {
    let a = [];
    let o = [];
    e.each(() => {
      let t = e.node.type;
      if ("ExportNamespaceSpecifier" === t || "ExportDefaultSpecifier" === t || "ImportNamespaceSpecifier" === t || "ImportDefaultSpecifier" === t) a.push(n());else if ("ExportSpecifier" === t || "ImportSpecifier" === t) o.push(n());else throw new rA(node, "specifier");
    }, "specifiers");
    i.push(tP(", ", a));
    o.length > 0 && (a.length > 0 && i.push(", "), o.length > 1 || a.length > 0 || node.specifiers.some(e => eW(e)) ? i.push(ty(["{", tf([t.bracketSpacing ? tE : tw, tP([",", tE], o)]), tD(ew(t) ? "," : ""), t.bracketSpacing ? tE : tw, "}"])) : i.push(["{", t.bracketSpacing ? " " : "", ...o, t.bracketSpacing ? " " : "", "}"]));
  } else i.push("{}");
  return i;
}
function av(e, t) {
  return !!("ImportDeclaration" !== e.type || w(e.specifiers)) || "type" === e.importKind || am(t, N(e), N(e.source)).trimEnd().endsWith("from");
}
function aT(e, t, n) {
  let {
    node
  } = e;
  if (!node.source) return "";
  let i = function (e, t) {
    var n;
    var r;
    if (null != (n = e.extra) && n.deprecatedAssertSyntax) return "assert";
    let i = am(t, I(e.source), null != (r = e.attributes) && r[0] ? N(e.attributes[0]) : I(e)).trimStart();
    return i.startsWith("assert") ? "assert" : i.startsWith("with") || w(e.attributes) ? "with" : void 0;
  }(node, t);
  if (!i) return "";
  let a = [` ${i} {`];
  w(node.attributes) && (t.bracketSpacing && a.push(" "), a.push(tP(", ", e.map(n, "attributes"))), t.bracketSpacing && a.push(" "));
  a.push("}");
  return a;
}
function aS(e, t, n) {
  var r;
  let i = t.semi ? ";" : "";
  let {
    node
  } = e;
  let o = "ObjectTypeAnnotation" === node.type;
  let s = "TSEnumDeclaration" === node.type || "EnumBooleanBody" === node.type || "EnumNumberBody" === node.type || "EnumBigIntBody" === node.type || "EnumStringBody" === node.type || "EnumSymbolBody" === node.type;
  let _ = ["TSTypeLiteral" === node.type || s ? "members" : "TSInterfaceBody" === node.type ? "body" : "properties"];
  o && _.push("indexers", "callProperties", "internalSlots");
  let l = _.flatMap(t => e.map(({
    node: e
  }) => ({
    node: e,
    printed: n(),
    loc: N(e)
  }), t));
  _.length > 1 && l.sort((e, t) => e.loc - t.loc);
  let {
    parent,
    key
  } = e;
  let p = o && "body" === key && ("InterfaceDeclaration" === parent.type || "DeclareInterface" === parent.type || "DeclareClass" === parent.type);
  let m = "TSInterfaceBody" === node.type || s || p || "ObjectPattern" === node.type && "FunctionDeclaration" !== parent.type && "FunctionExpression" !== parent.type && "ArrowFunctionExpression" !== parent.type && "ObjectMethod" !== parent.type && "ClassMethod" !== parent.type && "ClassPrivateMethod" !== parent.type && "AssignmentPattern" !== parent.type && "CatchClause" !== parent.type && node.properties.some(e => e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type)) || "ObjectPattern" !== node.type && l.length > 0 && tQ(t.originalText, N(node), l[0].loc);
  let f = p ? ";" : "TSInterfaceBody" === node.type || "TSTypeLiteral" === node.type ? tD(i, ";") : ",";
  let h = "RecordExpression" === node.type ? "#{" : node.exact ? "{|" : "{";
  let y = node.exact ? "|}" : "}";
  let g = [];
  let b = l.map(e => {
    let n = [...g, ty(e.printed)];
    g = [f, tE];
    ("TSPropertySignature" === e.node.type || "TSMethodSignature" === e.node.type || "TSConstructSignatureDeclaration" === e.node.type || "TSCallSignatureDeclaration" === e.node.type) && eW(e.node, ez.PrettierIgnore) && g.shift();
    e$(e.node, t) && g.push(tA);
    return n;
  });
  if (node.inexact || node.hasUnknownMembers) {
    let n;
    if (eW(node, ez.Dangling)) {
      let r = eW(node, ez.Line);
      n = [rS(e, t), r || T(t.originalText, I(d(!1, eV(node), -1))) ? tA : tE, "..."];
    } else n = ["..."];
    b.push([...g, ...n]);
  }
  let D = null == (r = d(!1, l, -1)) ? void 0 : r.node;
  let x = !(node.inexact || node.hasUnknownMembers || D && ("RestElement" === D.type || ("TSPropertySignature" === D.type || "TSCallSignatureDeclaration" === D.type || "TSMethodSignature" === D.type || "TSConstructSignatureDeclaration" === D.type) && eW(D, ez.PrettierIgnore)));
  let v;
  if (0 === b.length) {
    if (!eW(node, ez.Dangling)) return [h, y, ig(e, n)];
    v = ty([h, rS(e, t, {
      indent: !0
    }), tw, y, iS(e), ig(e, n)]);
  } else v = [p && w(node.properties) ? tD(tA, "", {
    groupId: an(parent)
  }) : "", h, tf([t.bracketSpacing ? tE : tw, ...b]), tD(x && ("," !== f || ew(t)) ? f : ""), t.bracketSpacing ? tE : tw, y, iS(e), ig(e, n)];
  return e.match(e => "ObjectPattern" === e.type && !w(e.decorators), aC) || en(node) && (e.match(void 0, (e, t) => "typeAnnotation" === t, (e, t) => "typeAnnotation" === t, aC) || e.match(void 0, (e, t) => "FunctionTypeParam" === e.type && "typeAnnotation" === t, aC)) || !m && e.match(e => "ObjectPattern" === e.type, e => "AssignmentExpression" === e.type || "VariableDeclarator" === e.type) ? v : ty(v, {
    shouldBreak: m
  });
}
function aC(e, t) {
  return ("params" === t || "parameters" === t || "this" === t || "rest" === t) && it(e);
}
var aE = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
var aw = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
var aA = e => [tD("("), tf([tw, e]), tw, tD(")")];
function ak(e, t, n, r) {
  if (!t.experimentalTernaries) return function (e, t, n) {
    let r;
    let {
      node
    } = e;
    let a = "ConditionalExpression" === node.type;
    let o = a ? "consequent" : "trueType";
    let s = a ? "alternate" : "falseType";
    let _ = a ? ["test"] : ["checkType", "extendsType"];
    let l = node[o];
    let u = node[s];
    let c = [];
    let p = !1;
    let {
      parent
    } = e;
    let m = parent.type === node.type && _.some(e => parent[e] === node);
    let f = parent.type === node.type && !m;
    let h;
    let y;
    let g = 0;
    do {
      y = h || node;
      h = e.getParentNode(g);
      g++;
    } while (h && h.type === node.type && _.every(e => h[e] !== y));
    let b = h || parent;
    if (a && (ea(node[_[0]]) || ea(l) || ea(u) || function (e) {
      let t = [e];
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        for (let e of ["test", "consequent", "alternate"]) {
          let r = n[e];
          if (ea(r)) return !0;
          "ConditionalExpression" === r.type && t.push(r);
        }
      }
      return !1;
    }(y))) {
      let e;
      p = !0;
      f = !0;
      let t = e => [tD("("), tf([tw, e]), tw, tD(")")];
      c.push(" ? ", "NullLiteral" === l.type || "Literal" === l.type && null === l.value || "Identifier" === l.type && "undefined" === l.name ? n(o) : t(n(o)), " : ", u.type === node.type || "NullLiteral" === (e = u).type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name ? n(s) : t(n(s)));
    } else {
      let e = e => t.useTabs ? tf(n(e)) : th(2, n(e));
      let r = [tE, "? ", l.type === node.type ? tD("", "(") : "", e(o), l.type === node.type ? tD("", ")") : "", tE, ": ", e(s)];
      c.push(parent.type !== node.type || parent[s] === node || m ? r : t.useTabs ? th(-1, tf(r)) : th(Math.max(0, t.tabWidth - 2), r));
    }
    let D = [o, s, ..._].some(e => eW(node[e], e => J(e) && tQ(t.originalText, N(e), I(e))));
    let x = !p && (eh(parent) || "NGPipeExpression" === parent.type && parent.left === node) && !parent.computed;
    let v = function (e) {
      let {
        node: _node14
      } = e;
      if ("ConditionalExpression" !== _node14.type) return !1;
      let n;
      let r = _node14;
      for (let t = 0; !n; t++) {
        let i = e.getParentNode(t);
        if ("ChainExpression" === i.type && i.expression === r || ef(i) && i.callee === r || eh(i) && i.object === r || "TSNonNullExpression" === i.type && i.expression === r) {
          r = i;
          continue;
        }
        "NewExpression" === i.type && i.callee === r || eX(i) && i.expression === r ? (n = e.getParentNode(t + 1), r = i) : n = i;
      }
      return r !== _node14 && n[aE.get(n.type)] === r;
    }(e);
    r = [function (e, t, n) {
      let {
        node: _node15
      } = e;
      let i = "ConditionalExpression" === _node15.type;
      let {
        parent: _parent4
      } = e;
      let o = i ? n("test") : [n("checkType"), " ", "extends", " ", n("extendsType")];
      return _parent4.type === _node15.type && _parent4[i ? "alternate" : "falseType"] === _node15 ? th(2, o) : o;
    }(e, 0, n), f ? c : tf(c), a && x && !v ? tw : ""];
    let T = parent === b ? ty(r, {
      shouldBreak: D
    }) : D ? [r, tS] : r;
    return m || v ? ty([tf([tw, T]), tw]) : T;
  }(e, t, n);
  let {
    node
  } = e;
  let a = "ConditionalExpression" === node.type;
  let o = "TSConditionalType" === node.type || "ConditionalTypeAnnotation" === node.type;
  let s = a ? "consequent" : "trueType";
  let _ = a ? "alternate" : "falseType";
  let l = a ? ["test"] : ["checkType", "extendsType"];
  let u = node[s];
  let c = node[_];
  let p = l.map(e => node[e]);
  let {
    parent
  } = e;
  let m = parent.type === node.type;
  let f = m && l.some(e => parent[e] === node);
  let h = m && parent[_] === node;
  let y = u.type === node.type;
  let g = c.type === node.type;
  let b = g || h;
  let D = t.tabWidth > 2 || t.useTabs;
  let x;
  let v;
  let T = 0;
  do {
    v = x || node;
    x = e.getParentNode(T);
    T++;
  } while (x && x.type === node.type && l.every(e => x[e] !== v));
  let S = x || parent;
  let C = r && r.assignmentLayout && "break-after-operator" !== r.assignmentLayout && ("AssignmentExpression" === parent.type || "VariableDeclarator" === parent.type || "ClassProperty" === parent.type || "PropertyDefinition" === parent.type || "ClassPrivateProperty" === parent.type || "ObjectProperty" === parent.type || "Property" === parent.type);
  let E = ("ReturnStatement" === parent.type || "ThrowStatement" === parent.type) && !(y || g);
  let w = a && "JSXExpressionContainer" === S.type && "JSXAttribute" !== e.grandparent.type;
  let A = function (e) {
    let {
      node: _node16
    } = e;
    if ("ConditionalExpression" !== _node16.type) return !1;
    let n;
    let r = _node16;
    for (let t = 0; !n; t++) {
      let i = e.getParentNode(t);
      if ("ChainExpression" === i.type && i.expression === r || ef(i) && i.callee === r || eh(i) && i.object === r || "TSNonNullExpression" === i.type && i.expression === r) {
        r = i;
        continue;
      }
      "NewExpression" === i.type && i.callee === r || eX(i) && i.expression === r ? (n = e.getParentNode(t + 1), r = i) : n = i;
    }
    return r !== _node16 && n[aw.get(n.type)] === r;
  }(e);
  let k = (eh(parent) || "NGPipeExpression" === parent.type && parent.left === node) && !parent.computed;
  let F = o && rg(e, t);
  let P = D ? t.useTabs ? "	" : " ".repeat(t.tabWidth - 1) : "";
  let O = [...p.map(e => eV(e)), eV(u), eV(c)].flat().some(e => J(e) && tQ(t.originalText, N(e), I(e))) || y || g;
  let B = !b && !m && !o && (w ? "NullLiteral" === u.type || "Literal" === u.type && null === u.value : eg(u, t) && ey(node.test, 3));
  let j = b || h || o && !m || m && a && ey(node.test, 1) || B;
  let M = [];
  !y && eW(u, ez.Dangling) && e.call(e => {
    M.push(rS(e, t), tA);
  }, "consequent");
  let L = [];
  eW(node.test, ez.Dangling) && e.call(e => {
    L.push(rS(e, t));
  }, "test");
  !g && eW(c, ez.Dangling) && e.call(e => {
    L.push(rS(e, t));
  }, "alternate");
  eW(node, ez.Dangling) && L.push(rS(e, t));
  let R = Symbol("test");
  let q = Symbol("consequent");
  let U = Symbol("test-and-consequent");
  let z = a ? [aA(n("test")), "ConditionalExpression" === node.test.type ? tS : ""] : [n("checkType"), " ", "extends", " ", "TSConditionalType" === node.extendsType.type || "ConditionalTypeAnnotation" === node.extendsType.type || "TSMappedType" === node.extendsType.type ? n("extendsType") : ty(aA(n("extendsType")))];
  let K = ty([z, " ?"], {
    id: R
  });
  let W = n(s);
  let V = tf([y || w && (ea(u) || m || b) ? tA : tE, M, W]);
  let $ = j ? ty([K, b ? V : tD(V, ty(V, {
    id: q
  }), {
    groupId: R
  })], {
    id: U
  }) : [K, V];
  let H = n(_);
  let G = B ? tD(H, th(-1, aA(H)), {
    groupId: U
  }) : H;
  let X = [$, L.length > 0 ? [tf([tA, L]), tA] : g ? tA : B ? tD(tE, " ", {
    groupId: U
  }) : tE, ":", g ? " " : D ? j ? tD(P, tD(b || B ? " " : P, " "), {
    groupId: U
  }) : tD(P, " ") : " ", g ? G : ty([tf(G), w && !B ? tw : ""]), k && !A ? tw : "", O ? tS : ""];
  return C && !O ? ty(tf([tw, ty(X)])) : C || E ? ty(tf(X)) : A || o && f ? ty([tf([tw, X]), F ? tw : ""]) : parent === S ? ty(X) : X;
}
function aF(e, t, n, r) {
  let {
    node
  } = e;
  if (ee(node)) return function (e, t) {
    let {
      node: _node17
    } = e;
    switch (_node17.type) {
      case "RegExpLiteral":
        return ap(_node17);
      case "BigIntLiteral":
        return ac(_node17.extra.raw);
      case "NumericLiteral":
        return iJ(_node17.extra.raw);
      case "StringLiteral":
        return tJ(P(_node17.extra.raw, t));
      case "NullLiteral":
        return "null";
      case "BooleanLiteral":
        return String(_node17.value);
      case "DirectiveLiteral":
        return ad(_node17.extra.raw, t);
      case "Literal":
        {
          if (_node17.regex) return ap(_node17.regex);
          if (_node17.bigint) return ac(_node17.raw);
          let {
            value
          } = _node17;
          return "number" == typeof value ? iJ(_node17.raw) : "string" == typeof value ? !function (e) {
            if ("expression" !== e.key) return;
            let {
              parent
            } = e;
            return "ExpressionStatement" === parent.type && parent.directive;
          }(e) ? tJ(P(_node17.raw, t)) : ad(_node17.raw, t) : String(value);
        }
    }
  }(e, t);
  let a = t.semi ? ";" : "";
  let o = [];
  switch (node.type) {
    case "JsExpressionRoot":
      return n("node");
    case "JsonRoot":
      return [n("node"), tA];
    case "File":
      return function (e, t, n) {
        if (t.__isVueBindings || t.__isVueForBindingLeft) {
          let r = e.map(n, "program", "body", 0, "params");
          if (1 === r.length) return r[0];
          let i = tP([",", tE], r);
          return t.__isVueForBindingLeft ? ["(", tf([tw, ty(i)]), tw, ")"] : i;
        }
        if (t.__isEmbeddedTypescriptGenericParameters) return tP([",", tE], e.map(n, "program", "body", 0, "typeParameters", "params"));
      }(e, t, n) ?? n("program");
    case "EmptyStatement":
      return "";
    case "ExpressionStatement":
      return function (e, t, n) {
        let r = [n("expression")];
        if (au(e, t)) {
          var i;
          let t = function e(t) {
            return as(t) ? e(t.expression) : t;
          }(e.node.expression);
          (a_(t) || "MemberExpression" === (i = t).type || "OptionalMemberExpression" === i.type || "Identifier" === i.type && "undefined" !== i.name) && r.push(";");
        } else al(e, t) || t.semi && r.push(";");
        return r;
      }(e, t, n);
    case "ChainExpression":
      return n("expression");
    case "ParenthesizedExpression":
      return !eW(node.expression) && (G(node.expression) || H(node.expression)) ? ["(", n("expression"), ")"] : ty(["(", tf([tw, n("expression")]), tw, ")"]);
    case "AssignmentExpression":
      return function (e, t, n) {
        let {
          node: _node18
        } = e;
        return r3(e, t, n, n("left"), [" ", _node18.operator], "right");
      }(e, t, n);
    case "VariableDeclarator":
      return r3(e, t, n, n("id"), " =", "init");
    case "BinaryExpression":
    case "LogicalExpression":
      return rR(e, t, n);
    case "AssignmentPattern":
      return [n("left"), " = ", n("right")];
    case "OptionalMemberExpression":
    case "MemberExpression":
      return function (e, t, n) {
        var r;
        let i = n("object");
        let a = rZ(e, t, n);
        let {
          node: _node19
        } = e;
        let s = e.findAncestor(e => !(eh(e) || "TSNonNullExpression" === e.type));
        let _ = e.findAncestor(e => !("ChainExpression" === e.type || "TSNonNullExpression" === e.type));
        let l = s && ("NewExpression" === s.type || "BindExpression" === s.type || "AssignmentExpression" === s.type && "Identifier" !== s.left.type) || _node19.computed || "Identifier" === _node19.object.type && "Identifier" === _node19.property.type && !eh(_) || ("AssignmentExpression" === _.type || "VariableDeclarator" === _.type) && (rQ(_node19.object) || (null == (r = i.label) ? void 0 : r.memberChain));
        return tN(i.label, [i, l ? a : ty(tf([tw, a]))]);
      }(e, t, n);
    case "MetaProperty":
      return [n("meta"), ".", n("property")];
    case "BindExpression":
      node.object && o.push(n("object"));
      o.push(ty(tf([tw, iP(e, t, n)])));
      return o;
    case "Identifier":
      return [node.name, iS(e), iC(e), ig(e, n)];
    case "V8IntrinsicIdentifier":
      return ["%", node.name];
    case "SpreadElement":
    case "SpreadElementPattern":
    case "SpreadPropertyPattern":
    case "RestElement":
      return iI(e, n);
    case "FunctionDeclaration":
    case "FunctionExpression":
      return i$(e, n, t, r);
    case "ArrowFunctionExpression":
      return function (e, t, n, r = {}) {
        var i;
        var a;
        var o;
        var s;
        let _ = [];
        let l;
        let u = [];
        let c = !1;
        let p = !r.expandLastArg && "ArrowFunctionExpression" === e.node.body.type;
        let d;
        !function i() {
          let {
            node: _node20
          } = e;
          let o = function (e, t, n, r) {
            let {
              node: _node21
            } = e;
            let a = [];
            if (_node21.async && a.push("async "), iX(e, t)) a.push(n(["params", 0]));else {
              let i = r.expandLastArg || r.expandFirstArg;
              let o = iY(e, n);
              if (i) {
                if (tj(o)) throw new rH();
                o = ty(tI(o, tL));
              }
              a.push(ty([ie(e, n, t, i, !0), o]));
            }
            let o = rS(e, t, {
              filter(e) {
                let n = tX(t.originalText, I(e));
                return !1 !== n && "=>" === t.originalText.slice(n, n + 2);
              }
            });
            o && a.push(" ", o);
            return a;
          }(e, t, n, r);
          if (0 === _.length) _.push(o);else {
            let {
              leading,
              trailing
            } = rC(e, t);
            _.push([leading, o]);
            u.unshift(trailing);
          }
          p && (c || (c = _node20.returnType && ej(_node20).length > 0 || _node20.typeParameters || ej(_node20).some(e => "Identifier" !== e.type)));
          p && "ArrowFunctionExpression" === _node20.body.type ? e.call(i, "body") : (l = n("body", r), d = _node20.body);
        }();
        let m = !eb(t.originalText, d) && (i1(d) || (i = d, a = l, H(i) || G(i) || "ArrowFunctionExpression" === i.type || "DoExpression" === i.type || "BlockStatement" === i.type || ea(i) || (null == (o = a.label) ? void 0 : o.hug) !== !1 && ((null == (s = a.label) ? void 0 : s.embed) || ex(i, t.originalText))) || !c && i0(d));
        let f = "callee" === e.key && eH(e.parent);
        let h = Symbol("arrow-chain");
        let y = function (e, t, {
          signatureDocs: n,
          shouldBreak: r
        }) {
          if (1 === n.length) return n[0];
          let {
            parent,
            key
          } = e;
          return "callee" !== key && eH(parent) || e_(parent) ? ty([n[0], " =>", tf([tE, tP([" =>", tE], n.slice(1))])], {
            shouldBreak: r
          }) : "callee" === key && eH(parent) || t.assignmentLayout ? ty(tP([" =>", tE], n), {
            shouldBreak: r
          }) : ty(tf(tP([" =>", tE], n)), {
            shouldBreak: r
          });
        }(e, r, {
          signatureDocs: _,
          shouldBreak: c
        });
        let g = !1;
        let b = !1;
        let D = !1;
        p && (f || r.assignmentLayout) && (b = !0, D = !eW(e.node, ez.Leading & ez.Line), g = "chain-tail-arrow-chain" === r.assignmentLayout || f && !m);
        l = function (e, t, n, {
          bodyDoc: r,
          bodyComments: i,
          functionBody: a,
          shouldPutBodyOnSameLine: o
        }) {
          let {
            node: _node22,
            parent
          } = e;
          let l = n.expandLastArg && ew(t, "all") ? tD(",") : "";
          let u = (n.expandLastArg || "JSXExpressionContainer" === parent.type) && !eW(_node22) ? tw : "";
          return o && i0(a) ? [" ", ty([tD("", "("), tf([tw, r]), tD("", ")"), l, u]), i] : (i1(a) && (r = ty(["(", tf([tw, r]), tw, ")"])), o ? [" ", r, i] : [tf([tE, r, i]), l, u]);
        }(e, t, r, {
          bodyDoc: l,
          bodyComments: u,
          functionBody: d,
          shouldPutBodyOnSameLine: m
        });
        return ty([ty(b ? tf([D ? tw : "", y]) : y, {
          shouldBreak: g,
          id: h
        }), " =>", p ? tx(l, {
          groupId: h
        }) : ty(l), p && f ? tD(tw, "", {
          groupId: h
        }) : ""]);
      }(e, t, n, r);
    case "YieldExpression":
      o.push("yield");
      node.delegate && o.push("*");
      node.argument && o.push(" ", n("argument"));
      return o;
    case "AwaitExpression":
      if (o.push("await"), node.argument) {
        o.push(" ", n("argument"));
        let {
          parent
        } = e;
        if (ef(parent) && parent.callee === node || eh(parent) && parent.object === node) {
          o = [tf([tw, ...o]), tw];
          let t = e.findAncestor(e => "AwaitExpression" === e.type || "BlockStatement" === e.type);
          if (t?.type !== "AwaitExpression" || !eA(t.argument, e => e === node)) return ty(o);
        }
      }
      return o;
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ExportAllDeclaration":
      return ah(e, t, n);
    case "ImportDeclaration":
      return function (e, t, n) {
        let {
          node: _node23
        } = e;
        return ["import", _node23.phase ? ` ${_node23.phase}` : "", ab(_node23), ax(e, t, n), aD(e, t, n), aT(e, t, n), t.semi ? ";" : ""];
      }(e, t, n);
    case "ImportSpecifier":
    case "ExportSpecifier":
    case "ImportNamespaceSpecifier":
    case "ExportNamespaceSpecifier":
    case "ImportDefaultSpecifier":
    case "ExportDefaultSpecifier":
      return function (e, t, n) {
        let {
          node: _node24
        } = e;
        let {
          type
        } = r;
        let a = type.startsWith("Import");
        let o = a ? "imported" : "local";
        let s = a ? "local" : "exported";
        let _ = _node24[o];
        let l = _node24[s];
        let u = "";
        let c = "";
        "ExportNamespaceSpecifier" === type || "ImportNamespaceSpecifier" === type ? u = "*" : _ && (u = n(o));
        l && !function (e) {
          let t;
          if ("ImportSpecifier" !== e.type && "ExportSpecifier" !== e.type) return !1;
          let {
            local,
            ["ImportSpecifier" === e.type ? "imported" : "exported"]: r
          } = e;
          return !!(local.type === r.type && O(local, r) && Number.isInteger(t = I(local)) && t === I(r)) && (Q(local) ? local.value === r.value && eE(local) === eE(r) : "Identifier" === local.type && local.name === r.name);
        }(_node24) && (c = n(s));
        return [ag("ImportSpecifier" === type ? _node24.importKind : _node24.exportKind, !1), u, u && c ? " as " : "", c];
      }(e, 0, n);
    case "ImportAttribute":
    case "ObjectProperty":
      return iW(e, t, n);
    case "Program":
    case "BlockStatement":
    case "StaticBlock":
      return i6(e, t, n);
    case "ClassBody":
      return function (e, t, n) {
        let {
          node: _node25
        } = e;
        let i = [];
        e.each(({
          node: e,
          next: r,
          isLast: a
        }) => {
          i.push(n());
          !t.semi && ae(e) && function (e, t) {
            var n;
            let {
              type,
              name
            } = e.key;
            if (!e.computed && "Identifier" === type && ("static" === name || "get" === name || "set" === name) && !e.value && !e.typeAnnotation) return !0;
            if (!t || t.$$static || t.accessibility || t.readonly) return !1;
            if (!t.computed) {
              let e = null == (n = t.key) ? void 0 : n.name;
              if ("in" === e || "instanceof" === e) return !0;
            }
            if (ae(t) && t.variance && !t.$$static && !t.declare) return !0;
            switch (t.type) {
              case "ClassProperty":
              case "PropertyDefinition":
              case "TSAbstractPropertyDefinition":
                return t.computed;
              case "MethodDefinition":
              case "TSAbstractMethodDefinition":
              case "ClassMethod":
              case "ClassPrivateMethod":
                {
                  if ((t.value ? t.value.async : t.async) || "get" === t.kind || "set" === t.kind) return !1;
                  let e = t.value ? t.value.generator : t.generator;
                  return !!(t.computed || e);
                }
              case "TSIndexSignature":
                return !0;
            }
            return !1;
          }(e, r) && i.push(";");
          a || (i.push(tA), e$(e, t) && i.push(tA));
        }, "body");
        eW(_node25, ez.Dangling) && i.push(rS(e, t));
        return ["{", i.length > 0 ? [tf([tA, i]), tA] : "", "}"];
      }(e, t, n);
    case "ThrowStatement":
      return ["throw", iQ(e, t, n)];
    case "ReturnStatement":
      return ["return", iQ(e, t, n)];
    case "NewExpression":
    case "ImportExpression":
    case "OptionalCallExpression":
    case "CallExpression":
      return r1(e, t, n);
    case "ObjectExpression":
    case "ObjectPattern":
    case "RecordExpression":
      return aS(e, t, n);
    case "Property":
      return eo(node) ? iH(e, t, n) : iW(e, t, n);
    case "ObjectMethod":
      return iH(e, t, n);
    case "Decorator":
      return ["@", n("expression")];
    case "ArrayExpression":
    case "ArrayPattern":
    case "TupleExpression":
      return iB(e, t, n);
    case "SequenceExpression":
      {
        let {
          parent
        } = e;
        if ("ExpressionStatement" === parent.type || "ForStatement" === parent.type) {
          let t = [];
          e.each(({
            isFirst: e
          }) => {
            e ? t.push(n()) : t.push(",", tf([tE, n()]));
          }, "expressions");
          return ty(t);
        }
        return ty(tP([",", tE], e.map(n, "expressions")));
      }
    case "ThisExpression":
      return "this";
    case "Super":
      return "super";
    case "Directive":
      return [n("value"), a];
    case "UnaryExpression":
      o.push(node.operator);
      /[a-z]$/u.test(node.operator) && o.push(" ");
      eW(node.argument) ? o.push(ty(["(", tf([tw, n("argument")]), tw, ")"])) : o.push(n("argument"));
      return o;
    case "UpdateExpression":
      return [node.prefix ? node.operator : "", n("argument"), node.prefix ? "" : node.operator];
    case "ConditionalExpression":
      return ak(e, t, n, r);
    case "VariableDeclaration":
      {
        let t = e.map(n, "declarations");
        let r = e.parent;
        let s = "ForStatement" === r.type || "ForInStatement" === r.type || "ForOfStatement" === r.type;
        let _ = node.declarations.some(e => e.init);
        let l;
        1 !== t.length || eW(node.declarations[0]) ? t.length > 0 && (l = tf(t[0])) : l = t[0];
        o = [iw(e), node.kind, l ? [" ", l] : "", tf(t.slice(1).map(e => [",", _ && !s ? tA : tE, e]))];
        s && r.body !== node || o.push(a);
        return ty(o);
      }
    case "WithStatement":
      return ty(["with (", n("object"), ")", iN(node.body, n("body"))]);
    case "IfStatement":
      {
        let r = iN(node.consequent, n("consequent"));
        let a = ty(["if (", ty([tf([tw, n("test")]), tw]), ")", r]);
        if (o.push(a), node.alternate) {
          let r = eW(node.consequent, ez.Trailing | ez.Line) || ev(node);
          let a = "BlockStatement" === node.consequent.type && !r;
          o.push(a ? " " : tA);
          eW(node, ez.Dangling) && o.push(rS(e, t), r ? tA : " ");
          o.push("else", ty(iN(node.alternate, n("alternate"), "IfStatement" === node.alternate.type)));
        }
        return o;
      }
    case "ForStatement":
      {
        let r = iN(node.body, n("body"));
        let a = rS(e, t);
        let o = a ? [a, tw] : "";
        return node.init || node.test || node.update ? [o, ty(["for (", ty([tf([tw, n("init"), ";", tE, n("test"), ";", tE, n("update")]), tw]), ")", r])] : [o, ty(["for (;;)", r])];
      }
    case "WhileStatement":
      return ty(["while (", ty([tf([tw, n("test")]), tw]), ")", iN(node.body, n("body"))]);
    case "ForInStatement":
      return ty(["for (", n("left"), " in ", n("right"), ")", iN(node.body, n("body"))]);
    case "ForOfStatement":
      return ty(["for", node.await ? " await" : "", " (", n("left"), " of ", n("right"), ")", iN(node.body, n("body"))]);
    case "DoWhileStatement":
      o = [ty(["do", iN(node.body, n("body"))])];
      "BlockStatement" === node.body.type ? o.push(" ") : o.push(tA);
      o.push("while (", ty([tf([tw, n("test")]), tw]), ")", a);
      return o;
    case "DoExpression":
      return [node.async ? "async " : "", "do ", n("body")];
    case "BreakStatement":
    case "ContinueStatement":
      o.push("BreakStatement" === node.type ? "break" : "continue");
      node.label && o.push(" ", n("label"));
      o.push(a);
      return o;
    case "LabeledStatement":
      return "EmptyStatement" === node.body.type ? [n("label"), ":;"] : [n("label"), ": ", n("body")];
    case "TryStatement":
      return ["try ", n("block"), node.handler ? [" ", n("handler")] : "", node.finalizer ? [" finally ", n("finalizer")] : ""];
    case "CatchClause":
      if (node.param) {
        let e = eW(node.param, e => !J(e) || e.leading && T(t.originalText, I(e)) || e.trailing && T(t.originalText, N(e), {
          backwards: !0
        }));
        let r = n("param");
        return ["catch ", e ? ["(", tf([tw, r]), tw, ") "] : ["(", r, ") "], n("body")];
      }
      return ["catch ", n("body")];
    case "SwitchStatement":
      return [ty(["switch (", tf([tw, n("discriminant")]), tw, ")"]), " {", node.cases.length > 0 ? tf([tA, tP(tA, e.map(({
        node: e,
        isLast: r
      }) => [n(), !r && e$(e, t) ? tA : ""], "cases"))]) : "", tA, "}"];
    case "SwitchCase":
      {
        node.test ? o.push("case ", n("test"), ":") : o.push("default:");
        eW(node, ez.Dangling) && o.push(" ", rS(e, t));
        let r = node.consequent.filter(e => "EmptyStatement" !== e.type);
        if (r.length > 0) {
          let i = i3(e, t, n, "consequent");
          o.push(1 === r.length && "BlockStatement" === r[0].type ? [" ", i] : tf([tA, i]));
        }
        return o;
      }
    case "DebuggerStatement":
      return ["debugger", a];
    case "ClassDeclaration":
    case "ClassExpression":
      return at(e, t, n);
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "MethodDefinition":
      return aa(e, t, n);
    case "ClassProperty":
    case "PropertyDefinition":
    case "ClassPrivateProperty":
    case "ClassAccessorProperty":
    case "AccessorProperty":
      return ao(e, t, n);
    case "TemplateElement":
      return tJ(node.value.raw);
    case "TemplateLiteral":
      return nH(e, n, t);
    case "TaggedTemplateExpression":
      let s;
      return tN((s = n("quasi")).label && {
        tagged: !0,
        ...s.label
      }, [n("tag"), n(e.node.typeArguments ? "typeArguments" : "typeParameters"), tT, s]);
    case "PrivateIdentifier":
      return ["#", node.name];
    case "PrivateName":
      return ["#", n("id")];
    case "TopicReference":
      return "%";
    case "ArgumentPlaceholder":
      return "?";
    case "ModuleExpression":
      return ["module ", n("body")];
    default:
      throw new rA(node, "ESTree");
  }
}
function aP(e, t, n) {
  let {
    parent,
    node,
    key
  } = e;
  let o = [n("expression")];
  switch (node.type) {
    case "AsConstExpression":
      o.push(" as const");
      break;
    case "AsExpression":
    case "TSAsExpression":
      o.push(" as ", n("typeAnnotation"));
      break;
    case "SatisfiesExpression":
    case "TSSatisfiesExpression":
      o.push(" satisfies ", n("typeAnnotation"));
  }
  return "callee" === key && ef(parent) || "object" === key && eh(parent) ? ty([tf([tw, ...o]), tw]) : o;
}
function aN(e, t) {
  let {
    node
  } = e;
  let r = t("id");
  node.computed && (r = ["[", r, "]"]);
  let i = "";
  node.initializer && (i = t("initializer"));
  node.init && (i = t("init"));
  return i ? [r, " = ", i] : r;
}
function aI(e, t, n) {
  let {
    node
  } = e;
  return [iw(e), node.$$const ? "const " : "", "enum ", t("id"), " ", "TSEnumDeclaration" === node.type ? aS(e, n, t) : t("body")];
}
function aO(e) {
  var t;
  let {
    node
  } = e;
  return "HookTypeAnnotation" === node.type && (null == (t = e.getParentNode(2)) ? void 0 : t.type) === "DeclareHook";
}
function aB(e, t, n) {
  let {
    node
  } = e;
  let i = [iw(e), "interface"];
  let a = [];
  let o = [];
  "InterfaceTypeAnnotation" !== node.type && a.push(" ", n("id"), n("typeParameters"));
  let s = node.typeParameters && !eW(node.typeParameters, ez.Trailing | ez.Line);
  w(node.$$extends) && o.push(s ? tD(" ", tE, {
    groupId: i5(node.typeParameters)
  }) : tE, "extends ", (1 === node.$$extends.length ? function (e) {
    return e;
  } : tf)(tP([",", tE], e.map(n, "extends"))));
  eW(node.id, ez.Trailing) || w(node.$$extends) ? s ? i.push(ty([...a, tf(o)])) : i.push(ty(tf([...a, ...o]))) : i.push(...a, ...o);
  i.push(" ", n("body"));
  return ty(i);
}
function aj(e, t, n) {
  let {
    node
  } = e;
  if (q(node)) return node.type.slice(0, -14).toLowerCase();
  let i = t.semi ? ";" : "";
  switch (node.type) {
    case "ComponentDeclaration":
    case "DeclareComponent":
    case "ComponentTypeAnnotation":
      return function (e, t, n) {
        let {
          node: _node28
        } = e;
        let i = [iw(e), "component"];
        _node28.id && i.push(" ", n("id"));
        i.push(n("typeParameters"));
        let a = function (e, t, n) {
          var r;
          var i;
          let {
            node: _node27
          } = e;
          let o = _node27.params;
          if (_node27.rest && (o = [...o, _node27.rest]), 0 === o.length) return ["(", rS(e, n, {
            filter: e => ")" === tY(n.originalText, I(e))
          }), ")"];
          let s = [];
          (function (e, t) {
            let {
              node: _node26
            } = e;
            let r = 0;
            let i = e => t(e, r++);
            e.each(i, "params");
            _node26.rest && e.call(i, "rest");
          })(e, (e, r) => {
            let i = r === o.length - 1;
            i && _node27.rest && s.push("...");
            s.push(t());
            i || (s.push(","), e$(o[r], n) ? s.push(tA, tA) : s.push(tE));
          });
          return ["(", tf([tw, ...s]), tD(ew(n, "all") && (r = o, !_node27.rest && (null == (i = d(!1, r, -1)) ? void 0 : i.type) !== "RestElement") ? "," : ""), tw, ")"];
        }(e, n, t);
        _node28.rendersType ? i.push(ty([a, " ", n("rendersType")])) : i.push(ty([a]));
        _node28.body && i.push(" ", n("body"));
        t.semi && "DeclareComponent" === _node28.type && i.push(";");
        return i;
      }(e, t, n);
    case "ComponentParameter":
      return function (e, t, n) {
        let {
          node: _node29
        } = e;
        return _node29.shorthand ? n("local") : [n("name"), " as ", n("local")];
      }(e, 0, n);
    case "ComponentTypeParameter":
      return function (e, t, n) {
        let {
          node: _node30
        } = e;
        let i = [];
        _node30.name && i.push(n("name"), _node30.optional ? "?: " : ": ");
        i.push(n("typeAnnotation"));
        return i;
      }(e, 0, n);
    case "HookDeclaration":
      return function (e, t, n) {
        let {
          node: _node31
        } = e;
        let i = ["hook"];
        _node31.id && i.push(" ", n("id"));
        let a = ie(e, n, t, !1, !0);
        let o = iY(e, n);
        i.push(ty([ir(_node31, o) ? ty(a) : a, o]), _node31.body ? " " : "", n("body"));
        return i;
      }(e, t, n);
    case "DeclareHook":
      return function (e, t, n) {
        let {
          node: _node32
        } = e;
        let i = [iw(e), "hook"];
        _node32.id && i.push(" ", n("id"));
        t.semi && i.push(";");
        return i;
      }(e, t, n);
    case "HookTypeAnnotation":
      return function (e, t, n) {
        let {
          node: _node33
        } = e;
        let i = [];
        i.push(aO(e) ? "" : "hook ");
        let a = ie(e, n, t, !1, !0);
        let o = [];
        o.push(aO(e) ? ": " : " => ", n("returnType"));
        ir(_node33, o) && (a = ty(a));
        i.push(a, o);
        return ty(i);
      }(e, t, n);
    case "DeclareClass":
      return at(e, t, n);
    case "DeclareFunction":
      return [iw(e), "function ", n("id"), n("predicate"), i];
    case "DeclareModule":
      return ["declare module ", n("id"), " ", n("body")];
    case "DeclareModuleExports":
      return ["declare module.exports", ig(e, n), i];
    case "DeclareNamespace":
      return ["declare namespace ", n("id"), " ", n("body")];
    case "DeclareVariable":
      return [iw(e), node.kind ?? "var", " ", n("id"), i];
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
      return ah(e, t, n);
    case "DeclareOpaqueType":
    case "OpaqueType":
      return function (e, t, n) {
        let r = t.semi ? ";" : "";
        let {
          node: _node34
        } = e;
        let a = [iw(e), "opaque type ", n("id"), n("typeParameters")];
        _node34.supertype && a.push(": ", n("supertype"));
        _node34.impltype && a.push(" = ", n("impltype"));
        a.push(r);
        return a;
      }(e, t, n);
    case "DeclareTypeAlias":
    case "TypeAlias":
      return is(e, t, n);
    case "IntersectionTypeAnnotation":
      return i_(e, t, n);
    case "UnionTypeAnnotation":
      return il(e, t, n);
    case "ConditionalTypeAnnotation":
      return ak(e, t, n);
    case "InferTypeAnnotation":
      return ip(e, t, n);
    case "FunctionTypeAnnotation":
      return iu(e, t, n);
    case "TupleTypeAnnotation":
      return iB(e, t, n);
    case "TupleTypeLabeledElement":
      return ih(e, t, n);
    case "TupleTypeSpreadElement":
      return im(e, t, n);
    case "GenericTypeAnnotation":
      return [n("id"), i7(e, t, n, "typeParameters")];
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      return ic(e, t, n);
    case "TypeAnnotation":
      return iD(e, t, n);
    case "TypeParameter":
      return i9(e, t, n);
    case "TypeofTypeAnnotation":
      return iv(e, n);
    case "ExistsTypeAnnotation":
      return "*";
    case "ArrayTypeAnnotation":
      return ix(n);
    case "DeclareEnum":
    case "EnumDeclaration":
      return aI(e, n, t);
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumBigIntBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
      return function (e, t, n) {
        let {
          node: _node35
        } = e;
        let i;
        if ("EnumSymbolBody" === _node35.type || _node35.explicitType) switch (_node35.type) {
          case "EnumBooleanBody":
            i = "boolean";
            break;
          case "EnumNumberBody":
            i = "number";
            break;
          case "EnumBigIntBody":
            i = "bigint";
            break;
          case "EnumStringBody":
            i = "string";
            break;
          case "EnumSymbolBody":
            i = "symbol";
        }
        return [i ? `of ${i} ` : "", aS(e, n, t)];
      }(e, n, t);
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumBigIntMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
      return aN(e, n);
    case "FunctionTypeParam":
      {
        let t = node.name ? n("name") : e.parent.$$this === node ? "this" : "";
        return [t, iS(e), t ? ": " : "", n("typeAnnotation")];
      }
    case "DeclareInterface":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
      return aB(e, t, n);
    case "ClassImplements":
    case "InterfaceExtends":
      return [n("id"), n("typeParameters")];
    case "NullableTypeAnnotation":
      return ["?", n("typeAnnotation")];
    case "Variance":
      {
        let {
          kind
        } = node;
        A.ok("plus" === kind || "minus" === kind);
        return "plus" === kind ? "+" : "-";
      }
    case "KeyofTypeAnnotation":
      return ["keyof ", n("argument")];
    case "ObjectTypeCallProperty":
      return [node.$$static ? "static " : "", n("value")];
    case "ObjectTypeMappedTypeProperty":
      return function (e, t, n) {
        let {
          node: _node36
        } = e;
        return ty([_node36.variance ? n("variance") : "", "[", tf([n("keyTparam"), " in ", n("sourceType")]), "]", function (e) {
          switch (e) {
            case null:
              return "";
            case "PlusOptional":
              return "+?";
            case "MinusOptional":
              return "-?";
            case "Optional":
              return "?";
          }
        }(_node36.optional), ": ", n("propType")]);
      }(e, 0, n);
    case "ObjectTypeIndexer":
      return [node.$$static ? "static " : "", node.variance ? n("variance") : "", "[", n("id"), node.id ? ": " : "", n("key"), "]: ", n("value")];
    case "ObjectTypeProperty":
      {
        let i = "";
        node.proto ? i = "proto " : node.$$static && (i = "static ");
        return [i, "init" !== node.kind ? node.kind + " " : "", node.variance ? n("variance") : "", iK(e, t, n), iS(e), eo(node) ? "" : ": ", n("value")];
      }
    case "ObjectTypeAnnotation":
      return aS(e, t, n);
    case "ObjectTypeInternalSlot":
      return [node.$$static ? "static " : "", "[[", n("id"), "]]", iS(e), node.method ? "" : ": ", n("value")];
    case "ObjectTypeSpreadProperty":
      return iI(e, n);
    case "QualifiedTypeofIdentifier":
    case "QualifiedTypeIdentifier":
      return [n("qualification"), ".", n("id")];
    case "NullLiteralTypeAnnotation":
      return "null";
    case "BooleanLiteralTypeAnnotation":
      return String(node.value);
    case "StringLiteralTypeAnnotation":
      return tJ(P(eE(node), t));
    case "NumberLiteralTypeAnnotation":
      return iJ(node.raw ?? node.extra.raw);
    case "BigIntLiteralTypeAnnotation":
      return ac(node.raw ?? node.extra.raw);
    case "TypeCastExpression":
      return ["(", n("expression"), ig(e, n), ")"];
    case "TypePredicate":
      return iT(e, n);
    case "TypeOperator":
      return [node.operator, " ", n("typeAnnotation")];
    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
      return i7(e, t, n, "params");
    case "InferredPredicate":
    case "DeclaredPredicate":
      return ["predicate" !== e.key || "DeclareFunction" === e.parent.type || e.parent.returnType ? " " : ": ", "%checks", ...("DeclaredPredicate" === node.type ? ["(", n("value"), ")"] : [])];
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return aP(e, t, n);
  }
}
function aM(e, t, n) {
  var r;
  let {
    node
  } = e;
  if (!node.type.startsWith("TS")) return;
  if (U(node)) return node.type.slice(2, -7).toLowerCase();
  let a = t.semi ? ";" : "";
  let o = [];
  switch (node.type) {
    case "TSThisType":
      return "this";
    case "TSTypeAssertion":
      {
        let e = !(H(node.expression) || G(node.expression));
        let t = ty(["<", tf([tw, n("typeAnnotation")]), tw, ">"]);
        let r = [tD("("), tf([tw, n("expression")]), tw, tD(")")];
        return e ? tg([[t, n("expression")], [t, ty(r, {
          shouldBreak: !0
        })], [t, n("expression")]]) : ty([t, n("expression")]);
      }
    case "TSDeclareFunction":
      return i$(e, n, t);
    case "TSExportAssignment":
      return ["export = ", n("expression"), a];
    case "TSModuleBlock":
      return i6(e, t, n);
    case "TSInterfaceBody":
    case "TSTypeLiteral":
      return aS(e, t, n);
    case "TSTypeAliasDeclaration":
      return is(e, t, n);
    case "TSQualifiedName":
      return [n("left"), ".", n("right")];
    case "TSAbstractMethodDefinition":
    case "TSDeclareMethod":
      return aa(e, t, n);
    case "TSAbstractAccessorProperty":
    case "TSAbstractPropertyDefinition":
      return ao(e, t, n);
    case "TSInterfaceHeritage":
    case "TSClassImplements":
    case "TSExpressionWithTypeArguments":
    case "TSInstantiationExpression":
      return [n("expression"), n(node.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSTemplateLiteralType":
      return nH(e, n, t);
    case "TSNamedTupleMember":
      return ih(e, t, n);
    case "TSRestType":
      return im(e, t, n);
    case "TSOptionalType":
      return [n("typeAnnotation"), "?"];
    case "TSInterfaceDeclaration":
      return aB(e, t, n);
    case "TSTypeParameterDeclaration":
    case "TSTypeParameterInstantiation":
      return i7(e, t, n, "params");
    case "TSTypeParameter":
      return i9(e, t, n);
    case "TSAsExpression":
    case "TSSatisfiesExpression":
      return aP(e, t, n);
    case "TSArrayType":
      return ix(n);
    case "TSPropertySignature":
      return [node.readonly ? "readonly " : "", iK(e, t, n), iS(e), ig(e, n)];
    case "TSParameterProperty":
      return [iO(node), node.$$static ? "static " : "", node.override ? "override " : "", node.readonly ? "readonly " : "", n("parameter")];
    case "TSTypeQuery":
      return iv(e, n);
    case "TSIndexSignature":
      {
        let r = node.parameters.length > 1 ? tD(ew(t) ? "," : "") : "";
        let o = ty([tf([tw, tP([", ", tw], e.map(n, "parameters"))]), r, tw]);
        let s = "ClassBody" === e.parent.type && "body" === e.key;
        return [s && node.$$static ? "static " : "", node.readonly ? "readonly " : "", "[", node.parameters ? o : "", "]", ig(e, n), s ? a : ""];
      }
    case "TSTypePredicate":
      return iT(e, n);
    case "TSNonNullExpression":
      return [n("expression"), "!"];
    case "TSImportType":
      return ["import(", n("argument"), ")", node.qualifier ? [".", n("qualifier")] : "", i7(e, t, n, node.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSLiteralType":
      return n("literal");
    case "TSIndexedAccessType":
      return ic(e, t, n);
    case "TSTypeOperator":
      return [node.operator, " ", n("typeAnnotation")];
    case "TSMappedType":
      return function (e, t, n) {
        let {
          node: _node37
        } = e;
        let i = tQ(t.originalText, N(_node37), N(_node37.typeParameter));
        return ty(["{", tf([t.bracketSpacing ? tE : tw, ty([n("typeParameter"), _node37.optional ? i8(_node37.optional, "?") : "", _node37.typeAnnotation ? ": " : "", n("typeAnnotation")]), t.semi ? tD(";") : ""]), rS(e, t), t.bracketSpacing ? tE : tw, "}"], {
          shouldBreak: i
        });
      }(e, t, n);
    case "TSMethodSignature":
      {
        let r = node.kind && "method" !== node.kind ? `${node.kind} ` : "";
        o.push(iO(node), r, node.computed ? "[" : "", n("key"), node.computed ? "]" : "", iS(e));
        let a = ie(e, n, t, !1, !0);
        let s = node.returnType ? "returnType" : "typeAnnotation";
        let _ = node[s];
        let l = _ ? ig(e, n, s) : "";
        let u = ir(node, l);
        o.push(u ? ty(a) : a);
        _ && o.push(ty(l));
        return ty(o);
      }
    case "TSNamespaceExportDeclaration":
      return ["export as namespace ", n("id"), t.semi ? ";" : ""];
    case "TSEnumDeclaration":
      return aI(e, n, t);
    case "TSEnumMember":
      return aN(e, n);
    case "TSImportEqualsDeclaration":
      return [node.isExport ? "export " : "", "import ", ab(node, !1), n("id"), " = ", n("moduleReference"), t.semi ? ";" : ""];
    case "TSExternalModuleReference":
      return ["require(", n("expression"), ")"];
    case "TSModuleDeclaration":
      {
        let {
          parent
        } = e;
        let s = "TSModuleDeclaration" === parent.type;
        let _ = (null == (r = node.body) ? void 0 : r.type) === "TSModuleDeclaration";
        s ? o.push(".") : (o.push(iw(e)), "global" !== node.kind && o.push(node.kind, " "));
        o.push(n("id"));
        _ ? o.push(n("body")) : node.body ? o.push(" ", ty(n("body"))) : o.push(a);
        return o;
      }
    case "TSConditionalType":
      return ak(e, t, n);
    case "TSInferType":
      return ip(e, t, n);
    case "TSIntersectionType":
      return i_(e, t, n);
    case "TSUnionType":
      return il(e, t, n);
    case "TSFunctionType":
    case "TSCallSignatureDeclaration":
    case "TSConstructorType":
    case "TSConstructSignatureDeclaration":
      return iu(e, t, n);
    case "TSTupleType":
      return iB(e, t, n);
    case "TSTypeReference":
      return [n("typeName"), i7(e, t, n, node.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSTypeAnnotation":
      return iD(e, t, n);
    case "TSEmptyBodyFunctionExpression":
      return iG(e, t, n);
    case "TSJSDocAllType":
      return "*";
    case "TSJSDocUnknownType":
      return "?";
    case "TSJSDocNullableType":
      return id(e, n, "?");
    case "TSJSDocNonNullableType":
      return id(e, n, "!");
    default:
      throw new rA(node, "TypeScript");
  }
}
var aL = R(["ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "ClassPrivateProperty", "MethodDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod"]);
var aR = function (e, t, n, r) {
  var i;
  e.isRoot && (t.__onHtmlBindingRoot || i.call(t, e.node, t));
  let a = function (e, t, n, r) {
    if (rM(e)) return ry(e, t);
    for (let i of [rU, rB, aj, aM, aF]) {
      let a = i(e, t, n, r);
      if (void 0 !== a) return a;
    }
  }(e, t, n, r);
  if (!a) return "";
  let {
    node
  } = e;
  if (aL(node)) return a;
  let s = w(node.decorators);
  let _ = function (e, t, n) {
    let {
      node: _node38,
      parent
    } = e;
    let {
      decorators
    } = r;
    if (!w(decorators) || r$(parent) || rM(e)) return "";
    let o = "ClassExpression" === _node38.type || "ClassDeclaration" === _node38.type || rV(_node38, t);
    return ["declaration" === e.key && $(parent) ? tA : o ? tS : "", tP(tE, e.map(n, "decorators")), tE];
  }(e, t, n);
  let l = "ClassExpression" === node.type;
  if (s && !l) return tU(a, e => ty([_, e]));
  let u = rg(e, t);
  let c = function (e, t) {
    if (t.semi || al(e, t) || au(e, t)) return !1;
    let {
      node: _node39,
      key,
      parent
    } = e;
    return !!("ExpressionStatement" === _node39.type && ("body" === key && ("Program" === parent.type || "BlockStatement" === parent.type || "StaticBlock" === parent.type || "TSModuleBlock" === parent.type) || "consequent" === key && "SwitchCase" === parent.type) && e.call(() => function e(t, n) {
      let {
        node: _node40
      } = t;
      switch (_node40.type) {
        case "ParenthesizedExpression":
        case "TypeCastExpression":
        case "ArrayExpression":
        case "ArrayPattern":
        case "TemplateLiteral":
        case "TemplateElement":
        case "RegExpLiteral":
          return !0;
        case "ArrowFunctionExpression":
          if (!iX(t, n)) return !0;
          break;
        case "UnaryExpression":
          {
            let {
              prefix,
              operator
            } = _node40;
            if (prefix && ("+" === operator || "-" === operator)) return !0;
            break;
          }
        case "BindExpression":
          if (!_node40.object) return !0;
          break;
        case "Literal":
          if (_node40.regex) return !0;
          break;
        default:
          if (ea(_node40)) return !0;
      }
      return !!rg(t, n) || !!K(_node40) && t.call(() => e(t, n), ...W(_node40));
    }(e, t), "expression"));
  }(e, t);
  return _ || u || c ? tU(a, e => [c ? ";" : "", u ? "(" : "", u && l && s ? [tf([tE, _, e]), tE] : [_, e], u ? ")" : ""]) : a;
};
var aJ = {
  avoidAstMutation: !0
};
var aq = {};
a(aq, {
  getVisitorKeys: () => aU,
  massageAstNode: () => aV,
  print: () => az
});
var aU = M({
  JsonRoot: ["node"],
  ArrayExpression: ["elements"],
  ObjectExpression: ["properties"],
  ObjectProperty: ["key", "value"],
  UnaryExpression: ["argument"],
  NullLiteral: [],
  BooleanLiteral: [],
  StringLiteral: [],
  NumericLiteral: [],
  Identifier: [],
  TemplateLiteral: ["quasis"],
  TemplateElement: []
});
function az(e, t, n) {
  let {
    node
  } = e;
  switch (node.type) {
    case "JsonRoot":
      return [n("node"), tA];
    case "ArrayExpression":
      if (0 === node.elements.length) return "[]";
      return ["[", tf([tA, tP([",", tA], e.map(() => null === e.node ? "null" : n(), "elements"))]), tA, "]"];
    case "ObjectExpression":
      return 0 === node.properties.length ? "{}" : ["{", tf([tA, tP([",", tA], e.map(n, "properties"))]), tA, "}"];
    case "ObjectProperty":
      return [n("key"), ": ", n("value")];
    case "UnaryExpression":
      return ["+" === node.operator ? "" : node.operator, n("argument")];
    case "NullLiteral":
      return "null";
    case "BooleanLiteral":
      return node.value ? "true" : "false";
    case "StringLiteral":
      return JSON.stringify(node.value);
    case "NumericLiteral":
      return aK(e) ? JSON.stringify(String(node.value)) : JSON.stringify(node.value);
    case "Identifier":
      return aK(e) ? JSON.stringify(node.name) : node.name;
    case "TemplateLiteral":
      return n(["quasis", 0]);
    case "TemplateElement":
      return JSON.stringify(node.value.cooked);
    default:
      throw new rA(node, "JSON");
  }
}
function aK(e) {
  return "key" === e.key && "ObjectProperty" === e.parent.type;
}
var aW = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
function aV(e, t) {
  let {
    type
  } = e;
  if ("ObjectProperty" === type) {
    let {
      key
    } = e;
    "Identifier" === key.type ? t.key = {
      type: "StringLiteral",
      value: key.name
    } : "NumericLiteral" === key.type && (t.key = {
      type: "StringLiteral",
      value: String(key.value)
    });
    return;
  }
  if ("UnaryExpression" === type && "+" === e.operator) return t.argument;
  if ("ArrayExpression" === type) {
    for (let [n, r] of e.elements.entries()) null === r && t.elements.splice(n, 0, {
      type: "NullLiteral"
    });
    return;
  }
  if ("TemplateLiteral" === type) return {
    type: "StringLiteral",
    value: e.quasis[0].value.cooked
  };
}
aV.ignoredProperties = aW;
var a$ = {
  bracketSpacing: {
    category: "Common",
    type: "boolean",
    default: !0,
    description: "Print spaces between brackets.",
    oppositeDescription: "Do not print spaces between brackets."
  },
  singleQuote: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Use single quotes instead of double quotes."
  },
  bracketSameLine: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Put > of opening tags on the last line instead of on a new line."
  },
  singleAttributePerLine: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Enforce single attribute per line in HTML, Vue and JSX."
  }
};
var aH = "JavaScript";
var $$aG2 = {
  arrowParens: {
    category: aH,
    type: "choice",
    default: "always",
    description: "Include parentheses around a sole arrow function parameter.",
    choices: [{
      value: "always",
      description: "Always include parens. Example: `(x) => x`"
    }, {
      value: "avoid",
      description: "Omit parens when possible. Example: `x => x`"
    }]
  },
  bracketSameLine: a$.bracketSameLine,
  bracketSpacing: a$.bracketSpacing,
  jsxBracketSameLine: {
    category: aH,
    type: "boolean",
    description: "Put > on the last line instead of at a new line.",
    deprecated: "2.4.0"
  },
  semi: {
    category: aH,
    type: "boolean",
    default: !0,
    description: "Print semicolons.",
    oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
  },
  experimentalTernaries: {
    category: aH,
    type: "boolean",
    default: !1,
    description: "Use curious ternaries, with the question mark after the condition.",
    oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent."
  },
  singleQuote: a$.singleQuote,
  jsxSingleQuote: {
    category: aH,
    type: "boolean",
    default: !1,
    description: "Use single quotes in JSX."
  },
  quoteProps: {
    category: aH,
    type: "choice",
    default: "as-needed",
    description: "Change when properties in objects are quoted.",
    choices: [{
      value: "as-needed",
      description: "Only add quotes around object properties where required."
    }, {
      value: "consistent",
      description: "If at least one property in an object requires quotes, quote all properties."
    }, {
      value: "preserve",
      description: "Respect the input use of quotes in object properties."
    }]
  },
  trailingComma: {
    category: aH,
    type: "choice",
    default: "all",
    description: "Print trailing commas wherever possible when multi-line.",
    choices: [{
      value: "all",
      description: "Trailing commas wherever possible (including function arguments)."
    }, {
      value: "es5",
      description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
    }, {
      value: "none",
      description: "No trailing commas."
    }]
  },
  singleAttributePerLine: a$.singleAttributePerLine
};
var $$aX3 = {
  estree: c,
  "estree-json": aq
};
var $$aY1 = [{
  linguistLanguageId: 183,
  name: "JavaScript",
  type: "programming",
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "text/javascript",
  color: "#f1e05a",
  aliases: ["js", "node"],
  extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib", ".wxs"],
  filenames: ["Jakefile"],
  interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell", "zx"],
  parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
  vscodeLanguageIds: ["javascript", "mongo"]
}, {
  linguistLanguageId: 183,
  name: "Flow",
  type: "programming",
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "text/javascript",
  color: "#f1e05a",
  aliases: [],
  extensions: [".js.flow"],
  filenames: [],
  interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
  parsers: ["flow", "babel-flow"],
  vscodeLanguageIds: ["javascript"]
}, {
  linguistLanguageId: 183,
  name: "JSX",
  type: "programming",
  tmScope: "source.js.jsx",
  aceMode: "javascript",
  codemirrorMode: "jsx",
  codemirrorMimeType: "text/jsx",
  color: void 0,
  aliases: void 0,
  extensions: [".jsx"],
  filenames: void 0,
  interpreters: void 0,
  parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
  vscodeLanguageIds: ["javascriptreact"],
  group: "JavaScript"
}, {
  linguistLanguageId: 378,
  name: "TypeScript",
  type: "programming",
  color: "#3178c6",
  aliases: ["ts"],
  interpreters: ["deno", "ts-node"],
  extensions: [".ts", ".cts", ".mts"],
  tmScope: "source.ts",
  aceMode: "typescript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/typescript",
  parsers: ["typescript", "babel-ts"],
  vscodeLanguageIds: ["typescript"]
}, {
  linguistLanguageId: 0x5a816a4,
  name: "TSX",
  type: "programming",
  color: "#3178c6",
  group: "TypeScript",
  extensions: [".tsx"],
  tmScope: "source.tsx",
  aceMode: "javascript",
  codemirrorMode: "jsx",
  codemirrorMimeType: "text/jsx",
  parsers: ["typescript", "babel-ts"],
  vscodeLanguageIds: ["typescriptreact"]
}, {
  linguistLanguageId: 174,
  name: "JSON.stringify",
  type: "data",
  color: "#292929",
  tmScope: "source.json",
  aceMode: "json",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/json",
  aliases: ["geojson", "jsonl", "topojson"],
  extensions: [".importmap"],
  filenames: ["package.json", "package-lock.json", "composer.json"],
  parsers: ["json-stringify"],
  vscodeLanguageIds: ["json"]
}, {
  linguistLanguageId: 174,
  name: "JSON",
  type: "data",
  color: "#292929",
  tmScope: "source.json",
  aceMode: "json",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/json",
  aliases: ["geojson", "jsonl", "topojson"],
  extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
  filenames: [".all-contributorsrc", ".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "flake.lock", "mcmod.info", ".babelrc", ".jscsrc", ".jshintrc", ".jslintrc", ".swcrc"],
  parsers: ["json"],
  vscodeLanguageIds: ["json"]
}, {
  linguistLanguageId: 423,
  name: "JSON with Comments",
  type: "data",
  color: "#292929",
  group: "JSON",
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "text/javascript",
  aliases: ["jsonc"],
  extensions: [".jsonc", ".code-snippets", ".code-workspace", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
  filenames: [],
  parsers: ["jsonc"],
  vscodeLanguageIds: ["jsonc"]
}, {
  linguistLanguageId: 175,
  name: "JSON5",
  type: "data",
  color: "#267CB9",
  extensions: [".json5"],
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/json",
  parsers: ["json5"],
  vscodeLanguageIds: ["json5"]
}];
var $$aQ0 = u;
export const _$$default = $$aQ0;
export const languages = $$aY1;
export const options = $$aG2;
export const printers = $$aX3;