import type { WidgetContext } from '../905/250412';
import type { Fn } from '../../types/global';
import { isObject, omit } from 'lodash-es';
import { z } from 'zod';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { widgetErrorTracker } from '../905/250412';
import { extractFontProps, extractTextRanges, resolveFont, splitTextStyle } from '../905/285398';
import { getGradientTransformMatrix } from '../905/409381';
import { validateAndCollectErrors } from '../905/816730';
import { arcProps, autoLayoutFramePropsFn, clickableElementProps, elementWithChildrenProps, genericElementProps, imageElementProps, lineElementProps, textInputProps, vectorElementProps } from '../905/828428';
import { InternalError } from '../905/845428';
import { filterNotNullish } from '../figma_app/656233';
interface RenderMetaData {
  onTextEditEnd: any;
  direction: any;
  onClick: any;
  height: any;
  y: number;
  x: number;
  constraints: any;
  width?: number;
  fillSrc?: string;
  key?: string;
  children?: any;
  src?: string;
}
interface Props {
  widgetInputBehavior: any;
  counterAxisSpacing: number;
  itemSpacing: number;
  layoutMode: string;
  arcData: any;
  counterAxisAlignItems: string;
  primaryAxisAlignItems: string;
  layoutWrap: string;
  maxHeight: any;
  maxWidth: any;
  minWidth: any;
  layoutPositioning: string;
  widgetHoverStyle: any;
  widgetTooltip: any;
  strokeCap: any;
  dashPattern: any;
  strokeAlign: any;
  strokeWeight: any;
  strokes: any[];
  rotation: any;
  sharedPluginData?: any;
  pluginData?: any;
  fills?: any;
  fontName?: any;
  letterSpacing?: any;
  lineHeight?: any;
  textDecoration?: string;
  textCase?: string;
  fontSize?: number;
  hyperlink?: {
    type: 'URL';
    value: string;
  };
  textTruncation?: 'ENDING' | 'DISABLED';
  maxLines?: number | null;
  name?: string;
  blendMode?: string;
  opacity?: number;
  visible?: boolean;
  layout?: string;
  cornerRadius?: number;
  bottomLeftRadius?: number;
  bottomRightRadius?: number;
  topLeftRadius?: number;
  topRightRadius?: number;
  effects?: any[];
}
interface MapperContext extends WidgetContext {
  enableFullJsx?: boolean;
  isLocalWidget?: boolean;
  widgetApiVersion?: string;
}
type MapperFunction = (element: {
  props: Props;
  renderMetaData: RenderMetaData;
  type?: string;
}, inputProps: any, value: any, context: MapperContext) => void;
let defaultPropsForVersion = {
  name: '',
  hidden: !1,
  x: 0,
  y: 0,
  opacity: 1,
  effect: [],
  width: 'hug-contents',
  height: 'hug-contents',
  rotation: 0,
  flipVertical: !1,
  fontFamily: 'Roboto',
  fontPostScriptName: '',
  horizontalAlignText: 'left',
  verticalAlignText: 'top',
  letterSpacing: 0,
  lineHeight: 'auto',
  textDecoration: 'none',
  textCase: 'original',
  fontSize: 16,
  italic: !1,
  fill: {
    blendMode: 'normal',
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    type: 'solid'
  },
  blendMode: 'pass-through',
  fontWeight: 400,
  paragraphIndent: 0,
  paragraphSpacing: 0
};
let inputDefaultPropsForVersion = {
  name: '',
  hidden: !1,
  x: 0,
  y: 0,
  opacity: 1,
  effect: [],
  height: 'hug-contents',
  rotation: 0,
  flipVertical: !1,
  fontFamily: 'Roboto',
  fontPostScriptName: '',
  horizontalAlignText: 'left',
  verticalAlignText: 'top',
  letterSpacing: 0,
  lineHeight: 'auto',
  textDecoration: 'none',
  textCase: 'original',
  fontSize: 16,
  italic: !1,
  fill: {
    blendMode: 'normal',
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    type: 'solid'
  },
  blendMode: 'pass-through',
  fontWeight: 400,
  paragraphIndent: 0,
  paragraphSpacing: 0,
  multiline: !1
};
let frameDefaultPropsForVersion = {
  name: '',
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: 'pass-through',
  opacity: 1,
  effect: [],
  fill: [],
  flipVertical: !1,
  stroke: [],
  strokeWidth: 1,
  strokeAlign: 'inside',
  rotation: 0,
  cornerRadius: 0,
  overflow: 'hidden'
};
let autolayoutDefaultPropsForVersion = {
  name: '',
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: 'pass-through',
  opacity: 1,
  effect: [],
  fill: [],
  stroke: [],
  strokeWidth: 1,
  strokeAlign: 'inside',
  rotation: 0,
  flipVertical: !1,
  cornerRadius: 0,
  overflow: 'hidden',
  width: 'hug-contents',
  height: 'hug-contents',
  direction: 'horizontal',
  spacing: 0,
  padding: 0,
  horizontalAlignItems: 'start',
  verticalAlignItems: 'start'
};
let rectangleDefaultPropsForVersion = {
  name: '',
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: 'pass-through',
  opacity: 1,
  effect: [],
  fill: [],
  stroke: [],
  strokeWidth: 1,
  strokeAlign: 'inside',
  rotation: 0,
  flipVertical: !1,
  cornerRadius: 0
};
let EllipseDefaultPropsForVersion = {
  name: '',
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: 'pass-through',
  opacity: 1,
  effect: [],
  fill: [],
  stroke: [],
  strokeWidth: 1,
  strokeAlign: 'inside',
  rotation: 0,
  flipVertical: !1
};
let lineDefaultPropsForVersion = {
  name: '',
  hidden: !1,
  stroke: '#000000',
  strokeWidth: 1,
  blendMode: 'pass-through',
  opacity: 1,
  fill: [],
  effect: [],
  length: 100,
  strokeCap: 'none',
  x: 0,
  y: 0
};
function createJSXMapper(e: Fn) {
  return (element: any, i: any, n: any, r: any) => {
    r.enableFullJsx && e(element, i, n, r);
  };
}
let createComponentIdMapper = createJSXMapper((e, t, i, _n) => {
  e.props.componentId = i;
});
let createComponentPropsMapper = createJSXMapper((e, t, i, _n) => {
  e.props.componentProps = i;
});
let createComponentPropsNestedMapper = createJSXMapper((e, t, i, _n) => {
  e.props.componentPropsNested = i;
});
let createJSXVisibilityMapper = createJSXMapper((e, t, i, _n) => {
  e.props.nestedInstancesVisibility = i;
});
let mapSharedPluginData: MapperFunction = (e, t, i, context) => {
  context.enableFullJsx && (e.props.sharedPluginData = i);
};
let mapPluginData: MapperFunction = (e, t, i, n) => {
  n.enableFullJsx && (e.props.pluginData = i);
};
let mapWidth: MapperFunction = (e, t, i, _n) => {
  e.renderMetaData.width = i;
};
let mapFills: MapperFunction = (e, t, i, n) => {
  i?.type === 'image' && (e.renderMetaData.fillSrc = i.src);
  let r = Array.isArray(i) ? i : [i];
  e.props.fills = mapFillsUtil(r, 'fill', n);
};
let mapKey: MapperFunction = (e, t, _i, _n) => {
  e.renderMetaData.key = String(t.key);
};
let mapFontName: MapperFunction = (e, t, i, _n) => {
  e.props.fontName = i;
};
let mapLetterSpacing: MapperFunction = (e, t, i, _n) => {
  let r = z.union([z.number(), z.string()]).default(0).transform(parseUnit);
  e.props.letterSpacing = r.parse(i);
};
let mapLineHeight: MapperFunction = (e, t, i, _n) => {
  let r = z.union([z.number(), z.string()]).default('auto').transform(parseUnit);
  e.props.lineHeight = r.parse(i);
};
let mapTextDecoration: MapperFunction = (e, t, i, _n) => {
  let r = z.string().default('none').transform(toEnumFormat);
  e.props.textDecoration = r.parse(i);
};
let mapTextCase: MapperFunction = (e, t, i, _n) => {
  let r = z.string().default('original').transform(toEnumFormat);
  e.props.textCase = r.parse(i);
};
let mapFontSize: MapperFunction = (e, t, i, _n) => {
  let r = z.number().default(16);
  e.props.fontSize = r.parse(i);
};
let mapChildren: MapperFunction = (e, t, i, _n) => {
  e.renderMetaData.children = i;
};
let mapHyperlink: MapperFunction = (e, t, _i, _n) => {
  e.props.hyperlink = {
    type: 'URL',
    value: t.href
  };
};
/**
 * Maps text truncation props to the appropriate element properties.
 * Original name: mapTextTruncation
 * @param element - The target element object.
 * @param mergedProps - The merged props object.
 * @param value - The truncation value (boolean or number).
 * @param context - The mapper context.
 */
