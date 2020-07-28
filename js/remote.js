class Remote {
    constructor() {
        this.tivi = '';
    }

    connectToTivi(tivi) {
        this.tivi = tivi;
    }

    turnOnOff() {
        this.tivi.turnOnOff();
    }
    changeChanel(chanel) {
        this.tivi.changeChanel(chanel);
    }

    creaseVoice() {
        this.tivi.creaseVoice();
    }

    decreaseVoice() {
        this.tivi.decreaseVoice();
    }
}