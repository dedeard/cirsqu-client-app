<template>
  <div class="py-3">
    <h1 class="text-center font-weight-normal mb-4 mt-2">SETEL ULANG PASSWORD</h1>
    <b-form @submit.prevent="submit(form)">
      <form-input v-model="form.password" name="password" placeholder="Password baru" :error="errors.email" password />
      <form-button type="submit" variant="primary" block :loading="loading">SETEL ULANG PASSWORD</form-button>
      <hr />
      <b-button to="/login" variant="link" block :disabled="loading">Kembali ke halaman login</b-button>
    </b-form>
  </div>
</template>

<script>
const initialError = {
  password: '',
  code: '',
  email: '',
}

export default {
  name: 'ResetPasswordPage',
  layout: 'password',
  middleware: ['guest'],
  asyncData({ query, error }) {
    const code = query.code || ''
    const email = query.email || ''
    if (!code || !email) return error({ statusCode: 400, message: 'Kode dan email wajib ada!' })
    return {
      form: {
        password: '',
        email,
        code,
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
        await this.$axios.$put('auth/password', data)
        this.$fire.success('Password telah diperbarui. Anda dapat masuk sekarang.')
        return this.$router.push('/login')
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
