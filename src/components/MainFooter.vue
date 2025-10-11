<template>
  <div class="main-footer">
    <div class="footer-contact">
      <a href="mailto:annasismailmuhammad@gmail.com" class="contact-item">
        <Icon icon="ic:baseline-email" width="18px" />
        <span>annasismailmuhammad@gmail.com</span>
      </a>
    </div>
    <div class="footer-content">
      <span>Made with </span>
      <Icon icon="mdi:love" width="24px" class="heart-icon" />
      <span
        >by
        <span class="gradient-text footer-name"
          >Annas Ismail Muhammad</span
        ></span
      >
    </div>
    <div class="footer-year">© {{ currentYear }} All rights reserved</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'MainFooter',
  components: {
    Icon,
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style scoped>
.main-footer {
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(50, 52, 67, 0.9) 0%,
    rgba(30, 32, 47, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  padding: 25px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.main-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 246, 134, 0.5),
    rgba(76, 169, 255, 0.5),
    transparent
  );
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #d1d1d1;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.heart-icon {
  color: #ff6b9d;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(1.1);
  }
  20%,
  40% {
    transform: scale(1);
  }
}

.footer-name {
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: default;
}

.footer-year {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
}

.footer-contact {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #d1d1d1;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: rgba(59, 246, 134, 1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-contact {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 500px) {
  .footer-content {
    font-size: 12px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .footer-year {
    font-size: 11px;
  }

  .contact-item {
    font-size: 11px;
  }
}
</style>
