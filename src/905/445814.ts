import { memo, useCallback } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { v as _$$v } from '../905/92662';
import { p as _$$p } from '../905/110044';
import { F as _$$F } from '../905/126561';
import { _ as _$$_ } from '../905/154979';
import { j as _$$j } from '../905/206476';
import { o as _$$o } from '../905/218971';
import { K as _$$K } from '../905/389903';
import { v as _$$v2 } from '../905/399666';
import { e } from '../905/435763';
import { H as _$$H } from '../905/507464';
import { B as _$$B } from '../905/548640';
import { setupThemeContext } from '../905/614223';
import { k as _$$k } from '../905/649323';
import { o as _$$o2 } from '../905/688631';
import { P as _$$P } from '../905/697522';
import { N as _$$N } from '../905/861698';
import { C as _$$C } from '../905/866991';
import { X as _$$X } from '../905/924044';
import { fileEntityDataMapper } from '../905/943101';
import { FFileType } from '../figma_app/191312';
import { returnSecond, throwTypeError } from '../figma_app/465776';
import { hasTemplateEntity } from '../figma_app/622574';
let p = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'piper',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M23 9a2 2 0 0 1 2 2v8l-.01.204a2 2 0 0 1-1.786 1.785L23 21h-1.982l.945 2.31.028.098a.5.5 0 0 1-.906.37l-.048-.088-1.1-2.69h-7.875l-1.1 2.69a.5.5 0 0 1-.925-.38l.945-2.31H9l-.204-.01a2 2 0 0 1-1.785-1.786L7 19v-8a2 2 0 0 1 2-2zM9 10a1 1 0 0 0-.995.898L8 11v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2'
      })]
    })
  });
});
let m = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'piper',
    children: jsxs('svg', {
      width: '16',
      height: '16',
      fill: 'none',
      viewBox: '0 0 16 16',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M12.5 3A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.347 1.492L12.5 13h-9l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L2 11.5v-7A1.5 1.5 0 0 1 3.5 3zM3 11.5a.5.5 0 0 0 .5.5H5V7H3zM6 7v5h6.5a.5.5 0 0 0 .5-.5V7zM3.5 4a.5.5 0 0 0-.5.5V6h10V4.5a.5.5 0 0 0-.5-.5z'
      })]
    })
  });
});
let h = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'piper',
    children: jsxs('svg', {
      width: '24',
      height: '24',
      fill: 'none',
      viewBox: '0 0 24 24',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M17 6a2 2 0 0 1 2 2v8l-.01.204a2 2 0 0 1-1.786 1.785L17 18H7l-.204-.01a2 2 0 0 1-1.785-1.786L5 16V8a2 2 0 0 1 2-2zM6 16a1 1 0 0 0 1 1h2v-6H6zm4-5v6h7a1 1 0 0 0 1-1v-5zM7 7a1 1 0 0 0-.995.897L6 8v2h12V8a1 1 0 0 0-1-1z'
      })]
    })
  });
});
let g = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'piper',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M22 9a2 2 0 0 1 2 2v10l-.01.204a2 2 0 0 1-1.786 1.785L22 23H10l-.204-.01a2 2 0 0 1-1.785-1.786L8 21V11a2 2 0 0 1 2-2zM9 21a1 1 0 0 0 1 1h3v-7H9zm5-6v7h8a1 1 0 0 0 1-1v-6zm-4-5a1 1 0 0 0-1 1v3h14v-3a1 1 0 0 0-1-1z'
      })]
    })
  });
});
let A = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'seascape',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18m-2.993 9.5c.055 2.173.47 4.089 1.078 5.458.328.738.693 1.273 1.048 1.61.349.332.64.432.867.432s.518-.1.867-.432c.355-.337.72-.872 1.048-1.61.609-1.37 1.023-3.285 1.078-5.458zm-4.99 0a8 8 0 0 0 5.937 7.234c-1.11-1.49-1.873-4.156-1.948-7.234zm11.977 0c-.075 3.078-.839 5.744-1.95 7.234a8 8 0 0 0 5.938-7.234zm-6.04-8.235A8 8 0 0 0 8.018 15.5h3.988c.075-3.079.838-5.745 1.948-7.235M16 8c-.227 0-.518.1-.867.432-.355.337-.72.872-1.048 1.61-.609 1.37-1.023 3.285-1.078 5.458h5.986c-.055-2.173-.47-4.089-1.078-5.458-.328-.738-.693-1.273-1.048-1.61C16.518 8.099 16.227 8 16 8m2.045.265c1.11 1.49 1.874 4.156 1.95 7.235h3.987a8 8 0 0 0-5.937-7.235'
      })]
    })
  });
});
let v = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'whiteboard',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M22 8a2 2 0 0 1 2 2v6.172l-.01.197a2 2 0 0 1-.576 1.217l-5.828 5.828-.146.133a2 2 0 0 1-1.268.453H10l-.204-.01A2 2 0 0 1 8 22V10a2 2 0 0 1 2-2zM10 9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6v-5a2 2 0 0 1 2-2h5v-6a1 1 0 0 0-1-1zm8 8a1 1 0 0 0-1 1v4.586L22.586 17z'
      })]
    })
  });
});
let I = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'whiteboard',
    children: jsxs('svg', {
      width: '16',
      height: '16',
      fill: 'none',
      viewBox: '0 0 16 16',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M12.653 3.008A1.5 1.5 0 0 1 14 4.5v7l-.008.153a1.5 1.5 0 0 1-1.339 1.34L12.5 13h-9l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L2 11.5v-7a1.5 1.5 0 0 1 1.347-1.492L3.5 3h9zM3 11.5a.5.5 0 0 0 .5.5H5V7H3zM6 7v5h6.5a.5.5 0 0 0 .5-.5V7zM3.5 4a.5.5 0 0 0-.5.5V6h10V4.5a.5.5 0 0 0-.5-.5z'
      })]
    })
  });
});
let E = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'whiteboard',
    children: jsxs('svg', {
      width: '24',
      height: '24',
      fill: 'none',
      viewBox: '0 0 24 24',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M17.204 6.01A2 2 0 0 1 19 8v8l-.01.204a2 2 0 0 1-1.786 1.785L17 18H7l-.204-.01a2 2 0 0 1-1.785-1.786L5 16V8a2 2 0 0 1 1.796-1.99L7 6h10zM6 16a1 1 0 0 0 1 1h2v-6H6zm4-5v6h7a1 1 0 0 0 1-1v-5zM7 7a1 1 0 0 0-.995.897L6 8v2h12V8a1 1 0 0 0-1-1z'
      })]
    })
  });
});
let x = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'whiteboard',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M22 9a2 2 0 0 1 2 2v10l-.01.204a2 2 0 0 1-1.786 1.785L22 23H10l-.204-.01a2 2 0 0 1-1.785-1.786L8 21V11a2 2 0 0 1 1.796-1.99L10 9zM9 21a1 1 0 0 0 1 1h3v-7H9zm5-6v7h8a1 1 0 0 0 1-1v-6zm-4-5a1 1 0 0 0-1 1v3h14v-3a1 1 0 0 0-1-1z'
      })]
    })
  });
});
let C = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'dev-handoff',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M18.026 8.343a.5.5 0 0 1 .95.316l-5 15a.5.5 0 0 1-.95-.316zm2.121 3.305a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.707-.707L23.794 16l-3.647-3.647a.5.5 0 0 1 0-.706m-9 0a.5.5 0 1 1 .707.707L8.208 16l3.646 3.646.065.079a.502.502 0 0 1-.694.693l-.078-.064-4-4a.5.5 0 0 1 0-.707z'
      })]
    })
  });
});
let T = memo(e => {
  return jsxs('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-bg-menu)',
      d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    }), jsx('path', {
      fill: 'var(--color-icon-onbrand)',
      d: 'M8 2a2 2 0 0 1 2 2h2l.102.005A1 1 0 0 1 13 5v1a1 1 0 0 1-.898.995l-.204.01a1 1 0 0 0 0 1.99l.204.01A1 1 0 0 1 13 10v1a1 1 0 0 1-1 1h-2a2 2 0 1 1-4 0H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 .897-.995l.206-.01a1 1 0 0 0 0-1.99l-.206-.01A1 1 0 0 1 3 6V5a1 1 0 0 1 1-1h2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v1H4v1a2 2 0 1 1 0 4v1h3v1a1 1 0 1 0 2 0v-1h3v-1a2 2 0 1 1 0-4V5H9V4a1 1 0 0 0-1-1'
    })]
  });
});
let k = memo(e => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-bg-menu)',
      d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
    }), jsx('path', {
      fill: 'var(--color-icon-onbrand)',
      d: 'M12 5.05a1.95 1.95 0 0 1 1.836 2.61l-.056.148c-.038.1-.058.153-.071.2-.012.042-.009.048-.009.032v.01H16a.95.95 0 0 1 .95.95v1a.95.95 0 0 1-.95.95 1.05 1.05 0 1 0 0 2.1.95.95 0 0 1 .95.95v1a.95.95 0 0 1-.95.95h-2.3v.01c0-.016-.003-.01.009.032.013.047.033.101.071.2l.056.15A1.95 1.95 0 0 1 12 18.95a1.95 1.95 0 0 1-1.836-2.609l.056-.148c.038-.1.058-.154.071-.2.012-.043.009-.049.009-.033v-.01H8a.95.95 0 0 1-.95-.95v-1a.95.95 0 0 1 .95-.95 1.05 1.05 0 0 0 0-2.1.95.95 0 0 1-.95-.95V9A.95.95 0 0 1 8 8.05h2.3v-.01c0 .016.003.01-.009-.032a3 3 0 0 0-.071-.2l-.056-.149A1.95 1.95 0 0 1 12 5.05M12 6a1 1 0 0 0-.941 1.338l.048.131c.071.186.143.374.143.571V9H8v1a2 2 0 0 1 0 4v1h3.25v.96c0 .197-.072.386-.143.572l-.048.13a1 1 0 1 0 1.883 0l-.05-.13c-.07-.186-.142-.375-.142-.572V15H16v-1a2 2 0 0 1 0-4V9h-3.25v-.96c0-.197.072-.385.143-.571l.048-.13A1 1 0 0 0 12 6'
    })]
  });
});
let R = memo(e => {
  return jsxs('svg', {
    width: '32',
    height: '32',
    fill: 'none',
    viewBox: '0 0 32 32',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-bg-menu)',
      d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
    }), jsx('path', {
      fill: 'var(--color-icon-onbrand)',
      d: 'M16 7a2.5 2.5 0 0 1 2.139 3.792c-.056.092-.09.158-.113.208H21a1 1 0 0 1 1 1v1.88a1 1 0 0 1-1.334.943 1.25 1.25 0 1 0-.416 2.427q.209 0 .416-.074a1 1 0 0 1 1.334.942V20a1 1 0 0 1-1 1h-2.974c.023.05.057.116.113.208a2.5 2.5 0 1 1-4.277 0c.055-.092.09-.157.112-.208H11a1 1 0 0 1-1-1v-1.882l.007-.12a1 1 0 0 1 1.327-.822q.207.074.416.074l.128-.007a1.25 1.25 0 0 0 1.115-1.115L13 16a1.25 1.25 0 0 0-1.122-1.243l-.128-.007q-.212 0-.416.073A1 1 0 0 1 10 13.881V12a1 1 0 0 1 1-1h2.974a2 2 0 0 0-.113-.208A2.5 2.5 0 0 1 16 7m0 1a1.5 1.5 0 0 0-1.284 2.273c.147.243.284.505.284.789V12h-4v1.88a2.25 2.25 0 1 1 .75 4.37c-.263 0-.515-.049-.75-.132V20h4v.939c0 .283-.137.545-.284.788a1.5 1.5 0 1 0 2.568 0c-.147-.243-.284-.505-.284-.788V20h4v-1.882a2.2 2.2 0 0 1-.75.132 2.25 2.25 0 1 1 .75-4.37V12h-4v-.938c0-.284.137-.546.284-.789A1.5 1.5 0 0 0 16 8'
    })]
  });
});
let P = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '24',
      height: '24',
      fill: 'none',
      viewBox: '0 0 24 24',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M8 7.804c0-1.389 1.54-2.225 2.704-1.468l6.65 4.322a1.6 1.6 0 0 1 0 2.684l-6.65 4.322C9.54 18.42 8 17.584 8 16.196zm2.16-.63a.75.75 0 0 0-1.16.63v8.392a.75.75 0 0 0 1.16.63l6.649-4.323a.6.6 0 0 0 0-1.006z'
      })]
    })
  });
});
let O = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M11.005 10.72c.093-1.361 1.569-2.183 2.775-1.547l.12.068 8.161 5.051a2 2 0 0 1-.003 3.403l-8.162 5.023C12.63 23.497 11 22.586 11 21.1V10.857zM12 21.1a.9.9 0 0 0 1.371.766l8.162-5.022a1 1 0 0 0 .003-1.702l-8.163-5.05a.9.9 0 0 0-1.373.765z'
      })]
    })
  });
});
let D = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '16',
      height: '16',
      fill: 'none',
      viewBox: '0 0 16 16',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M8 4.333a3.5 3.5 0 0 1 4.575.065l.257.228A.5.5 0 0 1 13 5v7a.5.5 0 0 1-.832.374l-.257-.228a2.5 2.5 0 0 0-3.322 0l-.257.228a.5.5 0 0 1-.664 0l-.257-.228a2.5 2.5 0 0 0-3.139-.149l-.183.149-.257.228A.5.5 0 0 1 3 12V5c0-.143.061-.28.168-.374l.257-.228.126-.107A3.5 3.5 0 0 1 8 4.333m-.589.813a2.5 2.5 0 0 0-3.139-.149l-.183.149L4 5.224v5.76a3.5 3.5 0 0 1 3.5 0v-5.76zm4.5 0a2.5 2.5 0 0 0-3.322 0l-.089.078v5.76a3.5 3.5 0 0 1 3.5 0v-5.76z'
      })]
    })
  });
});
let L = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '24',
      height: '24',
      fill: 'none',
      viewBox: '0 0 24 24',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M16 6c1.357 0 2.327.409 2.965.834.316.211.548.424.703.588a3 3 0 0 1 .226.268l.02.028.001.003h.001s0 .002-.416.279l.416-.277A.5.5 0 0 1 20 8v9a.5.5 0 0 1-.888.315v.001l-.002-.002-.022-.025a2 2 0 0 0-.114-.11 3 3 0 0 0-.53-.366c-.49-.273-1.282-.563-2.444-.563s-1.954.29-2.444.563a3 3 0 0 0-.53.367 2 2 0 0 0-.136.134v-.002a.5.5 0 0 1-.78 0v.002l.002.001v.001l-.002-.002-.022-.025a2 2 0 0 0-.114-.11 3 3 0 0 0-.53-.366c-.49-.273-1.282-.563-2.444-.563s-1.954.29-2.444.563a3 3 0 0 0-.53.367 2 2 0 0 0-.136.134q-.003.001-.002.002A.5.5 0 0 1 5 17V8a.5.5 0 0 1 .084-.277L5.5 8l-.416-.278h.001V7.72l.002-.003.02-.028.047-.063q.061-.08.178-.205a4 4 0 0 1 .703-.588C6.673 6.409 7.643 6 9 6s2.327.409 2.965.834c.218.145.395.292.535.423.14-.13.317-.278.535-.423C13.673 6.409 14.643 6 16 6M9 7c-1.143 0-1.923.341-2.41.666a3 3 0 0 0-.531.443q-.034.037-.059.068v7.802l.07-.041c.634-.353 1.592-.688 2.93-.688s2.296.335 2.93.688l.07.04V8.25q0-.034.006-.066-.028-.034-.065-.075a3 3 0 0 0-.53-.443C10.922 7.341 10.142 7 9 7m7 0c-1.143 0-1.923.341-2.41.666-.246.164-.42.326-.531.443q-.038.041-.066.075.006.031.007.066v7.727l.07-.04c.634-.352 1.592-.687 2.93-.687s2.296.335 2.93.688l.07.04v-7.8q-.025-.031-.059-.068a3 3 0 0 0-.53-.443C17.922 7.341 17.142 7 16 7'
      })]
    })
  });
});
let F = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M20.5 8c1.722 0 2.948.557 3.746 1.129.397.284.686.57.878.789a4 4 0 0 1 .275.352l.017.024.008.012v.002l.033.061a.5.5 0 0 1 .043.202V23a.5.5 0 0 1-.9.3l-.004-.005-.034-.04a2 2 0 0 0-.157-.162 4 4 0 0 0-.706-.527c-.65-.387-1.687-.793-3.199-.793s-2.55.406-3.2.793a4 4 0 0 0-.705.527 2 2 0 0 0-.19.202l-.006.007V23.3a.5.5 0 0 1-.798 0l-.005-.006-.034-.04a2 2 0 0 0-.157-.162 4 4 0 0 0-.706-.527c-.65-.387-1.687-.793-3.199-.793-1.513 0-2.55.406-3.2.793a4 4 0 0 0-.705.527 2 2 0 0 0-.19.202l-.006.007V23.3A.5.5 0 0 1 6.5 23V10.571a.5.5 0 0 1 .075-.263l.001-.001v-.001l.008-.012.017-.024q.02-.031.057-.082.074-.104.218-.27c.192-.218.48-.505.878-.79C8.553 8.559 9.778 8 11.5 8s2.948.557 3.746 1.129c.303.217.542.435.724.623L16 9.75l.03.002a5.3 5.3 0 0 1 .724-.623C17.552 8.557 18.778 8 20.5 8m-9 1c-1.492 0-2.516.479-3.164.942-.326.234-.56.466-.71.636q-.078.092-.126.155v11.159q.134-.091.288-.184c.797-.475 2.01-.935 3.712-.935s2.915.46 3.712.935q.154.094.288.186v-11.16a3 3 0 0 0-.127-.156 4.2 4.2 0 0 0-.709-.636C14.016 9.48 12.992 9 11.5 9m9 0c-1.492 0-2.516.479-3.164.942a4.2 4.2 0 0 0-.709.636q-.08.092-.127.155v11.16q.134-.091.288-.185c.797-.475 2.01-.935 3.712-.935s2.915.46 3.712.935q.155.093.288.184V10.733a3 3 0 0 0-.127-.155 4.2 4.2 0 0 0-.709-.636C23.016 9.48 21.992 9 20.5 9'
      })]
    })
  });
});
let M = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '16',
      height: '16',
      fill: 'none',
      viewBox: '0 0 16 16',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M4.5 4A2.5 2.5 0 0 1 7 6.5v2A1.5 1.5 0 0 0 8.5 10h2.793l-1.146-1.146a.5.5 0 1 1 .707-.708l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.707-.707L11.293 11H8.5A2.5 2.5 0 0 1 6 8.5v-2A1.5 1.5 0 0 0 4.5 5h-1a.5.5 0 0 1 0-1zm8 0a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1z'
      })]
    })
  });
});
let j = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '24',
      height: '24',
      fill: 'none',
      viewBox: '0 0 24 24',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M7.5 7a3.5 3.5 0 0 1 3.5 3.5v2a2.5 2.5 0 0 0 2.5 2.5h3.793l-1.146-1.146a.5.5 0 1 1 .707-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.707-.707L17.293 16H13.5a3.5 3.5 0 0 1-3.5-3.5v-2A2.5 2.5 0 0 0 7.5 8h-2a.5.5 0 0 1 0-1zm11 0a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z'
      })]
    })
  });
});
let U = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M10.5 9a3.5 3.5 0 0 1 3.5 3.5v6a2.5 2.5 0 0 0 2.5 2.5h5.793l-1.146-1.146-.065-.079a.5.5 0 0 1 .693-.693l.079.064 2 2 .064.079a.5.5 0 0 1-.064.628l-2 2a.5.5 0 1 1-.707-.707L22.293 22H16.5a3.5 3.5 0 0 1-3.5-3.5v-6a2.5 2.5 0 0 0-2.5-2.5h-3a.5.5 0 0 1 0-1zm13 0a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z'
      })]
    })
  });
});
let G = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'cooper',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M12.241 10.128a2 2 0 0 1 3.214-.54l6.96 6.957a2 2 0 0 1-.543 3.214L11.477 24.8a2 2 0 0 1-2.288-.385l-1.602-1.603a2 2 0 0 1-.386-2.287zm-4.14 10.833-.057.147c-.106.348-.013.733.25.997l1.602 1.602a1 1 0 0 0 1.144.193l2.795-1.356-4.379-4.38zm1.817-3.749 4.87 4.87 3.425-1.66-6.634-6.634zm4.83-6.918a1 1 0 0 0-1.606.27l-1.102 2.27 7.125 7.125 2.27-1.1a1 1 0 0 0 .356-1.51l-.084-.097zm10.63 3.928a.483.483 0 0 1 .526.41q.004.023.006.048a.48.48 0 0 1-.442.538l-1.847.161a.5.5 0 0 1-.087-.996zm-1.483-3.57a.48.48 0 0 1 .655.161l.025.042a.483.483 0 0 1-.18.665l-2.766 1.596a.5.5 0 1 1-.5-.867zM20.48 7.606a.483.483 0 0 1 .665-.18l.04.025a.48.48 0 0 1 .16.655L19.75 10.87a.5.5 0 0 1-.866-.5zM17.32 6.09l.05.006a.483.483 0 0 1 .408.526l-.16 1.844a.5.5 0 0 1-.996-.087l.161-1.846a.48.48 0 0 1 .537-.443'
      })]
    })
  });
});
let z = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'cooper',
    children: jsxs('svg', {
      width: '16',
      height: '16',
      fill: 'none',
      viewBox: '0 0 16 16',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M12.5 3A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.347 1.492L12.5 13h-9l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L2 11.5v-7A1.5 1.5 0 0 1 3.5 3zM3 11.5a.5.5 0 0 0 .5.5H5V7H3zM6 7v5h6.5a.5.5 0 0 0 .5-.5V7zM3.5 4a.5.5 0 0 0-.5.5V6h10V4.5a.5.5 0 0 0-.5-.5z'
      })]
    })
  });
});
let H = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'cooper',
    children: jsxs('svg', {
      width: '24',
      height: '24',
      fill: 'none',
      viewBox: '0 0 24 24',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M17 6a2 2 0 0 1 2 2v8l-.01.204a2 2 0 0 1-1.786 1.785L17 18H7l-.204-.01a2 2 0 0 1-1.785-1.786L5 16V8a2 2 0 0 1 2-2zM6 16a1 1 0 0 0 1 1h2v-6H6zm4-5v6h7a1 1 0 0 0 1-1v-5zM7 7a1 1 0 0 0-.995.897L6 8v2h12V8a1 1 0 0 0-1-1z'
      })]
    })
  });
});
let W = memo(e => {
  return jsx(setupThemeContext, {
    brand: 'cooper',
    children: jsxs('svg', {
      width: '32',
      height: '32',
      fill: 'none',
      viewBox: '0 0 32 32',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M22 9a2 2 0 0 1 2 2v10l-.01.204a2 2 0 0 1-1.786 1.785L22 23H10l-.204-.01a2 2 0 0 1-1.785-1.786L8 21V11a2 2 0 0 1 2-2zM9 21a1 1 0 0 0 1 1h3v-7H9zm5-6v7h8a1 1 0 0 0 1-1v-6zm-4-5a1 1 0 0 0-1 1v3h14v-3a1 1 0 0 0-1-1z'
      })]
    })
  });
});
let $ = memo(e => {
  return jsxs('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-bg-menu)',
      d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    }), jsx('path', {
      fill: 'var(--color-icon-onbrand)',
      d: 'M6.939 3.404a1.5 1.5 0 0 1 2.122 0L9.658 4h.843A1.5 1.5 0 0 1 12 5.5v.842l.595.597a1.5 1.5 0 0 1 0 2.121L12 9.656v.844l-.008.153a1.5 1.5 0 0 1-1.34 1.339L10.5 12h-.843l-.597.596-.114.103a1.5 1.5 0 0 1-1.895 0l-.113-.103L6.341 12H5.5l-.154-.008a1.5 1.5 0 0 1-1.338-1.34l-.007-.152v-.843l-.597-.597A1.5 1.5 0 0 1 3.3 7.053l.104-.113L4 6.342v-.841a1.5 1.5 0 0 1 1.346-1.493l.154-.007h.841zm1.415.707a.5.5 0 0 0-.63-.065l-.078.065-.89.89H5.501a.5.5 0 0 0-.5.5v1.254l-.293.293-.597.598v.001a.5.5 0 0 0 0 .707l.89.89V10.5a.5.5 0 0 0 .499.5h1.256l.89.89.078.063a.5.5 0 0 0 .63-.064l.89-.89H10.5a.5.5 0 0 0 .5-.5V9.244l.888-.889.064-.079a.5.5 0 0 0-.064-.628l-.596-.598L11 6.756V5.501a.5.5 0 0 0-.4-.49l-.1-.01H9.244zM7.608 5.69a.5.5 0 0 1 .876.439l-.036.094L7.809 7.5h1.192a.502.502 0 0 1 .472.664l-.025.06-1 2a.5.5 0 0 1-.895-.448L8.192 8.5H7.001a.5.5 0 0 1-.448-.724l1-2z'
    })]
  });
});
let Z = memo(e => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-bg-menu)',
      d: 'M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
    }), jsx('path', {
      fill: 'var(--color-icon-onbrand)',
      d: 'M10.656 5.566a1.9 1.9 0 0 1 2.688 0l.934.934H15.6a1.9 1.9 0 0 1 1.9 1.9v1.322l.935.934a1.9 1.9 0 0 1 0 2.688l-.935.934V15.6a1.9 1.9 0 0 1-1.9 1.9h-1.322l-.934.935a1.9 1.9 0 0 1-2.688 0l-.934-.935H8.4a1.9 1.9 0 0 1-1.9-1.9v-1.322l-.935-.934a1.9 1.9 0 0 1 0-2.688l.935-.934V8.4a1.9 1.9 0 0 1 1.9-1.9h1.322zm1.98.707a.9.9 0 0 0-1.273 0L10.136 7.5H8.4a.9.9 0 0 0-.895.808L7.5 8.4v1.736l-1.228 1.227a.9.9 0 0 0 0 1.274L7.5 13.864V15.6a.9.9 0 0 0 .9.9h1.736l1.227 1.228a.9.9 0 0 0 1.274 0l1.227-1.228H15.6a.9.9 0 0 0 .9-.9v-1.736l1.227-1.227a.9.9 0 0 0 0-1.274L16.5 10.136V8.4a.9.9 0 0 0-.9-.9h-1.736zm-.552 2.45a.5.5 0 1 1 .832.554L11.435 11.5H13.5a.5.5 0 0 1 .416.777l-2 3a.5.5 0 0 1-.832-.554l1.481-2.223H10.5a.5.5 0 0 1-.416-.777z'
    })]
  });
});
let X = memo(e => {
  return jsxs('svg', {
    width: '32',
    height: '32',
    fill: 'none',
    viewBox: '0 0 32 32',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-bg-menu)',
      d: 'M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z'
    }), jsx('path', {
      fill: 'var(--color-icon-onbrand)',
      d: 'M14.48 7.62a2.15 2.15 0 0 1 3.04 0L18.9 9h1.95A2.15 2.15 0 0 1 23 11.15v1.95l1.379 1.38c.84.839.84 2.2 0 3.04L23 18.9v1.95A2.15 2.15 0 0 1 20.85 23H18.9l-1.38 1.379a2.15 2.15 0 0 1-3.04 0l-1.38-1.38h-1.95A2.15 2.15 0 0 1 9 20.85V18.9l-1.379-1.38a2.15 2.15 0 0 1 0-3.04L9 13.1v-1.95A2.15 2.15 0 0 1 11.15 9h1.95zm2.334.708a1.15 1.15 0 0 0-1.627 0L13.515 10H11.15A1.15 1.15 0 0 0 10 11.15v2.364l-1.672 1.672a1.15 1.15 0 0 0 0 1.627L10 18.485v2.364c0 .636.515 1.15 1.15 1.15h2.365l1.672 1.673a1.15 1.15 0 0 0 1.627 0L18.485 22h2.366A1.15 1.15 0 0 0 22 20.85v-2.365l1.672-1.672a1.15 1.15 0 0 0 0-1.627L22 13.514V11.15a1.15 1.15 0 0 0-1.032-1.144L20.85 10h-2.366zm-.738 3.407a.5.5 0 1 1 .848.53L14.9 15.5H18a.5.5 0 0 1 .424.764l-2.5 4a.5.5 0 0 1-.848-.53l2.022-3.234H14a.501.501 0 0 1-.424-.766z'
    })]
  });
});
var $$et1 = (e => (e[e.DESIGN = 0] = 'DESIGN', e[e.DESIGN_AND_DEV_MODE = 1] = 'DESIGN_AND_DEV_MODE', e[e.DEV_MODE = 2] = 'DEV_MODE', e[e.DEV_MODE_SELECTED = 3] = 'DEV_MODE_SELECTED', e[e.WHITEBOARD = 4] = 'WHITEBOARD', e[e.WHITEBOARD_TEMPLATE = 5] = 'WHITEBOARD_TEMPLATE', e[e.PLUGIN = 6] = 'PLUGIN', e[e.PUBLISHED = 7] = 'PUBLISHED', e[e.PROTOTYPE = 8] = 'PROTOTYPE', e[e.REPO = 9] = 'REPO', e[e.SLIDES = 10] = 'SLIDES', e[e.SLIDES_TEMPLATE = 11] = 'SLIDES_TEMPLATE', e[e.SITES = 12] = 'SITES', e[e.COOPER = 13] = 'COOPER', e[e.COOPER_TEMPLATE = 14] = 'COOPER_TEMPLATE', e[e.FIGMAKE = 15] = 'FIGMAKE', e[e.WIDGET = 16] = 'WIDGET', e))($$et1 || {});
let ei = {
  0: {
    16: _$$H,
    24: e,
    32: _$$v
  },
  10: {
    16: _$$p,
    24: _$$K,
    32: p
  },
  11: {
    16: m,
    24: h,
    32: g
  },
  12: {
    16: _$$v2,
    24: _$$k,
    32: A
  },
  4: {
    16: _$$j,
    24: _$$C,
    32: v
  },
  5: {
    16: I,
    24: E,
    32: x
  },
  2: {
    16: _$$P,
    24: _$$o,
    32: C
  },
  1: {
    16: _$$P,
    24: _$$o,
    32: C
  },
  3: {
    16: _$$P,
    24: _$$o,
    32: C
  },
  6: {
    16: T,
    24: k,
    32: R
  },
  8: {
    16: _$$F,
    24: P,
    32: O
  },
  7: {
    16: D,
    24: L,
    32: F
  },
  9: {
    16: M,
    24: j,
    32: U
  },
  13: {
    16: _$$_,
    24: _$$B,
    32: G
  },
  14: {
    16: z,
    24: H,
    32: W
  },
  15: {
    16: _$$N,
    24: _$$o2,
    32: _$$X
  },
  16: {
    16: $,
    24: Z,
    32: X
  }
};
export function $$en0({
  type: e,
  size: t,
  ...i
}) {
  let r = ei[e][t];
  return jsx(r, {
    ...i
  });
}
export function $$er3() {
  let e = hasTemplateEntity();
  return useCallback(t => {
    if (t.lastPublishedAt && t.editorType === FFileType.DESIGN) return 7;
    if (t.fileRepoId) return 9;
    let i = e && !!t.isTeamTemplate;
    return t.editorType === FFileType.WHITEBOARD ? i ? 5 : 4 : t.editorType === FFileType.SLIDES ? i ? 11 : 10 : t.editorType === FFileType.SITES ? 12 : t.editorType === FFileType.COOPER ? i ? 14 : 13 : t.editorType === FFileType.FIGMAKE ? 15 : t.editorType === FFileType.DESIGN || t.editorType === null ? 0 : returnSecond(t.editorType, 0);
  }, [e]);
}
export function $$ea4() {
  let e = $$er3();
  return useCallback(t => e(fileEntityDataMapper.toLiveGraph({
    is_team_template: !1,
    ...t
  })), [e]);
}
export function $$es2(e) {
  switch (e) {
    case FFileType.WHITEBOARD:
      return 4;
    case FFileType.SLIDES:
      return 10;
    case FFileType.SITES:
      return 12;
    case FFileType.COOPER:
      return 13;
    case FFileType.FIGMAKE:
      return 15;
    case FFileType.DESIGN:
      return 0;
    default:
      throwTypeError(e);
  }
}
export const w4 = $$en0;
export const y1 = $$et1;
export const Y8 = $$es2;
export const NN = $$er3;
export const $E = $$ea4;