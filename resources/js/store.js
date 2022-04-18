import { seed } from './seed.js';

export const store = {
    state :  {
        seed
    },
    SetActiveColumn(idColumn){
        this.state.seed.map(
            col => col.id == idColumn ? (col.active = true) : (col.active = false) 
        );
    },
    GetActiveColumn(){
        return this.state.seed.find(
            col => col.active === true
        );
    },
    AddTask(TaskTitle){
        const tasks = this.GetActiveColumn().tasks;
        tasks.push({id: tasks.length + 1, title: TaskTitle, edit:false });
    },
    editTask(ColumnId, TaskID){
        const index = this.state.seed.findIndex(
            col => col.id === ColumnId
        );
        const tasks = this.state.seed[index].tasks;
        const tasksIndex = tasks.findIndex(
            task => task.id === TaskID
        );

        tasks[tasksIndex].edit = true;

        tasks.map(
            task => (tasks.id === TaskID ? (task.edit = true) : (task.edit = false))
        );
    },
    updateTask(colID, TaskID, TaskTitle){
        const col = this.state.seed.find(col => col.id === colID);
        const taskIndex = this.state.seed.findIndex(task => task.id === TaskID);
        col.tasks[taskIndex].title = TaskTitle;
        col.tasks[taskIndex].edit = false;
    },
    deleteTask(colID, TaskID){
        const col = this.state.seed.find(col => col.id === colID);
        const taskIndex = this.state.seed.findIndex(task => task.id === TaskID);

        col.tasks.splice(taskIndex, 1);
    }
}