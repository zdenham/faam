"use client";

import { useState } from "react";

type FormType = "restaurant" | "creator";

export default function SignUp() {
  const [formType, setFormType] = useState<FormType>("restaurant");

  return (
    <>
      {/* ── NAV ── */}
      <nav style={styles.nav}>
        <a href="/" style={styles.logo}>FAAM</a>
        <div style={styles.navLinks}>
          <a href="/#how-it-works" style={styles.navLink}>How It Works</a>
          <a href="/#restaurants" style={styles.navLink}>For Restaurants</a>
          <a href="/#creators" style={styles.navLink}>For Creators</a>
          <a href="/signup" style={styles.ctaButton}>Sign Up</a>
        </div>
      </nav>

      <div style={styles.page}>
        <div style={styles.header}>
          <h1 style={styles.title}>Join FAAM</h1>
          <p style={styles.subtitle}>
            Tell us about yourself so we can start matching you with the perfect partners.
          </p>
        </div>

        {/* ── TOGGLE ── */}
        <div style={styles.toggle}>
          <button
            onClick={() => setFormType("restaurant")}
            style={formType === "restaurant" ? styles.toggleActive : styles.toggleInactive}
          >
            I'm a Restaurant
          </button>
          <button
            onClick={() => setFormType("creator")}
            style={formType === "creator" ? styles.toggleActive : styles.toggleInactive}
          >
            I'm a Creator
          </button>
        </div>

        {/* ── FORMS ── */}
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          {formType === "restaurant" ? <RestaurantForm /> : <CreatorForm />}

          <button type="submit" style={styles.submitBtn}>
            Submit Application
          </button>
          <p style={styles.disclaimer}>
            We'll review your application and get back to you within 48 hours.
          </p>
        </form>
      </div>
    </>
  );
}

/* ── RESTAURANT FORM ── */
function RestaurantForm() {
  return (
    <>
      <SectionLabel label="Basic Information" />
      <div style={styles.row}>
        <Field label="Restaurant Name" name="restaurantName" placeholder="e.g. Sakura Ramen" required />
        <Field label="Contact Name" name="contactName" placeholder="Full name" required />
      </div>
      <div style={styles.row}>
        <Field label="Email" name="email" type="email" placeholder="you@restaurant.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
      </div>

      <SectionLabel label="Location" />
      <Field label="Address" name="address" placeholder="123 Main St" required />
      <div style={styles.row}>
        <Field label="City" name="city" placeholder="San Francisco" required />
        <Field label="State" name="state" placeholder="CA" required />
        <Field label="ZIP" name="zip" placeholder="94102" />
      </div>

      <SectionLabel label="About Your Restaurant" />
      <div style={styles.row}>
        <SelectField
          label="Cuisine Type"
          name="cuisine"
          options={["American", "Italian", "Japanese", "Mexican", "Chinese", "Indian", "Thai", "Mediterranean", "Korean", "French", "Fusion", "Other"]}
          required
        />
        <SelectField
          label="Price Range"
          name="priceRange"
          options={["$ (Under $15)", "$$ ($15–$30)", "$$$ ($30–$60)", "$$$$ ($60+)"]}
          required
        />
      </div>
      <div style={styles.row}>
        <SelectField
          label="Number of Locations"
          name="locations"
          options={["1", "2–5", "6–20", "20+"]}
        />
        <SelectField
          label="Average Monthly Foot Traffic"
          name="footTraffic"
          options={["Under 1,000", "1,000–5,000", "5,000–20,000", "20,000+"]}
        />
      </div>
      <TextareaField
        label="What makes your restaurant unique?"
        name="uniqueness"
        placeholder="Tell us about your vibe, signature dishes, ambiance, or anything that sets you apart..."
      />

      <SectionLabel label="Online Presence" />
      <Field label="Website" name="website" type="url" placeholder="https://yourrestaurant.com" />
      <div style={styles.row}>
        <Field label="Instagram" name="instagram" placeholder="@yourrestaurant" />
        <Field label="TikTok" name="tiktok" placeholder="@yourrestaurant" />
      </div>
      <div style={styles.row}>
        <Field label="Yelp Page" name="yelp" placeholder="https://yelp.com/biz/..." />
        <Field label="Google Maps Link" name="google" placeholder="https://maps.google.com/..." />
      </div>

      <SectionLabel label="Partnership Preferences" />
      <SelectField
        label="What are you looking for?"
        name="goal"
        options={[
          "Increase foot traffic",
          "Build social media presence",
          "Promote a new menu / opening",
          "General brand awareness",
          "All of the above",
        ]}
        required
      />
      <SelectField
        label="What can you offer creators?"
        name="offer"
        options={[
          "Complimentary meals",
          "Complimentary meals + monetary compensation",
          "Exclusive tasting events",
          "Long-term brand ambassador deal",
          "Open to discussion",
        ]}
        required
      />
      <SelectField
        label="Preferred creator audience size"
        name="creatorSize"
        options={[
          "Micro (1K–10K followers)",
          "Mid-tier (10K–100K followers)",
          "Macro (100K–1M followers)",
          "Any size",
        ]}
      />
      <TextareaField
        label="Anything else we should know?"
        name="notes"
        placeholder="Additional details, preferred content style, ideal posting schedule, etc."
      />
    </>
  );
}

