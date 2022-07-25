<template>
  <div class="py-3">
    <h1 class="text-center font-weight-normal mb-4">DAFTAR</h1>
    <b-form @submit.prevent="submit(form)">
      <form-input v-model="form.name" name="name" placeholder="Nama" :error="errors.name" />
      <form-input v-model="form.email" name="email" placeholder="Alamat email" :error="errors.email" />
      <form-input v-model="form.password" name="password" placeholder="Password" :error="errors.email" password />
      <form-button type="submit" variant="primary" block :loading="loading">DAFTAR</form-button>
    </b-form>
  </div>
</template>

<script>
const initialError = {
  name: '',
  email: '',
  password: '',
}

export default {
  name: 'RegisterPage',
  layout: 'auth',
  middleware: ['guest'],
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      errors: initialError,
      loading: false,
    }
  },
  methods: {
    async submit(form) {
      this.loading = true
      this.errors = initialError
      try {
        await this.$axios.$post('auth/register', form)
        this.$fire.success('Akun telah berhasil dibuat. kamu bisa masuk sekarang.')
        return this.$router.push('/login')
      } catch (e) {
        const err = this.$errorResponse(e)
        this.errors = { ...this.errors, ...err.errors }
        if (err.message) this.$fire.error(err.message)
        if (!err.message && !Object.keys(err.errors).length) this.$fire.error(e.message)
      }
      this.loading = false
    },
  },
}
</script>
