<template>
    <div class="error-layout">
        <RouterView />
        <h1 class="text-3xl dark:text-gray-200">
            {{ $t("tryAnother") }}
        </h1>
        <span class="text-red-500">{{ $t("errorLayout") }}</span>
        <router-link to="/" class="underline text-blue-500" title="'homepage'">{{ $t("homeLink") }}</router-link>
    </div>
</template>