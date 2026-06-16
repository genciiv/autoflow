import { db } from "@/lib/db";

export async function createAuditLog({
  businessId,
  userId,
  action,
  entity,
  entityId,
  message,
}: {
  businessId?: string;
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  message?: string;
}) {
  return db.auditLog.create({
    data: {
      businessId,
      userId,
      action,
      entity,
      entityId,
      message,
    },
  });
}