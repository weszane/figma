import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { S as _$$S } from "../905/872825";
import { L } from "../905/884941";
import { T as _$$T, e as _$$e2 } from "../905/15569";
import { o as _$$o } from "../905/17894";
import { i_, c_ } from "../905/497882";
import { q } from "../905/840070";
import { v as _$$v } from "../905/513628";
import { Z9 } from "../905/104173";
import { S as _$$S2 } from "../905/622482";
import { T as _$$T2 } from "../905/191864";
import { z } from "../905/348343";
import { om } from "../905/175462";
import { WN } from "../905/448440";
import { i2 } from "../905/57749";
import { aS } from "../905/772769";
import { f as _$$f } from "../905/265642";
import { m as _$$m } from "../905/924751";
import { Y } from "../905/192715";
import { m as _$$m2 } from "../905/601661";
import { FPublicationStatusType } from "../figma_app/191312";
import { maybeCreateSavepoint } from "../905/294113";
import { PR } from "../figma_app/911880";
import { r as _$$r } from "../figma_app/78879";
import { S3, Rr, fY, YI, SK, Ur, RN, nz, fe } from "../905/234639";
let $$N1 = {
  name: om,
  description: z,
  category: Z9,
  tagsV1: _$$f,
  tagsV2: _$$m,
  carouselMedia: _$$v,
  viewerMode: _$$m2,
  author: q,
  profileHandle: i2,
  cocreators: _$$S2,
  commentsSetting: _$$T2,
  tosAccepted: Y,
  price: WN,
  supportContact: aS
};
let $$P2 = {
  displayName: "SitesForm",
  fields: $$N1,
  fieldToDeps: {
    name: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    description: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    category: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    tagsV1: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    tagsV2: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      categoryField: {
        type: "otherField",
        source: "category"
      }
    },
    carouselMedia: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      createNewVersionOnSubmit: {
        type: "form",
        source: "createNewVersionOnSubmit"
      },
      allowVideos: {
        type: "constant",
        value: !1
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    viewerMode: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingHubFile: {
        type: "form",
        source: "existingHubFile"
      },
      createNewVersionOnSubmit: {
        type: "form",
        source: "createNewVersionOnSubmit"
      }
    },
    author: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      user: {
        type: "form",
        source: "user"
      },
      allowedAuthors: {
        type: "form",
        source: "allowedAuthors"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      authedActiveCommunityProfile: {
        type: "form",
        source: "authedActiveCommunityProfile"
      }
    },
    profileHandle: {
      authorField: {
        type: "otherField",
        source: "author"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    cocreators: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      allowedCocreatorsPromise: {
        type: "form",
        source: "allowedCocreatorsPromise"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      priceField: {
        type: "otherField",
        source: "price"
      }
    },
    commentsSetting: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    tosAccepted: {
      orgUser: {
        type: "form",
        source: "orgUser"
      }
    },
    price: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      user: {
        type: "form",
        source: "user"
      },
      org: {
        type: "form",
        source: "org"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    supportContact: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      priceField: {
        type: "otherField",
        source: "price"
      }
    }
  },
  validate: ({
    sceneGraph: e,
    existingHubFile: t,
    createNewVersionOnSubmit: i
  }) => {
    if (!(t && !i) && !PR(e)) return [{
      key: "NO_PAGES_TO_PUBLISH",
      data: {}
    }];
  },
  canSubmit: ({}, e) => Object.keys(e).every(t => i_(e[t])),
  submit: async (e, t) => {
    let i;
    let d;
    let p;
    let m;
    let h;
    let {
      createNewVersionOnSubmit,
      figFile,
      existingHubFile
    } = e;
    let {
      description
    } = t;
    if (createNewVersionOnSubmit) try {
      i = (await maybeCreateSavepoint(figFile.key, "Published to Community hub", c_(description).currentValue, debugState.dispatch))?.id;
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      return new _$$o.SubmissionError({
        key: "ERROR_CREATING_SAVEPOINT",
        data: {
          rawError: e,
          debugInfo: {
            figFileKey: figFile.key
          }
        }
      });
    }
    let y = existingHubFile && !createNewVersionOnSubmit;
    if (figFile?.editor_type === "figmake" && !y) try {
      await _$$r(figFile.key);
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      return new _$$o.SubmissionError({
        key: "ERROR_PUBLISHING_SITE",
        data: {
          rawError: e
        }
      });
    }
    try {
      d = await S3({
        ...e,
        ...t,
        newVersionId: i
      });
    } catch (r) {
      reportError(_$$e.COMMUNITY, r);
      return new _$$o.SubmissionError({
        key: "ERROR_UPLOADING_IMAGES",
        data: {
          rawError: r,
          debugInfo: {
            createNewVersionOnSubmit,
            existingHubFileId: L(e.existingHubFile?.id),
            newVersionId: L(i),
            carouselMediaFieldValue: L(t.carouselMedia.currentValue)
          }
        }
      });
    }
    try {
      createNewVersionOnSubmit ? {
        hubFile: p,
        actingProfile: m,
        profileCreated: h
      } = await Rr({
        ...e,
        ...t,
        ...d,
        newVersionId: i
      }) : {
        hubFile: p
      } = await fY({
        ...e,
        ...t,
        ...d
      });
    } catch (t) {
      reportError(_$$e.COMMUNITY, t);
      return new _$$o.SubmissionError({
        key: "ERROR_FINALIZING_VERSION",
        data: t instanceof YI ? {
          rawError: t.rawError,
          debugInfo: {
            createNewVersionOnSubmit: L(createNewVersionOnSubmit),
            existingHubFileId: L(e.existingHubFile?.id),
            requestPayload: L(t.requestPayload)
          }
        } : {
          rawError: t
        }
      });
    }
    try {
      SK({
        ...e,
        ...t,
        hubFile: p,
        actingProfile: m,
        profileCreated: h,
        updateSource: "SitesForm.submit"
      });
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      return new _$$o.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    if (getFeatureFlags().cmty_m10n_poll_hub_file_statuses_on_publish) try {
      let e = await Ur(p.id);
      if (void 0 === e) {
        let e = Error("Validations not passed in time");
        reportError(_$$e.COMMUNITY, e);
        return new _$$o.SubmissionError({
          key: "ERROR_VALIDATIONS_NOT_PASSED_IN_TIME",
          data: {
            rawError: e
          }
        });
      }
      p.publishing_status = _$$S(e, FPublicationStatusType) ?? null;
      RN(p, "SitesForm.submit");
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      return new _$$o.SubmissionError({
        key: "ERROR_VALIDATING_STATUS",
        data: {
          rawError: e
        }
      });
    }
    try {
      nz(p);
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      return new _$$o.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    return {
      hubFile: p,
      actingProfile: m,
      profileCreated: h
    };
  }
};
let O = _$$T($$P2);
let $$D0 = _$$e2(O, fe);
export const AC = $$D0;
export const Oo = $$N1;
export const PT = $$P2;