const inputBox = document.getElementById("input")
const listContainer = document.getElementById("list")

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter your task')
    }
    else{
        let link = document.createElement("li")
        link.innerHTML = inputBox.value
        listContainer.appendChild(link)
        let add = document.createElement("span")
        add.innerHTML = "\u00d7"
        link.appendChild(add)
        saveData()
        }
    inputBox.value = ''
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle('checked');
        saveData()    
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML =localStorage.getItem("data")
    
}
showData()