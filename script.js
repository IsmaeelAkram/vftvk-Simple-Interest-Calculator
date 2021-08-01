function compute()
{
    var amount = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("interest").value.replace("%", "")) / 100;
    var currentYear = new Date().getFullYear();
    var year = currentYear + Number(document.getElementById("years").value);

    if(amount <= 0){
        alert("The amount must be a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var answer = (amount*rate) * (year-currentYear);

    var resultText = document.getElementById("result-text");
    resultText.innerHTML = `If you deposit <span class="highlighted">${amount}</span>,<br/>
                            at an interest rate of <span class="highlighted">${rate}%</span>.<br/>
                            You will receive an amount of <span class="highlighted">${answer.toFixed(2)}</span>,<br/>
                            in the year <span class="highlighted">${year}</span>\n<br/>`
}

function updateRate(x){
    var text = document.getElementById("rate-text");
    text.innerText = x + "%";
}