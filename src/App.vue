<template>
  <RouterView />
</template>

<style>
@import './assets/base.css';

.list-icon-enter-from,
.list-icon-leave-active{
    opacity: 0;
    transform: translateY(2px);
}

.list-icon-enter-active,
.list-icon-leave-active{
    transition: 0.1s ease all;
}

</style>
