"use strict";
const todoList = [
    { task: "Buy groceries", completed: false },
    { task: "Finish homework", completed: true },
    { task: "Go for a run", completed: false },
    { task: "Call mom", completed: false }
];
function logIncompleteTasks(todoList) {
    console.log("Incomplete Tasks:");
    todoList.forEach(todo => {
        if (!todo.completed) {
            console.log(todo.task);
        }
    });
}
logIncompleteTasks(todoList);
