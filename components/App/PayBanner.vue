<template>
  <b-alert variant="primary" show class="m-0">
    <b-container>
      <div class="d-flex">
        <h5 class="mr-3 my-auto text-uppercase">{{ order.status }}</h5>
        <p class="my-auto">
          <strong
            >{{ order.charge.currency }}
            {{ Number(order.grossAmount).toLocaleString('id-ID', { currency: order.charge.currency }) }}</strong
          >
          / {{ order.months }} Bulan
        </p>
        <b-button variant="primary" class="ml-auto" size="sm" :to="`/pro/${order.id}`">Detail Transaksi</b-button>
      </div>
    </b-container>
  </b-alert>
</template>

<script>
export default {
  name: 'AppPayBanner',
  computed: {
    order() {
      return this.$store.getters.orders.find((el) => el.status === 'pending')
    },
  },
}
</script>
