#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.magenta("\nWelcome to the Todo-List App\n"));

let todoList: string [] = [];
let conditions = true;

let main = async () =>{
    while(conditions){

let option = await inquirer.prompt([

    {
        name: "choice",
        type: "list",
        message: chalk.yellow("\nSelect an option :"),
        choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
    }
]);
if(option.choice === "Add Task"){
    await addTask()
}
else if (option.choice === "Delete Task"){
    await deleteTask()

}
else if(option.choice === "Update Task"){
    await updateTask()
}
else if (option.choice === "View Todo-List"){
    await viewTask()
}
else if (option.choice === "Exit"){
    conditions = false;
    console.log(chalk.magenta("\nThank you for using this app\n"));
    
}
}
}

//function to add new task to the list
let addTask  = async () =>{

 let newTask = await inquirer.prompt([

    {
        name: "task",
        type: "input",
        message: chalk.yellow("\nEnter your new task:"),
        
    }
]);
todoList.push(newTask.task);
console.log(chalk.green(`\n ${newTask.task} task added successfully in Todo-List\n`));
}

//function to view all todo-List Task

let viewTask = () =>{
    console.log(chalk.magenta(`\n your Todo-List: \n`));
    todoList.forEach((task, index) =>{
        console.log(`${index + 1}: ${task}`);
        
    })
    
}

// function to delet a task from the list
let deleteTask = async () =>{
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellow("\nEnter the 'index no.' of the task you want to delete:")
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.green(`\n${deletedTask} this task has been deleted successfully from your todo-List\n`));
    

}

//function to update a task 
let updateTask = async () =>{
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellow("\nEnter the 'index no' of the task you want to update:")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.yellow("\nEnter new task name:"),
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(chalk.green(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For updated list Check option:"View Todo-List"]\n`));
    

}

main();

