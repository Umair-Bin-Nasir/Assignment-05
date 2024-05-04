interface Todo {
    task: string;
    completed: boolean;
}
const todoList: Todo[] = [
    { task: "Buy groceries", completed: false },
    { task: "Finish homework", completed: true },
    { task: "Go for a run", completed: false },
    { task: "Call mom", completed: false }
];
function logIncompleteTasks(todoList: Todo[]): void {
    console.log("Incomplete Tasks:");
    todoList.forEach(todo => {
        if (!todo.completed) {
            console.log(todo.task);
        }
    });
}
logIncompleteTasks(todoList);