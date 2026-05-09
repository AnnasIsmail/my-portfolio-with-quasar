<template>
  <div class="page-shell">
    <div class="ambient-glow" aria-hidden="true"></div>
    <div class="grid-overlay" aria-hidden="true"></div>
    <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>

    <div class="page-content">
      <q-layout class="page-layout">
        <main-navbar />
        <q-page-container>
          <router-view v-slot="{ Component }">
            <transition name="page-fade" mode="out-in">
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
    const scrollProgress = ref(0);
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0;
    };

    const observeReveals = () => {
      if (!observer) return;
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
        .forEach((el) => observer && observer.observe(el));
    };

    onMounted(() => {
      $q.dark.set(true);

      window.addEventListener('scroll', handleScroll, { passive: true });
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
      observer?.disconnect();
      mutationObserver?.disconnect();
    });

    return { scrollProgress };
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
    background: radial-gradient(circle, rgba(45, 212, 191, 0.55), transparent 70%);
    animation: float 14s ease-in-out infinite;
  }

  &::after {
    width: 460px;
    height: 460px;
    bottom: -180px;
    right: -120px;
    background: radial-gradient(circle, rgba(244, 184, 96, 0.42), transparent 70%);
    animation: float 18s ease-in-out infinite reverse;
  }
}

.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: linear-gradient(
      rgba(233, 244, 241, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(233, 244, 241, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at 50% 0%, black 35%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 35%, transparent 70%);
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
