// const loginform = document.getElementById('loginForm');
// const errorMessage=document.getElementById('errorMessage');

// loginform.addEventListener('submit', (event) =>  {
//     event.preventDefault();

//     const emailValue =document.getElementById('email').value ;
//     const passwordvlue =document.getElementById('password').value ;
//     console.log({emailValue,passwordvlue});
//     if (!emailValue.includes ('@')) {
//         errorMessage.textContent ='Email толық емес';
//     } else if (passwordvlue.length < 6) {
//         errorMessage.textContent =
//         'Құпия сөз кем дегенде 6 символдан тұру керек'
//     }else {
//         errorMessage.style.color = 'green';
//         errorMessage.textContent = 'Форма сәтті түрде жіберілді';
//         window.location.href = 'index.html';
//     }
// })

const fruitSElect = document.getElementById('fruitselect');
const selectedValue = document.getElementById('selectValue');

fruitsvalue.addEventListener('change', () => {
    selectValue.textContent = fruitsvalue.value;
})