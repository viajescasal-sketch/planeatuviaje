import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initWhatsAppTracking } from "./lib/analytics";

initWhatsAppTracking();

createRoot(document.getElementById("root")!).render(<App />);
