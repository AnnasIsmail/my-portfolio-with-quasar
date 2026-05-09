<template>
  <q-page class="education-page">
    <header class="page-header" data-reveal>
      <div class="eyebrow">Academic Track</div>
      <h1 class="section-title">
        <span class="gradient-text">Education & Certifications</span>
      </h1>
      <p class="page-description">
        My academic journey, professional certifications, and research
        contributions.
      </p>
    </header>

    <div class="education-content">
      <!-- Education -->
      <section class="block-section" data-reveal>
        <div class="block-header">
          <Icon icon="mdi:school-outline" width="22px" />
          <span>Academic Education</span>
        </div>
        <div class="education-timeline">
          <div
            v-for="(education, idx) in educations"
            :key="education.id"
            class="education-item"
            data-reveal
            :data-reveal-delay="idx + 1"
          >
            <div class="education-card">
              <div class="education-header">
                <div class="degree-info">
                  <div class="degree-name">{{ education.degree }}</div>
                  <div class="university">{{ education.university }}</div>
                  <div class="meta">
                    <span class="duration">
                      <Icon icon="mdi:calendar-blank-outline" height="13px" />
                      {{ education.duration }}
                    </span>
                    <span class="gpa">
                      <Icon icon="mdi:star-outline" height="13px" />
                      GPA: {{ education.gpa }}
                    </span>
                    <span class="location">
                      <Icon icon="mdi:map-marker-outline" height="13px" />
                      {{ education.location }}
                    </span>
                  </div>
                </div>
                <div class="degree-icon">
                  <CompanyLogo
                    :company="education.companyKey"
                    size="large"
                    variant="card"
                  />
                </div>
              </div>
              <div class="education-content-details">
                <p class="description">{{ education.description }}</p>
                <div v-if="education.achievements" class="achievements">
                  <div class="block-title">Key Achievements</div>
                  <ul class="achievements-list">
                    <li
                      v-for="achievement in education.achievements"
                      :key="achievement"
                    >
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="block-section" data-reveal>
        <div class="block-header">
          <Icon icon="mdi:certificate-outline" width="22px" />
          <span>Professional Certifications</span>
        </div>
        <div class="certifications-grid">
          <div
            v-for="(cert, idx) in certifications"
            :key="cert.id"
            class="certification-card"
            data-reveal
            :data-reveal-delay="idx + 1"
          >
            <div class="cert-header">
              <div class="cert-icon">
                <Icon :icon="cert.icon" width="32px" />
              </div>
              <div class="cert-info">
                <div class="cert-name">{{ cert.name }}</div>
                <div class="cert-issuer">{{ cert.issuer }}</div>
                <div class="cert-date">{{ cert.date }}</div>
              </div>
            </div>
            <p class="cert-description">{{ cert.description }}</p>
          </div>
        </div>
      </section>

      <!-- Research -->
      <section class="block-section" data-reveal>
        <div class="block-header">
          <Icon icon="mdi:flask-outline" width="22px" />
          <span>Research & Publications</span>
        </div>
        <div class="publication-card">
          <div class="publication-header">
            <div class="publication-title">
              "{{ publication.title }}"
            </div>
            <div class="publication-status">
              <Icon icon="mdi:trophy-outline" height="14px" />
              {{ publication.status }}
            </div>
          </div>
          <div class="publication-details">
            <div class="publication-methods">
              <strong>Methods:</strong> {{ publication.methods }}
            </div>
            <p class="publication-description">
              {{ publication.description }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import CompanyLogo from '../components/CompanyLogo.vue';
import {
  certifications,
  educations,
  publication,
} from '../data/Education';

export default defineComponent({
  name: 'EducationPage',
  components: { Icon, CompanyLogo },
  setup() {
    return { educations, certifications, publication };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.education-page {
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
  font-size: clamp(30px, 5vw, 48px);
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

.education-content {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.block-section {
  background: $surface-glass;
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 32px;
  backdrop-filter: blur(10px);
}

.block-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid $border-subtle;
}

.block-header > svg {
  color: $brand-teal;
}

// ---------- Education timeline ----------
.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.education-item {
  position: relative;
}

.education-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 22px;
  top: 80px;
  bottom: -28px;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(45, 212, 191, 0.4),
    rgba(244, 184, 96, 0.2)
  );
}

.education-card {
  background: $surface-1;
  backdrop-filter: blur(10px);
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 28px;
  margin-left: 56px;
  position: relative;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
}

.education-card::before {
  content: '';
  position: absolute;
  left: -56px;
  top: 28px;
  width: 16px;
  height: 16px;
  background: $grad-brand;
  border-radius: 50%;
  border: 4px solid $bg-base;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.25);
}

.education-card:hover {
  background: $surface-2;
  border-color: $border-accent;
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(45, 212, 191, 0.12);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}

.degree-info {
  flex: 1;
  min-width: 0;
}

.degree-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 6px;
}

.university {
  font-size: 1rem;
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

.gpa {
  color: $brand-amber;
  font-weight: 600;
}

.education-content-details {
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

.achievements-list {
  margin: 0;
  padding-left: 18px;
}

.achievements-list li {
  margin-bottom: 6px;
  line-height: 1.6;
  color: $text-base;
  font-size: 13.5px;
}

// ---------- Certifications ----------
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.certification-card {
  background: $surface-1;
  backdrop-filter: blur(10px);
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 22px;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
}

.certification-card:hover {
  background: $surface-2;
  border-color: $border-accent;
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(45, 212, 191, 0.12);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

.cert-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: linear-gradient(
    135deg,
    rgba(45, 212, 191, 0.18),
    rgba(244, 184, 96, 0.12)
  );
  border-radius: $r-md;
  border: 1px solid $border-subtle;
  color: $brand-teal;
  flex-shrink: 0;
}

.cert-info {
  flex: 1;
  min-width: 0;
}

.cert-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 4px;
  line-height: 1.3;
}

.cert-issuer {
  font-size: 0.85rem;
  color: $brand-teal;
  font-weight: 600;
  margin-bottom: 2px;
}

.cert-date {
  font-size: 0.8rem;
  color: $text-muted;
}

.cert-description {
  margin: 0;
  color: $text-base;
  line-height: 1.55;
  font-size: 13.5px;
}

// ---------- Publication ----------
.publication-card {
  background: $surface-1;
  backdrop-filter: blur(10px);
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 28px;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
}

.publication-card:hover {
  background: $surface-2;
  border-color: $border-accent;
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(45, 212, 191, 0.12);
}

.publication-header {
  margin-bottom: 18px;
}

.publication-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 10px;
  line-height: 1.4;
}

.publication-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: $brand-amber;
  font-weight: 600;
  padding: 4px 12px;
  background: rgba(244, 184, 96, 0.10);
  border: 1px solid rgba(244, 184, 96, 0.24);
  border-radius: $r-pill;
}

.publication-details {
  color: $text-base;
}

.publication-methods {
  margin-bottom: 12px;
  font-size: 14px;
  color: $text-base;
}

.publication-methods strong {
  color: $text-strong;
}

.publication-description {
  margin: 0;
  line-height: 1.65;
  font-size: 14px;
}

@media (max-width: $bp-md) {
  .block-section {
    padding: 24px;
  }

  .education-card {
    margin-left: 36px;
    padding: 22px;
  }

  .education-card::before {
    left: -36px;
  }

  .education-item:not(:last-child)::after {
    left: 14px;
  }

  .education-header {
    flex-direction: column;
  }
}

@media (max-width: $bp-xs) {
  .education-card {
    margin-left: 28px;
    padding: 18px;
  }

  .education-card::before {
    left: -28px;
    width: 13px;
    height: 13px;
  }

  .education-item:not(:last-child)::after {
    left: 10px;
  }
}
</style>



