import { jsxs, jsx } from "react/jsx-runtime";
import { Component, createRef } from "react";
import { debounce } from "../905/915765";
import { DEFAULT_PAGE_SIZE, hasMorePages, fetchPaginatedData, PAGINATION_NEXT } from "../figma_app/661371";
import { isMobileUA } from "../figma_app/778880";
import { LoadingSpinner } from "../figma_app/858013";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { selectViewAction } from "../905/929976";
import { TrackingProvider } from "../figma_app/831799";
import { UserProfileTab } from "../figma_app/707808";
import { registerModal } from "../905/102752";
import { HeaderModal } from "../905/519092";
import { o as _$$o } from "../905/451156";
import { W } from "../905/316655";
import { y as _$$y } from "../905/617004";
function A() {
  return jsxs("svg", {
    width: "288",
    height: "200",
    viewBox: "0 0 288 200",
    fill: "none",
    children: [jsx("path", {
      d: "M192 100C192 73.4903 170.51 52 144 52C117.49 52 96 73.4903 96 100C96 126.51 117.49 148 144 148C170.51 148 192 126.51 192 100Z",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M193.5 100C193.5 72.6619 171.338 50.5 144 50.5C116.662 50.5 94.5 72.6619 94.5 100C94.5 127.338 116.662 149.5 144 149.5C171.338 149.5 193.5 127.338 193.5 100ZM144 53.5C169.681 53.5 190.5 74.3188 190.5 100C190.5 125.681 169.681 146.5 144 146.5C118.319 146.5 97.5 125.681 97.5 100C97.5 74.3188 118.319 53.5 144 53.5Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("circle", {
      cx: "127",
      cy: "87",
      r: "5",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("circle", {
      cx: "161",
      cy: "87",
      r: "5",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M113.5 98.5V100C113.5 116.845 127.155 130.5 144 130.5C160.845 130.5 174.5 116.845 174.5 100V98.5H177.5V100C177.5 118.502 162.502 133.5 144 133.5C125.498 133.5 110.5 118.502 110.5 100V98.5H113.5Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      d: "M200 140.5C200 131.94 193.06 125 184.5 125C175.94 125 169 131.94 169 140.5C169 149.06 175.94 156 184.5 156C193.06 156 200 149.06 200 140.5Z",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M184.5 126.5C185.437 126.5 186.351 126.592 187.234 126.767L188.705 127.058L189.288 124.115L187.816 123.824C187.221 123.706 186.615 123.619 186 123.565V123.5H183V123.565C182.385 123.619 181.779 123.706 181.184 123.824L179.712 124.115L180.295 127.058L181.766 126.767C182.649 126.592 183.563 126.5 184.5 126.5ZM176.3 125.53L175.053 126.364C173.2 127.605 171.605 129.2 170.364 131.053L169.53 132.3L172.023 133.969L172.857 132.722C173.88 131.195 175.195 129.88 176.722 128.857L177.969 128.023L176.3 125.53ZM191.031 128.023L192.278 128.857C193.805 129.88 195.12 131.195 196.143 132.722L196.977 133.969L199.47 132.3L198.636 131.053C197.395 129.2 195.8 127.605 193.947 126.364L192.7 125.53L191.031 128.023ZM168.115 135.712L167.824 137.184C167.706 137.779 167.619 138.385 167.565 139H167.5V142H167.565C167.619 142.615 167.706 143.221 167.824 143.816L168.115 145.288L171.058 144.705L170.767 143.234C170.592 142.351 170.5 141.437 170.5 140.5C170.5 139.563 170.592 138.649 170.767 137.766L171.058 136.295L168.115 135.712ZM197.942 136.295L198.233 137.766C198.408 138.649 198.5 139.563 198.5 140.5C198.5 141.437 198.408 142.351 198.233 143.234L197.942 144.705L200.885 145.288L201.176 143.816C201.294 143.221 201.381 142.615 201.435 142H201.5V139H201.435C201.381 138.385 201.294 137.779 201.176 137.184L200.885 135.712L197.942 136.295ZM169.53 148.7L170.364 149.947C171.605 151.8 173.2 153.395 175.053 154.636L176.3 155.47L177.969 152.977L176.722 152.143C175.195 151.12 173.88 149.805 172.857 148.278L172.023 147.031L169.53 148.7ZM196.977 147.031L196.143 148.278C195.12 149.805 193.805 151.12 192.278 152.143L191.031 152.977L192.7 155.47L193.947 154.636C195.8 153.395 197.395 151.8 198.636 149.947L199.47 148.7L196.977 147.031ZM188.705 153.942L187.234 154.233C186.351 154.408 185.437 154.5 184.5 154.5C183.563 154.5 182.649 154.408 181.766 154.233L180.295 153.942L179.712 156.885L181.184 157.176C181.779 157.294 182.385 157.381 183 157.435V157.5H186V157.435C186.615 157.381 187.221 157.294 187.816 157.176L189.288 156.885L188.705 153.942Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M193 142H176V139H193V142Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M183 149L183 132L186 132L186 149L183 149Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    })]
  });
}
function y() {
  return jsxs("svg", {
    width: "288",
    height: "200",
    viewBox: "0 0 288 200",
    fill: "none",
    children: [jsx("path", {
      d: "M192 100C192 73.4903 170.51 52 144 52C117.49 52 96 73.4903 96 100C96 126.51 117.49 148 144 148C170.51 148 192 126.51 192 100Z",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M144 53.5C145.448 53.5 146.881 53.5662 148.295 53.6956L149.789 53.8323L150.062 50.8448L148.568 50.7081C147.554 50.6152 146.531 50.553 145.5 50.5223V50.5H142.5V50.5223C141.469 50.553 140.446 50.6152 139.432 50.7081L137.938 50.8448L138.211 53.8323L139.705 53.6956C141.119 53.5662 142.552 53.5 144 53.5ZM156.327 55.1257L157.76 55.569C160.52 56.423 163.171 57.5273 165.686 58.8555L167.012 59.5561L168.413 56.9034L167.087 56.2028C164.41 54.7886 161.587 53.6125 158.646 52.703L157.213 52.2597L156.327 55.1257ZM130.787 52.2597L129.354 52.703C126.413 53.6125 123.59 54.7886 120.913 56.2028L119.587 56.9034L120.988 59.5561L122.314 58.8555C124.829 57.5273 127.48 56.423 130.24 55.569L131.673 55.1257L130.787 52.2597ZM172.553 63.2653L173.706 64.2242C175.911 66.0568 177.943 68.0893 179.776 70.2938L180.735 71.4473L183.042 69.5295L182.083 68.3761C180.133 66.0301 177.97 63.8673 175.624 61.9172L174.47 60.9583L172.553 63.2653ZM113.53 60.9583L112.376 61.9172C110.03 63.8673 107.867 66.0301 105.917 68.3761L104.958 69.5296L107.265 71.4473L108.224 70.2938C110.057 68.0893 112.089 66.0568 114.294 64.2242L115.447 63.2653L113.53 60.9583ZM184.444 76.9877L185.144 78.314C186.473 80.8288 187.577 83.4797 188.431 86.2404L188.874 87.6734L191.74 86.7869L191.297 85.3539C190.387 82.4135 189.211 79.5904 187.797 76.9129L187.097 75.5865L184.444 76.9877ZM100.903 75.5865L100.203 76.9129C98.7886 79.5904 97.6125 82.4135 96.703 85.3539L96.2597 86.7869L99.1257 87.6734L99.569 86.2404C100.423 83.4797 101.527 80.8288 102.856 78.314L103.556 76.9877L100.903 75.5865ZM94.8448 93.9379L94.7081 95.4316C94.6152 96.446 94.553 97.4692 94.5223 98.5H94.5V101.5H94.5223C94.553 102.531 94.6152 103.554 94.7081 104.568L94.8448 106.062L97.8323 105.789L97.6956 104.295C97.5662 102.881 97.5 101.448 97.5 100C97.5 98.5516 97.5662 97.119 97.6956 95.7051L97.8323 94.2114L94.8448 93.9379ZM190.168 94.2114L190.304 95.7051C190.434 97.119 190.5 98.5516 190.5 100C190.5 101.448 190.434 102.881 190.304 104.295L190.168 105.789L193.155 106.062L193.292 104.568C193.385 103.554 193.447 102.531 193.478 101.5H193.5V98.5H193.478C193.447 97.4692 193.385 96.446 193.292 95.4316L193.155 93.9379L190.168 94.2114ZM188.874 112.327L188.431 113.76C187.577 116.52 186.473 119.171 185.144 121.686L184.444 123.012L187.097 124.413L187.797 123.087C189.211 120.41 190.387 117.587 191.297 114.646L191.74 113.213L188.874 112.327ZM96.2597 113.213L96.703 114.646C97.6125 117.587 98.7886 120.41 100.203 123.087L100.903 124.413L103.556 123.012L102.856 121.686C101.527 119.171 100.423 116.52 99.569 113.76L99.1257 112.327L96.2597 113.213ZM180.735 128.553L179.776 129.706C177.943 131.911 175.911 133.943 173.706 135.776L172.553 136.735L174.47 139.042L175.624 138.083C177.97 136.133 180.133 133.97 182.083 131.624L183.042 130.47L180.735 128.553ZM104.958 130.47L105.917 131.624C107.867 133.97 110.03 136.133 112.376 138.083L113.53 139.042L115.447 136.735L114.294 135.776C112.089 133.943 110.057 131.911 108.224 129.706L107.265 128.553L104.958 130.47ZM167.012 140.444L165.686 141.144C163.171 142.473 160.52 143.577 157.76 144.431L156.327 144.874L157.213 147.74L158.646 147.297C161.587 146.387 164.41 145.211 167.087 143.797L168.413 143.097L167.012 140.444ZM119.587 143.097L120.913 143.797C123.59 145.211 126.413 146.387 129.354 147.297L130.787 147.74L131.673 144.874L130.24 144.431C127.48 143.577 124.829 142.473 122.314 141.144L120.988 140.444L119.587 143.097ZM149.789 146.168L148.295 146.304C146.881 146.434 145.448 146.5 144 146.5C142.552 146.5 141.119 146.434 139.705 146.304L138.211 146.168L137.938 149.155L139.432 149.292C140.446 149.385 141.469 149.447 142.5 149.478V149.5H145.5V149.478C146.531 149.447 147.554 149.385 148.568 149.292L150.062 149.155L149.789 146.168Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("circle", {
      cx: "127",
      cy: "87",
      r: "5",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("circle", {
      cx: "161",
      cy: "87",
      r: "5",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M113.5 98.5V100C113.5 116.845 127.155 130.5 144 130.5C160.845 130.5 174.5 116.845 174.5 100V98.5H177.5V100C177.5 118.502 162.502 133.5 144 133.5C125.498 133.5 110.5 118.502 110.5 100V98.5H113.5Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      d: "M200 140.5C200 131.94 193.06 125 184.5 125C175.94 125 169 131.94 169 140.5C169 149.06 175.94 156 184.5 156C193.06 156 200 149.06 200 140.5Z",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M201.5 140.5C201.5 131.111 193.889 123.5 184.5 123.5C175.111 123.5 167.5 131.111 167.5 140.5C167.5 149.889 175.111 157.5 184.5 157.5C193.889 157.5 201.5 149.889 201.5 140.5ZM184.5 126.5C192.232 126.5 198.5 132.768 198.5 140.5C198.5 148.232 192.232 154.5 184.5 154.5C176.768 154.5 170.5 148.232 170.5 140.5C170.5 132.768 176.768 126.5 184.5 126.5Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M193 142H176V139H193V142Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M183 149L183 132L186 132L186 149L183 149Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    })]
  });
}
let v = "follows_list_modal--selectedTab----9xJ follows_list_modal--baseTab--xRoqB text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let I = "follows_list_modal--emptyState--MvESy";
let E = "follows_list_modal--emptyStateText--fBrBl text--fontPos11--2LvXf text--_fontBase--QdLsd";
class x extends _$$o {
  constructor() {
    super(...arguments);
    this.styleOverrides = () => ({
      base: "follows_list_modal--baseTab--xRoqB text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      selected: v
    });
    this.applyDefaultStyles = () => !1;
  }
}
class S extends Component {
  constructor(e) {
    super(e);
    this.lastProfileRef = createRef();
    this.modalContainerRef = createRef();
    this.onScroll = () => {
      this.lastProfileRef.current && this.modalContainerRef.current && this.lastProfileRef.current.getBoundingClientRect().top <= this.modalContainerRef.current.getBoundingClientRect().bottom && this.fetchNextFollows();
    };
    this.scrollListener = debounce(this.onScroll);
    this.fetchNextFollows = () => this.props.currentSelectedView.profileTab === UserProfileTab.FOLLOWERS ? this.fetchFollowers() : this.fetchFollowing();
    this.handleFetchFailure = () => {
      this.setState({
        didFetchFail: !0
      });
      this.props.dispatch(FlashActions.error(getI18nString("community.error.an_error_has_occurred_please_refresh_the_page_and_try_again")));
    };
    this.onTabClick = e => {
      this.props.dispatch(selectViewAction({
        ...this.props.currentSelectedView,
        profileTab: e
      }));
    };
    this.hideModal = () => {
      let e = {
        ...this.props.currentSelectedView
      };
      delete e.profileTab;
      this.props.dispatch(selectViewAction(e));
    };
    this.getFollowsListHeightStyle = e => {
      let t = isMobileUA ? window.innerHeight : window.innerHeight - 128 - 48;
      return {
        height: Math.min(Math.max(80 * Math.min(e === UserProfileTab.FOLLOWERS ? this.props.profile.follower_count : this.props.profile.following_count, DEFAULT_PAGE_SIZE), 328), t)
      };
    };
    this.renderTabs = () => {
      let e = this.props.currentSelectedView.profileTab;
      return jsxs("div", {
        className: "follows_list_modal--tabs--2JRKm",
        children: [jsxs(x, {
          onClick: () => this.onTabClick(UserProfileTab.FOLLOWERS),
          tab: UserProfileTab.FOLLOWERS,
          selectedTab: e,
          children: [jsx("span", {
            "aria-hidden": !0,
            style: void 0,
            className: `xcrlgei x1d1dmfs x1agbcgv x1gxh9p xg01cxk ${v}`,
            children: renderI18nText("community.follow.followers")
          }), jsx("span", {
            className: "xcrlgei x1d1dmfs x1agbcgv x1gxh9p",
            children: renderI18nText("community.follow.followers")
          })]
        }), this.props.profile.primary_user_id && jsxs(x, {
          onClick: () => this.onTabClick(UserProfileTab.FOLLOWING),
          tab: UserProfileTab.FOLLOWING,
          selectedTab: e,
          children: [jsx("span", {
            "aria-hidden": !0,
            style: void 0,
            className: `xcrlgei x1d1dmfs x1agbcgv x1gxh9p xg01cxk ${v}`,
            children: renderI18nText("community.follow.following")
          }), jsx("span", {
            className: "xcrlgei x1d1dmfs x1agbcgv x1gxh9p",
            children: renderI18nText("community.follow.following")
          })]
        })]
      });
    };
    this.renderView = () => {
      let e = this.props.currentSelectedView.profileTab;
      let t = e === UserProfileTab.FOLLOWERS ? this.state.followerState : this.state.followingState;
      let i = e === UserProfileTab.FOLLOWERS ? this.state.followerState.followers : this.state.followingState.following;
      return 0 !== i.length || t.loading ? jsx(TrackingProvider, {
        name: "Follows List Modal",
        properties: {
          tab: e,
          profileId: this.props.profile.id,
          viewerProfileId: this.props.currentUserProfileId
        },
        children: jsxs("div", {
          className: "follows_list_modal--profileList--EJSku",
          style: this.getFollowsListHeightStyle(e),
          onScroll: this.scrollListener,
          children: [i.map((t, r) => jsx(_$$y, {
            profile: t,
            tileRef: r === i.length - 1 ? this.lastProfileRef : void 0,
            rightSide: this.props.authedActiveCommunityProfileId !== t.id ? jsx(W, {
              profile: t,
              trackingProperties: {
                modalTab: e,
                viewingProfileId: this.props.profile.id
              }
            }) : void 0,
            hideFollowsYouBadge: this.props.profile.id === this.props.currentUserProfileId && e === UserProfileTab.FOLLOWERS
          }, t.profile_handle)), t.loading && jsx(LoadingSpinner, {
            className: "follows_list_modal--loadingSpinner--OmkLk"
          })]
        })
      }) : e === UserProfileTab.FOLLOWERS ? jsxs("div", {
        className: I,
        children: [jsx(y, {}), jsx("div", {
          className: E,
          children: renderI18nText("community.follow.no_followers_yet")
        })]
      }) : jsxs("div", {
        className: I,
        children: [jsx(A, {}), jsx("div", {
          className: E,
          children: renderI18nText("community.follow.not_following_anyone_yet")
        })]
      });
    };
    e.profile.primary_user_id || e.currentSelectedView.profileTab !== UserProfileTab.FOLLOWING || e.dispatch(selectViewAction({
      ...e.currentSelectedView,
      profileTab: UserProfileTab.FOLLOWERS
    }));
    this.state = {
      followerState: {
        followers: [],
        loading: !1
      },
      followingState: {
        following: [],
        loading: !1
      },
      didFetchFail: !1
    };
  }
  componentDidMount() {
    this.fetchNextFollows();
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    document.body.style.left = "0px";
    document.body.style.right = "0px";
  }
  componentWillUnmount() {
    let e = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(0, -1 * parseInt(e || "0"));
  }
  componentDidUpdate(e, t) {
    e.currentSelectedView.profileTab !== this.props.currentSelectedView.profileTab && this.fetchNextFollows();
  }
  async fetchFollowers() {
    if (hasMorePages(this.state.followerState)) {
      this.setState({
        followerState: {
          ...this.state.followerState,
          loading: !0
        },
        didFetchFail: !1
      });
      try {
        let e = await fetchPaginatedData(`/api/followers/${this.props.profile.id}`, DEFAULT_PAGE_SIZE, this.state.followerState, PAGINATION_NEXT);
        this.setState({
          followerState: {
            followers: [...this.state.followerState.followers, ...e.followers],
            loading: !1,
            pagination: e.pagination
          },
          didFetchFail: !1
        });
      } catch {
        this.handleFetchFailure();
      }
    }
  }
  async fetchFollowing() {
    if (hasMorePages(this.state.followingState)) {
      this.setState({
        followingState: {
          ...this.state.followingState,
          loading: !0
        },
        didFetchFail: !1
      });
      try {
        let e = await fetchPaginatedData(`/api/following/${this.props.profile.id}`, DEFAULT_PAGE_SIZE, this.state.followingState, PAGINATION_NEXT);
        this.setState({
          followingState: {
            following: [...this.state.followingState.following, ...e.following],
            loading: !1,
            pagination: e.pagination
          },
          didFetchFail: !1
        });
      } catch {
        this.handleFetchFailure();
      }
    }
  }
  render() {
    return jsx(HeaderModal, {
      title: this.renderTabs(),
      onClose: this.hideModal,
      headerClassName: "follows_list_modal--header--9WiIT",
      containerClassName: "follows_list_modal--container---8sww",
      containerRef: this.modalContainerRef,
      closeOnEsc: !0,
      children: this.renderView()
    });
  }
}
S.displayName = "FollowsListModal";
export let $$$$w0 = registerModal(S, "FollowsListModal");
export const w = $$$$w0;