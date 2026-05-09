<template>
  <div class="company-logo-container">
    <div class="logo-wrapper" :class="logoClass">
      <img :src="logoSrc" :alt="altText" class="company-logo" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

const logoMap: Record<string, string> = {
  'atr-bpn': require('../assets/logos/ATR-BPN-logo.jpg'),
  binus: require('../assets/logos/binus_it_div.jpg'),
  'binus-university': require('../assets/logos/binus-university.jpg'),
  'master-graduate': require('../assets/logos/logo-master-graduate.jpg'),
  ptma: require('../assets/logos/PTMA_logo.png'),
  telkom: require('../assets/logos/telkom_logo.jpg'),
};

const companyNames: Record<string, string> = {
  'atr-bpn': 'Kementerian ATR/BPN',
  binus: 'IT Division Bina Nusantara',
  'binus-university': 'Bina Nusantara University',
  'master-graduate': 'Master Graduate',
  ptma: 'PTMA',
  telkom: 'Telkom Indonesia',
};

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
  setup(props) {
    const normalizedCompany = computed(() => props.company.toLowerCase());
    const logoSrc = computed(
      () =>
        logoMap[normalizedCompany.value] ||
        require('../assets/logos/placeholder-logo.svg')
    );
    const altText = computed(
      () => companyNames[normalizedCompany.value] || 'Company Logo'
    );
    const logoClass = computed(() => ({
      [`logo-${props.size}`]: true,
      [`logo-${props.variant}`]: true,
    }));

    return { altText, logoClass, logoSrc };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.company-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $r-md;
  background: $surface-glass;
  border: 1px solid $border-subtle;
  transition: transform 0.3s $ease-emph, border-color 0.3s $ease-soft,
    background 0.3s $ease-soft, box-shadow 0.3s $ease-soft;
  overflow: hidden;
}

.logo-wrapper:hover {
  background: rgba(45, 212, 191, 0.1);
  border-color: $border-accent;
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(45, 212, 191, 0.14);
}

.company-logo {
  object-fit: contain;
  transition: transform 0.3s $ease-emph, filter 0.3s $ease-soft;
  border-radius: $r-sm;
}

.logo-wrapper:hover .company-logo {
  filter: brightness(1.08);
  transform: scale(1.05);
}

.logo-small .company-logo {
  width: 40px;
  height: 40px;
}

.logo-medium .company-logo {
  width: 60px;
  height: 60px;
}

.logo-large .company-logo {
  width: 80px;
  height: 80px;
}

.logo-small {
  padding: 8px;
}

.logo-medium {
  padding: 12px;
}

.logo-large {
  padding: 16px;
}

.logo-card {
  background: rgba(233, 244, 241, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.logo-timeline {
  background: rgba(45, 212, 191, 0.1);
  border-color: rgba(45, 212, 191, 0.18);
}

.logo-card .company-logo,
.logo-timeline .company-logo {
  border-radius: $r-sm;
}

@media (max-width: $bp-sm) {
  .logo-small {
    padding: 6px;
  }

  .logo-medium {
    padding: 10px;
  }

  .logo-large {
    padding: 14px;
  }
}
</style>
