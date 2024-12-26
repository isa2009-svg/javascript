const nameField =document.getElementById('name');
const helper = document.getElementById('helper');

nameField.addEventListener('input', () => {
    if (nameField.value.length < 6) {
        helper.style.color = 'red';
        helper.textContent = 'weak';
    } else if (nameField.value.length >= 6 && nameField.value.length < 10) {
        helper.style.color = 'orange';
        helper.textContent = 'medium';
    } else if (nameField.valhue.length >= 10 && nameField.value.length < 17) {
        helper.style.color = 'green';
        helper.textContent = 'very good';
    }
})
    


// nameField.addEventListener('focus', () => {
//     helper.textContent = ' osy minytka atynuzdy jazynyz';
//     nameField.style.borderColor = 'yellow';
// })

// nameField.addEventListener('blur', () => {
//     helper.textContent = '';
//     nameField.style.borderColor = 'black';
// })