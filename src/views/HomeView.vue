<template>
  <main class="d-flex align-items-center flex-dir-col">
    <div class="heading-text-container">
      <h1>Your Task to Complete Today</h1>
      <h2 style="text-align: center;">{{ printDate() }}</h2>
    </div>
    <div class="data" v-if="data.length">
      <FilterNav @filterChangeEvent="currentFilterStatus = $event" :currentFilter="currentFilterStatus" />
      <ul>
        <li v-for="item in filterTask" :key="item.id" :id="item.id">
          <SingleTaskComponent :title="item.title" :details="item.details" :id="item.id" :complete="item.complete"
            @delete="handleDelete" @complete="handleComplete" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import SingleTaskComponent from '../components/SingleTaskComponent.vue'
import FilterNav from '../components/FilterNav.vue'

const data = ref([]);
const currentFilterStatus = ref('all')

onMounted(async () => {
  try {
    const servRes = await fetch('http://localhost:3000/task')

    if (!servRes.ok) {
      throw new Error('Server did not respond. Request Failed! \n Please check the url as this might help you.')
    }

    const items = await servRes.json();
    data.value = items.sort((a, b) => b.id - a.id);
  } catch (err) {
    console.log(err)
  }
})

const handleDelete = (id) => {
  data.value = data.value.filter(task => {
    return task.id !== id
  })
}

const handleComplete = (id) => {
  let task = data.value.find(task => {
    return task.id === id
  })
  task.complete = !task.complete
}

function printDate() {
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = today.toLocaleDateString("en-US", options);

  return date;
}

// Watch for changes to the data
watchEffect(() => {
  data.value = data.value.sort((a, b) => b.id - a.id);
});

const filterTask = computed(() => {
  if (currentFilterStatus.value === 'completed') {
    return data.value.filter(task => task.complete)
  }
  if (currentFilterStatus.value === 'inProgress') {
    return data.value.filter(task => !task.complete)
  }
  return data.value;
})
</script>


<style scoped>
main h1 {
  font-size: 48px;
}

main {
  padding-top: 5rem;
}
</style>