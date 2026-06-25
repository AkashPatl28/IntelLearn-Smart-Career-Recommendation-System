import {
  ref,
  set,
  update,
  get
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

import { rtdb } from "../firebase/firebaseInit.js";

/**
 * users/{uid}
 */
export async function upsertUserProfile(uid, data) {
  const userRef = ref(rtdb, `users/${uid}`);

  // If first time, we want createdAt to exist.
  const snap = await get(userRef);
  const exists = snap.exists();

  const payload = {
    ...data,
    updatedAt: Date.now(),
    ...(exists ? {} : { createdAt: Date.now() })
  };

  // Use update so it merges fields without deleting old ones.
  await update(userRef, payload);
}

export async function getUserProfile(uid) {
  const userRef = ref(rtdb, `users/${uid}`);
  const snap = await get(userRef);
  return snap.exists() ? snap.val() : null;
}
