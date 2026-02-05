export class C_TempRealTime {
    constructor() {
        this.O_temperature = document.getElementById("temperature");
        this.O_message = document.getElementById("message"); 
    }

    update(temperature) {
        this.O_temperature.textContent = temperature+"°C";
        this.O_message.hidden = true;

        if (temperature < 0) {
            this.O_message.classList.remove('hidden')
            this.O_message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            this.O_temperature.setAttribute("class", "blueBorder")
        } 
        else if (temperature >= 0 && temperature < 20) {
            this.O_temperature.setAttribute("class", "greenBorder")
        } 
        else if (temperature >= 20 && temperature < 30) {
            this.O_temperature.setAttribute("class", "orangeBorder")
        } 
        else if (temperature >= 30) {
            this.O_message.classList.remove('hidden')
            this.O_message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            this.O_temperature.setAttribute("class", "redBorder")
        }
    }
}