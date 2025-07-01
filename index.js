let a = document.getElementById("first");
let b = document.getElementById("second");
let c = document.getElementById("output")

function plus(){
    let d = parseFloat(a.value)+parseFloat(b.value);
    console.log(d);
    c.textContent = d;
    
}
function minus(){
    let d = parseFloat(a.value)-parseFloat(b.value);
    console.log(d);
    c.textContent = d;
    
}
function multiple(){
    let d = parseFloat(a.value)*parseFloat(b.value);
    console.log(d);
    c.textContent = d;
    
}
function division(){
    let d = parseFloat(a.value)/parseFloat(b.value);
    console.log(d);
    c.textContent = d;
    
}