import { PopupButtonPrimitive } from '../905/65923';
// import { setupToggleButton } from '../905/167712';
import { IconButton } from '../905/443068';
import { Button, ButtonLarge, ButtonLargeWide, ButtonWide } from '../905/521428';
import { ButtonPrimitive } from '../905/632989';
import { DialogTriggerButton } from '../905/976845';
import { withTrackedClick } from '../figma_app/831799';


export const WithTrackedButton = withTrackedClick(Button);
export const WithTrackedButtonLink = withTrackedClick(Button.Link);
export const WithTrackedButtonPrimitive = withTrackedClick(ButtonPrimitive);
export const WithTrackedPopupButtonPrimitive = withTrackedClick(PopupButtonPrimitive);
export const WithTrackedButtonLarge = withTrackedClick(ButtonLarge);
export const WithTrackedButtonWide = withTrackedClick(ButtonWide);
export const WithTrackedButtonLargeWide = withTrackedClick(ButtonLargeWide);
export const WithTrackedDialogTriggerButton = withTrackedClick(DialogTriggerButton);
export const WithTrackedIconButton = withTrackedClick(IconButton);

export const $z = WithTrackedButton;
export const Ih = WithTrackedButtonWide
export const Me = WithTrackedIconButton
export const c = WithTrackedButtonLarge
export const e6 = WithTrackedPopupButtonPrimitive
export const hH = WithTrackedDialogTriggerButton
export const lR = WithTrackedButtonLargeWide
export const rb = WithTrackedButtonLink
export const wt = WithTrackedButtonPrimitive
