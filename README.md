# 💡 디지털 논리회로

## 논리 게이트
- ### AND, OR, NAND, XOR 게이트 구현

    1. ***AND 게이트***
        
        && 연산 - 2개의 입력을 받고, 2개 모두 true일 때만 출력이 true가 된다.

        ```js
        andGate(bitA, bitB){
            return bitA && bitB
        }
        ```


    2. ***OR 게이트***

        || 연산 - 2개의 입력을 받고, 1개 이상이 true일 때 출력이 true가 된다.

        ```js
        orGate(bitA, bitB){
            return bitA || bitB
        }
        ```

    3. ***NAND 게이트 (NOT AND)***
        
        AND 게이트의 동작과 반대로 동작!
        
        **INVERTOR + AND 게이트**  
        
        | NAND | A | B |
        | --- | --- | --- |
        | false | true | true |
        | true | true | false |

        ```js
        nandGate(bitA, bitB){
            return (this.bitA && this.bitB)
        }
        ```
    
    4. ***XOR 게이트***
        
        2개의 입력이 서로 다른 값일 때만 불이 들어온다.
        
        | XOR | A | B |
        | --- | --- | --- |
        | false | false | true |
        | true | true | false |


        ```js
        xorGate(bitA, bitB){
            return !(bitA && bitB) && (bitA || bitB)
        }
        ```

## 가산기 구현
- ### 반가산기
    2개의 비트 입력값을 더해주고 `carry(자리올림)`, `sum(합)`을 출력한다.  
    비트의 합 = `XOR`, 자리올림 = `AND` 사용

    ```js
    const calculate = new LogicGate(bitA, bitB)

    const sum = calculate.xorGate();
    const carry = calculate.andGate();
    ```

- ### 전가산기
    2개의 비트와 carry(자리올림)을 입력받아 **(총 3개)** 더해주고 `carry(자리올림)`, `sum(합)`을 출력한다.    
    반가산기로는 2개의 비트만 더할수 있다. 자리올림이 발생할 경우 2개의 비트와 자리올림을 더할수있는 전가산기가 필요하다.  

    ![전가산기](https://user-images.githubusercontent.com/68211156/147943097-bc963a6a-20e3-46ac-bf1d-5fb5847ea2da.png)  

    ```js
    const bitSum = halfadder(bitA, bitB);
    const carrySum = halfadder(bitSum[1], carry);
    
    const carryCalculate = new LogicGate(bitSum[0], carrySum[0])
    const resultCarry = carryCalculate.orGate();
    const resultSum = carrySum[1];
    ```

    3개의 입력값을 `반가산기` 2번을 사용하여 합을 구함.  
    반가산기를 통해 출력된 자리올림을 `OR 게이트` 사용하여 마지막 자리올림 구함.


- ### 바이트 가산기
    - 입력받는 byte는 낮은 자리(LSB)가 배열의 앞쪽에 오도록 표현.  
    - 두개의 입력값의 길이가 다른경우 짧은 배열에 `false 추가`  
    - 반복하면서 `전가산기` 사용하여 `합 push`해주고 반복 종료 후에  `carry push` 후 종료  
    <br>

    ```js
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
    ```