<script setup lang="ts">

const { t } = useI18n()

useHead({
    title : "User page"
})
</script>

<template>
    <div  class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <h1 class="dark:text-white text-2xl">
            {{ t("userPage") }}
        </h1>
        <router-link to="/" class="underline text-blue-500" title="'homepage'">{{ t("homeLink") }}</router-link>
    </div>
</template>

<route>
    {
        "meta" : {
            "layout": "users"
        }
    }
</route>