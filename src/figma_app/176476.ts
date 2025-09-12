import { createRef, PureComponent } from 'react'
import { H } from 'react-dom'
import { jsx, jsxs } from 'react/jsx-runtime'
import { bG } from '../905/149328'
import { n5, Q3, vY, wP } from '../905/457102'
import { reactTimerGroup } from '../905/542194'
import { s as _$$s } from '../905/817498'
import { sx } from '../905/941192'
import { uj0 } from '../figma_app/27776'
import { aW } from '../figma_app/527873'
import { CorePerfInfo, CoverageStatus, Fullscreen, FullscreenPerfMetrics, PerfType } from '../figma_app/763686'
import { unmountComponentAtNode } from 'react-dom'

let m = [{
  label: 'Time between frames (ms)',
  id: 'inter-frame-time',
  max: 100,
  barWidth: 1,
}, {
  label: 'FPS',
  id: 'fps',
  max: 120,
  barWidth: 1,
}, {
  label: 'React work (ms)',
  id: 'react',
  max: 100,
  barWidth: 1,
}, {
  label: 'Frame handler (ms)',
  id: 'frame',
  max: 100,
  barWidth: 1,
  children: [{
    label: 'Scene render (ms)',
    id: 'scene-render',
    max: 100,
    barWidth: 1,
    children: [{
      label: 'Render tree creation (ms)',
      id: 'render-tree-generation',
      max: 100,
      barWidth: 1,
    }],
  }, {
    label: 'React + redux (ms)',
    id: 'react-render',
    max: 100,
    barWidth: 1,
  }, {
    label: 'Symbol updater (ms)',
    id: 'symbol-updater',
    max: 100,
    barWidth: 1,
  }, {
    label: 'Style updater (ms)',
    id: 'style-updater',
    max: 100,
    barWidth: 1,
  }, {
    label: 'Comments renderer (ms)',
    id: 'comments-render',
    max: 100,
    barWidth: 1,
  }],
}, {
  label: 'C++ event handling (ms)',
  id: 'fullscreen-handle-event',
  max: 100,
  barWidth: 1,
}, {
  label: 'malloc call count (#)',
  id: 'cpp-malloc-call-count',
  autoResize: !0,
  max: 100,
  barWidth: 1,
}, {
  label: 'malloc size totals (KB)',
  id: 'cpp-malloc-size-totals',
  autoResize: !0,
  max: 1,
  barWidth: 1,
}, {
  label: 'Used JS memory (MB)',
  id: 'total-memory',
  max: 10,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Used c++ heap memory (MB)',
  id: 'cpp-heap-memory',
  max: 10,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Graphics memory (MB)',
  id: 'gpu-memory',
  max: 128,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Render job queue length',
  id: 'render-job-queue-length',
  max: 4,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Time between render tree swaps (ms)',
  id: 'render-tree-swap-time',
  max: 300,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Stale content time (ms)',
  id: 'render-tree-stale-time',
  max: 500,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Est viewport coverage (ms)',
  id: 'estimated-viewport-coverage',
  max: 1,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Min viewport sharpness',
  id: 'min-sharpness',
  max: 1,
  autoResize: !0,
  barWidth: 1,
}, {
  label: 'Avg viewport sharpness',
  id: 'avg-sharpness',
  max: 1,
  autoResize: !0,
  barWidth: 1,
}]
function g(e, t) {
  let r = e.getBoundingClientRect()
  e.width = r.width * t
  e.height = r.height * t
  e.style.width = `${r.width}px`
  e.style.height = `${r.height}px`
  let n = e.getContext('2d')
  n && (n.scale(t, t), n.imageSmoothingEnabled = !1)
}
class f extends PureComponent {
  constructor(e) {
    super(e)
    this.ctx = null
    this.lastDisplayedUpdateTime = 0
    this.displayedNumber = null
    this.buffer = []
    this.dpr = 1
    this.canvasRef = createRef()
    this.lastRenderedHitCount = 0
    this.updateFromTimer = (e) => {
      let t = e.hitCount - this.lastRenderedHitCount
      let r = 0
      for (let n = Math.max(0, e.elapsedTimes.length - t); n < e.elapsedTimes.length; n++) r += e.elapsedTimes[n]
      this.append(r)
      this.lastRenderedHitCount = e.hitCount
    }
    this.yAxisMaxValue = e.max
    this.bufferCapacity = Math.ceil(e.width / e.barWidth)
  }

