<script setup lang="ts">

const { t } = useI18n()

const head = reactive({
    title: computed(() => t("404page.title")),
    meta: [
        {
            name: "description",
            content : computed(() => t("404page.desc"))
        }
    ]
})

useHead(head)
</script>

<template>
    <div>
        <h1 class="text-2xl dark:text-gray-200">
            {{ t("notFound") }}
        </h1>
    </div>
</template>

<route>
    {
        "meta" : {
            "layout" : "404"
        }
    }
</route>