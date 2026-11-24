const prompt = require("prompt-sync")({ sigint: true });
let XRPL1 = Number(prompt("Jumlah siswa X RPL 1:"))
let XRPL2 = Number(prompt("Jumlah siswa X RPL 2:"))
let XTKJ1 = Number(prompt("Jumlah siswa X TKJ 1:"))
let XTKJ2 = Number(prompt("Jumlah siswa X TKJ 2:"))
let totalSiswa = XRPL1 + XRPL2 + XTKJ1 + XTKJ2
console.log("Total Siswa: " + totalSiswa)