# Pocket Ballroom — Brand Playbook

**Version:** `2.0` (Synced to **Pocket Ballroom `v1.7.0`** — Phone `versionCode = 15`, Wear `versionCode = 10` — and live [`pocketballroom.com`](https://pocketballroom.com))  
**Purpose:** Single source of truth for brand strategy, visual identity, verbal voice, product UX principles, marketing website ([`pocketballroom.com`](https://pocketballroom.com)), and Google Play / Apple App Store listings.  
**Grounded in:** `Theme.kt`, `WearTheme.kt`, `ic_launcher_foreground.xml`, `PartyListenScreen.kt`, `WearBeatCoachScreen.kt`, and [`arpitguglani/pocketballroom-web`](https://github.com/arpitguglani/pocketballroom-web).

---

## 1. Brand Foundation & Strategy

### 1.1 The Core Truth

Every Friday night, thousands of beginner social ballroom dancers finish their group class feeling energized—and then freeze the moment the social party starts. A song comes on, the lights are dim, experienced dancers glide onto the floor, and beginners are stuck asking three silent questions:

1. ***"What dance is this?"***
2. ***"Which 5 moves do I actually know for it?"***
3. ***"Where is Beat 1?"***

**Pocket Ballroom** exists to dissolve that 5-second hesitation on the edge of the dance floor—quietly, discreetly, and with warmth.

### 1.2 Brand North Star

- **Mission:** Turn sideline hesitation into confident first steps for social ballroom dancers—without pulling them out of the moment.
- **Vision:** Become the trusted pocket-and-wrist companion at every Friday-night studio social, helping beginners stay on the floor longer and fall in love with social dancing.
- **Brand Promise:** *Know the dance, remember your steps, and feel the beat—in 5 seconds, even in a dim room.*

### 1.3 Brand Personality & Archetype

**Archetype:** *The Gracious Floor Host* (70% Warm Mentor + 30% Discreet Stagehand).

| **Pillar** | **What It Feels Like** | **What It Never Feels Like** |
| --- | --- | --- |
| **Calmly Confident** | A reassuring hand on the shoulder before you step onto the floor—honest when a track is a close call (`Likely` / `Not sure`), never confidently wrong. | Anxious, frantic, or overloaded with debug metrics. |
| **Dim-Floor Discreet** | Velvet dark, muted video, pure OLED watch black, silent wrist taps—never breaks the ambiance. | Bright white glare, loud beeps, or distracting notifications. |
| **Warmly Social** | Celebrates real Friday-night socials, studio nicknames, and having fun. | Stiff competitive ballroom, elitist jargon, or intimidating drills. |
| **Effortlessly Smart** | One invisible instrument across phone and watch: 18,090-song offline catalog, ~2s privacy-safe Song ID, offline neural beat & style AI, and phone-first wrist listening. | Scary special permissions, BYO API keys, or nerdy audio-engineering dashboards. |

### 1.4 Target Audiences (Personas)

1. **Primary — "The Friday-Night Newcomer" (Months 1–12 of lessons)**
   - Takes 1–2 weekly group classes at a local studio (e.g., Arthur Murray, Fred Astaire, or independent social studio) and stays for the Friday party.
   - Knows 3–6 steps in Waltz, Rumba, Cha-Cha, Foxtrot, and East Coast Swing, but blanks under party lights.
   - *Emotional need:* Belonging, calm reassurance, not feeling awkward asking "what dance is this?" for the fifth time.
2. **Secondary — "The Growing Social Dancer" (Years 1–3)**
   - Expanding into Tango, Salsa, Bachata, and Nightclub Two-Step; records instructor recaps after class.
   - *Emotional need:* A clean personal move vault (with their studio's nicknames and muted video clips) and a way to keep tempo on tricky pop-crossover tracks and covers.
3. **Tertiary — "The Studio Instructor & Community Host"**
   - Wants newer students to survive and enjoy their first 10 social parties so they keep coming back.
   - *Emotional need:* A respectful, studio-friendly tool that reinforces *their* syllabus and *their* studio playlist rather than contradicting it.

### 1.5 Competitive Differentiation

| **Alternative** | **Why It Falls Short at a Social Party** | **How We Win** |
| --- | --- | --- |
| **Music ID / Streaming Apps** | Tells you the song title, not what ballroom dance to do or your moves. | Maps songs (via ~2s privacy-safe Song ID + **18,090-song offline dance catalog**, offline neural beat & style AI, or Share) directly to **Dance + Your Known Steps + Beat 1**. |
| **Metronome Apps** | Loud clicks, manual BPM typing, zero awareness of dance timing (*Slow–Quick–Quick*). | **"One Invisible Instrument" Wear OS Haptic Beat Coach**—tap Listen on your wrist to trigger your phone's full engine, lock live Beat 1, and feel real dance-step vibration patterns. |
| **Dance Syllabus / Video Apps** | 500 overwhelming moves, loud videos, bright screens, requires Wi-Fi. | **2-tab stock-app simplicity (`Listen` \| `My Moves`)**, glanceable "My 5–6 Steps" filter, muted slow-mo class clips, 100% offline-ready, velvet dark UI. |

### 1.6 Naming & Brand Architecture

**Pocket Ballroom** is the official, locked-in brand name. It naturally pairs approachable warmth (*Pocket* = always with you, discreet, unintimidating) with immediate category clarity (*Ballroom* = strong organic recall and search intent).

#### Official Name Formatting & Touchpoints

| **Context** | **Official Form** | **Best-Practice Rule** |
| --- | --- | --- |
| **Brand Name (Prose & UI)** | **Pocket Ballroom** | Always two words, Title Case. Never `PocketBallroom` in body copy, and never abbreviated to `PB`. |
| **Launcher Icon Label** | `Pocket Ballroom` | 15 characters—fits cleanly without truncation on Android, Wear OS, and iOS home screens. *(Shipped in `v1.5.0`.)* |
| **Primary Domain** | [`pocketballroom.com`](https://pocketballroom.com) | Always lowercase in print/web links (`pocketballroom.com`, omit `https://www.` in visual layouts). Live on GitHub Pages with HTTPS. |
| **Social Handles** | `@pocketballroom` | Reserve consistently across Instagram, Threads, TikTok, YouTube, X, and Reddit. |
| **Official Emails** | `hello@pocketballroom.com` · `privacy@pocketballroom.com` | Use custom domain email (Porkbun Email Forwarding) for Google Play / App Store developer contact, social accounts, and Privacy Policy. |
| **Wordmark Lockup** | **Pocket** *Ballroom* | Subtle contrast between `Pocket` (Warm Ivory `#F7F4EE`) and `Ballroom` (Champagne Gold `#E8C574` / Editorial Serif). *(Shipped in app `v1.5.0` & live on `pocketballroom.com`.)* |

#### Platform & Product Architecture

Keep a **Branded House** architecture (one master brand, simple platform qualifiers):

- **Phone App (Android / Future iOS):** `Pocket Ballroom`
- **Watch Companion:** `Pocket Ballroom for Wear OS` / `Pocket Ballroom for Apple Watch`
- **Google Play Store Title (29/30 chars):** `Pocket Ballroom: Dance Helper`
- **Apple App Store Title + Subtitle:** `Pocket Ballroom` + `Dance ID, Steps & Wrist Beat`

**Play Store Package ID Note:** In-app naming (`app_name`, two-tone wordmark, `OnboardingOverlay.kt`, tabular numerals) was fully aligned to **Pocket Ballroom** in `v1.5.0`. Before the first public Google Play upload, rename `applicationId` to `com.pocketballroom.app` (permanent once published) and use distinct `versionCode` tracks for Phone vs. Wear OS (e.g., Wear `+1_000_000`).

---

## 2. Verbal Identity — Voice, Tone & Messaging

### 2.1 Voice Principles

Write like **your favorite dance partner leaning in calmly before the downbeat**:

1. **Short & Glanceable:** If a dancer can't read it in 2 seconds under dim lights, cut half the words.
2. **Encouraging & Honest:** Celebrate what they *do* know (gold `★` pill on a known alternative dance) and stay honest when a track is ambiguous (`Likely` / `Not sure`—never confidently wrong).
3. **Studio-Authentic, Plain English:** Use real social floor language (*Line of Dance*, *Beat 1*, *Slow–Quick–Quick*, *Lead / Follow*), and keep engineering jargon (*ONNX*, *spectral flux*, *libsigx*, *sourceLabel*) out of user-facing copy.
4. **Action-Oriented:** Lead with the relief or outcome (*"Hear the song. See your steps. Feel the beat."*).

### 2.2 Voice Do's & Don'ts

| **Context** | **Avoid (Too Technical / Cold)** | **Use Instead (Warm & Glanceable)** |
| --- | --- | --- |
| **Hero / Value Prop** | "INT8 ONNX beat/style neural pipeline with 18k TSV catalog." | "Know the dance, see your steps, and feel Beat 1—in 5 seconds." |
| **Listening State** | "Sampling 44.1 kHz PCM buffer..." | "Listening to the room…" |
| **Uncertain Match** | "Confidence 64% · COVER_TITLE_MATCH · Octave ambiguity." | "64% · Likely" + quiet `[Adjust ▾]` pill |
| **Empty Moves List** | "0 known moves persisted in Room database." | "Pick 3–5 moves you know so they're ready tonight." |
| **Watch Haptics** | "Foreground haptic metronome service active." | "Feel Beat 1 on your wrist." |
| **Video Player** | "Audio output suppressed." | "Muted for the dance floor · Tap for sound" |

### 2.3 Messaging & Tagline Bank

- **Primary Tagline:** *Never miss a dance.*
- **Secondary Taglines:**
  - *Your quiet companion for Friday dance nights.*
  - *Hear the song. See your steps. Feel the beat.*
  - *In your pocket. On your wrist. Ready for Beat 1.*
- **One-Sentence Elevator Pitch:**

**Pocket Ballroom** is the offline-first Android and Wear OS app that identifies the song and ballroom dance in seconds—using an 18,090-song offline catalog, privacy-safe song matching, and on-device neural rhythm AI—shows the 5 moves you actually know, and pulses Beat 1 silently on your wrist.

### 2.4 Standardized Product Terminology

Use these exact terms consistently across Mobile UI, Wear OS, Website, and Store Listings:

| **Feature / Concept** | **Official Term** | **Notes** |
| --- | --- | --- |
| Primary bottom tabs | **Listen** \| **My Moves** | Plus top-right `⚙` Settings (2-tab stock-app navigation shipped in `v1.6.0`). |
| Main party detection card | **Party Card** | Shows Song Title + `[🔖]` Bookmark, `32sp` Dance Name + calibrated `%` badge, and known moves above the fold. |
| Tempo & groove adjustments | **Adjust** (`[Adjust ▾]`) | Quietly tucks *Double speed*, *Half speed*, and **Feel Chips** (*Swung*, *Cha-Cha-Cha*, *Sharp Tango*, *Slow Ballad*) out of the way until needed. |
| User's curated moves | **My Moves** / **My 5–6 Steps** | Emphasizes simplicity over exhaustive syllabi. |
| Pinned class moves | **★ Tonight** | Highlights what was just learned in group class. |
| Custom studio song overrides | **Studio Memory** (Bookmark) | 1-tap bookmark saves custom song-to-dance overrides locally, with lazy offline audio fingerprinting for untitled studio tracks. |
| Wear OS vibration feature | **Haptic Beat Coach** | Compact watch pills: `Steps`, `Beats`, `Beat 1` + `Stop`/`Start`, plus 3-page swipeable live session (Controls ← Beat Ring → Moves). |
| Auto-fading wrist pulse | **Training Wheels** (*Auto-Fade*) | Friendly metaphor for fading haptics after 8 bars once you've found the beat. |
| Calibration tool | **Timing Sync** | Slim 120 BPM click + offset slider in Settings (advanced diagnostics stay hidden behind 5-tap version footer). |
| Dance roles | **Leader / Follower** | Never "Man / Lady" (inclusive modern social ballroom standard). |

---

## 3. Visual Identity System

### 3.1 Creative Direction: "Midnight Ballroom — Velvet & Champagne Gold"

The visual world evokes an intimate Friday-night ballroom: deep midnight velvet darkness, warm overhead champagne spotlights, polished hardwood warmth, and jewel-toned clarity that pops effortlessly on OLED screens without blinding anyone on the dance floor.

### 3.2 Color Palette

#### Core Surfaces & Neutrals (Synced with `Theme.kt`, `WearTheme.kt` & `tokens.css`)

| **Token Name** | **Hex** | **Role & Usage** |
| --- | --- | --- |
| **Void Background** | `#08070C` | Primary mobile canvas & website hero background. Deep violet-black velvet. |
| **Pure OLED Black** | `#000000` | Wear OS canvas (`WearPalette.OledBlack`) for zero-glare, zero-power-waste watch UI. |
| **Surface Card** | `#13111D` | Primary elevated cards (Party Card, Move Cards, Web feature cards). |
| **Surface Subtle** | `#171423` | Recessed containers, search bars, secondary pills. |
| **Surface Elevated** | `#1C192B` | Modals, bottom sheets, active dropdowns, hover states on web. |
| **Card Border** | `#28233A` | Default 1dp hairline divider and card stroke. |
| **Card Border Bright** | `#3E3659` | Highlighted/focused card borders and unselected interactive chips. |

#### Brand & Semantic Accents

| **Token Name** | **Hex** | **Soft Tint** | **Role & Usage** |
| --- | --- | --- | --- |
| **Champagne Gold** *(Primary)* | `#E8C574` | `#352C18` | Primary CTAs, active dance spotlight, Beat 1 pulse ring, brand emblem, known-alternative `★` pill. Glow highlight: `#F6DF9E`. Text on gold: `#161106`. |
| **Leader Sapphire** *(Secondary)* | `#64B5FF` | `#132940` | Leader role badge, Lead cues, Outer Lane / Line of Dance indicators. |
| **Follower Rose** *(Tertiary)* | `#F47B8A` | `#381922` | Follower role badge, Follow cues, warm secondary highlights. |
| **Known Emerald** *(Success)* | `#52D69B` | `#123024` | `✓ Know` status, high-confidence match, Beat Coach locked/active state. |
| **Alert Coral** *(Caution/Stop)* | `#FF6B7A` | `#38161D` | Stop listening, error states, destructive actions. |

#### Typography Neutrals

| **Token Name** | **Hex** | **Usage** |
| --- | --- | --- |
| **Warm Ivory** (`TextPrimary`) | `#F7F4EE` | Primary headlines, dance names, step titles. Slightly warm—never harsh sterile `#FFFFFF`. |
| **Soft Lavender Gray** (`TextSecondary`) | `#B7B0C9` | Supporting copy, artist names, secondary cues. |
| **Muted Plum** (`TextMuted`) | `#817A96` | Metadata, timestamps, subtle counts, footnotes. |

#### Marketing & Web Signature Gradients

- **Ballroom Spotlight Glow:** Radial gradient centered at top (`50% 6%`): `rgba(232, 197, 116, 0.20)` → `rgba(232, 197, 116, 0.06)` → `transparent` over `#08070C`.
- **Champagne Foil Sheen (Web CTA hover / Store headers):** Linear `135deg`, `#F6DF9E` → `#E8C574` → `#C9A24D`.
- **Velvet Depth Fade:** Linear `180deg`, `#13111D` → `#08070C`.

#### Accessibility & Contrast Rules

- Always pair **Champagne Gold (`#E8C574`)** button fills with **OnGold (`#161106`)** dark text (contrast ratio > 11:1). Never put white text on Champagne Gold.
- Maintain **WCAG AA (≥ 4.5:1)** for all body text (`#F7F4EE` and `#B7B0C9` on `#08070C` and `#13111D` both exceed 7:1).
- Never use pure bright white (`#FFFFFF`) full-screen backgrounds in the app—preserve dark-room night vision.

### 3.3 Typography System

| **Role** | **Typeface** | **Fallback** | **Usage** |
| --- | --- | --- | --- |
| **Editorial Display** *(Web, Store Graphics, Brand Moments)* | **Fraunces** (SemiBold / Bold / Italic) | Georgia, serif | Website hero headlines, Play Store / App Store screenshot titles, `Ballroom` wordmark accent. |
| **UI & Product Sans** *(App UI, Wear OS, Web Body)* | **Plus Jakarta Sans** (Regular / Medium / SemiBold / Bold) | Roboto / SF Pro | All screens, buttons, dance cards, step cues, Wear OS glanceable text. |
| **Rhythm & Numerals** *(BPM, Meter, Counts)* | **Tabular Numerals (`tnum`)** / **JetBrains Mono** | Monospace | `118 BPM`, `3/4`, `1 · 2 · 3 · 4`, `0.75x` speed pills—prevents jitter during live beat ticks. *(Shipped in app `v1.5.0`.)* |

#### App Type Scale Reference (`Theme.kt`)

- **Display Small:** `32sp` Bold (`-0.5sp` tracking) — Dance name hero (`Slow Waltz`, `Cha-Cha`).
- **Headline Medium:** `26sp` Bold (`-0.3sp` tracking) — Screen headers, onboarding titles.
- **Title Large / Medium:** `19sp` / `16sp` SemiBold — Card titles, step names.
- **Body Large / Medium:** `15sp` / `14sp` Regular — Lead/Follow cues, song titles.
- **Label Large / Medium:** `14sp` / `12sp` SemiBold (`+0.2–0.3sp` tracking) — Feel chips, badges, `✓ Know` pills.

### 3.4 Logo, App Icon & Symbolism

Our launcher mark (`ic_launcher_foreground.xml`, exported as `assets/emblem.svg` and `assets/social/avatar-1024.png`) carries **The Beat 1 Pulse Emblem**:

1. **Outer Champagne Rhythm Ring** (`#E8C574` at 40% opacity) — Represents the continuous flow of music on the floor.
2. **Inner Beat Pulse Ring** (`#E8C574` solid stroke + 13% glow fill) — Represents the wrist haptic beat and tempo lock.
3. **Stylized Eighth Note** (`#E8C574`) — Instantly communicates music & dance at 24px.
4. **Beat 1 Accent Diamond** (`#F7F4EE` at 12 o'clock) — Symbolizes the downbeat ("Beat 1") and a subtle ballroom chandelier sparkle.

#### Logo Lockups & Exported Asset Kit (`pocketballroom-web/assets/`)

- **App & Social Icons:** `assets/social/avatar-1024.png` (App Store & social avatar) and `assets/social/avatar-512.png` (Google Play icon) — Beat 1 Pulse Emblem centered on `#08070C` with top radial spotlight glow, zero text inside the icon.
- **Horizontal Wordmark:** Beat 1 Pulse Emblem + **Pocket** *Ballroom* (`#F7F4EE` + `#E8C574`).
- **Monochrome / Complication Mark:** `assets/emblem-mono.svg`.
- **Web & Social Graphics:** `assets/favicon.svg`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`, `assets/og-card.png` (`1200 × 630`), `assets/social/banner-youtube-2560x1440.png`, `assets/social/banner-x-1500x500.png`.
- **Clearspace & Don'ts:** Maintain ≥ `0.25×` icon width clearspace. Never stretch, rotate, apply neon/rainbow gradients, place gold on light yellow/beige, or add heavy drop shadows.

### 3.5 Surfaces, Elevation & Motion Language

- **Geometry:** Soft, tactile corners—`20–24dp` for primary Party Cards and bottom sheets, `16dp` for move cards, `999dp` (full pill) for Feel Chips, speed pills, and role toggles.
- **Elevation via Light, Not Drop Shadows:** On dark velvet surfaces, indicate hierarchy with stepped background lightness (`#08070C` → `#13111D` → `#1C192B`) and crisp `1dp` borders (`#28233A` / `#3E3659`), reserving warm champagne glow only for active listening or Beat 1 lock.
- **Motion Principles ("Waltz Glide & Crisp Downbeat"):** Smooth `FastOutSlowInEasing` (250–350ms), beat pulse synchronized strictly to detected BPM (heavy Beat 1 accent, softer bloom on beats 2–4), paired with crisp haptic feedback.

### 3.6 Photography & Visual Art Direction

- **Setting:** Warmly lit local dance studios, hardwood floors, string lights or chandelier bokeh, evening casual-dressy attire (approachable, not black-tie gala).
- **Subjects:** Diverse everyday adults (late 20s to 60s) smiling, connecting in dance hold, glancing naturally at a phone or smartwatch between songs.
- **Color Grading:** Deep shadows (`#08070C`–`#13111D`), warm golden highlights (`#E8C574`), subtle rose/sapphire ambient rim lighting.
- **Avoid:** Competitive spray tans, rhinestones/feathers, harsh daylight gyms, or glowing white phone screens.

---

## 4. Product Design Guidelines (App `v1.7.0` & Wear OS)

### 4.1 The 5-Second Floor Rule & Stock-App Simplicity

Between songs at a social party, you have roughly **5 to 10 seconds** to recognize the dance, invite a partner, and walk onto the floor. Shipped in `v1.6.0`–`v1.7.0`:

1. **2-Tab Phone Navigation (`Listen` \| `My Moves`) + Top-Right `⚙` Settings:** Calm 1-step onboarding (Role + starter dances + Skip), just-in-time mic prompt on first Listen tap, and `autoListenOnOpen = false` by default.
2. **Above-the-Fold Dance + Moves:** Song title + `[🔖]` Bookmark, bold `32sp` Dance Name + honest calibrated `%` badge (capped at `Likely ≤ 72%` when uncertain), up to 2 alternative dance pills (gold `★` on a dance you know), quiet `[Adjust ▾]` pill, your checked moves (`★ Tonight` pinned first), and a sleek single-row `60dp` Beat Coach bar.
3. **Zero Scary Permissions:** Requests only `RECORD_AUDIO`, `VIBRATE`, and `INTERNET`. No Notification Access (`NotificationListenerService` removed in `v1.6.0`), no cloud API keys, and no raw audio upload.

### 4.2 "One Invisible Instrument" Wear OS Experience (`v1.7.0`)

- **Phone-First Remote Listen:** Tapping **Listen** on your wrist triggers your paired phone's full ShazamKit + neural AI + 18,090-song catalog (no watch mic prompt needed) and streams the locked dance + Beat-1 phase right back to your wrist—falling back seamlessly to standalone watch DSP if untethered.
- **Bidirectional Sync:** Watch **Stop**, **Tap on 1**, **±1 BPM**, **Mode**, **Auto-Fade**, and **Switch Dance** sync straight back to the phone.
- **Stock-Watch 3-Page Swipeable Live Session:** Lands directly on the center **Eyes-Free Beat Ring** (giant 75% blind-tap Beat-1 zone + dedicated rotary crown ±1 BPM with zero scroll conflict); swipe left for **Controls** (`Next Song`, `− BPM +`, `Auto-Fade`, alt dance switch); swipe right for **Moves**.
- **Zero-Glare & Reliable:** Pure `#000000` OLED black, silent **5-minute inter-song standby** between dances, deferred `POST_NOTIFICATIONS`, and a **live-aware Quick Tile** (`Listen` \| `Moves` when idle; `Dance · BPM` + `Open` \| `Stop` when active).

### 4.3 Dim-Floor Etiquette

- **Zero-Glare Dark Mode Only (in Party Mode):** Never flash white screens or bright modals.
- **Muted Video by Default:** `QuickVideoBottomSheet` always starts muted (`0.5x / 0.75x / 1.0x` auto-looping) so checking a 5-second step clip never competes with the studio music.

### 4.4 Future iOS & watchOS Adaptation Notes

- Keep **100% identical color tokens** (`#08070C`, `#13111D`, `#E8C574`, `#64B5FF`, `#F47B8A`, `#52D69B`) and the **Beat 1 Pulse Emblem**.
- Translate Compose sheets & pills to native **SwiftUI Sheets / Capsules**, reuse **Apple ShazamKit** natively via `SHSession`, and map Wear OS controls to **Apple Watch Digital Crown** BPM nudge + `WKExtendedRuntimeSession` haptic beat coach.

---

## 5. Website Architecture (`pocketballroom.com` — Live)

### 5.1 Hosting, Goals & Conversion Hierarchy

- **Hosting:** Deployed on **GitHub Pages** from [`arpitguglani/pocketballroom-web`](https://github.com/arpitguglani/pocketballroom-web) (`CNAME`: `pocketballroom.com`, Porkbun DNS live with HTTPS).
- **Primary CTA:** Join Android & Wear OS Beta *(1-line switch in `config.js` to flip all CTAs to **Get it on Google Play** once published)*.
- **Secondary CTA:** Join the iOS & Apple Watch Waitlist.
- **Tertiary Goal:** Build trust with studio instructors & privacy-conscious dancers (18,090-song offline catalog, privacy-safe one-way song signatures, raw audio never uploaded, zero Notification Access).

### 5.2 Live URLs & SEO / Social Metadata

- **Landing Page:** [`https://pocketballroom.com`](https://pocketballroom.com)
- **Privacy Policy (Play Store & App Store Ready):** [`https://pocketballroom.com/privacy/`](https://pocketballroom.com/privacy/)
- **Support & Troubleshooting:** [`https://pocketballroom.com/support/`](https://pocketballroom.com/support/) (`hello@pocketballroom.com`)
- **HTML `<title>`:** `Pocket Ballroom — Know the Dance, See Your Steps, Feel Beat 1`
- **Meta Description:** `The offline-first ballroom dance app for Android & Wear OS. Identify the dance in 5 seconds, glance at your steps, and feel Beat 1 silently on your wrist.`
- **Open Graph (`og:image`):** `https://pocketballroom.com/assets/og-card.png` (`1200 × 630 px`).

### 5.3 Landing Page Sections (Live on `pocketballroom.com`)

1. **Sticky Top Navigation:** Beat 1 Pulse Emblem + **Pocket** *Ballroom* | *How It Works*, *9 Dances*, *Wear OS Watch*, *FAQ*, *Support* | Gold Pill CTA.
2. **Hero Section:** Ballroom Spotlight Glow, H1 *"Hear the song. See your steps. Feel the beat."*, Android Beta + iOS Waitlist CTAs, and an **interactive Phone Party Card + Wear OS Beat Coach** (live BPM pulse ring, Leader/Follower toggle, 4 sample dances).
3. **The Friday-Night Story:** 3-card Problem → Relief strip (*"What dance is this?"* · *"Which moves do I know?"* · *"Where is Beat 1?"*).
4. **Deep-Dive Feature Showcase:**
   - **Feature 1: Instant Dance ID + 18,090-Song Catalog & Studio Memory** — ~2s privacy-safe Song ID + offline neural beat & style AI + Bookmark Studio Memory + interactive Feel Chips.
   - **Feature 2: Glanceable "My Moves" & Muted Class Clips** — 50 beginner steps, Leader Sapphire / Follower Rose cues, `★ Tonight` pins, and interactive muted `0.5x / 0.75x / 1.0x` video refresher.
   - **Feature 3: "One Invisible Instrument" Wear OS Haptic Beat Coach** — Phone-first wrist Listen, 3-page swipeable watch session (Controls ← Beat Ring → Moves), Training Wheels Auto-Fade, and live-aware Quick Tile.
5. **The 9 Supported Dances Grid:** Filterable by **American Smooth** (Slow Waltz, Social Foxtrot, American Tango), **American Rhythm** (American Rumba, Cha-Cha, East Coast Swing), and **Club Social** (Salsa On1, Bachata, Nightclub Two-Step) with exact BPM ranges, meter, timing, and Floor Craft lane badges.
6. **Privacy & Offline Trust Bar:** Privacy-Safe On-Device Audio · Works Without Studio Wi-Fi · Free Core Experience.
7. **For Studio Instructors & Dance Communities:** Warm studio callout + Studio Welcome Kit modal.
8. **FAQ Accordion & Final CTA Footer:** Live links to `/privacy/`, `/support/`, `hello@pocketballroom.com`, and `@pocketballroom`.

### 5.4 Web CSS Design Tokens (`css/tokens.css`)

```css
:root {
  /* Surfaces */
  --bg-void: #08070C;
  --bg-oled: #000000;
  --surface-card: #13111D;
  --surface-subtle: #171423;
  --surface-elevated: #1C192B;
  --border-subtle: #28233A;
  --border-bright: #3E3659;
  /* Brand & Semantic Accents */
  --gold: #E8C574;
  --gold-glow: #F6DF9E;
  --gold-soft: #352C18;
  --on-gold: #161106;
  --sapphire: #64B5FF;
  --sapphire-soft: #132940;
  --rose: #F47B8A;
  --rose-soft: #381922;
  --emerald: #52D69B;
  --emerald-soft: #123024;
  --coral: #FF6B7A;
  --coral-soft: #38161D;
  /* Typography */
  --text-primary: #F7F4EE;
  --text-secondary: #B7B0C9;
  --text-muted: #817A96;
  /* Fonts */
  --font-display: 'Fraunces', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  /* Radii & Effects */
  --radius-card: 20px;
  --radius-pill: 9999px;
  --spotlight-glow: radial-gradient(circle at 50% 6%, rgba(232, 197, 116, 0.20) 0%, rgba(232, 197, 116, 0.06) 45%, transparent 75%);
}
```

---

## 6. Google Play Store & Apple App Store Listing Playbook

### 6.1 ASO & Store Policy Best Practices

- **Zero Promotional Spam in Titles/Icons:** Never put `FREE`, `100% Free`, `#1`, emojis, or ALL CAPS in App Titles, Short Descriptions, or App Icons.
- **Avoid Third-Party Trademark Triggers:** Keep third-party brand names (*Shazam*, *Spotify*, *YouTube*, *Pixel*) out of App Titles, Short Descriptions, and Apple Keyword fields. In full descriptions, describe interoperability naturally (*"Share songs from your favorite music apps"*).
- **Minimal Permissions Advantage:** Because `v1.6.0` removed `NotificationListenerService` and raw-audio cloud uploads, Google Play Data Safety & Permissions review only covers `RECORD_AUDIO` (transient on-device beat/style analysis + non-reversible one-way acoustic signatures for song matching), `VIBRATE`, and `INTERNET`.
- **Recommended Store Categories:**
  - *Google Play:* **Music & Audio** (Primary)
  - *Apple App Store:* **Music** (Primary), **Lifestyle** (Secondary)

### 6.2 Google Play Store Listing (Ready to Ship — Updated for `v1.7.0`)

- **App Name (29/30 chars):** `Pocket Ballroom: Dance Helper`
- **Short Description (78/80 chars):** `Know the dance, glance at your steps & feel Beat 1 on your wrist. Works offline.`
- **Full Description:**

**Step onto the dance floor with confidence—in 5 seconds.**

At a dim Friday ballroom social, a song starts and every beginner asks the same three questions: *What dance is this? Which moves do I know for it? Where is Beat 1?*

**Pocket Ballroom** is your quiet, dim-floor-friendly phone and Wear OS watch guide built specifically for social ballroom dancers.

**INSTANT "WHAT DANCE IS THIS?" (18,000+ SONGS & OFFLINE AI)**

• **18,000+ Ballroom & Social Songs Built In:** Ships with an offline catalog spanning 18,090 ballroom, Latin, and pop-crossover tracks across 9 dances—plus fast ~2-second song matching when online using privacy-safe one-way signatures (raw room audio never leaves your device).

• **100% Offline Neural Rhythm & Style AI:** No studio Wi-Fi? On-device AI listens to the room to estimate live BPM, 3/4 vs. 4/4 meter, musical style, and Beat 1—with honest confidence indicators and quick tempo/feel adjustments whenever you want them.

• **Studio Memory & Share Support:** Bookmark any song in 1 tap to remember your studio's exact dance (even untitled offline tracks), or tap *Share* from your favorite music apps to map a song straight to your dances.

**GLANCEABLE "MY MOVES" REPERTOIRE**

• Pre-loaded with **50 authentic beginner steps** across **9 dances**: Slow Waltz, American Rumba, Cha-Cha, Social Foxtrot, East Coast Swing, American Tango, Salsa (On1), Bachata, and Nightclub Two-Step.

• **Leader & Follower Toggle:** See tailored Lead or Follow cues, timing (*Slow–Quick–Quick*), and Floor Craft lanes (*Outer Lane* vs. *Spot Dance*).

• **Personalize for Your Studio:** Filter to moves you `✓ Know`, pin `★ Tonight`'s group class steps, and add your instructor's custom nicknames.

**1-TAP MUTED VIDEO REFRESHER**

• Attach your own class recap clips or timestamped video demos to any step.

• Plays **muted by default** with `0.5x / 0.75x / 1.0x` slow-motion loops so you can refresh a turn discreetly on the sidelines.

**WEAR OS HAPTIC BEAT COACH ("ONE INVISIBLE INSTRUMENT")**

• **Tap Listen Right from Your Wrist:** Triggers your paired phone's full song & rhythm engine (no watch mic setup needed) and streams the locked dance and Beat 1 straight back to your wrist—or listens standalone when untethered.

• **3-Page Swipeable Live Session:** Eyes-free Beat Ring in the center (blind 1-tap Beat-1 snap + rotary crown ±1 BPM), swipe left for Controls (*Next Song*, *Auto-Fade*, alternate dances), swipe right for your *Moves*.

• Choose **Steps** (*Slow–Quick–Quick*, *2–3–Cha-Cha-Cha*), **Beats**, or **Beat 1 Only**, plus **Auto-Fade** ("Training Wheels") and a live-aware **Wear OS Quick Tile**.

**DESIGNED FOR DIM DANCE FLOORS & PRIVACY**

• Velvet-dark OLED interface with zero glare and only minimal permissions (`Microphone`, `Vibration`, `Internet`).

• Raw room audio is never recorded, saved, or uploaded.

### 6.3 Apple App Store Listing (Future Launch Template)

- **App Name (15/30 chars):** `Pocket Ballroom`
- **Subtitle (28/30 chars):** `Dance ID, Steps & Wrist Beat`
- **Promotional Text (155/170 chars):** `Know what dance is playing in 5 seconds, glance at your favorite steps, and feel Beat 1 silently on your Apple Watch. Built for Friday ballroom socials.`
- **Keywords (97/100 chars — zero overlap with Name/Subtitle):** `waltz,rumba,chacha,foxtrot,swing,tango,salsa,bachata,bpm,rhythm,haptic,social,metronome,party,cue`

### 6.4 Store Screenshot & Feature Graphic Storyboard

All phone store graphics use the **Midnight Ballroom** canvas (`#08070C` + Champagne Spotlight radial glow), Editorial Display headlines (`Fraunces` in `#F7F4EE` with one key phrase in `#E8C574`), and clean frameless or dark-titanium device mockups.

| **Slide** | **Headline (Top)** | **Sub-Caption** | **Visual Composition** |
| --- | --- | --- | --- |
| **1. Hero** | **Know the dance in 5 seconds.** | 18,000+ songs + offline rhythm AI for 9 dances. | Phone showing **Party Card** (*Slow Waltz · 90 BPM · 3/4*) + sleek 60dp Beat Bar + Wear OS watch Beat Ring peeking on the right. |
| **2. Your Moves** | **Only the steps you actually know.** | Leader & Follower cues, studio nicknames & ★ Tonight pins. | Party Card scrolled to `✓ Know` steps with Leader Sapphire / Follower Rose toggle callout pill. |
| **3. Haptic Watch** | **Tap Listen on your wrist. Feel Beat 1.** | Silent Wear OS haptic patterns + 3-page swipeable live session. | Close-up of Wear OS watch (`#000000` OLED) Eyes-Free Beat Ring pulsing gold with tactile wave rings (*Slow · Quick · Quick*). |
| **4. Muted Clips** | **5-second silent step refreshers.** | Loop your class videos muted at 0.5x–1.0x speed. | `QuickVideoBottomSheet` open over dim background with muted badge and speed pills highlighted. |
| **5. Studio Memory** | **Remembers your studio's playlist.** | 18,090-song offline catalog + 1-tap Bookmark & song sharing. | Result card showing song title + `[🔖]` Bookmark + quiet `[Adjust ▾]` Feel Chips. |
| **6. 9 Dances** | **9 dances. Zero Wi-Fi needed.** | Smooth, Rhythm & Club—private, on-device audio AI. | Crisp 3×3 dark velvet grid of the 9 dances with timing badges and an "Offline & Private" shield. |

#### Wear OS Dedicated Store Screenshots (Google Play Requirement)

- **Specs:** `1:1` aspect ratio, minimum `384 × 384 px`, **no watch hardware frame**, **no marketing text overlays**, and pure `#000000` background.
- **Recommended 3 Shots:** (1) Center **Eyes-Free Beat Ring** (`WearBeatCoachScreen`) pulsing gold on Beat 1, (2) Right-swipe **Moves** page showing `✓ Know` steps, (3) Live-aware `PartyQuickTileService` Quick Tile.

#### Google Play Feature Graphic (`1024 × 500 px`)

- **Left 45%:** Beat 1 Pulse Emblem + Bold 2-line headline: *"Know the Dance. Feel the Beat."* + subtle subline: *"Pocket Ballroom · Android & Wear OS"*.
- **Right 55%:** Tilted Phone (Party Card) + Wear OS Watch (Eyes-Free Beat Ring) illuminated by a soft Champagne Gold spotlight radial glow fading into `#08070C`.
- Keep all critical text inside the center safe zone (avoid outer 15% edges for Play Store cropping).

### 6.5 App Preview Video Script (20 Seconds — Silent-First)

- **0:00–0:04:** Dim dance floor ambiance. Bold caption: *"A song starts. What dance is it?"* Tap Listen on wrist or phone.
- **0:04–0:09:** Gold pulse rings lock in → **Slow Waltz · 90 BPM · Outer Lane** pops into view.
- **0:09–0:14:** Glance at `✓ Know` moves → tap a step → muted `0.75x` slow-mo clip loops cleanly.
- **0:14–0:18:** Cut to Wear OS watch on wrist pulsing gold: *"Feel Beat 1 silently on your wrist."*
- **0:18–0:20:** End card on `#08070C` with Beat 1 Pulse Emblem: **Pocket Ballroom — Never miss a dance.** (`pocketballroom.com`)

---

## 7. Brand & Launch Rollout Checklist

- ☑ **Lock Final Brand Name & Domain:** **Pocket Ballroom** ([`pocketballroom.com`](https://pocketballroom.com)) registered on Porkbun & DNS live on GitHub Pages with HTTPS.
- ☑ **Align In-App Copy & Typography (`v1.5.0`–`v1.7.0`):** Updated `app_name` in `:mobile` & `:wear`, two-tone **Pocket** *Ballroom* wordmark, `OnboardingOverlay.kt`, tabular numerals (`tnum`), and 2-tab stock-app UI.
- ☑ **Export Brand & Social Asset Kit:** Rendered Beat 1 Pulse Emblem SVGs, `512×512` Play Store icon, `1024×1024` App Store / social avatar, favicon set, `1200×630` Open Graph card, YouTube (`2560×1440`) & X (`1500×500`) banners in [`pocketballroom-web/assets/`](https://github.com/arpitguglani/pocketballroom-web/tree/main/assets).
- ☑ **Build & Deploy `pocketballroom.com`:** Live 8-section landing page, interactive Party Card + Watch demo, 9-dance grid, `/support/`, and Play-Store-ready `/privacy/` (updated for `v1.7.0` ShazamKit one-way signatures & zero Notification Access).
- ☐ **Configure Official Emails & Claim `@pocketballroom`:** Enable free Porkbun Email Forwarding (`hello@pocketballroom.com`, `privacy@pocketballroom.com`) and claim `@pocketballroom` across Instagram, Threads, TikTok, YouTube, X, and Reddit using `SOCIAL_LOCKDOWN_GUIDE.md`.
- ☐ **Complete Play Store Release Blockers (`HANDOFF.md` Phase 4):** Rename `applicationId` to `com.pocketballroom.app`, set distinct Wear `versionCode` track, enable R8 shrinking & release signing, add ShazamKit token-refresh endpoint, and flip `GOOGLE_PLAY_URL` in `pocketballroom-web/config.js`.
- ☐ **Produce Store Visuals:** Capture real `v1.7.0` device screenshots for the 6-slide Phone storyboard, `1024×500` Feature Graphic, and 3 frameless 1:1 Wear OS screenshots (`#000000` background).
