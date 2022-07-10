<script setup lang="ts">

const pageTitle = ref("Home page")

useHead({
    title: computed(() => pageTitle.value),
    meta: [
        {
            name: "description",
            content : "here is the discription"
        }
    ]
})
</script>

<template>
    <div class="home">
        <h1>this is the home page</h1>
        <RouterLink to="/user">user page</RouterLink>
    </div>
</template>