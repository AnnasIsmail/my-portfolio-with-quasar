<template>
  <div class="detail-explain" :class="{ 'is-right': DetailExplain.right }">
    <div class="detail-image">
      <q-img :src="DetailExplain.url" :ratio="16 / 9" class="detail-img" />
    </div>
    <div class="detail-card">
      <div class="detail-name">{{ DetailExplain.name }}</div>
      <div class="detail-path">{{ DetailExplain.path }}</div>
      <div class="detail-divider" aria-hidden="true"></div>
      <p class="detail-description">{{ DetailExplain.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { DetailExplain } from './models';

export default defineComponent({
  name: 'DetailExplain',
  props: {
    DetailExplain: {
      type: Object as () => DetailExplain,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.detail-explain {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 18px 0;
  align-items: stretch;
}

.detail-explain.is-right {
  grid-template-areas: 'card image';
}

.detail-explain.is-right .detail-image {
  grid-area: image;
}

.detail-explain.is-right .detail-card {
  grid-area: card;
}

.detail-image {
  border-radius: $r-md;
  overflow: hidden;
  border: 1px solid $border-subtle;
}

.detail-img {
  width: 100%;
  height: 100%;
}

.detail-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px;
  border-radius: $r-md;
  background: $surface-1;
  border: 1px solid $border-subtle;
  transition: border-color 0.3s $ease-soft, transform 0.3s $ease-emph;
}

.detail-card:hover {
  border-color: $border-accent;
  transform: translateY(-3px);
}

.detail-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: $text-strong;
}

.detail-path {
  font-size: 12.5px;
  color: $brand-teal;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.detail-divider {
  height: 1px;
  background: $border-subtle;
  margin: 4px 0;
}

.detail-description {
  margin: 0;
  color: $text-base;
  line-height: 1.65;
  font-size: 14px;
}

@media (max-width: $bp-sm) {
  .detail-explain,
  .detail-explain.is-right {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
}
</style>
