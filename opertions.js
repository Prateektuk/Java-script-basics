const prompt = require("prompt-sync")({ sigint: true});

let a = prompt("Name?")

a = Number.parseInt(a)

if(a>0){
    alert("invalide X!");
}

else if(a<18){
    alert("nt allowed")
}
else {
    alert("correct");
}

console.log(typeof(a));