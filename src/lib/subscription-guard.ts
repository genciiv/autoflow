import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getCurrentBusinessId } from "@/lib/tenant";
import { getBusinessAccessStatus } from "@/lib/subscription-status";

export async function requireActiveSubscription() {
  const businessId = await getCurrentBusinessId();

  const business = await db.business.findUnique({
    where: {
      id: businessId,
    },
  });

  if (!business) {
    redirect("/auth/login");
    return;
  }

  const accessStatus = getBusinessAccessStatus({
    status: business.status,
    trialEndsAt: business.trialEndsAt,
    subscriptionEndsAt: business.subscriptionEndsAt,
  });

  switch (accessStatus) {
    case "expired":
      redirect("/subscription-expired");
      break;

    case "suspended":
      redirect("/subscription-suspended");
      break;

    case "trial":
    case "active":
    default:
      break;
  }

  return business;
}