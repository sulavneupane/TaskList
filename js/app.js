/**
 * Created by Sulav on 11/20/16.
 */

function createArray() {
    var taskArray = [];
    var tasks = localStorage.getItem('itemList');
    if(tasks != null){
        taskArray = JSON.parse(tasks);
    }
    return taskArray;
}

function addTask() {
    var taskList = createArray();
    var task = document.getElementById("taskValue").value;
    document.getElementById("taskValue").value = "";
    taskList.push(task);
    localStorage.setItem('itemList', JSON.stringify(taskList));
    displayTask();
}

function removeTask() {
    var rID = this.getAttribute("id");
    var taskList = createArray();
    if(confirm("Are you sure, you want to remove the task \"" + taskList[rID] + "\"?")) {
        taskList.splice(rID, 1);
        localStorage.setItem('itemList', JSON.stringify(taskList));
        displayTask();
    }
}

function displayTask() {
    var taskList = createArray();
    var showTasks = "<ul>";

    for(var i = 0; i < taskList.length; i++){
        showTasks += "<li>" + taskList[i] + "<button class='rmvBtn' id='" + i + "'>Remove</button></li>";
    }

    showTasks += "</ul>";

    document.getElementById("content").innerHTML = showTasks;

    var btnArray = document.getElementsByClassName("rmvBtn");
    for(i = 0; i < btnArray.length; i++) {
        btnArray[i].addEventListener('click', removeTask);
    }
}

displayTask();