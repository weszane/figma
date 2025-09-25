import { useCallback, useMemo } from 'react'
import { useMemoCustom } from '../905/19536'
import { deepEqual } from '../905/382883'
import { shallowEqual } from '../905/605584'
import { ResourceStatus } from '../905/957591'
import { throwTypeError } from '../figma_app/465776'
import { memoizeByArgs } from '../figma_app/815945'

// Original: $$p1
export const LOADING_STATUS = {
  LOADING: 'loading',
  DISABLED: 'disabled',
  ERRORS: 'errors',
  LOADED: 'loaded',
}
export const H = LOADING_STATUS

// Original: $$r0
export const resourceUtils = {
  // Original: merge function
  merge(resources, ...additionalData) {
    if (resources.some(r => r.status === 'loading')) {
      return this.loading()
    }
    const errorResources = resources.filter(r => r.errors && r.status === 'errors').map(r => r.errors)
    if (errorResources.length) {
      return this.error(errorResources.flat())
    }
    if (resources.filter(r => r.status === 'disabled').length > 0) {
      return this.disabled()
    }
    let result = this.loaded([])
    for (const r of resources) {
      result = this.transformData(result, r.data)
    }
    return this.transformData(result, ...additionalData)
  },
  // Original: all function
  all(resources) {
    if (resources.some(r => r.status === 'loading')) {
      return this.loading()
    }
    const errorResources = resources.filter(r => r.errors != null && r.status === 'errors').map(r => r.errors)
    if (errorResources.length > 0) {
      return this.error(errorResources.flat())
    }
    if (resources.filter(r => r.status === 'disabled').length > 0) {
      return this.disabled()
    }
    const data = resources.map(r => r.data)
    return this.loaded(data)
  },
  // Original: transformAll function
  transformAll(resources, transformFn) {
    return this.all(resources).transform(data => transformFn(...data))
  },
  // Original: useTransform function
  useTransform(resource, transformFn, equalityFn = Object.is) {
    const emptySymbol = Symbol('empty')
    const memoizedTransform = useCallback((prev, curr) => prev !== emptySymbol && curr !== emptySymbol && equalityFn(prev, curr), [equalityFn])
    const {
      status,
      data,
    } = resource
    const transformedData = useMemoCustom(() => status === 'loaded' ? transformFn(data) : emptySymbol, [status, data, transformFn], memoizedTransform)
    return useMemo(() => resource.transform(() => {
      if (transformedData === emptySymbol) {
        throw new Error(`useTransform: unexpected EMPTY while result is ${resource.status}`)
      }
      return transformedData
    }), [transformedData, resource])
  },
  // Original: useTransformShallowEqual function
  useTransformShallowEqual(resource, transformFn) {
    return this.useTransform(resource, transformFn, shallowEqual)
  },
  // Original: useTransformDeepEqual function
  useTransformDeepEqual(resource, transformFn) {
    return this.useTransform(resource, transformFn, deepEqual)
  },
  // Original: from function
  from(resource) {
    switch (resource.status) {
      case 'disabled':
        return this.disabled() as DisabledResource
      case 'loading': 
        return this.loading() as LoadedResource
      case 'errors':
        return this.error(resource.errors) as ErrorResource
      case 'loaded':
        return this.loaded(resource.data, resource.errors) as LoadedResource
      default:
        throwTypeError(resource)
    }
  },
  // Original: fromMemoized function
  fromMemoized: memoizeByArgs((resource) => {
    switch (resource.status) {
      case 'disabled':
        return resourceUtils.disabled()
      case 'loading':
        return resourceUtils.loading()
      case 'errors':
        return resourceUtils.error(resource.errors)
      case 'loaded':
        return resourceUtils.loaded(resource.data, resource.errors)
      default:
        throwTypeError(resource)
    }
  }),
  // Original: suspendableFrom function
  suspendableFrom(resource, promiseFn, suspense) {
    switch (resource.status) {
      case 'disabled':
        return new DisabledSuspendableResource(suspense)
      case 'loading':
        suspense.registerPromise(promiseFn())
        return new LoadingSuspendableResource(suspense)
      case 'errors':
        return new ErrorSuspendableResource(resource.errors, suspense)
      case 'loaded':
        return new LoadedSuspendableResource(resource.data, resource.errors, suspense)
      default:
        throwTypeError(resource)
    }
  },
  // Original: loading function
  loading() {
    return new LoadingResource()
  },
  // Original: loadingSuspendable function
  loadingSuspendable(suspense) {
    return new LoadingSuspendableResource(suspense)
  },
  // Original: disabled function
  disabled() {
    return new DisabledResource()
  },
  // Original: disabledSuspendable function
  disabledSuspendable(suspense) {
    return new DisabledSuspendableResource(suspense)
  },
  // Original: error function
  error(errors) {
    return new ErrorResource(errors)
  },
  // Original: errorSuspendable function
  errorSuspendable(errors, suspense) {
    return new ErrorSuspendableResource(errors, suspense)
  },
  // Original: loaded function
  loaded(data, errors = []) {
    return new LoadedResource(data, errors)
  },
  // Original: useMemoizedLoaded function
  useMemoizedLoaded(data, errors = []) {
    return useMemo(() => this.loaded(data, errors), [data, errors])
  },
  // Original: loadedSuspendable function
  loadedSuspendable(data, errors = [], suspense) {
    return new LoadedSuspendableResource(data, errors, suspense)
  },
  // Original: useFromOptionalField function
  useFromOptionalField(field) {
    return useMemo(() => field === undefined || field.status === ResourceStatus.Error ? this.loading() : this.loaded(field.data), [field])
  },
  // Helper for transforming data (original: i function)
  transformData(resource, ...data) {
    return resource.transform(existing => data.reduce((acc, item) => [...(acc || []), ...item], existing))
  },
  // Original: Paginated namespace
  Paginated: {
    loading() {
      return Object.assign(new LoadingResource(), {
        hasNextPage: undefined,
        hasPreviousPage: undefined,
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
      })
    },
    disabled() {
      return Object.assign(new DisabledResource(), {
        hasNextPage: undefined,
        hasPreviousPage: undefined,
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
      })
    },
    error(errors) {
      return Object.assign(new ErrorResource(errors), {
        hasNextPage: undefined,
        hasPreviousPage: undefined,
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
      })
    },
    loaded(data, pagination, errors = []) {
      return Object.assign(new LoadedResource(data, errors), {
        ...pagination,
      })
    },
  },
}

