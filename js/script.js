var count = 0;

document.getElementById("muButton").onclick = function () {
    count++;
	if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
	} else {
        var img = document.createElement("img");
        img.src = "https://i.playground.ru/p/gZmm1gXjG7jJGe67fxgdmg.jpeg"
        document.getElementById("demo").appendChild(img) //добавление дочернего элемента
	}
}