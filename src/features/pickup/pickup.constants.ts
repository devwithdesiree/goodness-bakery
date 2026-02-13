export const PRICES: Record<string, number> = {
  "6 Pack": 2200,
  "12 Pack": 4200,
};

export function isPreorderOpen() {
  const FORCE_OPEN = true;
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
