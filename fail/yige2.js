        const p2 =document.getElementById("p2")
        const p1 =document.getElementById("p1")
        const button1 =document.getElementById("button1")
        const button2 =document.getElementById("button2")
        const button3 =document.getElementById("button3")
        const button4 =document.getElementById("button4")
        const fail = document.getElementById("fail")
        const data = document.getElementById("data")

        button4.addEventListener('click', function(){
            p2.textContent = "Ismail"
        })
        button3.addEventListener("click", function () {
            fail.style.background = "blue"
        });
        button3.addEventListener("dblclick", function () {
            fail.style.background = "white"
        });
        button1.addEventListener('click', function(){
            data.textContent = "12.12.2024"
        })
        button2.addEventListener('click', function (){
            data.textContent = ""
        })
        p1.addEventListener('mouseenter', function () {
            p1.style.color="red"
        })
        p1.addEventListener('mouseleave', function () {
            p1.style.color="black"
        })