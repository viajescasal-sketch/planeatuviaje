import { useState } from "react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success" | "pending">("idle");
  const [message, setMessage] = useState("");

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !accepted) {
      setStatus("error"); setMessage("Ingresa un correo válido y acepta el Aviso de Privacidad."); return;
    }
    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
    if (!endpoint) {
      setStatus("pending"); setMessage("La suscripción estará disponible cuando conectemos el proveedor de correo. No hemos almacenado tus datos."); return;
    }
    setStatus("loading");
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, consent: true, source: "blog" }) });
      if (!response.ok) throw new Error("No fue posible completar la suscripción");
      setStatus("success"); setMessage("Revisa tu correo para confirmar la suscripción."); setName(""); setEmail(""); setAccepted(false);
    } catch { setStatus("error"); setMessage("No pudimos procesar la solicitud. Inténtalo más tarde."); }
  };

  return <section className="rounded-3xl bg-[#003F7D] p-6 text-white sm:p-8"><h2 className="text-2xl font-bold">Recibe guías, promociones y consejos para viajar mejor</h2><p className="mt-2 text-sm text-white/75">Contenido útil de Viajes Casal, sin llenar tu bandeja de mensajes.</p><form onSubmit={submit} className="mt-5 grid gap-3 sm:grid-cols-2"><input className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:ring-2 focus:ring-[#00B8C8]" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre (opcional)" autoComplete="name" /><input className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:ring-2 focus:ring-[#00B8C8]" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico *" type="email" autoComplete="email" required /><label className="flex items-start gap-2 text-xs text-white/75 sm:col-span-2"><input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mt-0.5 accent-[#00B8C8]" />Acepto recibir comunicaciones y he leído el <a href="/planeatuviaje/#aviso-privacidad" className="text-white underline">Aviso de Privacidad</a>.</label><button disabled={status === "loading"} className="rounded-full bg-[#FF6F61] px-6 py-3 text-sm font-bold text-white transition hover:brightness-105 disabled:opacity-60 sm:col-span-2">{status === "loading" ? "Enviando..." : "Quiero recibir novedades"}</button>{message && <p role="status" className={`text-xs sm:col-span-2 ${status === "error" ? "text-red-200" : "text-white/80"}`}>{message}</p>}</form></section>;
}
