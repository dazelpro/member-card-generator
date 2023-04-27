function generate() {
	let loop = document.getElementById("qty").value;
	if (loop) {
		let year = new Date().getFullYear();
		let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
		let identity = year + "" + month;
		for (let i = 0; i < loop; i++) {
			let random = getRandom(10);
			document.getElementById("barcode").innerHTML += `
				<div class="canvas">
					<svg id="barcode${i}" class="barcode-item"></svg>
					<div class="barcode-number">${identity}${random}</div>
					<img src="assets/images/template.jpg" alt="template">
				</div>
			`;
			JsBarcode(`#barcode${i}`, `${identity}${random}`, {
				format: "code39",
				width: 0.5,
				height: 29,
				fontSize: 5,
				textMargin: 0
			});
		}
	}
}

function getRandom(length) {
	return Math.floor(
		Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
	);
}

function reset() {
	document.getElementById("barcode").innerHTML = ``;
}
