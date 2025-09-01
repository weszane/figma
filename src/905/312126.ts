import { G as _$$G, e as _$$e } from "../905/272671";
function r(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$a2 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$a2.marker);
  }
  static fromJSON(e) {
    return new $$a2(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    r(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
r($$a2, "marker", "ClientContentLengthLimitExceededError");
export class $$s3 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$s3.marker);
  }
  static fromJSON(e) {
    return new $$s3(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "No text selected";
    e.statusCode ??= 400;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function o(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$s3, "marker", "ClientNoTextSelectedError");
export class $$l6 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$l6.marker);
  }
  static fromJSON(e) {
    return new $$l6(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    o(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function d(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
o($$l6, "marker", "CortexClientError");
export class $$c7 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$c7.marker);
  }
  static fromJSON(e) {
    return new $$c7(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message,
      url: this.url,
      cause: this.cause
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    e.message ??= `Failed to fetch from ${e.url}`;
    super(e);
    d(this, "message", void 0);
    d(this, "url", void 0);
    d(this, "cause", void 0);
    this.message = e.message;
    this.url = e.url;
    this.cause = e.cause;
    null != e.stack && (this.stack = e.stack);
  }
}
function u(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
d($$c7, "marker", "CortexFetchError");
export class $$p8 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$p8.marker);
  }
  static fromJSON(e) {
    return new $$p8(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      provider: this.provider,
      region: this.region,
      model: this.model,
      url: this.url,
      isRetryable: this.isRetryable,
      requestId: this.requestId,
      cause: this.cause
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      requestBodyValues: this.requestBodyValues,
      responseHeaders: this.responseHeaders,
      responseBody: this.responseBody,
      data: this.data
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    u(this, "provider", void 0);
    u(this, "region", void 0);
    u(this, "model", void 0);
    u(this, "url", void 0);
    u(this, "requestBodyValues", void 0);
    u(this, "responseHeaders", void 0);
    u(this, "responseBody", void 0);
    u(this, "isRetryable", void 0);
    u(this, "data", void 0);
    u(this, "requestId", void 0);
    u(this, "cause", void 0);
    this.provider = e.provider;
    this.region = e.region;
    this.model = e.model;
    this.url = e.url;
    this.requestBodyValues = e.requestBodyValues;
    this.responseHeaders = e.responseHeaders;
    this.responseBody = e.responseBody;
    this.isRetryable = e.isRetryable;
    this.data = e.data;
    this.requestId = e.requestId;
    this.cause = e.cause;
    null != e.stack && (this.stack = e.stack);
  }
}
function m(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
u($$p8, "marker", "CortexProviderAPIError");
export class $$h9 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$h9.marker);
  }
  static fromJSON(e) {
    return new $$h9(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      provider: this.provider,
      model: this.model
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    m(this, "provider", void 0);
    m(this, "model", void 0);
    this.provider = e.provider;
    this.model = e.model;
    null != e.stack && (this.stack = e.stack);
  }
}
m($$h9, "marker", "CortexProviderSDKError");
export class $$g10 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$g10.marker);
  }
  static fromJSON(e) {
    return new $$g10(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "Rate limit exceeded";
    e.statusCode ??= 429;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function f(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$g10, "marker", "CortexRateLimitExceededError");
export class $$_11 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$_11.marker);
  }
  static fromJSON(e) {
    return new $$_11(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    f(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function A(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
f($$_11, "marker", "CortexServerError");
export class $$y12 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$y12.marker);
  }
  static fromJSON(e) {
    return new $$y12(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    A(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function b(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
A($$y12, "marker", "CortexSetupError");
export class $$v13 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$v13.marker);
  }
  static fromJSON(e) {
    return new $$v13(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message,
      taskId: this.taskId
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    b(this, "message", void 0);
    b(this, "taskId", void 0);
    this.message = e.message;
    this.taskId = e.taskId;
    null != e.stack && (this.stack = e.stack);
  }
}
function I(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
b($$v13, "marker", "CortexTaskError");
export class $$E21 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$E21.marker);
  }
  static fromJSON(e) {
    return new $$E21(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      errorDetail: this.errorDetail,
      functionName: this.functionName,
      parameter: this.parameter
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      value: this.value
    };
  }
  constructor(e) {
    e.message ??= `Invalid argument ${e.value.toString()} for ${e.parameter} passed to function ${e.functionName}: ${e.errorDetail}`;
    e.statusCode ??= 400;
    super(e);
    I(this, "errorDetail", void 0);
    I(this, "functionName", void 0);
    I(this, "parameter", void 0);
    I(this, "value", void 0);
    this.errorDetail = e.errorDetail;
    this.functionName = e.functionName;
    this.parameter = e.parameter;
    this.value = e.value;
    null != e.stack && (this.stack = e.stack);
  }
}
function x(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
I($$E21, "marker", "InvalidCoreFunctionArgumentError");
export class $$S22 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$S22.marker);
  }
  static fromJSON(e) {
    return new $$S22(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      content: this.content,
      cause: this.cause
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    x(this, "message", void 0);
    x(this, "content", void 0);
    x(this, "cause", void 0);
    this.message = e.message;
    this.content = e.content;
    this.cause = e.cause;
    null != e.stack && (this.stack = e.stack);
  }
}
function w(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
x($$S22, "marker", "InvalidDataContentError");
export class $$C24 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$C24.marker);
  }
  static fromJSON(e) {
    return new $$C24(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      providerId: this.providerId,
      modelId: this.modelId,
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    w(this, "providerId", void 0);
    w(this, "modelId", void 0);
    w(this, "message", void 0);
    this.providerId = e.providerId;
    this.modelId = e.modelId;
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function T(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
w($$C24, "marker", "InvalidModelError");
export class $$k25 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$k25.marker);
  }
  static fromJSON(e) {
    return new $$k25(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      prompt: this.prompt
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    T(this, "message", void 0);
    T(this, "prompt", void 0);
    this.message = e.message;
    this.prompt = e.prompt;
    null != e.stack && (this.stack = e.stack);
  }
}
function R(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
T($$k25, "marker", "InvalidPromptArgumentError");
export class $$N26 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$N26.marker);
  }
  static fromJSON(e) {
    return new $$N26(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      requestProvider: this.requestProvider,
      expectedProvider: this.expectedProvider,
      url: this.url,
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    R(this, "requestProvider", void 0);
    R(this, "expectedProvider", void 0);
    R(this, "url", void 0);
    R(this, "message", void 0);
    this.requestProvider = e.requestProvider;
    this.expectedProvider = e.expectedProvider;
    this.url = e.url;
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function P(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
R($$N26, "marker", "InvalidProviderError");
export class $$O27 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$O27.marker);
  }
  static fromJSON(e) {
    return new $$O27(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      reqPath: this.reqPath,
      meterData: this.meterData
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "Meter exceeded";
    e.statusCode ??= 429;
    super(e);
    P(this, "reqPath", void 0);
    P(this, "meterData", void 0);
    this.reqPath = e.reqPath;
    this.meterData = e.meterData;
    null != e.stack && (this.stack = e.stack);
  }
}
function D(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
P($$O27, "marker", "MeterExceededError");
export class $$L28 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$L28.marker);
  }
  static fromJSON(e) {
    return new $$L28(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      functionName: this.functionName,
      providerIds: this.providerIds,
      modelIds: this.modelIds,
      errors: this.errors,
      route: this.route,
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    D(this, "functionName", void 0);
    D(this, "providerIds", void 0);
    D(this, "modelIds", void 0);
    D(this, "errors", void 0);
    D(this, "route", void 0);
    D(this, "message", void 0);
    this.functionName = e.functionName;
    this.providerIds = e.providerIds;
    this.modelIds = e.modelIds;
    this.errors = e.errors;
    this.route = e.route;
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function F(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
D($$L28, "marker", "NoFallbackError");
export class $$M29 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$M29.marker);
  }
  static fromJSON(e) {
    return new $$M29(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message,
      providerId: this.providerId,
      featureName: this.featureName
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    F(this, "message", void 0);
    F(this, "providerId", void 0);
    F(this, "featureName", void 0);
    this.message = e.message;
    this.providerId = e.providerId;
    this.featureName = e.featureName;
    null != e.stack && (this.stack = e.stack);
  }
}
function j(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
F($$M29, "marker", "NotImplementedError");
export class $$U30 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$U30.marker);
  }
  static fromJSON(e) {
    return new $$U30(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    super(e);
    j(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function B(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
j($$U30, "marker", "OfflineError");
export class $$V31 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$V31.marker);
  }
  static fromJSON(e) {
    return new $$V31(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      featureName: this.featureName,
      requestedVersion: this.requestedVersion
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= `Requested version '${e.requestedVersion}' is out of date for feature '${e.featureName}'.`;
    e.statusCode ??= 410;
    super(e);
    B(this, "featureName", void 0);
    B(this, "requestedVersion", void 0);
    this.featureName = e.featureName;
    this.requestedVersion = e.requestedVersion;
    null != e.stack && (this.stack = e.stack);
  }
}
function G(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
B($$V31, "marker", "OutOfDateFeatureVersionError");
export class $$z32 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$z32.marker);
  }
  static fromJSON(e) {
    return new $$z32(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 413;
    e.message ??= "Payload too large";
    super(e);
    G(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
G($$z32, "marker", "PayloadTooLargeError");
export class $$H33 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$H33.marker);
  }
  static fromJSON(e) {
    return new $$H33(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$H33, "marker", "ProviderContentLengthLimitExceededError");
export class $$W34 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$W34.marker);
  }
  static fromJSON(e) {
    return new $$W34(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    e.message ??= "Provider terminated the request prematurely";
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$W34, "marker", "ProviderEarlyTerminationError");
export class $$K35 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$K35.marker);
  }
  static fromJSON(e) {
    return new $$K35(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= `Provider ${e.provider} returned empty response for model ${e.model}`;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function Y(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$K35, "marker", "ProviderEmptyResponseError");
export class $$q36 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$q36.marker);
  }
  static fromJSON(e) {
    return new $$q36(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      response: this.response
    };
  }
  constructor(e) {
    super(e);
    Y(this, "response", void 0);
    this.response = e.response;
    null != e.stack && (this.stack = e.stack);
  }
}
function $(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
Y($$q36, "marker", "ProviderInvalidResponseDataError");
export class $$Z37 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$Z37.marker);
  }
  static fromJSON(e) {
    return new $$Z37(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      toolName: this.toolName
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      toolArgs: this.toolArgs
    };
  }
  constructor(e) {
    e.message ??= `Invalid arguments for tool ${e.toolName}`;
    super(e);
    $(this, "toolName", void 0);
    $(this, "toolArgs", void 0);
    this.toolName = e.toolName;
    this.toolArgs = e.toolArgs;
    null != e.stack && (this.stack = e.stack);
  }
}
$($$Z37, "marker", "ProviderInvalidToolArgumentsError");
export class $$X38 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$X38.marker);
  }
  static fromJSON(e) {
    return new $$X38(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "No content generated";
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$X38, "marker", "ProviderNoContentGeneratedError");
export class $$Q39 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$Q39.marker);
  }
  static fromJSON(e) {
    return new $$Q39(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "No object generated";
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function J(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$Q39, "marker", "ProviderNoObjectGeneratedError");
export class $$ee40 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ee40.marker);
  }
  static fromJSON(e) {
    return new $$ee40(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      toolName: this.toolName,
      availableTools: this.availableTools
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= `No such tool ${e.toolName}. Available tools: ${(e.availableTools ?? []).toString()}`;
    super(e);
    J(this, "toolName", void 0);
    J(this, "availableTools", void 0);
    this.toolName = e.toolName;
    this.availableTools = e.availableTools;
    null != e.stack && (this.stack = e.stack);
  }
}
J($$ee40, "marker", "ProviderNoSuchToolError");
export class $$et41 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$et41.marker);
  }
  static fromJSON(e) {
    return new $$et41(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 529;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function ei(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$et41, "marker", "ProviderOverloadedError");
export class $$en42 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$en42.marker);
  }
  static fromJSON(e) {
    return new $$en42(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      parseErrorMessage: this.parseErrorMessage
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      response: this.response,
      parseError: this.parseError
    };
  }
  constructor(e) {
    e.parseErrorMessage ??= "message" in e.parseError ? e.parseError.message : void 0;
    super(e);
    ei(this, "response", void 0);
    ei(this, "parseError", void 0);
    ei(this, "parseErrorMessage", void 0);
    this.response = e.response;
    this.parseError = e.parseError;
    this.parseErrorMessage = e.parseErrorMessage;
    null != e.stack && (this.stack = e.stack);
  }
}
ei($$en42, "marker", "ProviderParseResponseError");
export class $$er43 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$er43.marker);
  }
  static fromJSON(e) {
    return new $$er43(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 529;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$er43, "marker", "ProviderRateLimitExceededError");
export class $$ea44 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ea44.marker);
  }
  static fromJSON(e) {
    return new $$ea44(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$ea44, "marker", "ProviderResponseClientError");
export class $$es45 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$es45.marker);
  }
  static fromJSON(e) {
    return new $$es45(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$es45, "marker", "ProviderResponseServerError");
export class $$eo46 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eo46.marker);
  }
  static fromJSON(e) {
    return new $$eo46(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 503;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eo46, "marker", "ProviderServiceBusyError");
export class $$el47 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$el47.marker);
  }
  static fromJSON(e) {
    return new $$el47(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function ed(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$el47, "marker", "ProviderServiceIssueError");
export class $$ec48 extends $$y12 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ec48.marker);
  }
  static fromJSON(e) {
    return new $$ec48(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      provider: this.provider
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    super(e);
    ed(this, "provider", void 0);
    this.provider = e.provider;
    null != e.stack && (this.stack = e.stack);
  }
}
ed($$ec48, "marker", "ProviderSetupError");
export class $$eu49 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eu49.marker);
  }
  static fromJSON(e) {
    return new $$eu49(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 503;
    e.message ??= "Provider failed to send response in time";
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function ep(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eu49, "marker", "ProviderTimedOutError");
export class $$em50 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$em50.marker);
  }
  static fromJSON(e) {
    return new $$em50(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 503;
    super(e);
    ep(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
ep($$em50, "marker", "ProviderUnhealthyError");
export class $$eh51 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eh51.marker);
  }
  static fromJSON(e) {
    return new $$eh51(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 422;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function eg(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eh51, "marker", "ProviderUnsafeOrHarmfulContentError");
export class $$ef52 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ef52.marker);
  }
  static fromJSON(e) {
    return new $$ef52(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      data: this.data
    };
  }
  constructor(e) {
    e.statusCode ??= _$$e.statusCode;
    super(e);
    eg(this, "data", void 0);
    this.data = e.data;
    null != e.stack && (this.stack = e.stack);
  }
}
function e_(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
eg($$ef52, "marker", "StreamingJSONParseError");
export class $$eA53 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eA53.marker);
  }
  static fromJSON(e) {
    return new $$eA53(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message,
      timeoutMillis: this.timeoutMillis
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 503;
    super(e);
    e_(this, "message", void 0);
    e_(this, "timeoutMillis", void 0);
    this.message = e.message;
    this.timeoutMillis = e.timeoutMillis;
    null != e.stack && (this.stack = e.stack);
  }
}
function ey(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
e_($$eA53, "marker", "TimedOutError");
export class $$eb54 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eb54.marker);
  }
  static fromJSON(e) {
    return new $$eb54(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message,
      provider: this.provider,
      model: this.model,
      maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
      numEmbeddingsInCall: this.numEmbeddingsInCall
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 400;
    super(e);
    ey(this, "message", void 0);
    ey(this, "provider", void 0);
    ey(this, "model", void 0);
    ey(this, "maxEmbeddingsPerCall", void 0);
    ey(this, "numEmbeddingsInCall", void 0);
    this.message = e.message;
    this.provider = e.provider;
    this.model = e.model;
    this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall;
    this.numEmbeddingsInCall = e.numEmbeddingsInCall;
    null != e.stack && (this.stack = e.stack);
  }
}
function ev(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
ey($$eb54, "marker", "TooManyEmbeddingValuesForCallError");
export class $$eI55 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eI55.marker);
  }
  static fromJSON(e) {
    return new $$eI55(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= 403;
    super(e);
    ev(this, "message", void 0);
    this.message = e.message;
    null != e.stack && (this.stack = e.stack);
  }
}
function eE(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
ev($$eI55, "marker", "UnauthorizedError");
export class $$ex56 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ex56.marker);
  }
  static fromJSON(e) {
    return new $$ex56(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      prompt: this.prompt
    };
  }
  constructor(e) {
    e.message ??= "User input contains unsafe or harmful text";
    e.statusCode ??= 422;
    super(e);
    eE(this, "prompt", void 0);
    this.prompt = e.prompt;
    null != e.stack && (this.stack = e.stack);
  }
}
function eS(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
eE($$ex56, "marker", "UnsafeOrHarmfulPromptError");
export class $$ew57 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ew57.marker);
  }
  static fromJSON(e) {
    return new $$ew57(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      functionality: this.functionality
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= `Model ${e.model} from provider ${e.provider} does not support ${e.functionality}`;
    super(e);
    eS(this, "functionality", void 0);
    this.functionality = e.functionality;
    null != e.stack && (this.stack = e.stack);
  }
}
eS($$ew57, "marker", "UnsupportedFunctionalityError");
export class $$eC14 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eC14.marker);
  }
  static fromJSON(e) {
    return new $$eC14(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "Figjam cluster, tool not called";
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
function eT(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eC14, "marker", "FigjamClusterToolNotCalledError");
export class $$ek15 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ek15.marker);
  }
  static fromJSON(e) {
    return new $$ek15(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      message: this.message
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      data: this.data
    };
  }
  constructor(e) {
    e.statusCode ??= _$$e.statusCode;
    super(e);
    eT(this, "message", void 0);
    eT(this, "data", void 0);
    this.message = e.message;
    this.data = e.data;
    null != e.stack && (this.stack = e.stack);
  }
}
function eR(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
eT($$ek15, "marker", "FigjamTemplateParsingError");
export class $$eN16 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eN16.marker);
  }
  static fromJSON(e) {
    return new $$eN16(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII(),
      visualType: this.visualType
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.statusCode ??= _$$e.statusCode;
    super(e);
    eR(this, "visualType", void 0);
    this.visualType = e.visualType;
    null != e.stack && (this.stack = e.stack);
  }
}
function eP(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
eR($$eN16, "marker", "FigjamVisualParsingError");
export class $$eO4 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eO4.marker);
  }
  static fromJSON(e) {
    return new $$eO4(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      data: this.data
    };
  }
  constructor(e) {
    e.statusCode ??= _$$e.statusCode;
    super(e);
    eP(this, "data", void 0);
    this.data = e.data;
    null != e.stack && (this.stack = e.stack);
  }
}
function eD(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
eP($$eO4, "marker", "ContentFillIncorrectNumberOfResultsError");
export class $$eL5 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eL5.marker);
  }
  static fromJSON(e) {
    return new $$eL5(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII(),
      data: this.data
    };
  }
  constructor(e) {
    e.statusCode ??= _$$e.statusCode;
    super(e);
    eD(this, "data", void 0);
    this.data = e.data;
    null != e.stack && (this.stack = e.stack);
  }
}
eD($$eL5, "marker", "ContentFillParsingError");
export class $$eF19 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eF19.marker);
  }
  static fromJSON(e) {
    return new $$eF19(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "Failed to generate Image";
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eF19, "marker", "ImageCreationError");
export class $$eM20 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eM20.marker);
  }
  static fromJSON(e) {
    return new $$eM20(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "image_request_error";
    e.statusCode ??= 400;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eM20, "marker", "ImageRequestError");
export class $$ej23 extends $$h9 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$ej23.marker);
  }
  static fromJSON(e) {
    return new $$ej23(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "Invalid image size passed to model";
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$ej23, "marker", "InvalidImageSizeError");
export class $$eU17 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eU17.marker);
  }
  static fromJSON(e) {
    return new $$eU17(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "No kit key or is local provided";
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eU17, "marker", "GeneratePromptNoKitKeyOrIsLocalError");
export class $$eB18 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eB18.marker);
  }
  static fromJSON(e) {
    return new $$eB18(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "No system prompt returned";
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eB18, "marker", "GeneratePromptNoTemplateError");
export class $$eV0 extends $$p8 {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eV0.marker);
  }
  static fromJSON(e) {
    return new $$eV0(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eV0, "marker", "CLIPTextImageEmbeddingsAPIError");
export class $$eG1 extends _$$G {
  static isInstance(e) {
    return _$$G.hasMarker(e, $$eG1.marker);
  }
  static fromJSON(e) {
    return new $$eG1(e);
  }
  getParamsWithoutPII() {
    return {
      ...super.getParamsWithoutPII()
    };
  }
  getParamsWithPII() {
    return {
      ...super.getParamsWithPII()
    };
  }
  constructor(e) {
    e.message ??= "Invalid schema for CLIP text-image embeddings";
    e.statusCode ??= 500;
    super(e);
    null != e.stack && (this.stack = e.stack);
  }
}
!function (e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
}($$eG1, "marker", "CLIPTextImageEmbeddingsInvalidSchemaError");
export const dW = $$eV0;
export const jr = $$eG1;
export const j0 = $$a2;
export const b6 = $$s3;
export const Es = $$eO4;
export const Dr = $$eL5;
export const jG = $$l6;
export const oS = $$c7;
export const HW = $$p8;
export const HA = $$h9;
export const qD = $$g10;
export const XA = $$_11;
export const BA = $$y12;
export const R6 = $$v13;
export const dJ = $$eC14;
export const dr = $$ek15;
export const b3 = $$eN16;
export const gU = $$eU17;
export const Bq = $$eB18;
export const Bv = $$eF19;
export const Nv = $$eM20;
export const oW = $$E21;
export const tm = $$S22;
export const AY = $$ej23;
export const DT = $$C24;
export const x0 = $$k25;
export const d8 = $$N26;
export const NZ = $$O27;
export const Gx = $$L28;
export const EH = $$M29;
export const M_ = $$U30;
export const CV = $$V31;
export const O3 = $$z32;
export const FA = $$H33;
export const xV = $$W34;
export const cD = $$K35;
export const ES = $$q36;
export const ns = $$Z37;
export const de = $$X38;
export const $F = $$Q39;
export const UR = $$ee40;
export const BR = $$et41;
export const o6 = $$en42;
export const Mm = $$er43;
export const U = $$ea44;
export const Ay = $$es45;
export const u8 = $$eo46;
export const c5 = $$el47;
export const br = $$ec48;
export const Tn = $$eu49;
export const QK = $$em50;
export const v9 = $$eh51;
export const mP = $$ef52;
export const On = $$eA53;
export const Ch = $$eb54;
export const D_ = $$eI55;
export const bt = $$ex56;
export const b8 = $$ew57;