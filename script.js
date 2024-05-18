function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const toggleButton = document.getElementById('toggle-dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = 'Modo Claro';
    } else {
        toggleButton.innerText = 'Modo Oscuro';
    }
}

function calcularApalancamiento() {
    const capital = parseFloat(document.getElementById("capital").value);
    let riesgo = parseFloat(document.getElementById("riesgo").value);
    const diferenciaPrecios = parseFloat(document.getElementById("diferenciaPrecios").value);
    const volumenContrato = parseFloat(document.getElementById("volumenContrato").value);
    
    const riesgoEquivalenteElement = document.getElementById("riesgo-equivalente");

    if (!isNaN(riesgo)) {
        if (riesgo < 0) riesgo = 0;
        if (riesgo > 100) riesgo = 100;
        document.getElementById("riesgo").value = riesgo;
    }

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
    document.getElementById("resultado").innerText = "Apalancamiento de entrada al mercado: " + apalancamiento.toFixed(2);
}

// Inicialización del modo claro
document.body.classList.add('light-mode');
