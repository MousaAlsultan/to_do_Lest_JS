function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  
  const tasks = [];
  
  function addTask() {
    const description = prompt('Enter task description:');
    const dueDate = prompt('Enter due date:');
    const priority = prompt('Enter priority level:');
    const task = new Task(description, dueDate, priority);
    tasks.push(task);
    
    console.log('Task added successfully!');
  }
  
  function listTasks() {
    console.log('All tasks:');
    tasks.forEach((task, index) => {
      console.log(`Task ${index + 1}:`);
      console.log(`Description: ${task.description}`);
      console.log(`Due Date: ${task.dueDate}`);
      console.log(`Priority: ${task.priority}`);
      console.log(`Completed: ${task.completed ? 'Yes' : 'No'}`);
      console.log('------------------------');
    });
  }
  
  function listCompletedTasks() {
    console.log('Completed tasks:');
    const completedTasks = tasks.filter((task) => task.completed);
    completedTasks.forEach((task, index) => {
      console.log(`Task ${index + 1}: ${task.description}`);
    });
  }
  
  function markTaskAsDone() {
    const taskNumber = prompt('Enter the task number to mark as done:');
    const index = taskNumber - 1;
  
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Task marked as done successfully!');
    } else {
      console.log('Invalid task number.');
    }
  }
  
  function deleteTask() {
    const taskNumber = prompt('Enter the task number to delete:');
    const index = taskNumber - 1;
  
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Task deleted successfully!');
    } else {
      console.log('Invalid task number.');
    }
  }
  
  function sortByDueDate() {
    tasks.sort((task1, task2) => new Date(task1.dueDate) - new Date(task2.dueDate));
    console.log('Tasks sorted by due date.');
  }
  
  function sortByPriority() {
    tasks.sort((task1, task2) => task1.priority - task2.priority);
    console.log('Tasks sorted by priority.');
  }
  
  function clearAllTasks() {
    tasks.length = 0;
    console.log('All tasks cleared!');
  }
  
  function showMenu() {
    console.log('***************************');
    console.log('Welcome to JS TODO-APP');
    console.log('***************************');
    console.log('Select an action:');
    console.log('1) Add a new task');
    console.log('2) List all tasks');
    console.log('3) List completed tasks');
    console.log('4) Mark the task as done');
    console.log('5) Delete a task');
    console.log('6) Sort tasks by the due date');
    console.log('7) Sort tasks by priority');
    console.log('8) Clear all tasks');
    console.log('***************************');
  
    const choice = prompt("What's your choice?");
    console.clear();
  
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        listTasks();
        break;
      case '3':
        listCompletedTasks();
        break;
      case '4':
        markTaskAsDone();
        break;
      case '5':
        deleteTask();
        break;
      case '6':
        sortByDueDate();
        break;
      case '7':
        sortByPriority();
        break;
      case '8':
        clearAllTasks();
        break;
      default:
        console.log('Invalid choice. Please try again.');
    }
  
    showMenu();
  }
  
  showMenu();
  