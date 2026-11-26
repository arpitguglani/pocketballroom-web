/**
 * Pocket Ballroom — Site Launch Configuration
 *
 * Flip GOOGLE_PLAY_URL from "" to your live Google Play Store URL once published
 * to automatically switch all primary CTAs from "Join Android Beta" to "Get it on Google Play".
 *
 * Optionally paste a free Formspree endpoint (e.g. "https://formspree.io/f/xxxxxxxx")
 * into WAITLIST_ENDPOINT to collect Android Beta & iOS Waitlist signups directly on-page.
 * When empty, the form gracefully opens a pre-filled email to hello@pocketballroom.com.
 */
window.POCKET_BALLROOM_CONFIG = {
  GOOGLE_PLAY_URL: "",
  WAITLIST_ENDPOINT: "",
  CONTACT_EMAIL: "hello@pocketballroom.com",
  PRIVACY_EMAIL: "privacy@pocketballroom.com",
  SOCIAL: {
    instagram: "https://instagram.com/pocketballroom",
    tiktok: "https://tiktok.com/@pocketballroom",
    youtube: "https://youtube.com/@pocketballroom",
    x: "https://x.com/pocketballroom"
  }
};
