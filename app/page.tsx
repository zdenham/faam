export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav style={styles.nav}>
        <span style={styles.logo}>FAAM</span>
        <div style={styles.navLinks}>
          <a href="#how-it-works" style={styles.navLink}>How It Works</a>
          <a href="#restaurants" style={styles.navLink}>For Restaurants</a>
          <a href="#creators" style={styles.navLink}>For Creators</a>
          <a href="/signup" style={styles.ctaButton}>Sign Up</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroBadge}>🚀 Now accepting early partners</div>
        <h1 style={styles.heroTitle}>
          Where Restaurants Meet<br />
          Their Next Big <span style={styles.highlight}>Creator</span>
        </h1>
        <p style={styles.heroSub}>
          FAAM connects restaurants and food brands with influencers and creators.
          Boost your visibility online. Get rewarded with incredible perks and free food.
        </p>
        <div style={styles.heroButtons}>
          <a href="/signup" style={styles.primaryBtn}>I'm a Restaurant</a>
          <a href="/signup" style={styles.secondaryBtn}>I'm a Creator</a>
        </div>
        <div style={styles.heroStats}>
          <div style={styles.stat}>
            <span style={styles.statNumber}>500+</span>
            <span style={styles.statLabel}>Restaurant Partners</span>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.stat}>
            <span style={styles.statNumber}>2,000+</span>
            <span style={styles.statLabel}>Creators</span>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.stat}>
            <span style={styles.statNumber}>10M+</span>
            <span style={styles.statLabel}>Impressions Generated</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <p style={styles.sectionSub}>Three simple steps to start your partnership</p>
        <div style={styles.stepsGrid}>
          {[
            { icon: "📝", title: "Sign Up", desc: "Create your profile as a restaurant or creator. Tell us about your brand, cuisine, audience, and style." },
            { icon: "🤝", title: "Get Matched", desc: "Our smart matching pairs restaurants with creators who align with their vibe, audience, and goals." },
            { icon: "🎉", title: "Collaborate & Grow", desc: "Creators visit, create content, and share. Restaurants gain exposure. Creators earn perks and free meals." },
          ].map((step, i) => (
            <div key={i} style={styles.stepCard}>
              <div style={styles.stepIcon}>{step.icon}</div>
              <div style={styles.stepNumber}>Step {i + 1}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR RESTAURANTS ── */}
      <section id="restaurants" style={{ ...styles.section, background: "#faf5ff" }}>
        <h2 style={styles.sectionTitle}>For Restaurants & Brands</h2>
        <p style={styles.sectionSub}>Turn creators into your most powerful marketing channel</p>
        <div style={styles.benefitsGrid}>
          {[
            { icon: "📈", title: "Boost Visibility", desc: "Get featured on TikTok, Instagram, and YouTube by creators your customers already follow." },
            { icon: "🎯", title: "Targeted Reach", desc: "We match you with creators whose audience matches your ideal customer demographic." },
            { icon: "💰", title: "Cost Effective", desc: "Trade meals and perks for authentic content — no massive ad budgets required." },
            { icon: "📊", title: "Track Results", desc: "See real-time analytics on impressions, engagement, and foot traffic from each collaboration." },
          ].map((b, i) => (
            <div key={i} style={styles.benefitCard}>
              <div style={styles.benefitIcon}>{b.icon}</div>
              <h3 style={styles.benefitTitle}>{b.title}</h3>
              <p style={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR CREATORS ── */}
      <section id="creators" style={styles.section}>
        <h2 style={styles.sectionTitle}>For Creators & Influencers</h2>
        <p style={styles.sectionSub}>Get rewarded for doing what you love</p>
        <div style={styles.benefitsGrid}>
          {[
            { icon: "🍕", title: "Free Food & Perks", desc: "Enjoy complimentary meals, exclusive tastings, and VIP experiences at top restaurants." },
            { icon: "🌟", title: "Grow Your Brand", desc: "Partner with trending restaurants and create content that stands out in the food space." },
            { icon: "💸", title: "Earn More", desc: "Get paid for collaborations on top of the perks. Build lasting brand partnerships." },
            { icon: "📱", title: "Easy Workflow", desc: "Browse opportunities, accept collabs, and manage everything from one simple dashboard." },
          ].map((b, i) => (
            <div key={i} style={styles.benefitCard}>
              <div style={styles.benefitIcon}>{b.icon}</div>
              <h3 style={styles.benefitTitle}>{b.title}</h3>
              <p style={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PARTNERSHIPS ── */}
      <section style={{ ...styles.section, background: "#faf5ff" }}>
        <h2 style={styles.sectionTitle}>Featured Partnerships</h2>
        <p style={styles.sectionSub}>See what happens when great food meets great content</p>
        <div style={styles.partnershipsGrid}>
          {[
            { restaurant: "Sakura Ramen", creator: "@foodie_jane", reach: "1.2M views", img: "🍜" },
            { restaurant: "Bella's Pizzeria", creator: "@tastehunter", reach: "890K views", img: "🍕" },
            { restaurant: "Green Bowl Co.", creator: "@healthybites", reach: "2.1M views", img: "🥗" },
          ].map((p, i) => (
            <div key={i} style={styles.partnerCard}>
              <div style={styles.partnerEmoji}>{p.img}</div>
              <h3 style={styles.partnerRestaurant}>{p.restaurant}</h3>
              <p style={styles.partnerCreator}>with {p.creator}</p>
              <div style={styles.partnerReach}>{p.reach}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What People Are Saying</h2>
        <div style={styles.testimonialsGrid}>
          {[
            { quote: "FAAM brought us 3x more foot traffic in just one month. The creators they matched us with truly understood our brand.", name: "Maria Chen", role: "Owner, Sakura Ramen" },
            { quote: "I've discovered so many amazing restaurants through FAAM. Plus, I get to create authentic content and actually get rewarded for it!", name: "Jane Torres", role: "Food Creator, 450K followers" },
            { quote: "The ROI is unreal. One collaboration generated more engagement than our entire Q3 ad spend.", name: "David Park", role: "Marketing Director, Green Bowl Co." },
          ].map((t, i) => (
            <div key={i} style={styles.testimonialCard}>
              <p style={styles.testimonialQuote}>"{t.quote}"</p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.testimonialAvatar}>{t.name[0]}</div>
                <div>
                  <div style={styles.testimonialName}>{t.name}</div>
                  <div style={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / JOIN ── */}
      <section id="join" style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Get Famous?</h2>
        <p style={styles.ctaSub}>
          Join the waitlist and be the first to access FAAM when we launch in your city.
        </p>
        <div style={styles.ctaForm}>
          <input type="email" placeholder="Enter your email" style={styles.ctaInput} />
          <button style={styles.ctaSubmit}>Join the Waitlist</button>
        </div>
        <p style={styles.ctaNote}>No spam, ever. We'll only reach out when it's time.</p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>
          <div>
            <span style={styles.footerLogo}>FAAM</span>
            <p style={styles.footerTagline}>Where food meets fame.</p>
          </div>
          <div style={styles.footerLinks}>
            <div style={styles.footerCol}>
              <h4 style={styles.footerColTitle}>Product</h4>
              <a href="#how-it-works" style={styles.footerLink}>How It Works</a>
              <a href="#restaurants" style={styles.footerLink}>For Restaurants</a>
              <a href="#creators" style={styles.footerLink}>For Creators</a>
            </div>
            <div style={styles.footerCol}>
              <h4 style={styles.footerColTitle}>Company</h4>
              <a href="#" style={styles.footerLink}>About</a>
              <a href="#" style={styles.footerLink}>Blog</a>
              <a href="#" style={styles.footerLink}>Careers</a>
            </div>
            <div style={styles.footerCol}>
              <h4 style={styles.footerColTitle}>Legal</h4>
              <a href="#" style={styles.footerLink}>Privacy</a>
              <a href="#" style={styles.footerLink}>Terms</a>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2026 FAAM. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

/* ── STYLES ── */
const styles: Record<string, React.CSSProperties> = {
  /* Nav */
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

  /* Hero */
  hero: {
    textAlign: "center" as const,
    padding: "100px 24px 80px",
    maxWidth: 800,
    margin: "0 auto",
  },
  heroBadge: {
    display: "inline-block",
    background: "#faf5ff",
    color: "#7c3aed",
    fontSize: 14,
    fontWeight: 600,
    padding: "8px 20px",
    borderRadius: 50,
    marginBottom: 32,
    border: "1px solid #e9d5ff",
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: "-2px",
    marginBottom: 24,
  },
  highlight: {
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSub: {
    fontSize: 20,
    color: "#666",
    lineHeight: 1.6,
    maxWidth: 600,
    margin: "0 auto 40px",
  },
  heroButtons: { display: "flex", justifyContent: "center", gap: 16, marginBottom: 60 },
  primaryBtn: {
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    padding: "16px 36px",
    borderRadius: 50,
  },
  secondaryBtn: {
    fontSize: 16,
    fontWeight: 600,
    color: "#7c3aed",
    background: "#fff",
    padding: "16px 36px",
    borderRadius: 50,
    border: "2px solid #e9d5ff",
  },
  heroStats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  stat: { display: "flex", flexDirection: "column" as const, alignItems: "center" },
  statNumber: { fontSize: 28, fontWeight: 800, color: "#7c3aed" },
  statLabel: { fontSize: 13, color: "#888", marginTop: 4 },
  statDivider: { width: 1, height: 40, background: "#e5e5e5" },

  /* Sections */
  section: { padding: "80px 24px", maxWidth: 1100, margin: "0 auto" },
  sectionTitle: { textAlign: "center" as const, fontSize: 40, fontWeight: 800, letterSpacing: "-1px", marginBottom: 12 },
  sectionSub: { textAlign: "center" as const, fontSize: 18, color: "#888", marginBottom: 56 },

  /* Steps */
  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 },
  stepCard: {
    textAlign: "center" as const,
    padding: 40,
    borderRadius: 20,
    background: "#faf5ff",
    border: "1px solid #f0e6ff",
  },
  stepIcon: { fontSize: 48, marginBottom: 16 },
  stepNumber: { fontSize: 12, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase" as const, letterSpacing: 2, marginBottom: 8 },
  stepTitle: { fontSize: 22, fontWeight: 700, marginBottom: 12 },
  stepDesc: { fontSize: 15, color: "#666", lineHeight: 1.6 },

  /* Benefits */
  benefitsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 },
  benefitCard: {
    padding: 36,
    borderRadius: 20,
    background: "#fff",
    border: "1px solid #f0f0f0",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  },
  benefitIcon: { fontSize: 36, marginBottom: 16 },
  benefitTitle: { fontSize: 20, fontWeight: 700, marginBottom: 8 },
  benefitDesc: { fontSize: 15, color: "#666", lineHeight: 1.6 },

  /* Partnerships */
  partnershipsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
  partnerCard: {
    textAlign: "center" as const,
    padding: 40,
    borderRadius: 20,
    background: "#fff",
    border: "1px solid #f0f0f0",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  },
  partnerEmoji: { fontSize: 56, marginBottom: 16 },
  partnerRestaurant: { fontSize: 20, fontWeight: 700, marginBottom: 4 },
  partnerCreator: { fontSize: 15, color: "#7c3aed", fontWeight: 500, marginBottom: 12 },
  partnerReach: {
    display: "inline-block",
    fontSize: 13,
    fontWeight: 600,
    color: "#059669",
    background: "#ecfdf5",
    padding: "6px 16px",
    borderRadius: 50,
  },

  /* Testimonials */
  testimonialsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
  testimonialCard: {
    padding: 32,
    borderRadius: 20,
    background: "#faf5ff",
    border: "1px solid #f0e6ff",
  },
  testimonialQuote: { fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" },
  testimonialAuthor: { display: "flex", alignItems: "center", gap: 12 },
  testimonialAvatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 16,
  },
  testimonialName: { fontWeight: 600, fontSize: 14 },
  testimonialRole: { fontSize: 13, color: "#888" },

  /* CTA */
  ctaSection: {
    textAlign: "center" as const,
    padding: "100px 24px",
    background: "linear-gradient(135deg, #7c3aed, #db2777)",
    color: "#fff",
  },
  ctaTitle: { fontSize: 44, fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 },
  ctaSub: { fontSize: 18, opacity: 0.9, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" },
  ctaForm: { display: "flex", justifyContent: "center", gap: 12, marginBottom: 16 },
  ctaInput: {
    padding: "16px 24px",
    fontSize: 16,
    borderRadius: 50,
    border: "none",
    width: 320,
    outline: "none",
  },
  ctaSubmit: {
    padding: "16px 32px",
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 50,
    border: "none",
    background: "#1a1a2e",
    color: "#fff",
    cursor: "pointer",
  },
  ctaNote: { fontSize: 13, opacity: 0.7 },

  /* Footer */
  footer: { padding: "60px 48px 32px", background: "#1a1a2e", color: "#fff" },
  footerTop: { display: "flex", justifyContent: "space-between", marginBottom: 48 },
  footerLogo: { fontSize: 24, fontWeight: 900, letterSpacing: "-1px" },
  footerTagline: { fontSize: 14, color: "#888", marginTop: 8 },
  footerLinks: { display: "flex", gap: 64 },
  footerCol: { display: "flex", flexDirection: "column" as const, gap: 10 },
  footerColTitle: { fontSize: 13, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 4 },
  footerLink: { fontSize: 14, color: "#aaa" },
  footerBottom: { borderTop: "1px solid #333", paddingTop: 24, fontSize: 13, color: "#666" },
};
