//2
var a = +prompt("1shi qabyrga engiz:")
var b = +prompt("2shi kabyrga engiz")
var c = +prompt("3shi kabyrga engiz")

if (a + b > c && a + c > b && b + c > a) {
    alert("Бұл үшбұрыш жасай алады")
} else {
    alert("Бұл үшбұрыш жасай алмайды")
}




//3

var baga =prompt("Paidalanychu 0-100 ge araluk bagasyn jassun")//ABCDEF

if (baga<100 && baga>90){
    alert("A")
} else if (baga<89 && baga>80) {
    alert("B")
}else if (baga<79 && baga>70) {
    alert("C")
}else if (baga<69 && baga>60) {
    alert("D")
}else if (baga<59 && baga>0) {
    alert("F")
}else {
    alert("0-ден 100 аралығында ұпай енгізіңіз")
}
