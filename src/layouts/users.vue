<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <HeaderNav />
    <RouterView />
    <p class="mt-5 mx-auto text-center text-sm  text-red-500">
      ***************[ {{ t("usersLayout") }} ]****************
    </p>
  </div>
</template>

