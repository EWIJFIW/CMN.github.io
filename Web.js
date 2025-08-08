let list = [1,2,3]
let Rand = list[Math.floor(Math.random() * list.length)];
if(Rand === 1){
    document.getElementById("message").innerHTML = "Вы победили";
}
if(Rand===3){
    document.getElementById("message").innerHTML = "Ничья";
}
if(Rand===2){
    document.getElementById("message").innerHTML = "Вы проиграли";
}