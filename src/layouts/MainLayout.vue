<template>
  <div class="page-shell">
    <transition name="intro-overlay">
      <div v-if="introVisible" class="intro-overlay" aria-hidden="true">
        <div class="intro-overlay__veil"></div>
        <div class="intro-overlay__grid"></div>
        <div class="intro-overlay__center">
          <div class="intro-overlay__mark-wrap">
            <img
              src="/icons/annas-monogram.svg"
              alt="Annas logo"
              class="intro-overlay__mark"
            />
            <span class="intro-overlay__pulse"></span>
          </div>
          <div class="intro-overlay__title">ANNAS ISMAIL MUHAMMAD</div>
          <div class="intro-overlay__subtitle">Full Stack Developer</div>
        </div>
        <div class="intro-overlay__doors">
          <span class="intro-overlay__door intro-overlay__door--left"></span>
          <span class="intro-overlay__door intro-overlay__door--right"></span>
        </div>
      </div>
    </transition>

    <div class="ambient-glow" aria-hidden="true"></div>
    <div class="grid-overlay" aria-hidden="true"></div>
    <div
      class="pointer-glow"
      aria-hidden="true"
      :style="{
        transform: `translate3d(${pointerX}px, ${pointerY}px, 0)`,
        opacity: pointerActive ? 0.5 : 0,
      }"
    ></div>
    <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>

    <div class="page-content">
      <q-layout class="page-layout">
        <main-navbar />
        <q-page-container>
          <router-view v-slot="{ Component }">
            <transition name="page-fade" mode="out-in" @after-enter="observeReveals">
              <component :is="Component" />
            </transition>
          </router-view>
        </q-page-container>
      </q-layout>
    </div>
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import MainFooter from '../components/MainFooter.vue';
import MainNavbar from '../components/MainNavbar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainNavbar,
    MainFooter,
  },
  setup() {
    const $q = useQuasar();
    const introVisible = ref(true);
    const scrollProgress = ref(0);
    const pointerX = ref(window.innerWidth / 2);
    const pointerY = ref(window.innerHeight / 2);
    const pointerActive = ref(false);
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let pointerTimer: number | null = null;
    let introTimer: number | null = null;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0;

      document
        .querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach((el) => {
          const speed = Number(el.dataset.parallax || 0.08);
          const rect = el.getBoundingClientRect();
          const centeredOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
          const translateY = centeredOffset * -speed;
          el.style.setProperty('--parallax-y', `${translateY.toFixed(2)}px`);
        });
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.value = event.clientX - 180;
      pointerY.value = event.clientY - 180;
      pointerActive.value = true;

      if (pointerTimer) {
        window.clearTimeout(pointerTimer);
      }

      pointerTimer = window.setTimeout(() => {
        pointerActive.value = false;
      }, 1400);
    };

    const observeReveals = () => {
      if (!observer) return;
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
        .forEach((el) => observer && observer.observe(el));
    };

    onMounted(() => {
      $q.dark.set(true);

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      introTimer = window.setTimeout(
        () => {
          introVisible.value = false;
        },
        reducedMotion ? 320 : 1650
      );

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('pointermove', handlePointerMove, {
        passive: true,
      });
      handleScroll();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      observeReveals();

      // Re-observe when route changes inject new nodes
      mutationObserver = new MutationObserver(() => observeReveals());
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      if (pointerTimer) {
        window.clearTimeout(pointerTimer);
      }
      if (introTimer) {
        window.clearTimeout(introTimer);
      }
      observer?.disconnect();
      mutationObserver?.disconnect();
    });

    return {
      introVisible,
      scrollProgress,
      pointerX,
      pointerY,
      pointerActive,
      observeReveals,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.page-shell {
  position: relative;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: $grad-bg-page;
  overflow: hidden;
}

.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 1400;
  display: grid;
  place-items: center;
  pointer-events: none;
  overflow: hidden;
}

.intro-overlay__veil,
.intro-overlay__grid,
.intro-overlay__doors {
  position: absolute;
  inset: 0;
}

.intro-overlay__veil {
  background:
    radial-gradient(circle at 48% 42%, rgba(79, 216, 247, 0.2), transparent 24%),
    radial-gradient(circle at 68% 58%, rgba(255, 199, 107, 0.14), transparent 22%),
    radial-gradient(circle at 34% 62%, rgba(52, 226, 194, 0.12), transparent 20%),
    linear-gradient(180deg, rgba(6, 18, 21, 0.94), rgba(10, 24, 28, 0.988));
}

.intro-overlay__grid {
  background-image: linear-gradient(
      rgba(236, 247, 244, 0.045) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(236, 247, 244, 0.045) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: 0.9;
}

.intro-overlay__center {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  gap: 16px;
  text-align: center;
}

.intro-overlay__mark-wrap {
  position: relative;
  display: grid;
  place-items: center;
  width: 124px;
  height: 124px;
}

.intro-overlay__mark {
  width: 84px;
  height: 84px;
  filter: drop-shadow(0 22px 52px rgba(79, 216, 247, 0.28));
}

.intro-overlay__pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(233, 244, 241, 0.14);
}

.intro-overlay__title {
  color: $text-strong;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(22px, 4vw, 38px);
  font-weight: 700;
  letter-spacing: 0.18em;
}

.intro-overlay__subtitle {
  color: $text-muted;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}

.intro-overlay__door {
  position: absolute;
  top: -8%;
  bottom: -8%;
  width: 52%;
  background: linear-gradient(
    180deg,
    rgba(6, 18, 21, 0.985),
    rgba(14, 37, 42, 0.94)
  );
}

.intro-overlay__door--left {
  left: -2%;
}

.intro-overlay__door--right {
  right: -2%;
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: $grad-brand;
  transform-origin: left;
  transform: scaleX(0);
  z-index: 1000;
  transition: transform 0.1s linear;
}

.ambient-glow {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.42;
    will-change: transform;
  }

  &::before {
    width: 520px;
    height: 520px;
    top: -160px;
    left: -120px;
    background: radial-gradient(circle, rgba(52, 226, 194, 0.48), transparent 70%);
    animation: float 14s ease-in-out infinite;
  }

  &::after {
    width: 460px;
    height: 460px;
    bottom: -180px;
    right: -120px;
    background: radial-gradient(circle, rgba(255, 199, 107, 0.34), transparent 70%);
    animation: float 18s ease-in-out infinite reverse;
  }
}

.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: linear-gradient(
      rgba(236, 247, 244, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(236, 247, 244, 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at 50% 0%, black 35%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 35%, transparent 70%);
  opacity: 0.9;
}

.pointer-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  height: 360px;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(52, 226, 194, 0.18) 0%,
    rgba(79, 216, 247, 0.15) 24%,
    rgba(255, 199, 107, 0.09) 48%,
    transparent 72%
  );
  filter: blur(16px);
  transition: opacity 0.45s ease;
}

.page-content {
  position: relative;
  z-index: 1;
  padding: 2vw 3vh 100px;
}

.page-layout {
  max-width: 1200px;
  margin: auto;
}

@media (max-width: $bp-sm) {
  .ambient-glow::before {
    width: 320px;
    height: 320px;
  }
  .ambient-glow::after {
    width: 280px;
    height: 280px;
  }
}
</style>
