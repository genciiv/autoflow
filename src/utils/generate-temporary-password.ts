export function generateTemporaryPassword() {
  const random = Math.random().toString(36).slice(-8);
  return `AutoFlow-${random}!`;
}