import { getCurrentLiveGraphClient } from "../905/761735";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
export let $$s0 = new class {
  constructor() {
    this.TeamsSchemaValidator = createNoOpValidator();
    this.updateImage = e => {
      let {
        workspaceId,
        img_url,
        img_url_500_500,
        onfulfilled,
        onrejected
      } = e;
      return sendWithRetry.put(`/api/workspace/${workspaceId}/update_image`, {
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
      let s = sendWithRetry.put(`/api/workspace/${e}`, {
        colors: t
      }).then(i, r);
      return getCurrentLiveGraphClient()?.optimisticallyUpdate({
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
      await sendWithRetry.put(`/api/workspace/${e}`, {
        description: t
      });
    };
    this.deleteDefaultTeams = async e => {
      let {
        workspaceId,
        removedTeamIds
      } = e;
      await sendWithRetry.del(`/api/workspace/${workspaceId}/default_teams`, {
        team_ids: removedTeamIds
      });
    };
    this.addDefaultTeams = async e => {
      let {
        workspaceId,
        addedTeamIds
      } = e;
      await sendWithRetry.post(`/api/workspace/${workspaceId}/default_teams`, {
        team_ids: addedTeamIds
      });
    };
    this.updatePublicLinkControlsSetting = e => {
      let {
        workspaceId,
        publicLinkControlsSetting,
        publicLinkControlsMaxExpiration
      } = e;
      return sendWithRetry.put(`/api/workspace/${workspaceId}/settings`, {
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
    this.getMemberCSVExport = e => sendWithRetry.post(`/api/workspace/${e.workspaceId}/export_members`);
  }
  getTeams(e) {
    return this.TeamsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/workspace/${e.workspaceId}/teams`, APIParameterUtils.toAPIParameters({
      includeSecretTeams: e.includeSecretTeams
    })));
  }
}();
export const u = $$s0;