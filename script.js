'use strict'

// /**
//  * 入力：HTMLで作成したテキストボックス「text1」から数値をcountに受け取る
//  * 出力：HTMLで作成した「outputArea」のテキストに素数もしくは因数を代入する
//  */
function sosuOutput(){
   const count = parseInt(document.getElementById("text1").value);
 
   const display=document.getElementById("outputArea");
   // console.log(count);
   if (count > 0) {
      for (let i = 0; i <= count -1; i++) {
         display.innerText += `${i+1}: ${sosu(i+1)}\n`;
      }    
   } 
}

// /**
//  * @param {number} number - 素数か否かを評価する数値
//  * @returns {Array<number>} returnArray   - 因数が入った新しい配列
//  * @returns {Array<number>} returnMessage - 素数の場合のメッセージ
//  */
function sosu(number) {
   const returnArray = [];
   const returnMessage = `素数です。${randomCharacter()}`
   if (number <= 2) { // 1,2は素数
      return returnMessage;
   } else {
      for (let i = 1; i <= number; i++) { // カウントアップしながら因数を調査
         if (number % i === 0) { // 割り算してあまりが出ない場合は因数
            returnArray.push(i);
         }
      }
      if (returnArray.length ===2) { // 因数が2個の場合(1とその数自身)は素数
         return returnMessage;
      } else {
         return `因数は${returnArray}です。`;
      }
   }
}

// /**
//  * @returns string any  - ランダムに動物キャラを返す
//  */
function randomCharacter(){
   const i = Math.round(Math.random()*10,1);
   const array = ["🐄","🦊","🐸","🐒","🐬","👹","🐟","🐷","🦑","🐌","🐧"]
   return array[i];
}
