export function getPlayerId() {
  const token = localStorage.getItem("token");
  if (!token) return "guest";
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id || "guest";
  } catch (e) {
    return "guest";
  }
}

export function getUserDataKey(key) {
  return `${key}_${getPlayerId()}`;
}
