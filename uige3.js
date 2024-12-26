alert("Қош келдініз саяхатшы!" + "\n" + "Сіз Саяхатқа шыққалы жатырсыз" + "\n" + "Cіздін тандауыныз-Сіздін өмірінізді шешеді");
 var aty =prompt("Ойыншы ның атың енгізініз")

 var jol =prompt("Сіз қиылыста тап боласыз. Сіз солға немесе оңға барасыз ба?"); //solga

 if (jol== "солға " ) {
   var areket = prompt("Алдыңнан жылан шықты. Сен қашасыңба әлде өлтіресіңбе? (қашу/өлтіру)"); //qashy
   if(areket=="қашу"){
        alert("Сені жылан жетіп алып шағып өлтірді")
   }else{
      var areket2 = prompt("Жыланнан соң алдығнан көл шықты. Жүзесіңбе әлде қайыққа отырасыңба?")
   }
 }else{
    var onga = prompt("aldynan karakchylar chykty ")
    if (onga=="kachy") {
        alert("YIge jettynus")
    } else{
      prompt( "Tobelesy")
    }

    
 }

