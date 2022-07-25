<template>
  <div class="root-layout bg-primary">
    <div class="px-3 py-4">
      <b-button variant="outline-primary" to="/" class="text-white"><b-icon icon="arrow-left" scale="1.8" /></b-button>
    </div>
    <b-container class="pt-3 pb-5 text-white">
      <b-row class="pt-5 pb-3">
        <b-col lg="6" md="8" class="mx-auto">
          <h1 class="text-center">Menunggu pembayaran</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="mx-auto">
          <div class="card text-dark">
            <div class="card-header">
              <div class="d-flex mb-2">
                <span class="d-block my-auto font-weight-bold">Total</span>
                <span class="d-block ml-auto my-auto font-weight-bold">
                  Bayar sebelum <span class="text-primary">{{ expired }}</span>
                </span>
              </div>
              <div>
                <h3 class="m-0">
                  {{ order.charge.currency }} {{ Number(order.grossAmount).toLocaleString('id-ID', { currency: order.charge.currency }) }}
                </h3>
                <small class="text-muted">Order ID #{{ order.orderId }}</small>
              </div>
            </div>
            <div class="card-body" v-if="order.paymentType === 'bri'">
              <div class="d-flex py-3 border-bottom">
                <span class="d-block h5 my-auto font-weight-bold">Bank BRI</span>
                <span class="d-block my-auto ml-auto">
                  <img src="/payments/bri.png" width="60" />
                </span>
              </div>
              <p class="text-center h5 py-3">
                Pembelian paket premium selama {{ order.months }} bulan. <br />
                Selesaikan pembayaran dari bank BRI ke nomor virtual account di bawah ini.
              </p>
              <div class="rounded border p-3 bg-light mb-3">
                <span class="d-block text-center">
                  <strong>Virtual account number</strong>
                </span>
                <span class="pt-2 h4 d-block m-0 text-center">
                  <strong>{{ order.charge.va_numbers[0].va_number }}</strong>
                </span>
              </div>
              <hr class="m-0" />
              <div class="py-3">
                <b-button variant="outline-primary" block @click="open = !open">Bagaimana cara membayar?</b-button>
                <div v-if="open" class="pt-3">
                  <div class="border rounded bg-light p-3 mb-3">
                    <h5>ATM BRI</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>other transactions</strong> on the main menu.</li>
                      <li>Select <strong>payment</strong>.</li>
                      <li>Select <strong>other</strong>.</li>
                      <li>Select <strong>BRIVA</strong>.</li>
                      <li>Insert <strong>BRIVA number</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                  <div class="border rounded bg-light p-3 mb-3">
                    <h5>IB BRI</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>payment & purchase</strong>.</li>
                      <li>Select <strong>BRIVA</strong>.</li>
                      <li>Insert <strong>BRIVA number</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                  <div class="border rounded bg-light p-3">
                    <h5>BRImo</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>payment</strong>.</li>
                      <li>Select <strong>BRIVA</strong>.</li>
                      <li>Insert <strong>BRIVA number</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" v-else-if="order.paymentType === 'bca'">
              <div class="d-flex py-3 border-bottom">
                <span class="d-block h5 my-auto font-weight-bold">Bank BCA</span>
                <span class="d-block my-auto ml-auto">
                  <img src="/payments/bca.png" width="60" />
                </span>
              </div>
              <p class="text-center h5 py-3">
                Pembelian paket premium selama {{ order.months }} bulan. <br />
                Selesaikan pembayaran dari bank BCA ke nomor virtual account di bawah ini.
              </p>
              <div class="rounded border p-3 bg-light mb-3">
                <span class="d-block text-center">
                  <strong>Virtual account number</strong>
                </span>
                <span class="pt-2 h4 d-block m-0 text-center">
                  <strong>{{ order.charge.va_numbers[0].va_number }}</strong>
                </span>
              </div>
              <hr class="m-0" />
              <div class="py-3">
                <b-button variant="outline-primary" block @click="open = !open">Bagaimana cara membayar?</b-button>
                <div v-if="open" class="pt-3">
                  <div class="border rounded bg-light p-3 mb-3">
                    <h5>ATM BCA</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>other transactions</strong> on the main menu.</li>
                      <li>Select <strong>transfer</strong>.</li>
                      <li>Select to <strong>BCA virtual account</strong>.</li>
                      <li>Insert <strong>BCA Virtual account number</strong>.</li>
                      <li>Insert the <strong>payable amount</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                  <div class="border rounded bg-light p-3 mb-3">
                    <h5>klik BCA</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>fund transfer</strong>.</li>
                      <li>Select <strong>transfer to BCA virtual account</strong>.</li>
                      <li>Insert <strong>BCA virtual account number</strong>.</li>
                      <li>Insert the <strong>payable amount</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                  <div class="border rounded bg-light p-3">
                    <h5>m-BCA</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>m-Transfer</strong>.</li>
                      <li>Select <strong>BCA virtual account</strong>.</li>
                      <li>Insert <strong>BCA virtual account number</strong>.</li>
                      <li>Insert the <strong>payable amount</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" v-else-if="order.paymentType === 'bni'">
              <div class="d-flex py-3 border-bottom">
                <span class="d-block h5 my-auto font-weight-bold">Bank BNI</span>
                <span class="d-block my-auto ml-auto">
                  <img src="/payments/bni.png" width="60" />
                </span>
              </div>
              <p class="text-center h5 py-3">
                Pembelian paket premium selama {{ order.months }} bulan. <br />
                Selesaikan pembayaran dari bank BNI ke nomor virtual account di bawah ini.
              </p>
              <div class="rounded border p-3 bg-light mb-3">
                <span class="d-block text-center">
                  <strong>Virtual account number</strong>
                </span>
                <span class="pt-2 h4 d-block m-0 text-center">
                  <strong>{{ order.charge.va_numbers[0].va_number }}</strong>
                </span>
              </div>
              <hr class="m-0" />
              <div class="py-3">
                <b-button variant="outline-primary" block @click="open = !open">Bagaimana cara membayar?</b-button>
                <div v-if="open" class="pt-3">
                  <div class="border rounded bg-light p-3 mb-3">
                    <h5>ATM BNI</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>others</strong> on the main menu.</li>
                      <li>Select <strong>transfer</strong>.</li>
                      <li>Select <strong>to BNI account</strong>.</li>
                      <li>Insert the <strong>payment account number</strong>.</li>
                      <li>Insert the <strong>payable amount</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                  <div class="border rounded bg-light p-3 mb-3">
                    <h5>Internet Banking</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>transaction</strong>, then <strong>transfer administration info</strong>.</li>
                      <li>Select <strong>set destination account</strong>.</li>
                      <li>Insert <strong>account info</strong>, then <strong>Confirm</strong>.</li>
                      <li>Select <strong>transfer</strong>, then <strong>transfer to BNI account</strong>.</li>
                      <li>Insert <strong>payment details</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                  <div class="border rounded bg-light p-3">
                    <h5>Mobile Banking</h5>
                    <ol class="m-0 pl-3">
                      <li>Select <strong>transfer</strong>.</li>
                      <li>Select <strong>virtual account billing</strong>.</li>
                      <li>Select the <strong>debit account</strong> you want to use.</li>
                      <li>Insert the <strong>virtual account number</strong>, then <strong>confirm</strong>.</li>
                      <li>Payment complete.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" v-else-if="order.paymentType === 'indomaret'">
              <div class="d-flex py-3 border-bottom">
                <span class="d-block h5 my-auto font-weight-bold">Indomaret</span>
                <span class="d-block my-auto ml-auto">
                  <img src="/payments/indomaret.png" width="60" />
                </span>
              </div>
              <p class="text-center h5 py-3">
                Pembelian paket premium selama {{ order.months }} bulan. <br />
                Tunjukkan barcode ke kasir atau masukkan kode pembayaran di aplikasi i.saku.
              </p>
              <div class="rounded border p-3 bg-light mb-3">
                <span class="d-block text-center">
                  <strong>Kode pembayaran</strong>
                </span>
                <span class="pt-2 h4 d-block m-0 text-center">
                  <barcode :value="order.charge.payment_code" format="CODE39" :width="1.3" height="65">
                    <strong>{{ order.charge.payment_code }}</strong>
                  </barcode>
                </span>
              </div>
              <hr class="m-0" />
              <div class="py-3">
                <b-button variant="outline-primary" block @click="open = !open">Bagaimana cara membayar?</b-button>
                <div v-if="open" class="pt-3">
                  <div class="border rounded bg-light p-3 mb-3">
                    <ol class="m-0 pl-3">
                      <li>
                        If you’re going to pay <strong>on the counter</strong>, go to the nearest Indomaret store and
                        <strong>show your payment code/barcode to the cashier</strong>.
                      </li>
                      <li>
                        The cashier will confirm your transaction details. Once your transaction is successful, you’ll receive the payment
                        confirmation e-mail.
                      </li>
                      <li>If you’re going to pay via <strong>i.saku</strong>, open the app and tap <strong>Bayar</strong>.</li>
                      <li>Choose the merchant you’d like to pay to, and enter your <strong>payment code</strong>.</li>
                      <li>Tap <strong>Selanjutnya</strong> and check your transaction details.</li>
                      <li>Tap <strong>Bayar sekarang</strong> to confirm your payment.</li>
                      <li>Please keep your Indomaret payment receipt in case you’ll need further help via support.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" v-else-if="order.paymentType === 'alfamart'">
              <div class="d-flex py-3 border-bottom">
                <span class="d-block h5 my-auto font-weight-bold">Alfamart</span>
                <span class="d-block my-auto ml-auto">
                  <img src="/payments/alfamart.png" width="60" />
                </span>
              </div>
              <p class="text-center h5 py-3">
                Pembelian paket premium selama {{ order.months }} bulan. <br />
                Silakan pergi ke toko Alfa Group terdekat dan tunjukkan barcode/kode pembayaran ke kasir.
              </p>
              <div class="rounded border p-3 bg-light mb-3">
                <span class="d-block text-center">
                  <strong>Kode pembayaran</strong>
                </span>
                <span class="pt-2 h4 d-block m-0 text-center">
                  <barcode :value="order.charge.payment_code" format="CODE39" :width="1.3" height="65">
                    <strong>{{ order.charge.payment_code }}</strong>
                  </barcode>
                </span>
              </div>
              <hr class="m-0" />
              <div class="py-3">
                <b-button variant="outline-primary" block @click="open = !open">Bagaimana cara membayar?</b-button>
                <div v-if="open" class="pt-3">
                  <div class="border rounded bg-light p-3 mb-3">
                    <ol class="m-0 pl-3">
                      <li>
                        Go to the nearest <strong>Alfamart/Alfamidi/Dan+Dan</strong> store near you and
                        <strong>show your barcode/payment code to the cashier</strong>.
                      </li>
                      <li>The cashier will confirm your transaction details.</li>
                      <li>Confirm your payment with the cashier.</li>
                      <li>Once your transaction is successful, you'll receive the payment confirmation e-mail.</li>
                      <li>Please keep your Alfamart payment receipt in case you'll need further help via support.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <form-button block variant="danger" :loading="loading" @click="cancelOrder">Batalkan</form-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <app-footer />
  </div>
