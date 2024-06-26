const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container") 
// inputBox.addEventListener("keydown", e=> e.key === "Enter")
 
// document.getElementById("input-box").addEventListener("keydown", e=> e.key === "Enter" && alert(e.target.value));

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();  // Call the addTask function when Enter is pressed
        e.preventDefault(); // Prevent the default action to avoid form submission
    }
});


function addTask(){
   if (inputBox.value === ''){
        alert("You must write something!");
   } 
   else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
   }
   inputBox.value = '';
   saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();