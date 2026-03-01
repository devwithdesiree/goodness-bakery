
export function isPreorderOpen() {
  const FORCE_OPEN = false; // Set to true to force open the preorder form for testing
  if (FORCE_OPEN) return true;

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  if (day === 5 || day === 6) return false;
  if (day >= 0 && day <= 3) return true;

  if (day === 4) {
    return hour < 23 || (hour === 23 && minute <= 59);
  }

  return false;
}
