<template>
  <div class="carousel-wrapper">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      class="carousel"
      control-color="white"
    >
      <q-carousel-slide
        v-for="(src, idx) in normalizedPhotos"
        :key="idx"
        :name="idx"
        :img-src="src"
        class="carousel-slide"
      />
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CarouselComponent',
  props: {
    Photo: {
      type: [String, Array] as unknown as () => string | string[],
      required: true,
    },
    autoplay: {
      type: [Number, Boolean],
      default: 5000,
    },
  },
  setup(props) {
    const slide = ref(0);
    const normalizedPhotos = computed<string[]>(() =>
      Array.isArray(props.Photo) ? props.Photo : [props.Photo]
    );
    return { slide, normalizedPhotos };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.carousel-wrapper {
  margin: 28px 0;
  border-radius: $r-lg;
  overflow: hidden;
  border: 1px solid $border-subtle;
  background: $surface-1;
  box-shadow: $shadow-md;
}

.carousel {
  background: transparent !important;
  height: clamp(260px, 50vw, 520px);
}

.carousel-slide {
  background-size: contain !important;
  background-position: center !important;
  background-color: rgba(0, 0, 0, 0.3);
}

:deep(.q-carousel__navigation) {
  padding: 8px 0;
}

:deep(.q-carousel__navigation-inner button) {
  background: rgba(255, 255, 255, 0.4);
}

:deep(.q-carousel__navigation-inner .q-btn--active) {
  background: $brand-teal;
}

:deep(.q-carousel__arrow) {
  background: rgba(7, 17, 19, 0.6) !important;
  backdrop-filter: blur(8px);
  border-radius: $r-md !important;
}
</style>
