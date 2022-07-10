<script setup lang="ts">

const { t } = useI18n()

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
    <div class="home mt-20">
        <h2 class="text-3xl">
            {{ t("HomePage.title") }}
        </h2>
        <RouterLink to="/user" class="underline text-blue-500">
            {{ t("header.links.user-link") }}
        </RouterLink>
    </div>
</template>