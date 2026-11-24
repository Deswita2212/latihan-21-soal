const prompt = require("prompt-sync")({ sigint: true })
let nilai = Number(prompt("Masukkan nilai: "))
let grade 
if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid")
} else if (nilai >= 90) {
    grade = "A"
} else if (nilai >= 80) {
    grade = "B"
} else if (nilai >= 70) {
    grade = "C"
} else if (nilai >= 60) {
    grade = "D"
} else {
    grade = "E"
}
console.log(`Grade: ${grade}`)