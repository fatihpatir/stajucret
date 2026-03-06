const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('öğrenci ödeme listesi 2026 şubat.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => console.error(err));
