const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'Breadboard Website Feedback.xlsx');
const workbook = XLSX.readFile(filePath);

workbook.SheetNames.forEach(sheetName => {
    console.log(`\n===== SHEET: ${sheetName} =====\n`);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    data.forEach((row, i) => {
        console.log(`Row ${i}: ${JSON.stringify(row)}`);
    });
});
