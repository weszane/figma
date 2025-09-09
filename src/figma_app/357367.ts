import { useEffect } from 'react';
import { oA } from '../905/723791';
import { resourceUtils } from '../905/989992';
import { FileCanUseSlidesDesignToggle } from '../figma_app/43951';
import { getObservableValue } from '../figma_app/84367';
import { useSubscription } from '../figma_app/288654';
import { selectOpenFileObject } from '../figma_app/516028';
import { AppStateTsApi, SelfDesignType } from '../figma_app/763686';
import { isInteractionOrEvalMode } from '../figma_app/897289';
import { useSelector } from 'react-redux';
export function $$_1() {
  return getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF) === SelfDesignType.SELF;
}
export function $$h0() {
  return getObservableValue(AppStateTsApi?.canEnterDesignMode(), !1);
}
export function $$m2() {
  let e = function () {
    let e = useSelector(selectOpenFileObject);
    let t = e?.key ?? null;
    let r = useSubscription(FileCanUseSlidesDesignToggle, {
      key: t ?? ''
    }, {
      enabled: !!t
    });
    let n = resourceUtils.useTransform(r, e => !!oA(e.file)?.hasPermission);
    return !!isInteractionOrEvalMode() || n.unwrapOr(!1);
  }();
  useEffect(() => {
    AppStateTsApi?.canEnterDesignMode().set(e);
  }, [e]);
}
export const Bk = $$h0;
export const HW = $$_1;
export const VD = $$m2;