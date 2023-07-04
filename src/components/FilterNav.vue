<template>
    <nav class="filter-navigation d-flex align-items-center">
        <div class="button-wrapper m-auto-left">
            <button @click="updateFilter('all')" :class="{ active: props.currentFilter === 'all' }">View All</button>
            <button @click="updateFilter('completed')"
                :class="{ active: props.currentFilter === 'completed' }">Completed</button>
            <button @click="updateFilter('inProgress')" :class="{ active: props.currentFilter === 'inProgress' }">In
                Progress</button>
        </div>
    </nav>
</template>

<script setup>
const emit = defineEmits(['filterChangeEvent'])

const props = defineProps(['currentFilter'])

const updateFilter = (filterEvent) => {
    emit('filterChangeEvent', filterEvent)
}
</script>
<style>
.filter-navigation {
    height: 100%;
}

.button-wrapper button {
    padding: .5rem 1rem;
    color: #00591b;
    margin: 4px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Satoshi', sans-serif;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    border: 0;
    background-color: transparent;
    border-radius: 40px;
    padding-inline: 1rem;
    transition: background-color .3s ease;

    &:hover {
        color: #00d740;
        background-color: #00591b;
        border-radius: 40px;
    }
}

.button-wrapper button.active {
    color: #00d740;
    background-color: #00591b;
}
</style>