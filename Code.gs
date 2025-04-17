
const DATASHEET = "Data";

function doGet() {
  let template = HtmlService.createTemplateFromFile('Index');
  let html = template.evaluate().setTitle('QR Code Scanner');
  html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  html.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return html;
}

function processForm(formObject) {
  const ss = SpreadsheetApp.getActive();
  const dataSheet = ss.getSheetByName(DATASHEET);
  dataSheet.appendRow([
    new Date().toLocaleString(),
    formObject.product_name,
    formObject.product_category,
    formObject.quantity,
    formObject.price,
    formObject.productCode
  ]);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
