(() => {
  const cfg = window.POCKET_BALLROOM_CONFIG || {};

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Interactive Hero Listen Preview ---------- */
  const DEMO_DANCES = {
    waltz: {
      songTitle: "Can't Help Falling in Love",
      songArtist: "Elvis Presley",
      name: "Slow Waltz",
      shortName: "Waltz",
      bpm: 90,
      meter: "3/4",
      beats: 3,
      lane: "Travel",
      confidence: "96%",
      isLikely: false,
      altDanceKey: "foxtrot",
      altLabel: "★ Foxtrot",
      octaveLabel: "Double speed",
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
      songTitle: "Stand by Me",
      songArtist: "Ben E. King",
      name: "American Rumba",
      shortName: "Rumba",
      bpm: 118,
      meter: "4/4",
      beats: 4,
      lane: "In place",
      confidence: "94%",
      isLikely: false,
      altDanceKey: "chacha",
      altLabel: "★ Cha-Cha",
      octaveLabel: "Half speed",
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
      songTitle: "Mambo No. 5",
      songArtist: "Lou Bega",
      name: "Cha-Cha",
      shortName: "Cha-Cha",
      bpm: 126,
      meter: "4/4",
      beats: 4,
      lane: "In place",
      confidence: "91%",
      isLikely: false,
      altDanceKey: "rumba",
      altLabel: "★ Rumba",
      octaveLabel: "Half speed",
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
      songTitle: "It Had to Be You",
      songArtist: "Frank Sinatra",
      name: "Social Foxtrot",
      shortName: "Foxtrot",
      bpm: 133,
      meter: "4/4",
      beats: 4,
      lane: "Travel",
      confidence: "72% · Likely",
      isLikely: true,
      altDanceKey: "waltz",
      altLabel: "★ Waltz",
      octaveLabel: "Half speed",
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
    },
    salsa: {
      songTitle: "Vivir Mi Vida",
      songArtist: "Marc Anthony",
      name: "Salsa (On1)",
      shortName: "Salsa",
      bpm: 180,
      meter: "4/4",
      beats: 4,
      lane: "In place",
      confidence: "95%",
      isLikely: false,
      altDanceKey: "chacha",
      altLabel: "★ Cha-Cha",
      octaveLabel: "Half speed",
      watchCue: "1·2·3 · 5·6·7",
      steps: [
        {
          name: "On1 Basic",
          tonight: true,
          lead: "LF fwd on 1, replace 2, close 3 (hold 4); RF back 5–6–7.",
          follow: "RF back on 1, replace 2, close 3 (hold 4); LF fwd 5–6–7."
        },
        {
          name: "Cross-Body Lead",
          tonight: false,
          lead: "1–2–3 open side lane · 5–6–7 guide partner across slot.",
          follow: "1–2–3 step fwd into slot · 5–6–7 walk across and pivot."
        },
        {
          name: "Right Underarm Turn",
          tonight: false,
          lead: "Raise L hand on 3, keep compact basic while partner turns 5–6–7.",
          follow: "Step fwd on 5, pivot right on 6, finish facing on 7."
        }
      ]
    }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentDanceKey = "waltz";
  let currentRole = "lead";
  let currentBeat = 1;
  let isBeatPlaying = !prefersReducedMotion;
  let beatTimer = null;
  let heroOctaveScaled = false;
  const savedSongs = new Set(["rumba"]);

  const elSongTitle = document.getElementById("hero-song-title");
  const elSongArtist = document.getElementById("hero-song-artist");
  const elBookmarkBtn = document.getElementById("hero-bookmark-btn");
  const elDanceName = document.getElementById("hero-dance-name");
  const elSubline = document.getElementById("hero-subline");
  const elConfidence = document.getElementById("hero-confidence");
  const elAltPill = document.getElementById("hero-alt-pill");
  const elAdjustBtn = document.getElementById("hero-adjust-btn");
  const elAdjustDrawer = document.getElementById("hero-adjust-drawer");
  const elOctaveBtn = document.getElementById("hero-octave-btn");
  const elMovesHeading = document.getElementById("hero-moves-heading");
  const elSteps = document.getElementById("hero-steps");

  const elBeatBar = document.querySelector(".beat-bar");
  const elBeatToggle = document.getElementById("hero-beat-toggle");
  const elBeatDots = document.getElementById("hero-beat-dots");
  const elBpm = document.getElementById("hero-bpm");
  const elSnapBtn = document.getElementById("hero-snap-btn");

  const elWatchRing = document.getElementById("hero-watch-ring");
  const elWatchBeat = document.getElementById("hero-watch-beat");
  const elWatchCue = document.getElementById("hero-watch-cue");
  const roleLeadBtn = document.getElementById("role-lead-btn");
  const roleFollowBtn = document.getElementById("role-follow-btn");

  function activeHeroBpm() {
    const d = DEMO_DANCES[currentDanceKey];
    if (!heroOctaveScaled) return d.bpm;
    return d.octaveLabel === "Double speed" ? Math.round(d.bpm * 1.5) : Math.round(d.bpm / 2);
  }

  function renderBeatDots(totalBeats, beatNumber) {
    if (!elBeatDots) return;
    if (elBeatDots.children.length !== totalBeats) {
      elBeatDots.innerHTML = Array.from({ length: totalBeats }, () => '<span class="beat-dot-pip"></span>').join("");
    }
    Array.from(elBeatDots.children).forEach((pip, idx) => {
      const isCurrent = idx + 1 === beatNumber;
      pip.classList.toggle("is-active", isCurrent);
      pip.classList.toggle("is-beat1", isCurrent && beatNumber === 1);
    });
  }

  function renderBeatDisplay(beatNumber) {
    const d = DEMO_DANCES[currentDanceKey];
    const isBeat1 = beatNumber === 1;
    renderBeatDots(d.beats, beatNumber);
    if (elWatchBeat) {
      elWatchBeat.textContent = String(beatNumber);
      elWatchBeat.classList.toggle("is-beat1", isBeat1);
    }
    if (elWatchRing) {
      elWatchRing.classList.remove("pulse-beat1", "pulse-tick");
      void elWatchRing.offsetWidth;
      if (isBeatPlaying) {
        elWatchRing.classList.add(isBeat1 ? "pulse-beat1" : "pulse-tick");
      }
    }
  }

  function syncBeatControls() {
    if (elBeatBar) elBeatBar.classList.toggle("is-paused", !isBeatPlaying);
    if (elBeatToggle) {
      elBeatToggle.setAttribute("aria-label", isBeatPlaying ? "Pause beat coach" : "Play beat coach");
    }
  }

  function startBeatPulse() {
    if (beatTimer) clearInterval(beatTimer);
    beatTimer = null;
    syncBeatControls();

    const d = DEMO_DANCES[currentDanceKey];
    currentBeat = 1;
    renderBeatDisplay(currentBeat);
    if (!isBeatPlaying) return;

    const bpm = activeHeroBpm();
    const intervalMs = Math.round(60000 / bpm);
    beatTimer = setInterval(() => {
      currentBeat = currentBeat >= d.beats ? 1 : currentBeat + 1;
      renderBeatDisplay(currentBeat);
    }, intervalMs);
  }

  function renderHeroDance() {
    if (!elDanceName) return;
    const d = DEMO_DANCES[currentDanceKey];
    const bpm = activeHeroBpm();

    if (elSongTitle) elSongTitle.textContent = d.songTitle;
    if (elSongArtist) elSongArtist.textContent = d.songArtist;
    if (elBookmarkBtn) {
      const isSaved = savedSongs.has(currentDanceKey);
      elBookmarkBtn.classList.toggle("saved", isSaved);
      elBookmarkBtn.setAttribute("aria-pressed", String(isSaved));
      elBookmarkBtn.setAttribute(
        "aria-label",
        isSaved ? `Saved ${d.songTitle} for My Studio` : `Save ${d.songTitle} to Studio Memory`
      );
    }

    elDanceName.textContent = d.name;
    if (elSubline) elSubline.textContent = `${d.watchCue} · ${d.lane} · ${bpm} BPM`;
    if (elConfidence) {
      elConfidence.textContent = d.confidence;
      elConfidence.classList.toggle("is-likely", d.isLikely);
    }
    if (elAltPill) {
      elAltPill.textContent = d.altLabel;
      elAltPill.dataset.targetDance = d.altDanceKey;
    }
    if (elOctaveBtn) {
      elOctaveBtn.textContent = d.octaveLabel;
      elOctaveBtn.classList.toggle("active", heroOctaveScaled);
    }
    if (elMovesHeading) elMovesHeading.textContent = `Your ${d.shortName} Moves`;
    if (elBpm) elBpm.textContent = `${bpm} BPM`;
    if (elWatchCue) elWatchCue.textContent = d.watchCue;

    elSteps.innerHTML = d.steps
      .map(
        (s) => `
        <div class="step-item${s.tonight ? " is-tonight" : ""}">
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

    document.querySelectorAll("[data-demo-dance]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.demoDance === currentDanceKey);
    });

    startBeatPulse();
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
      heroOctaveScaled = false;
      renderHeroDance();
    });
  });

  if (elAltPill) {
    elAltPill.addEventListener("click", () => {
      const target = elAltPill.dataset.targetDance;
      if (target && DEMO_DANCES[target]) {
        currentDanceKey = target;
        heroOctaveScaled = false;
        renderHeroDance();
      }
    });
  }

  if (elBookmarkBtn) {
    elBookmarkBtn.addEventListener("click", () => {
      if (savedSongs.has(currentDanceKey)) {
        savedSongs.delete(currentDanceKey);
      } else {
        savedSongs.add(currentDanceKey);
      }
      renderHeroDance();
    });
  }

  if (elAdjustBtn && elAdjustDrawer) {
    elAdjustBtn.addEventListener("click", () => {
      const expanded = elAdjustBtn.getAttribute("aria-expanded") === "true";
      elAdjustBtn.setAttribute("aria-expanded", String(!expanded));
      elAdjustDrawer.hidden = expanded;
    });
  }

  if (elOctaveBtn) {
    elOctaveBtn.addEventListener("click", () => {
      heroOctaveScaled = !heroOctaveScaled;
      renderHeroDance();
    });
  }

  if (elBeatToggle) {
    elBeatToggle.addEventListener("click", () => {
      isBeatPlaying = !isBeatPlaying;
      startBeatPulse();
    });
  }

  if (elSnapBtn) {
    elSnapBtn.addEventListener("click", () => {
      isBeatPlaying = true;
      startBeatPulse();
    });
  }

  renderHeroDance();

  /* ---------- Interactive Feel Chips, Octave & Studio Memory (Chapter 1) ---------- */
  const FEEL_MAP = {
    chacha: { badge: "Cha-Cha · 88%", note: "Crisp Cha-Cha-Cha rhythm" },
    swung: { badge: "Foxtrot · 72% Likely", note: "Swung jazz groove · Travel" },
    tango: { badge: "Tango · 84%", note: "Sharp staccato accents · Travel" },
    latin: { badge: "Rumba · 86%", note: "Smooth Latin box · Slow–Q–Q" },
    ballad: { badge: "NC 2-Step · 79%", note: "Slow ballad side glide" }
  };

  let f1Feel = "chacha";
  let f1Octave = 1;
  let f1Saved = false;

  const feelBadge = document.getElementById("feel-match-badge");
  const feelNote = document.getElementById("feel-match-note");
  const f1BpmReadout = document.getElementById("f1-bpm-readout");
  const f1BookmarkBtn = document.getElementById("f1-bookmark-btn");
  const f1BookmarkLabel = document.getElementById("f1-bookmark-label");

  function renderFeature1() {
    const info = FEEL_MAP[f1Feel];
    const bpm = f1Octave === 0.5 ? 61 : 122;
    if (feelBadge) feelBadge.textContent = info.badge;
    if (feelNote) feelNote.textContent = `${info.note} · ${bpm} BPM`;
    if (f1BpmReadout) f1BpmReadout.textContent = `${bpm} BPM · 4/4`;
  }

  document.querySelectorAll("[data-feel]").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (!FEEL_MAP[chip.dataset.feel]) return;
      f1Feel = chip.dataset.feel;
      document.querySelectorAll("[data-feel]").forEach((c) => c.classList.toggle("active", c === chip));
      renderFeature1();
    });
  });

  document.querySelectorAll("[data-octave]").forEach((pill) => {
    pill.addEventListener("click", () => {
      f1Octave = Number(pill.dataset.octave);
      document.querySelectorAll("[data-octave]").forEach((p) => p.classList.toggle("active", p === pill));
      renderFeature1();
    });
  });

  if (f1BookmarkBtn && f1BookmarkLabel) {
    f1BookmarkBtn.addEventListener("click", () => {
      f1Saved = !f1Saved;
      f1BookmarkBtn.classList.toggle("saved", f1Saved);
      f1BookmarkBtn.setAttribute("aria-pressed", String(f1Saved));
      f1BookmarkLabel.textContent = f1Saved ? "Saved for My Studio" : "Save for My Studio";
    });
  }

  /* ---------- Interactive Speed & Role Cue Demo (Chapter 2) ---------- */
  const speedReadout = document.getElementById("speed-readout");
  document.querySelectorAll("[data-speed]").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("[data-speed]").forEach((p) => p.classList.toggle("active", p === pill));
      if (speedReadout) speedReadout.textContent = `Looping muted at ${pill.dataset.speed} speed`;
    });
  });

  const f2CueText = document.getElementById("f2-cue-text");
  const F2_CUES = {
    lead: "1–2–3 open side lane · 5–6–7 guide partner across slot.",
    follow: "1–2–3 step fwd into slot · 5–6–7 walk across and pivot."
  };
  document.querySelectorAll("[data-f2-role]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const role = btn.dataset.f2Role;
      document.querySelectorAll("[data-f2-role]").forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active-lead", active && role === "lead");
        b.classList.toggle("active-follow", active && role === "follow");
        b.setAttribute("aria-pressed", String(active));
      });
      if (f2CueText && F2_CUES[role]) f2CueText.textContent = F2_CUES[role];
    });
  });

  /* ---------- Interactive Watch Haptic Mode & Training Wheels Demo (Chapter 3) ---------- */
  const WATCH_MODES = {
    steps: {
      title: "Slow · Quick · Quick",
      sub: "Buzzes match your dance footwork",
      pips: ["is-beat1", "is-slow", "is-accent", "is-accent"]
    },
    beats: {
      title: "1 · 2 · 3 · 4",
      sub: "Strong Beat 1 pulse + measure ticks",
      pips: ["is-beat1", "is-accent", "is-accent", "is-accent"]
    },
    beat1: {
      title: "Beat 1 Only",
      sub: "Single pulse at the top of each bar",
      pips: ["is-beat1", "", "", ""]
    }
  };
  const oledTitle = document.getElementById("oled-mode-title");
  const oledSub = document.getElementById("oled-mode-sub");
  const oledRhythmBar = document.getElementById("oled-rhythm-bar");
  const oledFadeToggle = document.getElementById("oled-fade-toggle");
  const oledFadeLabel = document.getElementById("oled-fade-label");
  let f3FadeOn = false;

  function renderRhythmBar(modeKey) {
    if (!oledRhythmBar) return;
    const info = WATCH_MODES[modeKey];
    if (!info) return;
    oledRhythmBar.innerHTML = info.pips
      .map((cls) => `<span class="rhythm-pip${cls ? " " + cls : ""}"></span>`)
      .join("");
  }

  document.querySelectorAll("[data-watch-mode]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.watchMode;
      const info = WATCH_MODES[key];
      if (!info) return;
      document.querySelectorAll("[data-watch-mode]").forEach((p) => p.classList.toggle("active", p === pill));
      if (oledTitle) oledTitle.textContent = info.title;
      if (oledSub) oledSub.textContent = info.sub;
      renderRhythmBar(key);
    });
  });
  renderRhythmBar("steps");

  if (oledFadeToggle && oledFadeLabel) {
    oledFadeToggle.addEventListener("click", () => {
      f3FadeOn = !f3FadeOn;
      oledFadeToggle.classList.toggle("active", f3FadeOn);
      oledFadeToggle.setAttribute("aria-pressed", String(f3FadeOn));
      oledFadeLabel.textContent = f3FadeOn
        ? "Training Wheels: Fades softly after 8 bars (On)"
        : "Training Wheels: Fade after 8 bars (Off)";
    });
  }

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

  /* ---------- Mobile Menu Toggle & Scroll-State Header Fallback ---------- */
  const siteHeader = document.getElementById("site-header");
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      if (siteHeader) siteHeader.classList.toggle("menu-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        if (siteHeader) siteHeader.classList.remove("menu-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (siteHeader && !CSS.supports("container-type", "scroll-state")) {
    let lastY = scrollY;
    window.addEventListener(
      "scroll",
      () => {
        const y = Math.max(0, Math.min(scrollY, document.documentElement.scrollHeight - innerHeight));
        if (y === lastY) return;
        siteHeader.classList.toggle("is-hidden", y > lastY && y > siteHeader.offsetHeight);
        lastY = y;
      },
      { passive: true }
    );
  }

  /* ---------- Early Access / Google Play CTA & Native <dialog> Modal ---------- */
  const modal = document.getElementById("waitlist-modal");
  const modalClose = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalSub = document.getElementById("modal-sub");
  const platformSelect = document.getElementById("waitlist-platform");
  const waitlistForm = document.getElementById("waitlist-form");
  const formStatus = document.getElementById("waitlist-status");

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
    modal.showModal();
  }

  document.querySelectorAll("[data-open-modal]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (trigger.dataset.cta === "android" && cfg.GOOGLE_PLAY_URL) return;
      e.preventDefault();
      openModal(trigger.dataset.openModal);
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener("click", () => modal.close("cancel"));
  }

  if (modal) {
    modal.addEventListener("close", () => {
      modal.returnValue = "";
    });

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const outside = (e) => {
        const r = modal.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      modal.addEventListener("pointerdown", (e) => {
        pressedOutside = outside(e);
      });
      modal.addEventListener("pointerup", (e) => {
        if (pressedOutside && outside(e)) modal.close("backdrop");
        pressedOutside = false;
      });
    }
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
