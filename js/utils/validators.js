export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function minLen(str, n) {
  return (str || "").trim().length >= n;
}