const mapTextTruncation: MapperFunction = (element, mergedProps, value, _context) => {
  if (value === true || typeof value === 'number') {
    element.props.textTruncation = 'ENDING';
    element.props.maxLines = typeof value === 'number' && value >= 1 ? Math.floor(value) : null;
    return;
  }
  element.props.textTruncation = 'DISABLED';
};

/** Text truncation prop mapper (original: mapTextTruncation) */
export const YJ = mapTextTruncation;
function P(e, t, i, n) {
  typeof n == 'number' ? e === t.direction ? i.props.itemSpacing = n : t.wrap && (i.props.counterAxisSpacing = n) : n === 'auto' && (e === t.direction ? i.props.primaryAxisAlignItems = 'SPACE_BETWEEN' : t.wrap && (i.props.counterAxisAlignContent = 'SPACE_BETWEEN'));
}
let O = (e, t, i, _n) => {
  e.renderMetaData.children = i;
};
function toEnumFormat(e) {
  return e.toUpperCase().replace(/-/g, '_');
}
function parsePadding(padding: number | Record<string, number>): Record<string, number> {
  const result: Record<string, number> = {};
  if (typeof padding === 'number') {
    result.paddingLeft = padding;
    result.paddingRight = padding;
    result.paddingTop = padding;
    result.paddingBottom = padding;
  } else if (typeof padding === 'object') {
    if ('vertical' in padding && typeof padding.vertical === 'number') {
      result.paddingTop = padding.vertical;
      result.paddingBottom = padding.vertical;
    }
    if ('horizontal' in padding && typeof padding.horizontal === 'number') {
      result.paddingLeft = padding.horizontal;
      result.paddingRight = padding.horizontal;
    }
    if ('top' in padding && typeof padding.top === 'number') {
      result.paddingTop = padding.top;
    }
    if ('left' in padding && typeof padding.left === 'number') {
      result.paddingLeft = padding.left;
    }
    if ('right' in padding && typeof padding.right === 'number') {
      result.paddingRight = padding.right;
    }
    if ('bottom' in padding && typeof padding.bottom === 'number') {
      result.paddingBottom = padding.bottom;
    }
  }
  return result;
}
function alignToEnum(align: string) {
  switch (align) {
    case 'start':
      return 'MIN';
    case 'center':
      return 'CENTER';
    case 'end':
      return 'MAX';
    case 'baseline':
      return 'BASELINE';
  }
}
function parseColor(hex: string): {
  r: number;
  g: number;
  b: number;
  a: number;
} {
  if (hex.length >= 7) {
    const alpha = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1;
    return {
      r: parseInt(hex.slice(1, 3), 16) / 255,
      g: parseInt(hex.slice(3, 5), 16) / 255,
      b: parseInt(hex.slice(5, 7), 16) / 255,
      a: alpha
    };
  }
  const alpha = hex.length === 5 ? parseInt(hex.slice(4, 5), 16) / 15 : 1;
  return {
    r: parseInt(hex.slice(1, 2), 16) / 15,
    g: parseInt(hex.slice(2, 3), 16) / 15,
    b: parseInt(hex.slice(3, 4), 16) / 15,
    a: alpha
  };
}
function normalizeColor(value: any): {
  r: number;
  g: number;
  b: number;
  a: number;
} {
  if (typeof value === 'string') {
    return parseColor(value);
  }
  if (typeof value !== 'object' || Object.prototype.hasOwnProperty.call(value, 'a')) {
    return value;
  }
  return {
    ...value,
    a: 1
  };
}
function mapFillsUtil(fills: any[], type: string, context: MapperContext): any[] {
  return filterNotNullish(fills.map(fill => {
    if (!fill) return null;
    if (typeof fill === 'string') {
      const {
        a,
        ...color
      } = parseColor(fill);
      return {
        type: 'SOLID',
        color,
        blendMode: 'NORMAL',
        opacity: a
      };
    }
    if ('r' in fill && 'g' in fill && 'b' in fill && 'a' in fill) {
      const isValid = (v: number) => v >= 0 && v <= 1;
      const {
        r,
        g,
        b,
        a
      } = fill;
      if (!(isValid(r) && isValid(g) && isValid(b) && isValid(a))) {
        console.error(`Expected rgba value to be between 0 and 1 but got ${JSON.stringify(fill)}.`);
        return null;
      }
      const {
        a: opacity,
        ...color
      } = fill;
      return {
        type: 'SOLID',
        color,
        opacity
      };
    }
    const blendMode = fill.blendMode ? toEnumFormat(fill.blendMode) : undefined;
    if (fill.type === 'solid') {
      const color = typeof fill.color === 'string' ? parseColor(fill.color) : {
        ...fill.color
      };
      const opacity = (() => {
        const colorAlpha = color.a != null ? color.a : undefined;
        const fillOpacity = fill.opacity != null ? fill.opacity : undefined;
        return fillOpacity != null && colorAlpha != null ? fillOpacity * colorAlpha : fillOpacity || colorAlpha;
      })();
      delete color.a;
      return {
        type: 'SOLID',
        color,
        blendMode,
        opacity
      };
    }
    if (fill.type === 'image') {
      return {
        type: 'IMAGE',
        scaleMode: fill.scaleMode ? toEnumFormat(fill.scaleMode) : 'FILL',
        imageHash: fill.imageHash || null,
        imageTransform: fill.imageTransform,
        scalingFactor: fill.scalingFactor,
        rotation: fill.rotation,
        blendMode,
        opacity: fill.opacity
      };
    }
    if (fill.type === 'gradient-linear' || fill.type === 'gradient-radial' || fill.type === 'gradient-angular' || fill.type === 'gradient-diamond') {
      return {
        type: toEnumFormat(fill.type),
        blendMode,
        opacity: fill.opacity ?? undefined,
        gradientStops: fill.gradientStops,
        gradientTransform: getGradientTransformMatrix(fill.type, fill.gradientHandlePositions)
      };
    }
    logInvalidProp(type, fill, context);
    return null;
  }));
}
function logInvalidProp(propName: string, value: any, context: MapperContext): void {
  const error = new Error(`The following prop failed to match a valid value: ${propName}={${JSON.stringify(value, null, 2)}}.`);
  if (context.isLocalWidget) throw error;
  widgetErrorTracker.trackInvalidPropError(error, context);
}
function parseUnit(value: number | string): any {
  if (typeof value === 'number') {
    return {
      unit: 'PIXELS',
      value
    };
  }
  if (value === 'auto') {
    return {
      unit: 'AUTO'
    };
  }
  const parsed = parseFloat(value);
  if (isNaN(parsed)) return undefined;
  if (/.*%\w*/.test(value)) {
    return {
      unit: 'PERCENT',
      value: parsed
    };
  }
  if (/.*px\w*/.test(value)) {
    return {
      unit: 'PIXELS',
      value: parsed
    };
  }
  return undefined;
}
function retrievePropsByVersion(version: string) {
  if (version === '1.0.0') return defaultPropsForVersion;
}
function validateProps(props: any, schema: any, type: string, context: MapperContext): void {
  let errors: string[] = [];
  try {
    errors = validateAndCollectErrors(props, schema, type);
  } catch (err) {
    reportError(ServiceCategories.EXTENSIBILITY, new Error(`Error running widget prop validation: ${err}`));
  }
  if (errors.length > 0) {
    if (context.isLocalWidget) {
      const prefix = '\n\n * ';
      throw new Error(`The following validation errors were surfaced:${prefix}${errors.join(prefix)}`);
    } else {
      const errorObjects = errors.map(msg => new Error(msg));
      widgetErrorTracker.trackValidationErrors(errorObjects, context);
    }
  }
}
function createComponentFactory({
  type,
  getDefaultPropsForVersion,
  propMappers,
  getSchemaForVersion
}: {
  type: string;
  getDefaultPropsForVersion: (version: string) => any;
  propMappers: Record<string, MapperFunction>[];
  getSchemaForVersion?: (version: string) => any;
}) {
  return (inputProps: any, context: MapperContext) => {
    const element = {
      type,
      props: {} as Props,
      renderMetaData: {} as RenderMetaData
    };
    const version = context.widgetApiVersion;
    const mergedProps = {
      ...getDefaultPropsForVersion(version),
      ...inputProps
    };
    if (getSchemaForVersion) {
      validateProps(mergedProps, getSchemaForVersion(version), type, context);
    }
    for (const propName in mergedProps) {
      for (const mapper of propMappers) {
        if (propName in mapper) {
          mapper[propName](element, mergedProps, mergedProps[propName], context);
        }
      }
    }
    return element;
  };
}
/**
 * Prop mappers for generic element properties.
 * Original name: ee
 */
