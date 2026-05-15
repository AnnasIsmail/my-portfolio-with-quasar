<template>
  <a
    :href="Skill.link"
    target="_blank"
    rel="noopener noreferrer"
    class="tech-chip"
    :aria-label="Skill.name"
  >
    <Icon :icon="Skill.icon" height="30px" />
    <q-tooltip
      transition-show="scale"
      transition-hide="scale"
      class="glass-tooltip"
    >
      <span class="tooltip-label">{{ Skill.name }}</span>
    </q-tooltip>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import type { Skill } from '../components/models';

export default defineComponent({
  name: 'ChipTechnology',
  components: { Icon },
  props: {
    Skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.tech-chip {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 6px;
  border-radius: $r-md;
  background: $surface-glass;
  border: 1px solid $border-soft;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  transition: transform 0.35s $ease-emph, border-color 0.3s $ease-soft,
    background 0.3s $ease-soft, box-shadow 0.3s $ease-soft;
}

.tech-chip::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(45, 212, 191, 0.18) 50%,
    transparent 65%
  );
  transform: translateX(-100%);
  transition: transform 0.6s $ease-emph;
}

.tech-chip:hover::before {
  transform: translateX(100%);
}

.tech-chip:hover {
  background: rgba(45, 212, 191, 0.16);
  border-color: $border-accent;
  transform: translateY(-3px) scale(1.05) rotate(-1deg);
  box-shadow: 0 14px 32px rgba(45, 212, 191, 0.22);
}

.glass-tooltip {
  background: rgba(7, 17, 19, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid $border-subtle;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: $r-sm;
}

.tooltip-label {
  color: $text-strong;
  text-shadow: 0 1px 8px rgba(5, 13, 16, 0.6);
}
</style>
