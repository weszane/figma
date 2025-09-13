import { jsx, jsxs } from 'react/jsx-runtime';
import { l as _$$l } from '../905/241412';
import { renderI18nText } from '../905/303541';
import { Button } from '../905/521428';
import { s as _$$s } from '../cssbuilder/589278';
import { B7, My } from '../figma_app/143628';
import { logAndTrackCTA } from '../figma_app/314264';
import { selectCurrentFile } from '../figma_app/516028';
import { fx, PF } from '../figma_app/657972';
import { TrackingProvider } from '../figma_app/831799';
import { useSelector, useDispatch } from 'react-redux';
export function $$h1() {
  return renderI18nText('slides.properties_panel.visual_bell.remove_stack', {
    secondaryText: jsx('span', {
      className: _$$s.colorTextSecondary.pl8.$,
      children: renderI18nText('slides.properties_panel.visual_bell.remove_stack_undo')
    })
  });
}
export function $$g0() {
  let e = useDispatch();
  let t = selectCurrentFile();
  let i = useSelector(e => e.fileVersion);
  return t?.key ? jsx(TrackingProvider, {
    name: 'Slides conversion visual bell entrypoint',
    children: jsxs('div', {
      className: My,
      children: [jsx(_$$l, {
        className: B7
      }), renderI18nText('slides.visual_bell.making_a_presentation'), jsx(Button, {
        variant: 'secondary',
        onClick: () => {
          logAndTrackCTA({
            trackingContext: 'Slides conversion visual bell entrypoint',
            name: 'slides_conversion_visual_bell_entrypoint'
          });
          fx(t, i).then(t => {
            PF(e, t);
          });
        },
        children: renderI18nText('slides.general.copy_to_figma_slides')
      })]
    })
  }) : null;
}
export const SlideConversionVisualBell = $$g0;
export const SlidesRemovedAutoLayoutVisualBell = $$h1;