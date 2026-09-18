export class SessionService {
  async startSession(
    presentationId: string
  ) {
    return {
      success: true,
      sessionId:
        crypto.randomUUID(),
      presentationId,
    };
  }

  async endSession(
    sessionId: string
  ) {
    return {
      success: true,
      sessionId,
    };
  }
}

export const sessionService =
  new SessionService();



