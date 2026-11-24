const prompt = require("prompt-sync")({ sigint: true })
let huruf = prompt("Masukkan huruf: ")
if (!isNaN(huruf) && huruf.trim() !== "") {
    console.log("Input bukan huruf")
} else if (huruf === "a" || huruf === "i" || huruf === "u" || huruf === "e" || huruf === "o") {
    console.log("Huruf vokal")
} else 
    console.log("Huruf konsonan")