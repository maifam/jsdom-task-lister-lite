// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the 
    // DOM after the submit button has been activated.


    const form = document.querySelector("#create-task-form")
    const description = document.querySelector("input#new-task-description")
    const tasks = document.querySelector("#tasks")
    
    document.addEventListener("DOMContentLoaded", () => {
      // your code here
    
      form.addEventListener('submit', function(event){
        event.preventDefault()
    
        const taskInput = description.value
    
        const newLi = document.createElement('li')
    
        newLi.textContent = taskInput
    
        tasks.appendChild(newLi)
    
    
    
        form.reset()
      })
    
    
    });