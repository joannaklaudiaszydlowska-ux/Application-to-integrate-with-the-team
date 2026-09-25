"use client";

import { useState } from "react";
import {
  startSessionAction,
} from "@/actions/sessions/start-session";


export default function Home() {
  const [sessionId, setSessionId] =
  useState("");

function handleSession() {
  const id =
    crypto.randomUUID();

  setSessionId(id);
}


  return (
    <main
      style={{
        padding: "2rem",
      }}
    >
      <h1>
        Polling Platform
      </h1>

      <p>
        Session management is
        being implemented.
      </p>

      <button
        onClick={handleSession}
      >
        Start Session
      </button>

          {sessionId && (
        <>
          <p>
            ✅ Session Started
          </p>

          <p>
            Session ID:
            {sessionId}
          </p>
        </>
      )}
    </main>
  );
}
<p>
  Status:
  Live
</p>




     





