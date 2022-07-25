<template>
  <div class="py-3">
    <h1 class="text-center font-weight-normal mb-4 mt-2">LUPA PASSWORD</h1>
    <b-form @submit.prevent="submit(form)">
      <form-input v-model="form.email" name="email" placeholder="Alamat email" :error="errors.email" />
      <form-button type="submit" variant="primary" block :loading="loading">KIRIM EMAIL</form-button>
      <hr />
      <b-button to="/login" variant="link" block :disabled="loading">Kembali ke halaman login</b-button>
    </b-form>
  </div>
</template>

<script>
const initialError = {
  email: '',
}

export default {
  name: 'ForgotPasswordPage',
  layout: 'password',
  middleware: ['guest'],
  data() {
    return {
      form: {
        email: '',
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
        await this.$axios.$post('auth/password', data)
        this.$fire.success('Kode verifikasi telah dikirim ke email Anda. Silah cek email anda dan temukan 6 digit kode verifikasi.')
        return this.$router.push('/password/verify?email=' + data.email)
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
