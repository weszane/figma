import { reportError } from '../905/11';
import { sha1BytesFromHex } from '../905/125019';
import { ServiceCategories as _$$e } from '../905/165054';
import { encodeBase64 } from '../905/561685';
export class $$o2 extends Error {
  constructor(e) {
    super(e);
  }
}
export async function $$l0(e, t, i, n, r, a) {
  let l = new FormData();
  let d = '';
  for (let e in n) {
    e === 'key' && (d = n[e]);
    l.append(e, n[e]);
  }
  l.append('content-type', a);
  l.append('file', new Blob([r]));
  let c = null;
  let u = null;
  try {
    if (c = await fetch(i, {
      method: 'post',
      body: l
    }), c.status === 204) {
      return d;
    }
  } catch (e) {
    u = e;
  }
  let p = !1;
  let m = '';
  let h = c?.body?.getReader();
  if (h) {
    let e = new TextDecoder();
    for (; ;) {
      let {
        done,
        value
      } = await h.read();
      if (done) break;
      m += e.decode(value);
    }
    let t = new DOMParser().parseFromString(m, 'text/xml');
    p = !!(t.querySelector('Error') && t.querySelector('Method')?.textContent === 'POST' && t.querySelector('ResourceType')?.textContent === 'OBJECT' && t.querySelector('RequestId'));
  }
  if (!p) {
    let n = `[${t}] uploadToPresignedPost encountered non-S3 response`;
    let r = {
      response: m,
      status: c?.status,
      responseUrl: c?.url,
      requestUrl: i,
      error: u?.toString()
    };
    reportError(e, new Error(n), {
      extra: r
    });
    console.error(n, r);
    return new $$o2(n);
  }
  throw new Error(`Failed to upload file: ${i}`);
}
export async function $$d1(e, t, i, s, o = _$$e.WAYFINDING) {
  let c = sha1BytesFromHex(i.sha1);
  let u = encodeBase64(c);
  t['x-amz-checksum-sha1'] = u;
  return await $$l0(o, 'uploadVideoToPresignedPost', e, t, i.bytes, s);
}
export const ET = $$l0;
export const VV = $$d1;
export const qW = $$o2;
