<script setup lang="ts">

const { locale } = useI18n()
const pageDirection = computed<"ltr" | "rtl">(() => locale.value === "en" ? "ltr" : "rtl")
</script>

<template>
  <div class="app-container" :dir="pageDirection">
    <HeaderNav />
    <RouterView />
  </div>
</template>