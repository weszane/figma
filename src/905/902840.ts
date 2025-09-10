import { D as _$$D } from '../905/122084'
import { D } from '../vendor/24766'
import { v5, YW } from '../vendor/231521'
import { Ey, lJ, Ni, sT } from '../vendor/408361'
import { Db } from '../vendor/491721'
import { bk, d7, eA, Eg, gb, gW, mK, NB, Pi, ps, Sq, TB, Up, Wn, WY } from '../vendor/693164'
import { g } from '../vendor/797080'
import { iK } from '../vendor/858260'
import { jL } from '../vendor/871930'

let p = [mK, NB, eA, gb, d7, Pi, WY, Eg, gW, Sq, TB, Up, ps]
let m = {
  nodes: [Ey, v5, YW, Db, iK, jL],
}
let h = void 0
export function $$g2(e) {
  let t = e.replace(/(```)\s+/, '$1')
  let i = D(m)
  let n = ''
  i.update(() => {
    Wn(t, p, h, !0)
    n = bk(p, h, !0)
  })
  return n
}
export function $$f1(e) {
  let t = D(m)
  let i = t.parseEditorState(e)
  t.setEditorState(i)
  let n = ''
  t.update(() => {
    n = bk(p, h, !0)
  }, {
    discrete: !0,
  })
  return n
}
export function $$_3(e) {
  let t = D(m)
  return _$$D(e, t, 'markdown', p)
}
let A = [{
  regex: /^([^*_]*)(\*|_)([^*_]+)(\*{1,3}|_{1,3})([^*_]+)(\4)(\2)([^*_]*)$/,
  textNodeTransform: (e) => {
    e.hasFormat('italic') || e.toggleFormat('italic')
  },
}, {
  regex: /^([^*_]*)(\*\*|__)([^*_]+)(\*{1,3}|_{1,3})([^*_]+)(\4)(\2)([^*_]*)$/,
  textNodeTransform: (e) => {
    e.hasFormat('bold') || e.toggleFormat('bold')
  },
}, {
  regex: /^([^*_]*)(\*\*\*|___)([^*_]+)(\*{1,3}|_{1,3})([^*_]+)(\4)(\2)([^*_]*)$/,
  textNodeTransform: (e) => {
    e.hasFormat('italic') || e.toggleFormat('italic')
    e.hasFormat('bold') || e.toggleFormat('bold')
  },
}]
export function $$y0(e) {
  let t = D(m)
  let i = ''
  let n = ''
  t.registerNodeTransform(Db, (e) => {
    let t = {
      target: '_blank',
      rel: 'noreferrer noopener nofollow ugc',
    }
    e.__rel !== t.rel && (e.__rel = t.rel)
    e.__target !== t.target && (e.__target = t.target)
  })
  t.update(() => {
    Wn(e, p, h, !0)
  }, {
    discrete: !0,
  })
  t.update(() => {
    for (let e of Ni().getAllTextNodes()) {
      !(function (e) {
        let t = e.getFormat()
        let i = e.getTextContent()
        for (let n of A) {
          let r = (function (e, t) {
            let i = t.match(e)
            if (!i)
              return null
            let [n, r, a, s, o, l, d, c, u] = i
            return n && a && s && o && l && d && c && a === c && o === d
              ? {
                  fullText: n,
                  interiorText: s + o + l + d,
                  textBeforeMarkdown: r,
                  textAfterMarkdown: u,
                }
              : null
          }(n.regex, i))
          if (!r)
            continue
          let {
            interiorText,
            textBeforeMarkdown,
            textAfterMarkdown,
          } = r
          let d = lJ()
          Wn(interiorText, p, d, !0)
          let u = d.getAllTextNodes()
          u.forEach((e) => {
            let i = e.getFormat() | t
            e.setFormat(i)
            n.textNodeTransform(e)
          })
          let m = []
          if (textBeforeMarkdown) {
            let e = sT(textBeforeMarkdown)
            e.setFormat(t)
            m.unshift(e)
          }
          if (m.push(...u), textAfterMarkdown) {
            let e = sT(textAfterMarkdown)
            e.setFormat(t)
            m.push(e)
          }
          if (!m || !m[0])
            continue
          let h = e.replace(m[0])
          m.slice(1).forEach((e) => {
            h = h.insertAfter(e)
          })
        }
      }(e))
    }
  })
  t.read(() => {
    i = JSON.stringify(t.getEditorState().toJSON())
    n = g(t)
  })
  return {
    lexical: i,
    html: n,
  }
}
export const Kq = $$y0
export const cd = $$f1
export const nB = $$g2
export const zb = $$_3
