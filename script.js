const button = document.querySelector(".button")
const resetButton = document.querySelector(".reset-button")
const begin = document.querySelector(".input-min")
const end = document.querySelector(".input-max")
const numberResult = document.querySelector(".result")


function generateNumber() {
    const min = Math.ceil(begin.value)
    const max = Math.floor(end.value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    numberResult.innerHTML = result
   
}

function resetNumber() {
    begin.value = ""
    end.value = ""

    numberResult.innerHTML = "Resultado"
}

button.addEventListener("click", generateNumber)  
resetButton.addEventListener("click", resetNumber) 

