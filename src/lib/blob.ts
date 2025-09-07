import { put, list } from "@vercel/blob";

export async function storeBlob(pathname: string, data: Blob | ArrayBuffer | Buffer | Uint8Array | string, contentType = "application/octet-stream") {
  const body = data instanceof Blob ? data : new Blob([data as any], { type: contentType });
  const blob = await put(pathname, body, { access: "public", addRandomSuffix: true, contentType });
  return { url: blob.url, downloadUrl: blob.downloadUrl, pathname: blob.pathname };
}

export async function listBlobs(prefix: string) {
  const { blobs } = await list({ prefix, limit: 1000 });
  return blobs; // [{ pathname, url, downloadUrl, size, ... }]
}
