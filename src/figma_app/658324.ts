import { keyBy } from 'lodash-es';
import { useMemo } from 'react';
import { PlanInvoiceService } from '../905/223084';
import { getI18nString } from '../905/303541';
import { logger } from '../905/651849';
import { liveStoreInstance, setupResourceAtomHandler } from '../905/713695';
import { useErrorFlash } from '../905/787489';
import { atom, atomStoreManager, useAtomWithSubscription } from '../figma_app/27355';
import { InvoiceState } from '../figma_app/934005';

// Atom to store invoices keyed by ID
const invoicesAtom = atom({});

/**
 * Updates the invoices atom with keyed invoices.
 * @param invoices - Array of invoice objects
 */
function updateInvoicesAtom(invoices: any[]) {
  const keyedInvoices = keyBy(invoices, invoice => invoice.id);
  atomStoreManager.set(invoicesAtom, existing => ({
    ...existing,
    ...keyedInvoices
  }));
}

// Query for fetching plan invoices
const planInvoicesQuery = liveStoreInstance.Query({
  fetch: async (params: {
    planType: any;
    planId: any;
  }) => {
    const invoices = (await PlanInvoiceService.getPlanInvoices(params)).data.meta.invoices;
    updateInvoicesAtom(invoices);
    return invoices;
  }
});

/**
 * Hook to transform and filter invoices using the atom.
 * @param resourceAtom - The resource atom
 * @param filterState - Optional state to filter by
 * @returns Memoized transformed invoices
 */
function useTransformedInvoices(resourceAtom: any, filterState?: any) {
  const atomValue = useAtomWithSubscription(invoicesAtom);
  return useMemo(() => resourceAtom.transform((invoices: any[]) => {
    let transformed = invoices.map(invoice => atomValue[invoice.id] ?? invoice);
    if (filterState) {
      transformed = transformed.filter(invoice => invoice.state === filterState);
    }
    return transformed;
  }), [resourceAtom, filterState, atomValue]);
}

/**
 * Hook to fetch and return plan invoices.
 * @param params - Parameters for the query
 * @param options - Additional options
 * @returns Transformed invoices
 */
export function usePlanInvoices({
  planType,
  planId
}: {
  planType: any;
  planId: any;
}, options: any = {}) {
  const [resourceAtom] = setupResourceAtomHandler(planInvoicesQuery({
    planType,
    planId
  }), options);
  useErrorFlash(resourceAtom, getI18nString('plan_invoices.generic_load_error'));
  return useTransformedInvoices(resourceAtom);
}

// Query for fetching upcoming plan invoices
const upcomingPlanInvoicesQuery = liveStoreInstance.Query({
  fetch: async ({
    planType,
    planId
  }: {
    planType: any;
    planId: any;
  }) => {
    const invoices = (await PlanInvoiceService.getUpcomingPlanInvoices({
      planType,
      planId
    })).data.meta.invoices as any[];
    updateInvoicesAtom(invoices);
    return invoices;
  }
});

/**
 * Fetches upcoming invoices and updates the mutation.
 * @param params - Parameters for the query
 */
export async function fetchAndUpdateUpcomingInvoices(params: {
  planType: any;
  planId: any;
}) {
  try {
    const upcomingInvoices = await liveStoreInstance.fetch(upcomingPlanInvoicesQuery(params), {
      policy: 'networkOnly'
    });
    const mutation = liveStoreInstance.getMutation(updatePlanInvoicesWithUpcomingMutation);
    await mutation({
      queryArgs: params,
      upcomingPlanInvoices: upcomingInvoices
    });
  } catch (error) {
    logger.error(error);
  }
}

// Mutation to update plan invoices with upcoming ones
const updatePlanInvoicesWithUpcomingMutation = liveStoreInstance.Mutation((_, {
  query
}: any) => {
  query.mutate(planInvoicesQuery(_.queryArgs), (existingInvoices: any[]) => [..._.upcomingPlanInvoices, ...existingInvoices.filter(({
    state
  }) => state !== InvoiceState.PENDING)]);
});

// Query for fetching open plan invoices
const openPlanInvoicesQuery = liveStoreInstance.Query({
  fetch: async ({
    planType,
    planId
  }: {
    planType: any;
    planId: any;
  }) => {
    const invoices = (await PlanInvoiceService.getOpenPlanInvoices({
      planType,
      planId
    })).data.meta.invoices as any[];
    updateInvoicesAtom(invoices);
    return invoices;
  },
  enabled: (params: any) => !!params
});

/**
 * Hook to fetch and return open plan invoices.
 * @param params - Parameters for the query
 * @param options - Additional options
 * @returns Filtered open invoices
 */
export function useOpenPlanInvoices(params: {
  planType: any;
  planId: any;
}, options: any = {}) {
  const [resourceAtom] = setupResourceAtomHandler(openPlanInvoicesQuery(params), options);
  useErrorFlash(resourceAtom, getI18nString('plan_invoices.generic_load_error'));
  return useTransformedInvoices(resourceAtom, InvoiceState.OPEN);
}

// Updated exports with meaningful names
export const Ti = useOpenPlanInvoices;
export const bQ = usePlanInvoices;
export const jL = fetchAndUpdateUpcomingInvoices;
