// script.js

document.addEventListener("DOMContentLoaded", async () => {
  const statusText = document.getElementById("backend-status");

  try {
    const res = await fetch("http://localhost:3000/");
    const data = await res.text();

    statusText.textContent = `✅ Backend says: ${data}`;
    statusText.style.color = "limegreen";
  } catch (err) {
    statusText.textContent = "❌ Failed to reach backend.";
    statusText.style.color = "red";
  }
});
