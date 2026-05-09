<template>
  <q-page class="experience-page">
    <header class="page-header" data-reveal>
      <div class="eyebrow">Career Path</div>
      <h1 class="section-title">
        <span class="gradient-text">Professional Experience</span>
      </h1>
      <p class="page-description">
        My professional journey in software development and enterprise
        application development.
      </p>
    </header>

    <div class="experience-timeline">
      <div
        v-for="(experience, index) in experiences"
        :key="experience.id"
        class="experience-item"
        :class="{ reverse: index % 2 === 1 }"
        data-reveal
        :data-reveal-delay="(index % 3) + 1"
      >
        <div class="experience-card">
          <div class="experience-header">
            <div class="company-info">
              <div class="company-name">{{ experience.company }}</div>
              <div class="position">{{ experience.position }}</div>
              <div class="meta">
                <span class="duration">
                  <Icon icon="mdi:calendar-blank-outline" height="13px" />
                  {{ experience.duration }}
                </span>
                <span class="location">
                  <Icon icon="mdi:map-marker-outline" height="13px" />
                  {{ experience.location }}
                </span>
              </div>
            </div>
            <div class="company-logo">
              <CompanyLogo
                :company="experience.companyKey"
                size="medium"
                variant="card"
              />
            </div>
          </div>
          <div class="experience-content">
            <p class="description">{{ experience.description }}</p>
            <div class="achievements">
              <div class="block-title">Key Achievements</div>
              <ul class="achievements-list">
                <li
                  v-for="achievement in experience.achievements"
                  :key="achievement"
                >
                  {{ achievement }}
                </li>
              </ul>
            </div>
            <div class="technologies">
              <div class="block-title">Technologies</div>
              <div class="tech-tags">
                <span
                  v-for="tech in experience.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import CompanyLogo from '../components/CompanyLogo.vue';
import experiences from '../data/Experience';

export default defineComponent({
  name: 'ExperiencePage',
  components: { CompanyLogo, Icon },
  setup() {
    return { experiences };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.experience-page {
  height: auto;
  overflow: visible;
  padding: 36px 8px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 56px;
}

.eyebrow {
  display: inline-block;
  padding: 4px 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $brand-amber;
  background: rgba(244, 184, 96, 0.10);
  border: 1px solid rgba(244, 184, 96, 0.24);
  border-radius: $r-pill;
  margin-bottom: 18px;
}

.section-title {
  position: relative;
  display: inline-block;
  margin: 0 0 16px;
  font-size: clamp(32px, 5vw, 50px);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: $grad-brand;
  border-radius: $r-pill;
}

.page-description {
  color: $text-base;
  max-width: 620px;
  margin: 24px auto 0;
  line-height: 1.7;
  font-size: 15px;
}

.experience-timeline {
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(45, 212, 191, 0.5),
    rgba(244, 184, 96, 0.4) 60%,
    rgba(244, 184, 96, 0.05)
  );
  transform: translateX(-50%);
}

.experience-item {
  position: relative;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: $grad-brand;
  border-radius: 50%;
  border: 4px solid $bg-base;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.25);
  z-index: 2;
}

.experience-card {
  width: 46%;
  background: $surface-1;
  backdrop-filter: blur(12px);
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 28px;
  transition: transform 0.4s $ease-emph, border-color 0.4s $ease-soft,
    background 0.4s $ease-soft, box-shadow 0.4s $ease-soft;
}

.experience-card:hover {
  background: $surface-2;
  border-color: $border-accent;
  transform: translateY(-5px);
  box-shadow: 0 22px 48px rgba(45, 212, 191, 0.14);
}

.experience-item:nth-child(odd) .experience-card {
  margin-left: auto;
}

.experience-item:nth-child(even) .experience-card {
  margin-right: auto;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}

.company-info {
  flex: 1;
  min-width: 0;
}

.company-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 4px;
  line-height: 1.3;
}

.position {
  font-size: 0.95rem;
  font-weight: 600;
  color: $brand-teal;
  margin-bottom: 8px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12.5px;
  color: $text-muted;
}

.meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.experience-content {
  color: $text-base;
}

.description {
  margin: 0 0 18px;
  line-height: 1.65;
  font-size: 14px;
}

.block-title {
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.achievements {
  margin-bottom: 18px;
}

.achievements-list {
  margin: 0;
  padding-left: 18px;
}

.achievements-list li {
  margin-bottom: 6px;
  line-height: 1.55;
  color: $text-base;
  font-size: 13.5px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  background: rgba(45, 212, 191, 0.10);
  color: $brand-teal;
  padding: 3px 10px;
  border-radius: $r-pill;
  font-size: 11.5px;
  font-weight: 600;
  border: 1px solid rgba(45, 212, 191, 0.22);
  transition: all 0.3s $ease-soft;
}

.tech-tag:hover {
  background: rgba(45, 212, 191, 0.20);
  border-color: $border-accent;
  transform: translateY(-1px);
}

@media (max-width: $bp-md) {
  .experience-timeline::before {
    left: 18px;
  }

  .experience-item::before {
    left: 18px;
  }

  .experience-card {
    width: calc(100% - 50px);
    margin-left: 50px !important;
    margin-right: 0 !important;
  }

  .experience-header {
    flex-direction: column;
  }
}

@media (max-width: $bp-xs) {
  .experience-card {
    padding: 20px;
  }
}
</style>
