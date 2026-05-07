<template>
  <div class="tech-chip">
    <a :href="Skill.link" target="_blank" class="tech-link">
      <Icon :icon="Skill.icon" height="32px" />
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        class="glass-tooltip"
      >
        <span :style="styleFontTooltip">{{ Skill.name }}</span>
      </q-tooltip>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { Skill } from 'src/components/models';

export default defineComponent({
  name: 'ChipTechnology',
  props: {
    Skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,#2dd4bf 40%,#f4b860 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
    };
  },
  components: {
    Icon,
  },
});
</script>

<style scoped>
.tech-chip {
  background: rgba(233, 244, 241, 0.08);
  backdrop-filter: blur(15px);
  height: 52px;
  border-radius: 8px;
  display: flex;
  padding: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(233, 244, 241, 0.14);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.tech-chip::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(45, 212, 191, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.tech-chip:hover::before {
  left: 100%;
}

.tech-chip:hover {
  background: rgba(45, 212, 191, 0.18);
  border-color: rgba(45, 212, 191, 0.45);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 32px rgba(45, 212, 191, 0.22);
}

.tech-link {
  margin: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.tech-chip:hover .tech-link {
  transform: rotate(5deg);
}

.glass-tooltip {
  background: rgba(9, 24, 28, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
}
</style>
