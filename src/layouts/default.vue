<script setup lang="ts">

const { locale } = useI18n()
const pageDirection = computed<"ltr" | "rtl">(() => locale.value === "en" ? "ltr" : "rtl")
</script>

<template>
  <div class="app-container w-full text-center" :dir="pageDirection">
    <HeaderNav />
    <RouterView />
    <p class="text-red-500 mt-10">
      {{ $t("defaultLayout") }}
    </p>
  </div>
</template>