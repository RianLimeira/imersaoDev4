var nome = "Rian"
var nota1 = 9
var nota2 = 7
var nota3 = 8
var nota4 = 4
var media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("Bem vindo " + nome)
console.log("Suas notas foram " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4)
console.log("media = " + media)

if (media >= 7) {
    console.log("aprovado")
    document.write('Aprovado com ' + media)
    alert('OK')
} else {
    console.log("reprovado")
    alert("Not OK")
}
//console.log(" e media: "+ ((nota1+ nota2+ nota3+nota4)/4))