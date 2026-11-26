(() => {
  const cfg = window.POCKET_BALLROOM_CONFIG || {};

  /* ---------- Interactive Hero Dance Presets ---------- */
  const DEMO_DANCES = {
    waltz: {
      name: "Slow Waltz",
      bpm: 90,
      meter: "3/4",
      beats: 3,
      lane: "Outer Lane",
      isSpot: false,
      watchCue: "1 · 2 · 3",
      steps: [
        {
          name: "Left Box Step",
          tonight: true,
          lead: "LF fwd on 1, RF side on 2, close on 3. Rise gently.",
          follow: "RF back on 1, LF side on 2, close on 3. Stay in frame."
        },
        {
          name: "Underarm Turn",
          tonight: false,
          lead: "Raise L hand on 1, guide partner smoothly through 2–3.",
          follow: "Walk forward under L arch on 1–2–3, settle on 1."
        },
        {
          name: "Progressive Twinkle",
          tonight: false,
          lead: "Step LF fwd into promenade on 3, close feet crisp.",
          follow: "Open head to promenade on 3, brush ankles cleanly."
        }
      ]
    },
    rumba: {
      name: "American Rumba",
      bpm: 112,
      meter: "4/4",
      beats: 4,
      lane: "Spot Dance",
      isSpot: true,
      watchCue: "Slow · Q · Q",
      steps: [
        {
          name: "Rumba Box",
          tonight: true,
          lead: "Slow fwd LF (1–2), Quick side RF (3), Quick close (4).",
          follow: "Slow back RF (1–2), Quick side LF (3), Quick close (4)."
        },
        {
          name: "Fifth Position Breaks",
          tonight: false,
          lead: "Step back into open break on Slow, collect on Quick-Quick.",
          follow: "Rock back cleanly on Slow, return to partner on Q–Q."
        },
        {
          name: "Underarm Turn",
          tonight: false,
          lead: "Lift L hand on Slow, keep box compact while partner turns.",
          follow: "Pivot smoothly clockwise under arch on Slow–Q–Q."
        }
      ]
    },
    chacha: {
      name: "Cha-Cha",
      bpm: 122,
      meter: "4/4",
      beats: 4,
      lane: "Spot Dance",
      isSpot: true,
      watchCue: "2 · 3 · Cha-Cha",
      steps: [
        {
          name: "Basic & Chassé",
          tonight: true,
          lead: "Rock fwd LF on 2, replace 3, triple side on 4-&-1.",
          follow: "Rock back RF on 2, replace 3, triple side on 4-&-1."
        },
        {
          name: "Cross-Over Break",
          tonight: false,
          lead: "Open to side on 2, check weight, chassé back to center.",
          follow: "Step across on 2 with free arm extended, return on 4-&-1."
        },
        {
          name: "Chase Turn",
          tonight: false,
          lead: "Step fwd LF on 2, pivot 180° on 3, triple on 4-&-1.",
          follow: "Follow partner's lead on 2–3, crisp lock on 4-&-1."
        }
      ]
    },
    foxtrot: {
      name: "Social Foxtrot",
      bpm: 124,
      meter: "4/4",
      beats: 4,
      lane: "Outer Lane",
      isSpot: false,
      watchCue: "S · S · Q · Q",
      steps: [
        {
          name: "Magic Step",
          tonight: true,
          lead: "Walk LF Slow, walk RF Slow, side-close Quick-Quick.",
          follow: "Glide back RF Slow, LF Slow, side-close Quick-Quick."
        },
        {
          name: "Left Rock Turn",
          tonight: false,
          lead: "Turn 90° left on Slow-Slow, finish side-close Q–Q.",
          follow: "Match frame rotation on Slow-Slow, close cleanly."
        },
        {
          name: "Promenade Walk",
          tonight: false,
          lead: "Open to promenade for two Smooth walks, close on Q–Q.",
          follow: "Keep gaze down Line of Dance, glide smoothly."
        }
      ]
    }
  };

  let currentDanceKey = "waltz";
  let currentRole = "lead";
  let currentBeat = 1;
  let beatTimer = null;

  const elDanceName = document.getElementById("hero-dance-name");
  const elBpm = document.getElementById("hero-bpm");
  const elMeter = document.getElementById("hero-meter");
  const elLane = document.getElementById("hero-lane");
  const elSteps = document.getElementById("hero-steps");
  const elBeatDot = document.getElementById("hero-beat-dot");
  const elWatchRing = document.getElementById("hero-watch-ring");
  const elWatchBeat = document.getElementById("hero-watch-beat");
  const elWatchCue = document.getElementById("hero-watch-cue");
  const roleLeadBtn = document.getElementById("role-lead-btn");
  const roleFollowBtn = document.getElementById("role-follow-btn");

  function renderHeroDance() {
    if (!elDanceName) return;
    const d = DEMO_DANCES[currentDanceKey];
    elDanceName.textContent = d.name;
    elBpm.textContent = `${d.bpm} BPM`;
    elMeter.textContent = d.meter;
    elLane.textContent = d.lane;
    elLane.classList.toggle("spot", d.isSpot);
    elWatchCue.textContent = d.watchCue;

    elSteps.innerHTML = d.steps
      .map(
        (s) => `
        <div class="step-item">
          <div class="step-item-head">
            <span class="step-name">${s.name}</span>
            ${s.tonight ? '<span class="tonight-tag">★ Tonight</span>' : ""}
          </div>
          <div class="step-cue">${currentRole === "lead" ? s.lead : s.follow}</div>
        </div>`
      )
      .join("");

    roleLeadBtn.classList.toggle("active-lead", currentRole === "lead");
    roleFollowBtn.classList.toggle("active-follow", currentRole === "follow");
    roleLeadBtn.setAttribute("aria-pressed", String(currentRole === "lead"));
    roleFollowBtn.setAttribute("aria-pressed", String(currentRole === "follow"));

    startBeatPulse();
  }

  function startBeatPulse() {
    if (beatTimer) clearInterval(beatTimer);
    if (!elWatchBeat) return;
    const d = DEMO_DANCES[currentDanceKey];
    const intervalMs = Math.round(60000 / d.bpm);
    currentBeat = 1;

    const tick = () => {
      const isBeat1 = currentBeat === 1;
      elWatchBeat.textContent = String(currentBeat);
      elWatchBeat.classList.toggle("is-beat1", isBeat1);
      if (elBeatDot) elBeatDot.classList.toggle("beat-1", isBeat1);
      if (elWatchRing) {
        elWatchRing.classList.remove("pulse-beat1", "pulse-tick");
        void elWatchRing.offsetWidth;
        elWatchRing.classList.add(isBeat1 ? "pulse-beat1" : "pulse-tick");
      }
      currentBeat = currentBeat >= d.beats ? 1 : currentBeat + 1;
    };

    tick();
    beatTimer = setInterval(tick, intervalMs);
  }

  if (roleLeadBtn && roleFollowBtn) {
    roleLeadBtn.addEventListener("click", () => {
      currentRole = "lead";
      renderHeroDance();
    });
    roleFollowBtn.addEventListener("click", () => {
      currentRole = "follow";
      renderHeroDance();
    });
  }

  document.querySelectorAll("[data-demo-dance]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDanceKey = btn.dataset.demoDance;
      document.querySelectorAll("[data-demo-dance]").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });
      renderHeroDance();
    });
  });

  renderHeroDance();

  /* ---------- Interactive Feel Chips Demo (Feature 1) ---------- */
  const FEEL_MAP = {
    chacha: { badge: "Best match: Cha-Cha", note: "Crisp 4-&-1 syncopation locked · 122 BPM" },
    swung: { badge: "Best match: Social Foxtrot", note: "Swung jazz groove · Outer Line of Dance" },
    tango: { badge: "Best match: American Tango", note: "Sharp staccato accents · Compact Tango Hold" },
    latin: { badge: "Best match: American Rumba", note: "Smooth romantic Latin box · Slow–Quick–Quick" },
    ballad: { badge: "Best match: Nightclub Two-Step", note: "Half-time slow ballad sway · 61 BPM feel" }
  };

  const feelBadge = document.getElementById("feel-match-badge");
  const feelNote = document.getElementById("feel-match-note");
  document.querySelectorAll("[data-feel]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const info = FEEL_MAP[chip.dataset.feel];
      if (!info) return;
      document.querySelectorAll("[data-feel]").forEach((c) => c.classList.toggle("active", c === chip));
      if (feelBadge) feelBadge.textContent = info.badge;
      if (feelNote) feelNote.textContent = info.note;
    });
  });

  /* ---------- Interactive Speed Pills Demo (Feature 2) ---------- */
  const speedReadout = document.getElementById("speed-readout");
  document.querySelectorAll("[data-speed]").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("[data-speed]").forEach((p) => p.classList.toggle("active", p === pill));
      if (speedReadout) speedReadout.textContent = `Looping muted at ${pill.dataset.speed} speed`;
    });
  });

  /* ---------- Interactive Watch Haptic Mode Demo (Feature 3) ---------- */
  const WATCH_MODES = {
    steps: { title: "Slow · Quick · Quick", sub: "Distinct buzz lengths match your dance timing" },
    beats: { title: "1 · 2 · 3 · 4", sub: "Heavy Beat 1 double-thump + light measure ticks" },
    beat1: { title: "Beat 1 Only", sub: "Minimal single pulse at the top of each bar" }
  };
  const oledTitle = document.getElementById("oled-mode-title");
  const oledSub = document.getElementById("oled-mode-sub");
  document.querySelectorAll("[data-watch-mode]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const info = WATCH_MODES[pill.dataset.watchMode];
      if (!info) return;
      document.querySelectorAll("[data-watch-mode]").forEach((p) => p.classList.toggle("active", p === pill));
      if (oledTitle) oledTitle.textContent = info.title;
      if (oledSub) oledSub.textContent = info.sub;
    });
  });

  /* ---------- 9 Dances Category Filter ---------- */
  const danceCards = document.querySelectorAll(".dance-card[data-category]");
  document.querySelectorAll("[data-dance-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.danceFilter;
      document.querySelectorAll("[data-dance-filter]").forEach((b) => b.classList.toggle("active", b === btn));
      danceCards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const isOpen = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", String(!isOpen));
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---------- Mobile Menu Toggle ---------- */
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Early Access / Google Play CTA & Waitlist Modal ---------- */
  const modal = document.getElementById("waitlist-modal");
  const modalClose = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalSub = document.getElementById("modal-sub");
  const platformSelect = document.getElementById("waitlist-platform");
  const waitlistForm = document.getElementById("waitlist-form");
  const formStatus = document.getElementById("waitlist-status");

  // If GOOGLE_PLAY_URL is populated in config.js, turn Android CTAs into direct Play Store links.
  if (cfg.GOOGLE_PLAY_URL) {
    document.querySelectorAll("[data-cta='android']").forEach((el) => {
      el.textContent = "Get it on Google Play";
      if (el.tagName === "A") {
        el.href = cfg.GOOGLE_PLAY_URL;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
    });
  }

  function openModal(mode) {
    if (!modal) return;
    if (mode === "ios") {
      modalTitle.textContent = "Join the iOS & Apple Watch Waitlist";
      modalSub.textContent = "Be the first to know when Pocket Ballroom arrives on the App Store.";
      platformSelect.value = "iOS & Apple Watch Waitlist";
    } else if (mode === "studio") {
      modalTitle.textContent = "Partner with Pocket Ballroom";
      modalSub.textContent = "Bring a dim-floor-friendly Friday social companion to your newcomers.";
      platformSelect.value = "Studio Instructor / Host";
    } else {
      modalTitle.textContent = "Join Android & Wear OS Early Access";
      modalSub.textContent = "Get invited to our Google Play closed beta before Friday's social.";
      platformSelect.value = "Android + Wear OS Beta";
    }
    if (formStatus) {
      formStatus.className = "form-status";
      formStatus.textContent = "";
    }
    modal.setAttribute("aria-hidden", "false");
    const emailInput = document.getElementById("waitlist-email");
    if (emailInput) setTimeout(() => emailInput.focus(), 60);
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll("[data-open-modal]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (trigger.dataset.cta === "android" && cfg.GOOGLE_PLAY_URL) return;
      e.preventDefault();
      openModal(trigger.dataset.openModal);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
    });
  }

  if (waitlistForm) {
    waitlistForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("waitlist-email").value.trim();
      const platform = platformSelect.value;
      const studio = document.getElementById("waitlist-studio").value.trim();
      if (!email) return;

      if (cfg.WAITLIST_ENDPOINT) {
        try {
          const res = await fetch(cfg.WAITLIST_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ email, platform, studio })
          });
          if (res.ok) {
            formStatus.className = "form-status success";
            formStatus.textContent = "You're on the list! Watch your inbox before Friday's social.";
            waitlistForm.reset();
            return;
          }
        } catch (_) {
          // Fall through to mailto fallback
        }
      }

      const targetEmail = cfg.CONTACT_EMAIL || "hello@pocketballroom.com";
      const subject = encodeURIComponent(`[Pocket Ballroom] ${platform}`);
      const body = encodeURIComponent(
        `Hi Pocket Ballroom team,\n\nPlease add me to: ${platform}\nEmail: ${email}${studio ? `\nStudio / City: ${studio}` : ""}\n`
      );
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
      formStatus.className = "form-status info";
      formStatus.textContent = `Opened your email app to ${targetEmail}. You can also write us directly anytime.`;
    });
  }
})();
