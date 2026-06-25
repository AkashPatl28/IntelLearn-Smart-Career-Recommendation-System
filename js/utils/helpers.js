export function requireAuthOrRedirect(user, redirectTo = "./index.html") {
  if (!user) window.location.href = redirectTo;
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