const genericElementPropMappers: Record<string, MapperFunction> = {
  /**
   * Maps hidden prop to visible.
   * @param element
   * @param mergedProps
   * @param value
   */
  hidden: (element, mergedProps, value, _context) => {
    element.props.visible = !value;
  },
  /**
   * Maps name prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  name: (element, mergedProps, value, _context) => {
    element.props.name = String(value);
  },
  /**
   * Maps blendMode prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  blendMode: (element, mergedProps, value, _context) => {
    const blendModeSchema = z.string().default('pass-through').transform(toEnumFormat);
    element.props.blendMode = blendModeSchema.parse(value);
  },
  /**
   * Maps opacity prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  opacity: (element, mergedProps, value, _context) => {
    element.props.opacity = value;
  },
  /**
   * Maps effect prop.
   * @param element
   * @param mergedProps
   * @param value
   * @param context
   */
  effect: (element, mergedProps, value, context) => {
    /**
     * Maps effect array or object to Figma effect objects.
     * Original name: effect
     */
    function mapEffect(eff: any, ctx: MapperContext): any[] {
      if (Array.isArray(eff)) {
        return Array.prototype.concat.apply([], eff.map(item => mapEffect(item, ctx)));
      }
      if (!eff) return [];
      switch (eff.type) {
        case 'drop-shadow':
          return [{
            type: 'DROP_SHADOW',
            color: normalizeColor(eff.color),
            offset: eff.offset,
            visible: true,
            radius: eff.blur,
            spread: eff.spread,
            showShadowBehindNode: eff.showShadowBehindNode,
            blendMode: 'NORMAL'
          }];
        case 'inner-shadow':
          return [{
            type: 'INNER_SHADOW',
            color: normalizeColor(eff.color),
            offset: eff.offset,
            visible: true,
            radius: eff.blur,
            spread: eff.spread,
            blendMode: 'NORMAL'
          }];
        case 'layer-blur':
          return [{
            blurType: 'NORMAL',
            type: 'LAYER_BLUR',
            visible: true,
            radius: eff.blur
          }];
        case 'background-blur':
          return [{
            blurType: 'NORMAL',
            type: 'BACKGROUND_BLUR',
            visible: true,
            radius: eff.blur
          }];
        default:
          logInvalidProp('effects', eff, ctx);
          return [];
      }
    }
    element.props.effects = mapEffect(value, context);
  },
  /**
   * Maps x prop.
   * @param element
   * @param mergedProps
   * @param value
   * @param context
   */
  x: (element, mergedProps, value, _context) => {
    if (typeof value === 'number') {
      element.renderMetaData.x = value;
    } else if (typeof value === 'object') {
      element.renderMetaData.constraints = element.renderMetaData.constraints ?? {};
      element.renderMetaData.constraints.xConstraint = value;
    }
  },
  /**
   * Maps y prop.
   * @param element
   * @param mergedProps
   * @param value
   * @param context
   */
  y: (element, mergedProps, value, _context) => {
    if (typeof value === 'number') {
      element.renderMetaData.y = value;
    } else if (typeof value === 'object') {
      element.renderMetaData.constraints = element.renderMetaData.constraints ?? {};
      element.renderMetaData.constraints.yConstraint = value;
    }
  },
  /**
   * Maps rotation prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  rotation: (element, mergedProps, value, _context) => {
    element.props.rotation = value;
  },
  /**
   * Maps width prop.
   */
  width: mapWidth,
  /**
   * Maps height prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  height: (element, mergedProps, value, _context) => {
    element.renderMetaData.height = value;
  },
  /**
   * Maps onClick prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  onClick: (element, mergedProps, value, _context) => {
    element.renderMetaData.onClick = value;
  },
  /**
   * Maps fill prop.
   */
  fill: mapFills,
  /**
   * Maps stroke prop.
   * @param element
   * @param mergedProps
   * @param value
   * @param context
   */
  stroke: (element, mergedProps, value, context) => {
    const strokes = Array.isArray(value) ? value : [value];
    element.props.strokes = mapFillsUtil(strokes, 'stroke', context);
  },
  /**
   * Maps strokeWidth prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  strokeWidth: (element, mergedProps, value, _context) => {
    element.props.strokeWeight = value;
  },
  /**
   * Maps strokeAlign prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  strokeAlign: (element, mergedProps, value, _context) => {
    element.props.strokeAlign = toEnumFormat(value);
  },
  /**
   * Maps strokeDashPattern prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  strokeDashPattern: (element, mergedProps, value, _context) => {
    element.props.dashPattern = value;
  },
  /**
   * Maps strokeCap prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  strokeCap: (element, mergedProps, value, _context) => {
    element.props.strokeCap = toEnumFormat(value);
  },
  /**
   * Maps key prop.
   */
  key: mapKey,
  /**
   * Maps tooltip prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  tooltip: (element, mergedProps, value, _context) => {
    element.props.widgetTooltip = value;
  },
  /**
   * Maps hoverStyle prop.
   * @param element
   * @param mergedProps
   * @param value
   * @param context
   */
  hoverStyle: (element, mergedProps, value, context) => {
    const hover: any = {};
    if (value?.fill) {
      hover.fill = mapFillsUtil(Array.isArray(value.fill) ? value.fill : [value.fill], 'fill', context);
    }
    if (value?.stroke) {
      hover.stroke = mapFillsUtil(Array.isArray(value.stroke) ? value.stroke : [value.stroke], 'stroke', context);
    }
    if (value?.opacity !== undefined) {
      hover.opacity = value.opacity;
    }
    element.props.widgetHoverStyle = hover;
  },
  /**
   * Maps positioning prop.
   * @param element
   * @param mergedProps
   * @param value
   */
  positioning: (element, mergedProps, value, _context) => {
    element.props.layoutPositioning = (() => {
      switch (value) {
        case 'auto':
          return 'AUTO';
        case 'absolute':
          return 'ABSOLUTE';
      }
    })();
  },
  /**
   * Maps sharedPluginData prop.
   */
  sharedPluginData: mapSharedPluginData,
  /**
   * Maps pluginData prop.
   */
  pluginData: mapPluginData
};

