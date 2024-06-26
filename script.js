function calcularApalancamiento() {
    const capital = parseFloat(document.getElementById("capital").value);
    const riesgoInput = document.getElementById("riesgo");
    const riesgoOriginal = parseFloat(riesgoInput.value);
    let riesgo = riesgoOriginal;

    if (!isNaN(riesgo)) {
        if (riesgo < 0) riesgo = 0;
        if (riesgo > 100) riesgo = 100;
        if (riesgo !== riesgoOriginal) {
            riesgoInput.value = riesgo;
        }
    }

    const diferenciaPrecios = parseFloat(document.getElementById("diferenciaPrecios").value);
    const volumenContrato = parseFloat(document.getElementById("volumenContrato").value);
    const riesgoEquivalenteElement = document.getElementById("riesgo-equivalente");

    if (!isNaN(capital) && !isNaN(riesgo) && capital > 0 && riesgo > 0) {
        let riesgoEquivalente = capital * (riesgo / 100);
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

    const apalancamiento = (capital * (riesgo / 100)) / diferenciaPrecios / volumenContrato;
    document.getElementById("resultado").innerText = "Lotaje de entrada al mercado: " + apalancamiento.toFixed(2);
}

function reiniciarFormulario() {
    document.getElementById("capital").value = '';
    document.getElementById("riesgo").value = '';
    document.getElementById("diferenciaPrecios").value = '';
    document.getElementById("volumenContrato").value = '';
    document.getElementById("resultado").innerText = '';
    document.getElementById("riesgo-equivalente").classList.add("oculto");
}

function mostrarTooltip(id) {
    document.getElementById(id).style.display = 'block';
}

function ocultarTooltip(id) {
    document.getElementById(id).style.display = 'none';
}
