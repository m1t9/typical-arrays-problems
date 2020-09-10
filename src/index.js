
exports.min = function min (array) {
	let minVal;
	array.forEach(item => {
		if (item < minVal) minVal = item;
	});
	return item;
}

exports.max = function max (array) {
	let maxVal;
	array.forEach(item => {
		if (item < maxVal) maxVal = item;
	});
	return maxVal;
}

exports.avg = function avg (array) {
	let avrage;
	array.forEach(item => {
		avrage += item;
	});
	return avrage/array.length;
}