/** Exported generic element prop mappers (original: ee) */
export const ee = genericElementPropMappers;

/**
 * Prop mappers for min/max width/height.
 * Original name: et
 */
export const sizeConstraintsMapper: Record<string, MapperFunction> = {
  minWidth: (element, mergedProps, value, _context) => {
    element.props.minWidth = value;
  },
  minHeight: (element, mergedProps, value, _context) => {
    element.props.lineHeight = value;
  },
  maxWidth: (element, mergedProps, value, _context) => {
    element.props.maxWidth = value;
  },
  maxHeight: (element, mergedProps, value, _context) => {
    element.props.maxHeight = value;
  }
};
/**
 * Maps corner radius props to the appropriate element properties.
 * Original name: ei
 * @param element - The target element object.
 * @param mergedProps - The merged props object.
 * @param value - The corner radius value (number or object).
 * @param context - The mapper context.
 */
const mapCornerRadius: MapperFunction = (element, mergedProps, value, _context) => {
  if (typeof value === 'number') {
    element.props.cornerRadius = value;
    return;
  }
  if (typeof value === 'object' && value !== null) {
    if (typeof value.bottomLeft === 'number') {
      element.props.bottomLeftRadius = value.bottomLeft;
    }
    if (typeof value.topLeft === 'number') {
      element.props.topLeftRadius = value.topLeft;
    }
    if (typeof value.bottomRight === 'number') {
      element.props.bottomRightRadius = value.bottomRight;
    }
    if (typeof value.topRight === 'number') {
      element.props.topRightRadius = value.topRight;
    }
  }
};

