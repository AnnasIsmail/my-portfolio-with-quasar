<template>
  <article class="skill-detail">
    <div class="skill-icon">
      <Icon :icon="Skill.icon" width="42px" />
    </div>
    <div class="skill-content">
      <a :href="Skill.link" target="_blank" class="skill-name">
        {{ Skill.name }}
      </a>
      <div class="skill-type">{{ Skill.type }}</div>
      <p>{{ Skill.description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { Skill } from 'src/components/models';

export default defineComponent({
  name: 'DetailSkill',
  props: {
    Skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
  components: {
    Icon,
  },
});
</script>

<style scoped>
.skill-detail {
  display: flex;
  gap: 18px;
  min-height: 110px;
  padding: 20px;
  border: 1px solid rgba(233, 244, 241, 0.12);
  border-radius: 8px;
  background: rgba(9, 24, 28, 0.72);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: linear-gradient(135deg, #2dd4bf, #f4b860);
}

.skill-content {
  min-width: 0;
}

.skill-name {
  color: #f8faf8;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
}

.skill-type {
  margin-top: 2px;
  color: #f4b860;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.skill-content p {
  margin: 8px 0 0;
  color: #c9d3d0;
  line-height: 1.6;
}
</style>
