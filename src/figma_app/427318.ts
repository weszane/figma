import { reportError } from '../905/11';
import { FileTypeEnum } from '../905/71785';
import { ServiceCategories } from '../905/165054';
import { ResourceTypes } from '../905/178090';
import { hasClientMeta, hasMonetizedResourceMetadata, isPlugin, isWidget, ResourceTypeNoComment } from '../figma_app/45218';
import { FFileType, FPublicationStatusType, FTemplateCategoryType } from '../figma_app/191312';
import { hasHubFileOrPresetKey } from '../figma_app/255679';
import { isMakeDiscoveryEnabled } from '../figma_app/275462';
import { ResourceTypeEnum } from '../figma_app/306946';
import { ResourceType } from '../figma_app/354658';
import { returnSecond, throwTypeError } from '../figma_app/465776';

/**
 * Utility functions for resource type and template handling.
 * Original function names preserved in comments for traceability.
 * All exports renamed for clarity and consistency.
 */

/**
 * Returns the resource type for a given entity.
 * @param entity
 */
export function getResourceType(entity: any): ResourceTypeNoComment {
  // $$m15
  if (hasResourceType(entity) || hasOrgPrivateResourceType(entity)) {
    return entity.resource_type;
  }
  if (hasClientMeta(entity)) {
    return ResourceTypeNoComment.HUB_FILE;
  }
  if (isWidget(entity)) {
    return ResourceTypeNoComment.WIDGET;
  }
  if (isPlugin(entity)) {
    return ResourceTypeNoComment.PLUGIN;
  }
  throwTypeError(entity);
}

/**
 * Returns the template type for a given entity.
 * @param entity
 */
export function getTemplateType(entity: any): string {
  // $$g20
  if (hasClientMeta(entity)) {
    return getViewerModeType(entity.viewer_mode);
  }
  if (isWidget(entity)) {
    return ResourceTypeEnum.WIDGET;
  }
  if (isPlugin(entity)) {
    return ResourceTypeEnum.PLUGIN;
  }
  throwTypeError(entity);
}

/**
 * Checks if the entity is a UI Kit library.
 * @param entity
 */
export function isUIKitLibrary(entity: any): boolean {
  // $$f3
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.UI_KIT && hasHubFileOrPresetKey(entity.content.hub_file?.id);
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.LIBRARY && hasHubFileOrPresetKey(entity.id);
}

/**
 * Checks if the entity is a slide template.
 * @param entity
 */
export function isSlideTemplate(entity: any): boolean {
  // $$E22
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.SLIDE_TEMPLATE;
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE;
}

/**
 * Checks if the entity is a prototype.
 * @param entity
 */
export function isPrototype(entity: any): boolean {
  // $$y10
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.PROTOTYPE;
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.PROTOTYPE;
}

/**
 * Checks if the entity is a Cooper template asset.
 * @param entity
 */
export function isCooperTemplateAsset(entity: any): boolean {
  // $$b9
  return entity.resource_type === ResourceTypeEnum.COOPER_TEMPLATE_ASSET;
}

/**
 * Checks if the entity is a Cooper template file.
 * @param entity
 */
export function isCooperTemplateFile(entity: any): boolean {
  // $$T31
  if (hasResourceType(entity)) {
    return entity.resource_type === ResourceTypeEnum.COOPER_TEMPLATE_FILE;
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.COOPER_TEMPLATE_FILE;
}

/**
 * Checks if the entity is a widget.
 * @param entity
 */
export function isWidgetResource(entity: any): boolean {
  // $$I0
  if (hasResourceType(entity)) {
    return entity.resource_type === ResourceTypeEnum.WIDGET;
  }
  return isWidget(entity);
}

/**
 * Checks if the entity is a plugin.
 * @param entity
 */
export function isPluginResource(entity: any): boolean {
  // $$S17
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.PLUGIN;
  }
  return isPlugin(entity);
}

/**
 * Checks if the entity is either a plugin or widget.
 * @param entity
 */
export function isPluginOrWidget(entity: any): boolean {
  // $$v24
  return isPluginResource(entity) || isWidgetResource(entity);
}

/**
 * Checks if the entity is an org-private plugin/widget.
 * @param entity
 */