/** Corner radius prop mapper (original: ei) */
export const cornerRadiusConstraints = {
  cornerRadius: mapCornerRadius
};
let en = {
  overflow: (e, t, i, _n) => {
    e.props.clipsContent = i === 'hidden';
  },
  children: O
};
let er = {
  font: mapFontName,
  horizontalAlignText: (e, t, i, _n) => {
    let r = z.string().default('left').transform(toEnumFormat);
    e.props.textAlignHorizontal = r.parse(i);
  },
  verticalAlignText: (e, t, i, _n) => {
    let r = z.string().default('top').transform(toEnumFormat);
    e.props.textAlignVertical = r.parse(i);
  },
  letterSpacing: mapLetterSpacing,
  lineHeight: mapLineHeight,
  textDecoration: mapTextDecoration,
  textCase: mapTextCase,
  fontSize: mapFontSize,
  paragraphIndent: (e, t, i, _n) => {
    let r = z.number().default(0);
    e.props.paragraphIndent = r.parse(i);
  },
  paragraphSpacing: (e, t, i, _n) => {
    let r = z.number().default(0);
    e.props.paragraphSpacing = r.parse(i);
  },
  children: mapChildren,
  href: mapHyperlink,
  truncate: mapTextTruncation
};
let ea = createComponentFactory({
  type: 'text',
  getDefaultPropsForVersion: retrievePropsByVersion,
  getSchemaForVersion: genericElementProps,
  propMappers: [ee, er]
});
let es = createComponentFactory({
  type: 'text',
  getDefaultPropsForVersion: retrievePropsByVersion,
  getSchemaForVersion: genericElementProps,
  propMappers: [ee, sizeConstraintsMapper, er]
});
let eo = createComponentFactory({
  type: 'input',
  getDefaultPropsForVersion(e) {
    if (e === '1.0.0') return inputDefaultPropsForVersion;
  },
  getSchemaForVersion: textInputProps,
  propMappers: [ee, er, {
    widgetInputBehavior: (e, t, i, _n) => {
      e.props.widgetInputBehavior = i.toUpperCase();
    },
    truncate: mapTextTruncation
  }]
});
let FrameComponent = createComponentFactory({
  type: 'frame',
  getDefaultPropsForVersion(e) {
    if (e === '1.0.0') return frameDefaultPropsForVersion;
  },
  getSchemaForVersion: clickableElementProps,
  propMappers: [ee, sizeConstraintsMapper, en, cornerRadiusConstraints]
});
/**
 * AutoLayout component factory.
 * Original name: AutoLayoutComponent
 */
