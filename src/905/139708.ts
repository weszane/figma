import { FigmaURLType } from '../905/393741'

let r = 'file/new'
let a = 'design/new'
let s = 'board/new|jam'
let o = '[0-9a-zA-Z]{22,128}'
let l = (e, t, {
  extraPathParts: i = [],
  searchParams: n,
  normalizedPrefix: r,
  minimumApiVersion: a,
  maximumApiVersion: s,
} = {}) => [{
  test: ['pattern', `${e}/(${o})/branch/(${o})(?:/([^/]+))?`],
  urlType: t,
  normalizedPath: ['concat', `/${r ?? e}/`, ['match', 2], ...i],
  searchParams: n,
  title: ['decode-uri-component', ['replace', ['match', 3], '-', ' ']],
  minimumApiVersion: a,
  maximumApiVersion: s,
}, {
  test: ['pattern', `${e}/(${o})(?:/([^/]+))?`],
  urlType: t,
  normalizedPath: ['concat', `/${r ?? e}/`, ['match', 1], ...i],
  searchParams: n,
  title: ['decode-uri-component', ['replace', ['match', 2], '-', ' ']],
  minimumApiVersion: a,
  maximumApiVersion: s,
}]
function d(e, t) {
  return {
    test: ['pattern', e],
    urlType: FigmaURLType.EDITOR,
    isNewFile: !0,
    normalizedPath: ['concat', '/file/new', ['if', ['has-param', 'localFileKey'], ['concat', '?localFileKey=', ['param', 'localFileKey']], ['search']]],
    title: ['if', ['non-empty', ['param', 'name']], ['decode-uri-component', ['param', 'name']], ['t', 'desktop.tabs.untitled']],
    searchParams: t != null
      ? ['merge', ['original-params'], {
          type: t,
        }]
      : ['original-params'],
  }
}
function c(e) {
  return e != null && typeof e == 'object' && 'rules' in e && Array.isArray(e.rules) && 'interstitialPatterns' in e && Array.isArray(e.interstitialPatterns) && JSON.stringify(e).length < 1e6
}
function u(e, t, i) {
  return i.filter((t) => {
    let i = t.minimumApiVersion
    let n = t.maximumApiVersion
    return (!i || i <= e) && (!n || n >= e)
  })
}
function p(e, t, i) {
  return {
    ...i,
    rules: u(e, t, i.rules),
  }
}
let m = {
  rules: [{
    test: ['pattern', `(file|design|board|slides|site|buzz|rev|make)/${o}/image/[0-9a-zA-Z]+`],
    urlType: FigmaURLType.OPEN_EXTERNAL,
  }, {
    test: ['has-param', 'openInBrowser'],
    urlType: FigmaURLType.OPEN_EXTERNAL,
  }, {
    test: ['pattern', 'files/(team/)?([a-zA-Z0-9_]+/)?feed($|/)'],
    urlType: FigmaURLType.BELL_FEED,
  }, {
    test: ['pattern', '(files|idle_timeout|ip_account_restriction|my_plugins|user|org|team)($|/)'],
    urlType: FigmaURLType.FILE_BROWSER,
  }, {
    test: ['pattern', '(c|community|@[a-zA-Z0-9_]{1,15})($|/)'],
    urlType: FigmaURLType.COMMUNITY,
  }, {
    test: ['pattern', 'waf-validation-captcha'],
    urlType: FigmaURLType.POPOUT,
  }, {
    test: ['and', ['or', ['pattern', r], ['pattern', a], ['pattern', s]], ['or', ['has-param', 'try-plugin-id'], ['has-param', 'try-plugin-version-id'], ['has-param', 'try-plugin-name'], ['has-param', 'try-plugin-params']]],
    urlType: FigmaURLType.EDITOR,
    normalizedPath: ['concat', ['pathname'], ['search']],
    title: ['if', ['non-empty', ['param', 'try-plugin-name']], ['t', 'desktop.tabs.community', {
      pluginName: ['param', 'try-plugin-name'],
    }], ['t', 'desktop.tabs.untitled']],
    isNewFile: !0,
  }, d(r), d(a, 'design'), d(s, 'whiteboard'), d('slides/new', 'slides'), d('site/new', 'sites'), d('buzz/new', 'cooper'), d('rev/new', 'figmake'), d('make/new', 'figmake'), ...l('file', FigmaURLType.EDITOR), ...l('design', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    searchParams: ['if', ['not', ['has-param', 'm']], ['merge', ['original-params'], {
      type: 'design',
      mode: 'design',
    }], ['merge', ['original-params'], {
      type: 'design',
    }]],
  }), ...l('board', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    searchParams: ['merge', ['original-params'], {
      type: 'whiteboard',
    }],
  }), ...l('slides', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    searchParams: ['merge', ['original-params'], {
      type: 'slides',
    }],
  }), ...l('site', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    searchParams: ['merge', ['original-params'], {
      type: 'sites',
    }],
  }), ...l('buzz', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    searchParams: ['merge', ['original-params'], {
      type: 'cooper',
    }],
  }), ...l('rev', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    searchParams: ['merge', ['original-params'], {
      type: 'figmake',
    }],
  }), ...l('make', FigmaURLType.EDITOR, {
    normalizedPrefix: 'file',
    extraPathParts: [['if', ['=', ['param', 'fullscreen'], '1'], '?fullscreen=1', '']],
    searchParams: ['merge', ['original-params'], {
      type: 'figmake',
    }],
  }), ...l('proto', FigmaURLType.PROTOTYPE, {
    extraPathParts: ['?page-id=', ['param', 'page-id']],
    searchParams: ['omit', ['original-params'], ['page-id']],
  }), {
    test: ['and', ['pattern', `deck/${o}`], ['has-param', 'popout']],
    urlType: FigmaURLType.POPOUT,
  }, ...l('deck', FigmaURLType.DECK), ...l('presenter', FigmaURLType.PRESENTER), {
    test: !0,
    urlType: FigmaURLType.OPEN_EXTERNAL,
  }],
  interstitialPatterns: ['^/file/employee/consent/confirm/?$'],
}

export function filterNavigationConfig() {
  return p
}
export function filterRules() {
  return u
}
export function navigationConfig() {
  return m
}
export function validateNavigationConfig() {
  return c
}
