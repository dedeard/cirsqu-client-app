<template>
  <div class="root-layout bg-primary">
    <div class="px-3 py-4">
      <b-button variant="outline-primary" to="/" class="text-white"><b-icon icon="arrow-left" scale="1.8" /></b-button>
    </div>
    <b-container class="pt-3 pb-5 text-white">
      <b-row class="py-5">
        <b-col lg="6" md="8" class="mx-auto">
          <h1 class="text-center">Dapatkan akses tak terbatas dengan keanggotaan premium</h1>
          <p class="lead text-center">Bergabunglah dengan pelajar yang meningkatkan keterampilan mereka setiap hari</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="(el, i) in pricePlans" :key="el.id" md="4" class="d-flex">
          <element-price-plan :plan="el" :transparent="i === 0" />
        </b-col>
      </b-row>
    </b-container>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'ProPage',
  layout: 'pro',
  middleware: ['auth', 'noPendingOrder'],
  async asyncData({ $axios }) {
    const data = await $axios.$get('/prices')
    return {
      pricePlans: data,
    }
  },
}
</script>
