<script setup lang="ts">
useHead({
    title : "User page"
})
</script>

<template>
    <div class="user">
        <h1>
            this is the user page
        </h1>
        <router-link to="/" :title="'homepage'">back to home page</router-link>
        <UserHello />
    </div>
</template>

<route>
    {
        "meta" : {
            "layout": "users"
        }
    }
</route>