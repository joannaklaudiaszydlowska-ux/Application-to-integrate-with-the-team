import { z } from "zod";

export const startSessionSchema =
  z.object({
    presentationId:
      z.string().uuid(),
  });

export const endSessionSchema =
  z.object({
    sessionId:
      z.string().uuid(),
  });

export const submitVoteSchema =
  z.object({
    sessionId:
      z.string().uuid(),

    slideId:
      z.string().uuid(),

    participantToken:
      z.string(),

    voteValue:
      z.string().min(1),
  });

  