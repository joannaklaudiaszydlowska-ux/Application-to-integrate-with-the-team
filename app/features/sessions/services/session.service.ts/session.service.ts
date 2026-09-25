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

  async getSession(
    sessionId: string
  ) {
    return {
      success: true,
      sessionId,
      status: "live",
    };
  }
}

export const sessionService =
  new SessionService();

 