</template>

<script>
import moment from 'moment'
import VueBarcode from 'vue-barcode'
export default {
  name: 'OrderDetailPage',
  middleware: 'auth',
  layout: 'pro',
  components: {
    barcode: VueBarcode,
  },
  async asyncData({ store, params, error }) {
    const order = store.getters.orders.find((el) => el.id === params.orderId)
    if (!order) return error({ statusCode: 404, message: 'Order not found' })
    return {
      expired: '',
      open: false,
      loading: false,
      interval: null,
    }
  },
  computed: {
    order() {
      return this.$store.getters.orders.find((el) => el.id === this.$route.params.orderId)
    },
  },
  methods: {
    countExpired() {
      if (this.order?.createdAt) {
        const duration = moment.duration(moment(this.order.createdAt).add(1, 'days').valueOf() - moment().valueOf())
        this.expired = duration.hours() + ':' + duration.minutes() + ':' + duration.seconds()
      }
    },
    async cancelOrder() {
      const { value } = await this.$fire.confirm('Batalkan')
      if (value) {
        this.loading = true
        try {
          await this.$store.dispatch('order/cancelOrder', this.order.id)
          this.$router.push('/')
        } catch (e) {
          this.$fire.error(this.$errorMessage(e))
          this.loading = false
        }
      }
    },
  },
  mounted() {
    this.interval = setInterval(this.countExpired, 1000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>
