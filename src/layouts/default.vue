<script setup lang="ts">

const { t } = useI18n()
</script>

<template>
  <div class="app-container w-full text-center">
    <HeaderNav />
    <RouterView />
    <p class="text-red-500 mt-10">
      {{ t("defaultLayout") }}
    </p>
  </div>
</template>