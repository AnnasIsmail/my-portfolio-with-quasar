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
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

.bg::before {
  content: '';
  position: fixed;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: 0;
  background: radial-gradient(
      circle,
      rgba(59, 246, 134, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(76, 169, 255, 0.05) 0%,
      transparent 50%
    );
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bg > * {
  position: relative;
  z-index: 1;
}
</style>