  componentDidMount() {
    if (this.canvasRef.current) {
      this.dpr = window.devicePixelRatio
      let e = this.canvasRef.current
      this.ctx = e.getContext('2d')
      g(e, this.dpr)
    }
  }

  append(e) {
    if (!this.ctx)
      return
    let t = this.ctx.canvas
    let r = this.ctx
    for (this.dpr !== window.devicePixelRatio && (this.dpr = window.devicePixelRatio, g(t, this.dpr)), this.buffer.push(e); this.buffer.length >= this.bufferCapacity;) this.buffer.shift()
    let n = 1 / 0
    let i = -1 / 0
    for (let e of this.buffer) {
      n = Math.min(n, e)
      i = Math.max(i, e)
    }
    let a = this.props.width
    let s = this.props.height
    let o = this.props.barWidth
    let l = s - 20
    r.font = '9px monospace'
    r.fillStyle = this.props.bg
    r.textBaseline = 'top'
    r.fillRect(0, 0, a, 20)
    r.fillStyle = this.props.fg
    let d = performance.now()
    if ((this.displayedNumber === null || d - this.lastDisplayedUpdateTime > 150) && (this.displayedNumber = e, this.lastDisplayedUpdateTime = d), r.fillText(`sample: ${this.displayedNumber.toFixed(1)}`, 0, 0), r.fillText(`${n.toFixed(1)} - ${i.toFixed(1)}`, 0, 10), r.fillStyle = this.props.bg, this.props.autoResize) {
      if (e > this.yAxisMaxValue) {
        let n = 2 ** Math.ceil(Math.log2(e / this.yAxisMaxValue))
        this.yAxisMaxValue *= n
        r.fillRect(0, s - l, a, (n - 1) * l / n)
        r.drawImage(t, 0, (s - l) * this.dpr, a * this.dpr, l * this.dpr, 0, s - l / n, a, l / n)
      }
      else if (this.yAxisMaxValue > 2 * Math.max(this.props.max, i)) {
        let e = 2 ** Math.ceil(Math.log2(this.yAxisMaxValue / Math.max(this.props.max, i)))
        this.yAxisMaxValue /= e
        r.drawImage(t, 0, (s - l / e) * this.dpr, a * this.dpr, l / e * this.dpr, 0, s - l, a, l)
      }
    }
    r.drawImage(t, o * this.dpr, (s - l) * this.dpr, (a - o) * this.dpr, l * this.dpr, 0, s - l, a - o, l)
    let c = Math.floor(l * Math.min(1, e / this.yAxisMaxValue))
    r.fillRect(a - o, s - l, o, l)
    r.fillStyle = this.props.fg
    r.fillRect(a - o, s - c, o, c)
  }

