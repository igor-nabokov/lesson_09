function writeZero(div) {
	if (div.innerHTML == "") {
		div.innerHTML = "o";
		writeEx();
	}
}

function writeEx() {
	var cells = document.querySelectorAll(".cell");
	var emptyCells = [];
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].innerHTML == "") {
			emptyCells.push(cells[i]);
		}
	}
	var random = Math.floor(Math.random() * emptyCells.length);
	emptyCells[random].innerHTML = "x";
}

window.onload = function () {
	var data = localStorage.getItem('Game');
	var zeroes = 0;
	var exes = 0;
	if (data != null) {
		data = JSON.parse(data);
		var cells = document.querySelectorAll(".cell");
		for (var i = 0; i < data.length; i++) {
			cells[i].innerHTML = data[i];
			if (data[i] == "x") {
				exes++;
			}
			if (data[i] == "o") {
				zeroes++;
			}
		}
	}
	if (zeroes >= exes) {
		writeEx()
	}
};

function refresh() {
	var cells = document.querySelectorAll(".cell");
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerHTML = "";
	}
	writeEx();
}

function save() {
	var cells = document.querySelectorAll(".cell");
	var data = [];
	for (var i = 0; i < cells.length; i++) {
		data.push(cells[i].innerHTML);
	}
	localStorage.setItem('Game', JSON.stringify(data));
}

window.addEventListener('beforeunload', function() {
	save();
});

