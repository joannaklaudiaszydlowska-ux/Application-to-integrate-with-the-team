"use server";

export async function getSessionAction(
  sessionId: string
) {
  return {
    success: true,
    sessionId,
    status: "live",
  };
}
