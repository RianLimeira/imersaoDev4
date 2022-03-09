var nome = prompt("Qual seu nome?")
var nota1 = prompt("Qual sua primeira nota?")
var nota2 = prompt("Qual sua segunda nota?")
var nota3 = prompt("Qual sua terceira nota?")
var nota4 = prompt("Qual sua quarta nota?")

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4



console.log("Bem vindo " + nome)
console.log("Suas notas foram " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4)
console.log("media = " + media)

if (media >= 7) {
    console.log("aprovado")
    document.writeln("Notas: " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4, '<br/>')
    document.write('Aprovado com ' + media)
    alert('OK')
} else {
    console.log("reprovado")
    document.writeln("Notas: " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4, '<br/>')
    document.writeln("Média: " + media)
    alert("Not OK")
}
