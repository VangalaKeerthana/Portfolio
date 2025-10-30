import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

function removeEmergentBadge() {
  const sel = '#emergent-badge,.emergent-badge,[data-emergent-badge],[data-made-with="emergent"],a[href*="emergent"][style*="position: fixed"],a[aria-label*="Emergent"]';
  document.querySelectorAll(sel).forEach(el => el.remove());
  // text-based fallback
  document.querySelectorAll('a,div,span').forEach(el => {
    const t = (el.textContent || '').toLowerCase().trim();
    if (t === 'made with emergent' || t.includes('made with emergent')) el.remove();
  });
}
removeEmergentBadge();
const kill = setInterval(removeEmergentBadge, 800);
window.addEventListener('beforeunload', () => clearInterval(kill));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
