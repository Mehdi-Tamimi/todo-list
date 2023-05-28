let i = 0

document.getElementById('btn')
   .addEventListener('click' , () => {
    const task = document.getElementById('input').value;
    

    const box = document.createElement('div')
    box.setAttribute('class','check')
    box.innerHTML =     `<span class="task">
                            <input class="checkbox" type="checkbox">
                        
                            <div class="task__text">${task}</div>
                        </span>
                        <button id="deletebtn${i}" class="deletebtn">
                            remove
                        </button>`

    
    document.getElementById('form').append(box)
    document.getElementById(`deletebtn${i}`)
        .addEventListener('click' , (e) => {
            e.target.parentNode.remove()
    })
    i += 1
   
   
   
   
   })
