const prompt = require("prompt-sync")({ sigint: true })
let angka = Number(prompt("Masukkan angka bilangan bulat: "))
if (angka % 7 === 0) {
    console.log("Selamat, Anda beruntung!")
} else {
    console.log("Anda belum beruntung!")
}