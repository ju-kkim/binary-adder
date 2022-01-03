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

    nandGate() {
        return !(this.bitA && this.bitB)
    }

    xorGate(){
        return !(this.bitA && this.bitB) && (this.bitA || this.bitB)
    }
}

function halfadder(bitA, bitB) {
    var answer = [];
    const calculate = new LogicGate(bitA, bitB)

    const sum = calculate.xorGate();
    const carry = calculate.andGate();
    answer.push(carry, sum)
    return answer;
}