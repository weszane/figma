import { CollaboratorTypes, ProductAccessTypeEnum, ViewAccessTypeEnum, DesignTypes } from "../905/513035";
import { X } from "../905/596651";
let $$a0 = new X([...CollaboratorTypes]).excludeUnlessFlag([ProductAccessTypeEnum.CONTENT], "billing_enable_content_seat");
let $$s2 = new X([...Object.values(ViewAccessTypeEnum), ...CollaboratorTypes]).excludeUnlessFlag([ProductAccessTypeEnum.CONTENT], "billing_enable_content_seat");
let $$o1 = new X([...DesignTypes]);
new X([...CollaboratorTypes, ...DesignTypes]).excludeUnlessFlag([ProductAccessTypeEnum.CONTENT], "billing_enable_content_seat");
export const N_ = $$a0;
export const Oq = $$o1;
export const Ye = $$s2;
