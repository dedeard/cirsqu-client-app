<template>
  <div class="py-3">
    <h1 class="text-center font-weight-normal mb-4 mt-2">VERIFIKASI</h1>
    <b-alert show variant="success"
      >Kode verifikasi telah dikirim ke email Anda. Silah cek email anda dan temukan 6 digit kode verifikasi.</b-alert
    >
    <b-form @submit.prevent="submit(form)">
      <form-input v-model.trim="form.code" name="code" placeholder="Kode verifikasi" :error="errors.code" uppercase />
      <form-button type="submit" variant="primary" block :loading="loading">VERIFIKASI</form-button>
      <hr />
      <b-button to="/login" variant="link" block :disabled="loading">Kembali ke halaman login</b-button>
    </b-form>
  </div>
</template>

<script>
const initialError = {
  email: '',
  code: '',
}

export default {
  name: 'ForgotPasswordPage',
  layout: 'password',
  middleware: ['guest'],
  asyncData({ query }) {
    return {
      form: {
        email: query.email,
        code: '',
      },
      errors: initialError,
      loading: false,
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      this.errors = initialError
      try {
        await this.$axios.$post('auth/password/verify', data)
        return this.$router.push({ path: '/password/reset', query: data })
      } catch (e) {
        const err = this.$errorResponse(e)
        this.errors = { ...this.errors, ...err.errors }
        if (err.message) this.$fire.error(err.message)
        if (!err.message && !Object.keys(err.errors).length) this.$fire.error(e.message)
        this.loading = false
      }
    },
  },
}
</script>
