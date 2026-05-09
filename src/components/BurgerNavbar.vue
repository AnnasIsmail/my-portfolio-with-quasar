<template>
  <button
    type="button"
    class="menu-btn"
    :class="{ open: isOpen }"
    aria-label="Toggle navigation menu"
    :aria-expanded="isOpen"
  >
    <span class="menu-btn__burger" aria-hidden="true"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BurgerNavbar',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.menu-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: $r-md;
  border: 1px solid $border-subtle;
  background: $surface-glass;
  cursor: pointer;
  transition: background 0.3s $ease-soft, border-color 0.3s $ease-soft;
}

.menu-btn:hover {
  background: rgba(45, 212, 191, 0.10);
  border-color: $border-accent;
}

.menu-btn__burger {
  position: relative;
  width: 22px;
  height: 2.5px;
  background: $text-strong;
  border-radius: 2px;
  transition: background 0.4s $ease-soft, transform 0.4s $ease-emph;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 22px;
  height: 2.5px;
  background: $text-strong;
  border-radius: 2px;
  transition: transform 0.4s $ease-emph, top 0.4s $ease-emph;
}

.menu-btn__burger::before {
  top: -7px;
}

.menu-btn__burger::after {
  top: 7px;
}

.menu-btn.open .menu-btn__burger {
  background: transparent;
}

.menu-btn.open .menu-btn__burger::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-btn.open .menu-btn__burger::after {
  top: 0;
  transform: rotate(-45deg);
}
</style>
