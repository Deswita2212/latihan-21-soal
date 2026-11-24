const prompt = require("prompt-sync")({ sigint: true })
let hargabarang = Number(prompt("Masukkan harga barang: "))
let diskon = 0
let totalbayar = hargabarang
if (hargabarang >= 200000) {
    diskon = hargabarang * 7.5 / 100
    totalbayar = hargabarang - diskon
    console.log(`
        Total Harga Barang : Rp.${hargabarang}
        Diskon : Rp.${diskon}
        Total Bayar : Rp.${totalbayar}
    `)
}