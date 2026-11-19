import { WHATSAPP_PHONE } from "../shared/whatsapp";

/**
 * "Puerta de WhatsApp": viajescasal.com/whatsapp
 *
 * Los enlaces de bio, Historias, posts, YouTube y Google apuntan aquí (con sus UTM).
 * La página es mínima (sin React) para abrir rápido incluso dentro del navegador de
 * Instagram o Facebook. Hace tres cosas:
 *   1. Google Analytics registra la visita con sus UTM (fuente, medio, campaña, contenido).
 *   2. Registra el evento whatsapp_click (link_location = "puerta").
 *   3. Abre WhatsApp con un código de origen al final del mensaje, por ejemplo [IG-BIO]
 *      o [FB-POST-1120], para que el bot, Paulina o el CRM sepan de dónde llegó el cliente.
 */
export function renderWhatsAppGate(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Abriendo WhatsApp | Viajes Casal</title>
  <style>
    body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f4fbfc;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#1a2b3c;text-align:center}
    main{padding:24px;max-width:360px}
    h1{font-size:1.35rem;margin:0 0 8px}
    p{margin:0 0 20px;color:#496575;line-height:1.5}
    a.btn{display:inline-block;background:#25d366;color:#fff;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:999px}
  </style>
  <!-- Google tag (gtag.js): misma propiedad que el resto del sitio -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5ST7DWNJ5"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C5ST7DWNJ5');
  </script>
</head>
<body>
  <main>
    <h1>Abriendo WhatsApp…</h1>
    <p>Si no se abre solo, toca el botón.</p>
    <a id="go" class="btn" href="https://wa.me/${WHATSAPP_PHONE}">Abrir WhatsApp</a>
    <noscript><p>Escríbenos a WhatsApp: <a href="https://wa.me/${WHATSAPP_PHONE}">wa.me/${WHATSAPP_PHONE}</a></p></noscript>
  </main>
  <script>
    (function () {
      var PHONE = "${WHATSAPP_PHONE}";
      var q = new URLSearchParams(window.location.search);
      var SRC = { instagram: "IG", facebook: "FB", tiktok: "TT", youtube: "YT", pinterest: "PIN", google: "GBP", linktree: "LT", referidos: "REF", correo: "MAIL", afiliados: "AFI" };
      var MED = { bio: "BIO", story: "STORY", organico_social: "POST", pago_social: "ADS", gbp_post: "POST", firma: "FIRMA", email: "EMAIL", canal: "CANAL", pagina: "PAGINA", perfil: "PERFIL" };

      function clean(s) { return String(s || "").toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 24); }

      // Código de origen: ?c=XXX manda; si no, se arma con los UTM (fuente-medio-MMDD).
      function originCode() {
        var c = clean(q.get("c"));
        if (c) return c;
        var s = String(q.get("utm_source") || "").toLowerCase();
        if (!s) return "WEB";
        var parts = [SRC[s] || clean(s)];
        var m = String(q.get("utm_medium") || "").toLowerCase();
        var mc = MED[m];
        if (mc && mc !== parts[0]) parts.push(mc);
        var d = /^\\d{4}-(\\d{2})-(\\d{2})/.exec(String(q.get("utm_content") || ""));
        if (d) parts.push(d[1] + d[2]);
        return parts.join("-");
      }

      var code = originCode();
      var text = "Hola, quiero planear mi viaje con Viajes Casal [" + code + "]";
      var url = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text);
      document.getElementById("go").href = url;

      var done = false;
      function go() { if (done) return; done = true; window.location.replace(url); }

      try {
        gtag("event", "whatsapp_click", {
          link_location: "puerta",
          origin_code: code,
          whatsapp_number: PHONE.slice(-4),
          page_path: "/whatsapp",
          event_callback: go,
          event_timeout: 1000
        });
      } catch (e) {}
      // Si Analytics está bloqueado o tarda, abrimos WhatsApp de todos modos.
      setTimeout(go, 1200);
    })();
  </script>
</body>
</html>
`;
}
