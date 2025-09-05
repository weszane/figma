import { jsx, jsxs } from 'react/jsx-runtime';
import { l as _$$l } from '../905/241412';
import { tx } from '../905/303541';
import { $n } from '../905/521428';
import { s as _$$s } from '../cssbuilder/589278';
import { B7, My } from '../figma_app/143628';
import { Cu } from '../figma_app/314264';
import { q5 } from '../figma_app/516028';
import { fx, PF } from '../figma_app/657972';
import { fu } from '../figma_app/831799';
import { useSelector, useDispatch } from '../vendor/514228';
export function $$h1() {
  return tx('slides.properties_panel.visual_bell.remove_stack', {
    secondaryText: jsx('span', {
      className: _$$s.colorTextSecondary.pl8.$,
      children: tx('slides.properties_panel.visual_bell.remove_stack_undo')
    })
  });
}
export function $$g0() {
  let e = useDispatch();
  let t = q5();
  let i = useSelector(e => e.fileVersion);
  return t?.key ? jsx(fu, {
    name: 'Slides conversion visual bell entrypoint',
    children: jsxs('div', {
      className: My,
      children: [jsx(_$$l, {
        className: B7
      }), tx('slides.visual_bell.making_a_presentation'), jsx($n, {
        variant: 'secondary',
        onClick: () => {
          Cu({
            trackingContext: 'Slides conversion visual bell entrypoint',
            name: 'slides_conversion_visual_bell_entrypoint'
          });
          fx(t, i).then(t => {
            PF(e, t);
          });
        },
        children: tx('slides.general.copy_to_figma_slides')
      })]
    })
  }) : null;
}
export const SlideConversionVisualBell = $$g0;
export const SlidesRemovedAutoLayoutVisualBell = $$h1;