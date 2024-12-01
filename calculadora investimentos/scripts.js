// script.js
function showInputs() {
    const type = document.getElementById('calculationType').value;
    const inputContainer = document.getElementById('inputContainer');
    const resultContainer = document.getElementById('result');
    inputContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    if (type === "1") {
        inputContainer.innerHTML = `
            <input type="number" id="inicial1" placeholder="Quantia inicial (R$)">
            <input type="number" id="mensal1" placeholder="Quantia mensal (R$)">
            <input type="number" id="meses1" placeholder="Meses de rendimento">
            <input type="number" id="juros1" placeholder="Juros mensais (%)">
            <button onclick="calculateFinalValue()">Calcular</button>
        `;
    } else if (type === "2") {
        inputContainer.innerHTML = `
            <input type="number" id="inicial2" placeholder="Quantia inicial (R$)">
            <input type="number" id="meses2" placeholder="Meses de rendimento">
            <input type="number" id="juros2" placeholder="Juros mensais (%)">
            <input type="number" id="final2" placeholder="Quantia desejada (R$)">
            <button onclick="calculateMonthlyValue()">Calcular</button>
        `;
    } else if (type === "3") {
        inputContainer.innerHTML = `
            <input type="number" id="inicial3" placeholder="Quantia inicial (R$)">
            <input type="number" id="mensal3" placeholder="Quantia mensal (R$)">
            <input type="number" id="juros3" placeholder="Juros mensais (%)">
            <input type="number" id="final3" placeholder="Quantia desejada (R$)">
            <button onclick="calculateTime()">Calcular</button>
        `;
    }
}

function calculateFinalValue() {
    const inicial1 = parseFloat(document.getElementById('inicial1').value);
    const mensal1 = parseFloat(document.getElementById('mensal1').value);
    const meses1 = parseInt(document.getElementById('meses1').value);
    const juros1 = parseFloat(document.getElementById('juros1').value);

    let final1 = inicial1;
    for (let i = 0; i < meses1; i++) {
        final1 += mensal1;
        final1 += final1 * (juros1 / 100);
    }

    const rendimento1 = final1 - (inicial1 + mensal1 * meses1);
    document.getElementById('result').innerText = `
        O valor final será de R$ ${final1.toFixed(2)}.
        Seu rendimento será de R$ ${rendimento1.toFixed(2)}.
    `;
}

function calculateMonthlyValue() {
    const inicial2 = parseFloat(document.getElementById('inicial2').value);
    const meses2 = parseInt(document.getElementById('meses2').value);
    const juros2 = parseFloat(document.getElementById('juros2').value) / 100;
    const final2 = parseFloat(document.getElementById('final2').value);

    const mensal2 = (final2 - inicial2 * Math.pow((1 + juros2), meses2)) /
                    ((Math.pow((1 + juros2), meses2) - 1) / juros2);

    document.getElementById('result').innerText = `
        Você precisará investir mensalmente R$ ${mensal2.toFixed(2)} 
        para atingir R$ ${final2.toFixed(2)} em ${meses2} meses.
    `;
}

function calculateTime() {
    const inicial3 = parseFloat(document.getElementById('inicial3').value);
    const mensal3 = parseFloat(document.getElementById('mensal3').value);
    const juros3 = parseFloat(document.getElementById('juros3').value) / 100;
    const final3 = parseFloat(document.getElementById('final3').value);

    let meses3 = 0;
    let total = inicial3;
    while (total < final3) {
        total += mensal3;
        total += total * juros3;
        meses3++;
    }

    document.getElementById('result').innerText = `
        Você precisará de ${meses3} meses para atingir R$ ${final3.toFixed(2)}.
    `;
}
