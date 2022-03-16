var carta1 = {
    nome: "Charmander",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 6
    }
};
var carta2 = {
    nome: "Clefable",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 10
    }
};
var carta3 = {
    nome: "Mew",
    atributos: {
        ataque: 8,
        defesa: 8,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];
    cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
    while (cartaMaquina == cartaJogador) {
        cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
    }

    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcText = ""
    for (var atributo in cartaJogador.atributos) {
        opcText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcText
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var resultado = document.getElementById("resultado")
    var cartJogador = cartaJogador.atributos[atributoSelecionado]
    var cartMaquina = cartaMaquina.atributos[atributoSelecionado]
    if (cartJogador > cartMaquina) {
        resultado.innerHTML = "YOU WIN!!"
    } else if (cartMaquina > cartJogador) {
        resultado.innerHTML = "GAME OVER"
    } else {
        resultado.innerHTML = "EMPATED"
    }
    console.log(cartMaquina)

}