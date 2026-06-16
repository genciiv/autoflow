import { isTrialActive } from "@/utils/trial";

export function getBusinessAccessStatus({
  status,
  trialEndsAt,
  subscriptionEndsAt,
}: {
  status: string;
  trialEndsAt?: Date | null;
  subscriptionEndsAt?: Date | null;
}) {
  if (status === "suspended") {
    return "suspended";
  }

  if (isTrialActive(trialEndsAt)) {
    return "trial";
  }

  if (
    subscriptionEndsAt &&
    subscriptionEndsAt > new Date()
  ) {
    return "active";
  }

  return "expired";
}