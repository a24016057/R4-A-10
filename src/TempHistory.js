export class C_TempHistory {
    constructor() {
        this.O_historyList = document.getElementById("historyList");
    }
    
    update(temperature) {
        this.O_historyList.innerHTML += "<li>" + temperature + "°C</li>";
    }
}