<template>
  <div class="root-layout">
    <div class="px-3 py-4 position-absolute" style="z-index: 100">
      <b-button variant="outline-light" to="/pro" class="text-primary"><b-icon icon="arrow-left" scale="1.8" /></b-button>
    </div>
    <b-row no-gutters class="flex-fill">
      <b-col md="6" class="flex-fill bg-white">
        <span class="d-block" style="height: 60px" />
        <b-container class="py-5">
          <b-row>
            <b-col md="8" class="ml-auto">
              <div class="pr-md-4">
                <h4 class="mb-3">Metode pembayaran</h4>
                <b-button
                  v-for="payment in payments"
                  :key="payment.value"
                  variant="outline-light"
                  block
                  class="shadow border-0 text-dark py-3 mb-3"
                  @click="paymentType = payment.value"
                >
                  <div class="d-flex">
                    <div class="my-auto d-flex">
                      <span class="d-block my-auto pr-2">
                        <b-iconstack font-scale="1.5" :class="payment.value === paymentType ? 'text-primary' : 'text-dark'">
                          <b-icon stacked icon="circle"></b-icon>
                          <b-icon stacked icon="check" v-if="payment.value === paymentType"></b-icon>
                        </b-iconstack>
                      </span>
                      <span class="d-block my-auto">
                        {{ payment.text }}
                      </span>
                    </div>
                    <div class="ml-auto my-auto">
                      <img v-for="(img, i) in payment.imgs" :key="i" :src="img" width="50" />
                    </div>
                  </div>
                </b-button>
                <form-button variant="primary" block size="lg" class="mt-4" @click="checkout" :loading="loading"
                  >Bayar sekarang</form-button
                >
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col md="6" class="flex-fill bg-primary text-white">
        <span class="d-none d-md-block" style="height: 60px" />
        <b-container class="py-5">
          <b-row>
            <b-col md="8">
              <div class="pl-md-4">
                <h4 class="mb-3">Paket</h4>
                <b-button
                  v-for="plan in plans"
                  :key="plan.id"
                  variant="outline-primary"
                  block
                  :class="plan.slug === slug ? 'shadow border-0 bg-white text-dark py-4 mb-3' : 'shadow border-0 text-white py-4 mb-3'"
                  @click="slug = plan.slug"
                >
                  <div class="d-flex">
                    <div class="my-auto d-flex">
                      <span class="d-block my-auto pr-2">
                        <b-iconstack font-scale="1.5" :class="plan.slug === slug ? 'text-primary' : 'text-white'">
                          <b-icon stacked icon="circle"></b-icon>
                          <b-icon stacked icon="check" v-if="plan.slug === slug"></b-icon>
                        </b-iconstack>
                      </span>
                      <span class="d-block my-auto font-weight-bold">
                        {{ plan.name }}
                      </span>
                    </div>
                    <div class="ml-auto my-auto">
                      <small
                        ><strong>IDR {{ Number(plan.price).toLocaleString('id-ID', { currency: 'IDR' }) }}</strong
                        >/ {{ plan.months }} bulan</small
                      >
                    </div>
                  </div>
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  layout: 'pro',
  middleware: ['auth', 'noPendingOrder'],
  async asyncData({ $axios, query }) {
    let slug = query.plan
    const plans = await $axios.$get('/prices')
    slug = plans.find((el) => el.slug === slug)?.slug || plans[0].slug
    return {
      slug,
      plans,
      loading: false,
      paymentType: 'bca',
      payments: [
        { value: 'bca', text: 'BCA Virtual Account', imgs: ['/payments/bca.png'] },
        { value: 'bni', text: 'BNI Virtual Account', imgs: ['/payments/bni.png'] },
        { value: 'bri', text: 'BRI Virtual Account', imgs: ['/payments/bri.png'] },
        { value: 'indomaret', text: 'Indomaret / iSaku', imgs: ['/payments/indomaret.png'] },
        { value: 'alfamart', text: 'Alfa Group', imgs: ['/payments/alfamart.png'] },
      ],
    }
  },
  computed: {
    plan() {
      return this.plans.find((el) => el.slug === this.slug)
    },
  },
  methods: {
    async checkout() {
      this.loading = true
      try {
        const order = await this.$store.dispatch('order/checkout', { priceId: this.plan.id, paymentType: this.paymentType })
        return this.$router.push('/pro/' + order.id)
      } catch (e) {
        this.$fire.error(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
  watch: {
    slug(val) {
      this.$router.push({ query: { slug: val } })
    },
  },
}
</script>