const mapDirection: MapperFunction = (element, mergedProps, value, _context) => {
  element.props.layoutMode = value === 'vertical' ? 'VERTICAL' : value === 'horizontal' ? 'HORIZONTAL' : 'NONE';
  element.renderMetaData.direction = value;
};

/**
 * Maps spacing prop for AutoLayout.
 * Original name: spacing
 */
const mapSpacing: MapperFunction = (element, mergedProps, value, _context) => {
  if (typeof value === 'number') {
    element.props.itemSpacing = value;
    if (mergedProps.wrap) {
      element.props.counterAxisSpacing = value;
    }
    return;
  }
  if (value === 'auto') {
    element.props.primaryAxisAlignItems = 'SPACE_BETWEEN';
    if (mergedProps.wrap) {
      element.props.counterAxisAlignItems = 'SPACE_BETWEEN';
    }
    return;
  }
  if (isObject(value)) {
    if ('horizontal' in value) {
      P('horizontal', mergedProps, element, value.horizontal);
    }
    if ('vertical' in value) {
      P('vertical', mergedProps, element, value.vertical);
    }
  }
};

/**
 * Maps padding prop for AutoLayout.
 * Original name: padding
 */
const mapPadding: MapperFunction = (element, mergedProps, value, _context) => {
  const paddingObj = parsePadding(value);
  for (const key in paddingObj) {
    element.props[key] = paddingObj[key];
  }
};

/**
 * Maps horizontalAlignItems prop for AutoLayout.
 * Original name: horizontalAlignItems
 */
const mapHorizontalAlignItems: MapperFunction = (element, mergedProps, value, _context) => {
  const alignEnum = alignToEnum(value);
  if (mergedProps.direction !== 'horizontal' || mergedProps.spacing === 'auto' || isObject(mergedProps.spacing) && 'horizontal' in mergedProps.spacing && mergedProps.spacing.horizontal === 'auto') {
    // Do nothing
  } else {
    element.props.primaryAxisAlignItems = alignEnum;
  }
  if (mergedProps.direction === 'vertical') {
    element.props.counterAxisAlignItems = alignEnum;
  }
};

