let initial_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
let memory_values = [];
let memory_tile_ids = [];

// keeps track of tiles flipped
let tiles_flipped = 0;


// adjusted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    // I still have no idea how to interpret this block below
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// beginning of the game
function newGame(){
	tiles_flipped = 0;
	let output = '';
    shuffle(initial_array);
	for (let i = 0; i < initial_array.length; i++) {
		//output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this, \'' +initial_array[i] + '\')"></div>';
		output += '<div id="tile_' 
		+ i + 
		'" onclick="memoryFlipTile(this, \' + initial_array[i] + \')"></div>';
		console.log(output);
	}
	document.getElementById('memory_board').innerHTML = output;
}
newGame();


