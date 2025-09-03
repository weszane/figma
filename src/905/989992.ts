import { useCallback, useMemo } from 'react'
import { DD } from '../905/19536'
import { c2 } from '../905/382883'
import { A as _$$A } from '../905/605584'
import { ResourceStatus } from '../905/957591'
import { throwTypeError } from '../figma_app/465776'
import { xx } from '../figma_app/815945'

// Original: $$p1
const LOADING_STATUS = {
  LOADING: 'loading',
  DISABLED: 'disabled',
  ERRORS: 'errors',
  LOADED: 'loaded',
}
export const H = LOADING_STATUS

// Original: $$r0
export const resourceUtils = {
  // Original: merge function
  merge(resources: any[], ...additionalData: any[]) {
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
  all(resources: any[]) {
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
  transformAll(resources: any[], transformFn: (...args: any[]) => any) {
    return this.all(resources).transform((data: any[]) => transformFn(...data))
  },

  // Original: useTransform function
  useTransform(resource: any, transformFn: (data: any) => any, equalityFn: (a: any, b: any) => boolean = Object.is) {
    const emptySymbol = Symbol('empty')
    const memoizedTransform = useCallback((prev: any, curr: any) => prev !== emptySymbol && curr !== emptySymbol && equalityFn(prev, curr), [equalityFn])
    const { status, data } = resource
    const transformedData = DD(() => status === 'loaded' ? transformFn(data) : emptySymbol, [status, data, transformFn], memoizedTransform)
    return useMemo(() => resource.transform(() => {
      if (transformedData === emptySymbol) {
        throw new Error(`useTransform: unexpected EMPTY while result is ${resource.status}`)
      }
      return transformedData
    }), [transformedData, resource])
  },

  // Original: useTransformShallowEqual function
  useTransformShallowEqual(resource: any, transformFn: (data: any) => any) {
    return this.useTransform(resource, transformFn, _$$A)
  },

  // Original: useTransformDeepEqual function
  useTransformDeepEqual(resource: any, transformFn: (data: any) => any) {
    return this.useTransform(resource, transformFn, c2)
  },

  // Original: from function
  from(resource: any) {
    switch (resource.status) {
      case 'disabled':
        return this.disabled()
      case 'loading':
        return this.loading()
      case 'errors':
        return this.error(resource.errors)
      case 'loaded':
        return this.loaded(resource.data, resource.errors)
      default:
        throwTypeError(resource)
    }
  },

  // Original: fromMemoized function
  fromMemoized: xx((resource: any) => {
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
  suspendableFrom(resource: any, promiseFn: () => Promise<any>, suspense: any) {
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
  loadingSuspendable(suspense: any) {
    return new LoadingSuspendableResource(suspense)
  },

  // Original: disabled function
  disabled() {
    return new DisabledResource()
  },

  // Original: disabledSuspendable function
  disabledSuspendable(suspense: any) {
    return new DisabledSuspendableResource(suspense)
  },

  // Original: error function
  error(errors: any[]) {
    return new ErrorResource(errors)
  },

  // Original: errorSuspendable function
  errorSuspendable(errors: any[], suspense: any) {
    return new ErrorSuspendableResource(errors, suspense)
  },

  // Original: loaded function
  loaded(data: any, errors: any[] = []) {
    return new LoadedResource(data, errors)
  },

  // Original: useMemoizedLoaded function
  useMemoizedLoaded(data: any, errors: any[] = []) {
    return useMemo(() => this.loaded(data, errors), [data, errors])
  },

  // Original: loadedSuspendable function
  loadedSuspendable(data: any, errors: any[] = [], suspense: any) {
    return new LoadedSuspendableResource(data, errors, suspense)
  },

  // Original: useFromOptionalField function
  useFromOptionalField(field: any) {
    return useMemo(() => field === undefined || field.status === ResourceStatus.Error ? this.loading() : this.loaded(field.data), [field])
  },

  // Helper for transforming data (original: i function)
  transformData(resource: any, ...data: any[]) {
    return resource.transform((existing: any) => data.reduce((acc, item) => [...(acc || []), ...item], existing))
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
    error(errors: any[]) {
      return Object.assign(new ErrorResource(errors), {
        hasNextPage: undefined,
        hasPreviousPage: undefined,
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
      })
    },
    loaded(data: any, pagination: any, errors: any[] = []) {
      return Object.assign(new LoadedResource(data, errors), {
        ...pagination,
      })
    },
  },
}

// Original: m class
class LoadingResource {
  status: string = 'loading'
  data: any = null
  errors: any = null

  unwrapOr(defaultValue: any): any {
    return defaultValue
  }

  transform(): LoadingResource {
    return resourceUtils.loading()
  }
}

// Original: h class
class LoadingSuspendableResource {
  status: string = 'loading'
  data: any = null
  errors: any = null
  suspense: any

  constructor(suspense: any) {
    this.suspense = suspense
  }

  unwrapOr(defaultValue: any): any {
    return defaultValue
  }

  transform(): LoadingSuspendableResource {
    return resourceUtils.loadingSuspendable(this.suspense)
  }
}

// Original: g class
class DisabledResource {
  status: string = 'disabled'
  data: any = null
  errors: any = null

  unwrapOr(defaultValue: any): any {
    return defaultValue
  }

  transform(): DisabledResource {
    return resourceUtils.disabled()
  }
}

// Original: f class
class DisabledSuspendableResource {
  status: string = 'disabled'
  data: any = null
  errors: any = null
  suspense: any

  constructor(suspense: any) {
    this.suspense = suspense
  }

  unwrapOr(defaultValue: any): any {
    return defaultValue
  }

  transform(): DisabledSuspendableResource {
    return resourceUtils.disabledSuspendable(this.suspense)
  }
}

// Original: _ class
class LoadedResource {
  status: string = 'loaded'
  data: any
  errors: any[]

  constructor(data: any, errors: any[] = []) {
    this.data = data
    this.errors = errors
  }

  unwrapOr(): any {
    return this.data
  }

  transform(transformFn: (data: any) => any): LoadedResource {
    return resourceUtils.loaded(transformFn(this.data), this.errors)
  }
}

// Original: A class
class LoadedSuspendableResource {
  status: string = 'loaded'
  data: any
  errors: any[]
  suspense: any

  constructor(data: any, errors: any[] = [], suspense: any) {
    this.data = data
    this.errors = errors
    this.suspense = suspense
  }

  unwrapOr(): any {
    return this.data
  }

  transform(transformFn: (data: any) => any): LoadedSuspendableResource {
    return resourceUtils.loadedSuspendable(transformFn(this.data), this.errors, this.suspense)
  }
}

// Original: y class
class ErrorResource {
  status: string = 'errors'
  data: any = null
  errors: any[]

  constructor(errors: any[]) {
    this.errors = errors
  }

  unwrapOr(defaultValue: any): any {
    return defaultValue
  }

  transform(): ErrorResource {
    return resourceUtils.error(this.errors)
  }
}

// Original: b class
class ErrorSuspendableResource {
  status: string = 'errors'
  data: any = null
  errors: any[]
  suspense: any

  constructor(errors: any[], suspense: any) {
    this.errors = errors
    this.suspense = suspense
  }

  unwrapOr(defaultValue: any): any {
    return defaultValue
  }

  transform(): ErrorSuspendableResource {
    return resourceUtils.errorSuspendable(this.errors, this.suspense)
  }
}

// Exports (original: Qw = $$r0, H = $$p1)
export const Qw = resourceUtils