/**
 * Maps verticalAlignItems prop for AutoLayout.
 * Original name: verticalAlignItems
 */
const mapVerticalAlignItems: MapperFunction = (element, mergedProps, value, _context) => {
  const alignEnum = alignToEnum(value);
  if (mergedProps.direction === 'horizontal') {
    element.props.counterAxisAlignItems = alignEnum;
  }
  if (mergedProps.direction === 'vertical' && mergedProps.spacing !== 'auto') {
    element.props.primaryAxisAlignItems = alignEnum;
  }
};

/**
 * Maps wrap prop for AutoLayout.
 * Original name: wrap
 */
const mapWrap: MapperFunction = (element, mergedProps, value, _context) => {
  element.props.layoutWrap = value ? 'WRAP' : 'NO_WRAP';
};

/** AutoLayout component factory (original: AutoLayoutComponent) */
export const AutoLayoutComponent = createComponentFactory({
  type: 'autolayout',
  getDefaultPropsForVersion(version: string) {
    if (version === '1.0.0') return autolayoutDefaultPropsForVersion;
  },
  getSchemaForVersion: autoLayoutFramePropsFn,
  propMappers: [ee, sizeConstraintsMapper, en, cornerRadiusConstraints, {
    direction: mapDirection,
    spacing: mapSpacing,
    padding: mapPadding,
    horizontalAlignItems: mapHorizontalAlignItems,
    verticalAlignItems: mapVerticalAlignItems,
    wrap: mapWrap
  }]
});
let RectangleComponent = createComponentFactory({
  type: 'rectangle',
  getDefaultPropsForVersion(e) {
    if (e === '1.0.0') return rectangleDefaultPropsForVersion;
  },
  getSchemaForVersion: vectorElementProps,
  propMappers: [ee, sizeConstraintsMapper, cornerRadiusConstraints]
});
let EllipseComponent = createComponentFactory({
  type: 'ellipse',
  getDefaultPropsForVersion(e) {
    if (e === '1.0.0') return EllipseDefaultPropsForVersion;
  },
  getSchemaForVersion: arcProps,
  propMappers: [ee, sizeConstraintsMapper, {
    arcData: (e, t, i, _n) => {
      e.props.arcData = i;
    }
  }]
});
let LineComponent = createComponentFactory({
  type: 'line',
  getDefaultPropsForVersion(e) {
    if (e === '1.0.0') return lineDefaultPropsForVersion;
  },
  getSchemaForVersion: lineElementProps,
  propMappers: [omit(ee, ['width', 'height']), {
    length: mapWidth
  }]
});
let em = (e, t) => eh(e, t, ea);
let SpanComponent = createComponentFactory({
  type: 'span',
  getDefaultPropsForVersion: () => ({}),
  propMappers: [{
    font: mapFontName,
    letterSpacing: mapLetterSpacing,
    lineHeight: mapLineHeight,
    textDecoration: mapTextDecoration,
    textCase: mapTextCase,
    fontSize: mapFontSize,
    children: mapChildren,
    href: mapHyperlink,
    fill: mapFills
  }]
});
let SVGComponent = createComponentFactory({
  type: 'svg',
  getDefaultPropsForVersion: _e => {},
  getSchemaForVersion: imageElementProps,
  propMappers: [ee, {
    src: (e, t, i, _n) => {
      e.renderMetaData.src = i;
    }
  }]
});
function eh(props, elementProps, i) {
  let n = i({
    ...props,
    font: resolveFont(props)
  }, elementProps);
  let r = extractTextRanges({
    vNode: n,
    options: elementProps,
    Span: SpanComponent,
    fontProps: extractFontProps(props)
  });
  let {
    otherProps: {
      children,
      ...s
    }
  } = splitTextStyle(n.props);
  let o = {
    ...n.renderMetaData,
    textStyle: r
  };
  delete o.children;
  return {
    ...n,
    props: s,
    renderMetaData: o
  };
}
let FragmentComponent = createComponentFactory({
  type: 'fragment',
  getDefaultPropsForVersion: elementWithChildrenProps,
  propMappers: [{
    key: mapKey,
    children: O
  }]
});
let InstanceComponent = createComponentFactory({
  type: 'instance',
  getDefaultPropsForVersion: () => ({}),
  propMappers: [ee, {
    componentId: createComponentIdMapper,
    componentProps: createComponentPropsMapper,
    componentPropsNested: createComponentPropsNestedMapper,
    nestedInstancesVisibility: createJSXVisibilityMapper,
    sharedPluginData: mapSharedPluginData,
    pluginData: mapPluginData
  }]
});
export let layoutComponentCollection = {
  Frame: FrameComponent,
  AutoLayout: AutoLayoutComponent,
  Rectangle: RectangleComponent,
  Ellipse: EllipseComponent,
  Text: (props: any, t: MapperContext) => eh(props, t, es),
  SVG: SVGComponent,
  Image: (props: any, t: MapperContext) => RectangleComponent({
    ...props,
    fill: {
      type: 'image',
      src: props.src
    }
  }, t),
  Input: (props: any, t: MapperContext) => {
    validateProps(props, textInputProps(t.widgetApiVersion), 'input', t);
    let {
      placeholderProps,
      width = 200,
      value,
      onTextEditEnd,
      inputFrameProps,
      height = 'hug-contents',
      inputBehavior = 'wrap',
      x,
      y: _y,
      positioning,
      ...restProps
    } = props;
    let m = {
      ...inputFrameProps,
      x,
      y: _y,
      positioning,
      width: width ?? 200,
      height: height ?? 'hug-contents'
    };
    let h = parsePadding(m.padding);
    let g = typeof width == 'number' ? width - (h?.paddingLeft ?? 0) - (h?.paddingRight ?? 0) : 'fill-parent';
    let f = typeof height == 'number' ? height - (h?.paddingTop ?? 0) - (h?.paddingBottom ?? 0) : height === 'hug-contents' || height === 'fill-parent' ? height : 'hug-contents';
    let {
      onClick,
      ...A
    } = props;
    let y = eh({
      ...A,
      widgetInputBehavior: inputBehavior,
      font: resolveFont(props),
      children: value ?? '',
      width: g,
      height: f,
      truncate: inputBehavior === 'truncate',
      positioning: 'auto'
    }, t, eo);
    let b = em({
      opacity: 0.3,
      ...restProps,
      ...placeholderProps,
      font: placeholderProps ? resolveFont(placeholderProps) : resolveFont(props),
      children: props.placeholder ?? '',
      hidden: !!props.value,
      width: 'fill-parent',
      height: 'fill-parent',
      x: h.paddingLeft ?? 0,
      y: h.paddingTop ?? 0,
      positioning: 'absolute'
    }, t);
    let InputFrame = AutoLayoutComponent({
      ...m,
      onClick,
      children: [b, y]
    }, t);
    InputFrame.renderMetaData.onTextEditEnd = onTextEditEnd;
    InputFrame.type = 'inputframe';
    return InputFrame;
  },
  Line: LineComponent,
  Fragment: FragmentComponent,
  Span: () => {
    throw new InternalError('Span is not valid outside of a Text component');
  }
};
export let instanceComponentMap = {
  Instance: InstanceComponent
};
/**
 * Checks if the given type is a container component.
 * Original name: eI
 * @param type - The component type string.
 * @returns True if type is 'Frame', 'AutoLayout', or 'Fragment'.
 */
