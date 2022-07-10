<template>
  <div class="w-full text-center">
    <RouterView />
    <p class="text-red-500 mt-10">
      {{ $t("defaultLayout") }}
    </p>
  </div>
</template>