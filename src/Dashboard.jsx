import React, { useEffect, useState, useRef } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("Loading...");
  const videoRef = useRef(null);

  // Load webcam stream into <video> tag
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Failed to access webcam:", err);
      });
  }, []);

  // Poll backend status
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("http://localhost:5000/status");
        const data = await res.json();
        setStatus(data.status);
      } catch (e) {
        setStatus("Disconnected");
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>CareGuardian Monitor</h1>
      <h2>Status: <span style={{ color: status.includes("🚨") ? "red" : "green" }}>{status}</span></h2>

      <div style={{ marginTop: "30px" }}>
        <h3>Webcam Preview (browser-side)</h3>
        <video
          ref={videoRef}
          autoPlay
          muted
          style={{ width: "480px", height: "360px", border: "1px solid gray", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
