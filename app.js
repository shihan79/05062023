let name = document.querySelector('.name')
let caption = document.querySelector('.caption')
let button = document.querySelector('.button')
let allpost = document.querySelector('.allpost')


let arr = []

function display(){
    arr.map(function(item){
        
        allpost.innerHTML += `<div class="card mt-3" style="width: 18rem;">                    
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description} </p>
          <button href="#" class="btn btn-primary">Edit</button>
          <button href="#" class="btn btn-danger delete">Delete</button>
        </div>
      </div>`
    })
    let deletebtn = document.querySelectorAll('.delete')
    // console.log(deletebtn)
let delarr = Array.from(deletebtn )
    // console.log(delarr)
delarr.map((item,index)=>{   
    item.addEventListener('click',function(){
           allpost.innerHTML = ''
           arr.splice(index,1)
           display()
           
    })
})
}

button.addEventListener('click',function(){
    allpost.innerHTML = ''
    arr.push(
        {
            name :name.value,
            description : caption.value
        }
            )
            name.value = ''
            caption.value = ''
            console.log(arr)
            display()
})



