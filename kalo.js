// for (let i = 1 ; i <=50; i++) {
//     if (i >= 1 && i <= 25 && i %2 == 1) {
//         continue
//         }

//     console.log(i);
    

   
    
// // }

// let coynt = 0;

// white (count < 5) {
//     console.log(count);
//     count++;
// }

// do {
//     console.log(count);
//     count++
// } while (condition) {
//     count++;
// }
// let num =0;
// while (num < 10) {
//     num++;
//     if (num% 2 == 0) {
//         continue;//jul san bolgandyktan sikldin kelesi kadamyna otti
//     }
//     console.log(num);
    
// }
//  let num = 1;
//  while (num <= 10) {
//     if (num) {
        
//     }
//  }

// let count = 10;
// while (count > 0) {
//     console.log(count);
//     count--;
// }

// let num = 1;
// while (num <= 15) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FizzBuzz");       
//     } else if (num % 3 ==0) {
//         console.log('Fizz');       
//     } else if (num % 5 == 0) {
//         console.log("Buzz");       
//     } else {
//         console.log(num);
        
//     }
//     nuv++
// }

// let num = 1;
// let resultJup = 0;
// let resultTaq = 0
// while (num <= 10) {
//     if(num % 2==0){
//         resultJup += num; 
//     }else{
//         resultTaq += num;
//     }

//     num++;
// }

// console.log(resultJup);
// console.log(resultTaq);

// var i = 1;
// while (i<=20) {
//     if (i==10){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// 1 2 3 4 5 6 7 8 9 10

// var san =prompt("san engiz")
// var i = 1
// while (i<=san) {
//     if (i % 2 ==0 ) {
//         i++
//         continue;
//     }
// }\

// var num= 1;
// var result =0;
// var resultTaq =0;
// //1-30

// while (num <= 30) {
//     if (num % 2==0) {
//         result += num;
//     } else if (num % 2 !==0) {
//         resultTaq += num;
//     }
//     num++;
// }
// console.log(result);
// console.log(resultTaq);

// var num = +prompt("san jaz")
// var result = +prompt("ekinchi san jaz")
// var result1 =0;
// var result2 =0;
// var min

// while (num <= 30) {
//     if (num % 2==0) {
//         result +=num;
//     }else if(num % 2 !==0) {
//         resulttaq
//     }

    
//}

// var resultTaq =0;
// var result

//1


// for ( let i=1;  i<=30; i+=2){
//     console.log(i);
    
// }
// for (let i=1; i<=15; i++) {
//     if(i % 4 ==0 ){
//       continue;
//     }
//     console.log(i);
    
// }

// for (let i=1; i<=20; i++) {
//   if (i % 3==0) {

//     console.log(i + ' Fizz');
    
//   } else if(i % 5==0){
//     console.log(i);
//     console.log(i +" Buzz")
    
//   } 
//     if (i%3==0 && i%5==0) {
//         break;
//     }
// }

//     var sany = +prompt("stydent sany kancha")
//     var jalpy = 0
// for (let i = 1; i <= sany; i++) {
//     var baga  = +prompt(i + "shy student bagasyn jaz")
//     jalpy += baga
    
// }
// console.log(jalpy/sany);


let result =0;
for (let i=1; i <= 12; i++ ) {
    let grade =+prompt("#" + i + 'baga jaz');

    while (grade < 0 || grade > 100) {
    grade = +prompt("#" + i + "Bagany tagy jaz");
}
result +=grade;
}
alert("Orta ball" + result / stydentsNumber)
console.log();

