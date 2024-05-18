function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function calcularApalancamiento() {
    const capital = parseFloat(document.getElementById("capital").value);
    const riesgo = parseFloat(document.getElementById("riesgo").value) / 100;
    const diferenciaPrecios = parseFloat(document.getElementById("diferenciaPrecios").value);
    const volumenContrato = parseFloat(document.getElementById("volumenContrato").value);
    
    const riesgoEquivalenteElement = document.getElementById("riesgo-equivalente");

    if (!isNaN(capital) && !isNaN(riesgo) && capital > 0 && riesgo > 0) {
        let riesgoEquivalente = capital * riesgo;
        if (riesgoEquivalente % 1 === 0) {
            riesgoEquivalente = riesgoEquivalente.toFixed(0);
        } else {
            riesgoEquivalente = riesgoEquivalente.toFixed(2);
        }
        riesgoEquivalenteElement.innerText = `Riesgo equivalente a ${riesgoEquivalente} dólares`;
        riesgoEquivalenteElement.classList.remove("oculto");
    } else {
        riesgoEquivalenteElement.classList.add("oculto");
    }

    if (isNaN(capital) || isNaN(riesgo) || isNaN(diferenciaPrecios) || isNaN(volumenContrato) || capital <= 0 || riesgo <= 0 || diferenciaPrecios <= 0 || volumenContrato <= 0) {
        document.getElementById("resultado").innerText = "Por favor, complete todos los campos.";
        return;
    }

    const apalancamiento = (capital * riesgo) / diferenciaPrecios / volumenContrato;
    document.getElementById("resultado").innerText = "Apalancamiento de entrada al mercado: " + apalancamiento.toFixed(2);
}
