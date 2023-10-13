<template>
    <input @focus="onFocus" @input="onChange" />
</template>
<script lang="ts">
export default{
    methods:{
        onChange:(e:any)=>{
            console.log(e.target.value);
        },
        onFocus: () => {
            console.log('focus');
         },
    }
}
</script>