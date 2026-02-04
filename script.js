const pastValue = document.querySelector(".pastValue");
const currentValue = document.querySelector(".currentValue");
const btns = document.querySelectorAll(".btn");
let bracket =false;

btns.forEach(btn => {
    btn.addEventListener("click",() => {
        if(btn.textContent == "CLR") {
            currentValue.textContent = "";
            pastValue.textContent = "";
        } else if(btn.textContent == "SIN" ||
            btn.textContent == "COS" ||
            btn.textContent == "TAN" ||
            btn.textContent == "LOG" ||
            btn.textContent == "LN" 
        ) {
            bracket = true;
            currentValue.textContent += btn.textContent.toLowerCase() + "(";
        } else if(btn.classList.contains("sqrt")){
            currentValue.textContent += 'sqrt(';
            bracket = true;
        } else if(btn.classList.contains("power")) {
            currentValue.textContent += '^';
        } else if(btn.classList.contains("equal")) {
            if(bracket) {
                for(let i=currentValue.textContent.length - 1;i>=0;i--) {
                    if(currentValue.textContent[i] == ")") {
                        break;
                    }
                    if(currentValue.textContent[i] == "(") {
                        bracket = false;
                        break;
                    }
                }
                currentValue.textContent += ")";
            }
            pastValue.textContent = currentValue.textContent;
            currentValue.textContent = math.evaluate(currentValue.textContent);
        } /*else if(btn.textContent == "×") {
            currentValue.textContent += "*";
        } else if(btn.textContent == "÷") {
            currentValue.textContent += "/";
        }*/else if(btn.classList.contains("del")) {
            currentValue.textContent = currentValue.textContent.toString().slice(0,-1);
        } else {
            currentValue.textContent += btn.textContent;
        }
    })
});
