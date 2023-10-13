<template>
     <NuxtLayout >
      <LazyNuxtPage />
    </NuxtLayout>
</template>


<script setup lang="ts">
useHead({
  link:[
    {
      rel: 'icon',
      href: `${process.env.NUXT_APP_HOST}/favicon.ico`,
    },
    {
      rel: "icon",
      type:"image/png",
      sizes:"32x32",
      href: `${process.env.NUXT_APP_HOST}/favicon-32x32.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16x",
      href: `${process.env.NUXT_APP_HOST}/favicon-16x16.png`,
    },
    {
      rel:"apple-touch-icon",
      href:`${process.env.NUXT_APP_HOST}/apple-touch-icon.png`,
    },
     {
      rel: "manifest",
      href: `${process.env.NUXT_APP_HOST}/manifest.json`,
    },
     {
      rel: "author",
      href: `${process.env.NUXT_APP_HOST}/humans.txt`,
    },

  ]
})
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>