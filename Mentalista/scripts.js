contador = 0

function Chutar() {
    var result = document.getElementById("resultado")
    var tempt = document.getElementById("tentativas")
    console.log(numberSecret)
    numberIndicated = parseInt(document.getElementById("valor").value);
    console.log(numberIndicated);

    if (numberSecret == numberIndicated) {
        alert("Acertou");
        result.innerHTML = "Aee";
    } else if (numberIndicated > 10 || numberIndicated < 0) {
        alert("Impossivel, número tem que ser de 0 a 10");
        result.innerHTML = ":C"
    } else {
        if (numberIndicated < numberSecret) {
            alert("O numero é maior que " + numberIndicated);
        } else {
            alert("O numero é menor que " + numberIndicated);
        }
        contador += 1
        tempt.innerHTML = "Errou: " + contador + " vezes";
    }
}

var numberSecret = parseInt(Math.random() * 11);