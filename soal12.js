const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt('Jari-jari: '));
let Phi = 3.14
let volume = 4/3 * Phi * r * r * r 
let luasPermukaan = 4 * Phi * r * r

console.log(`
    Volume          : ${volume} cm³
    Luas Permukaan  : ${luasPermukaan} cm²
`);