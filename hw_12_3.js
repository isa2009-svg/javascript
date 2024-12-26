
// function check(a){
//     var qupia = 77
//     if(a>qupia){
//         return "Құпия сан кішірек"
//     }else if(a==qupia){
//         return "Дұрыс"
//     }else{
//         return "Құпия сан үлкенірек"
//     }
// }

// var jauap = ""
// while(true){
//     var san = +prompt("San zhaz")
//     jauap = check(san)

//     if(jauap == "Дұрыс"){
//         alert("Жарайсың Таптың!")
//         break
//     }else{
//         alert(jauap)
//     }
// }    

function salem(aty,at) {
    if(at=="қазақ"){
        return 'salem'+aty
    }else  {
        return 'kag dela'+aty
    }

}

var aty = prompt("atyn kim")
var at = prompt("yltyn kim")

alert(salem(aty,at))