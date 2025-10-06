import { debugState } from '../407919';
import { getSingletonSceneGraph } from '../700578';
import { InternalError } from '../845428';
// Refactored plugin runtime - now uses the extracted node management module
import { throwTypeError } from '../../figma_app/465776';
// Original class e9 has been moved to ./modules/node-management.ts
import { HzA } from '../../figma_app/763686';
import { isInteractionPathCheck } from '../../figma_app/897289';
import { convertInternalPaintToExternal } from '../modules';
export class PluginRuntimeBridge {
  pluginID: any;
  vm: any;
  constructor(pluginID, vm) {
    this.pluginID = pluginID;
    this.vm = vm;
  }
  getMultiplayerSelection() {
    let e = new Set();
    for (let {
      selection
    } of this.figma().activeUsers) {
      for (let i of selection) e.add(i);
    }
    return e;
  }
  figma() {
    return this.vm.scope.figma;
  }
  logWarning(...e) {
    (isInteractionPathCheck() || this.pluginID.startsWith('TEST') || Object.values(debugState.getState().localPlugins).some(item => item.plugin_id === this.pluginID)) && console.warn(...e);
  }
  createPluginNode(e, t, i, n = false) {
    let r;
    if (!e || typeof e != 'object') throw new Error('invalid node passed to createPluginNode');
    let a = e.type;
    switch (a) {
      case 'inputframe':
      case 'autolayout':
      case 'frame':
        r = e7New('FRAME', i);
        break;
      case 'input':
      case 'text':
        r = e7New('TEXT', i);
        break;
      case 'svg':
        // Refactored SVG node creation and widget ancestor assignment (original IIFE replaced with named recursive function)
        r = getSingletonSceneGraph().createNodeFromSVG(e.renderMetaData.src ?? '', {
          tracking: i
        });

        /**
         * Recursively assign widgetCachedAncestor to all descendants of a node.
         * @param node - The root node to start assignment from.
         * @param ancestor - The widget ancestor to assign.
         */
        function assignWidgetCachedAncestor(node, ancestor) {
          for (const childGuid of node.reversedChildrenGuids) {
            const childNode = e8New(childGuid);
            if (childNode) {
              childNode.widgetCachedAncestor = ancestor;
              assignWidgetCachedAncestor(childNode, ancestor);
            }
          }
        }
        assignWidgetCachedAncestor(r, t);
        break;
      case 'line':
        r = e7New('LINE', i);
        break;
      case 'ellipse':
        r = e7New('ELLIPSE', i);
        break;
      case 'rectangle':
        r = e7New('RECTANGLE', i);
        break;
      case 'fragment':
      case 'span':
        if (n) throw new InternalError(`Unsupported root node type: ${a}`);
        throw new Error(`Attempting to create a ${a} node`);
      case 'instance':
        {
          let instanceNode = this.figma().getNodeById(e.props.componentId);
          if (instanceNode?.type !== 'COMPONENT') throw new Error(`Invalid component Id: ${e.props.componentId}`);
          r = e8New(instanceNode.createInstance().id);
          break;
        }
      default:
        throwTypeError(a);
    }
    r.widgetCachedAncestor = t;
    return this.figma().getNodeById(r.guid);
  }
  loadFontAsync(e) {
    return this.figma().loadFontAsync(e);
  }
  createImage(e) {
    return this.figma().createImage(e);
  }
  getNodeById(e) {
    return this.figma().getNodeById(e);
  }
  getSceneNodeAdapter(e, t = null) {
    return new PluginSceneNodeAdapter(e, t, this);
  }
}

/**
 * PluginSceneNodeAdapter - Adapter for plugin scene nodes, providing a unified interface for node manipulation.
 * Refactored for clarity, maintainability, and type safety.
 */
class PluginSceneNodeAdapter {
  id: any;
  pluginNode: any;
  runtime: any;
  shimNode: any;

  /**
   * Constructs a new PluginSceneNodeAdapter.
   * @param id - The node's unique identifier.
   * @param pluginNode - The plugin node instance.
   * @param runtime - The plugin runtime bridge.
   */
  constructor(id, pluginNode, runtime) {
    this.id = id;
    this.pluginNode = pluginNode;
    this.runtime = runtime;
    this.shimNode = null;
  }

