import { jsx } from "react/jsx-runtime";
import { a as _$$a } from "../0c62c2fd/950366";
import { getProductAccessType } from "../figma_app/765689";
import { throwTypeError } from "../figma_app/465776";
import { mapFileTypeToPermissions } from "../figma_app/687776";
import { h as _$$h } from "../figma_app/334471";
import { FPermissionDenialReason } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { q, J } from "../905/202542";
import { useDispatch } from "react-redux";
import { p as _$$p, u as _$$u } from "../1250/964548";
import { V } from "../0c62c2fd/421640";
import { ud } from "../figma_app/681697";
import { useCallback } from "react";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { tc } from "../905/15667";
import { E as _$$E } from "../figma_app/61705";
import { c as _$$c } from "../905/370443";
import { j6 } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { F2 } from "../905/389382";
import { T9 } from "../figma_app/528509";
import { i as _$$i } from "../905/46262";
var m = (e => (e.CAN_CREATE = "CAN_CREATE", e.CANNOT_CREATE = "CANNOT_CREATE", e.CAN_AUTO_UPGRADE = "CAN_AUTO_UPGRADE", e.CAN_REQUEST_UPGRADE = "CAN_REQUEST_UPGRADE", e.UPGRADE_PENDING = "UPGRADE_PENDING", e))(m || {});
export function $$R0({
  lgFolder: e,
  newFileFrom: t
}) {
  let r = function ({
    lgFolder: e
  }) {
    let {
      getUpgradeEligibility,
      hasPendingRequest,
      getUpgradePathway
    } = wH({
      folderId: e.id
    });
    return _$$h(e).map(({
      editorType: s,
      canCreate: l
    }) => {
      let c = (() => {
        if (l) return "CAN_CREATE";
        if (!function ({
          editorType: e,
          lgFolder: t
        }) {
          let r = mapFileTypeToPermissions(t)[e];
          if (!r) return !1;
          if (r.result) return !0;
          if (!t.canEdit) return !1;
          let a = r.publicDenyReasons;
          return 1 === a.length && a[0] === FPermissionDenialReason.FOLDER_CREATE_FILE_DENY_UNLICENSED_USERS;
        }({
          lgFolder: e,
          editorType: s
        })) return "CANNOT_CREATE";
        let c = getProductAccessType(s);
        if (!c) return "CANNOT_CREATE";
        let m = getUpgradeEligibility(c);
        let _ = hasPendingRequest(c);
        switch (m) {
          case q.CAN_UPGRADE:
            let p = getUpgradePathway(c);
            switch (p) {
              case J.AUTO_PATHWAY:
              case J.ADMIN_AUTO_PATHWAY:
                return "CAN_AUTO_UPGRADE";
              case J.PROVISIONAL_PATHWAY:
              case J.RE_REQUEST_PATHWAY:
                return _ ? "UPGRADE_PENDING" : "CAN_REQUEST_UPGRADE";
              default:
                throwTypeError(p);
            }
          case q.CANNOT_UPGRADE:
            return _ ? "UPGRADE_PENDING" : "CANNOT_CREATE";
          case q.UPGRADE_NOT_NEEDED:
            return l ? "CAN_CREATE" : "CANNOT_CREATE";
          default:
            throwTypeError(m);
        }
      })();
      let m = (() => {
        switch (c) {
          case "CAN_CREATE":
          case "CAN_AUTO_UPGRADE":
          case "CAN_REQUEST_UPGRADE":
            return !1;
          case "CANNOT_CREATE":
          case "UPGRADE_PENDING":
            return !0;
          default:
            throwTypeError(c);
        }
      })();
      return {
        editorType: s,
        fileCreationOptionState: c,
        isDisabled: m
      };
    });
  }({
    lgFolder: e
  });
  let R = function ({
    newFileFrom: e,
    lgFolder: t,
    fileCreationOptions: r
  }) {
    let a = useDispatch();
    let s = function ({
      lgFolder: e,
      newFileFrom: t
    }) {
      let r = useDispatch();
      let a = _$$E({
        isDraftsFolder: T9(e),
        newFileFrom: t,
        folderId: e.id
      });
      let {
        properties
      } = j6();
      let {
        handleUpgrade
      } = wH({
        folderId: e.id
      });
      return useCallback(({
        editorType: e,
        contextClicked: t,
        fileCreationOptionState: l
      }) => {
        let d = function ({
          editorType: e,
          fileCreationOptionState: t,
          createFile: r,
          handleUpgradeBuilder: a,
          dispatch: s
        }) {
          switch (t) {
            case m.CAN_CREATE:
              return r;
            case m.CANNOT_CREATE:
            case m.UPGRADE_PENDING:
              return lQ;
            case m.CAN_AUTO_UPGRADE:
            case m.CAN_REQUEST_UPGRADE:
              return n => function ({
                event: e,
                editorType: t,
                fileCreationOptionState: r,
                createFile: a,
                handleUpgradeBuilder: s,
                dispatch: n
              }) {
                let o = getProductAccessType(t);
                if (!o) {
                  reportError(_$$e.MONETIZATION_UPGRADES, Error("Editor type has no corresponding license type for file creation upgrade flow"), {
                    extra: {
                      editorType: t,
                      fileCreationOptionState: r
                    }
                  });
                  n(VisualBellActions.enqueue({
                    message: getI18nString("general.an_error_occurred"),
                    error: !0
                  }));
                  return;
                }
                s({
                  afterUpgradeCallback: a,
                  licenseType: o,
                  upgradeReason: _$$i.CREATE_FILE,
                  entryPoint: tc.CREATE_FILE_PROJECT_VIEW
                })(e);
              }({
                event: n,
                editorType: e,
                createFile: r,
                dispatch: s,
                fileCreationOptionState: t,
                handleUpgradeBuilder: a
              });
            default:
              throwTypeError(t);
          }
        }({
          fileCreationOptionState: l,
          createFile: a({
            editorType: e,
            contextClicked: t
          }),
          handleUpgradeBuilder: handleUpgrade,
          editorType: e,
          dispatch: r
        });
        let c = function ({
          editorType: e,
          fileCreationOptionState: t,
          trackingContextProperties: r
        }) {
          let a = getProductAccessType(e);
          let s = (() => {
            switch (t) {
              case m.CAN_CREATE:
              case m.CANNOT_CREATE:
              case m.UPGRADE_PENDING:
                return !1;
              case m.CAN_AUTO_UPGRADE:
              case m.CAN_REQUEST_UPGRADE:
                return !0;
              default:
                throwTypeError(t);
            }
          })();
          return {
            ...r,
            trackingDescriptor: _$$c.CREATE_FILE,
            licenseType: a,
            billableProductKey: a && F2(a),
            needsUpgrade: s
          };
        }({
          editorType: e,
          fileCreationOptionState: l,
          trackingContextProperties: properties
        });
        return e => {
          Cu(c);
          d(e);
        };
      }, [a, properties, r, handleUpgrade]);
    }({
      lgFolder: t,
      newFileFrom: e
    });
    return {
      newFiles: r.map(({
        editorType: e,
        fileCreationOptionState: t,
        isDisabled: r
      }) => _$$p({
        editorType: e,
        isDisabled: r,
        isLoading: !1,
        showRequestLabel: t === m.CAN_REQUEST_UPGRADE,
        showRequestSentLabel: t === m.UPGRADE_PENDING,
        onClick: s({
          editorType: e,
          contextClicked: V(e),
          fileCreationOptionState: t
        })
      })),
      import: ud(t) ? _$$u({
        isLoading: !1,
        dispatch: a
      }) : null
    };
  }({
    lgFolder: e,
    newFileFrom: t,
    fileCreationOptions: r
  });
  let A = r.filter(e => e.fileCreationOptionState === m.CAN_REQUEST_UPGRADE).map(e => getProductAccessType(e.editorType)).filter(Boolean).sort().join(",");
  return jsx(_$$a, {
    menuItems: R,
    trackingProperties: {
      requestableLicenseTypes: A,
      hasRequestableLicenses: !!A
    }
  });
}
export const FolderPageViewOmnicreateDropdown = $$R0;