function Converter() {
    var converteu = document.getElementById("valor");
    var valor = converteu.value;
    var valorReal = parseFloat(valor) * 5;
    console.log(valorReal);

    var elementoConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Real é R$" + valorReal;
    elementoConvertido.innerHTML = valorConvertido;
}

function ConverterIene() {
    var converter = document.getElementById("valor");
    var valor = converter.value;
    var valorReal = parseFloat(valor) * 0.044;
    console.log(valorReal);

    var convertido = document.getElementById("valorConvertido");
    var valorAtualizado = "O Resultado em Real é R$" + valorReal.toFixed(2);
    convertido.innerHTML = valorAtualizado;

}