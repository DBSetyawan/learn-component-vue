<template>
    <div>
        <div class="has-text-centered icons">
            <div class="uk-alert-default" uk-alert>
                <p>{{ task.title }}</p>
            </div>
            <template v-if="task.edit">
                <input type="text" class="uk-input" :placeholder="task.title" v-model="newTitle"/>
            <button class="ul-button-primary uk-small uk-button" style="margin-top:5px;" @click="updateTaskMS(ColID, task.id, newTitle)">
                Simpan
            </button>
            </template>
            <template v-else>
            <button class="uk-button uk-button-primary uk-button-small" @click="editTaskhere(ColID, task.id)">
                Ubah    
            </button>
            <span style="margin:2px">
            </span>
                <button class="uk-button uk-button-danger uk-button-small" @click="deleteTasks(ColID, task.id)">
                    Hapus
                </button>
            </template>
        </div>
    </div>
</template>
<script>
import {store} from '../store.js'
export default {
    name: 'Task',
    props:['task','ColID'],
    data(){
        return {
            newTitle : ''
        }
    },
    methods : {
        editTaskhere(colID, TaskID){
            store.editTask(colID, TaskID)
        },
        updateTaskMS(colID, TaskID, TaskTitle){
            store.updateTask(colID, TaskID, TaskTitle);
        },
        deleteTasks(colID, TaskID){
            store.deleteTask(colID, TaskID);
        }
    }
}
</script>