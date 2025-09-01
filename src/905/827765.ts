class n extends Error {
  constructor(e, t, i, n) {
    super(e);
    this.name = "UploadError";
    this.url = t;
    this.status = i;
    this.responseText = n;
  }
}
export async function $$r1(e, t, i = {}) {
  let {
    headers = {},
    fetchOptions = {}
  } = i;
  try {
    let i = await fetch(e, {
      method: "POST",
      body: t,
      headers,
      ...fetchOptions
    });
    if (!i.ok) {
      let t = await i.text().catch(() => "No response body");
      throw new n(`HTTP Error: ${i.status} ${i.statusText}`, e, i.status, t.length <= 200 ? t : t.substring(0, 200) + (t.length > 200 ? "..." : ""));
    }
    return i;
  } catch (t) {
    if (t instanceof n) throw t;
    throw new n(`Upload Error: ${t instanceof Error ? t.message : t}`, e);
  }
}
export async function $$a0(e, t = {}) {
  return await Promise.all(e.map(({
    url: e,
    formData: i,
    options: n = {}
  }) => $$r1(e, i, {
    ...t,
    ...n,
    headers: {
      ...(t.headers || {}),
      ...(n.headers || {})
    },
    fetchOptions: {
      ...(t.fetchOptions || {}),
      ...(n.fetchOptions || {})
    }
  })));
}
export const aB = $$a0;
export const yr = $$r1; 
