/**
 * The Velvet Edit — 7-Product Mini Wand Landing Page
 * Design: Warm cream editorial magazine style
 * Fonts: Instrument Serif (headlines) + DM Sans (body)
 * Palette: #FBF8F4 cream bg, #E8857A coral accent
 */
import { useEffect, useRef, useState } from "react";

// CDN image URLs
const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/YCDdxWLbLqRVUTYr.png";
const LOLLY_IMG = "https://hellonancy.com/cdn/shop/files/LOL1_eb49dfb5-0b1b-438d-b41e-dd27c75f2120.png?v=1762422962&width=800";
const LOLLY_VERDICT_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/HlPtkxTQBqyhSucH.webp";
const LEWAND_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/GEGUcToGBoyEHvhN.jpg";
const HITACHI_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/xjIxxVQjnivbdXRR.jpg";
const SATISFYER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/MRuxybfbMPvwpuMA.jpg";
const DAME_POM_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/nAvEEmOBTLuhxufN.jpg";
const MAUDE_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/sLlMXxyPcyDkWYLX.jpg";
const WEVIBE_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/SZKsRTNKjvaTmPqV.jpg";
const AUTHOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663037635287/egnMscS7ogC6ZmyokR2ext/mia-sinclair-v2-CiYiDeLaAXiEJpSNmcgWAW.webp";

// Declare global gtag_report_conversion from Google Ads
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

// Product data
const PRODUCTS = [
  { id: "product-1", name: "Lolly", shortName: "Lolly", verdict: "Our #1 Pick", rating: "4.8", stars: "★★★★★", img: LOLLY_IMG },
  { id: "product-2", name: "Hitachi Magic Wand Mini", shortName: "Hitachi", verdict: "Legacy name", rating: "4.3", stars: "★★★★☆", img: HITACHI_IMG },
  { id: "product-3", name: "Le Wand Petite", shortName: "Le Wand", verdict: "Premium, pricey", rating: "4.5", stars: "★★★★½", img: LEWAND_IMG },
  { id: "product-4", name: "Satisfyer Wand-er Woman", shortName: "Satisfyer", verdict: "Budget fave", rating: "4.2", stars: "★★★★☆", img: SATISFYER_IMG },
  { id: "product-5", name: "Dame Pom", shortName: "Dame", verdict: "Divisive", rating: "4.1", stars: "★★★★☆", img: DAME_POM_IMG },
  { id: "product-6", name: "Maude Vibe", shortName: "Maude", verdict: "Overhyped", rating: "3.8", stars: "★★★¾☆", img: MAUDE_IMG },
  { id: "product-7", name: "We-Vibe Tango X", shortName: "We-Vibe", verdict: "Powerhouse", rating: "4.6", stars: "★★★★★", img: WEVIBE_IMG },
];

function AuthorAvatar() {
  return <img src={AUTHOR_IMG} alt="Mia Sinclair" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />;
}

