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
        <h1 class="text-2xl dark:text-gray-200">
            {{ $t("notFound") }}
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