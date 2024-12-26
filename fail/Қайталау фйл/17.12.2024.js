const errorMessage = document.getElementById('errorMessage');
const requestForm = document.getElementById('requestForm');


requestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('name').value;
    const phoneValue = document.getElementById('phone').value;
    const problemValue = document.getElementById('problem').value;

  if (nameValue === '') {
    errorMessage.style.top = '50px';
    errorMessage.textContent = 'AT toltyr';
  } else if (phoneValue === '') {
    errorMessage.style.top = '50px'; 
    errorMessage.textContent = 'telefon toltyr';
  }  else if (phoneValue === '') {
    errorMessage.style.top = '50px'; 
    errorMessage.textContent = 'problema tanda';
  } else {
    errorMessage.style.background = 'green';
    errorMessage.textContent = 'Barlygy dyrys';
    errorMessage.style.top = '50px';
  }
});

const arrowUp = document.getElementById('arrowUp');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        arrowUp.style.display = 'flex';
    } else {
      arrowUp.style.display = 'none';
    }
});
