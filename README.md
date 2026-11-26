# Pocket Ballroom — Official Website (`pocketballroom.com`)

Static marketing site, Privacy Policy (`/privacy/`), Support guide (`/support/`), and Brand/Social Asset Kit for **Pocket Ballroom** (Android + Wear OS).

Hosted for **$0/month** on **GitHub Pages** with automatic HTTPS via Let's Encrypt.

## Quick Launch Switches (`config.js`)

1. **When Google Play goes live:** Open [`config.js`](./config.js) and paste your Play Store URL into `GOOGLE_PLAY_URL`. All primary CTAs automatically switch from *"Join Android & Wear OS Beta"* to *"Get it on Google Play"*.
2. **Collect Waitlist Emails on-page (optional, free):** Create a free form at [formspree.io](https://formspree.io) and paste the endpoint URL into `WAITLIST_ENDPOINT` in [`config.js`](./config.js). Until then, form submissions gracefully open a pre-filled email to `hello@pocketballroom.com`.

## Porkbun DNS Setup (Pointing `pocketballroom.com` to GitHub Pages)

In Porkbun → **Domain Management** → `pocketballroom.com` → **DNS Records**, delete any default ALIAS/A/CNAME parking records and add:

| Type | Host | Answer |
| --- | --- | --- |
| `A` | *(blank / apex)* | `185.199.108.153` |
| `A` | *(blank / apex)* | `185.199.109.153` |
| `A` | *(blank / apex)* | `185.199.110.153` |
| `A` | *(blank / apex)* | `185.199.111.153` |
| `CNAME` | `www` | `arpitguglani.github.io` |

Then in GitHub → **Settings → Pages**, verify **Enforce HTTPS** is checked once DNS propagates (~5–15 minutes).

## Included Brand & Social Assets

- `assets/emblem.svg` & `assets/emblem-mono.svg` — Beat 1 Pulse Emblem vectors
- `assets/og-card.png` — `1200 × 630` Open Graph social preview card
- `assets/social/avatar-1024.png` — `1024 × 1024` Social Avatar / App Store Icon
- `assets/social/avatar-512.png` — `512 × 512` Google Play Store Icon
- `assets/social/banner-youtube-2560x1440.png` — YouTube Channel Banner
- `assets/social/banner-x-1500x500.png` — X / Twitter Header Banner
- `social-kit/SOCIAL_LOCKDOWN_GUIDE.md` — Step-by-step `@pocketballroom` handle lockdown kit
