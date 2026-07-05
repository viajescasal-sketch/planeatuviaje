# Viajes Casal — Ideas de Diseño

## Referencia
La imagen de referencia muestra un sitio Travel Partner con:
- Layout asimétrico: texto grande a la izquierda, imagen a la derecha en el hero
- Navbar transparente con logo a la izquierda y nav links + CTA a la derecha
- Sección de beneficios en tarjetas horizontales con íconos lineales
- Sección de "problemas" con íconos y texto corto
- Sección "Cómo funciona" con 4 pasos conectados por línea punteada
- Cards de destinos con imágenes cuadradas/rectangulares
- Testimonios en 3 columnas con avatar circular
- Footer oscuro con CTA final y botón WhatsApp

## Enfoque Elegido: "Coastal Luxury" — Lujo Costero Minimalista

### Design Movement
**Coastal Luxury Minimalism** — Inspirado en los resorts premium del Caribe y el Pacífico mexicano. Limpio, espacioso, con toques dorados que evocan arena y sol.

### Core Principles
1. **Espacio como lujo**: márgenes generosos, secciones bien respiradas
2. **Contraste editorial**: tipografía bold display vs. body ligero
3. **Paleta oceánica**: azules profundos, cielo claro, dorado arena
4. **Movimiento suave**: animaciones fade-in y slide-up al hacer scroll

### Color Philosophy
- **Primario**: `#009FE3` — Azul cielo tropical, energía y confianza
- **Oscuro**: `#006B9A` — Azul profundo del océano, autoridad y lujo
- **Acento**: `#F5A623` — Dorado arena, calidez y exclusividad
- **Neutro claro**: `#F8FBFE` — Blanco con toque azulado, limpieza
- **Texto oscuro**: `#1A2B3C` — Casi negro azulado, elegancia

### Layout Paradigm
- Hero fullscreen asimétrico: texto izquierda 55%, imagen derecha 45% (overlay gradiente)
- Secciones alternas: fondo blanco / fondo azul muy claro (#F0F8FF)
- Cards con bordes suaves (radius 16px), sombras ligeras
- Grid de 3 columnas para paquetes y tours

### Signature Elements
1. **Línea dorada**: separadores y acentos en `#F5A623`
2. **Gradiente oceánico**: `linear-gradient(135deg, #006B9A, #009FE3)` en CTAs y headers
3. **Cards flotantes**: `box-shadow: 0 8px 32px rgba(0,111,154,0.12)` con hover lift

### Interaction Philosophy
- Navbar transparente → opaca al scroll con blur backdrop
- Cards con hover: translateY(-6px) + sombra más intensa
- Botones con scale(0.97) en active
- Modal con fade-in + scale desde 0.95

### Animation
- **Fade-in + slide-up**: elementos entran con `opacity: 0 → 1` + `translateY(20px → 0)` al entrar en viewport
- **Stagger**: items en grid con delay de 80ms entre cada uno
- **Hover lift**: cards suben 6px con transición 250ms ease-out
- **Navbar transition**: 300ms ease-out al hacer scroll
- Respetar `prefers-reduced-motion`

### Typography System
- **Display**: Poppins 700/800 — títulos hero y secciones principales
- **Heading**: Poppins 600 — subtítulos y nombres de paquetes
- **Body**: Poppins 400 — texto corrido, descripciones
- **Caption**: Poppins 500 — etiquetas, badges, precios
- Escala: 14/16/18/24/32/48/64px

### Brand Essence
**"Tu viaje soñado, sin complicaciones"** — Para viajeros mexicanos que quieren experiencias premium sin el estrés de planear. Diferente porque combina atención personalizada con tecnología.

Personalidad: **Confiable · Inspirador · Cercano**

### Brand Voice
Directo, cálido y aspiracional. Sin jerga corporativa.
- Ejemplo headline: *"Nosotros nos encargamos de todo. Tú solo disfruta."*
- Ejemplo CTA: *"Cotizar por WhatsApp — es gratis y sin compromiso"*

### Wordmark & Logo
Ícono de ola estilizada + avión en color blanco sobre fondo degradado azul. Texto "Viajes Casal" en Poppins 700.

### Signature Brand Color
`#009FE3` — Azul tropical, inconfundiblemente Viajes Casal.

## Style Decisions
- CTAs principales: dorado `#F5A623` o gradiente oceánico. Verde WhatsApp solo cuando la acción sea explícitamente escribir por WA; nunca domina visualmente.
- Descuentos y precios se presentan como beneficios exclusivos curados, no como promociones agresivas de marketplace.
- Cada tramo largo alterna entre grid funcional y composición editorial asimétrica con imagen aspiracional grande.
- El logo/wordmark debe ser más visible y memorable en header.
- Voz de marca: concierge, no agencia de cupones. Lenguaje aspiracional y cercano.
- Usar `font-family: 'Poppins', sans-serif` en todo el sitio
- Botones CTA principales: fondo `#F5A623`, texto blanco, radius 50px
- Botones secundarios: borde `#009FE3`, texto `#009FE3`, radius 50px
- Navbar: transparente en hero, blanco/90 con blur al scroll
- Sección hero: imagen fullscreen con overlay gradiente oscuro izquierda
