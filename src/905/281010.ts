import { XHR } from '../905/910117'
import { createNoOpValidator } from '../figma_app/181241'

/**
 * AccountTypeRequestHandler - Handles account type request operations.
 */
export class AccountTypeRequestHandler {
  private approveRequestsSchemaValidator = createNoOpValidator();
  private denyRequestsSchemaValidator = createNoOpValidator();

  /**
   * Approves account type requests.
   * @param e - Request payload.
   * @returns Promise resolving to the approval result.
   * (Original: approveRequests)
   */
  async approveRequests(e: any): Promise<any> {
    return this.approveRequestsSchemaValidator.validate(async ({ xr: t }) => {
      return await t.post('/api/account_type_requests/approve', e);
    });
  }

  /**
   * Denies account type requests.
   * @param e - Request payload.
   * @returns Promise resolving to the denial result.
   * (Original: denyRequests)
   */
  async denyRequests(e: any): Promise<any> {
    return this.denyRequestsSchemaValidator.validate(async ({ xr: t }) => {
      return await t.post('/api/account_type_requests/deny', e);
    });
  }

  /**
   * Nudges a specific account type request.
   * @param e - Object containing request_id and payload.
   * @returns Promise resolving to the nudge result.
   * (Original: nudgeRequest)
   */
  async nudgeRequest(e: { request_id: string; [key: string]: any }): Promise<any> {
    const { request_id } = e;
    return XHR.post(`/api/account_type_requests/${request_id}/nudge`, e);
  }

  /**
   * Dismisses the nudge request badge for a specific request.
   * @param e - Object containing request_id and payload.
   * @returns Promise resolving to the dismiss result.
   * (Original: dismissNudgeRequestBadge)
   */
  async dismissNudgeRequestBadge(e: { request_id: string; [key: string]: any }): Promise<any> {
    const { request_id } = e;
    return XHR.post(`/api/account_type_requests/${request_id}/nudge/dismiss_badge`, e);
  }

  /**
   * Updates the message for a specific account type request.
   * @param e - Object containing request_id and payload.
   * @returns Promise resolving to the update result.
   * (Original: updateRequestMessage)
   */
  async updateRequestMessage(e: { request_id: string; [key: string]: any }): Promise<any> {
    const { request_id } = e;
    return XHR.post(`/api/account_type_requests/${request_id}/update_message`, e);
  }
}

/** Exported instance for usage. */
export const accountTypeRequestHandler = new AccountTypeRequestHandler();
export const w = accountTypeRequestHandler
