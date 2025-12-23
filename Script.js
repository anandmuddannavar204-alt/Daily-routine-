function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.textContent = task;
    span.style.cursor = "pointer";

    // Mark as done when tapped
    span.onclick = function () {
        if (this.style.textDecoration === "line-through") {
            this.style.textDecoration = "none";
        } else {
            this.style.textDecoration = "line-through";
        }
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append span and button to li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add li to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Toggle Dark Mode
function toggleDark() {
    let body = document.body;
    let container = document.querySelector(".container");
    let buttons = document.querySelectorAll("button");
    let inputs = document.querySelectorAll("input");

    // Body background
    if (body.style.backgroundColor === "rgb(18, 18, 18)") {
        body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
        body.style.color = "black";
    } else {
        body.style.background = "#121212";
        body.style.color = "white";
    }

    // Container background
    if (container.style.backgroundColor === "rgb(30, 30, 30)") {
        container.style.background = "white";
    } else {
        container.style.background = "#1e1e1e";
    }

    // Buttons
    buttons.forEach(btn => {
        if (btn.style.background === "rgb(51, 51, 51)") {
            btn.style.background = "#667eea";
            btn.style.color = "white";
        } else {
            btn.style.background = "#333";
            btn.style.color = "white";
        }
    });

    // Input fields
    inputs.forEach(input => {
        if (input.style.background === "rgb(51, 51, 51)") {
            input.style.background = "white";
            input.style.color = "black";
        } else {
            input.style.background = "#333";
            input.style.color = "white";
        }
    });
}
