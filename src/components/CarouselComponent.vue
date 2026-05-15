<template>
  <div class="carousel-wrapper">
    <div class="carousel-head">
      <div class="carousel-kicker">Project Gallery</div>
      <div class="carousel-counter">
        {{ slide + 1 }} / {{ normalizedPhotos.length }}
      </div>
    </div>

    <q-carousel
      v-model="slide"
      swipeable
      animated
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      class="carousel"
    >
      <q-carousel-slide
        v-for="(src, idx) in normalizedPhotos"
        :key="idx"
        :name="idx"
        class="carousel-slide"
      >
        <q-img :src="src" fit="contain" class="carousel-image" />
      </q-carousel-slide>
    </q-carousel>

    <button
      v-if="normalizedPhotos.length > 1"
      type="button"
      class="carousel-arrow carousel-arrow--prev"
      aria-label="Previous image"
      @click="prevSlide"
    >
      <span>‹</span>
    </button>

    <button
      v-if="normalizedPhotos.length > 1"
      type="button"
      class="carousel-arrow carousel-arrow--next"
      aria-label="Next image"
      @click="nextSlide"
    >
      <span>›</span>
    </button>

    <div
      v-if="normalizedPhotos.length > 1"
      class="carousel-thumbs"
      aria-label="Gallery thumbnails"
    >
      <button
        v-for="(src, idx) in normalizedPhotos"
        :key="`thumb-${idx}`"
        type="button"
        class="carousel-thumb"
        :class="{ 'is-active': slide === idx }"
        :aria-label="`Go to image ${idx + 1}`"
        @click="slide = idx"
      >
        <q-img :src="src" fit="cover" class="carousel-thumb-image" />
      </button>
    </div>
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

    const prevSlide = () => {
      slide.value =
        slide.value === 0 ? normalizedPhotos.value.length - 1 : slide.value - 1;
    };

    const nextSlide = () => {
      slide.value =
        slide.value === normalizedPhotos.value.length - 1 ? 0 : slide.value + 1;
    };

    return { slide, normalizedPhotos, prevSlide, nextSlide };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.carousel-wrapper {
  position: relative;
  border-radius: $r-lg;
  border: 1px solid $border-subtle;
  background:
    radial-gradient(circle at top left, rgba(45, 212, 191, 0.08), transparent 30%),
    linear-gradient(180deg, rgba(9, 24, 28, 0.92), rgba(5, 13, 16, 0.96));
  box-shadow: $shadow-md;
  overflow: hidden;
}

.carousel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 18px 0;
}

.carousel-kicker,
.carousel-counter {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.carousel-kicker {
  color: $brand-teal;
}

.carousel-counter {
  color: $text-muted;
}

.carousel {
  background: transparent !important;
  height: clamp(280px, 48vw, 640px);
  padding: 14px 18px 0;
}

.carousel-slide {
  display: grid;
  place-items: center;
  padding: 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  border-radius: $r-md;
  overflow: hidden;
  background: rgba(3, 8, 10, 0.52);
  border: 1px solid rgba(233, 244, 241, 0.08);
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  width: 48px;
  height: 48px;
  margin-top: -20px;
  border: 1px solid rgba(233, 244, 241, 0.12);
  border-radius: 14px;
  background: rgba(7, 17, 19, 0.82);
  color: $text-strong;
  backdrop-filter: blur(12px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  z-index: 3;
  transition: transform 0.25s $ease-emph, background 0.25s $ease-soft,
    border-color 0.25s $ease-soft;
}

.carousel-arrow:hover {
  transform: translateY(-2px);
  background: rgba(13, 34, 40, 0.92);
  border-color: $border-accent;
}

.carousel-arrow span {
  display: block;
  font-size: 32px;
  line-height: 1;
  transform: translateY(-2px);
}

.carousel-arrow--prev {
  left: 18px;
}

.carousel-arrow--next {
  right: 18px;
}

.carousel-thumbs {
  display: flex;
  gap: 10px;
  padding: 14px 18px 18px;
  overflow-x: auto;
}

.carousel-thumb {
  flex: 0 0 78px;
  height: 56px;
  padding: 0;
  border: 1px solid rgba(233, 244, 241, 0.12);
  border-radius: 12px;
  background: rgba(7, 17, 19, 0.5);
  overflow: hidden;
  opacity: 0.62;
  cursor: pointer;
  transition: transform 0.25s $ease-emph, opacity 0.25s $ease-soft,
    border-color 0.25s $ease-soft;
}

.carousel-thumb:hover,
.carousel-thumb.is-active {
  opacity: 1;
  transform: translateY(-2px);
  border-color: $border-accent;
}

.carousel-thumb-image {
  width: 100%;
  height: 100%;
}

:deep(.q-carousel__slides-container) {
  border-radius: $r-md;
}

@media (max-width: $bp-sm) {
  .carousel-head {
    padding: 14px 14px 0;
  }

  .carousel {
    height: clamp(240px, 64vw, 420px);
    padding: 10px 14px 0;
  }

  .carousel-arrow {
    width: 42px;
    height: 42px;
    margin-top: -12px;
  }

  .carousel-arrow--prev {
    left: 12px;
  }

  .carousel-arrow--next {
    right: 12px;
  }

  .carousel-thumbs {
    padding: 12px 14px 14px;
  }
}
</style>
