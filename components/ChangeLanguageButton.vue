<script lang="ts">
export default {
    methods: {
        async changeLanguage() {
            if (this.$i18n.locale === 'en') {
                await this.$i18n.setLocale('vi');
                this.$i18n.setLocaleCookie('vi');

            } else {
                await this.$i18n.setLocale('en');
                this.$i18n.setLocaleCookie('en');

            }
        }
    }
}
</script>

<template>
    <button class="change-language-button" v-on:click="changeLanguage">
        <img alt="earth" src="/icons/ic-earth.svg"/>
        <span>{{ $i18n.locale.toUpperCase() }}</span>
    </button>
</template>

<style>
.change-language-button{
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: fit-content;
    height: fit-content;
    padding: 12px 12px 12px 0px;
    color: #1F2A37;
     font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}
</style>