# Company Logos

This directory contains company logos used in the portfolio.

## Required Logos:

### 1. Bina Nusantara University

- **File**: `binus-logo.png`
- **Usage**: Experience page, Education page
- **Size**: 200x200px (recommended)
- **Format**: PNG with transparent background

### 2. Telkom Indonesia

- **File**: `telkom-logo.png`
- **Usage**: Experience page
- **Size**: 200x200px (recommended)
- **Format**: PNG with transparent background

### 3. Kementerian ATR/BPN

- **File**: `atr-bpn-logo.png`
- **Usage**: Experience page
- **Size**: 200x200px (recommended)
- **Format**: PNG with transparent background

### 4. PTMA (Perguruan Tinggi Muhammadiyah dan 'Aisyiyah)

- **File**: `ptma-logo.png`
- **Usage**: Experience page
- **Size**: 200x200px (recommended)
- **Format**: PNG with transparent background

### 5. Default Company Logo

- **File**: `default-company.png`
- **Usage**: Fallback for missing logos
- **Size**: 200x200px (recommended)
- **Format**: PNG with transparent background

## Logo Sources:

- **Binus**: https://binus.ac.id/
- **Telkom**: https://www.telkom.co.id/
- **ATR/BPN**: https://www.atrbpn.go.id/
- **PTMA**: https://ptma.or.id/

## Usage in Components:

```vue
<CompanyLogo company="binus" size="medium" variant="card" />
<CompanyLogo company="telkom" size="large" variant="timeline" />
<CompanyLogo company="atr-bpn" size="small" variant="default" />
```
