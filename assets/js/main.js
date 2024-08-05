// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const imc = calcIMC(weight, height);

    if (dataValidation(weight, height)) {
        if (imc < 18.5) {
            setResult(`Abaixo do peso. IMC = ${imc}`, 2);
        } else if (imc >= 18.5 && imc < 25) {
            setResult(`Peso normal. IMC = ${imc}`, 3);
        } else if (imc >= 25 && imc < 30) {
            setResult(`Sobrepeso. IMC = ${imc}`, 4);
        } else if (imc >= 30 && imc < 35) {
            setResult(`Obesidade grau 1. IMC = ${imc}`, 5);
        } else if (imc >= 35 && imc < 40) {
            setResult(`Obesidade grau 2. IMC = ${imc}`, 6);
        } else if (imc >= 40) {
            setResult(`Obesidade grau 3. IMC = ${imc}`, 7);
        }
    } else {
        setResult('Peso e/ou Altura inválidos!', 1);
    }
});


function dataValidation(weight, height) {
    if (!weight) {
        return false;
    }
    if (!height) {
        return false;
    }

    return true;
}

function setResult(msg, resultColor) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createParagraph(msg, resultColor);
    result.appendChild(p);
}

function createParagraph(msg, resultColor) {
    const p = document.createElement('p');
    p.innerHTML = msg;

    let className = 0;
    switch (resultColor) {
        case 1:
            className = 'wrong-data';
            break;
        case 2:
            className = 'result-low-imc';
            break;
        case 3:
            className = 'result-normal-imc';
            break;
        case 4:
            className = 'result-high-imc';
            break;
        case 5:
            className = 'result-obcd1-imc';
            break;
        case 6:
            className = 'result-obcd2-imc';
            break;
        case 7:
            className = 'result-obcd3-imc';
            break;
    }
    p.classList.add(className);
    return p;
}

function calcIMC(weight, height) {
    let imc = weight / height ** 2;
    return imc.toFixed(2);
}