function isContainerType(type: string): boolean {
  return type === 'Frame' || type === 'AutoLayout' || type === 'Fragment';
}

/**
 * Recursively maps children nodes for container components.
 * Original name: mapChildrenRecursively
 * @param children - The children nodes.
 * @param context - The mapper context.
 * @returns The mapped children nodes.
 */
function mapChildrenRecursively(children: any, context: MapperContext): any {
  if (children == null || children === false) return children;
  if (Array.isArray(children)) return children.map(child => mapChildrenRecursively(child, context));
  const childType = typeof children;
  if (childType === 'string' || childType === 'number') {
    throw new InternalError(`Invalid node child of type "${childType}": ${JSON.stringify(children)}`);
  }
  if (!isContainerType(children.type)) {
    const componentFactory = getComponentFactory(children.type, context);
    if (!componentFactory) {
      throw new InternalError(`${children.type} is not a built in component`);
    }
    return componentFactory({
      ...children.props,
      children: children.children
    }, context);
  }
  return getComponentFactory(children.type, context)({
    ...children.props,
    children: mapChildrenRecursively(children.children, context)
  }, context);
}

/**
 * Returns the component factory for the given type.
 * Original name: ex
 * @param type - The component type string.
 * @param context - The mapper context.
 * @returns The component factory function.
 */
function getComponentFactory(type: string, context: MapperContext): any {
  let componentFactory = layoutComponentCollection[type];
  if (!componentFactory && context.enableFullJsx) componentFactory = instanceComponentMap[type];
  return componentFactory;
}

/**
 * Maps a node to its corresponding component factory and processes its children.
 * Original name: $$eE2
 * @param node - The node object.
 * @param context - The mapper context.
 * @returns The mapped component.
 */
export function mapNodeToComponent(node: any, context: MapperContext): any {
  const componentFactory = getComponentFactory(node.type, context);
  return componentFactory({
    ...node.props,
    children: isContainerType(node.type) ? mapChildrenRecursively(node.children, context) : node.children
  }, context);
}

/** Exported layout component collection (original: layoutComponentCollection) */
export const HB = layoutComponentCollection;
/** Exported instance component collection (original: $$ev1) */
export const cd = instanceComponentMap;
/** Exported node-to-component mapper (original: $$eE2) */
export const P5 = mapNodeToComponent;
