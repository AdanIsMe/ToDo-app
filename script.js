const inputBox = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

/*saving the to-do list we made (in order to not lose the list when refreshing the page)*/
function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}


// Execute addTask when the user presses Enter on the keyboard
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });


function addTask()
{
    if(inputBox.value != '')
    {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = inputBox.value;
        span.innerHTML = "\u00d7"; /*multiplication sign*/

        listContainer.appendChild(li);    
        li.appendChild(span); /*so that the task and x are added in the same line*/

        inputBox.value = '';
        saveData();
    }
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI")
    {
        /*the task has been clicked => check the task*/
        e.target.classList.toggle("checked");
        saveData();
    }
    else
    {
        /*the x has been clicked => remove the task*/
        if(e.target.tagName == "SPAN")
        {
            e.target.parentElement.remove();
            saveData();
        }
    }
    },false);


/*displaying the saved data in our webpage*/
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();