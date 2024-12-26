// var number = prompt("birden ychke deyin san jas")
// isCorrect = true;
// switch (number) {
//     case "1": 
//         alert('1 tandayuk');
//         break;
//     case"2":
//     alert('2 tandayuK')
//     break;
//     case '3':
//         alert( '3 tandayuk')
//         break;
//     default:
//         alert('1-3ke san jasy kerek boldyn')
//         isCorrect = false;
// }
// if (isCorrect == false) {
//     number = prompt("birden ychke deyin san jas")

//     switch (number) {
//         case "1": 
//             alert('1 tandayuk')
//             break;
//         case"2":
//         alert('2 tandayuK')
//         break;
//         case '3':
//             alert( '3 tandayuk')
//             break;
//         default:
//             alert('1-3ke san jasy kerek boldyn');
//             isCorrect = false;
//     }
// }

// alert('kod ayaktaldy');



// var a =5;
// var b =7;
// var temp =0;

// temp = a;
// a = b ;
// b = temp;

// alert(a);
// alert(b);

// var a ="";

// a +="ABC"
// a +="\nGHJ"

// a +="KLj"
// a +=78

// alert(a);

    // var name = prompt("Atyndy jas")
    // var burg = prompt("Burger tanda" + "\n" + "A)tayuk etimen" + "\n" + "B)Siur etumen" + "\n" + "C)Etsis")
    // if(burg=="A"){
    //     burg = "tayuk etimen";
    // } else if (burg=="B"){
    //     burg = "Siur etumen"
    // } else{
    //     burg = "Etsis";
    // }
    // var su =prompt("Sysun tapsyrys berinis \n"  + "A)Cola" + "\n" + "B)Sprite" + "\n"+ "C)Fanta")
    // if(su=="A"){
    //     su = "Cola";
    // } else if (su=="B"){
    //     su = "Sprite"
    // } else{
    //     su = "Fanta";
    // }
    // var fri =prompt("Fri tapsyrys Beriniz \n" + "A)Small" + "\n" + "B)Medium"  + "\n" + "C)large")
    // if(fri=="A"){
    //     fri = "Small";
    // } else if (fri=="B"){
    //     fri = "Medium"
    // } else{
    //     fri = "large";
    // }
    // var souce =prompt("Souce \n" + "A)BBQ" + "\n" + "B)Ketchup" + "\n")     
    // if(souce=="A"){
    //     souce = "BBQ";
    // } else if (souce=="B"){
    //     burg = "Ketchup"
    // } 
    // alert("Tapsyrys:\n" + burg + "\n" + su +"\n" + fri + "\n" + souce +"\n" + name +"\n" );

    // var num1 = Number(prompt("Birinshi san:"));
    // var num2 = Number(prompt("Ekinshi san:"));
    // var oper = (prompt("-/+/:/*"));

    // switch(oper){
    //     case "-":
    //         alert(num1-num2);
    //         break;
    //     case "+":
    //         alert(num1+num2); // "5" + "9" = "59"
    //         break;
    //     case "*":
    //       alert(num1*num2);
    //         break;
    //     case ":":
    //       alert(num1/num2);
    //       break;
    // }
    var name = prompt("Enter your name")
    var check = ""
    var burger = prompt("burgerTandanyz \nA) tauyqetimen500T \nB)ciyrretimen700T \nC)Etsiz300T " )
    var summa = 0;
    switch(burger) {
        case"A":
           check += "tauyqetimen "
           summa += 500
           break;
        case"B":
           check += "ciyrretimen "
           summa +=700
           break;
        case "C":
        check += "Etsiz"
        summa +=300
           break;
        default:
               alert("choosesomeshing")
               isorrect = false
       }
    
    
    var susyn = prompt("Cusyntapsyrysberiniz \nA)Cola300T  \nB)Sprite350T   \nC)Fanta400T")
    
    switch(susyn) {
        case"A":
           check += "Cola" 
           summa += 300
           break;
        case"B":
           check += "Sprite  " 
           summa += 350
           break;
        case"C":
        check += "Fanta" 
        summa +=400
           break;
        default:
               alert("choosesomeshing")
               isorrect = false
       }
    
    var free = prompt("Free tapsyrysberiniz \nA)Small200T  \nB)Medium300T  \nC)Large350T")
    
    switch(free) {
        case"A":
           check += "Small"
           summa += 200
           break;
        case"B":
           check += "Medium " 
           summa += 300
           break;
        case("C"):
        check += "large"
        summa +=350
           break;
        default:
               alert("choosesomeshing")
               isorrect = false
       }
    
    var souse = prompt("Sousetapsyrysberiniz \nA)ketchup  \nB)cirnyi ")
    
    switch(souse) {
        case"A":
           check += "ketchup"
           summa += 250
           break;
        case"B":
           check += "cirnyi "
           summa += 250
           break;
        default:
               alert("choosesomeshing")
               isorrect = false
       }
    
    check += name   
    alert (check + "\n" + summa)
