export class C_Observer {
    constructor() {
        this.subjects = [];
        this.A_tempArray = [];
        this.currentValue = null;
    }

    subscribe(subject) {
        this.subjects.push(subject);
    }

    notify() {
        this.subjects.forEach(observer => observer.update(this.currentValue));
    }

    getRandValues() {
        for (let I_i = 0; I_i < 20; I_i++) {
            this.A_tempArray.push(Math.floor(Math.random() * (40 - (-10)) + -10));
        }
    }

    
    beginDelay() {
        let I_i = 0;
        setInterval(() => {
            if (I_i < this.A_tempArray.length) {
                this.currentValue = this.A_tempArray[I_i];
                this.notify();
            } else {
                I_i = -1;
            }
            I_i++;
        }, 2000);
    }
}