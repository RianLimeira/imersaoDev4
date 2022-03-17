var carta1 = {
    nome: "Charmander",
    imagem: "http://3.bp.blogspot.com/-5acroZnVUpg/UIs86lsWfPI/AAAAAAAAAG4/8UXZXYd1KeE/s1600/charmander.png",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 6
    }
};
var carta2 = {
    nome: "Clefable",
    imagem: "https://i.pinimg.com/736x/81/6a/32/816a32abffb30dcd6680e9ba9d89fddd.jpg",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 10
    }
};
var carta3 = {
    nome: "Mew",
    imagem: "https://www.ecured.cu/images/thumb/b/bf/Mew.png/1200px-Mew.png",
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

    //console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    //exibirOpcoes();
    exibirCartaJogador();
}

function exibirCartaJogador() {
    var cartasJogador = document.getElementById("carta-jogador")
    cartasJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcText = "";
    for (var atributo in cartaJogador.atributos) {
        opcText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    cartasJogador.innerHTML = moldura + nome + tagHTML + opcText + '</div>'
}

function exibirCartaMaquina() {
    var cartasMaquina = document.getElementById("carta-maquina")
    cartasMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcText = "";
    for (var atributo in cartaMaquina.atributos) {
        opcText += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    cartasMaquina.innerHTML = moldura + nome + tagHTML + opcText + '</div>'
}

/*
function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcText = ""
    for (var atributo in cartaJogador.atributos) {
        opcText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcText
}
*/

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
        resultados = `<p class='resultado-final'>YOU WIN</p>`
    } else if (cartMaquina > cartJogador) {
        resultados = `<p class='resultado-final'>GAME OVER</p>`
    } else {
        resultados = `<p class='resultado-final'>EMPATED</p>`
    }
    resultado.innerHTML = resultados

    document.getElementById("btnJogar").disabled = "true"
    exibirCartaMaquina()
}