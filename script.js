const box = document.getElementById('box');

const Stylecolor = document.getElementById('color');
const Stylebgcolor = document.getElementById("bg-color");
const Stylepadding = document.getElementById("padding");
const StylefontSize = document.getElementById("font-size");
const StylefontWeight = document.getElementById("font-weight");


Stylecolor.addEventListener('change', () => {
    box.style.color = Stylecolor.value;
});
Stylebgcolor.addEventListener('change', () => {
    box.style.backgroundColor = Stylebgcolor.value;
});
Stylepadding.addEventListener('change', () => {
    box.style.padding = Stylepadding.value;
});
StylefontSize.addEventListener('change', () => {
    box.style.fontSize = StylefontSize.value;
});
StylefontWeight.addEventListener('change', () => {
    box.style.fontWeight = StylefontWeight.value;
});

