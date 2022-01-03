class LogicGate {
    constructor(bitA, bitB) {
        this.bitA = bitA
        this.bitB = bitB
    }

    andGate(){
        return this.bitA && this.bitB
    }

    orGate() {
        return this.bitA || this.bitB
    }
}