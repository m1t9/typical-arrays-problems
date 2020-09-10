exports.min = function min (array) {
	if (typeof array === 'undefined') return 0;
	if (array.length === 0) return 0;
	let minVal = array[0];
	array.forEach(item => {
		if (item < minVal) minVal = item;
	});
	return minVal;
}

exports.max = function max (array) {
	if (typeof array === 'undefined') return 0;
	if (array.length === 0) return 0;
	let maxVal = array[0];
	array.forEach(item => {
		if (item > maxVal) maxVal = item;
	});
	return maxVal;
}

exports.avg = function avg (array) {
	if (typeof array === 'undefined') return 0;
	if (array.length === 0) return 0;
	let avrage = 0;
	array.forEach(item => {
		avrage += item;
	});
	return avrage/array.length;
}