"use client";

import { useState } from "react";

export default function Home() {
  const [started, setStarted] =
    useState(false);

  function handleSession() {
    setStarted(true);
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

      {started && (
        <p>
          ✅ Session Started
        </p>
      )}
    </main>
  );
}



     





