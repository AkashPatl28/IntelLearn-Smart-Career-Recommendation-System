import {
  ref,
  set,
  update,
  get
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

import { rtdb } from "../firebase/firebaseInit.js";

/**
 * assessments/{uid}/latest
 */
export async function saveAssessment(uid, payload, status = "draft") {
  const aRef = ref(rtdb, `assessments/${uid}/latest`);

  // Keep createdAt once, update updatedAt always
  const snap = await get(aRef);
  const exists = snap.exists();

  const dataToSave = {
    ...payload,
    status,
    updatedAt: Date.now(),
    ...(exists ? {} : { createdAt: Date.now() })
  };

  // update merges, set replaces. Here update is safer.
  await update(aRef, dataToSave);
}

export async function getLatestAssessment(uid) {
  const aRef = ref(rtdb, `assessments/${uid}/latest`);
  const snap = await get(aRef);
  return snap.exists() ? snap.val() : null;
}
