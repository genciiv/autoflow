export function assertSameBusiness({
  sessionBusinessId,
  resourceBusinessId,
}: {
  sessionBusinessId: string;
  resourceBusinessId: string;
}) {
  if (sessionBusinessId !== resourceBusinessId) {
    throw new Error("Nuk ke akses te këto të dhëna.");
  }
}