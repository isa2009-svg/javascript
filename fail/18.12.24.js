// const greet = document.getElementById('greet')
// const newdiv = document.createElement('div');

// greet.addEventListener('click', () => {
//     newdiv.textContent = 'Welcome to my website';
//     const container = document.getElementById('container');
//      container.appendChild(newdiv)
// })

// const fruits = ['apple','banana', 'orange', 'pache'];

// const container = document.getElementById('container');

// fruits.forEach((fruit) => {
//     const card = document.createElement('div');
//     const name = document.createElement('h1');
  
//     card.style.padding = '10px';
//     card.style.border = '1,5 solid black'
//     card.style.marginBottom = '10px'
//     card.style.width = '200px'

//     name.textContent = fruit;

//     card.appendChild(name);
//     container.appendChild(card);
// })

//const fruits = [
//      {name: 'pizza', price:5.99},
//      {name: 'cola', price:5.99},
//      {name: 'pasta', price:5.99},
//      {name: 'hot-dog', price:5.99},
//      {name: 'burger', price:5.99},
// ];
// const container = document.getElementById('container');
// fruits.forEach((fruit) => {
//     const card = document.createElement('div');
//     const name = document.createElement('h1');
//     const price = document.createElement('price')
//     const deleteButton = document.createElement('button');
//   deleteButton.textContent

//     card.style.padding = '10px';
//     card.style.border = '1.5px solid black';
//     card.style.marginBottom = '10px';
//     card.style.width = '200px';
//     card.style.display = 'flex'
//     card.style.justifyContent = 'space-between'

//     name.textContent = fruit

//     deleteButton.addEventListener('click', () => {
//       card.remove();
//     });
//     card.appendChild(name);
//     container.appendChild(price);
//       card.appendChild(deleteButton);
// });

// const data = [
//     {name: "abai zholy", description: 'about abai '},
//     {name: "Mohammad Ali", description: 'about mohammad ali '},
//     {name: "elon musk", description: 'elon mohammad zaidi '},
// ]

// const container = document.getElementById('container');
// const name = createElement('h1');
// const description = createElement('p');

// data.forEach((datas) => {
//     const card = document.createElement('div');
//     const name = document.createElement('h1');
//     const description = document.createElement('p');

//     deleteButton.textContent = "Delete";

//     card.appendChild(deleteButton);

//     name.textContent = datas.name;
//     description.textContent = datas.description;

//     deleteButton.addEventListener('click', () => {
//         card.remove(card);
//     })

// }) 

const foods = [
    { name: 'pizza', price: 5.99 },
    { name: 'cola', price: 5.99 },
    { name: 'pasta', price: 5.99 },
    { name: 'hot-dog', price: 5.99 },
    { name: 'burger', price: 5.99 },
    ];
    
    const container = document.getElementById('container');
    
    foods.forEach((food) => {
    const card = document.createElement('div');
    const name = document.createElement('h1');
    const price = document.createElement('p');
    const deleteButton = document.createElement('button');
    const input = document.createElement('input');

    input.placeholder = 'Change name';
    
    deleteButton.textContent = 'DELETE';
    
    card.style.border = '1px solid black';
    card.style.padding = '10px';
    card.style.width = '300px';
    
    name.textContent = food.name;
    price.textContent = food.price;
    
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(deleteButton);
    
    card.addEventListener('dblclick', () => {
    card.replaceChild(input, name);
    });
    
    input.addEventListener('blur', () => {
    name.textContent = input.value;
    card.replaceChild(name, input);
    });
    
    deleteButton.addEventListener('click', () => {
    card.remove();
    });

    foods.addEventListener('blur', () => {
        name.textContent = input.value;
        card.replaceChild(name, input);
        });
    
    container.appendChild(card);
    });