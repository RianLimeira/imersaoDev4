var filmes = []
    /*
    var filmes = [
        "https://1.bp.blogspot.com/-0xRXpab8Mew/YSUQG1l41FI/AAAAAAAAFt0/ZWf6S87HiHU-sFMQXaCwCMGXTLzsZIg3QCLcBGAsYHQ/w1600/trailer-homem-aranha-sem-volta-para-casa.jpg",
        "https://areajugones.sport.es/wp-content/uploads/2021/07/imagen-2021-07-04-085734-1080x609.jpg",
        "http://puntoreflex.cl/wp-content/uploads/2017/10/Erased-1.jpg"
    ];*/
for (var i = 0; i < filmes.length; i++) {
    todosFilme.innerHTML += "<img src=" + filmes[i] + ">";
}

function Inserir() {
    var inserirFilme = document.getElementById("links").value;
    if (filmes.includes(inserirFilme)) {
        alert("Já existe")
    } else {
        alert("Inserido")
        filmes.push(inserirFilme)

        todosFilme.innerHTML += "<a href=" + inserirFilme + ">" + "<img src=" + inserirFilme + ">" + "</a>";
        /*todosFilme.innerHTML += "<p onclick=" + "Remover()" + ">Remover</p>"*/
    }
}

function Remover() {
    console.log("clicou para remover")
}