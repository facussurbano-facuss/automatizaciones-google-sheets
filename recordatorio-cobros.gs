/**
 * Recordatorio automático de cobros por email (Google Sheets + Apps Script)
 * Autor: Facuss Urbano · https://urbansurge8.gumroad.com
 *
 * Hoja requerida: "Cobros" con columnas: Cliente | Email | Concepto | Monto | Vence | Pagado
 * Escribí SI en "Pagado" cuando cobres. Programalo con un activador diario.
 * Envía el recordatorio 2 días antes del vencimiento, el mismo día y 3 días después.
 * Probalo primero con tu propio correo en una fila de prueba.
 */
function recordarCobros() {
  const hoja = SpreadsheetApp.getActive().getSheetByName('Cobros');
  const datos = hoja.getDataRange().getValues();
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  for (let i = 1; i < datos.length; i++) {
    const [cliente, email, concepto, monto, vence, pagado] = datos[i];
    if (!email || !vence || String(pagado).toUpperCase() === 'SI') continue;
    const fecha = new Date(vence); fecha.setHours(0, 0, 0, 0);
    const dias = Math.round((fecha - hoy) / 86400000);
    if (dias === 2 || dias === 0 || dias === -3) {
      MailApp.sendEmail(email,
        'Recordatorio de pago – ' + concepto,
        'Hola ' + cliente + ',\n\nTe recordamos el pago de $' + monto +
        ' por ' + concepto + ', con vencimiento el ' +
        fecha.toLocaleDateString('es-AR') + '.\n\n' +
        'Si ya lo abonaste, ignorá este mensaje. ¡Gracias!');
    }
  }
}