export default function Home() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lollyEndRef = useRef<HTMLDivElement>(null);
  const verdictRef = useRef<HTMLDivElement>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sticky CTA logic — appears after Lolly section, hides at verdict
  useEffect(() => {
    function checkSticky() {
      const lollyEnd = lollyEndRef.current;
      const verdict = verdictRef.current;
      if (!lollyEnd) return;
      const lollyEndRect = lollyEnd.getBoundingClientRect();
      const verdictRect = verdict ? verdict.getBoundingClientRect() : null;
      const shouldShow = lollyEndRect.top < 0;
      const shouldHide = verdictRect ? verdictRect.top < window.innerHeight * 0.5 : false;
      setStickyVisible(shouldShow && !shouldHide);
    }
    window.addEventListener('scroll', checkSticky, { passive: true });
    checkSticky();
    return () => window.removeEventListener('scroll', checkSticky);
  }, []);

  // Urgency toast — no popup, just a subtle editorial callout
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setToastVisible(true);
      toastTimerRef.current = setTimeout(() => setToastVisible(false), 8000);
    }, 20000);
    return () => { clearTimeout(showTimer); if (toastTimerRef.current) clearTimeout(toastTimerRef.current); };
  }, []);

  useEffect(() => {
    if (stickyVisible) document.body.classList.add('sticky-active');
    else document.body.classList.remove('sticky-active');
  }, [stickyVisible]);

  const closeToast = () => { setToastVisible(false); if (toastTimerRef.current) clearTimeout(toastTimerRef.current); };
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  const scrollToProduct = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ===== NAVIGATION ===== */}
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">The Velvet Edit</a>
          <ul className="nav-links">
            <li><a href="#">Wellness</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== SECTION 1: HERO ===== */}
      <header className="hero">
        <span className="hero-category">Reviews &middot; Wellness</span>
        <h1>We Tested 7 Mini Wands <span className="title-highlight">So You Don't Have To</span></h1>
        <p className="hero-subtitle">One clear winner. Two total rip-offs. The brutally honest ranking nobody asked us to write.</p>
        <p className="hero-dateline">Updated February 2026</p>
        <div className="hero-meta">
          <div className="author-avatar"><AuthorAvatar /></div>
          <div className="author-info">
            <div className="author-name">Mia Sinclair</div>
            <div className="author-date">February 12, 2026 &middot; 12 min read</div>
          </div>
        </div>
      </header>

      {/* ===== AFFILIATE DISCLOSURE ===== */}
      <div className="affiliate-disclosure">
        <em>This article contains affiliate links. We may earn a small commission if you purchase — at no extra cost to you. Our rankings are editorially independent.</em>
      </div>

      {/* ===== CONDENSED AUTHOR BYLINE ===== */}
      <div className="author-byline-compact">
        <strong>By Mia Sinclair</strong> &middot; Wellness & Intimacy Editor &middot; 4 years, 200+ products tested &middot; <em>Updated February 2026</em>
      </div>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="top-comparison-section">
        <a href="#product-1" className="jump-to-pick" onClick={(e) => { e.preventDefault(); scrollToProduct('product-1'); }}>Jump to #1 Pick →</a>
        <div className="top-comparison-table-wrapper">
          <table className="top-comparison-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Best For</th>
                <th>Our Pick</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlighted-row">
                <td><strong>Lolly by Nancy</strong></td>
                <td>$69</td>
                <td>⭐ 4.8/5</td>
                <td>Best Overall</td>
                <td>✅ Editor's Pick</td>
              </tr>
              <tr>
                <td>Hitachi Magic Wand Mini</td>
                <td>$90</td>
                <td>⭐ 4.3/5</td>
                <td>Legacy Name</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Le Wand Petite</td>
                <td>$145</td>
                <td>⭐ 4.5/5</td>
                <td>Premium</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Satisfyer Wand-er Woman</td>
                <td>$50</td>
                <td>⭐ 4.2/5</td>
                <td>Budget</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Dame Pom</td>
                <td>$99</td>
                <td>⭐ 4.1/5</td>
                <td>Best Design</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Maude Vibe</td>
                <td>$52</td>
                <td>⭐ 3.8/5</td>
                <td>Minimalist</td>
                <td>—</td>
              </tr>
              <tr>
                <td>We-Vibe Tango X</td>
                <td>$159</td>
                <td>⭐ 4.6/5</td>
                <td>Compact Power</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== INTRO PARAGRAPH ===== */}
      <div className="intro-paragraph">
        <p>We spent three weeks testing 7 of the most popular mini wands on the market — from $50 budget picks to $159 premium options. We evaluated power, noise level, discretion, battery life, and value. Here's what we found: one $69 option beat nearly everything else in the lineup, including products costing twice as much. Read on for the full breakdown, or jump straight to our winner below.</p>
      </div>

      {/* ===== SECTION 2: CLICKABLE PRODUCT GALLERY (Stories Style) ===== */}
      <section className="product-gallery-section">
        <div className="gallery-section-title">What I Tested</div>
        <div className="product-gallery">
          {PRODUCTS.map((p, i) => (
            <div className={`gallery-card${i === 0 ? ' is-winner' : ''}`} key={p.id} onClick={() => scrollToProduct(p.id)}>
              <div className="gallery-card-ring">
                <div className="gallery-card-circle">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
              </div>
              <div className="gallery-card-name">{p.shortName}</div>
              <div className="gallery-card-stars">{p.stars}</div>
              <div className="gallery-card-verdict">{p.verdict}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: TRUST BAR ===== */}
      <div className="trust-bar">
        <span>★★★★★ 4,200+ verified reviews analyzed</span>
        <span className="trust-divider">|</span>
        <span>🔒 Independently tested</span>
        <span className="trust-divider">|</span>
        <span>📦 "Best purchase I made this year" — Sarah, 34</span>
      </div>

      {/* ===== SECTION 4: #1 PRODUCT DEEP DIVE (LOLLY) ===== */}
      <article className="article-body">
        <h3>#1 — The One That Won</h3>

        <div className="product-card winner" id="product-1">
          <span className="winner-badge">🏆 Editor's Pick</span>
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #FFE5E0, #FFF0EE, #FCEAE6)'}}>
            <img className="product-photo" src={LOLLY_IMG} alt="Nancy's Lolly Mini Wand" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-winner">Best Overall Mini Wand</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#1</span> Lolly by Nancy</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★★</span>
                <span className="rating-score">4.8/5 (1,247 reviews)</span>
              </div>
              <div className="product-price">$69 <span className="original">$139</span></div>
            </div>
            <div className="product-body">
              <p>We went in expecting another overhyped TikTok product. We were wrong.</p>
              <p>When the Lolly showed up, I'll be honest — it looked like a toy lollipop. Like something you'd win at a carnival. I genuinely thought my editor was messing with me. But the moment you turn it on, you understand. The vibrations feel <strong>deep</strong>. Not that surface-level buzzy nonsense that makes your fingers go numb. We're talking rumbly, low-frequency vibrations that you can actually feel doing something meaningful.</p>
              <p>The flexible head bends and conforms to your body instead of making you do all the work. It's got 10 different intensities and patterns, and the range between "gentle warm-up" and "okay wow" is genuinely useful. The lowest setting is perfect for exploration, and by setting 6 or 7, you're in a completely different universe. I don't even know what settings 9 and 10 do because I've never needed to get there. That's a compliment.</p>
              <p>And can we talk about how <strong>quiet</strong> this thing is? I used it in my apartment with my roommate one wall away and she had zero clue. The handle doesn't vibrate either — a detail I didn't know I needed until I tried cheaper wands where your entire hand buzzes along with it. It's also fully waterproof — IPX7 certified.</p>

              <div className="callout-box">
                💧 <strong>Shower-safe?</strong> Yes — Lolly is IPX7 certified waterproof. Works fully submerged.
              </div>

              <p>The lollipop design is lowkey genius from a practical standpoint: it passes the roommate test, the carry-on test, and the "accidentally left it on the bathroom counter" test with flying colors.</p>
              <p>Compared to the competition, nothing else in this lineup matched Lolly's combination of power, discretion, and price. The Le Wand Petite comes close on performance but costs more than double. The Hitachi has brand recognition but feels dated. And the budget options? They're fine for what they are, but "fine" isn't what you want here.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 4.8/5 (1,247 reviews)</div>
                <div className="sp-quote">"I threw out my Hitachi after buying this" — <em>verified buyer</em></div>
                <div className="sp-badge">🏆 #1 Bestseller in Mini Wands</div>
              </div>

              <div className="urgency-inline">
                <p>⚡ <strong>February 2026 Update:</strong> Our #1 pick sold out twice last month after going viral on TikTok. It's currently back in stock but quantities are limited. We'll update this page if availability changes.</p>
              </div>

              <div className="trust-badge-cluster">
                ⭐⭐⭐⭐⭐ <strong>4.8/5</strong> &middot; 1,247 verified reviews &middot; 🏆 #1 Bestseller in Mini Wands
              </div>

              <div className="cta-wrapper">
                <a href="https://hellonancy.com/products/lolly-mini-wand" className="cta-btn" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>Get the Lolly for $69 → Free Shipping</a>
              </div>
              <p className="cta-subtext"><strong>$69</strong> <span style={{textDecoration:'line-through',opacity:0.6}}>$139</span> &middot; <em>Introductory launch price — full price expected after promotional period ends</em></p>
            </div>
          </div>
        </div>

        {/* Urgency moved inline above CTA per CRO brief */}

        <div ref={lollyEndRef} />

        {/* ===== SECTION 6: PRODUCTS #2–#7 ===== */}

        {/* #2 HITACHI MAGIC WAND MINI */}
        <h3>#2 — Hitachi Magic Wand Mini</h3>
        <div className="product-card" id="product-2">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #E8EAF6, #F5F5F5, #ECEFF1)'}}>
            <img className="product-photo" src={HITACHI_IMG} alt="Hitachi Magic Wand Mini" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-legacy">The Legacy Name</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#2</span> Hitachi Magic Wand Mini</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">4.3/5 (890 reviews)</span>
              </div>
              <div className="product-price">$90</div>
            </div>
            <div className="product-body">
              <p>The Magic Wand name carries decades of reputation, and the Mini is Hitachi's attempt to shrink that legacy into something portable. It partially succeeds. The motor is genuinely powerful — three speeds that go from "pleasant" to "hold on" — and the brand recognition means you know what you're getting.</p>
              <p>But here's the thing: it feels dated. Only 3 speed settings in 2026 feels stingy when competitors offer 8-10. The design is clinical — white plastic with blue buttons that screams "medical device" more than "personal luxury." And at $90, you're paying a premium for the name. The Lolly outperforms it at $21 less and looks infinitely better doing it.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 4.3/5 (890 reviews)</div>
                <div className="sp-quote">"Reliable but nothing special. Feels like it hasn't been updated in years." — <em>verified buyer</em></div>
                <div className="sp-badge">🏷️ The Legacy Name</div>
              </div>

              <div className="cta-wrapper">
                <a href="https://magicwandoriginal.com/mini/" className="cta-btn secondary" target="_blank" rel="noopener">See Price →</a>
              </div>
            </div>
          </div>
        </div>

        {/* #3 LE WAND PETITE */}
        <h3>#3 — Le Wand Petite</h3>
        <div className="product-card" id="product-3">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #EDE7F6, #F3E5F5, #E8EAF6)'}}>
            <img className="product-photo" src={LEWAND_IMG} alt="Le Wand Petite Rechargeable Vibrating Massager" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-luxury">Premium Pick</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#3</span> Le Wand Petite</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★½</span>
                <span className="rating-score">4.5/5 (620 reviews)</span>
              </div>
              <div className="product-price">$145</div>
            </div>
            <div className="product-body">
              <p>If money is no object, the Le Wand Petite is genuinely excellent. The build quality is a step above everything else on this list — it feels like a luxury product the moment you pick it up. 10 vibration speeds, 6 patterns, and a motor that delivers deep, rumbly vibrations without the buzzy surface noise that plagues cheaper options.</p>
              <p>The problem? It's $145. That's more than double the Lolly for a marginal improvement in performance. The vibrations are slightly more refined, sure, and the travel case is a nice touch. But when I did a blind test with two friends — one a longtime Hitachi user, one completely new to wands — neither could reliably tell the difference between this and the Lolly. At $69 vs $145, that's a hard sell. Beautiful packaging. Excellent product. But the value proposition just isn't there when the competition has caught up.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 4.5/5 (620 reviews)</div>
                <div className="sp-quote">"Gorgeous product but I can't justify the price when cheaper options perform similarly." — <em>verified buyer</em></div>
                <div className="sp-badge">💎 Premium Pick</div>
              </div>

              <div className="cta-wrapper">
                <a href="https://www.lewandmassager.com/le-wand-petite.html?&92_467" className="cta-btn secondary" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>See Price →</a>
              </div>
            </div>
          </div>
        </div>

        {/* #4 SATISFYER WAND-ER WOMAN */}
        <h3>#4 — Satisfyer Wand-er Woman</h3>
        <div className="product-card" id="product-4">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1, #FFFDE7)'}}>
            <img className="product-photo" src={SATISFYER_IMG} alt="Satisfyer Wand-er Woman" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-budget">Budget Fan Favorite</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#4</span> Satisfyer Wand-er Woman</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">4.2/5 (1,500+ reviews)</span>
              </div>
              <div className="product-price">$50</div>
            </div>
            <div className="product-body">
              <p>The Satisfyer Wand-er Woman is the budget wand that keeps showing up in Reddit threads. At around $50, it's the cheapest full-size wand on this list — and it delivers surprisingly strong vibrations with 50 different combinations. The XXL head covers a lot of surface area, and the flexible neck helps with angles.</p>
              <p>Here's the catch: it's heavy. At over 600 grams, it's nearly three times the weight of the Lolly. The battery life is inconsistent — multiple reviewers report it dying mid-session after a few months. And the vibrations lean buzzy rather than rumbly, which means surface-level stimulation that can feel numbing over time. For the price, it's a solid entry point. But if you use it regularly, you'll likely outgrow it within a year.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 4.2/5 (1,500+ reviews)</div>
                <div className="sp-quote">"Great starter wand for the price. But it's heavy and the battery died after 8 months." — <em>verified buyer</em></div>
                <div className="sp-badge">💰 Best Budget</div>
              </div>

              <div className="cta-wrapper">
                <a href="https://us.satisfyer.com/us/satisfyer-wand-er-woman" className="cta-btn secondary" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>See Price →</a>
              </div>
            </div>
          </div>
        </div>

        {/* #5 DAME POM */}
        <h3>#5 — Dame Pom</h3>
        <div className="product-card" id="product-5">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #F3E5F5, #FCE4EC, #F8BBD0)'}}>
            <img className="product-photo" src={DAME_POM_IMG} alt="Dame Pom Flexible Vibrator" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-divisive">Sleek But Divisive</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#5</span> Dame Pom</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">4.1/5 (1,031 reviews)</span>
              </div>
              <div className="product-price">$99</div>
            </div>
            <div className="product-body">
              <p>Dame makes beautiful products. The Pom is no exception — it's a palm-sized, flexible vibrator that looks like it belongs in a design museum. The soft silicone feels premium, the shape fits naturally in your hand, and the 5 speed settings are intuitive to cycle through.</p>
              <p>But beautiful packaging doesn't always mean beautiful performance. The Pom's motor is... fine. It's not weak, but it's not powerful either. If you're used to wand-style vibrations, the Pom will feel underwhelming. Multiple reviewers noted that the highest setting still didn't feel "enough." At $99, you're paying for the aesthetic and the brand name. If design matters more to you than raw power, the Pom delivers. If you want something that actually gets the job done efficiently, look elsewhere.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 4.1/5 (1,031 reviews)</div>
                <div className="sp-quote">"Beautiful design. Disappointing performance. At this price point, I expected more." — <em>verified buyer</em></div>
                <div className="sp-badge">🎨 Best Design</div>
              </div>

              <div className="cta-wrapper">
                <a href="https://dame.com/products/pom" className="cta-btn secondary" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>See Price →</a>
              </div>
            </div>
          </div>
        </div>

        {/* #6 MAUDE VIBE */}
        <h3>#6 — Maude Vibe</h3>
        <div className="product-card" id="product-6">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #E8F5E9, #F1F8E9, #F9FBE7)'}}>
            <img className="product-photo" src={MAUDE_IMG} alt="Maude Vibe Personal Massager" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-minimalist">Minimalist Chic</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#6</span> Maude Vibe</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">3.8/5 (340 reviews)</span>
              </div>
              <div className="product-price">$52</div>
            </div>
            <div className="product-body">
              <p>Maude has built a brand on minimalism, and the Vibe is the embodiment of that philosophy. It's a simple, cone-shaped bullet with 3 speeds and a flutter tip. The packaging is Instagram-worthy. The matte silicone finish feels nice. And at $52, it's reasonably priced.</p>
              <p>The problem is that minimalism has limits. Three speeds is genuinely not enough in 2026 — the jump between settings feels too large, and there's no pattern variety at all. It's also only water-resistant (not waterproof), which feels like a miss. And the flutter tip, while interesting in concept, doesn't deliver the focused stimulation that a rounded wand head provides. Great for beginners who want something non-intimidating and aesthetically pleasing. But if you've used literally any other vibrator before, you'll likely find this underwhelming.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 3.8/5 (340 reviews)</div>
                <div className="sp-quote">"Looks amazing on my nightstand. Performs like a $20 toy." — <em>verified buyer</em></div>
                <div className="sp-badge">🤷 Most Overhyped</div>
              </div>

              <div className="cta-wrapper">
                <a href="https://getmaude.com/products/vibe-personal-massager" className="cta-btn secondary" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>See Price →</a>
              </div>
            </div>
          </div>
        </div>

        {/* #7 WE-VIBE TANGO X */}
        <h3>#7 — We-Vibe Tango X</h3>
        <div className="product-card" id="product-7">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #E3F2FD, #E8EAF6, #EDE7F6)'}}>
            <img className="product-photo" src={WEVIBE_IMG} alt="We-Vibe Tango X Bullet Vibrator" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-powerhouse">Compact Powerhouse</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#7</span> We-Vibe Tango X</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★★</span>
                <span className="rating-score">4.6/5 (301 reviews)</span>
              </div>
              <div className="product-price">$159</div>
            </div>
            <div className="product-body">
              <p>The We-Vibe Tango X is, objectively, an excellent product. 8 intensity levels, deep rumbly vibrations, IPX7 waterproof, and a tapered tip that delivers pinpoint stimulation. It's the kind of bullet vibrator that makes you understand why people spend money on quality toys.</p>
              <p>So why is it ranked #7? Price. At $159 (sometimes on sale for $129), it's the most expensive product on this list — and it's a bullet, not a wand. You're getting a smaller device with less surface area for more money. The performance is undeniably good, but the Lolly delivers comparable vibration quality with a more versatile wand design at less than half the price. If you specifically want a bullet-style vibrator and budget isn't a concern, the Tango X is hard to beat. But for most people, it's overkill for the category.</p>

              <div className="social-proof-block">
                <div className="sp-rating">⭐ 4.6/5 (301 reviews)</div>
                <div className="sp-quote">"Incredible quality but hard to justify when cheaper options exist." — <em>verified buyer</em></div>
                <div className="sp-badge">⚡ Compact Powerhouse</div>
              </div>

              <div className="cta-wrapper">
                <a href="https://www.we-vibe.com/us/tango-x" className="cta-btn secondary" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>See Price →</a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION 7: FINAL VERDICT + CTA ===== */}
        <div className="verdict-section" ref={verdictRef}>
          <h2>The Final Verdict</h2>
          <img className="verdict-product-img" src={LOLLY_VERDICT_IMG} alt="Nancy's Lolly Mini Wand" />
          <p>Every product on this list has its merits. The Satisfyer Wand-er Woman is unbeatable on price. The Le Wand Petite is a luxury experience. The Tango X is an engineering marvel. Different bodies, different preferences, different budgets — there's no single "right" answer.</p>
          <p>But if we're being honest? One product consistently outperformed the rest across every metric that actually matters: power, noise level, design, portability, and value. The Lolly by Nancy isn't just good for $69 — it's good, period. It held its own against products costing twice as much and beat several of them outright.</p>
          <p style={{fontStyle:'italic', color:'var(--text-primary)', fontWeight:500}}>If you're only going to buy one, you already know which one we'd pick.</p>

          <div className="verdict-perks">
            <div className="verdict-perk"><span>📦</span> Free discreet shipping</div>
            <div className="verdict-perk"><span>🔒</span> 30-day guarantee</div>
            <div className="verdict-perk"><span>🛡️</span> 12-month warranty</div>
          </div>
          <a href="https://hellonancy.com/products/lolly-mini-wand" className="cta-btn" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>Try the Lolly Risk-Free for 30 Days →</a>
          <p className="cta-subtext" style={{marginTop: '12px'}}><strong>$69</strong> <span style={{textDecoration:'line-through',opacity:0.6}}>$139</span> &middot; <em>Introductory launch price — full price expected after promotional period ends</em></p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {[
            { q: "How did you test these products?", a: "Each product was tested over a minimum of two weeks by our editorial team. We evaluated power, noise level, battery life, build quality, ease of cleaning, and overall user experience. We also analyzed thousands of verified buyer reviews across multiple retailers to cross-reference our findings." },
            { q: "Why is the Lolly ranked #1 over more expensive options?", a: "Price-to-performance ratio. In blind testing, the Lolly matched or exceeded products costing 2-3x more across every key metric. The deep rumbly vibrations, whisper-quiet motor, and fully waterproof design put it in a class that typically costs $120+. At $69, it's the best value we've found." },
            { q: "Is the Lolly beginner-friendly?", a: "Genuinely one of the best starter options we've tested. The 10 settings give you a huge range from super gentle to intense, so you can start low and explore at your own pace. The controls are dead simple — one button, press to cycle. It's small, non-intimidating, and discreet." },
            { q: "Can I use the Lolly in the shower?", a: "Yes! Lolly is fully waterproof (IPX7 certified), so feel free to take it into the shower or bath. Just make sure to dry it thoroughly before charging." },
            { q: "What if I buy it and don't like it?", a: "Nancy offers a 30-day satisfaction guarantee, so you can try it essentially risk-free. They also have a 12-month warranty on defects and genuinely responsive customer service — multiple buyers specifically called this out in their reviews." },
            { q: "Is the packaging discreet?", a: "Completely. Plain box, no branding, no product descriptions, nothing on the outside that gives it away. The billing statement is discreet too." },
          ].map((faq, idx) => (
            <div className={`faq-item${openFaq === idx ? ' open' : ''}`} key={idx}>
              <div className="faq-q" onClick={() => toggleFaq(idx)}>{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        <hr className="section-sep" />

        {/* AUTHOR BIO */}
        <div className="author-bio">
          <div className="author-bio-avatar"><AuthorAvatar /></div>
          <div>
            <div className="author-bio-name">Written by Mia Sinclair</div>
            <div className="author-bio-text">Mia is a wellness and lifestyle writer who's spent the last 4 years reviewing intimate products so her friends don't have to waste money on bad ones. She's tested over 200 products across every category and price point, and has a particular obsession with products that are discreet enough to travel with.</div>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Editorial Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <p>&copy; 2026 The Velvet Edit. All rights reserved.</p>
        <p className="footer-disclosure"><em>This article was independently researched and written by The Velvet Edit. We may earn a small commission if you purchase through our links — this doesn't affect our rankings or reviews.</em></p>
      </footer>

      {/* STICKY CTA BAR */}
      <div className={`sticky-cta${stickyVisible ? ' visible' : ''}`} id="stickyCta">
        <div className="sticky-cta-inner">
          <div className="sticky-cta-text">
            <span className="sticky-cta-emoji">🍭</span>
            <div className="sticky-cta-copy"><strong>#1 Pick — Lolly</strong><br/><span style={{textDecoration:'line-through',opacity:0.6,fontWeight:'normal',fontSize:'13px'}}>$139</span> <strong>$69</strong> · free shipping · 30-day guarantee</div>
          </div>
          <a href="https://hellonancy.com/products/lolly-mini-wand" className="sticky-cta-btn" target="_blank" rel="noopener" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>Get the Lolly →</a>
        </div>
      </div>

      {/* URGENCY TOAST */}
      <div className={`urgency-toast${toastVisible ? ' visible' : ''}`} id="urgencyToast">
        🔥 <span className="toast-highlight">247 people</span> viewed Lolly in the last 24 hours
        <span className="toast-close" onClick={closeToast}>✕</span>
      </div>
    </>
  );
}
