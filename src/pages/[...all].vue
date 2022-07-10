<script setup lang="ts">

const head = reactive({
    title: "page not found",
    meta: [
        {
            name: "description",
            content : "404 page"
        }
    ]
})

useHead(head)
</script>

<template>
    <div>
        <h1>The page you are looking for has not found</h1>
        <router-link to="/">Back to homepage</router-link>
    </div>
</template>

<route>
    {
        "meta" : {
            "layout" : "404"
        }
    }
</route>