  /**
   * Returns the node's unique identifier.
   */
  getId() {
    return this.id;
  }

  /**
   * Returns the adapter's children as PluginSceneNodeAdapter instances.
   */
  get children() {
    const shim = this.readShim();
    const guids = shim?.reversedChildrenGuids ?? [];
    return [...guids].reverse().map(guid => new PluginSceneNodeAdapter(guid, null, this.runtime));
  }

  /**
   * Inserts a child node at the specified position.
   * @param child - The child node to insert.
   * @param position - The position to insert at.
   */
  insertChild(child, position) {
    this.readShim()?.insertChild(e8New(position), child, {
      skipValidation: true
    });
  }

  /**
   * Removes the node and its children from the scene graph.
   */
  remove() {
    this.readShim()?.removeSelfAndChildren();
  }

  /**
   * Lazily retrieves the plugin node instance.
   */
  getPluginNodeSlow() {
    if (!this.pluginNode) {
      this.pluginNode = this.runtime.getNodeById(this.id);
    }
    return this.pluginNode;
  }

  /**
   * Lazily retrieves the shim node instance.
   */
  readShim() {
    if (!this.shimNode) {
      this.shimNode = e8New(this.id);
    }
    return this.shimNode;
  }

  /**
   * Applies component properties to an INSTANCE node.
   * @param node - The node to apply properties to.
   * @param props - The properties to apply.
   */
  applyComponentProps(node, props) {
    if (node.type !== 'INSTANCE') return;
    if (props.componentId) {
      try {
        const component = e8New(props.componentId);
        if (component) {
          node.swapComponent(component);
          node.updateIfIsNestedInstance();
        }
      } catch (err) {
        this.runtime.logWarning(`Error setting componentId: ${err}`);
      }
    }
    if (props.sharedPluginData) {
      this.writeSharedPluginData(node, props.sharedPluginData);
    }
    if (props.pluginData) {
      this.writePluginData(node, props.pluginData);
    }
    if (props.componentProps) {
      try {
        node.setProperties(props.componentProps, true);
      } catch (err) {
        this.runtime.logWarning(`Error setting component props: ${err}`);
      }
    }
    let materialize = false;
    if (props.nestedInstancesVisibility) {
      for (const [key, visible] of Object.entries(props.nestedInstancesVisibility)) {
        const sublayer = node.getMatchingInstanceSublayer(key);
        if (!sublayer) continue;
        const sublayerShim = sublayer;
        const wasVisible = sublayerShim.visible;
        sublayerShim.visible = visible;
        materialize = materialize || !wasVisible && visible;
      }
    }
    if (materialize) {
      node.materializeDescendants();
    }
    if (props.componentPropsNested) {
      for (const [key, nestedProps] of Object.entries(props.componentPropsNested)) {
        const sublayer = node.getMatchingInstanceSublayer(key);
        if (!sublayer) continue;
        const sublayerShim = sublayer;
        if (sublayerShim.isVisibleInInstance) {
          this.applyComponentProps(sublayerShim, nestedProps);
        }
      }
    }
  }

