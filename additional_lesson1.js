// var a = 5 
// var b = 7

// if(a > b){
//     alert(a)
// }else{
//     alert(b)
// }

// var c = 45 
// var d = 100

// if(c > d){
//     alert(c)
// }else{
//     alert(d)
// }


// var x = 78 
// var y = 90

// if(x > y){
//     alert(x)
// }else {
//     alert(y)
// }


// if(d > x){
//     alert(d)
// }else{
//     alert(x)
// }

// function eseptey(san1, san2){
//     if(san1 > san2){
//         return san1
//     }else{
//         return san2
//     }
// }

// var a = 5 
// var b = 7
// alert(eseptey(a,b))

// var c = 45 
// var d = 100
// alert(eseptey(c, d))

// var x = 78 
// var y = 90
// alert(eseptey(x, y))

// alert(eseptey(d, x))

function esep(x, ob){
    if(ob == "km"){
        return x*1000  
    }else if(ob == "dc"){
        return x / 10
    }else{
        return x
    }
}

var total = 0

while(true){
    var san = +prompt("Қашықтық жаз:")


    if(san==0){
        break;
    }else{
        var olshem_birlik = prompt("Өлшем бірлік:")
        total += esep(san, olshem_birlik)
    }
    
}

alert(total)