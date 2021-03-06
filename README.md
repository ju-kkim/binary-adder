# ð¡ ëì§í¸ ë¼ë¦¬íë¡

## ë¼ë¦¬ ê²ì´í¸
- ### AND, OR, NAND, XOR ê²ì´í¸ êµ¬í

    1. ***AND ê²ì´í¸***
        
        && ì°ì° - 2ê°ì ìë ¥ì ë°ê³ , 2ê° ëª¨ë trueì¼ ëë§ ì¶ë ¥ì´ trueê° ëë¤.

        ```js
        andGate(bitA, bitB){
            return bitA && bitB
        }
        ```


    2. ***OR ê²ì´í¸***

        || ì°ì° - 2ê°ì ìë ¥ì ë°ê³ , 1ê° ì´ìì´ trueì¼ ë ì¶ë ¥ì´ trueê° ëë¤.

        ```js
        orGate(bitA, bitB){
            return bitA || bitB
        }
        ```

    3. ***NAND ê²ì´í¸ (NOT AND)***
        
        AND ê²ì´í¸ì ëìê³¼ ë°ëë¡ ëì!
        
        **INVERTOR + AND ê²ì´í¸**  
        
        | NAND | A | B |
        | --- | --- | --- |
        | false | true | true |
        | true | true | false |

        ```js
        nandGate(bitA, bitB){
            return (this.bitA && this.bitB)
        }
        ```
    
    4. ***XOR ê²ì´í¸***
        
        2ê°ì ìë ¥ì´ ìë¡ ë¤ë¥¸ ê°ì¼ ëë§ ë¶ì´ ë¤ì´ì¨ë¤.
        
        | XOR | A | B |
        | --- | --- | --- |
        | false | false | true |
        | true | true | false |


        ```js
        xorGate(bitA, bitB){
            return !(bitA && bitB) && (bitA || bitB)
        }
        ```

## ê°ì°ê¸° êµ¬í
- ### ë°ê°ì°ê¸°
    2ê°ì ë¹í¸ ìë ¥ê°ì ëí´ì£¼ê³  `carry(ìë¦¬ì¬ë¦¼)`, `sum(í©)`ì ì¶ë ¥íë¤.  
    ë¹í¸ì í© = `XOR`, ìë¦¬ì¬ë¦¼ = `AND` ì¬ì©

    ```js
    const calculate = new LogicGate(bitA, bitB)

    const sum = calculate.xorGate();
    const carry = calculate.andGate();
    ```

- ### ì ê°ì°ê¸°
    2ê°ì ë¹í¸ì carry(ìë¦¬ì¬ë¦¼)ì ìë ¥ë°ì **(ì´ 3ê°)** ëí´ì£¼ê³  `carry(ìë¦¬ì¬ë¦¼)`, `sum(í©)`ì ì¶ë ¥íë¤.    
    ë°ê°ì°ê¸°ë¡ë 2ê°ì ë¹í¸ë§ ëí ì ìë¤. ìë¦¬ì¬ë¦¼ì´ ë°ìí  ê²½ì° 2ê°ì ë¹í¸ì ìë¦¬ì¬ë¦¼ì ëí ììë ì ê°ì°ê¸°ê° íìíë¤.  

    ![ì ê°ì°ê¸°](https://user-images.githubusercontent.com/68211156/147943097-bc963a6a-20e3-46ac-bf1d-5fb5847ea2da.png)  

    ```js
    const bitSum = halfadder(bitA, bitB);
    const carrySum = halfadder(bitSum[1], carry);
    
    const carryCalculate = new LogicGate(bitSum[0], carrySum[0])
    const resultCarry = carryCalculate.orGate();
    const resultSum = carrySum[1];
    ```

    3ê°ì ìë ¥ê°ì `ë°ê°ì°ê¸°` 2ë²ì ì¬ì©íì¬ í©ì êµ¬í¨.  
    ë°ê°ì°ê¸°ë¥¼ íµí´ ì¶ë ¥ë ìë¦¬ì¬ë¦¼ì `OR ê²ì´í¸` ì¬ì©íì¬ ë§ì§ë§ ìë¦¬ì¬ë¦¼ êµ¬í¨.


- ### ë°ì´í¸ ê°ì°ê¸°
    - ìë ¥ë°ë byteë ë®ì ìë¦¬(LSB)ê° ë°°ì´ì ììª½ì ì¤ëë¡ íí.  
    - ëê°ì ìë ¥ê°ì ê¸¸ì´ê° ë¤ë¥¸ê²½ì° ì§§ì ë°°ì´ì `false ì¶ê°`  
    - ë°ë³µíë©´ì `ì ê°ì°ê¸°` ì¬ì©íì¬ `í© push`í´ì£¼ê³  ë°ë³µ ì¢ë£ íì  `carry push` í ì¢ë£  
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