/* ── CREATOR FORM ── */
function CreatorForm() {
  return (
    <>
      <SectionLabel label="Basic Information" />
      <div style={styles.row}>
        <Field label="Full Name" name="fullName" placeholder="Your name" required />
        <Field label="Display / Creator Name" name="displayName" placeholder="@yourhandle" required />
      </div>
      <div style={styles.row}>
        <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
      </div>
      <div style={styles.row}>
        <Field label="City" name="city" placeholder="San Francisco" required />
        <Field label="State" name="state" placeholder="CA" required />
      </div>

      <SectionLabel label="Social Profiles" />
      <div style={styles.row}>
        <Field label="Instagram" name="instagram" placeholder="@yourhandle" />
        <Field label="Instagram Followers" name="igFollowers" placeholder="e.g. 25,000" />
      </div>
      <div style={styles.row}>
        <Field label="TikTok" name="tiktok" placeholder="@yourhandle" />
        <Field label="TikTok Followers" name="ttFollowers" placeholder="e.g. 100,000" />
      </div>
      <div style={styles.row}>
        <Field label="YouTube" name="youtube" placeholder="Channel URL" />
        <Field label="YouTube Subscribers" name="ytSubscribers" placeholder="e.g. 50,000" />
      </div>
      <Field label="Other Platforms" name="otherPlatforms" placeholder="Twitter, blog, newsletter, etc." />
      <Field label="Website / Portfolio" name="website" type="url" placeholder="https://yoursite.com" />

      <SectionLabel label="About Your Content" />
      <SelectField
        label="Primary Content Niche"
        name="niche"
        options={["Food & Dining", "Lifestyle", "Travel", "Health & Wellness", "Comedy / Entertainment", "Fashion", "Multiple niches"]}
        required
      />
      <SelectField
        label="Content Format"
        name="format"
        options={["Short-form video (Reels, TikTok)", "Long-form video (YouTube)", "Photos & carousels", "Blog / written reviews", "Mix of everything"]}
        required
      />
      <SelectField
        label="How often do you post?"
        name="frequency"
        options={["Daily", "3–5 times per week", "1–2 times per week", "A few times per month"]}
      />
      <TextareaField
        label="Describe your content style"
        name="style"
        placeholder="e.g. cinematic food close-ups, humorous reviews, honest first-bite reactions, aesthetic flat-lays..."
      />

      <SectionLabel label="Audience & Demographics" />
      <div style={styles.row}>
        <SelectField
          label="Total Audience Size"
          name="audienceSize"
          options={["Under 1K", "1K–10K", "10K–50K", "50K–100K", "100K–500K", "500K–1M", "1M+"]}
          required
        />
        <SelectField
          label="Primary Audience Age Range"
          name="audienceAge"
          options={["13–17", "18–24", "25–34", "35–44", "45+", "Mixed"]}
        />
      </div>
      <SelectField
        label="Primary Audience Location"
        name="audienceLocation"
        options={["Local / same city", "Regional", "National (US)", "International", "Mixed"]}
      />

      <SectionLabel label="Partnership Preferences" />
      <SelectField
        label="What types of restaurants interest you?"
        name="cuisineInterest"
        options={["Fine dining", "Casual dining", "Fast casual", "Cafés & bakeries", "Bars & nightlife", "All types"]}
      />
      <SelectField
        label="What are you looking for?"
        name="goal"
        options={[
          "Free meals & experiences",
          "Paid collaborations",
          "Long-term brand partnerships",
          "Growing my audience",
          "All of the above",
        ]}
        required
      />
      <TextareaField
        label="Link to your best food-related content"
        name="bestContent"
        placeholder="Paste a URL to a post, reel, or video that showcases your work..."
      />
      <TextareaField
        label="Anything else we should know?"
        name="notes"
        placeholder="Dietary restrictions, availability, preferred collaboration style, etc."
      />
    </>
  );
}

