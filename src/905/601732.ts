import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { noop } from 'lodash-es';
import { RadioPrimitiveRoot } from "../905/22449";
import { RadioPrimitiveOption } from "../905/34525";
import { getI18nString } from "../905/303541";
import { UserAvatar, TeamAvatar } from "../905/590952";
import { getFieldValueOrDefault, canSetFieldValue } from "../905/497882";
import { LG } from "../905/448440";
import { isUserWorkspace, getDebugWorkspaceInfo, isTeamWorkspace, isOrgWorkspace } from "../figma_app/599979";
import { isWidgetOrPlugin } from "../figma_app/45218";
import { TeamOrgType } from "../figma_app/10554";
import { FieldContainer } from "../905/567946";
import { iy, uK, O0, Ee, I1 } from "../905/916525";
export function $$$$A0({
  authorField: e
}) {
  let {
    allowedAuthors,
    existingResourceContent
  } = e.deps;
  let a = getFieldValueOrDefault(e, void 0);
  let s = useMemo(() => LG(existingResourceContent) ? allowedAuthors.filter(e => isUserWorkspace(e)) : [...allowedAuthors].sort((e, t) => v(e) - v(t)), [allowedAuthors, existingResourceContent]);
  return existingResourceContent && isWidgetOrPlugin(existingResourceContent) && !canSetFieldValue(e) ? jsx(x, {
    existingResourceContent
  }) : jsx(FieldContainer, {
    label: getI18nString("community.publishing.author_share_as"),
    children: jsx(RadioPrimitiveRoot, {
      className: iy,
      value: a ? $$b1(a) : void 0,
      readonly: !canSetFieldValue(e),
      onChange: t => {
        let i = s.find(e => $$b1(e) === t);
        canSetFieldValue(e) && e.setValue(i);
      },
      children: s.map(e => jsx(y, {
        author: e,
        existingResourceContent
      }, $$b1(e)))
    })
  });
}
function y({
  author: e,
  existingResourceContent: t
}) {
  let i = getDebugWorkspaceInfo(e);
  let r = $$b1(e);
  return i ? jsxs("label", {
    className: uK,
    children: [E(e, i), jsx(RadioPrimitiveOption, {
      value: r,
      id: r,
      className: O0
    }), jsx("div", {
      className: Ee,
      children: i.name
    }), jsx("div", {
      className: I1,
      children: I(e)
    })]
  }) : t && isWidgetOrPlugin(t) ? jsx(S, {
    publisher: t.publisher,
    value: r
  }) : null;
}
export function $$b1(e) {
  return isUserWorkspace(e) ? `user-${e.user_id}` : isTeamWorkspace(e) ? `team-${e.team_id}` : isOrgWorkspace(e) ? `org-${e.org_id}` : void throwTypeError(e);
}
let v = e => isUserWorkspace(e) ? 1 : isTeamWorkspace(e) ? 2 : isOrgWorkspace(e) ? 3 : void throwTypeError(e);
let I = e => isUserWorkspace(e) ? getI18nString("community.publishing.individual_creator") : isTeamWorkspace(e) ? getI18nString("community.publishing.team_author") : isOrgWorkspace(e) ? getI18nString("community.publishing.organization_author") : throwTypeError(e);
let E = (e, t) => isUserWorkspace(e) ? jsx(UserAvatar, {
  user: t
}) : isTeamWorkspace(e) || isOrgWorkspace(e) ? jsx(TeamAvatar, {
  team: t
}) : throwTypeError(e);
function x({
  existingResourceContent: e
}) {
  let {
    id
  } = e.publisher;
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.author_share_as"),
    children: jsx(RadioPrimitiveRoot, {
      className: iy,
      value: id,
      readonly: !0,
      onChange: noop,
      children: jsx(S, {
        publisher: e.publisher,
        value: id
      })
    })
  });
}
function S({
  publisher: e,
  value: t
}) {
  let {
    name,
    img_url
  } = e;
  return jsxs("label", {
    className: uK,
    children: [e.entity_type === TeamOrgType.USER ? jsx(UserAvatar, {
      user: {
        imageUrl: img_url,
        name
      }
    }) : jsx(TeamAvatar, {
      team: {
        imageUrl: img_url,
        name
      }
    }), jsx(RadioPrimitiveOption, {
      value: t,
      id: t,
      className: O0
    }), jsx("div", {
      className: Ee,
      children: name
    }), jsx("div", {
      className: I1,
      children: w(e)
    })]
  });
}
let w = e => e.entity_type === TeamOrgType.USER ? getI18nString("community.publishing.individual_creator") : e.entity_type === TeamOrgType.TEAM ? getI18nString("community.publishing.team_author") : e.entity_type === TeamOrgType.ORG ? getI18nString("community.publishing.organization_author") : void 0;
export const A = $$$$A0;
export const s = $$b1;