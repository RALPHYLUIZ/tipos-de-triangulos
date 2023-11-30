function verificarTriangulo() {
    let ladoA = parseFloat(document.getElementById('ladoA').value);
    let ladoB = parseFloat(document.getElementById('ladoB').value);
    let ladoC = parseFloat(document.getElementById('ladoC').value);

    if (ladoA === ladoB && ladoB === ladoC) {
        exibirResultado("equilatero");
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        exibirResultado("isosceles");
    } else {
        exibirResultado("escaleno");
    }
}

function exibirResultado(tipoTriangulo) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p>Tipo de triângulo: " + tipoTriangulo + "</p>";

    if (tipoTriangulo === "equilatero") {
        resultadoDiv.innerHTML += "<img src='./img/equilatero.PNG' alt='Triângulo Equilátero'>";
    } else if (tipoTriangulo === "isosceles") {
        resultadoDiv.innerHTML += "<img src='./img/isosceles.PNG' alt='Triângulo Isósceles'>";
    } else {
        resultadoDiv.innerHTML += "<img src='./img/escaleno.PNG' alt='Triângulo Escaleno'>";
    }

}
