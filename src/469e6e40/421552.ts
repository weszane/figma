import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useId, useState, useMemo, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { sortByPropertyWithOptions, sortBySelectors } from "../figma_app/656233";
import { k as _$$k } from "../905/443820";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription, Xr } from "../figma_app/27355";
import { getResourceDataOrFallback } from "../905/419236";
import { Rs } from "../figma_app/288654";
import { tT } from "../905/723791";
import { P as _$$P } from "../905/347284";
import { y2 } from "../figma_app/563413";
import { V as _$$V } from "../figma_app/385855";
import { F as _$$F, y as _$$y } from "../905/171275";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { F as _$$F2 } from "../905/302958";
import { Y as _$$Y, M as _$$M } from "../905/830372";
import { In } from "../905/672640";
import { E as _$$E } from "../905/984674";
import { p as _$$p } from "../905/597320";
import { b as _$$b } from "../905/168239";
import { m as _$$m } from "../469e6e40/248185";
import { K as _$$K } from "../905/628118";
import { popModalStack, showModalHandler } from "../905/156213";
import { cX } from "../figma_app/12491";
import { S0 } from "../905/863795";
import { E as _$$E2 } from "../905/511388";
import { dq, sZ } from "../905/845253";
import { NJ } from "../figma_app/518077";
import { E as _$$E3 } from "../905/128063";
import { efs, X2v, R1$, sNP, eci, IhX, EE2 } from "../figma_app/43951";
import { Oe } from "../figma_app/336853";
import { Ef } from "../905/81982";
import { Nf, xA } from "../figma_app/633080";
import { O as _$$O } from "../figma_app/809387";
import { J7, _d } from "../figma_app/650409";
import { m2 } from "../figma_app/858344";
import { qq, TG } from "../905/72677";
import { Hj, A3, tD, FO } from "../905/682977";
import { fP, mc } from "../905/691059";
import { K as _$$K2 } from "../905/443068";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { S as _$$S2 } from "../905/711470";
import { A as _$$A } from "../905/251970";
import { $z } from "../figma_app/617427";
import { parsePxInt } from "../figma_app/783094";
import { l as _$$l } from "../905/745972";
import { CY } from "../figma_app/637027";
import { _ as _$$_, S as _$$S3 } from "../figma_app/490799";
import { qc } from "../figma_app/858013";
import { B as _$$B } from "../905/714743";
import { $ as _$$$ } from "../905/383708";
import { fu } from "../figma_app/831799";
import { wJ } from "../figma_app/630951";
import { iZ } from "../905/372672";
import { Y as _$$Y2 } from "../905/465068";
import { registerModal } from "../905/102752";
import { OJ } from "../905/519092";
import { X as _$$X, U as _$$U } from "../905/77000";
import { Y as _$$Y3 } from "../905/806400";
import { l as _$$l2 } from "../905/716947";
import { h1 } from "../905/986103";
import { jN } from "../905/612685";
import { FPlanNameType, FMemberRoleType } from "../figma_app/191312";
import { No, H3, T5, px, j_, A8 } from "../figma_app/465071";
import { az } from "../figma_app/805373";
import { A as _$$A2 } from "../6828/555288";
import { Xs, gi, Ti } from "../469e6e40/412963";
import ek from "classnames";
import { tT as _$$tT } from "../905/663269";
import { a as _$$a } from "../905/925868";
import { z as _$$z, Z as _$$Z } from "../905/306088";
import { X as _$$X2 } from "../905/376628";
import { PP, Sn, oA as _$$oA } from "../figma_app/430563";
import { Ho } from "../figma_app/236178";
import { T4 } from "../figma_app/646357";
import { Qh } from "../figma_app/155728";
import { j as _$$j } from "../905/694231";
import { fM } from "../figma_app/214643";
import { l as _$$l3 } from "../469e6e40/774192";
import { s as _$$s2 } from "../905/573154";
import { XF, wZ, CA } from "../figma_app/777207";
import { M4, gY } from "../905/713695";
import { WB } from "../905/761735";
import { g as _$$g } from "../905/880308";
import { XHR } from "../905/910117";
import { tgj } from "../figma_app/27776";
import { A as _$$A3 } from "../b2835def/491732";
function X(e) {
  let {
    filters,
    addToConnectedProjectsFilter,
    enabledFilterIds,
    onChange
  } = e;
  let l = useId();
  let o = useId();
  let [d, c] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps
  } = fP({
    isOpen: d,
    onOpenChange: c,
    type: "dialog",
    placement: "bottom-end",
    softDismiss: !0
  });
  let p = (e, t) => {
    let a = new Set([...enabledFilterIds]);
    t ? a.add(e) : a.$$delete(e);
    onChange(a);
  };
  return jsxs("div", {
    className: "x78zum5 xl56j7k x6s0dn4",
    children: [jsx($z, {
      variant: "secondary",
      iconPrefix: jsx(_$$S2, {}),
      ...getTriggerProps(),
      children: jsxs(_$$Y, {
        horizontalAlignItems: "space-between",
        children: [jsx(_$$E, {
          children: renderI18nText("resources_tab.libraries.filters")
        }), enabledFilterIds.size > 0 && jsx(_$$Y, {
          backgroundColor: "selected",
          cornerRadius: 2,
          padding: {
            left: 4,
            right: 4
          },
          children: jsx(_$$E, {
            color: "brand",
            fontWeight: "semi-bold",
            children: renderI18nText("resources_tab.libraries.filters_applied", {
              numActiveFilters: enabledFilterIds.size
            })
          })
        })]
      })
    }), jsx(mc, {
      ...getContainerProps({
        style: {
          boxShadow: "var(--elevation-500)",
          borderRadius: "var(--radius-medium)",
          width: "400px",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          fontFamily: "var(--text-body-medium-font-family, Inter)",
          fontSize: "var(--text-body-medium-font-size, 11px)",
          lineHeight: "var(--text-body-medium-line-height, 16px)"
        }
      }),
      children: jsxs(_$$Y, {
        direction: "vertical",
        backgroundColor: "default",
        cornerRadius: 2,
        spacing: 0,
        children: [jsxs(_$$Y, {
          horizontalAlignItems: "space-between",
          strokeWidth: {
            bottom: 1
          },
          strokeColor: "default",
          height: 40,
          padding: {
            left: 16,
            right: 4
          },
          children: [jsx(_$$E, {
            fontWeight: "semi-bold",
            children: renderI18nText("resources_tab.libraries.filters")
          }), jsxs("div", {
            className: "x78zum5 x6s0dn4",
            children: [enabledFilterIds.size > 0 && jsx($z, {
              variant: "ghost",
              onClick: () => {
                onChange(new Set());
                c(!1);
              },
              children: jsx(_$$E, {
                color: "brand",
                children: renderI18nText("resources_tab.libraries.clear_all")
              })
            }), jsx(_$$K2, {
              onClick: () => c(!d),
              "aria-label": getI18nString("general.close"),
              children: jsx(_$$A, {})
            })]
          })]
        }), jsx(_$$P, {
          className: "xh8yej3 x6bct43",
          children: jsxs(_$$Y, {
            direction: "vertical",
            spacing: 0,
            children: [addToConnectedProjectsFilter && jsxs(_$$Y, {
              direction: "vertical",
              spacing: 8,
              padding: {
                top: 8,
                left: 16,
                right: 16,
                bottom: 8
              },
              children: [jsx("h3", {
                id: l,
                children: jsx(_$$E, {
                  fontWeight: "semi-bold",
                  children: getI18nString("resources_tab.libraries.shared_in")
                })
              }), jsx("fieldset", {
                "aria-labelledby": l,
                children: jsx(Checkbox, {
                  checked: enabledFilterIds.has($$tp0),
                  label: jsx(Label, {
                    children: jsx(_$$E, {
                      fontWeight: "semi-bold",
                      children: getI18nString("resources_tab.libraries.connected_projects")
                    })
                  }),
                  onChange: e => p($$tp0, e)
                }, $$tp0)
              })]
            }), jsxs(_$$Y, {
              direction: "vertical",
              spacing: 8,
              padding: {
                top: 8,
                left: 16,
                right: 16,
                bottom: 16
              },
              children: [jsx("h3", {
                id: o,
                children: jsx(_$$E, {
                  fontWeight: "semi-bold",
                  children: renderI18nText("resources_tab.libraries.added_by_default")
                })
              }), jsx("fieldset", {
                "aria-labelledby": o,
                children: filters.map(e => jsx(Checkbox, {
                  label: jsx(Label, {
                    children: jsx(_$$E, {
                      children: e.name
                    })
                  }),
                  onChange: t => p(e.id, t),
                  checked: enabledFilterIds.has(e.id)
                }, e.id))
              })]
            })]
          })
        })]
      })
    })]
  });
}
let ev = atom(void 0);
function ej({
  label: e,
  children: t
}) {
  return jsxs(_$$Y, {
    direction: "vertical",
    height: "hug-contents",
    spacing: 0,
    children: [jsx(_$$E, {
      color: "secondary",
      children: e
    }), t]
  });
}
let ey = function ({
  libraryData: e,
  orgData: t
}) {
  let a = useSelector(e => e.user?.id);
  let r = e.updatedAt;
  let l = "file" === e.type ? e.repoOwner : void 0;
  let o = "file" === e.type ? e.owner ?? l : void 0;
  let c = "community" === e.type ? e.profile : void 0;
  let _ = e.approvedLibraries ?? [];
  let u = useAtomWithSubscription(ev);
  let m = No().unwrapOr(null);
  let p = m?.tier === FPlanNameType.ENTERPRISE;
  let v = H3(m);
  let f = p && !!u && _.some(e => e.resourceType === _$$Y3.Workspace && e.resourceId === u);
  let y = p && v && _.some(e => e.resourceType === _$$Y3.Org && e.resourceId === v);
  let k = t.workspaces?.find(e => e.id === u)?.name;
  let E = useAtomWithSubscription(qq);
  let C = useMemo(() => "community" === e.type && E.has(_$$l2(e.hubFileId)), [e, E]);
  return jsxs(_$$Y, {
    direction: "vertical",
    width: 180,
    spacing: 16,
    children: [jsx(_$$Y, {
      height: 120,
      children: jsx(_$$V, {
        thumbnailUrl: e.thumbnailUrl,
        thumbnailType: _$$F.DEFAULT_DESIGN,
        borderRadius: 4,
        noBorder: !0
      })
    }), jsx(ej, {
      label: getI18nString("resources_tab.libraries.library_name"),
      children: jsxs("span", {
        className: _$$s.maxWFull.overflowBreakWord.alignTop.$,
        "data-testid": "library-info-library-name",
        children: [e.name, (f || y) && jsx("div", {
          className: _$$s.inlineBlock.ml4.$,
          children: jsx(cX, {
            orgNameForTooltip: y ? t.name : void 0,
            workspaceNameForTooltip: f ? k : void 0
          })
        }), C && jsx("div", {
          className: _$$s.inlineBlock.ml4.$,
          children: jsx(_$$E2, {
            libraryKey: e.libraryKey,
            showTooltip: !0,
            redirectToHubFile: !0
          })
        })]
      })
    }), r && jsx(ej, {
      label: getI18nString("resources_tab.libraries.last_published"),
      children: jsx(h1, {
        date: r
      })
    }), jsx(ej, {
      label: getI18nString("resources_tab.libraries.library_owner"),
      children: jsxs("div", {
        className: _$$s.pt2.wFull.$,
        children: [o && jsx(az, {
          includeUserEmailAddress: !0,
          size: 24,
          entity: {
            imageUrl: o.imgUrl,
            name: o.name ?? void 0,
            email: o.email ?? void 0
          },
          showIsMe: o.id === a
        }), c && jsx(az, {
          size: 24,
          entity: {
            imageUrl: c.imgUrl ?? void 0,
            name: c.name ?? void 0,
            email: c.supportContact ?? void 0
          },
          includeUserEmailAddress: !!c.supportContact
        }), !o && !c && jsx(_$$E, {
          children: renderI18nText("resources_tab.libraries.file_has_no_owner")
        })]
      })
    }), "file" === e.type && jsx("a", {
      className: _$$s.cursorPointer.colorTextBrand.$,
      href: jN({
        file: {
          key: e.fileKey,
          name: e.name
        }
      }),
      target: "_blank",
      children: jsxs(_$$Y, {
        spacing: 4,
        children: [jsx(_$$E, {
          children: renderI18nText("resources_tab.libraries.open_library_file")
        }), jsx(_$$B, {
          svg: _$$A2,
          className: _$$s.colorIconBrand.$
        })]
      })
    })]
  });
};
var eE = ek;
function eG({
  request: e,
  fileKey: t,
  libraryKey: a,
  resourceId: n,
  resourceType: s
}) {
  let i = `optimistic-approved-library-create-${_$$g()}`;
  return WB()?.optimisticallyCreate({
    ApprovedLibrary: {
      [i]: {
        fileKey: t,
        libraryKey: a,
        resourceId: n,
        resourceType: s
      }
    }
  }, e);
}
function ez({
  request: e,
  approvedLibraryId: t
}) {
  return WB()?.optimisticallyDelete({
    ApprovedLibrary: {
      [t]: null
    }
  }, e);
}
let eV = new class {
  constructor() {
    this.createWorkspaceApprovedLibrary = ({
      workspaceId: e,
      fileKey: t,
      libraryKey: a,
      onfulfilled: n,
      onrejected: s
    }) => eG({
      request: XHR.post(`/api/workspace_approved_library/${t}`, {
        workspace_id: e
      }).then(n, s),
      fileKey: t,
      libraryKey: a,
      resourceId: e,
      resourceType: _$$Y3.Workspace
    });
    this.deleteWorkspaceApprovedLibrary = ({
      approvedLibraryId: e,
      workspaceId: t,
      fileKey: a,
      onfulfilled: n,
      onrejected: s
    }) => ez({
      request: XHR.del(`/api/workspace_approved_library/${a}`, {
        workspace_id: t
      }).then(n, s),
      approvedLibraryId: e
    });
    this.createOrgApprovedLibrary = ({
      orgId: e,
      fileKey: t,
      libraryKey: a,
      onfulfilled: n,
      onrejected: s
    }) => eG({
      request: XHR.post(`/api/org_approved_library/${t}`, {
        org_id: e
      }).then(n, s),
      fileKey: t,
      libraryKey: a,
      resourceId: e,
      resourceType: _$$Y3.Org
    });
    this.deleteOrgApprovedLibrary = ({
      approvedLibraryId: e,
      orgId: t,
      fileKey: a,
      onfulfilled: n,
      onrejected: s
    }) => ez({
      request: XHR.del(`/api/org_approved_library/${a}`, {
        org_id: t
      }).then(n, s),
      approvedLibraryId: e
    });
  }
}();
let eW = M4.Mutation(async e => {
  await eV.createOrgApprovedLibrary(e);
});
let eH = M4.Mutation(async e => {
  await eV.deleteOrgApprovedLibrary(e);
});
function eY({
  library: e,
  org: t
}) {
  let a = useDispatch();
  let r = gY(eW);
  let l = gY(eH);
  let [o, d] = useState(!1);
  let [c, _] = useState(!1);
  let u = e.approvedLibraries ?? [];
  let m = XF(u, t.id);
  let p = null != m;
  let g = p && !c ? wZ({
    orgName: t.name
  }) : {};
  let h = {
    libraryName: e.name,
    resourceName: t.name
  };
  return jsxs(_$$Y, {
    direction: "horizontal",
    width: "fill-parent",
    height: "hug-contents",
    verticalAlignItems: "start",
    padding: {
      bottom: 4
    },
    children: [jsx("div", {
      className: _$$s.minW0.wFull.fontMedium.$,
      children: jsx(_$$Y, {
        direction: "vertical",
        height: "hug-contents",
        width: "fill-parent",
        spacing: 0,
        children: renderI18nText("resources_tab.approved_libraries.set_as_approved")
      })
    }), jsx("div", {
      ...g,
      children: jsx(_$$l3, {
        disabled: o,
        on: p,
        onChange: p ? () => {
          m && "file" === e.type && (d(!0), _(!0), l({
            approvedLibraryId: m.id,
            orgId: t.id,
            fileKey: e.fileKey,
            onfulfilled: () => {
              d(!1);
              a(_$$F2.enqueue({
                message: getI18nString("resources_tab.approved_libraries_toggle.unmark_as_approved_success", h)
              }));
            },
            onrejected: () => {
              d(!1);
              let e = getI18nString("resources_tab.approved_libraries_toggle.unmark_as_approved_error", h);
              a(_$$s2.error(e));
              console.error(e);
            }
          }));
        } : () => {
          "file" === e.type && (d(!0), _(!0), r({
            orgId: t.id,
            fileKey: e.fileKey,
            libraryKey: e.libraryKey,
            onfulfilled: () => {
              d(!1);
              a(_$$F2.enqueue({
                message: getI18nString("resources_tab.approved_libraries_toggle.mark_as_approved_success", h)
              }));
            },
            onrejected: () => {
              d(!1);
              let e = getI18nString("resources_tab.approved_libraries_toggle.mark_as_approved_error", h);
              a(_$$s2.error(e));
              console.error(e);
            }
          }));
        }
      })
    })]
  });
}
let eJ = M4.Mutation(async e => {
  await eV.createWorkspaceApprovedLibrary(e);
});
let eK = M4.Mutation(async e => {
  await eV.deleteWorkspaceApprovedLibrary(e);
});
function eX({
  library: e,
  workspaceId: t,
  workspaceName: a
}) {
  let r = useDispatch();
  let l = dq();
  let o = T5("WorkspaceApprovedLibrarySetting").unwrapOr(null);
  let d = o?.tier === FPlanNameType.ENTERPRISE;
  let c = o?.name;
  let _ = gY(eJ);
  let u = gY(eK);
  let [m, p] = useState(!1);
  let [g, h] = useState(!1);
  let v = e.approvedLibraries ?? [];
  let y = CA(v, t);
  let w = XF(v, l ?? null);
  let k = null != y;
  let E = d && null != w;
  let C = E ? {
    ...wZ({
      orgName: c
    }),
    "data-tooltip-is-workspace-toggle-disabled": E
  } : k && !g ? wZ({
    workspaceName: a
  }) : {};
  let S = {
    libraryName: e.name,
    resourceName: a
  };
  return jsxs(_$$Y, {
    direction: "horizontal",
    width: "fill-parent",
    height: "hug-contents",
    verticalAlignItems: "start",
    padding: {
      bottom: 4
    },
    children: [jsx("div", {
      className: _$$s.minW0.wFull.fontMedium.$,
      children: jsx(_$$Y, {
        direction: "vertical",
        height: "hug-contents",
        width: "fill-parent",
        spacing: 0,
        children: renderI18nText("resources_tab.approved_libraries.set_as_approved")
      })
    }), jsx("div", {
      ...C,
      children: jsx(_$$l3, {
        disabled: m || E,
        on: k || E,
        onChange: k ? () => {
          y && "file" === e.type && (p(!0), h(!0), u({
            approvedLibraryId: y.id,
            workspaceId: t,
            fileKey: e.fileKey,
            onfulfilled: () => {
              p(!1);
              r(_$$F2.enqueue({
                message: getI18nString("resources_tab.approved_libraries_toggle.unmark_as_approved_success", S)
              }));
            },
            onrejected: () => {
              p(!1);
              let e = getI18nString("resources_tab.approved_libraries_toggle.unmark_as_approved_error", S);
              r(_$$s2.error(e));
              console.error(e);
            }
          }));
        } : () => {
          "file" === e.type && (p(!0), h(!0), _({
            workspaceId: t,
            fileKey: e.fileKey,
            libraryKey: e.libraryKey,
            onfulfilled: () => {
              p(!1);
              r(_$$F2.enqueue({
                message: getI18nString("resources_tab.approved_libraries_toggle.mark_as_approved_success", S)
              }));
            },
            onrejected: () => {
              p(!1);
              let e = getI18nString("resources_tab.approved_libraries_toggle.mark_as_approved_error", S);
              r(_$$s2.error(e));
              console.error(e);
            }
          }));
        }
      })
    })]
  });
}
var eQ = (e => (e.OFF = "OFF", e.DESIGN_FILES = "DESIGN_FILES", e))(eQ || {});
let eZ = ["OFF", "DESIGN_FILES"];
var e0 = (e => (e.DESIGN_FILES = "DESIGN_FILES", e.FIGJAM_FILES = "FIGJAM_FILES", e.SLIDES_FILES = "SLIDES_FILES", e.BUZZ_FILES = "BUZZ_FILES", e))(e0 || {});
let e1 = ["DESIGN_FILES", "FIGJAM_FILES", "SLIDES_FILES"];
let e2 = () => getFeatureFlags().buzz_library_subscriptions ? [...e1, "BUZZ_FILES"] : e1;
let e4 = {
  OFF: "visibility-off-radio",
  DESIGN_FILES: "visibility-design-radio"
};
let e5 = "visibility-checkbox";
let e3 = e => {
  if (e) {
    let {
      isSubscribed
    } = e;
    if (isSubscribed) return "DESIGN_FILES";
  }
  return "OFF";
};
let e8 = e => {
  switch (e) {
    case "DESIGN_FILES":
      return getI18nString("resources_tab.libraries.subscription.design_files");
    case "OFF":
      return getI18nString("resources_tab.libraries.subscription.off");
  }
};
let e6 = e => {
  switch (e) {
    case "DESIGN_FILES":
      return getI18nString("resources_tab.libraries.subscription.design_files");
    case "FIGJAM_FILES":
      return getI18nString("resources_tab.libraries.subscription.figjam_files");
    case "SLIDES_FILES":
      return getI18nString("resources_tab.libraries.subscription.slides_files");
    case "BUZZ_FILES":
      return getI18nString("resources_tab.libraries.subscription.buzz_files");
  }
};
let e7 = e => {
  if (!e) return getI18nString("resources_tab.libraries.subscription.off");
  let t = e.slidesSubscribed.status === tT.Loaded && !!e.slidesSubscribed.data;
  let a = getFeatureFlags().buzz_library_subscriptions;
  let n = e.buzzSubscribed.status === tT.Loaded && !!e.buzzSubscribed.data;
  return e.isSubscribed && e.figJamSubscribed && t && (!a || n) ? getI18nString("resources_tab.libraries.subscription.all_files") : e.isSubscribed || e.figJamSubscribed || t || a && n ? !e.isSubscribed || e.figJamSubscribed || t || a && n ? e.isSubscribed || !e.figJamSubscribed || t || a && n ? e.isSubscribed || e.figJamSubscribed || !t || a && n ? e.isSubscribed || e.figJamSubscribed || t || !a || !n ? getI18nString("resources_tab.libraries.subscription.custom") : getI18nString("resources_tab.libraries.subscription.buzz_files") : getI18nString("resources_tab.libraries.subscription.slides_files") : getI18nString("resources_tab.libraries.subscription.figjam_files") : getI18nString("resources_tab.libraries.subscription.design_files") : getI18nString("resources_tab.libraries.subscription.off");
};
function e9({
  libraryData: e,
  orgData: t,
  selectedWorkspaceId: a
}) {
  let r = useDispatch();
  let l = "community" !== e.type;
  let o = useMemo(() => {
    if (!a) return {
      ...t,
      type: _$$Y3.Org
    };
    let e = t.workspaces?.find(e => e.id === a);
    return e && {
      ...e,
      type: _$$Y3.Workspace
    };
  }, [t, a]);
  let d = Xs(e);
  let c = Rs(efs, {
    fileKey: d
  }, {
    enabled: "file" === e.type
  });
  let m = Rs(X2v, {
    hubFileId: d
  }, {
    enabled: "community" === e.type
  });
  let p = useMemo(() => "file" === e.type ? c?.data?.file?.variableCollections : m.data?.communityLibraryByHubFileId?.variableCollections, [e.type, c.data?.file, m.data?.communityLibraryByHubFileId]);
  let g = sZ();
  let [h, v] = useState({});
  let [f, y] = useState(!1);
  let [k, E] = useState(null);
  let [C, S] = useState(!1);
  let [N, I] = useState(null);
  let [T, A] = useState(null);
  let O = Oe(g);
  let L = function (e, t, a, n) {
    let i = px();
    let r = j_(i).unwrapOr(!1);
    let l = Oe(t);
    let o = Ho(n.libraryKey);
    return useCallback(t => {
      if ("file" !== n.type || e?.type !== _$$Y3.Workspace || !l || !o || r || t.design && t.figjam && t.slides && t.buzz) return !1;
      let s = a.librarySubscription;
      if (!s || null === s.isSubscribed && null === s.figJamSubscribed && null === s.slidesSubscribed && null === s.buzzSubscribed) return !1;
      let i = {
        design: s.isSubscribed,
        figjam: s.figJamSubscribed,
        slides: s.slidesSubscribed.status === tT.Loaded ? s.slidesSubscribed.data : null,
        buzz: s.buzzSubscribed.status === tT.Loaded ? s.buzzSubscribed.data : null,
        subscriptionType: Qh.TEAM
      };
      let d = {
        designSubscribed: t.design,
        figjamSubscribed: t.figjam,
        slidesSubscribed: t.slides,
        buzzSubscribed: t.buzz,
        subscriptionType: Qh.TEAM
      };
      return T4(i, d);
    }, [l, r, o, n, a, e]);
  }(o, g, t, e);
  if (useEffect(() => {
    k !== a && (y(!1), E(a), a && _$$j.getDefaultModes({
      libraryKey: e.libraryKey,
      entityType: "workspace",
      entityId: a
    }).then(e => {
      v(e.data.meta);
      y(!0);
    }));
  }, [k, a, e, c, m]), !o) return jsx(Fragment, {});
  let P = O && a && "file" === e.type;
  let U = !a;
  let F = !!a && null === o.librarySubscription;
  let q = F ? t.librarySubscription : o.librarySubscription;
  let $ = e3(q);
  let B = e => {
    switch (e) {
      case "DESIGN_FILES":
        return !!q?.isSubscribed;
      case "FIGJAM_FILES":
        return !!q?.figJamSubscribed;
      case "SLIDES_FILES":
        return q?.slidesSubscribed?.status === tT.Loaded && !!q?.slidesSubscribed?.data;
      case "BUZZ_FILES":
        return q?.buzzSubscribed?.status === tT.Loaded && !!q?.buzzSubscribed?.data;
    }
  };
  let G = n => {
    let s = q?.slidesSubscribed.status === tT.Loaded && !!q?.slidesSubscribed.data;
    let i = q?.buzzSubscribed.status === tT.Loaded && !!q?.buzzSubscribed.data;
    let l = {
      design: "DESIGN_FILES" === n ? !q?.isSubscribed : !!q?.isSubscribed,
      figjam: "FIGJAM_FILES" === n ? !q?.figJamSubscribed : !!q?.figJamSubscribed,
      slides: "SLIDES_FILES" === n ? !s : s,
      buzz: "BUZZ_FILES" === n ? !i : i
    };
    a ? L(l) ? (S(!0), I(e5), A(l)) : r(PP({
      libraryWorkspaceSubscription: {
        id: o.librarySubscription.id,
        workspaceId: a,
        libraryKey: e.libraryKey,
        subscriptions: l
      },
      libraryName: e.name,
      workspaceName: o.name
    })) : r(Sn({
      libraryOrgSubscription: {
        orgId: t.id,
        libraryKey: e.libraryKey,
        subscriptions: l
      },
      userInitiated: !0,
      libraryName: e.name,
      orgName: t.name,
      libraryTeamId: "file" === e.type ? e.teamId ?? null : null,
      currentSubscription: {
        design: !!o.librarySubscription?.isSubscribed,
        figjam: !!o.librarySubscription?.figJamSubscribed,
        slides: !!(o.librarySubscription?.slidesSubscribed?.status === tT.Loaded && o.librarySubscription?.slidesSubscribed?.data),
        buzz: !!(o.librarySubscription?.buzzSubscribed?.status === tT.Loaded && o.librarySubscription?.buzzSubscribed?.data)
      }
    }));
  };
  return jsxs(_$$Y, {
    direction: "vertical",
    padding: 16,
    children: [!O && jsx(_$$E, {
      fontWeight: "medium",
      truncate: "line-clamp",
      lineClamp: 2,
      children: renderI18nText("resources_tab.libraries.manage_library_for", {
        orgOrWorkspaceName: o.name
      })
    }), O && U && "file" === e.type && jsxs(Fragment, {
      children: [jsx(eY, {
        library: e,
        org: t
      }), jsx(te, {})]
    }), a && jsxs(Fragment, {
      children: [P && a && jsxs(Fragment, {
        children: [jsx(eX, {
          library: e,
          workspaceId: a,
          workspaceName: o.name
        }), jsx(te, {})]
      }), C && a && N && "file" === e.type && jsx(_$$X2, {
        isShowing: !0,
        onCancel: () => S(!1),
        onConfirm: () => {
          T && (r(PP({
            libraryWorkspaceSubscription: {
              workspaceId: a,
              libraryKey: e.libraryKey,
              subscriptions: T
            },
            libraryName: e.name,
            workspaceName: o.name
          })), S(!1), A(null), I(null));
        },
        targetKey: N,
        libraryKey: e.libraryKey
      }), jsxs(_$$Y, {
        direction: "horizontal",
        width: "fill-parent",
        height: "hug-contents",
        verticalAlignItems: "start",
        padding: {
          vertical: P ? 4 : 8
        },
        children: [jsx("div", {
          className: _$$s.minW0.wFull.$,
          children: jsxs(_$$Y, {
            direction: "vertical",
            height: "hug-contents",
            width: "fill-parent",
            spacing: 0,
            children: [jsx("div", {
              className: _$$s.inlineFlex.pre.maxWFull.$,
              children: renderI18nText("resources_tab.libraries.use_orgs_setting", {
                orgName: jsx(_$$E, {
                  truncate: !0,
                  children: t.name
                })
              })
            }), jsx(_$$E, {
              color: "secondary",
              children: renderI18nText("resources_tab.libraries.current", {
                setting: l ? e7(t.librarySubscription) : e8(e3(t.librarySubscription))
              })
            })]
          })
        }), jsx("span", {
          "data-onboarding-key": "use-org-setting-toggle",
          children: jsx(_$$l3, {
            on: F,
            onChange: () => {
              a && (o.librarySubscription ? r(_$$oA({
                libraryWorkspaceSubscription: {
                  id: o.librarySubscription.id,
                  workspaceId: a,
                  libraryKey: e.libraryKey
                },
                libraryName: e.name,
                workspaceName: o.name
              })) : r(PP({
                libraryWorkspaceSubscription: {
                  workspaceId: a,
                  libraryKey: e.libraryKey,
                  subscriptions: {
                    design: !1,
                    figjam: !1,
                    slides: !1,
                    buzz: !1
                  }
                },
                libraryName: e.name,
                workspaceName: o.name
              })));
            }
          })
        })]
      }), !P && jsx("div", {
        className: _$$s.bt1.bSolid.colorBorder.wFull.h1.mt8.$
      })]
    }), "community" === e.type && jsx(te, {
      hideLineBreak: !0
    }), l ? jsx("span", {
      "data-onboarding-key": e5,
      className: "library_subscription_settings--checkboxesContainer--emVQ1",
      children: e2().map(e => jsx(Checkbox, {
        checked: B(e),
        onChange: () => G(e),
        disabled: F,
        label: jsx(Label, {
          children: e6(e)
        })
      }, e))
    }) : jsx(_$$z, {
      value: $,
      onChange: n => {
        if (n === $) return;
        let s = {
          design: "DESIGN_FILES" === n,
          figjam: !1,
          slides: !1,
          buzz: !1
        };
        a ? r(PP({
          libraryWorkspaceSubscription: {
            id: o.librarySubscription.id,
            workspaceId: a,
            libraryKey: e.libraryKey,
            subscriptions: s
          },
          libraryName: e.name,
          workspaceName: o.name
        })) : r(Sn({
          libraryOrgSubscription: {
            orgId: t.id,
            libraryKey: e.libraryKey,
            subscriptions: s
          },
          userInitiated: !0,
          libraryName: e.name,
          orgName: t.name,
          libraryTeamId: "file" === e.type ? e.teamId ?? null : null,
          currentSubscription: {
            design: !!o.librarySubscription?.isSubscribed,
            figjam: !!o.librarySubscription?.figJamSubscribed,
            slides: !!(o.librarySubscription?.slidesSubscribed.status === tT.Loaded ? o.librarySubscription?.slidesSubscribed.data : void 0),
            buzz: !!(o.librarySubscription?.buzzSubscribed.status === tT.Loaded ? o.librarySubscription?.buzzSubscribed.data : void 0)
          }
        }));
      },
      children: eZ.map(e => jsx(_$$Z, {
        dataOnboardingKey: e4[e],
        value: e,
        disabled: F,
        className: _$$s.mt8.mb8.h16.$$if(F, _$$s.opacity0_5).$,
        labelClassName: _$$s.font11.$,
        children: e8(e)
      }, e))
    }), a && (p?.length ?? 0) > 0 && jsxs(Fragment, {
      children: [jsx("div", {
        className: _$$s.bt1.bSolid.colorBorder.wFull.h1.mt16.$
      }), jsx(_$$E, {
        fontWeight: "medium",
        truncate: "line-clamp",
        lineClamp: 2,
        children: renderI18nText("resources_tab.libraries.default_modes")
      }), f ? p?.map(t => t.modes && t.modes.length > 1 && a && jsxs(_$$Y, {
        width: "fill-parent",
        height: "hug-contents",
        spacing: 16,
        verticalAlignItems: "center",
        children: [jsx("span", {
          className: "library_subscription_settings--name--fFnMw",
          children: t.name
        }), jsx(fM, {
          variableSet: t,
          modeDropdownStyle: "library_subscription_settings--modeDropdown--ZlLW6",
          libraryKey: e.libraryKey,
          entity: {
            entityType: "workspace",
            entityId: a
          },
          defaultModeId: h[t.key],
          isLibraryFileEnabled: "OFF" !== $
        })]
      }, t.id)) : jsx(qc, {})]
    })]
  });
}
function te({
  hideLineBreak: e
}) {
  return jsxs(Fragment, {
    children: [!e && jsx("div", {
      className: _$$s.bb1.bSolid.colorBorder.wFull.h1.mt8.mb8.$
    }), jsx(_$$E, {
      fontWeight: "medium",
      truncate: "line-clamp",
      lineClamp: 2,
      children: renderI18nText("resources_tab.libraries.visibility_settings")
    })]
  });
}
let tt = _$$s.lh32.h32.pl16.wFull.cursorDefault;
function ta({
  content: e
}) {
  let [t, a] = useState(!1);
  return jsxs(Fragment, {
    children: [jsx(_$$a, {
      onIntersectionChange: e => {
        a(!e.isIntersecting);
      }
    }), jsx("div", {
      className: tt.sticky.top0.colorBg.zIndex1.pt8.bRadius4.$$if(t, _$$s.bb1.bSolid.colorBorder).$,
      children: jsx(_$$E, {
        fontWeight: "medium",
        children: e
      })
    })]
  });
}
function tn({
  text: e,
  subscribed: t,
  selected: a,
  onClick: s
}) {
  return jsx("div", {
    onClick: s,
    className: eE()(tt.borderBox.$, a ? _$$s.colorBgSelected.$ : "library_subscription_settings--rowHover--VPDsJ"),
    role: "link",
    tabIndex: 0,
    children: jsxs(_$$Y, {
      width: "fill-parent",
      spacing: 0,
      children: [jsx(_$$E, {
        truncate: !0,
        children: e
      }), jsx(_$$M, {
        minSize: 4
      }), t && jsx(_$$E, {
        color: "success",
        children: renderI18nText("resources_tab.libraries.on")
      }), jsx(In, {
        icon: "chevron-right-32"
      })]
    })
  });
}
let ts = e => !!(e && (e.isSubscribed || e.figJamSubscribed || e.slidesSubscribed.status === _$$tT.Loaded && e.slidesSubscribed.data || e.buzzSubscribed.status === _$$tT.Loaded && e.buzzSubscribed.data));
let ti = (e, t) => e ? ts(e) : ts(t);
let tr = function ({
  libraryData: e,
  orgData: t
}) {
  let [a, i] = useState(null);
  let r = px().unwrapOr(null);
  let l = !!(r && A8(r, FMemberRoleType.ADMIN));
  let o = t.librarySubscription;
  let c = useCallback(e => e.sort((e, t) => {
    let a = ti(e.librarySubscription, o);
    let n = ti(t.librarySubscription, o);
    return a && !n ? -1 : !a && n ? 1 : e.name && t.name && e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1;
  }), [o]);
  let _ = useMemo(() => c((t.workspaces || []).filter(e => e.canAdmin)), [t.workspaces, c]);
  let u = _?.length > 0;
  let p = l && u;
  useEffect(() => {
    u && i(e => l && null === e || _ && _.some(t => t.id === e) ? e : !l && _ && _.length ? _[0].id : null);
  }, [l, t, _, u]);
  let g = Xr(ev);
  useEffect(() => (g(a), () => {
    g(void 0);
  }), [a, g]);
  return jsx("div", {
    className: _$$s.b1.bRadius4.colorBorder.wFull.hFull.minW0.$,
    children: jsxs(_$$Y, {
      spacing: 0,
      height: "fill-parent",
      children: [jsxs(_$$P, {
        className: _$$s.wHalf.hFull.$,
        children: [l && jsxs(Fragment, {
          children: [jsx(ta, {
            content: getI18nString("resources_tab.libraries.organization")
          }), jsx(tn, {
            text: t.name,
            subscribed: ts(o),
            selected: !a,
            onClick: () => {
              i(null);
            }
          })]
        }), p && jsx(_$$Y, {
          padding: {
            left: 16,
            right: 16,
            top: 8
          },
          children: jsx("div", {
            className: _$$s.bt1.bSolid.colorBorder.wFull.h1.$
          })
        }), u && jsxs(_$$Y, {
          direction: "vertical",
          spacing: 0,
          children: [jsx(ta, {
            content: getI18nString("resources_tab.libraries.workspaces")
          }), _.map(e => e.name && jsx(tn, {
            text: e.name,
            selected: !!a && a === e.id,
            subscribed: ti(e.librarySubscription, o),
            onClick: () => i(e.id)
          }, e.id))]
        })]
      }), jsx("div", {
        className: _$$s.wHalf.hFull.bl1.colorBorder.bSolid.$,
        children: (l || a) && jsx(_$$P, {
          className: _$$s.wFull.hFull.$,
          children: jsx(e9, {
            libraryData: e,
            orgData: t,
            selectedWorkspaceId: a
          })
        })
      })]
    })
  });
};
let td = registerModal(function ({
  libraryResourceId: e
}) {
  let t = useDispatch();
  let a = iZ();
  let r = useSelector(e => e.currentUserOrgId);
  let l = _$$l();
  let o = wJ(e);
  let d = Rs(R1$, {
    fileKey: e,
    orgId: r
  }, {
    enabled: !o
  });
  let c = Rs(sNP, {
    hubFileId: e,
    orgId: r
  }, {
    enabled: o
  });
  let u = useMemo(() => o ? c.transform(gi) : d.transform(Ti), [d, c, o]);
  let m = u.data?.library;
  let p = u.data?.org;
  let g = useCallback(() => t(popModalStack()), [t]);
  useEffect(() => {
    "errors" !== u.status && ("loaded" !== u.status || m && p) || (t(_$$F2.enqueue({
      error: !0,
      message: getI18nString("resources_tab.libraries.couldnt_load_library_information")
    })), g());
  }, [g, t, m, p, u.status, o]);
  let h = l.windowInnerWidth <= parsePxInt(tgj);
  let v = m && "file" === m.type && m.permissions && !_$$Y2({
    org_browsable: m.permissions.orgBrowsable,
    link_access: m.permissions.linkAccess
  });
  let y = _$$X(_$$$(e));
  let k = "loaded" === y.status;
  let E = useMemo(() => ({
    userId: a?.id ?? void 0,
    orgId: r ?? void 0,
    libraryResourceId: e
  }), [r, e, a?.id]);
  return jsx(fu, {
    name: "Library Management Modal",
    properties: E,
    children: jsxs(OJ, {
      title: m && h ? m.name : getI18nString("resources_tab.libraries.manage_this_library"),
      maxWidth: 648,
      onClose: g,
      customButton: jsxs(CY, {
        trusted: !0,
        target: "_blank",
        href: "https://help.figma.com/hc/articles/21310245473815",
        className: _$$s.flex.itemsCenter.fontNormal.$,
        children: [jsx(_$$B, {
          className: _$$s.colorIconBrand.pr2.$,
          svg: _$$A3
        }), jsx(_$$E, {
          color: "brand",
          children: renderI18nText("general.learn_more")
        })]
      }),
      children: [v && k && !y.data && jsx(_$$_, {
        color: _$$S3.WARNING,
        text: renderI18nText("resources_tab.libraries.changing_permissions_warning_v2", {
          orgName: p?.name
        }),
        dataTestId: "library-management-modal-permissions-warning"
      }), k && y.data && jsx(_$$U, {
        connectedProjects: y.data,
        onRedirect: g
      }), jsx(_$$Y, {
        direction: "vertical",
        spacing: 0,
        children: jsxs(_$$Y, {
          spacing: 16,
          padding: 16,
          verticalAlignItems: "start",
          width: "fill-parent",
          height: 400,
          children: ["loading" === u.status && jsx(qc, {}), "loaded" === u.status && m && p && jsxs(Fragment, {
            children: [!h && jsx(ey, {
              libraryData: m,
              orgData: p
            }), jsx(tr, {
              libraryData: m,
              orgData: p
            })]
          })]
        })
      })]
    })
  });
}, "LibraryManagementModal");
var tc = (e => (e.ORG = "ORG", e.WORKSPACE = "WORKSPACE", e))(tc || {});
var t_ = (e => (e.NAME = "NAME", e.ENABLED_FOR = "ENABLED_FOR", e.COMPONENTS = "COMPONENTS", e.STYLES = "STYLES", e))(t_ || {});
let tu = new Ef([], {
  threshold: .1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: "library_name",
    weight: 1
  }]
});
let tm = "NONE";
let $$tp0 = "ADDED_TO_CONNECTED_PROJECTS";
function tg({
  file: e,
  getLibrarySubscriptions: t,
  libraryIcon: a,
  onClick: s
}) {
  let i = Nf(e) ? e.library_file_key : e.hub_file_id;
  let r = Rs(eci, {
    fileKey: i
  }, {
    enabled: !!i
  });
  return jsx(Hj, {
    useAdminTableStyles: !0,
    className: "libraries_section--tableRowBody--VJ-We libraries_section--tableRow--Y2bLC",
    onClick: s,
    children: jsxs(_$$Y, {
      spacing: 0,
      children: [jsxs(_$$Y, {
        width: "40%",
        padding: {
          right: 16
        },
        spacing: 16,
        children: [jsx(_$$Y, {
          width: 80,
          children: jsx(_$$V, {
            thumbnailUrl: xA(e) ? e.thumbnail_url : "loaded" === r.status ? getResourceDataOrFallback(r.data?.file)?.thumbnailUrl : null,
            thumbnailType: _$$F.DEFAULT_DESIGN,
            borderRadius: 4,
            size: _$$y.SMALL
          })
        }), jsxs("div", {
          className: _$$s.flex.alignCenter.$,
          children: [jsx(_$$E, {
            truncate: !0,
            children: e.library_name
          }), a]
        })]
      }), jsx(_$$Y, {
        width: "30%",
        padding: {
          right: 16
        },
        children: t(i)
      }), jsx(_$$Y, {
        width: "10%",
        horizontalAlignItems: "end",
        children: jsx(_$$E, {
          children: e.num_components
        })
      }), jsx(_$$Y, {
        width: "10%",
        horizontalAlignItems: "end",
        children: jsx(_$$E, {
          children: e.num_styles
        })
      }), jsx(_$$Y, {
        width: "10%",
        horizontalAlignItems: "end",
        children: jsx(In, {
          icon: "chevron-right-32"
        })
      })]
    })
  });
}
let th = {
  totalLibraries: 0,
  totalComponents: 0,
  totalStateGroups: 0,
  totalStyles: 0,
  totalVariableCollections: 0,
  totalVariables: 0,
  totalModuleAssets: 0,
  teamsWithLibraries: 0,
  files: [],
  libraryThumbnailByLibraryKey: {}
};
export function $$tx1(e) {
  let t;
  let {
    org,
    workspaceId,
    libraryStats,
    communityLibraryStats,
    isLoading,
    onRightActionsChange
  } = e;
  let z = libraryStats ?? th;
  let V = useMemo(() => (communityLibraryStats ?? []).map(e => _$$E3(e)), [communityLibraryStats]);
  let W = useMemo(() => (z?.files ?? []).map(e => _$$E3(e)), [z]);
  let H = useDispatch();
  let [Y, J] = useState(new Set(workspaceId ? [workspaceId] : []));
  let [K, Q] = useState("");
  let Z = useAtomWithSubscription(TG);
  let ee = NJ(org.id);
  let et = Rs(IhX, {
    orgId: org.id
  });
  let ea = sZ();
  let en = Oe(ea);
  let es = useAtomWithSubscription(S0);
  let ei = Rs(EE2, {
    workspaceId
  }, {
    enabled: !!workspaceId && en
  });
  let er = new Set();
  ei.data?.workspace.status === tT.Loaded && (t = ei.data.workspace.data?.name, er = new Set((ei.data.workspace.data?.approvedLibraries ?? []).map(e => e.fileKey)));
  useEffect(() => {
    J(new Set(workspaceId ? [workspaceId] : []));
    Q("");
  }, [workspaceId]);
  useEffect(() => {
    ("errors" === et.status || "errors" === ee.status || "loaded" === et.status && null === et.data.org) && H(_$$F2.enqueue({
      error: !0,
      message: getI18nString("resources_tab.libraries.couldnt_load_library_information")
    }));
  }, [et.status, et.data?.org, ee.status, H]);
  let el = et.data?.org?.librarySubscriptions;
  let eo = et.data?.org?.workspaces;
  let ed = useMemo(() => {
    let e = {};
    let t = new Set();
    el?.forEach(n => {
      let s = n.slidesSubscribed?.status === tT.Loaded && n.slidesSubscribed?.data;
      if (!n.isSubscribed && !n.figJamSubscribed && !s) return;
      let i = tb(n);
      i && (t.add(i), i in e || (e[i] = []), e[i].push({
        type: "ORG",
        id: org.id,
        name: org.name
      }), (ee.data ?? []).forEach(t => e[i].push({
        type: "WORKSPACE",
        id: t.id,
        name: t.name
      })));
    });
    let n = new Set((ee.data ?? []).map(e => e.id));
    eo?.forEach(a => {
      n.has(a.id) && a.librarySubscriptions?.forEach(n => {
        let s = tb(n);
        if (!s) return;
        s in e || (e[s] = []);
        let i = n.slidesSubscribed?.status === tT.Loaded && n.slidesSubscribed?.data;
        let r = t.has(s);
        let l = n.isSubscribed || n.figJamSubscribed || i;
        l && !r && e[s].push({
          type: "WORKSPACE",
          id: a.id,
          name: a.name || ""
        });
        !l && r && (e[s] = e[s].filter(e => !("WORKSPACE" === e.type && e.id === a.id)));
      });
    });
    return e;
  }, [org.id, org.name, el, eo, ee]);
  let ec = useMemo(() => {
    let e = [];
    let t = new Set((ee.data ?? []).map(e => e.id));
    eo?.forEach(a => {
      t.has(a.id) && a.name && e.push({
        id: a.id,
        name: a.name
      });
    });
    sortByPropertyWithOptions(e, "name");
    return [{
      id: tm,
      name: getI18nString("resources_tab.libraries.none")
    }, {
      id: "ORG",
      name: org.name
    }, ...e];
  }, [org.name, eo, ee]);
  let e_ = useMemo(() => W.some(e => !!e.has_connected_project_sharing_group), [W]);
  let {
    sortState,
    updateSortState,
    sortedItems
  } = function (e, t, a) {
    let [n, i] = useState(e);
    let l = useMemo(() => ({
      NAME: e => e.library_name,
      ENABLED_FOR: e => {
        let t = Nf(e) ? e.library_file_key : e.hub_file_id;
        let n = t ? a[t] : void 0;
        return n?.map(e => e.name).join(",") ?? "";
      },
      COMPONENTS: e => e.num_components,
      STYLES: e => e.num_styles
    }), [a]);
    let o = useMemo(() => {
      let e = [...t];
      sortBySelectors(e, l[n.column], n.isReversed, n.secondaryColumn && l?.[n.secondaryColumn], n.isSecondaryReversed);
      return e;
    }, [t, l, n]);
    return {
      sortState: n,
      updateSortState: e => {
        n.column === e ? i(e => ({
          ...e,
          isReversed: !e.isReversed
        })) : i(t => ({
          column: e,
          isReversed: !1,
          secondaryColumn: t.column,
          isSecondaryReversed: t.isReversed
        }));
      },
      sortedItems: o
    };
  }({
    column: "NAME",
    isReversed: !1
  }, useMemo(() => {
    let e = [...W];
    V && e.push(...V);
    let t = e.filter(e => {
      let t = Nf(e) ? e.library_file_key : e.hub_file_id;
      return function (e, t, a) {
        if (0 === a.size) return !0;
        let n = a.has($$tp0);
        let s = Nf(e) && e.has_connected_project_sharing_group;
        if (n && !s) return !1;
        if (1 === a.size && n) return !!s;
        if (a.has(tm) && (!t || 0 === t.length)) return !0;
        for (let e of t || []) if ("ORG" === e.type) {
          if (a.has("ORG")) return !0;
        } else if (a.has(e.id)) return !0;
        return !1;
      }(e, t ? ed[t] : void 0, Y);
    });
    return K ? (tu.set(t), tu.search(K)) : t;
  }, [V, W, ed, K, Y]), ed);
  let eg = e => {
    let t = e ? ed[e] : void 0;
    if (!t || 0 === t.length) return jsx(_$$E, {
      color: "secondary",
      children: renderI18nText("resources_tab.libraries.no_subscriptions")
    });
    let a = t.slice(0, 2).map(e => e.name).join(", ");
    return t.length > 2 ? jsx(_$$E, {
      truncate: "line-clamp",
      lineClamp: 2,
      children: renderI18nText("resources_tab.libraries.two_or_more_workspaces", {
        workspaceNames: a,
        extraWorkspaceNum: t.length - 2
      })
    }) : jsx(_$$E, {
      truncate: "line-clamp",
      lineClamp: 2,
      children: a
    });
  };
  let eh = e => {
    let t = Nf(e) ? e.library_file_key : e.hub_file_id;
    t && H(showModalHandler({
      type: td,
      data: {
        libraryResourceId: t
      }
    }));
  };
  let ex = useMemo(() => jsx(X, {
    filters: ec,
    addToConnectedProjectsFilter: e_,
    enabledFilterIds: Y,
    onChange: J
  }), [ec, e_, Y]);
  useEffect(() => {
    onRightActionsChange?.(ex);
  }, [ex, onRightActionsChange]);
  let eb = jsxs("div", {
    style: sx.add({
      minWidth: "800px"
    }).$,
    className: _$$s.pb24.$,
    children: [jsxs("div", {
      className: "libraries_section--tableRowHeader--VKGT- libraries_section--tableRow--Y2bLC",
      children: [jsx("div", {
        className: _$$s.pt8.pb8.colorBorder.bSolid.bt1.bb1.wFull.$,
        children: jsx(y2, {
          query: K,
          onChange: Q,
          clearSearch: () => {
            Q("");
          },
          placeholder: getI18nString("resources_tab.libraries.search.label_with_ellipsis")
        })
      }), jsx(Hj, {
        header: !0,
        useAdminTableStyles: !0,
        children: jsxs(_$$Y, {
          spacing: 0,
          children: [jsx(A3, {
            style: sx.add({
              width: "40%"
            }).$,
            children: jsx(tD, {
              className: _$$s.colorText.$,
              isDescending: !sortState.isReversed,
              sortBy: () => updateSortState("NAME"),
              field: "NAME",
              hasArrow: "NAME" === sortState.column,
              children: jsx(_$$E, {
                fontWeight: "semi-bold",
                color: "default",
                children: renderI18nText("resources_tab.libraries.name")
              })
            })
          }), jsx(A3, {
            style: sx.add({
              width: "30%"
            }).$,
            children: jsx(tD, {
              className: _$$s.colorText.$,
              isDescending: !sortState.isReversed,
              sortBy: () => updateSortState("ENABLED_FOR"),
              field: "ENABLED_FOR",
              hasArrow: "ENABLED_FOR" === sortState.column,
              children: jsx(_$$E, {
                color: "default",
                fontWeight: "semi-bold",
                children: renderI18nText("resources_tab.libraries.added_by_default")
              })
            })
          }), jsx(A3, {
            style: sx.add({
              width: "10%"
            }).justifyEnd.$,
            children: jsx(tD, {
              rightAligned: !0,
              className: _$$s.colorText.$,
              isDescending: !sortState.isReversed,
              sortBy: () => updateSortState("COMPONENTS"),
              field: "COMPONENTS",
              hasArrow: "COMPONENTS" === sortState.column,
              children: jsx(_$$E, {
                color: "default",
                fontWeight: "semi-bold",
                children: renderI18nText("resources_tab.libraries.components")
              })
            })
          }), jsx(A3, {
            style: sx.add({
              width: "10%"
            }).justifyEnd.$,
            children: jsx(tD, {
              rightAligned: !0,
              className: _$$s.colorText.$,
              isDescending: !sortState.isReversed,
              sortBy: () => updateSortState("STYLES"),
              field: "STYLES",
              hasArrow: "STYLES" === sortState.column,
              children: jsx(_$$E, {
                color: "default",
                fontWeight: "semi-bold",
                children: renderI18nText("resources_tab.libraries.styles")
              })
            })
          }), jsxs(A3, {
            style: sx.add({
              width: "10%"
            }).$,
            children: [jsx("span", {}), " "]
          })]
        })
      })]
    }), ("loading" === et.status || "loading" === ee.status) && jsx(FO, {}), "loaded" === et.status && "loaded" === ee.status && !sortedItems.length && jsx(_$$p, {
      children: K ? jsx(_$$E, {
        children: renderI18nText("resources_tab.libraries.search.no_results")
      }) : Y.size > 0 ? jsx(_$$E, {
        children: renderI18nText("resources_tab.libraries.filter.no_results")
      }) : jsx(_$$E, {
        children: renderI18nText("resources_tab.libraries.no_libraries_text")
      })
    }), "loaded" === et.status && "loaded" === ee.status && jsxs(Fragment, {
      children: [sortedItems.map(e => {
        let s = Nf(e) ? e.library_file_key : void 0;
        let i = es.has(e.library_key);
        let r = s && er.has(s);
        let l = Z.has(e.library_key);
        let o = i ? jsx("div", {
          className: _$$s.ml4.$,
          children: jsx(cX, {
            orgNameForTooltip: org.name
          })
        }) : r ? jsx("div", {
          className: _$$s.ml4.$,
          children: jsx(cX, {
            workspaceNameForTooltip: t
          })
        }) : l ? jsx("div", {
          className: _$$s.ml4.$,
          children: jsx(_$$E2, {
            libraryKey: e.library_key,
            showTooltip: !0,
            redirectToHubFile: !0
          })
        }) : null;
        return jsx(tg, {
          file: e,
          getLibrarySubscriptions: eg,
          libraryIcon: o,
          onClick: () => eh(e)
        }, e.library_key);
      }), (K || Y.size > 0) && jsx(Hj, {
        useAdminTableStyles: !0,
        className: "libraries_section--showAllLibrariesRow--e07-d libraries_section--tableRow--Y2bLC",
        onClick: () => {
          Q("");
          J(new Set([]));
        },
        children: jsx(_$$Y, {
          horizontalAlignItems: "center",
          children: jsx(_$$E, {
            color: "brand",
            children: renderI18nText("resources_tab.libraries.show_all_libraries_button")
          })
        })
      })]
    })]
  });
  return jsxs(Fragment, {
    children: [workspaceId ? jsx(_$$m, {
      selectedSecondaryTab: m2.LIBRARIES,
      rightActions: ex
    }) : !getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K, {
        title: _$$O(J7.RESOURCES)
      }), jsx(_$$b, {
        tab: J7.RESOURCES,
        selectedSecondaryTab: _d.LIBRARIES,
        rightActions: ex
      })]
    }), isLoading ? jsx("div", {
      className: _$$s.wFull.hFull.flex.flexRow.justifyCenter.itemsCenter.$,
      children: jsx(_$$k, {})
    }) : jsx("div", {
      className: _$$s.overflowAuto.$,
      children: jsx(_$$P, {
        className: _$$s.wFull.hFull.$,
        minContentWidth: 800,
        children: eb
      })
    })]
  });
}
function tb(e) {
  return e.communityLibrary?.hubFileId || (e.library?.fileKey ?? "");
}
export const H0 = $$tp0;
export const re = $$tx1;