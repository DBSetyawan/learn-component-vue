<template>
    <div>
        <div class="uk-flex-center">
            <div class="task-header">
                <h3 class="uk-card-title">New {{ getColumnTitle }}</h3>
                <div class="uk-margin">
                    <input class="uk-input uk-form-width-medium uk-form-small" type="text" v-model="title" placeholde="Add Task">
                    </input>
                </div>
                <button class="uk-button uk-button-secodary uk-button-small" @click="saveTaskComponent(title)">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import {store} from '../store.js';
export default {
    name: 'AddTask',
    data(){
        return {
            title : ''
        }
    },
    computed: {
        getColumnTitle(){
            return store.GetActiveColumn().name;
        }
    },
    methods: {
        saveTaskComponent(TitleTask){
            store.AddTask(TitleTask);
        }
    }
}
</script>