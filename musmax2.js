VANTA.CELLS({
  el: "#element",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})

proverka();
function proverka(){
    if (window.innerWidth < 1400 && window.innerHeight < 750) 
alert('Размер окна недостаточен для полноценного и качественного отображения всех элементов. Лучше использовать полноэкранный режим.')  ;
}

document.getElementById("btna").onclick = function () {
var fieldNameElement = document.getElementById('demo');
fieldNameElement.innerHTML = 
`<h1 id="demo"><span class="word">`+`Приходите в `+`</span> <span class="word">`+`ЗАО НПП "АТС"`+`</span>`+`</h1>`;
};
document.getElementById("btno").onclick = function () {
var fieldNameElement = document.getElementById('demo');
fieldNameElement.innerHTML = 
`<h1 id="demo"><span class="word">`+`Очевидное `+`</span> <span class="word">`+`невероятное`+`</span>`+`</h1>`;
};
