# Automatizaciones gratis para tu negocio con Google Sheets

Scripts listos para copiar y pegar en **Google Sheets → Extensiones → Apps Script**. No hace falta saber programar ni pagar ninguna herramienta.

| Script | Qué hace |
|---|---|
| [`alerta-stock.gs`](alerta-stock.gs) | Te manda un mail todos los días con los productos que bajaron del stock mínimo |
| [`recordatorio-cobros.gs`](recordatorio-cobros.gs) | Le recuerda el pago a cada cliente 2 días antes del vencimiento, el mismo día y 3 días después |

## Cómo usarlos (5 minutos)

1. Creá la hoja con el nombre y las columnas que indica el comentario al principio de cada script.
   - **Stock:** `Producto | Stock | Mínimo`
   - **Cobros:** `Cliente | Email | Concepto | Monto | Vence | Pagado`
2. En la planilla, abrí **Extensiones → Apps Script**, borrá lo que aparece y pegá el código.
3. Guardá y tocá **Ejecutar**. La primera vez Google te pide permisos: revisá que sea tu cuenta y aceptá.
4. Para que corra solo: **Activadores** (ícono de reloj) → **Añadir activador** → elegí la función → **Según tiempo** → **Temporizador diario**.

> Probá siempre primero con tu propio correo antes de usarlo con clientes reales.

## Seguridad

- Los scripts corren en **tu** cuenta de Google y solo leen **tu** planilla.
- No le des tu contraseña a ninguna app "para automatizar". Usá conexiones oficiales y verificación en dos pasos.

## ¿Querés más?

Estas son 2 de las **12 recetas** de la guía **"Automatizá tu negocio sin programar"**: WhatsApp fuera de horario, pedidos que se cargan solos, mail de bienvenida, pedido de reseñas, reporte semanal y cómo automatizar sin abrir puertas a problemas de seguridad.

👉 Guías completas: **https://urbansurge8.gumroad.com**

---

Hecho por **Facuss Urbano** · Técnico Superior en Seguridad Informática · 20 años en IT.
Licencia MIT: usalo, modificalo y compartilo libremente.
