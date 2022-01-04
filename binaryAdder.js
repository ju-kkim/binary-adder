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

function fulladder(bitA, bitB, carry) {
    var answer = [];
    const bitSum = halfadder(bitA, bitB);
    const carrySum = halfadder(bitSum[1], carry);
    
    const carryCalculate = new LogicGate(bitSum[0], carrySum[0])
    const resultCarry = carryCalculate.orGate();
    const resultSum = carrySum[1];

    answer.push(resultCarry, resultSum)
    return answer;
}

function byteadder(byteA, byteB) {
    var answer = [];
    let carry = false
    const aLength = byteA.length;
    const bLength = byteB.length;
    const longLength = Math.max(aLength, bLength);

    for(let idx = 0; idx < longLength; idx++){
        if(idx === aLength) {
            byteA.push(false)
        }
        if(idx === bLength) {
            byteB.push(false)
        }
        const calc = fulladder(byteA[idx], byteB[idx], carry);
        const sum = calc[1]
        answer.push(sum)
        carry = calc[0];
    }
    if(carry === true) {
        answer.push(carry)
    }
    return answer;
}

console.log(byteadder([true,true], [false,false, true]))