export function isOrgPrivatePluginOrWidget(entity: any): boolean {
  // $$A29
  if (!isPluginOrWidget(entity)) return false;
  const pluginOrWidget = getPluginOrWidgetContent(entity);
  return !!pluginOrWidget && !!pluginOrWidget.publishing_status && [FPublicationStatusType.ORG_PRIVATE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(pluginOrWidget.publishing_status);
}

/**
 * Checks if the entity is a site template.
 * @param entity
 */
export function isSiteTemplate(entity: any): boolean {
  // $$x18
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.SITE_TEMPLATE;
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.SITE_TEMPLATE;
}

/**
 * Checks if the entity is a Figmake template.
 * @param entity
 */
export function isFigmakeTemplate(entity: any): boolean {
  // $$N34
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.FIGMAKE_TEMPLATE;
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.FIGMAKE_TEMPLATE;
}

/**
 * Checks if the entity has a hub file.
 * @param entity
 */
export function hasHubFile(entity: any): boolean {
  // $$C12
  return typeof getHubFile(entity) !== 'undefined';
}

/**
 * Checks if the entity is a monetized FigJam template.
 * @param entity
 * @param meta
 */
export function isMonetizedFigJamTemplate(entity: any, meta: any): boolean {
  // $$w11
  if (hasContent(entity)) {
    return entity.resource_type === ResourceTypeEnum.FIGJAM_TEMPLATE && hasMonetizedResourceMetadata(meta);
  }
  return hasClientMeta(entity) && entity.viewer_mode === FTemplateCategoryType.WHITEBOARD && hasMonetizedResourceMetadata(entity);
}

/**
 * Checks if the entity has org-private publishing status.
 * @param entity
 */
function hasOrgPrivatePublishingStatus(entity: any): boolean {
  // O
  return !!entity.publishing_status && [FPublicationStatusType.ORG_PRIVATE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(entity.publishing_status);
}

/**
 * Checks if the entity does not have a resource_type property.
 * @param entity
 */
export function isWithoutResourceType(entity: any): boolean {
  // $$R5
  return !('resource_type' in entity);
}

/**
 * Checks if the entity has a resource_type property.
 * @param entity
 */
export function hasResourceType(entity: any): boolean {
  // $$L32
  return 'resource_type' in entity;
}

/**
 * Checks if the entity has a resource_type and org-private publishing status.
 * @param entity
 */
export function hasOrgPrivateResourceType(entity: any): boolean {
  // $$P4
  return 'resource_type' in entity && hasOrgPrivatePublishingStatus(entity);
}

/**
 * Checks if the entity has a content property.
 * @param entity
 */
export function hasContent(entity: any): boolean {
  // $$D16
  return 'content' in entity;
}

/**
 * Checks if the entity has content and org-private publishing status.
 * @param entity
 */
export function hasOrgPrivateContent(entity: any): boolean {
  // $$k14
  return 'content' in entity && hasOrgPrivatePublishingStatus(entity);
}

/**
 * Returns the main content object for a resource.
 * @param entity
 */
export function getMainContent(entity: any): any {
  // $$M28
  if (entity.content.hub_file) return entity.content.hub_file;
  if (entity.content.plugin) return entity.content.plugin;
  if (entity.content.widget) return entity.content.widget;
  reportError(ServiceCategories.COMMUNITY, new Error('Resource has no content'), {
    extra: {
      resourceId: entity.id
    }
  });
}

/**
 * Returns the hub file if present.
 * @param entity
 */
export function getHubFile(entity: any): any {
  // $$F23
  if (entity == null) return undefined;
  if (hasContent(entity)) return entity.content.hub_file;
  if (hasClientMeta(entity)) return entity;
  return undefined;
}

/**
 * Returns the plugin content if present.
 * @param entity
 */
export function getPluginContent(entity: any): any {
  // $$j21
  if (hasContent(entity)) return entity.content.plugin;
  if (isPlugin(entity)) return entity;
  return undefined;
}

/**
 * Returns the widget content if present.
 * @param entity
 */
export function getWidgetContent(entity: any): any {
  // $$U30
  if (hasContent(entity)) return entity.content.widget;
  if (isWidget(entity)) return entity;
  return undefined;
}

/**
 * Returns plugin or widget content.
 * @param entity
 */
export function getPluginOrWidgetContent(entity: any): any {
  // $$B1
  if (isPluginResource(entity)) return getPluginContent(entity);
  if (isWidgetResource(entity)) return getWidgetContent(entity);
  return undefined;
}

/**
 * Returns the template content.
 * @param entity
 */
export function getTemplateContent(entity: any): any {
  // $$G2
  return entity.content.template;
}

/**
 * Checks if the entity has a libraryKey property.
 * @param entity
 */
export function hasLibraryKey(entity: any): boolean {
  // $$V27
  return 'libraryKey' in entity;
}

/**
 * Maps vt type to FFileType.
 * @param vtType
 */
export function mapVtToFileType(vtType: string): FFileType | null {
  // $$H7
  switch (vtType) {
    case ResourceTypeEnum.FIGJAM_TEMPLATE:
      return FFileType.WHITEBOARD;
    case ResourceTypeEnum.SLIDE_TEMPLATE:
      return FFileType.SLIDES;
    case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
      return FFileType.COOPER;
    case ResourceTypeEnum.SITE_TEMPLATE:
      return FFileType.SITES;
    case ResourceTypeEnum.FIGMAKE_TEMPLATE:
      return FFileType.FIGMAKE;
    case ResourceTypeEnum.DESIGN_TEMPLATE:
      return FFileType.DESIGN;
    case ResourceTypeEnum.PLUGIN:
    case ResourceTypeEnum.WIDGET:
    case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
    case ResourceTypeEnum.PROTOTYPE:
    case ResourceTypeEnum.UI_KIT:
      return null;
    default:
      return returnSecond(vtType, null);
  }
}

/**
 * Maps vt type to FileTypeEnum.
 * @param vtType
 */
export function mapVtToFileTypeEnum(vtType: string) {
  // $$z26
  switch (vtType) {
    case ResourceTypeEnum.FIGJAM_TEMPLATE:
      return FileTypeEnum.FIGJAM;
    case ResourceTypeEnum.SLIDE_TEMPLATE:
      return FileTypeEnum.SLIDES;
    case ResourceTypeEnum.SITE_TEMPLATE:
      return FileTypeEnum.SITES;
    case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
      return FileTypeEnum.COOPER;
    case ResourceTypeEnum.FIGMAKE_TEMPLATE:
      return FileTypeEnum.FIGMAKE;
    case ResourceTypeEnum.PROTOTYPE:
    case ResourceTypeEnum.DESIGN_TEMPLATE:
    case ResourceTypeEnum.UI_KIT:
    default:
      return FileTypeEnum.FIGMA;
  }
}

/**
 * Maps viewer mode to vt type.
 * @param viewerMode
 */
export function getViewerModeType(viewerMode: FTemplateCategoryType): string {
  // $$W25
  switch (viewerMode) {
    case FTemplateCategoryType.WHITEBOARD:
      return ResourceTypeEnum.FIGJAM_TEMPLATE;
    case FTemplateCategoryType.CANVAS:
      return ResourceTypeEnum.DESIGN_TEMPLATE;
    case FTemplateCategoryType.PROTOTYPE:
      return ResourceTypeEnum.PROTOTYPE;
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return ResourceTypeEnum.SLIDE_TEMPLATE;
    case FTemplateCategoryType.LIBRARY:
      return ResourceTypeEnum.UI_KIT;
    case FTemplateCategoryType.SITE_TEMPLATE:
      return ResourceTypeEnum.SITE_TEMPLATE;
    case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
      return ResourceTypeEnum.COOPER_TEMPLATE_FILE;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return ResourceTypeEnum.FIGMAKE_TEMPLATE;
    default:
      throwTypeError(viewerMode);
  }
}

/**
 * Maps editorType to vt type.
 * @param entity
 */
export function mapEditorTypeToVt(entity: {
  editorType: FFileType | null;
}): string {
  // $$K13
  switch (entity.editorType) {
    case FFileType.COOPER:
      return ResourceTypeEnum.COOPER_TEMPLATE_FILE;
    case FFileType.WHITEBOARD:
      return ResourceTypeEnum.FIGJAM_TEMPLATE;
    case FFileType.SLIDES:
      return ResourceTypeEnum.SLIDE_TEMPLATE;
    case FFileType.SITES:
      return ResourceTypeEnum.SITE_TEMPLATE;
    case FFileType.FIGMAKE:
      return ResourceTypeEnum.FIGMAKE_TEMPLATE;
    case null:
    case FFileType.DESIGN:
      return ResourceTypeEnum.DESIGN_TEMPLATE;
    default:
      return returnSecond(entity.editorType, ResourceTypeEnum.DESIGN_TEMPLATE);
  }
}

/**
 * Returns TeamTemplateLg object for Cooper template files.
 * @param entity
 */
export function getTeamTemplateLg(entity: any): any | undefined {
  // $$Y8
  if (hasContent(entity) && isCooperTemplateFile(entity)) {
    const t = entity.content.template;
    if (t) {
      const template = {
        id: t.id,
        fileKey: t.file_key,
        description: t.description,
        name: t.name,
        coverImagePath: null,
        thumbnailUrl: entity.thumbnail_url ?? '',
        hasCustomThumbnail: t.thumbnail_guid === 'USER_UPLOADED',
        publishedByUserNullable: {
          handle: entity.creator.handle,
          imgUrl: entity.creator.img_url
        },
        file: {
          signedThumbnailUrl: entity.thumbnail_url ?? null,
          checkpointClientMeta: null,
          editorType: FFileType.COOPER
        },
        libraryKey: t.library_key,
        signedThumbnailUrl: entity.thumbnail_url ?? null,
        checkpointClientMeta: null,
        editorType: FFileType.COOPER
      };
      return {
        type: 'TeamTemplateLg',
        template
      };
    }
  }
}

/**
 * Resource type mapping.
 */
export const resourceTypeMap = {
  // $$$19
  [ResourceTypeNoComment.HUB_FILE]: ResourceType.FILE,
  [ResourceTypeNoComment.PLUGIN]: ResourceType.PLUGIN,
  [ResourceTypeNoComment.WIDGET]: ResourceType.WIDGET
};

/**
 * Returns all supported vt types, excluding Cooper template asset.
 */
export function getSupportedVtTypes(): string[] {
  // $$X33
  const types = [ResourceTypeEnum.DESIGN_TEMPLATE, ResourceTypeEnum.FIGJAM_TEMPLATE, ResourceTypeEnum.PLUGIN, ResourceTypeEnum.WIDGET, ResourceTypeEnum.UI_KIT, ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.PROTOTYPE, ResourceTypeEnum.SITE_TEMPLATE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.COOPER_TEMPLATE_ASSET];
  if (isMakeDiscoveryEnabled()) types.push(ResourceTypeEnum.FIGMAKE_TEMPLATE);
  return types.filter(type => type !== ResourceTypeEnum.COOPER_TEMPLATE_ASSET);
}

/**
 * Maps vt type to browse resource type.
 * @param vtType
 */
export function mapVtToBrowseResourceType(vtType: string) {
  // $$q6
  switch (vtType) {
    case ResourceTypeEnum.PLUGIN:
      return ResourceTypes.BrowseResourceTypes.PLUGINS;
    case ResourceTypeEnum.WIDGET:
      return ResourceTypes.BrowseResourceTypes.WIDGETS;
    default:
      return ResourceTypes.BrowseResourceTypes.FILES;
  }
}

// Export aliases for backward compatibility and clarity
export const $3 = isWidgetResource; // $3
export const $9 = getPluginOrWidgetContent; // $9
export const B2 = getTemplateContent; // B2
export const BQ = isUIKitLibrary; // BQ
export const Gk = hasOrgPrivateResourceType; // Gk
export const Gl = isWithoutResourceType; // Gl
export const HX = mapVtToBrowseResourceType; // HX
export const J2 = mapVtToFileType; // J2
export const Ky = getTeamTemplateLg; // Ky
export const LE = isCooperTemplateAsset; // LE
export const Lz = isPrototype; // Lz
export const PI = isMonetizedFigJamTemplate; // PI
export const Qc = hasHubFile; // Qc
export const Qd = mapEditorTypeToVt; // Qd
export const Tv = hasOrgPrivateContent; // Tv
export const Vm = getResourceType; // Vm
export const XW = hasContent; // XW
export const YI = isPluginResource; // YI
export const ZA = isSiteTemplate; // ZA
export const Z1 = resourceTypeMap; // Zl
export const bc = getTemplateType; // bc
export const cD = getPluginContent; // cD
export const cX = isSlideTemplate; // cX
export const eO = getHubFile; // eO
export const g0 = isPluginOrWidget; // g0
export const jB = getViewerModeType; // jB
export const kz = mapVtToFileTypeEnum; // kz
export const o_ = hasLibraryKey; // o_
export const qY = getMainContent; // qY
export const rZ = isOrgPrivatePluginOrWidget; // rZ
export const rg = getWidgetContent; // rg
export const tv = isCooperTemplateFile; // tv
export const ws = hasResourceType; // ws
export const yX = getSupportedVtTypes; // yX
export const zL = isFigmakeTemplate; // zL