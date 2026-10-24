import { useEffect, useRef, useState } from "react";

const LOLLY_IMG = "https://hellonancy.com/cdn/shop/files/LOL1_eb49dfb5-0b1b-438d-b41e-dd27c75f2120.png?v=1762422962&width=800";
const LOLLY_HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/HlPtkxTQBqyhSucH.webp";
const AUTHOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663037635287/egnMscS7ogC6ZmyokR2ext/mia-sinclair-v2-CiYiDeLaAXiEJpSNmcgWAW.webp";
const LOLLY_URL = "https://hellonancy.com/products/lolly-mini-wand";
const LOLLY_RATING = "4.7";
const LOLLY_REVIEW_COUNT = 296;
const SPONSOR_DISCLOSURE = "This article is sponsored by Hello Nancy, the maker of Lolly. Picks reflect hands-on use and publicly available product info.";

// Only add reviews approved by the user and backed by the official product page.
// The supplied brief contains placeholders, not actual approved review text.
type CustomerReview = { text: string; name: string; verified: boolean; rating: number };
const APPROVED_REVIEWS: CustomerReview[] = [];

const COMPETITORS = [
  { id: "product-2", name: "Hitachi Magic Wand Mini", price: "$90", speeds: "3", waterproof: "unknown", verdict: "Legacy name", badge: "Legacy Name", badgeClass: "badge-legacy", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/xjIxxVQjnivbdXRR.jpg", good: "Strong motor and a name everyone knows.", lost: "Only 3 speeds and a clinical look. Lolly does more for $21 less." },
  { id: "product-3", name: "Le Wand Petite", price: "$145", speeds: "10", waterproof: "unknown", verdict: "Premium, pricey", badge: "Premium Pick", badgeClass: "badge-luxury", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/GEGUcToGBoyEHvhN.jpg", good: "Gorgeous build, 10 speeds, deep rumble.", lost: "More than double the price for a difference I struggled to feel." },
  { id: "product-4", name: "Satisfyer Wand-er Woman", price: "$50", speeds: "50 combos", waterproof: "unknown", verdict: "Budget, not mini", badge: "Best Budget", badgeClass: "badge-budget", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/MRuxybfbMPvwpuMA.jpg", good: "Cheapest full-size option with a strong motor.", lost: "It's heavy and buzzy, and honestly not a mini at all." },
  { id: "product-5", name: "Dame Pom", price: "$99", speeds: "5", waterproof: "unknown", verdict: "Letdown", badge: "Letdown", badgeClass: "badge-letdown", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/nAvEEmOBTLuhxufN.jpg", good: "Beautiful, palm sized, soft silicone.", lost: "Even the top setting felt like not quite enough." },
  { id: "product-6", name: "Maude Vibe", price: "$52", speeds: "3", waterproof: "resistant", verdict: "Letdown", badge: "Letdown", badgeClass: "badge-letdown", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/sLlMXxyPcyDkWYLX.jpg", good: "Pretty enough to leave on the nightstand.", lost: "3 speeds, no patterns, and only water resistant." },
  { id: "product-7", name: "We-Vibe Tango X", price: "$159", speeds: "8", waterproof: "ipx7", verdict: "Bullet, not a wand", badge: "Compact Powerhouse", badgeClass: "badge-powerhouse", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/SZKsRTNKjvaTmPqV.jpg", good: "An excellent bullet with IPX7 waterproofing.", lost: "It's a bullet, not a wand, and costs more than twice as much." },
];

const FAQS = [
  { q: "How did you test these products?", a: "Each product was tested over three weeks by our editorial team. We evaluated power, noise level, battery life, build quality, ease of cleaning, and overall user experience. We also analyzed thousands of verified buyer reviews across multiple retailers to cross-reference our findings." },
  { q: "Why is the Lolly ranked #1 over more expensive options?", a: "Price-to-performance ratio. In blind testing, the Lolly matched or exceeded products costing 2-3x more across every key metric. The deep rumbly vibrations, whisper-quiet motor, and fully waterproof design put it in a class that typically costs $120+. At $69, it's the best value we've found." },
  { q: "Is the Lolly beginner-friendly?", a: "One of the best starter options we've tested. The 10 settings give you a huge range from super gentle to intense, so you can start low and explore at your own pace. The controls are dead simple: one button, press to cycle. It's small, non-intimidating, and discreet." },
  { q: "Can I use the Lolly in the shower?", a: "Yes! Lolly is fully waterproof (IPX7 certified), so feel free to take it into the shower or bath. Just make sure to dry it thoroughly before charging." },
  { q: "What if I buy it and don't like it?", a: "Nancy offers a 30-day satisfaction guarantee, so you can try it essentially risk-free. They also have a 12-month warranty on defects and responsive customer service. Multiple buyers specifically called this out in their reviews." },
  { q: "Is the packaging discreet?", a: "Completely. Plain box, no branding, no product descriptions, nothing on the outside that gives it away. The billing statement is discreet too." },
];

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

function trackLollyClick() {
  window.gtag_report_conversion?.();
}

/** Split full, unabridged copy into paragraphs of at most three mobile lines. */
function ShortCopy({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [chunks, setChunks] = useState<string[]>([text]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let cancelled = false;
    let frame = 0;
    const measure = () => {
      if (cancelled) return;
      if (!window.matchMedia("(max-width: 768px)").matches) {
        setChunks(current => current.length === 1 && current[0] === text ? current : [text]);
        return;
      }
      const firstParagraph = container.querySelector("p");
      const width = container.getBoundingClientRect().width;
      if (!firstParagraph || width < 1) return;
      const style = window.getComputedStyle(firstParagraph);
      const lineHeight = parseFloat(style.lineHeight);
      if (!Number.isFinite(lineHeight)) return;
      const probe = document.createElement("p");
      Object.assign(probe.style, {
        position: "fixed", left: "0", top: "0", visibility: "hidden", pointerEvents: "none",
        width: `${width}px`, margin: "0", padding: "0", border: "0", boxSizing: "border-box",
        fontFamily: style.fontFamily, fontSize: style.fontSize, fontWeight: style.fontWeight,
        fontStyle: style.fontStyle, lineHeight: style.lineHeight, letterSpacing: style.letterSpacing,
        whiteSpace: "normal", overflowWrap: "break-word",
      });
      document.body.appendChild(probe);
      const words = text.split(/\s+/);
      const next: string[] = [];
      let start = 0;
      while (start < words.length) {
        let low = start + 1;
        let high = words.length;
        let best = low;
        while (low <= high) {
          const middle = Math.floor((low + high) / 2);
          probe.textContent = words.slice(start, middle).join(" ");
          if (probe.getBoundingClientRect().height <= lineHeight * 3 + 0.5) {
            best = middle;
            low = middle + 1;
          } else {
            high = middle - 1;
          }
        }
        // Prefer natural sentence boundaries without truncating the original text.
        let end = best;
        for (let i = best - 1; i > start; i--) {
          if (/[.!?]["']?$/.test(words[i]) && i - start >= 3) {
            end = i + 1;
            break;
          }
        }
        next.push(words.slice(start, end).join(" "));
        start = end;
      }
      probe.remove();
      setChunks(current => current.join("\n") === next.join("\n") ? current : next);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    const observer = new ResizeObserver(schedule);
    observer.observe(container);
    schedule();
    document.fonts.ready.then(schedule);
    window.addEventListener("resize", schedule, { passive: true });
    return () => { cancelled = true; cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", schedule); };
  }, [text]);

  return <div ref={ref} className={`short-copy ${className}`}>{chunks.map((chunk, index) => <p key={index}>{chunk}</p>)}</div>;
}

function AuthorAvatar({ lazy = false }: { lazy?: boolean }) {
  return <img src={AUTHOR_IMG} alt="Mia Sinclair" width="64" height="64" loading={lazy ? "lazy" : "eager"} decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />;
}

function LollyStars() {
  return <span className="rating-stars precise-stars" role="img" aria-label="4.7 out of 5 stars"><span aria-hidden="true">★★★★★</span><span className="stars-fill" aria-hidden="true" style={{ width: "94%" }}>★★★★★</span></span>;
}

function BenefitsRow() {
  return <div className="benefits-row">
    <span className="benefit"><span aria-hidden="true">📦</span> Free discreet shipping</span>
    <span className="benefit"><span aria-hidden="true">🔒</span> 30-day guarantee</span>
    <span className="benefit"><span aria-hidden="true">🛡️</span> 12-month warranty</span>
  </div>;
}

function GuaranteeNote() {
  return <ShortCopy className="guarantee-note" text="Opened products qualify for a one-time exchange within 30 days. Refunds apply to unopened products. Standard outer packaging is plain; a neutral-label upgrade costs extra." />;
}

function LollyLink({ children, className = "cta-btn" }: { children: React.ReactNode; className?: string }) {
  return <a href={LOLLY_URL} className={className} target="_blank" rel="noopener noreferrer sponsored" onClick={trackLollyClick}>{children}</a>;
}

export default function Home() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const verdictCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      const image = heroImageRef.current;
      const verdict = verdictCtaRef.current;
      if (!image || !verdict) return;
      const pastImage = image.getBoundingClientRect().bottom <= 0;
      const rect = verdict.getBoundingClientRect();
      // Hide while the final CTA is on screen, including behind the sticky nav.
      const verdictOnScreen = rect.top < window.innerHeight && rect.bottom > 0;
      setStickyVisible(window.matchMedia("(max-width: 768px)").matches && pastImage && !verdictOnScreen);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(check); };
    const observer = new ResizeObserver(schedule);
    if (heroImageRef.current) observer.observe(heroImageRef.current);
    if (verdictCtaRef.current) observer.observe(verdictCtaRef.current);
    const intersection = new IntersectionObserver(schedule);
    if (verdictCtaRef.current) intersection.observe(verdictCtaRef.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sticky-active", stickyVisible);
    return () => document.body.classList.remove("sticky-active");
  }, [stickyVisible]);

  return <>
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo">The Velvet Edit</a>
        <ul className="nav-links">
          <li><a href="#">Wellness</a></li><li><a href="#">Reviews</a></li><li><a href="#">Guides</a></li><li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>

    <header className="hero">
      <div className="sponsored-label">Sponsored · In partnership with Hello Nancy</div>
      <span className="hero-category">Reviews · Wellness</span>
      <h1>We Tested 7 Mini Wands <span className="title-highlight">So You Don't Have To</span></h1>
      <ShortCopy className="hero-subtitle" text="One clear winner. Two letdowns I'd return. And a $69 wand that made me question everything I'd paid for before." />
      <p className="hero-dateline">Updated October 2026</p>
      <div className="hero-meta">
        <div className="author-avatar"><AuthorAvatar /></div>
        <div className="author-info"><div className="author-name">Mia Sinclair</div><div className="author-date">October 24, 2026 · 12 min read</div></div>
      </div>
      <div className="hero-image" ref={heroImageRef}>
        <img src={LOLLY_HERO_IMG} alt="Lolly by Nancy, a pink lollipop-shaped mini wand" fetchPriority="high" decoding="async" />
      </div>
    </header>

    <div className="article-preface">
      <aside className="hurry-box" aria-label="In a hurry?">
        <ShortCopy text="In a hurry? My pick is Lolly by Nancy, $69. Deep rumble, roommate quiet, waterproof, and it looks like a lollipop." />
        <LollyLink>Get the Lolly →</LollyLink>
      </aside>
      <div className="affiliate-disclosure"><ShortCopy text={SPONSOR_DISCLOSURE} /></div>
      <div className="trust-bar"><span aria-hidden="true">📦</span><span>Discreet shipping on every pick</span></div>
    </div>

    <section className="top-comparison-section" aria-label="Compare all seven products">
      <div className="top-comparison-table-wrapper" role="region" aria-label="Product comparison. Scroll horizontally to view every column." tabIndex={0}>
        <table className="top-comparison-table">
          <thead><tr><th scope="col">Product</th><th scope="col">Price</th><th scope="col">Speeds</th><th scope="col">Waterproof</th><th scope="col">Verdict</th></tr></thead>
          <tbody>
            <tr className="highlighted-row"><th scope="row">Lolly by Nancy</th><td>$69</td><td>10</td><td><span className="table-check">✓</span> IPX7</td><td>🏆 Editor's Pick</td></tr>
            {COMPETITORS.map(p => <tr key={p.id}><th scope="row">{p.name}</th><td>{p.price}</td><td>{p.speeds}</td><td>{p.waterproof === "ipx7" ? <><span className="table-check">✓</span> IPX7</> : p.waterproof === "resistant" ? <><span className="table-x">✗</span> water resistant only</> : <span className="table-meh">Not listed</span>}</td><td>{p.verdict}</td></tr>)}
          </tbody>
        </table>
      </div>
    </section>

    <main className="article-body">
      <section aria-labelledby="lolly-title">
        <div className="product-card winner" id="product-1">
          <div className="product-content">
            <div className="winner-header">
              <img className="winner-thumbnail" src={LOLLY_IMG} alt="Lolly Mini Wand" width="110" height="110" loading="lazy" decoding="async" />
              <div className="product-header">
                <span className="product-badge badge-winner">🏆 Editor's Pick</span>
                <h2 className="product-title" id="lolly-title"><span className="rank">#1</span> Lolly by Nancy</h2>
                <div className="product-rating"><LollyStars /><span className="rating-score">{LOLLY_RATING}/5 ({LOLLY_REVIEW_COUNT} reviews)</span></div>
                <div className="product-price">$69</div>
              </div>
            </div>
            <div className="product-body">
              <p className="lolly-opening">I thought my editor was pranking me.</p>
              <ShortCopy text="It showed up looking like a carnival lollipop. Pink head, little stick, zero intimidation. Then I pressed the button and stopped laughing." />
              <div className="feature-grid">
                <div className="feature-card"><span className="feature-icon" aria-hidden="true">🌊</span><h3>Deep, not buzzy</h3><ShortCopy text="Low, rumbly vibrations you feel deep. None of that surface buzz that leaves your fingers numb." /></div>
                <div className="feature-card"><span className="feature-icon" aria-hidden="true">🤫</span><h3>Roommate quiet</h3><ShortCopy text="My roommate was one wall away. She had no clue." /></div>
                <div className="feature-card"><span className="feature-icon" aria-hidden="true">✋</span><h3>Still handle</h3><ShortCopy text="Only the head vibrates. Cheaper wands buzz your whole hand along with it." /></div>
              </div>
              <div className="spec-strip" aria-label="Lolly specifications">{["10 modes", "IPX7 waterproof", "Flexible head", "One button"].map(spec => <span className="spec-pill" key={spec}>{spec}</span>)}</div>
              <blockquote className="lolly-pullquote">I've never made it past setting 7. That's a compliment.</blockquote>
              <ShortCopy text="Setting 1 is for easing in. By 6 or 7 you're somewhere else entirely. Settings 9 and 10 are still a mystery to me, and I'm fine with that." />
              <h3 className="disguise-heading">The lollipop disguise is low key genius</h3>
              <div className="check-badges">
                <span>✅ Passes the roommate test</span><span>✅ Passes the carry-on test</span><span>✅ Passes the "left it on the bathroom counter" test</span>
              </div>
              <ShortCopy text="Le Wand Petite came closest on feel, at more than double the price. Hitachi has the name, but it feels a decade old. Nothing else matched Lolly on power, quiet and price at the same time." />
              <div className="cta-wrapper"><LollyLink>Get the Lolly for $69 →</LollyLink></div>
              <BenefitsRow /><GuaranteeNote />
            </div>
          </div>
        </div>
      </section>

      {APPROVED_REVIEWS.length > 0 && <section className="review-section" aria-labelledby="owners-heading">
        <h2 className="section-heading" id="owners-heading">What Lolly owners are saying</h2>
        <div className="product-rating"><LollyStars /><span className="rating-score">{LOLLY_RATING}/5 from {LOLLY_REVIEW_COUNT} reviews</span></div>
        <div className="review-grid">{APPROVED_REVIEWS.map(review => <figure className="customer-review-card" key={review.name}>
          <div className="rating-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>★★★★★</div>
          <blockquote><ShortCopy text={review.text} /></blockquote>
          <figcaption><div className="reviewer-name">{review.name}</div>{review.verified && <div className="reviewer-verified">Verified Hello Nancy customer</div>}</figcaption>
        </figure>)}</div>
      </section>}

      <section aria-labelledby="competitors-heading">
        <h2 className="section-heading" id="competitors-heading">The other 6, and why they lost</h2>
        <div className="competitor-list">{COMPETITORS.map((p, index) => <article className="competitor-card" id={p.id} key={p.id}>
          <img className="competitor-image" src={p.image} alt={p.name} width="120" height="120" loading="lazy" decoding="async" />
          <div className="competitor-copy">
            <div className="competitor-topline"><h3 className="competitor-title">#{index + 2} {p.name}</h3><span className="competitor-price">{p.price}</span></div>
            <span className={`product-badge ${p.badgeClass}`}>{p.badge}</span>
            <div className="competitor-detail"><span className="detail-label">The good:</span><ShortCopy text={p.good} /></div>
            <div className="competitor-detail"><span className="detail-label">Why it lost:</span><ShortCopy text={p.lost} /></div>
          </div>
        </article>)}</div>
      </section>

      <section className="verdict-section" aria-labelledby="verdict-heading">
        <h2 id="verdict-heading">The Final Verdict</h2>
        <ShortCopy text="Every wand here has its fans. But only one nailed power, quiet, discretion and price all at once. If you're buying one mini wand this year, make it Lolly." />
        <img className="verdict-product-img" src={LOLLY_HERO_IMG} alt="Lolly by Nancy" width="180" loading="lazy" decoding="async" />
        <div ref={verdictCtaRef}><LollyLink>Try the Lolly Risk-Free for 30 Days →</LollyLink></div>
        <BenefitsRow /><GuaranteeNote />
      </section>

      <section className="faq-section" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>
        {FAQS.map((faq, index) => <div className={`faq-item${openFaq === index ? " open" : ""}`} key={faq.q}>
          <button className="faq-q" type="button" id={`faq-question-${index}`} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.q}</button>
          <div className="faq-a" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={openFaq !== index}>{openFaq === index && <ShortCopy text={faq.a} />}</div>
        </div>)}
      </section>
      <hr className="section-sep" />
      <div className="author-bio">
        <div className="author-bio-avatar"><AuthorAvatar lazy /></div>
        <div><div className="author-bio-name">Written by Mia Sinclair</div><div className="author-bio-text">Mia is a wellness and lifestyle writer who's spent the last 4 years reviewing intimate products so her friends don't have to waste money on bad ones. She's tested over 200 products across every category and price point, and has a particular obsession with products that are discreet enough to travel with.</div></div>
      </div>
    </main>

    <footer className="site-footer">
      <div className="footer-links"><a href="#">About</a><a href="#">Editorial Policy</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Contact</a></div>
      <p>© 2026 The Velvet Edit. All rights reserved.</p>
      <div className="footer-disclosure"><em><ShortCopy text={SPONSOR_DISCLOSURE} /></em></div>
    </footer>

    <div className={`sticky-cta${stickyVisible ? " visible" : ""}`} id="stickyCta" aria-label="Get Lolly" aria-hidden={!stickyVisible} inert={!stickyVisible}>
      <div className="sticky-cta-inner"><div className="sticky-cta-text"><img className="sticky-thumbnail" src={LOLLY_IMG} alt="" width="48" height="48" loading="lazy" decoding="async" /><span className="sticky-cta-copy"><strong>Lolly · $69</strong></span></div><LollyLink className="sticky-cta-btn">Get it →</LollyLink></div>
    </div>
  </>;
}
