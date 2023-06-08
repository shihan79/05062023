let name = document.querySelector('.name')
let caption = document.querySelector('.caption')
let button = document.querySelector('.button')
let allpost= document.querySelector('.allpost')
let update = document.querySelector('.update')
let arr = []
let updateIndex
let cardbody
button.addEventListener('click',function(){
    allpost.innerHTML = ''
    arr.push(
        {
            name : `${name.value}`,
            description : `${caption.value}`
        }               
    )
    name.value = ''
    caption.value = ''
    display()
    
})
update.addEventListener('click',function(){
    allpost.innerHTML = ''    
   arr[updateIndex] = {
    name : name.value,
    description : caption.value
   } 
   button.style.display = 'inline-block'
        update.style.display = 'none'
   display()
})
function display(){
arr.map(item =>{    
    allpost.innerHTML +=   `<div class="card" style="width: 18rem;">    
    <div class="cardbody">
      <h5 class="card-title">${item.name}</h5>
      <p class="cardtext">${item.description}</p>
      <a href="#" class="btn btn-primary play">play</a>
      <a href="#" class="btn btn-primary edit">Edit</a>
      <a href="#" class="btn btn-danger delete">Delete</a>
    </div>
  </div>`  
  cardbody = document.querySelector('.cardbody')
})
 deletebtn = document.querySelectorAll('.delete')
let deletearr = Array.from(deletebtn)
deletearr.map((item,index) =>{
    item.addEventListener('click',function(){
        allpost.innerHTML = ''
        arr.splice(index,1)
        display()
    })
})
 edit = document.querySelectorAll('.edit')
let editarr = Array.from(edit)
editarr.map((item,index)=>{   
        item.addEventListener('click',function(){
        updateIndex = index 
        name.value = arr[index].name
        caption.value = arr[index].description
        button.style.display = 'none'
        update.style.display = 'inline-block'
    })
})
let playbtn = document.querySelectorAll('.play')
let playarr= Array.from(playbtn)
playarr.map((item,index)=>{
    item.addEventListener('click',function(){    
        allpost.innerHTML = ''
    cardbody.style.display = 'none'
        
        // console.log(arr[index].description)
    // editarr[index].style.display = 'none'
    // deletearr[index].style.display = 'none'
    
       display()
       
    })
})

}







