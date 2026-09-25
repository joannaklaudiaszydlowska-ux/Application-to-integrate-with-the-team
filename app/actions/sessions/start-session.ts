"use server";

export async function startSessionAction() {
  return {
    success: true,
    sessionId:
      crypto.randomUUID(),
  };
}

