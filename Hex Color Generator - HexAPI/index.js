const getSchemeBtn = document.getElementById("get-scheme-btn");
let colorsArr = [];

fetch(`https://www.thecolorapi.com/scheme?hex=0000FF&mode=monochrome`, {method: "GET"})
.then(res => res.json())
.then(scheme => {
    scheme.colors.forEach((color) => {
        colorsArr.push(color.hex.value);
    })
    console.log(colorsArr);
    setColors(colorsArr);
});

getSchemeBtn.addEventListener("click", () => {
    const modeSelect = document.getElementById("mode-select");
	const colorSelect = document.getElementById("color-select");
    colorsArr = [];
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelect.value.replace("#", "")}&mode=${modeSelect.value}`, {method: "GET"})
		.then(res => res.json())
		.then(scheme => {
			scheme.colors.forEach((color) => {
				colorsArr.push(color.hex.value);
			})
			console.log(colorsArr);
			setColors(colorsArr);
    });
    
});

function setColors(colorsArr) {
    let colorsHTML = "";
    for (let color of colorsArr) {
        colorsHTML += `
            <div class="color" style="background-color: ${color}"></div>
            <h2 class="color-text">${color}</h2>`
    }
    document.getElementById("color-scheme").innerHTML = colorsHTML;
}
