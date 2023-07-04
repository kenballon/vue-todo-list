<template>
    <nav class="d-flex align-items-center ">
        <div class="link-wrapper m-auto-left">
            <RouterLink :to="{ name: 'home' }">Task</RouterLink>
            <RouterLink :to="{ name: 'AddTask' }">Add New Task</RouterLink>
        </div>
    </nav>
</template>
<script setup>

</script>
<style>
nav {
    width: 100%;
    height: 90px;
}

nav a {
    padding: .5rem 1rem;
    color: #00591b;
    margin: 4px;
    font-weight: 500;

    &:hover {
        color: #06cc42;
    }
}
</style>