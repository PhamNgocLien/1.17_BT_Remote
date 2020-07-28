class Tivi {
    constructor() {
        this.chanel = 1;
        this.voice = 5;
        this.status = false;
    }

    setStatus(status) {
        this.status = status;
    }

    getChanel() {
        return this.chanel;
    }

    setChanel(chanel) {
        this.chanel = chanel;
    }

    getVoice() {
        return this.voice;
    }

    setVoice(voice) {
        this.voice = voice;
    }

    turnOnOff() {
        if (this.status) {
            this.setStatus(false);
            document.getElementById("tivi").style.backgroundColor = "black";
        } else {
            this.setStatus(true);
            document.getElementById("tivi").style.backgroundColor = "pink";
            document.getElementById("tivi").innerHTML = `Chanel: ${this.getChanel()} , Voice: ${this.getVoice()}`;
        }
    }

    changeChanel(chanel) {
        if (this.status) {
            this.setChanel(chanel);
            document.getElementById("tivi").innerHTML = `Chanel: ${this.getChanel()} , Voice: ${this.getVoice()}`;
        }
    }

    creaseVoice() {
        if (this.status && this.voice <10) {
            this.voice ++
            this.setVoice(this.voice);
            document.getElementById("tivi").innerHTML = `Chanel: ${this.getChanel()} , Voice: ${this.getVoice()}`;
        }
    }

    decreaseVoice() {
        if (this.status && this.voice >0) {
            this.voice --
            this.setVoice(this.voice);
            document.getElementById("tivi").innerHTML = `Chanel: ${this.getChanel()} , Voice: ${this.getVoice()}`;
        }
    }
}