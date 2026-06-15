import { ROLES } from "@/constants/roles";

export function isPlatformAdmin(role?: string | null) {
  return role === ROLES.PLATFORM_ADMIN;
}

export function isBusinessUser(role?: string | null) {
  return [
    ROLES.OWNER,
    ROLES.MANAGER,
    ROLES.MECHANIC,
    ROLES.RECEPTIONIST,
  ].includes(role as any);
}

export function isClient(role?: string | null) {
  return role === ROLES.CLIENT;
}

export function canViewFinance(role?: string | null) {
  return [ROLES.OWNER, ROLES.MANAGER].includes(role as any);
}

export function canManageStaff(role?: string | null) {
  return role === ROLES.OWNER;
}

export function canManageServices(role?: string | null) {
  return [
    ROLES.OWNER,
    ROLES.MANAGER,
    ROLES.MECHANIC,
    ROLES.RECEPTIONIST,
  ].includes(role as any);
}