<template>
  <div>
    <div class="bg" style="padding: 2vw 3vh; padding-bottom: 100px">
      <q-layout style="max-width: 1200px; margin: auto">
        <main-navbar-vue />
        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from '../components/MainFooter.vue';
import MainNavbarVue from '../components/MainNavbar.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainNavbarVue,
    MainFooter,
  },
  mounted() {
    this.$q.dark.set(true);
  },
});
</script>

<style scoped>
.bg {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #071113 0%, #0f2428 48%, #1f3431 100%);
  position: relative;
  overflow: hidden;
}

.bg::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: linear-gradient(
      rgba(233, 244, 241, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(233, 244, 241, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 80%);
}

.bg > * {
  position: relative;
  z-index: 1;
}
</style>
