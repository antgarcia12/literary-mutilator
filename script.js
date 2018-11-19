function changeColor(newColor) {
	var para1=document.getElementById('pickle');
	para1.style.color = newColor;
}

function shufflize() {
	var txt = document.getElementById("shuffle").textContent;
	var words = txt.split(" ");
	words.map(function(t) {
		for(i = (wordds.length - 1); i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = words[i];
			word[i] = words[j];
			words[j] = temp;
		}
		document.getElementById("shuffle").textContent = words.join(" ");
	});
}