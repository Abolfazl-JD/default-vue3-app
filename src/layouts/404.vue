<template>
    <div class="error-layout w-full mt-20 text-center">
        <RouterView />
        <h1 class="text-3xl mt-10 dark:text-gray-200">
            {{ $t("tryAnother") }}
        </h1>
        <span class="text-red-500 block">
            {{ $t("errorLayout") }}
        </span>
        <router-link 
            to="/" 
            class="underline text-blue-500" 
            title="'homepage'"
        >
            {{ $t("homeLink") }}
        </router-link>
    </div>
</template>