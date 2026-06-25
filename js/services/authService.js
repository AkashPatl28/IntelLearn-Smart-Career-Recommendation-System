import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import { auth } from "../firebase/firebaseInit.js";
import { upsertUserProfile } from "./dbService.js";

const googleProvider = new GoogleAuthProvider();

export async function registerWithEmail(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });

  await upsertUserProfile(cred.user.uid, {
    name,
    email: cred.user.email,
    provider: "password"
  });

  return cred.user;
}

export async function loginWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function loginWithGoogle() {
  const cred = await signInWithPopup(auth, googleProvider);

  await upsertUserProfile(cred.user.uid, {
    name: cred.user.displayName || "Student",
    email: cred.user.email,
    provider: "google"
  });

  return cred.user;
}

export async function logout() {
  await signOut(auth);
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
  return auth.currentUser;
}
