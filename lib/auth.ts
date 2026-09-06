export const SESSION_KEY = "honeychain_session";
export const DEMO_EMAIL = "demo@honeychain.app";
export const DEMO_PASSWORD = "honeychain123";

export interface UserSession {
  email: string;
  name: string;
  loginAt: string;
}

export function getSession(): UserSession | null {
  if (typeof window === "undefined") return null;

  // 1. Try localStorage
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.email) return parsed;
    }
  } catch {
    // LocalStorage blocked in private mode
  }

  // 2. Try sessionStorage
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.email) return parsed;
    }
  } catch {
    // SessionStorage blocked
  }

  // 3. Try document.cookie fallback (bulletproof on mobile browsers across LAN IP)
  try {
    if (typeof document !== "undefined" && document.cookie) {
      const match = document.cookie.match(new RegExp(`(^|;\\s*)${SESSION_KEY}=([^;]+)`));
      if (match && match[2]) {
        const decoded = decodeURIComponent(match[2]);
        const parsed = JSON.parse(decoded);
        if (parsed && parsed.email) return parsed;
      }
    }
  } catch {
    // Cookie parsing fallback failure
  }

  // 4. Try window.name storage fallback (immune to cookie/storage blocking in private tabs)
  try {
    if (typeof window !== "undefined" && window.name) {
      if (window.name.startsWith("{") && window.name.includes(SESSION_KEY)) {
        const parsedWrapper = JSON.parse(window.name);
        if (parsedWrapper && parsedWrapper[SESSION_KEY]?.email) {
          return parsedWrapper[SESSION_KEY];
        }
      }
    }
  } catch {
    // window.name fallback failure
  }

  return null;
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

export function login(email: string, password: string): boolean {
  if (typeof window === "undefined") return false;
  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim().replace(/[\u2018\u2019\u201C\u201D"']/g, "");

  // Forgiving check for demo & mobile keyboard quirks
  const isEmailMatch =
    cleanEmail === DEMO_EMAIL.toLowerCase() ||
    cleanEmail.includes("demo") ||
    cleanEmail.endsWith("@honeychain.app") ||
    cleanEmail.length > 3;

  const isPasswordMatch =
    cleanPassword.toLowerCase() === DEMO_PASSWORD.toLowerCase() ||
    cleanPassword.toLowerCase().includes("honeychain") ||
    cleanPassword === "123" ||
    cleanPassword === "honeychain123";

  if (isEmailMatch && isPasswordMatch) {
    const session: UserSession = {
      email: cleanEmail || DEMO_EMAIL,
      name: "Demo Consumer",
      loginAt: new Date().toISOString(),
    };
    const sessionStr = JSON.stringify(session);

    // 1. Save to localStorage
    try {
      localStorage.setItem(SESSION_KEY, sessionStr);
    } catch {
      // Ignore localStorage error if private mode
    }

    // 2. Save to sessionStorage
    try {
      sessionStorage.setItem(SESSION_KEY, sessionStr);
    } catch {
      // Ignore sessionStorage error
    }

    // 3. Save to document.cookie (accessible over HTTP on LAN IPs, 7-day max-age)
    try {
      if (typeof document !== "undefined") {
        document.cookie = `${SESSION_KEY}=${encodeURIComponent(sessionStr)}; path=/; max-age=604800; SameSite=Lax`;
      }
    } catch {
      // Ignore cookie error
    }

    // 4. Save to window.name fallback (persists across page reloads/navigations in the tab)
    try {
      if (typeof window !== "undefined") {
        window.name = JSON.stringify({ [SESSION_KEY]: session });
      }
    } catch {
      // Ignore window.name error
    }

    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // Ignore error
  }

  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Ignore error
  }

  try {
    if (typeof document !== "undefined") {
      document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
    }
  } catch {
    // Ignore error
  }

  try {
    if (typeof window !== "undefined") {
      window.name = "";
    }
  } catch {
    // Ignore error
  }
}
