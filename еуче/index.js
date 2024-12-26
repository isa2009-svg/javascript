const addTask = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

addTask.addEventListener('click', (e) => {
    e.preventDefault();

     const taslInput = document.getElementById('taskInput')

     if (taskInput.value.trim() !== '' ) {
        const task = document.createElement('li')
        const taskName = document.createElement('span')
        const deleteButton = document.createElement('button')

        task.classList.add('task')
   
       taskName.textContent = taslInput.value;
       taskInput.value = ''
       deleteButton.textContent = 'өшіру';
       
       task.appendChild(taskName)
       task.appendChild(deleteButton)
       taskList.appendChild(task)
   
       deleteButton.addEventListener('click', () => {
           task.remove()
       })
     }
})
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (event) => {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput');

    const tasks = document.querySelectorAll('.task')

    tasks.forEach(task => {
        const taskName = task.querySelector('span').textContent

        if (!taskName.includes(searchInput.value)) {
            task.style.display = 'none'
        } else {
            task.style.display = 'flex'
        }
  
  console.log(taskName)
    })
})