  /**
   * Writes plugin data to the node.
   * @param node - The node to write data to.
   * @param data - The plugin data object.
   */
  writePluginData(node, data) {
    if (typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        if (typeof value !== 'string') {
          this.runtime.logWarning(`Attempting to set non-string pluginData: ${key}=${JSON.stringify(value)}`);
          continue;
        }
        node.setPluginData(this.runtime.pluginID, key, value);
      }
    }
  }

  /**
   * Writes shared plugin data to the node.
   * @param node - The node to write data to.
   * @param data - The shared plugin data object.
   */
  writeSharedPluginData(node, data) {
    if (typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        if (typeof value !== 'string') {
          this.runtime.logWarning(`Attempting to set non-string sharedPluginData: ${key}=${JSON.stringify(value)}`);
          continue;
        }
        node.setSharedPluginData('jsx', key, value);
      }
    }
  }

  /**
   * Writes a property to the node.
   * @param key - The property key.
   * @param value - The property value.
   */
  writeProperty(key, value) {
    this.writePropertyInner(key, value);
  }

  /**
   * Internal property writer with special handling for certain keys.
   * @param key - The property key.
   * @param value - The property value.
   */
  writePropertyInner(key, value) {
    const node = this.readShim();
    switch (key) {
      case 'widgetEvents':
      case 'widgetInputBehavior':
      case 'widgetTooltip':
        node[key] = value;
        break;
      case 'componentId':
        this.applyComponentProps(node, {
          componentId: value
        });
        break;
      case 'componentProps':
        this.applyComponentProps(node, {
          componentProps: value
        });
        break;
      case 'nestedInstancesVisibility':
        this.applyComponentProps(node, {
          nestedInstancesVisibility: value
        });
        break;
      case 'componentPropsNested':
        this.applyComponentProps(node, {
          componentPropsNested: value
        });
        break;
      case 'sharedPluginData':
        this.writeSharedPluginData(node, value);
        break;
      case 'pluginData':
        this.writePluginData(node, value);
        break;
      default:
        this.getPluginNodeSlow()[key] = value;
    }
  }

  /**
   * Writes a text range property to the node.
   * @param property - The property to write.
   * @param value - The value to set.
   * @param start - The start index.
   * @param end - The end index.
   */
  writeTextRange(property, value, start, end) {
    this.writeTextRangeInner(property, value, start, end);
  }

  /**
   * Internal text range writer with support for various text properties.
   * @param property - The property to write.
   * @param value - The value to set.
   * @param start - The start index.
   * @param end - The end index.
   * @param _ - Reserved for future use.
   */
  writeTextRangeInner(property, value, start, end, _ = false) {
    const node = this.getPluginNodeSlow();
    if (!node || node.type !== 'TEXT') {
      throw new Error('Can\'t write text range on non-text node');
    }
    switch (property) {
      case 'fontName':
        node.setRangeFontName(start, end, value);
        break;
      case 'fills':
        node.setRangeFills(start, end, value);
        break;
      case 'fontSize':
        node.setRangeFontSize(start, end, value);
        break;
      case 'hyperlink':
        node.setRangeHyperlink(start, end, value);
        break;
      case 'textCase':
        node.setRangeTextCase(start, end, value);
        break;
      case 'textDecoration':
        node.setRangeTextDecoration(start, end, value);
        break;
      case 'letterSpacing':
        node.setRangeLetterSpacing(start, end, value);
        break;
      case 'lineHeight':
        node.setRangeLineHeight(start, end, value);
        break;
      case 'listOptions':
        node.setRangeListOptions(start, end, value);
        break;
      case 'indentation':
        node.setRangeIndentation(start, end, value);
        break;
      default:
        throwTypeError(property);
    }
  }

  /**
   * Resizes the node.
   * @param width - The new width.
   * @param height - The new height.
   */
  resize(width, height) {
    const node = this.getPluginNodeSlow();
    node?.resize(width, height);
  }

  /**
   * Returns the node's size.
   */
  getSize() {
    const node = this.getPluginNodeSlow();
    return {
      width: node?.width ?? 0,
      height: node?.height ?? 0
    };
  }

  /**
   * Returns the node's font name.
   */
  getFontName() {
    return this.readShim()?.fontName || {
      family: '',
      style: ''
    };
  }

  /**
   * Returns the node's type.
   */
  getType() {
    return this.readShim()?.type;
  }

  /**
   * Returns the node's GUID.
   */
  getID() {
    return this.readShim()?.guid;
  }

  /**
   * Returns the image hash if the node has a single IMAGE fill, otherwise null.
   */
  getImageFillHashOrNull() {
    const fills = this.readShim()?.fills ?? [];
    if (fills.length !== 1) return null;
    const fill = convertInternalPaintToExternal(fills[0]);
    return fill.type !== 'IMAGE' ? null : fill.imageHash ?? null;
  }
}
function e7New(e, t = HzA.TRACK) {
  return getSingletonSceneGraph().createNode(e, {
    tracking: t
  });
}
function e8New(e) {
  return getSingletonSceneGraph().get(e) ?? null;
}