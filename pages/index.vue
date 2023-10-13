<template>
  <span class="home-page__test">{{ $t("name") }}</span>
  <button v-on:click="add">plus</button>
  <span v-bind:style="{ color: test % 2 === 0 ? 'red' : 'blue' }">{{ test }}</span>
  <button @click="minus">minus</button>
  <span class="color-test">ahhi</span>
  <InputForm />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const test = ref(0);

function add(e: MouseEvent) {
  console.log(e.timeStamp);
  test.value++;
}
function minus() {
  test.value--;
}
onUnmounted(() => {
  console.log('das')
},)
watch(test, (newValue, oldValue) => {
  console.log(`The state changed from ${oldValue} to ${newValue}`)
});


useServerSeoMeta({
  title: 'Unicloud Paybox',
  description: 'This is my amazing site, let me tell you all about it.',
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",

  fbAppId: "hmeu4s6knma47jlkstrgxu2r9gzq9o",
  ogType: "website",
  ogUrl: `${process.env.NUXT_APP_HOST}/`,
  ogTitle: 'Website thiết bị PayBox',
  ogImage: `${process.env.NUXT_APP_HOST}/meta-tag.webp`,
  ogDescription: '3 thiết bị thanh toán Paybox: Lite, Mini, Pro trong 1 nhà Unicloud với đa dạng hình thức thanh toán (quẹt thẻ, quét mã QR, cắm thẻ chip,...) dành cho mọi ngành hàng: F&B, tạp hóa, thời trang, làm đẹp, giải trí,..',

  twitterCard: 'summary_large_image',
  twitterTitle:"Website thiết bị PayBox",
  twitterDescription:"3 thiết bị thanh toán Paybox: Lite, Mini, Pro trong 1 nhà Unicloud với đa dạng hình thức thanh toán (quẹt thẻ, quét mã QR, cắm thẻ chip,...) dành cho mọi ngành hàng: F&B, tạp hóa, thời trang, làm đẹp, giải trí,..",
  twitterImage: `${process.env.NUXT_APP_HOST}/meta-tag.webp`
});
</script>

<style scoped>
.color-test {
  color: red;
}

@media screen and (max-width:500px) {
  .color-test {
    color: blue;
  }
}</style>