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
import { useRouter } from 'vue-router';

const uriLink = "http://localhost:3000/task/";
const router = useRouter(); // Create a router instance

const data = ref({
    title: '',
    details: ''
})

const handleSubmit = () => {
    fetch(uriLink, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: data.value.title,
            details: data.value.details,
            complete: false
        })
    }).then(() => {
        //route to home
        router.push('/');
    }).catch(err => console.log(err))
}

</script>
<style></style>