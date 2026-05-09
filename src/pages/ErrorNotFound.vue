<template>
  <q-page class="not-found">
    <div class="content">
      <div class="error-code gradient-text">404</div>
      <h2 class="error-title">This page wandered off the path.</h2>
      <p class="error-message">
        The link may be broken or the page might have been moved. Let's get you
        back to familiar ground.
      </p>
      <div class="actions">
        <router-link to="/" class="btn btn--primary btn--lg">
          <Icon icon="mdi:home-outline" />
          <span>Back to Home</span>
        </router-link>
        <router-link to="/projects" class="btn btn--ghost btn--lg">
          <Icon icon="mdi:briefcase-outline" />
          <span>Browse Projects</span>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'ErrorNotFound',
  components: { Icon },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.not-found {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.content {
  max-width: 540px;
}

.error-code {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(120px, 22vw, 200px);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -0.04em;
}

.error-title {
  margin: 0 0 14px;
  font-size: clamp(22px, 3.5vw, 32px);
  color: $text-strong;
}

.error-message {
  margin: 0 0 28px;
  color: $text-base;
  line-height: 1.7;
  font-size: 15px;
}

.actions {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
</style>
