import { WB } from "../905/761735";
import { vh, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$s0 = new class {
  constructor() {
    this.TeamsSchemaValidator = vh();
    this.updateImage = e => {
      let {
        workspaceId,
        img_url,
        img_url_500_500,
        onfulfilled,
        onrejected
      } = e;
      return XHR.put(`/api/workspace/${workspaceId}/update_image`, {
        img_url,
        img_url_500_500
      }).then(onfulfilled, onrejected);
    };
    this.updateColor = ({
      workspaceId: e,
      colors: t,
      onfulfilled: i,
      onrejected: r
    }) => {
      let s = XHR.put(`/api/workspace/${e}`, {
        colors: t
      }).then(i, r);
      return WB()?.optimisticallyUpdate({
        Workspace: {
          [e]: {
            colorConfig: {
              colors: t
            }
          }
        }
      }, s);
    };
    this.updateDescription = async ({
      workspaceId: e,
      description: t
    }) => {
      await XHR.put(`/api/workspace/${e}`, {
        description: t
      });
    };
    this.deleteDefaultTeams = async e => {
      let {
        workspaceId,
        removedTeamIds
      } = e;
      await XHR.del(`/api/workspace/${workspaceId}/default_teams`, {
        team_ids: removedTeamIds
      });
    };
    this.addDefaultTeams = async e => {
      let {
        workspaceId,
        addedTeamIds
      } = e;
      await XHR.post(`/api/workspace/${workspaceId}/default_teams`, {
        team_ids: addedTeamIds
      });
    };
    this.updatePublicLinkControlsSetting = e => {
      let {
        workspaceId,
        publicLinkControlsSetting,
        publicLinkControlsMaxExpiration
      } = e;
      return XHR.put(`/api/workspace/${workspaceId}/settings`, {
        public_link_controls_setting: publicLinkControlsSetting,
        public_link_controls_max_expiration: publicLinkControlsMaxExpiration
      });
    };
    this.updateAiControls = e => {
      let {
        workspaceId,
        aiControlsSetting
      } = e;
      return Promise.resolve({
        workspaceId,
        aiControlsSetting
      });
    };
    this.getMemberCSVExport = e => XHR.post(`/api/workspace/${e.workspaceId}/export_members`);
  }
  getTeams(e) {
    return this.TeamsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/workspace/${e.workspaceId}/teams`, td.toAPIParameters({
      includeSecretTeams: e.includeSecretTeams
    })));
  }
}();
export const u = $$s0;