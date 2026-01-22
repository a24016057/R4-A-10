function getRandomInt(I_min, I_max) {
    return Math.floor(Math.random() * (I_max - I_min) + I_min)
}

var A_tempArray = []
var I_index = 0
for (I_i = 0; I_i < 20; I_i++) {
    A_tempArray.push(getRandomInt(-10, 40))
}
console.log(A_tempArray)

var O_message = document.getElementById("message")
console.log(O_message)
var O_temperature = document.getElementById("temperature")
O_temperature.textContent = A_tempArray[0]+"°C"
changeDisplay()

var O_prev = document.getElementById("prevButton")
O_prev.addEventListener("click", clickPrev)
var O_next = document.getElementById("nextButton")
O_next.addEventListener("click", clickNext)

function clickPrev() {
    I_index = (I_index + A_tempArray.length - 1) % A_tempArray.length
    console.log(I_index)
    O_temperature.textContent = A_tempArray[I_index]+"°C"
    changeDisplay()
}

function clickNext() {
    I_index = (I_index + 1) % A_tempArray.length
    console.log(I_index)
    O_temperature.textContent = A_tempArray[I_index]+"°C"
    changeDisplay()
}

function changeDisplay() {
    if (A_tempArray[I_index] >= -10 && A_tempArray[I_index] < 0){
        O_temperature.setAttribute("class", "blueBorder")
        O_message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !"
    }
    else if (A_tempArray[I_index] < 20) {
        O_temperature.setAttribute("class", "greenBorder")
        O_message.textContent = ""
    }
    else if (A_tempArray[I_index] < 30) {
        O_temperature.setAttribute("class", "orangeBorder")
        O_message.textContent = ""
    }
    else if (A_tempArray[I_index] < 40) {
        O_temperature.setAttribute("class", "redBorder")
        O_message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!"
    }

}

