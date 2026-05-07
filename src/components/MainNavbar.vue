<template>
  <div class="main-navbar">
    <div class="text-h5 text-weight-bold logo" @click="movePage('/', $route)">
      <span class="gradient-text">Annas</span>
    </div>
    <div
      class="text-subtitle1 text-weight-light Main-Navigation"
      style="
        display: flex;
        gap: 30px;
        vertical-align: baseline;
        padding-top: 4px;
      "
    >
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/' }"
        @click="movePage('/', this)"
      >
        Home
      </div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/projects' }"
        @click="movePage('/projects', this)"
      >
        Projects
      </div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/experience' }"
        @click="movePage('/experience', this)"
      >
        Experience
      </div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/education' }"
        @click="movePage('/education', this)"
      >
        Education
      </div>
    </div>
    <div class="Mobile-Navigation">
      <burger-navbar :isOpen="isOpen" @click="isOpen = !isOpen" />
      <q-menu
        @show="isOpen = true"
        @hide="isOpen = false"
        :visible="isOpen"
        transition-show="rotate"
        transition-hide="rotate"
        style="right: 25px !important"
        id="menu-mobile-navigation"
      >
        <q-list style="min-width: 150px">
          <q-item clickable>
            <q-item-section
              @click="movePage('/', this)"
              :class="{ 'on-page': $route.path === '/' }"
              >Home</q-item-section
            >
          </q-item>
          <q-item clickable>
            <q-item-section
              @click="movePage('/projects', this)"
              :class="{ 'on-page': $route.path === '/projects' }"
              >Projects</q-item-section
            >
          </q-item>
          <q-item clickable>
            <q-item-section
              @click="movePage('/experience', this)"
              :class="{ 'on-page': $route.path === '/experience' }"
              >Experience</q-item-section
            >
          </q-item>
          <q-item clickable>
            <q-item-section
              @click="movePage('/education', this)"
              :class="{ 'on-page': $route.path === '/education' }"
              >Education</q-item-section
            >
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BurgerNavbar from './BurgerNavbar.vue';
import { movePage } from '../functions/movePage';

export default defineComponent({
  components: { BurgerNavbar },
  name: 'MainNavbar',
  data() {
    return { isOpen: false };
  },
  methods: {
    movePage,
  },
});
</script>

<style scoped>
.main-navbar {
  display: flex;
  padding: 20px 0;
  padding-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(233, 244, 241, 0.1);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.logo {
  letter-spacing: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.child-navbar {
  color: #c9d3d0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px 16px;
  border-radius: 8px;
}

.child-navbar::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, #2dd4bf, #f4b860);
  transition: transform 0.3s ease;
}

.child-navbar:hover {
  color: #ffffff;
  background: rgba(233, 244, 241, 0.06);
}

.child-navbar:hover::before {
  transform: translateX(-50%) scaleX(1);
}

.on-page {
  color: white !important;
  font-weight: 600 !important;
  background: rgba(45, 212, 191, 0.12);
}

.on-page::before {
  transform: translateX(-50%) scaleX(1) !important;
}

.Main-Navigation {
  display: flex;
  gap: 30px;
  align-items: center;
  padding-top: 4px;
}

.Mobile-Navigation {
  display: none;
}

@media (max-width: 500px) {
  .Mobile-Navigation {
    display: block;
  }
  .Main-Navigation {
    display: none !important;
  }
  .main-navbar {
    padding: 15px 0;
  }
}
</style>
