let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let button = document.querySelector(".button")
let allpost = document.querySelector(".allpost")

let arr = []


button.addEventListener("click", function(){
    allpost.innerHTML = ""
    arr.push({
        name : name.value,
        description : caption.value
    })
    name.value = ""
    caption.value = ""
    display()
    
})       
       
function display(){
    arr.map((iteam)=>{
        allpost.innerHTML += `<div class="card" style="width: 18rem;">
            
        <div class="card-body">
          <h5 class="card-title">${iteam.name}</h5>
          <p class="card-text">${iteam.description}</p>
          <button  class="btn btn-primary ">edit</button>
          <button  class="btn btn-danger dltbtn">delete</button>
        </div>
      </div> `
     })

     let dltbtn = document.querySelectorAll(".dltbtn")
     let dltarr = Array.from(dltbtn)
     
     dltarr.map((iteam,index)=>{
        iteam.addEventListener("click", function(){
            allpost.innerHTML = ""
            arr.splice(index,1)
           
            display()
        })
     })

}