<template>
  <div class="root-layout bg-light">
    <app-pay-banner v-if="$store.getters.orders?.find((el) => el.status === 'pending')" />
    <app-navbar />
    <Nuxt class="px-10 pb-10" />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
