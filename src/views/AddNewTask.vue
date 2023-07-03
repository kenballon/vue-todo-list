<template >
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="task-heading">Task:</label>
                <input type="text" name="task-heading" id="task-heading" v-model="data.title" required>
            </div>
            <div class="form-group">
                <label for="task-details">Details:</label>
                <textarea name="task-details" id="task-details" v-model="data.details"></textarea>
            </div>
            <div class="form-group">
                <button>Add Task</button>
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
<style></style>