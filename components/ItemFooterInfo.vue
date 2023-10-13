<template>
    <div class="item-footer-info">
        <span class="item-footer-info__title">
            {{title }}
        </span>
        <div class="item-footer-info__menu" v-for="datum in data">
            <a :key="datum.title.toString()" class="item-footer-info__menu__item"  :href="datum.link.toString()" target="_blank" rel="noopener noreferrer">
                {{ datum.title }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type:String,
        default:"",
    },
    data: {
        type: Array<{title:String;link:String}>,
        default:[]
    }
})
</script>

<style scoped>
.item-footer-info{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    gap: 16px;
    align-items: flex-start;
}

.item-footer-info__title{
    color: #A4CAFE;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-transform: uppercase;
}
.item-footer-info__menu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    gap: 12px;
    align-items: flex-start;
}

.item-footer-info__menu__item{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    align-items: flex-start;
    text-decoration: none;
    color: #E1EFFE;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
}
</style>