// Original: m class
class LoadingResource {
  status = 'loading'
  data = null
  errors = null
  unwrapOr(defaultValue) {
    return defaultValue
  }

  transform() {
    return resourceUtils.loading()
  }
}

// Original: h class
class LoadingSuspendableResource {
  status = 'loading'
  data = null
  errors = null
  suspense: any
  constructor(suspense) {
    this.suspense = suspense
  }

  unwrapOr(defaultValue) {
    return defaultValue
  }

  transform() {
    return resourceUtils.loadingSuspendable(this.suspense)
  }
}

// Original: g class
export class DisabledResource {
  status = 'disabled'
  data = null
  errors = null
  unwrapOr(defaultValue) {
    return defaultValue
  }

  transform() {
    return resourceUtils.disabled()
  }
}

// Original: f class
class DisabledSuspendableResource {
  status = 'disabled'
  data = null
  errors = null
  suspense: any
  constructor(suspense) {
    this.suspense = suspense
  }

  unwrapOr(defaultValue) {
    return defaultValue
  }

  transform() {
    return resourceUtils.disabledSuspendable(this.suspense)
  }
}

// Original: _ class
class LoadedResource {
  status = 'loaded'
  data: any
  errors: any[]
  constructor(data, errors = []) {
    this.data = data
    this.errors = errors
  }

  unwrapOr() {
    return this.data
  }

  transform(transformFn) {
    return resourceUtils.loaded(transformFn(this.data), this.errors)
  }
}

// Original: A class
class LoadedSuspendableResource {
  status = 'loaded'
  data: any
  errors: any[]
  suspense: any
  constructor(data, errors = [], suspense) {
    this.data = data
    this.errors = errors
    this.suspense = suspense
  }

  unwrapOr() {
    return this.data
  }

  transform(transformFn) {
    return resourceUtils.loadedSuspendable(transformFn(this.data), this.errors, this.suspense)
  }
}

// Original: y class
class ErrorResource {
  status = 'errors'
  data = null
  errors: any
  constructor(errors) {
    this.errors = errors
  }

  unwrapOr(defaultValue) {
    return defaultValue
  }

  transform() {
    return resourceUtils.error(this.errors)
  }
}

// Original: b class
class ErrorSuspendableResource {
  status = 'errors'
  data = null
  errors: any
  suspense: any
  constructor(errors, suspense) {
    this.errors = errors
    this.suspense = suspense
  }

  unwrapOr(defaultValue) {
    return defaultValue
  }

  transform() {
    return resourceUtils.errorSuspendable(this.errors, this.suspense)
  }
}

// Exports (original: Qw = $$r0, H = $$p1)
export const Qw = resourceUtils
