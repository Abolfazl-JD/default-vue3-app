<script setup lang="ts">

const { locale, t } = useI18n({
    useScope: 'global',
})

const showLanguageSwitcher = ref(false)
const toggleLocaleLang = (lang : 'en' | 'fa') => {
    locale.value = lang
    showLanguageSwitcher.value = false
}
</script>

<template>
    <div class="relative">
        <button
            title="change title" 
            @click="showLanguageSwitcher = !showLanguageSwitcher" 
            class="w-14 px-1 sm:(w-18 px-2) py-1 rounded-b-sm rounded-t flex items-center justify-between bg-transparent border-2 border-solid border-gray-700 hover:bg-gray-300 transition ease duration-300 dark:(border-light-300 hover:bg-dark-200)"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="sm:(h-6 w-6) w-5 h-5 text-gray-700 dark:text-light-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                stroke-width="2"
            >
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
            </svg>
            <transition 
                name="list-icon"  
                mode="out-in"
            >
                <svg 
                    v-if="!showLanguageSwitcher" 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="sm:(h-6 w-6) w-5 h-5 text-gray-700 dark:text-light-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path 
                        fill-rule="evenodd" 
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                        clip-rule="evenodd"
                    />
                </svg>
                <svg 
                    v-else 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="sm:(h-6 w-6) w-5 h-5 text-gray-700 dark:text-light-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path 
                        fill-rule="evenodd" 
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
                        clip-rule="evenodd" 
                    />
                </svg>
            </transition>
        </button>

        <ul 
            class="text-gray-700 transition-all  overflow-hidden ease-out duration-300 w-14 sm:w-18 absolute z-10 rounded-b divide-y-2 divide-gray-400 border-2 border-t-0 border-solid border-gray-500 top bg-gray-100 dark:(bg-dark-900 text-light-300 border-light-500)"
            :class="showLanguageSwitcher ? 'h-65px' : 'h-0 border-none'"
        >
            <li 
                class="locale-list-item hover:bg-gray-200 dark:hover:bg-gray-800 py-2" 
                @click="toggleLocaleLang('en')"
            >
                <span class="text-xs font-bold sm:(font-medium text-size-15px)">
                    {{ t('en') }}
                </span>
                <svg 
                    v-show="locale === 'en'" 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-3 w-3" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path 
                        fill-rule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clip-rule="evenodd" 
                    />
                </svg>
            </li>
            <li 
                class="locale-list-item py-1 hover:bg-gray-200 dark:hover:bg-gray-800 py-2"  
                @click="toggleLocaleLang('fa')"
            >
                <span class="text-xs font-bold sm:(font-medium text-size-15px)">
                    {{ t('fa') }}
                </span>
                <svg 
                    v-show="locale === 'fa'" 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-3 w-3 absolute left-1px" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path 
                        fill-rule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clip-rule="evenodd" 
                    />
                </svg>
            </li>
        </ul>
    </div>
</template>
