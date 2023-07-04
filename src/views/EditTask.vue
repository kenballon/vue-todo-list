<template>
    <div class="form-wrapper">
        <h1>Edit Task</h1>
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
                <!-- <router-link :to="{ name: 'EditTask', params: { id: dataTaskItem.id } }"> -->
                <button class="submit-btn" @click="handleUpdate()">Update</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const data = ref({
    title: '',
    details: ''
})

const props = defineProps(['id'])
const uriLink = "http://localhost:3000/task/" + props.id


onMounted(async () => {
    try {
        const response = await fetch(uriLink)
        if (!response.ok) {
            throw new Error('Unable to fetch data.')
        }

        const taskData = await response.json()
        data.value.title = taskData.title
        data.value.details = taskData.details

    } catch (error) {
        console.log(error);
    }
})

const handleUpdate = async () => {
    try {
        const response = await fetch(uriLink, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data.value.title,
                details: data.value.details,
            })
        })

        if (!response.ok) {
            throw new Error('Unable to fetch data.')
        }

        console.log(`%c Task has been "UPDATED".`, `background-color:#CBFFA9; color:#333; padding: 4px 8px;border-radius:40px;`)

        // Add route navigation to the homepage
        router.push('/');

    } catch (error) {
        console.log(error);
    }
}

</script>

<style lang="">
    
</style>