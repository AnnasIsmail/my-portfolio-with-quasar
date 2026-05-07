<template>
  <div class="company-logo-container">
    <div class="logo-wrapper" :class="logoClass">
      <img
        :src="logoSrc"
        :alt="altText"
        class="company-logo"
        :style="logoStyle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompanyLogo',
  props: {
    company: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) =>
        ['small', 'medium', 'large'].includes(value),
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value: string) =>
        ['default', 'card', 'timeline'].includes(value),
    },
  },
  computed: {
    logoSrc() {
      try {
        // Try to load the specific logo for the company
        const logoMap: Record<string, string> = {
          binus: require('../assets/logos/binus_it_div.jpg'),
          'binus-university': require('../assets/logos/binus-university.jpg'),
          'master-graduate': require('../assets/logos/logo-master-graduate.jpg'),
          telkom: require('../assets/logos/telkom_logo.jpg'),
          'atr-bpn': require('../assets/logos/ATR-BPN-logo.jpg'),
          ptma: require('../assets/logos/PTMA_logo.png'),
        };

        return (
          logoMap[this.company] ||
          require('../assets/logos/placeholder-logo.svg')
        );
      } catch (error) {
        // Fallback to placeholder if logo not found
        return require('../assets/logos/placeholder-logo.svg');
      }
    },
    altText() {
      const companyNames: Record<string, string> = {
        binus: 'IT Division Bina Nusantara',
        'binus-university': 'Bina Nusantara University',
        'master-graduate': 'Master Graduate',
        telkom: 'Telkom Indonesia',
        'atr-bpn': 'Kementerian ATR/BPN',
        ptma: 'PTMA',
        default: 'Company Logo',
      };

      return (
        companyNames[this.company.toLowerCase()] || companyNames['default']
      );
    },
    logoClass() {
      return {
        [`logo-${this.size}`]: true,
        [`logo-${this.variant}`]: true,
      };
    },
    logoStyle() {
      const sizeMap = {
        small: { width: '40px', height: '40px' },
        medium: { width: '60px', height: '60px' },
        large: { width: '80px', height: '80px' },
      };

      return sizeMap[this.size as keyof typeof sizeMap];
    },
  },
});
</script>

<style scoped>
.company-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.logo-wrapper:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(45, 212, 191, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(45, 212, 191, 0.15);
}

.company-logo {
  object-fit: contain;
  filter: brightness(0.9);
  transition: all 0.3s ease;
  border-radius: 8px;
}

.logo-wrapper:hover .company-logo {
  filter: brightness(1.1);
  transform: scale(1.05);
}

/* Size variants */
.logo-small {
  padding: 8px;
}

.logo-medium {
  padding: 12px;
}

.logo-large {
  padding: 16px;
}

/* Style variants */
.logo-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
}

.logo-timeline {
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.2);
}

/* Education page specific styling */
.logo-card .company-logo,
.logo-timeline .company-logo {
  border-radius: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .logo-small {
    padding: 6px;
  }

  .logo-medium {
    padding: 10px;
  }

  .logo-large {
    padding: 14px;
  }

  .company-logo {
    border-radius: 6px;
  }
}
</style>
