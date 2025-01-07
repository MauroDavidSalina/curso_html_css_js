//alert("probando JS!!!");
const content = document.getElementById("container");
console.log(content);
const firstParagraph = document.querySelector(".title");
console.log(firstParagraph);
const allParagraph = document.querySelectorAll(".title");
console.log(allParagraph);

const button =  document.getElementById('changeTitle');

button.addEventListener('click', () => {
    firstParagraph.textContent = "Texto cambiado";
    firstParagraph.style.color = 'red';
    firstParagraph.style.fontSize = '4rem';
} )