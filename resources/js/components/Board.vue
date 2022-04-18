<template>
    <div>
        <h3 aling="center" class="uk-heading-divider">Kanban Boards</h3>
        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
            <!-- <BoardColumn name="Todo"/>
            <BoardColumn name="InProgress"/>
            <BoardColumn name="Done"/> -->
            <BoardColumn v-for="col in SharedState" :key="col.id" :col="col" /> 
        </div> 
    </div>
</template>

<script>
import BoardColumn from "../components/BoardColumn";
import {store} from '../store.js';
export default {
    name: 'Board',
    data() {
        return {
            SharedState : store.state.seed
        }
    },
    components:{
        BoardColumn
    }
}
</script>