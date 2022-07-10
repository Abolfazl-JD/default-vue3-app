<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: computed(() => t("homePage.title")),
    meta: [
        {
            name: "description",
            content : computed(() => t('homePage.desc'))
        }
    ]
})
</script>

<template>
    <div class="home mt-20">
        <h2 class="text-3xl dark:text-white">
            {{ $t("homePage.title") }}
        </h2>
        <RouterLink to="/user" class="underline text-blue-500">
            {{ $t("header.links.user-link") }}
        </RouterLink>
    </div>
</template>