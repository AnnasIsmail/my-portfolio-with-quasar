<template>
  <footer class="main-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo-mark">A</span>
          <div>
            <div class="brand-name gradient-text">Annas Ismail Muhammad</div>
            <div class="brand-tag">Full Stack Developer in Jakarta, ID</div>
          </div>
        </div>

        <div class="footer-links">
          <a
            v-for="item in socials"
            :key="item.label"
            :href="item.href"
            :target="item.external ? '_blank' : '_self'"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="footer-link"
            :aria-label="item.label"
          >
            <Icon :icon="item.icon" width="18px" />
            <span>{{ item.label }}</span>
          </a>
        </div>
      </div>

      <div class="footer-divider" aria-hidden="true"></div>

      <div class="footer-bottom">
        <div class="made-with">
          <span>Crafted with</span>
          <Icon icon="mdi:heart" width="14px" class="heart-icon" />
          <span>using Vue and Quasar</span>
        </div>
        <div class="copyright">
          (c) {{ currentYear }} Annas Ismail Muhammad. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'MainFooter',
  components: { Icon },
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    const socials = [
      {
        label: 'Email',
        href: 'mailto:annasismailmuhammad@gmail.com',
        icon: 'mdi:email-outline',
        external: false,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/AnnasIsmail',
        icon: 'mdi:github',
        external: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/annasismail/',
        icon: 'mdi:linkedin',
        external: true,
      },
    ];
    return { currentYear, socials };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.main-footer {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(7, 17, 19, 0) 0%,
    rgba(7, 17, 19, 0.85) 30%,
    rgba(13, 34, 40, 0.96) 100%
  );
  backdrop-filter: blur(12px);
  border-top: 1px solid $border-subtle;
  padding: 36px 24px 28px;
  overflow: hidden;
}

.main-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, $brand-teal, $brand-amber, transparent);
  opacity: 0.45;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: $r-md;
  background: $grad-brand;
  color: #08171a;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 800;
  font-size: 18px;
  box-shadow: 0 8px 22px rgba(45, 212, 191, 0.30);
}

.brand-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.brand-tag {
  margin-top: 2px;
  color: $text-muted;
  font-size: 12px;
}

.footer-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  color: $text-base;
  font-size: 13px;
  font-weight: 500;
  border-radius: $r-md;
  border: 1px solid $border-subtle;
  background: $surface-glass;
  text-decoration: none;
  transition: all 0.3s $ease-emph;
}

.footer-link:hover {
  color: $text-strong;
  border-color: $border-accent;
  background: rgba(45, 212, 191, 0.10);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  margin: 22px 0 18px;
  background: linear-gradient(90deg, transparent, $border-subtle, transparent);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: $text-muted;
  font-size: 12px;
}

.made-with {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.heart-icon {
  color: #ff6b9d;
  animation: heartbeat 1.6s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  20%, 60% { transform: scale(1.18); }
  40%, 80% { transform: scale(0.95); }
}

.copyright {
  color: $text-soft;
  font-size: 11.5px;
}

@media (max-width: $bp-sm) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
