/**
 * Alerta de stock bajo por email (Google Sheets + Apps Script)
 * Autor: Facuss Urbano · https://urbansurge8.gumroad.com
 *
 * Hoja requerida: "Stock" con columnas: Producto | Stock | Mínimo
 * Programalo con un activador diario (Activadores → Según tiempo → Temporizador diario).
 */
function alertaStock() {
  const hoja = SpreadsheetApp.getActive().getSheetByName('Stock');
  const datos = hoja.getDataRange().getValues();
  const bajos = [];
  for (let i = 1; i < datos.length; i++) {
    const [producto, stock, minimo] = datos[i];
    if (producto && stock !== '' && stock <= minimo) {
      bajos.push(producto + ': quedan ' + stock + ' (mínimo ' + minimo + ')');
    }
  }
  if (bajos.length > 0) {
    MailApp.sendEmail(
      Session.getActiveUser().getEmail(),
      'Alerta de stock bajo',
      'Productos para reponer:\n\n' + bajos.join('\n')
    );
  }
}
