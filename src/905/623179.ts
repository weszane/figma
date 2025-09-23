import { reportError } from '../905/11';
import { sha1BytesFromHex } from '../905/125019';
import { ServiceCategories } from '../905/165054';
import { encodeBase64 } from '../905/561685';

/**
 * Custom error class for upload failures.
 * Originally named $$o2.
 */
export class UploadError extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Uploads a file to a presigned POST URL.
 * Originally named $$l0.
 * @param errorReporter - Function to report errors.
 * @param operationName - Name of the operation for logging.
 * @param url - The presigned POST URL.
 * @param fields - Form fields to include in the request.
 * @param fileBytes - The file content as bytes.
 * @param contentType - The content type of the file.
 * @returns The key from the fields if successful, or throws an error.
 */
export async function uploadToPresignedPost(errorReporter: any, operationName: string, url: string, fields: Record<string, string>, fileBytes: Uint8Array<any>, contentType: string): Promise<string> {
  const formData = new FormData();
  let key = '';
  for (const field in fields) {
    if (field === 'key') {
      key = fields[field];
    }
    formData.append(field, fields[field]);
  }
  formData.append('content-type', contentType);
  formData.append('file', new Blob([fileBytes]));
  let response: Response | null = null;
  let fetchError: any = null;
  try {
    response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    if (response.status === 204) {
      return key;
    }
  } catch (error) {
    fetchError = error;
  }

  // Check if it's an S3 error response
  const isS3Error = await checkIfS3Error(response);
  if (!isS3Error) {
    const errorMessage = `[${operationName}] uploadToPresignedPost encountered non-S3 response`;
    const errorDetails = {
      response: await getResponseText(response),
      status: response?.status,
      responseUrl: response?.url,
      requestUrl: url,
      error: fetchError?.toString()
    };
    reportError(errorReporter, new Error(errorMessage), {
      extra: errorDetails
    });
    console.error(errorMessage, errorDetails);
    throw new UploadError(errorMessage);
  }
  throw new Error(`Failed to upload file: ${url}`);
}

/**
 * Helper function to check if the response indicates an S3 error.
 * @param response - The fetch response.
 * @returns True if it's an S3 error, false otherwise.
 */
async function checkIfS3Error(response: Response | null): Promise<boolean> {
  if (!response?.body) return false;
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let responseText = '';
  while (true) {
    const {
      done,
      value
    } = await reader.read();
    if (done) break;
    responseText += decoder.decode(value);
  }
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(responseText, 'text/xml');
  return !!(xmlDoc.querySelector('Error') && xmlDoc.querySelector('Method')?.textContent === 'POST' && xmlDoc.querySelector('ResourceType')?.textContent === 'OBJECT' && xmlDoc.querySelector('RequestId'));
}

/**
 * Helper function to get response text.
 * @param response - The fetch response.
 * @returns The response text.
 */
async function getResponseText(response: Response | null): Promise<string> {
  if (!response?.body) return '';
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = '';
  while (true) {
    const {
      done,
      value
    } = await reader.read();
    if (done) break;
    text += decoder.decode(value);
  }
  return text;
}

/**
 * Uploads a video file to a presigned POST URL with SHA1 checksum.
 * Originally named $$d1.
 * @param url - The presigned POST URL.
 * @param fields - Form fields to include in the request.
 * @param fileInfo - Object containing sha1 and bytes of the file.
 * @param contentType - The content type of the file.
 * @param serviceCategory - The service category, defaults to WAYFINDING.
 * @returns The result of the upload.
 */
export async function uploadVideoToPresignedPost(url: string, fields: Record<string, string>, fileInfo: {
  sha1: string;
  bytes: Uint8Array;
}, contentType: string, serviceCategory = ServiceCategories.WAYFINDING): Promise<string> {
  const sha1Bytes = sha1BytesFromHex(fileInfo.sha1);
  const base64Sha1 = encodeBase64(sha1Bytes);
  fields['x-amz-checksum-sha1'] = base64Sha1;
  return await uploadToPresignedPost(serviceCategory, 'uploadVideoToPresignedPost', url, fields, fileInfo.bytes, contentType);
}

// Updated exports to match refactored names
export const ET = uploadToPresignedPost;
export const VV = uploadVideoToPresignedPost;
export const qW = UploadError;
