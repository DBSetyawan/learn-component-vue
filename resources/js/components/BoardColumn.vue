<template>
    <div>
        <div class="uk-card uk-card-default uk-card-body" id="todo-col" style="cursor:pointer" @click="SetActivitiyTask(col.id)">
            <h3> {{ col.name }}</h3>
            <Task v-for="task in col.tasks" :key="task.id" :task="task" :ColID="col.id" />    
        </div>
    </div>
</template>
<script>
import Task from "../components/Task";
import {store} from '../store.js';
export default {
    name: 'BoardColumn',
    props: ['col'],
    components : {
        Task
    },
    methods:{
        SetActivitiyTask(id){
            store.SetActiveColumn(id)
        }
    }
}
</script>