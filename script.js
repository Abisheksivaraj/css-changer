"use script";
// select element
const widthEl = document.getElementById("width-slide");

const radiusEl = document.getElementById("radius-slide");

const colorEl = document.getElementById("color-box");

const paddingEl = document.getElementById("padding-slide");

const imageEl = document.querySelector(".image");

const blurEl = document.getElementById("blur-slide");


const jsEl = document.getElementById("js");



const buildingEl = document.getElementById("building");

widthEl.addEventListener("input", () => {
  imageEl.style.width = widthEl.value + "rem";
});

radiusEl.addEventListener("input", () => {
  buildingEl.style.borderRadius = radiusEl.value + "px";
});

colorEl.addEventListener("input", () => {
  buildingEl.style.borderColor = colorEl.value;
  jsEl.style.color = colorEl.value;
});


paddingEl.addEventListener("input", () => {
  buildingEl.style.borderWidth = paddingEl.value + "px";
});

blurEl.addEventListener("input", () => {
  imageEl.style.filter = `blur(${blurEl.value + "px"})`;
});