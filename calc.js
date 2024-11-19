let x=document.getElementById("result")
function validate(value){
     x.textContent=x.textContent=="0"?value:x.textContent+value
}

function clearResult(){
    x.textContent = "0";
}

function calculate(){
    x.textContent=eval(x.textContent)
}