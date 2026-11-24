const prompt = require('prompt-sync')({sigint :true});
let harga = 15000
let pajak = harga * 10 / 100
let fee = harga * 5 / 100
let hargaBayar = harga + pajak + fee

console.log(`
    Harga Makanan   : Rp.${harga}
    Pajak           : Rp.${pajak}
    Fee             : Rp.${fee}
    Harga Bayar     : Rp.${hargaBayar}
`);
