<template >
    <div class="form-wrapper">
        <h1>Add New Task</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="task-heading">Task:</label>
                <input type="text" name="task-heading" id="task-heading" v-model="data.title" required>
            </div>
            <div class="form-group">
                <label for="task-details">Details:</label>
                <textarea name="task-details" id="task-details" v-model="data.details"></textarea>
            </div>
            <div class="form-group d-flex align-items-center">
                <button class="submit-btn">Add Task</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const data = ref({
    title: '',
    details: ''
})

const handleSubmit = () => {
    console.log(`Task: ${data.value.title} \n Details: ${data.value.details}`);
}
</script>
<style>
.form-wrapper {
    max-width: 700px;
    margin-inline: auto;
    margin-block: 4rem;
    background-color: white;
    padding: 3rem;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.form-wrapper .form-group {
    margin-bottom: 1.5rem;
}

.form-wrapper .form-group label,
.form-wrapper .form-group input,
.form-wrapper .form-group textarea {
    display: block;
    width: 100%;
}

.form-wrapper .form-group {

    & input,
    & textarea {
        padding: .5rem 1rem;
        font-family: 'Satoshi', sans-serif;
    }

    .submit-btn {
        margin-left: auto;
        font-family: 'Satoshi', sans-serif;
        border: 1px solid transparent;
        padding: .5rem 1rem;
        background-color: #00591b;
        color: white;
        transition: color .3s ease;
        cursor: pointer;

        &:hover {
            background-color: #00a331;
        }
    }

}

.form-wrapper .form-group textarea {
    min-height: 250px;
}
</style>