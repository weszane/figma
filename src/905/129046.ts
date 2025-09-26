import { jsx } from 'react/jsx-runtime'
import { styleBuilderInstance } from '../905/941192'
import { cssBuilderInstance } from '../cssbuilder/589278'



interface MediaOverlayProps {
  src: string;
  aspectRatio: number | string;
}

interface ImageOverlayProps extends MediaOverlayProps {
  alt: string;
}

interface VideoOverlayProps extends MediaOverlayProps {
  hideBorder?: boolean;
}

const OVERLAY_CONTAINER_CLASS = 'media--overlayImageContainer--EjKlj';

/**
 * ImageOverlayComponent - renders an image with aspect ratio styling
 * Original name: $$o0
 */
export function ImageOverlayComponent(props: ImageOverlayProps) {
  return jsx('div', {
    className: OVERLAY_CONTAINER_CLASS,
    style: styleBuilderInstance.colorIconOnbrand.colorBorder.bSolid.bb1.flex.add({
      aspectRatio: props.aspectRatio.toString(),
    }).add({
      margin: '0',
    }).$,
    children: jsx('img', {
      src: props.src,
      alt: props.alt,
      className: cssBuilderInstance.flex.justifyCenter.alignCenter.overflowHidden.$,
    }),
  });
}

/**
 * VideoOverlayComponent - renders a video with aspect ratio styling
 * Original name: $$l1
 */
export function VideoOverlayComponent(props: VideoOverlayProps) {
  return jsx('div', {
    className: OVERLAY_CONTAINER_CLASS,
    style: styleBuilderInstance.colorIconOnbrand.flex.if(!props.hideBorder, styleBuilderInstance.colorBorder.bSolid.bt1.bb1).add({
      aspectRatio: props.aspectRatio.toString(),
    }).add({
      margin: '0',
    }).$,
    children: jsx('video', {
      'autoPlay': true,
      'muted': true,
      'loop': true,
      'object-fit': 'initial',
      'aria-hidden': 'true',
      'style': styleBuilderInstance.flex.justifyCenter.alignCenter.overflowHidden.$,
      'children': jsx('source', {
        src: props.src,
        type: 'video/mp4',
      }),
    }),
  });
}

export const y = ImageOverlayComponent;
export const w = VideoOverlayComponent;
