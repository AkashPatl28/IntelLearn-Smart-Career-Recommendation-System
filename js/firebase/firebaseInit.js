import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";

import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const rtdb = getDatabase(app);

// Optional: analytics (only works on https / localhost)
export const analytics = (() => {
  try { return getAnalytics(app); }
  catch { return null; }
})();
