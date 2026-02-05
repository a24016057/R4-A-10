import { C_Observer } from "./Observer.js";
import { C_TempHistory } from "./TempHistory.js";
import { C_TempRealTime } from "./TempRealTime.js";

class C_script {
    constructor() {
        this.observer = new C_Observer();
        this.observer.getRandValues();

        this.TempRealTime = new C_TempRealTime();
        this.TempHistory = new C_TempHistory();

        this.observer.subscribe(this.TempRealTime);
        this.observer.subscribe(this.TempHistory);

        this.handlePage();

        this.observer.beginDelay();
    }

    handlePage() {
        
        const O_displayTemp = document.getElementById("displayTemp");
        const O_displayHistory = document.getElementById("displayHistory");

        let O_tempManage = document.getElementById("tempManage");
        let O_tempHistory = document.getElementById("tempHistory");

        O_displayTemp.addEventListener("click", function () {
            if (O_tempManage.className != "hidden") {
                O_tempManage.className = "hidden";
            } else {
                O_tempManage.classList.remove("hidden");
            }
        });

        O_displayHistory.addEventListener("click", function () {
            if (O_tempHistory.className != "hidden") {
                O_tempHistory.className = "hidden";
            } else {
                O_tempHistory.classList.remove("hidden");
            }
        });
    }
}

new C_script();