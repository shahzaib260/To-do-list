const inputBtn = document.getElementById("search")
const listContainer = document.getElementById("list-container")


function addTask() {
  if(inputBtn.value === ""){
    alert(" Please Enter Something! ")
  }else{
    let li = document.createElement("li")
    li.innerHTML = inputBtn.value;
    

    let span = document.createElement("span")
    span.innerHTML = "\u00d7"


    li.appendChild(span)
    listContainer.appendChild(li)
    
  }
  inputBtn.value = ""

  saveData();
  
  
    
}


listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
        
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData();

inputBtn.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask()
    }
})