import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { n7 } from "../905/926523";
import { GH, VP } from "../905/18797";
import { UploadStatusEnum } from "../figma_app/10554";
import { selectCurrentUser } from "../905/372672";
var $$n0;
(e => {
  (e => {
    e[e.USER_PUBLISH_FLOW = 0] = "USER_PUBLISH_FLOW";
    e[e.TEAM_ORG_POST_PUBLISH_FLOW = 1] = "TEAM_ORG_POST_PUBLISH_FLOW";
    e[e.CHOOSE_PROFILE_CREATION_ROUTE_NO_ACCOUNTS = 2] = "CHOOSE_PROFILE_CREATION_ROUTE_NO_ACCOUNTS";
    e[e.CHOOSE_PROFILE_CREATION_ROUTE_WITH_ACCOUNTS = 3] = "CHOOSE_PROFILE_CREATION_ROUTE_WITH_ACCOUNTS";
    e[e.SET_PROFILE_HANDLE = 4] = "SET_PROFILE_HANDLE";
    e[e.CONNECT_PROFILES = 5] = "CONNECT_PROFILES";
    e[e.INFO = 6] = "INFO";
  })(e.Step || (e.Step = {}));
  e.usePublishModalStateMachine = function (e) {
    let t = useDispatch();
    let i = useSelector(e => e.authedProfilesById);
    let n = useSelector(e => e.loadingState);
    let c = selectCurrentUser();
    let [u, p] = useState(() => 0 === e.initialStep ? Object.values(i).some(e => e.associated_users?.every(e => e.user_id !== c?.id)) ? 3 : 2 : 1 === e.initialStep ? e.publisher?.profile_created ? 4 : 6 : e.initialStep);
    let [m, h] = useState();
    let [g, f] = useState();
    let {
      resource,
      publisher,
      forceParentRender,
      resourcePublishingStatusCode
    } = e;
    let v = useCallback(e => {
      p(e);
      h(null);
      forceParentRender?.();
    }, [forceParentRender]);
    useEffect(() => {
      let e = resourcePublishingStatusCode === UploadStatusEnum.SUCCESS && (2 === u || 3 === u) && resource && publisher;
      let t = 5 === u && g && GH(n, g);
      m && (e || t) && v(m);
    }, [resource, publisher, m, u, g, n, v, resourcePublishingStatusCode]);
    return {
      addCommunityProfileUser: function (e) {
        t(n7(e));
        f(n7.loadingKeyForPayload(e));
      },
      setNextStep: h,
      takeStep: v,
      loading: !(e.resourcePublishingStatusCode !== UploadStatusEnum.UPLOADING) || !!(g && VP(n, g)),
      step: u,
      nextStep: m
    };
  };
})($$n0 || ($$n0 = {}));
export const D = $$n0;