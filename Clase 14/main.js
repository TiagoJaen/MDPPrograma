const block1 = document.getElementById("block-1");
const block2 = document.getElementById("block-2");
const block3 = document.getElementById("block-3");

const cambiar = document.getElementById("cambiar")
const volver = document.getElementById("volver")

cambiar.addEventListener("click", function(){
    block1.style="background: orange"
    block2.style="grid-column-end: span 3; background: red"
    block3.style="grid-column-end: span 3; background: green"
});

volver.addEventListener("click", function(){
    block1.style=""
    block2.style=""
    block3.style=""
})