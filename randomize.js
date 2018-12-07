// Fisher-Yates shuffle

const randomize = (array) => {
	let arrLength = array.length;
	let temp; 
	let i;

	while (arrLength) {
		i = Math.floor(Math.random() * arrLength);
		arrLength--;

		temp = array[arrLength];
		array[arrLength] = array[i];
		array[i] = temp;
	}

	return array;

};

console.log(randomize([1,2,3,4,5]));