<template>
  <header class="main-navbar" :class="{ scrolled: isScrolled }">
    <div class="logo" @click="navigateTo('/')">
      <img src="/icons/annas-monogram.svg" alt="Annas logo" class="logo-mark" />
      <span class="logo-name gradient-text">Annas</span>
    </div>

    <nav class="main-navigation">
      <div
        v-for="link in links"
        :key="link.path"
        class="nav-item"
        :class="{ 'on-page': route.path === link.path }"
        @click="navigateTo(link.path)"
      >
        {{ link.label }}
      </div>
    </nav>

    <div class="mobile-navigation">
      <burger-navbar :isOpen="isOpen" @click="isOpen = !isOpen" />
      <q-menu
        v-model="isOpen"
        transition-show="jump-down"
        transition-hide="jump-up"
        class="mobile-menu"
        id="menu-mobile-navigation"
      >
        <q-list class="mobile-menu-list">
          <q-item
            v-for="link in links"
            :key="link.path"
            clickable
            class="mobile-menu-item"
            :class="{ 'on-page': route.path === link.path }"
            @click="navigateTo(link.path)"
          >
            <q-item-section>{{ link.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BurgerNavbar from './BurgerNavbar.vue';
import { movePage } from '../functions/movePage';

export default defineComponent({
  name: 'MainNavbar',
  components: { BurgerNavbar },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isOpen = ref(false);
    const isScrolled = ref(false);

    const links = [
      { path: '/', label: 'Home' },
      { path: '/projects', label: 'Projects' },
      { path: '/experience', label: 'Experience' },
      { path: '/education', label: 'Education' },
    ];

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 12;
    };

    const navigateTo = (path: string) => {
      isOpen.value = false;
      movePage(router, route.path, path);
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { isOpen, isScrolled, links, navigateTo, route };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.main-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 8px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: background 0.3s $ease-soft, border-color 0.3s $ease-soft,
    backdrop-filter 0.3s $ease-soft, padding 0.3s $ease-soft;
}

.main-navbar.scrolled {
  padding: 12px 8px;
  background: rgba(7, 17, 19, 0.74);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-bottom-color: $border-subtle;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.3s $ease-emph;
}

.logo:hover {
  transform: translateY(-1px);
}

.logo-mark {
  display: block;
  width: 34px;
  height: 34px;
  border-radius: $r-md;
  filter: drop-shadow(0 8px 14px rgba(45, 212, 191, 0.32));
}

.logo-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.main-navigation {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-item {
  position: relative;
  color: $text-muted;
  cursor: pointer;
  padding: 9px 16px;
  border-radius: $r-md;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s $ease-soft, background 0.3s $ease-soft;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 2px;
  border-radius: 2px;
  background: $grad-line;
  transition: transform 0.3s $ease-emph;
}

.nav-item:hover {
  color: $text-strong;
  background: rgba(233, 244, 241, 0.05);
}

.nav-item:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.on-page {
  color: $text-strong !important;
  font-weight: 600 !important;
  background: rgba(45, 212, 191, 0.10);
}

.on-page::after {
  transform: translateX(-50%) scaleX(1) !important;
}

.mobile-navigation {
  display: none;
}

.mobile-menu-list {
  background: rgba(7, 17, 19, 0.96);
  backdrop-filter: blur(16px);
  border: 1px solid $border-subtle;
  border-radius: $r-md;
  padding: 6px;
  min-width: 180px;
}

.mobile-menu-item {
  border-radius: $r-sm;
  color: $text-base;
  font-size: 14px;
  transition: all 0.25s $ease-soft;
}

.mobile-menu-item:hover {
  color: $text-strong;
  background: rgba(45, 212, 191, 0.08);
}

.mobile-menu-item.on-page {
  color: $text-strong !important;
  background: rgba(45, 212, 191, 0.16) !important;
}

@media (max-width: $bp-sm) {
  .mobile-navigation {
    display: block;
  }
  .main-navigation {
    display: none !important;
  }
  .main-navbar {
    padding: 14px 8px;
  }
}
</style>
