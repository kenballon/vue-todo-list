<template>
    <div class="task-item d-grid grid-col-2">
        <div class="task-heading d-flex align-items-center ">
            <div class="heading-and-details" :class="{ 'marked-completed': dataTaskItem.complete }">
                <h2> {{ dataTaskItem.title }}</h2>
                <div class="details">
                    <p> {{ dataTaskItem.details }}</p>
                </div>
            </div>
        </div>
        <div class="icons d-flex align-items-center">
            <div class="icon-wrapper m-auto-left">
                <router-link :to="{ name: 'EditTask', params: { id: dataTaskItem.id } }">
                    <span class="material-symbols-outlined" @click="editTask">edit</span>
                </router-link>
                <span v-if="dataTaskItem.complete" class="material-symbols-outlined"
                    @click="deleteTask(dataTaskItem.id, dataTaskItem.title)">delete</span>
                <span class="material-symbols-outlined" @click="toggleComplete(dataTaskItem.id, dataTaskItem.complete)"
                    :class="{ 'marked-completed': dataTaskItem.complete }">done</span>
            </div>
        </div>
    </div>
</template>

<script setup>

const dataTaskItem = defineProps({
    id: { type: Number },
    title: { type: String },
    details: { type: String },
    complete: { type: Boolean },
});

const uriLink = "http://localhost:3000/task/"

const emit = defineEmits(['delete', 'complete'])


const toggleComplete = async (taskID, taskCompleted) => {
    try {
        await fetch(uriLink + taskID, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ complete: !taskCompleted })
        }).then(() => {
            emit('complete', taskID)

            if (taskCompleted === false) {
                console.log(`%c Task marked as "COMPLETED" task.`, `background-color:#CBFFA9; color:#333; padding: 4px 8px;border-radius:40px;`)
            } else {
                console.log(`%c Task marked as "NOT COMPLETED" task.`, `background-color:#CBFFA9; color:#333; padding: 4px 8px;border-radius:40px;`)
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const deleteTask = async (taskID, taskTitle) => {
    try {
        await fetch(uriLink + taskID, { method: 'DELETE' })
            .then(() => {
                emit('delete', taskID)
            })
        console.log(`%c Successfully deleted "${taskTitle}" task.`, `background-color:#CBFFA9; color:#333; padding: 4px 8px;border-radius:40px;`)
    } catch (err) {
        console.log(err);
    }
}


</script>

<style>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

ul li {
    width: 100%;
    max-width: 700px;
    background-color: white;
    margin-block: 2rem;
    padding: 2.5rem 2rem;
    border-radius: 0.5rem;
    border-left: 4px solid #ff0080;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &:hover {
        background-color: #fff3f9;
    }
}

.task-item {
    grid-template-columns: minmax(200px, 450px) max-content;
}

.task-heading {
    & h2 {
        font-size: 1.25rem;
        color: #5b012e;
    }
}

.icons span.material-symbols-outlined {
    cursor: pointer;
    margin-inline: .25rem;
    color: #b16e90;
}

.icons span:hover {
    color: #ff0080;
}

.heading-and-details.marked-completed h2 {
    background-color: #00a331;
    color: white;
    padding: 4px 8px;
    font-weight: normal;
    text-decoration: line-through;
}

li:has(.heading-and-details.marked-completed) {
    border-left: 4px solid #00a331;
}

.material-symbols-outlined.marked-completed {
    color: #00a331 !important;
}
</style>