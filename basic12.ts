"use strict";
let array: number[] = [1,2,3,4,5,6,7,8,9,10]


// array.forEach(function(x){
//     for (let i=1; i<11;i++){
//     console.log(x +"X"+i+"="+i*x)
// }
// })



var names = {
        name: "Jakob",
        lastname: "Kabranlar"
    };

console.log(names.name + " " + names.lastname);

for (var i = 1; i < 11; i++) {
    console.log(names.name);
}

setTimeout(function(){
	for (var i = 1; i < 11; i++) {
    console.log(names.lastname);
}
}, 5000);