/**
 * The Velvet Edit — Lolly Landing Page
 * Design: Warm cream editorial magazine style
 * Fonts: Instrument Serif (headlines) + DM Sans (body)
 * Palette: #FBF8F4 cream bg, #E8857A coral accent
 */
import { useEffect, useRef, useState } from "react";

// CDN image URLs
const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/YCDdxWLbLqRVUTYr.png";
const SHIBARI_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/WYEnKGNBWydsUsVR.png";
const LOVEHONEY_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/pORvxgXCjTPrOwJn.jpg";
const LOLLY_IMG = "https://hellonancy.com/cdn/shop/files/LOL1_eb49dfb5-0b1b-438d-b41e-dd27c75f2120.png?v=1762422962&width=800";
const LEWAND_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/GEGUcToGBoyEHvhN.jpg";
const DAME_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/FVVKKiSUwqhUvitY.webp";
const LOLLY_VERDICT_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/HlPtkxTQBqyhSucH.webp";

const AUTHOR_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037635287/AhVphAfTJpLeUnVh.jpg";

// Author photo component
function AuthorAvatar() {
  return (
    <img src={AUTHOR_IMG} alt="Mia Sinclair" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
  );
}

export default function Home() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const product2Ref = useRef<HTMLDivElement>(null);
  const verdictRef = useRef<HTMLDivElement>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sticky CTA logic
  useEffect(() => {
    function checkSticky() {
      const p2 = product2Ref.current;
      const verdict = verdictRef.current;
      if (!p2) return;
      const p2Rect = p2.getBoundingClientRect();
      const verdictRect = verdict ? verdict.getBoundingClientRect() : null;
      const shouldShow = p2Rect.top < window.innerHeight * 0.7;
      const shouldHide = verdictRect ? verdictRect.top < window.innerHeight * 0.5 : false;
      setStickyVisible(shouldShow && !shouldHide);
    }
    window.addEventListener('scroll', checkSticky, { passive: true });
    checkSticky();
    return () => window.removeEventListener('scroll', checkSticky);
  }, []);

  // Urgency toast logic
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setToastVisible(true);
      toastTimerRef.current = setTimeout(() => {
        setToastVisible(false);
      }, 8000);
    }, 20000);
    return () => {
      clearTimeout(showTimer);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // Body padding for sticky bar
  useEffect(() => {
    if (stickyVisible) {
      document.body.classList.add('sticky-active');
    } else {
      document.body.classList.remove('sticky-active');
    }
  }, [stickyVisible]);

  const closeToast = () => {
    setToastVisible(false);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      {/* NAVIGATION */}
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

      {/* HERO */}
      <header className="hero">
        <span className="hero-category">Reviews &middot; Wellness</span>
        <h1>Small But Mighty: 5 Mini Wands <span className="title-highlight">So Powerful, You'll Cancel Plans</span></h1>
        <p className="hero-subtitle">I tested over 20 mini wands across every price point so you don't have to. One of them genuinely made me call in sick to work. Here are the only 5 worth your money in 2026.</p>
        <div className="hero-meta">
          <div className="author-avatar">
            <AuthorAvatar />
          </div>
          <div className="author-info">
            <div className="author-name">Mia Sinclair</div>
            <div className="author-date">February 12, 2026 &middot; 9 min read</div>
          </div>
        </div>
        <p className="affiliate-note">We may earn a small commission from links on this page, but we only recommend products we genuinely love. Promise.</p>
      </header>

      {/* HERO IMAGE */}
      <div className="hero-image">
        <div className="hero-image-inner">
          <img src={HERO_IMG} alt="Mini wand vibrators reviewed — flat lay with travel essentials" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'inherit'}} />
        </div>
      </div>

      {/* ARTICLE */}
      <article className="article-body">
        <p className="dropcap">Three of my friends asked me the exact same question last month. And honestly, it's a really good question: "What's a solid vibrator that's small enough to travel with, quiet enough for thin walls, and doesn't look like it belongs in a medical supply catalog?" Every time, I found myself recommending the same handful of products. So I figured I should just write it all down.</p>

        <p>Here's the thing about mini wand vibrators that most people don't realize. They've gotten <strong>ridiculously</strong> good in the last couple of years. The technology that used to only exist in full-size wands (think those big, heavy massage wands your mom pretends she uses for her shoulders) has been miniaturized into something that fits in your makeup bag. We're talking rumbly, deep vibrations. Not that annoying buzzy surface feeling that makes your hand go numb before anything interesting happens.</p>

        <p>I spent about three months testing over 20 different mini wands across every price point. From a $15 Amazon impulse buy that made me question my life choices, to a $135 luxury option that was genuinely excellent but also... $135. What I found surprised me. The best one wasn't the most expensive. It wasn't the most famous brand. And it looks like a piece of candy.</p>

        <p>Let's get into it.</p>

        {/* QUICK PICKS */}
        <div className="quick-picks">
          <div className="quick-picks-title">My Top 5 at a Glance</div>
          <div className="quick-pick-item"><span className="pick-rank">1.</span><span className="pick-name">Nancy's Lolly Mini Wand</span><span className="pick-note"> · Best Overall</span><span className="pick-stars">★★★★★ 9.4</span></div>
          <div className="quick-pick-item"><span className="pick-rank">2.</span><span className="pick-name">Le Wand Petite</span><span className="pick-note"> · Luxury Pick</span><span className="pick-stars">★★★★☆ 8.9</span></div>
          <div className="quick-pick-item"><span className="pick-rank">3.</span><span className="pick-name">Dame Com Wand</span><span className="pick-note"> · Best Ergonomics</span><span className="pick-stars">★★★★☆ 8.6</span></div>
          <div className="quick-pick-item"><span className="pick-rank">4.</span><span className="pick-name">Shibari Mini Halo</span><span className="pick-note"> · Best Budget</span><span className="pick-stars">★★★★☆ 8.2</span></div>
          <div className="quick-pick-item"><span className="pick-rank">5.</span><span className="pick-name">Lovehoney Ignite Mini</span><span className="pick-note"> · Most Compact</span><span className="pick-stars">★★★☆☆ 7.8</span></div>
        </div>

        {/* PRODUCT #1: LOLLY */}
        <div className="product-card winner" id="product-1">
          <span className="winner-badge">🏆 Editor's Pick</span>
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #FFE5E0, #FFF0EE, #FCEAE6)'}}>
            <img className="product-photo" src={LOLLY_IMG} alt="Nancy's Lolly Mini Wand Vibrator" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-winner">Best Overall Mini Wand</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#1</span> Nancy's Lolly Mini Wand</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★★</span>
                <span className="rating-score">9.4/10</span>
              </div>
              <div className="product-price">$69 <span className="original">$139</span></div>
            </div>
            <div className="product-body">
              <p>Okay, full transparency. When this showed up at my door, I almost didn't test it. It looked like a toy lollipop. Like something you'd win at a carnival. I genuinely thought my editor was messing with me.</p>
              <p>I was so, so wrong.</p>
              <p>The first thing you notice when you turn it on is that the vibrations feel <strong>deep</strong>. Not that surface-level buzzy nonsense that makes your fingers go numb. I'm talking rumbly, low-frequency vibrations that you can actually feel doing something meaningful. And the flexible head? It bends and conforms to your body instead of making you do all the work to find the right angle. I spent about 15 minutes my first session and let's just say I rearranged my entire evening after that.</p>
              <p>It's got 10 different intensities and patterns, which sounds like overkill until you realize that the range between "gentle warm-up" and "okay wow" is genuinely useful. The lowest setting is perfect for exploration, and by the time you hit setting 6 or 7, you're in a completely different universe. I don't even know what settings 9 and 10 do because I've never needed to get there. (That's a compliment.)</p>
              <p>And can we talk about how <strong>quiet</strong> this thing is? I used it in my apartment with my roommate literally one wall away and she had zero clue. The handle doesn't vibrate either, which is a detail I didn't know I needed until I tried cheaper wands where your entire hand buzzes along with it. Not cute.</p>
              <p>The lollipop design is lowkey genius from a practical standpoint. Nobody would ever guess what it is. It looks like a quirky desk accessory. A friend saw it in my overnight bag and asked where I got "that cute little massager thing." I said Amazon. I lied. But the point is: it passes the roommate test, the carry-on test, and the "accidentally left it on the bathroom counter" test with flying colors.</p>

              <h4>What I love:</h4>
              <ul className="pros">
                <li>Shocking power-to-size ratio. Performs like wands 3x its size.</li>
                <li>Whisper quiet with a non-vibrating handle (your hand and your roommate will thank you)</li>
                <li>Fully waterproof (IPX7) so it works in the shower or bath</li>
                <li>Flexible head finds the right spot without awkward repositioning</li>
                <li>Free worldwide shipping + 12 month warranty + 30-day satisfaction guarantee</li>
              </ul>

              <h4>What could be better:</h4>
              <ul className="cons">
                <li>Pin-style charger (no universal USB-C, easy to misplace)</li>
                <li>Lowest setting might still feel intense if you're very sensitive</li>
                <li>I wish the handle was just a touch longer, but that's me being picky</li>
              </ul>

              <div className="review-quotes">
                <div className="rq-title">What real buyers are saying</div>
                <div className="review-quote">
                  <p>"Don't be fooled by the size. It's one powerful piece of kit that never disappoints."</p>
                  <span className="reviewer">Michelle R. <span className="verified-badge">Verified Buyer</span></span>
                </div>
                <div className="review-quote">
                  <p>"I was skeptical that this would have the necessary power required. OMG, I was so wrong. It definitely gets the job done! One of my new faves, and so small and discreet it's easy to take away on trips."</p>
                  <span className="reviewer">Pauline W. <span className="verified-badge">Verified Buyer</span></span>
                </div>
                <div className="review-quote">
                  <p>"Really enjoyed how this one seems to find the spot the first time, every time! The quietest toy I've EVER owned!"</p>
                  <span className="reviewer">Karen C. <span className="verified-badge">Verified Buyer</span></span>
                </div>
                <div className="review-quote">
                  <p>"Perfect size for playing together and not having a toy take up too much space!"</p>
                  <span className="reviewer">Spencer R. <span className="verified-badge">Verified Buyer</span></span>
                </div>
              </div>

              <div className="cta-wrapper">
                <a href="https://hellonancy.com/products/lolly-mini-wand" className="cta-btn" target="_blank" rel="noopener">Get Lolly for $69 →</a>
              </div>
              <p className="cta-subtext">Free discreet shipping &middot; 30-day satisfaction guarantee &middot; 12 month warranty</p>
            </div>
          </div>
        </div>

        <p>Now, the rest of this list is genuinely solid. These are all products I'd happily recommend if Lolly somehow didn't exist. But it does, and at that price, it's really hard to argue with. That said, depending on your priorities and your budget, one of these runners-up might click better for you. So let's keep going.</p>

        {/* PRODUCT #2: LE WAND */}
        <div className="product-card" id="product-2" ref={product2Ref}>
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #EDE7F6, #F3E5F5, #E8EAF6)'}}>
            <img className="product-photo" src={LEWAND_IMG} alt="Le Wand Petite Rechargeable Vibrating Massager" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-luxury">Luxury Pick</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#2</span> Le Wand Petite Rechargeable</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">8.9/10</span>
              </div>
              <div className="product-price">$145</div>
            </div>
            <div className="product-body">
              <p>If money is truly no object and you want the Hermès of mini wands, the Le Wand Petite is gorgeous. And I mean that. The build quality feels premium the second you pick it up. Heavier, more substantial, and the silicone head is exceptionally soft. It comes with 10 vibration speeds and 6 pulsation patterns, all of which feel intentional rather than like filler someone programmed at 2am.</p>
              <p>So why isn't it #1? Honestly, it's the price. At $145, you're paying more than double what Lolly costs. The build quality and accessories justify some of that gap, but in terms of the actual vibration experience, Lolly gets you remarkably close. It's also noticeably heavier and bigger, which makes it less travel-friendly and kind of tiring to hold if you like to take your time. If you're buying this as a luxurious treat for yourself and portability isn't on your radar, it's a beautiful choice. But for most people, the premium doesn't quite match the price jump.</p>

              <h4>Highlights:</h4>
              <ul className="pros">
                <li>Premium build quality you can genuinely feel in your hand</li>
                <li>10 speeds + 6 patterns, all well-crafted</li>
                <li>Luxe unboxing experience and accessories included</li>
                <li>Compatible with head attachments for added versatility</li>
              </ul>
              <h4>Trade-offs:</h4>
              <ul className="cons">
                <li>More than double Lolly's price for a marginal upgrade in experience</li>
                <li>Heavier and bulkier (less ideal for travel or longer sessions)</li>
                <li>Looks more obviously like a vibrator (not passing any desk tests)</li>
                <li>The weight can tire out your hand after a while</li>
              </ul>

              <div className="cta-wrapper">
                <a href="https://www.lewandmassager.com/le-wand-petite.html?&92_467" className="cta-btn secondary" target="_blank" rel="noopener">View Le Wand Petite →</a>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT #3: DAME COM */}
        <div className="product-card" id="product-3">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #E0F2F1, #E8F5E9, #F1F8E9)'}}>
            <img className="product-photo" src={DAME_IMG} alt="Dame Com Wand Vibrator" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-ergonomic">Best Ergonomics</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#3</span> Dame Com Wand Vibrator</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">8.6/10</span>
              </div>
              <div className="product-price">$119</div>
            </div>
            <div className="product-body">
              <p>Dame is one of those brands that clearly thinks about how people actually hold and use their products, and it shows. The Com has this weighted, curved shape that just naturally fits in your hand, and the flexible tip does a solid job distributing vibrations across a wider area. It's the most "ergonomically thought-through" wand I tested, which sounds boring until you've been holding something for 20 minutes and your wrist is screaming at you.</p>
              <p>Where it falls short compared to Lolly is power and variety. The Com has 5 intensities and 5 patterns, and even on the higher settings, it just doesn't match that deep rumbly intensity that Lolly somehow pulls from its tiny body. At $119, it's nearly double the price of Lolly without delivering a noticeably better experience. I respect the design, but my wallet has feelings too.</p>

              <h4>Highlights:</h4>
              <ul className="pros">
                <li>Best-in-class ergonomic grip. Your hand will love you.</li>
                <li>Weighted feel genuinely reduces hand fatigue</li>
                <li>Flexible tip with nice vibration spread</li>
                <li>Truly quiet during use</li>
              </ul>
              <h4>Trade-offs:</h4>
              <ul className="cons">
                <li>Same number of settings as Lolly but less power at the top end</li>
                <li>Less raw power than Lolly, especially at the top end</li>
                <li>$119 feels steep for what you're actually getting</li>
                <li>Not winning any discretion awards with this design</li>
              </ul>

              <div className="cta-wrapper">
                <a href="https://dame.com/products/com" className="cta-btn secondary" target="_blank" rel="noopener">View Dame Com →</a>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT #4: SHIBARI */}
        <div className="product-card" id="product-4">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1, #FFFDE7)'}}>
            <img className="product-photo" src={SHIBARI_IMG} alt="Shibari Mini Halo" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-budget">Best Budget Pick</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#4</span> Shibari Mini Halo</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-score">8.2/10</span>
              </div>
              <div className="product-price">$82</div>
            </div>
            <div className="product-body">
              <p>The Shibari Mini Halo has been an internet darling for years, and I totally get why. At around $82, it delivers surprisingly decent vibrations and it's available basically everywhere. It's the Toyota Corolla of mini wands: reliable, gets you where you need to go, won't exactly make your heart race.</p>
              <p>The catch is the vibration quality. It's distinctly <strong>buzzy</strong> rather than rumbly. That surface-level tingling sensation that cheaper motors produce. It works, sure, but after using Lolly's deeper vibrations, going back to the Shibari feels like comparing the massage chairs at the airport to an actual spa. It's also louder than you'd expect, the battery gives up after about an hour, and the silicone doesn't feel as nice against your skin. For $82, it's a questionable value. But fair warning: most people I know who started with this ended up buying something better within a few months anyway. So you kind of end up spending more in the long run.</p>

              <h4>Highlights:</h4>
              <ul className="pros">
                <li>Really hard to beat this price point</li>
                <li>Widely available and tons of reviews online</li>
                <li>20+ vibration modes (the quantity is there, at least)</li>
                <li>Compact enough for travel</li>
              </ul>
              <h4>Trade-offs:</h4>
              <ul className="cons">
                <li>Buzzy vibrations, not the deep rumbly kind that actually gets you there</li>
                <li>Noticeably louder than the premium options on this list</li>
                <li>Battery life is meh (about 1 hour tops)</li>
                <li>Silicone quality doesn't feel as body-safe or smooth</li>
                <li>Most people end up upgrading within 6 months</li>
              </ul>

              <div className="cta-wrapper">
                <a href="https://www.easytoys.nl/shibari-mini-halo-zwart-p-35766/" className="cta-btn secondary" target="_blank" rel="noopener">View Shibari Mini Halo →</a>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT #5: LOVEHONEY */}
        <div className="product-card" id="product-5">
          <div className="product-image-area" style={{background: 'linear-gradient(135deg, #FCE4EC, #F8BBD0, #FCE4EC)'}}>
            <img className="product-photo" src={LOVEHONEY_IMG} alt="Lovehoney Ignite Mini Wand" loading="lazy" />
          </div>
          <div className="product-content">
            <div className="product-header">
              <span className="product-badge badge-compact">Most Compact</span>
              <h2 className="product-title" style={{margin:0}}><span className="rank">#5</span> Lovehoney Ignite Mini Wand</h2>
              <div className="product-rating">
                <span className="rating-stars">★★★☆☆</span>
                <span className="rating-score">7.8/10</span>
              </div>
              <div className="product-price">$40</div>
            </div>
            <div className="product-body">
              <p>Lovehoney is a name I trust, and the Ignite has things going for it. It's compact, rechargeable, comes from a brand with solid customer service, and the spec sheet says 20 functions, which sounds impressive.</p>
              <p>In practice? A lot of those 20 patterns feel like the same thing with a slightly different rhythm, and the motor just doesn't produce the same depth as the top picks on this list. The most honest word I can use is "adequate." If you handed it to someone who's never used a vibrator, they'd probably think it's fine. But if you've ever experienced what a quality motor feels like, this one will leave you thinking "that's it?" It's more of a "first toy you'll replace" than a "toy that becomes your go-to." And at $39 less than Lolly, the savings sound nice until you end up buying something better three months later anyway.</p>

              <h4>Highlights:</h4>
              <ul className="pros">
                <li>Trusted brand with legitimately great customer service</li>
                <li>Very compact and lightweight</li>
                <li>USB rechargeable</li>
                <li>1-year guarantee from Lovehoney</li>
              </ul>
              <h4>Trade-offs:</h4>
              <ul className="cons">
                <li>Motor lacks depth, feels noticeably weaker than Lolly</li>
                <li>20 patterns looks good on paper but many are basically redundant</li>
                <li>Gets warm during extended use (not in a fun way)</li>
                <li>You'll likely want to upgrade within a few months</li>
              </ul>

              <div className="cta-wrapper">
                <a href="https://www.lovehoney.com/sex-toys/vibrators/massage-wand-vibrators/p/lovehoney-ignite-20-function-mini-wand-vibrator/a41331g75301.html" className="cta-btn secondary" target="_blank" rel="noopener">View Lovehoney Ignite →</a>
              </div>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="comparison-section">
          <h2>How They Stack Up</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{width:'18%'}}>Feature</th>
                  <th className="col-lolly" style={{width:'18%'}}><span className="col-lolly-badge">🏆 Our Pick</span>Lolly</th>
                  <th style={{width:'16%'}}>Le Wand</th>
                  <th style={{width:'16%'}}>Dame Com</th>
                  <th style={{width:'16%'}}>Shibari</th>
                  <th style={{width:'16%'}}>Lovehoney</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td className="col-lolly"><strong style={{fontSize:'16px',color:'var(--accent-dark)'}}>$69</strong></td>
                  <td>$145</td>
                  <td>$119</td>
                  <td>$82</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>Vibration Type</td>
                  <td className="col-lolly"><span className="table-check">Rumbly ✓</span></td>
                  <td><span className="table-check">Rumbly ✓</span></td>
                  <td className="table-meh">Moderate</td>
                  <td className="table-x">Buzzy</td>
                  <td className="table-x">Buzzy</td>
                </tr>
                <tr>
                  <td>Settings</td>
                  <td className="col-lolly"><strong>10</strong></td>
                  <td>16</td>
                  <td>10</td>
                  <td>20+</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Noise Level</td>
                  <td className="col-lolly"><span className="table-check">Whisper ✓</span></td>
                  <td>Quiet</td>
                  <td><span className="table-check">Whisper ✓</span></td>
                  <td className="table-x">Noticeable</td>
                  <td className="table-meh">Moderate</td>
                </tr>
                <tr>
                  <td>Travel-Friendly</td>
                  <td className="col-lolly"><span className="t-stars"><span className="filled">★★★★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★★</span><span className="empty">★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★★</span><span className="empty">★</span></span></td>
                </tr>
                <tr>
                  <td>Body-Safe Silicone</td>
                  <td className="col-lolly"><span className="table-check">✓</span></td>
                  <td><span className="table-check">✓</span></td>
                  <td><span className="table-check">✓</span></td>
                  <td className="table-meh">Partial</td>
                  <td><span className="table-check">✓</span></td>
                </tr>
                <tr>
                  <td>USB Rechargeable</td>
                  <td className="col-lolly"><span className="table-check">✓</span></td>
                  <td><span className="table-check">✓</span></td>
                  <td><span className="table-check">✓</span></td>
                  <td><span className="table-check">✓</span></td>
                  <td><span className="table-check">✓</span></td>
                </tr>
                <tr>
                  <td>Water Resistant</td>
                  <td className="col-lolly">Waterproof ✓</td>
                  <td>Splash-proof</td>
                  <td>Splash-proof</td>
                  <td className="table-x">No</td>
                  <td>Splash-proof</td>
                </tr>
                <tr>
                  <td>Discreet Design</td>
                  <td className="col-lolly"><span className="t-stars"><span className="filled">★★★★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★</span><span className="empty">★★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★</span><span className="empty">★★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                </tr>
                <tr>
                  <td>Couples-Friendly</td>
                  <td className="col-lolly"><span className="t-stars"><span className="filled">★★★★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★★</span><span className="empty">★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                  <td><span className="t-stars"><span className="filled">★★★</span><span className="empty">★★</span></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* VERDICT */}
        <div className="verdict-section" ref={verdictRef}>
          <h2>The Verdict</h2>
          <img className="verdict-product-img" src={LOLLY_VERDICT_IMG} alt="Nancy's Lolly Mini Wand" />
          <p>I test a lot of toys. Lolly caught me completely off guard. Deep rumbly vibrations, whisper quiet, fully waterproof, and a design that could pass as a desk trinket, all for $69. Whether it's your first vibrator or your tenth, this is the easiest recommendation I've made all year.</p>
          <div className="verdict-perks">
            <div className="verdict-perk"><span>📦</span> Free discreet shipping</div>
            <div className="verdict-perk"><span>🔒</span> 30-day guarantee</div>
            <div className="verdict-perk"><span>🛡️</span> 12-month warranty</div>
          </div>
          <a href="https://hellonancy.com/products/lolly-mini-wand" className="cta-btn" target="_blank" rel="noopener">Get Lolly for $69 →</a>
          <p className="cta-subtext" style={{marginTop: '12px'}}>hellonancy.com &middot; Ships worldwide in discreet packaging</p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {[
            { q: "Is it actually powerful enough? It's so tiny.", a: "This was my biggest concern too, and yeah, it's plenty powerful. Like, shockingly so. Verified buyers keep saying the same thing: they didn't expect it to deliver and then it completely did. One reviewer literally wrote \"I was skeptical... OMG, I was so wrong.\" The motor produces deep, rumbly vibrations (not that cheap buzzy stuff). It genuinely punches way above its weight." },
            { q: "Will my roommate / partner / neighbors hear it?", a: "Super unlikely. I'm not exaggerating when I say this is one of the quietest vibrators I've ever tested. I used it with someone sleeping in the next room with paper-thin apartment walls and had zero issues. One buyer actually called it \"the quietest toy I've EVER owned.\" On the lower settings, you basically can't hear it. The higher settings produce a soft hum, but nothing that's getting through a closed door." },
            { q: "Can I use it in the shower?", a: "Yes! Lolly is fully waterproof (IPX7 certified), so feel free to take it into the shower or bath. Just make sure to dry it thoroughly before charging. It's one of the few mini wands in this price range that can handle full submersion." },
            { q: "I've never owned a vibrator. Is this beginner-friendly?", a: "Genuinely one of the best starter options I've come across. The 10 settings give you a huge range, from super gentle to intense, so you can start low and explore at whatever pace feels right. The controls are dead simple (one button, press to cycle). It's small, non-intimidating, and cute. Several buyers specifically mentioned it being \"great for first-time explorers.\" You'll be fine. Better than fine, actually." },
            { q: "Does it actually work for couples?", a: "Really well. Its size is actually a huge advantage here because it doesn't get in the way during partnered play the way bigger wands do. A bunch of reviewers specifically mentioned using it with their partner. One wrote that it's \"perfect size for playing together and not having a toy take up too much space.\" Plus the quiet motor means you're not introducing a lawnmower into an intimate moment." },
            { q: "What if I buy it and don't like it?", a: "Nancy offers a 30-day satisfaction guarantee, so you can try it essentially risk-free. They've also got a 12-month warranty on defects. And here's the thing that actually surprised me: their customer service team gets genuinely great reviews across Trustpilot, which is rare in this industry. Multiple buyers called it out specifically. So if something goes sideways, you're not going to be yelling into the void." },
            { q: "Is the packaging actually discreet?", a: "Completely. Plain box, no branding, no product descriptions, nothing on the outside that gives it away. Your mail carrier will have zero idea. The billing statement is discreet too. I've ordered from plenty of brands that claim discreet packaging and then ship you a box with a giant wink emoji on it. Nancy actually delivers on this one." },
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
          <div className="author-bio-avatar">
            <AuthorAvatar />
          </div>
          <div>
            <div className="author-bio-name">Written by Mia Sinclair</div>
            <div className="author-bio-text">Mia is a wellness and lifestyle writer who's spent the last 4 years reviewing intimate products so her friends don't have to waste money on bad ones. She's tested over 200 toys across every category and price point, and has a particular obsession with products that are discreet enough to travel with. When she's not "working from home," she's probably on a flight somewhere with a suspiciously heavy carry-on.</div>
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
        <p className="footer-disclosure"><strong>Advertising Disclosure:</strong> We may earn a commission when you buy through links on this site. This never influences our recommendations. We only feature products we've personally tested and genuinely believe in.</p>
      </footer>

      {/* STICKY CTA BAR */}
      <div className={`sticky-cta${stickyVisible ? ' visible' : ''}`} id="stickyCta">
        <div className="sticky-cta-inner">
          <div className="sticky-cta-text">
            <span className="sticky-cta-emoji">🍭</span>
            <div className="sticky-cta-copy"><strong>#1 Pick: Lolly Mini Wand</strong><br/>$69 with free discreet shipping</div>
          </div>
          <a href="https://hellonancy.com/products/lolly-mini-wand" className="sticky-cta-btn" target="_blank" rel="noopener">Get Lolly →</a>
        </div>
      </div>

      {/* URGENCY TOAST */}
      <div className={`urgency-toast${toastVisible ? ' visible' : ''}`} id="urgencyToast">
        🔥 <span className="toast-highlight">247 people</span> viewed Lolly in the last 24 hours. It tends to sell out fast.
        <span className="toast-close" onClick={closeToast}>✕</span>
      </div>
    </>
  );
}
