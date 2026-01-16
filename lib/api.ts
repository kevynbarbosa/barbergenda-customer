export type ApiError = {
  status: number;
  message: string;
  payload?: unknown;
};

type ApiParseMode = "json" | "text" | "void";

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  baseUrl?: string;
  body?: BodyInit | Record<string, unknown> | null;
  parseAs?: ApiParseMode;
};

const ABSOLUTE_URL_RE = /^https?:\/\//i;

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL ?? "";
}

function buildApiUrl(baseUrl: string, path: string) {
  if (ABSOLUTE_URL_RE.test(path)) return path;
  if (!baseUrl) return path;
  const normalizedBase = baseUrl.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

export async function apiFetch<T>(
  path: string,
  { baseUrl = getApiBaseUrl(), parseAs = "json", headers, body, ...init }: ApiRequestOptions = {},
): Promise<T> {
  const url = buildApiUrl(baseUrl, path);
  const requestHeaders = new Headers(headers);
  let requestBody: BodyInit | null | undefined = body ?? undefined;

  if (isPlainObject(body)) {
    requestBody = JSON.stringify(body);
    if (!requestHeaders.has("Content-Type")) {
      requestHeaders.set("Content-Type", "application/json");
    }
  }

  const response = await fetch(url, {
    ...init,
    headers: requestHeaders,
    body: requestBody,
  });

  if (!response.ok) {
    let payload: unknown = null;
    let message = response.statusText || "Erro ao comunicar com o backend.";

    try {
      payload = await response.clone().json();
      if (payload && typeof payload === "object" && "message" in payload) {
        const maybeMessage = (payload as { message?: string }).message;
        if (maybeMessage) message = maybeMessage;
      }
    } catch {
      try {
        payload = await response.text();
      } catch {
        payload = null;
      }
    }

    throw { status: response.status, message, payload } satisfies ApiError;
  }

  if (parseAs === "void") {
    return undefined as T;
  }

  if (parseAs === "text") {
    return (await response.text()) as T;
  }

  return (await response.json()) as T;
}
