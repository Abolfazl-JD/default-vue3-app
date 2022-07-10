<script setup lang="ts">

const showResponsiveMenu = ref(false)

const { t } = useI18n()
</script>

<template>
    <header>
        <nav class="relative flex flex-wrap w-full items-center bg-light-500 pt-4 px-5 dark:bg-dark-500">
            <div class="w-full pb-2 flex justify-between items-center">
                <div class="flex gap-16">
                    <h1 class="text-2xl sm:text-4xl font-semibold dark:text-light-300">
                        {{ t("header.logo") }}
                    </h1>
                    <ul class="hidden pt-2 font-medium md:(flex gap-6 items-center)">
                        <li>
                            <a class="header-link">
                                {{ t("header.links.link1") }}
                            </a>
                        </li>
                        <li>
                            <a class="header-link">
                                {{ t("header.links.link2") }}
                            </a>
                        </li>
                        <li>
                            <a class="header-link">
                                {{ t("header.links.link3") }}
                            </a>
                        </li>
                        <li>
                            <a class="header-link">
                                {{ t("header.links.link4") }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-4 pt-1">
                    <HeaderThemeChanger />
                    <HeaderLocaleChanger />
                    <button class="md:hidden">
                        <transition 
                            name="list-icon"  
                            mode="out-in"
                        >
                            <svg 
                                @click="showResponsiveMenu = true"
                                v-if="!showResponsiveMenu"
                                xmlns="http://www.w3.org/2000/svg" 
                                class="sm:(h-8 w-8) w-7 h-7 dark:text-light-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                v-else
                                @click="showResponsiveMenu = false"
                                xmlns="http://www.w3.org/2000/svg" 
                                class="sm:(h-8 w-8) w-7 h-7 dark:text-light-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </transition>
                    </button>
                </div>
            </div>
            <div 
                class="text-gray-700 transition-all overflow-hidden ease-out duration-300 w-full rounded-b border-solid border-gray-500 mt-3 md:(h-0 border-0)"
                :class="showResponsiveMenu ? 'h-162px border-t' : 'h-0 border-none'"
            >
                <ul class="divide-y-1 divide-gray-300 dark:divide-gray-700">
                    <li class="resposive-menu-item">
                        <a>{{ t("header.links.link1") }}</a>
                    </li>
                    <li class="resposive-menu-item">
                        <a>{{ t("header.links.link2") }}</a>
                    </li>
                    <li class="resposive-menu-item">
                        <a>{{ t("header.links.link3") }}</a>
                    </li>
                    <li class="resposive-menu-item">
                        <a>{{ t("header.links.link4") }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>

.dark .header-link {
    color : rgb(226, 226, 226);
}
.header-link {
    padding-bottom: 3px;
    cursor: pointer;
}

.header-link:before, .header-link:after {
  content: '';
  position: absolute;
  transition: transform .5s ease;
}
.header-link:before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
  background: rgb(52, 52, 52);
  transform: scaleX(0);
}

.dark .header-link:before {
  background: rgb(222, 222, 222);
}
.header-link:hover:before {
  transform: scaleX(1);
}

.dark .resposive-menu-item {
    color: rgb(219, 216, 216);
}
.resposive-menu-item {
    padding: 8px 0 8px 8px;
    cursor: pointer;
}

</style>