  render() {
    return jsx('canvas', {
      className: wP,
      ref: this.canvasRef,
      width: this.props.width,
      height: this.props.height,
    })
  }
}
function E(e) {
  return e / 1048576
}
f.displayName = 'Sparkline'
class y extends PureComponent {
  constructor(e) {
    super(e)
    this.sparklines = new Map()
    this.lastFrameTime = null
    this.tsmerMetrics = new _$$s()
    this.updateTimers = () => {
      if (this.tsmerMetrics.onFrame(), this.lastFrameTime == null) {
        this.lastFrameTime = performance.now()
      }
      else {
        let e = performance.now()
        let t = this.sparklines.get('inter-frame-time')
        t && t.append(e - this.lastFrameTime)
        let r = this.sparklines.get('fps')
        r && r.append(1e3 / (e - this.lastFrameTime))
        this.lastFrameTime = e
      }
      let e = this.sparklines.get('total-memory')
      e && e.append(E(aW() ?? 0))
      let t = this.sparklines.get('cpp-heap-memory')
      t && t.append(E(CorePerfInfo.getTotalUsedHeapMemory()))
      let r = this.sparklines.get('gpu-memory')
      r && CorePerfInfo?.getMemStatsTotal && r.append(E(CorePerfInfo.getMemStatsTotal(PerfType.RENDERER)))
      let n = this.sparklines.get('cpp-malloc-call-count')
      n && n.append(CorePerfInfo.getAllocCallCount())
      let i = this.sparklines.get('cpp-malloc-size-totals')
      i && i.append(CorePerfInfo.getAllocTotal() / 1024)
      CorePerfInfo.resetAllocCountsAndTotal()
      let a = this.sparklines.get('render-job-queue-length')
      a && a.append(FullscreenPerfMetrics.getRendererJobQueueLength())
      let s = this.sparklines.get('render-tree-swap-time')
      s && s.append(this.tsmerMetrics.lastEditFrameTime())
      let d = this.sparklines.get('render-tree-stale-time')
      d && d.append(this.tsmerMetrics.lastFrameStaleness())
      let c = this.sparklines.get('estimated-viewport-coverage')
      c && c.append(Fullscreen.estimatedViewportRenderCoverage(CoverageStatus.DEFINITELY_COVERED_ONLY))
      let u = this.sparklines.get('min-sharpness')
      u && u.append(Fullscreen.minViewportSharpness())
      let _ = this.sparklines.get('avg-sharpness')
      _ && _.append(Fullscreen.avgViewportSharpness())
      let h = reactTimerGroup.report()
      let m = []
      let g = (e) => {
        m.push(e.name)
        let t = this.sparklines.get(m.join(','))
        for (let r of (t && t.updateFromTimer(e), e.children)) g(r)
        m.pop()
      }
      for (let e of h) g(e)
      requestAnimationFrame(this.updateTimers)
    }
    this.sparklineRef = e => (t) => {
      t && this.sparklines.set(e.join(','), t)
    }
    this.frameRequest = null
    this.renderHUDNode = (e, t = []) => {
      let r = t.concat([e.id])
      let i = 150 - 10 * t.length
      let a = sx.add({
        color: 'black',
      }).$.color
      let s = sx.add({
        backgroundColor: 'white',
      }).$.backgroundColor
      let o = !!(this.state?.nodesHiddenState ?? {})[e.id]
      return jsxs('div', {
        children: [jsx('div', {
          className: n5,
          children: jsxs('div', {
            children: [jsxs('div', {
              children: [jsx('button', {
                style: {
                  backgroundColor: 'gray',
                  display: 'inline-block',
                  marginRight: '2px',
                },
                onClick: () => {
                  this.toggleNodeHidden(e.id)
                },
                children: o ? '(+)' : '(-)',
              }), e.label],
            }), !o && jsx(f, {
              ref: this.sparklineRef(r),
              fg: a,
              bg: s,
              barWidth: e.barWidth,
              max: e.max,
              height: 40,
              autoResize: !!e.autoResize,
              width: i,
            })],
          }),
        }), e.children && !o && jsx('div', {
          className: Q3,
          children: e.children.map(e => this.renderHUDNode(e, r)),
        })],
      }, e.id)
    }
    this.state = {
      nodesHiddenState: {
        'fps': !0,
        'react': !0,
        'frame': !0,
        'fullscreen-handle-event': !0,
        'cpp-malloc-call-count': !0,
        'cpp-malloc-size-totals': !0,
        'total-memory': !0,
        'cpp-heap-memory': !0,
        'gpu-memory': !0,
        'render-job-queue-length': !0,
        'render-tree-swap-time': !0,
        'render-tree-stale-time': !0,
        'estimated-viewport-coverage': !0,
        'min-sharpness': !0,
        'avg-sharpness': !0,
      },
    }
  }

  componentDidMount() {
    this.frameRequest = requestAnimationFrame(this.updateTimers)
  }

  componentWillUnmount() {
    this.frameRequest && cancelAnimationFrame(this.frameRequest)
  }

  toggleNodeHidden(e) {
    let t = this.state?.nodesHiddenState ?? {}
    let r = !!t[e]
    this.setState({
      nodesHiddenState: {
        ...t,
        [e]: !r,
      },
    })
  }

  render() {
    let e = this.props.isFigjamFile ? 0 : parseInt(uj0, 10) + 5
    let t = bG() + 5
    return jsx('div', {
      className: vY,
      style: {
        right: e,
        top: t,
      },
      children: m.map(e => this.renderHUDNode(e)),
    })
  }
}
y.displayName = 'PerfHUD'
let b = null
export function $$T0(e) {
  b
    ? (unmountComponentAtNode(b), document.body.removeChild(b), b = null)
    : (b = document.createElement('div'), document.body.appendChild(b), H(b).render(jsx(y, {
        isFigjamFile: e,
      })))
}
export const v = $$T0
