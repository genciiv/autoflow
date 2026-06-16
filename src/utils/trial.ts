export function getTrialEndDate(days = 30) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

export function isTrialActive(trialEndsAt?: Date | null) {
  if (!trialEndsAt) {
    return false;
  }

  return trialEndsAt > new Date();
}

export function getTrialDaysLeft(trialEndsAt?: Date | null) {
  if (!trialEndsAt) {
    return 0;
  }

  const now = new Date();
  const diff = trialEndsAt.getTime() - now.getTime();

  if (diff <= 0) {
    return 0;
  }

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}