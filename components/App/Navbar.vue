<template>
  <header class="bg-white border-bottom">
    <b-container>
      <div class="d-flex py-3">
        <b-link to="/" class="d-block">
          <svg-logo width="40px" height="40px" />
        </b-link>
        <div class="px-3 flex-fill my-auto">
          <button class="px-2 border btn btn-block">
            <div class="d-flex">
              <div class="my-auto">
                <b-icon-search />
              </div>
              <div class="my-auto pl-2">
                <span>Cari...</span>
              </div>
            </div>
          </button>
        </div>
        <div class="my-auto d-none d-lg-block" v-if="!auth">
          <b-button variant="link" class="mx-3" to="/">Daftar Kategori</b-button>
          <span class="text-secondary">|</span>
          <b-button variant="link" class="mx-3" to="/login">Masuk</b-button>
          <b-button variant="primary" to="/register">Daftar</b-button>
        </div>
        <div class="my-auto d-lg-none" v-if="!auth">
          <b-dropdown variant="primary" right>
            <template #button-content>
              <b-icon-menu-app />
            </template>
            <b-dd-item to="/">Daftar Kategori</b-dd-item>
            <b-dd-item to="/login">Masuk</b-dd-item>
            <b-dd-item to="/register" variant="primary">Daftar</b-dd-item>
          </b-dropdown>
        </div>
        <div class="my-auto d-none d-lg-block" v-if="auth">
          <b-button variant="link" class="mx-3" to="/">Daftar Kategori</b-button>
          <span class="text-secondary">|</span>
          <b-button variant="primary" class="ml-3" to="/pro">{{ auth.pro ? 'Renew Premium' : 'Join Premium' }}</b-button>
        </div>
        <div class="my-auto d-lg-none" v-if="auth">
          <b-dropdown variant="primary" right>
            <template #button-content>
              <b-icon-menu-app size="16" />
            </template>
            <b-dd-item to="/">Daftar Kategori</b-dd-item>
            <b-dd-item to="/pro" variant="primary">{{ auth.pro ? 'Renew Premium' : 'Join Premium' }}</b-dd-item>
          </b-dropdown>
        </div>
        <div v-if="auth" class="my-auto pl-3">
          <b-link to="/dashboard">
            <b-img :src="auth.avatar || '/avatar.png'" width="40px" height="40px" rounded="circle" />
          </b-link>
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    auth() {
      return this.$store.getters.auth
    },
  },
}
</script>
