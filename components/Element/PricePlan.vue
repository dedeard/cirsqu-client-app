<template>
  <b-card
    :class="transparent ? 'flex-fill mb-3 bg-transparent border-0' : 'flex-fill mb-3 text-dark border-0'"
    body-class="flex-fill d-flex flex-column p-4"
  >
    <div class="d-flex border-bottom py-2" style="border-width: 2px !important">
      <div>
        <h5 class="font-weight-normal">{{ plan.name }}</h5>
      </div>
      <div class="ml-auto">
        <h4>IDR {{ Number(plan.price) / 1000 }}k</h4>
      </div>
    </div>
    <div class="py-3 flex-fill">
      <ul class="list-unstyled my-2 mb-3">
        <li v-for="(list, i) in plan.details" :key="i" class="font-weight-bold">
          <span class="d-flex mb-3">
            <span class="d-block pr-2">
              <b-iconstack font-scale="1.5">
                <b-icon stacked icon="circle"></b-icon>
                <b-icon stacked icon="check"></b-icon>
              </b-iconstack>
            </span>
            <span class="d-block">{{ list }}</span>
          </span>
        </li>
      </ul>
    </div>
    <b-button :variant="transparent ? 'light' : 'primary'" block size="lg" :to="'/pro/checkout?plan=' + plan.slug" :disabled="loading"
      >MULAI</b-button
    >
  </b-card>
</template>

<script>
export default {
  name: 'ElementPricePlan',
  props: {
    plan: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
}
</script>
