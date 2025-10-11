<template>
  <q-icon
    id="notification"
    v-if="popUp"
    style="position: fixed; left: calc(50vw - 219px); z-index: 9999"
  >
    <q-popup-proxy transition-show="scale" transition-hide="scale">
      <q-banner class="notification-banner">
        <template v-slot:avatar>
          <div class="notification-icon">
            <q-icon name="info" size="24px" />
          </div>
        </template>
        <div class="notification-text">
          Under Development, or visit
          <a
            class="notification-link"
            href="https://annasismail.github.io/My-Portofolio/"
            target="_blank"
          >
            my old portfolio website</a
          >.
        </div>
      </q-banner>
    </q-popup-proxy>
  </q-icon>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      popUp: true,
    };
  },
  mounted() {
    setTimeout(() => (this.popUp = false), 10000);
  },
});
</script>

<style scoped>
.notification-banner {
  background: linear-gradient(
    135deg,
    rgba(59, 246, 134, 0.95) 0%,
    rgba(76, 169, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  padding: 16px 20px;
  color: white;
}

.notification-icon {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.notification-text {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.notification-link {
  color: white;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: all 0.3s ease;
}

.notification-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
  opacity: 0.9;
}

@media (max-width: 1200px) {
  #notification {
    top: 90px;
  }
}
</style>
