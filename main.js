// let container = document.getElementById('container');
// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// let randomizedArray = [];
// function shuffle() {
//  	for (let i = 0; i < arr.length - 1; i++ ) {
//    		randomizedArray.push(arr.splice(Math.floor(Math.random()*arr.length), 1)[0]);
//     }
//   // Push the remaining item onto tempArr
// 	randomizedArray.push(arr[0]);
// 	arr=randomizedArray;
// 	console.log(arr);
// }
// shuffle();

let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// this shuffle array comes from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(shuffleArray(cards));




