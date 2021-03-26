// function sum(a, b) {
//     var a = 3;
//     var b = 4;
//     return a + b;
// }
// console.log(sum())

//const { match } = require("node:assert");

// function findWord(phrase, word) {
//     const indexWord = phrase.indexOf(word);
//     let exists = false;
//     if(indexWord !== -1) {
//         exists = true;
//     }
//     return exists;
// }
// console.log(findWord('hola me llamo juan', 'juan'));

// function countLastWordLength(phrase) {
//     const array = phrase.split(' ');
//     const lastWord = array.pop();
//     return lastWord.length;
// ******************}

// function replaceLastWord(phrase, word) {
//     const array = phrase.split(' ');
//     array.pop();
//     array.push(word);
//     const result = array.join(' ')
//     return result;
//  }
// console.log(replaceLastWord('Hola soy futuro programador', 'futbolista'));



// function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {
//     const array = firstUserPhrase.split(' ');
//     const array2 = SecondUserPhrase.split(' ');
//     const array3 = thirdUserPhrase.split(' ');
//     const age = array [array.length - 2];
//     const age2 = array2[array2.length - 2];
//     const age3 = array3[array3.length - 2];
//     return Number(age) + Number(age2) + Number(age3);
// }
// const firstUserPhrase = "me llamo juan y tengo 8 años"
// const SecondUserPhrase = "Me llamo sofia y tengo 3 años"
// const thirdUserPhrase = "Me llamo Andrea y tengo 12 años"
// const returnSumAges = sumAges(firstUserPhrase, SecondUserPhrase, thirdUserPhrase);
// console.log(returnSumAges)

// function arraySumValues(array) {
//     var array = [1, 2, 3]
//     console.log(array[0] + array[1] + array[2])
// }
// arraySumValues()

// function populateArray(number, limit) {
//     var limit = 100;
//     const result = [ ];
//     for(let i =number+number; i<limit; i=i+number){
//         result.push(i)
//         console.log(result);
//     }
   
// }
// console.log(populateArray(20, 100));



    
// let array = [2,4,8,3,4,4,3,4,5]
//   let middle = array.length/2
//     let result = array.length%2;
//     if(result === 0){
//         mitad = array[middle-=1]
//         mita = array[middle+=1]
//         console.log(mitad, mita)
//     } 
//     else(result !== 0){
//         mit = array[middle-=.5]
//         console.log(mit)
//     } 

    // function findMiddleNumber(array) {
    //     if(array.length % 2 === 1){
    //         let mid = array.slice(array.length / 2);
    //         return mid[0]
    //     }else{
    //         let mid = array.slice(array.length / 2 -1)
    //         return [mid[0], mid[1]];
    //     }
    // }

    // console.log(findMiddleNumber(array(2,3,4)))

        
  