/* ── REUSABLE FIELD COMPONENTS ── */

function SectionLabel({ label }: { label: string }) {
  return <h3 style={styles.sectionLabel}>{label}</h3>;
}

function Field({
  label, name, placeholder, type = "text", required,
}: {
  label: string; name: string; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div style={styles.fieldWrap}>
      <label style={styles.label}>
        {label} {required && <span style={styles.required}>*</span>}
      </label>
      <input name={name} type={type} placeholder={placeholder} required={required} style={styles.input} />
    </div>
  );
}

function SelectField({
  label, name, options, required,
}: {
  label: string; name: string; options: string[]; required?: boolean;
}) {
  return (
    <div style={styles.fieldWrap}>
      <label style={styles.label}>
        {label} {required && <span style={styles.required}>*</span>}
      </label>
      <select name={name} required={required} style={styles.input} defaultValue="">
        <option value="" disabled>Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label, name, placeholder, required,
}: {
  label: string; name: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div style={styles.fieldWrap}>
      <label style={styles.label}>
        {label} {required && <span style={styles.required}>*</span>}
      </label>
      <textarea name={name} placeholder={placeholder} required={required} rows={4} style={{ ...styles.input, resize: "vertical" as const }} />
    </div>
  );
}

/* ── STYLES ── */
const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 48px",
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    zIndex: 100,
    borderBottom: "1px solid #f0f0f0",
  },
  logo: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: "-1px",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navLinks: { display: "flex", alignItems: "center", gap: 32 },
  navLink: { fontSize: 15, fontWeight: 500, color: "#555" },
  ctaButton: {
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    padding: "10px 24px",
    borderRadius: 50,
  },

  page: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "60px 24px 100px",
  },
  header: { textAlign: "center" as const, marginBottom: 40 },
  title: {
    fontSize: 44,
    fontWeight: 900,
    letterSpacing: "-1.5px",
    marginBottom: 12,
  },
  subtitle: { fontSize: 18, color: "#666", lineHeight: 1.6 },

  toggle: {
    display: "flex",
    background: "#f5f5f5",
    borderRadius: 14,
    padding: 4,
    marginBottom: 48,
  },
  toggleActive: {
    flex: 1,
    padding: "14px 0",
    fontSize: 15,
    fontWeight: 700,
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    color: "#fff",
    transition: "all 0.2s",
  },
  toggleInactive: {
    flex: 1,
    padding: "14px 0",
    fontSize: 15,
    fontWeight: 600,
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    background: "transparent",
    color: "#888",
    transition: "all 0.2s",
  },

  form: { display: "flex", flexDirection: "column" as const, gap: 16 },

  sectionLabel: {
    fontSize: 18,
    fontWeight: 700,
    color: "#7c3aed",
    marginTop: 24,
    marginBottom: 4,
    paddingBottom: 8,
    borderBottom: "2px solid #f0e6ff",
  },

  row: { display: "flex", gap: 16 },

  fieldWrap: { flex: 1, display: "flex", flexDirection: "column" as const, gap: 6 },

  label: { fontSize: 14, fontWeight: 600, color: "#333" },
  required: { color: "#db2777" },

  input: {
    padding: "12px 16px",
    fontSize: 15,
    borderRadius: 10,
    border: "1.5px solid #e0e0e0",
    outline: "none",
    fontFamily: "inherit",
    background: "#fafafa",
    transition: "border-color 0.2s",
    width: "100%",
  },

  submitBtn: {
    marginTop: 32,
    padding: "18px 0",
    fontSize: 17,
    fontWeight: 700,
    border: "none",
    borderRadius: 14,
    cursor: "pointer",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    color: "#fff",
  },

  disclaimer: {
    textAlign: "center" as const,
    fontSize: 13,
    color: "#999",
    marginTop: 8,
  },
};
