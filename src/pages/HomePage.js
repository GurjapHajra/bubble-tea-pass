import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
    const { theme } = useTheme();
    const heroSrc = theme === 'dark' ? '/images/boba-hero-dark.svg' : '/images/boba-hero.svg';
    return (
        <div>
            {/* 1️⃣ Hero Section */}
                    <section className="hero full" id="hero">
                        <div className="hero-grid">
                            <div className="hero-copy">
                                                                <span className="badge">Pilot Program</span>
                                                                <h1>Your Daily Dose of Bubble Tea 🧋</h1>
                                                                    <p className="muted">Join the Campus Tea Pass — get 4 drinks a week for $30.</p>
                                <div className="cta-row">
                                    <Link className="btn primary shadow" to="/coming-soon">Subscribe Now</Link>
                                    <a className="btn secondary" href="#how-it-works">Learn More</a>
                                </div>
                            </div>
                                        <div className="hero-image">
                                            <img src={heroSrc} alt="Campus Tea signature drink" loading="eager" />
                            </div>
                        </div>
                    </section>

            {/* 2️⃣ How It Works */}
            <section className="section" id="how-it-works">
                        <h2 className="section-title">How it works</h2>
                <div className="cards">
                            <article className="card">
                                <div className="icon-circle">📝</div>
                                <h3>Subscribe</h3>
                                <p className="muted">Join for $30 a week. Cancel anytime.</p>
                            </article>
                            <article className="card">
                                <div className="icon-circle">📱</div>
                                <h3>Sip & Scan</h3>
                                <p className="muted">Show your digital pass at Campus Tea to redeem.</p>
                            </article>
                            <article className="card">
                                <div className="icon-circle">😊</div>
                                <h3>Enjoy</h3>
                                <p className="muted">Get 4 drinks every week — your boba budget, simplified!</p>
                            </article>
                </div>
            </section>

            {/* 3️⃣ What's Included */}
            <section className="section" id="included">
                        <h2 className="section-title">What’s included</h2>
                        <div className="grid-2">
                            <div>
                                <ul className="checklist">
                                      <li><strong>4 drinks / week</strong> (regular size)</li>
                                    <li><strong>Classic flavors</strong> — milk tea, jasmine green, taro, more</li>
                                    <li><strong>Free toppings</strong> — pearls, pudding, aloe, lychee jelly</li>
                                    <li><strong>Member perks</strong> — 10% off snacks, early access drops</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ marginBottom: 8 }}>Flavors you’ll love</h3>
                                <div className="pills">
                                    <span className="pill">Classic Milk Tea</span>
                                    <span className="pill">Brown Sugar</span>
                                    <span className="pill">Taro</span>
                                    <span className="pill">Jasmine Green</span>
                                    <span className="pill">Thai Tea</span>
                                    <span className="pill">Matcha</span>
                                    <span className="pill">Oolong</span>
                                </div>
                            </div>
                        </div>
            </section>

            {/* 4️⃣ Subscribe Section */}
                    <section className="section" id="subscribe">
                                <h2 className="section-title">Subscribe</h2>
                        <div className="pricing card" style={{ maxWidth: 520 }}>
                            <div className="price">
                                <div className="amount">$30</div>
                                <div className="per">/ week</div>
                            </div>
                            <ul className="checklist">
                                <li>4 drinks every week</li>
                                <li>Free toppings included</li>
                                <li>Member-only perks and drops</li>
                                <li>Cancel anytime</li>
                            </ul>
                            <div style={{ marginTop: 12 }}>
                                <Link className="btn primary shadow" to="/coming-soon">Proceed to checkout</Link>
                            </div>
                            <p className="muted small">Limited pilot offer · Taxes may apply</p>
                        </div>
                    </section>

            {/* 5️⃣ Digital Pass / Redemption */}
            <section className="section" id="pass">
                        <h2 className="section-title">Digital Pass & Redemption</h2>
                        <div className="grid-2">
                            <div>
                                <ol>
                                                                        <li>Receive a QR code via email/text after checkout.</li>
                                                                        <li>Show it at Campus Tea to redeem a drink.</li>
                                                                            <li>Your balance (4 drinks / week) updates automatically.</li>
                                </ol>
                                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 12, flexWrap: 'wrap' }}>
                                    <img
                                        alt="Sample QR"
                                        width={140}
                                        height={140}
                                        style={{ borderRadius: 12, border: '1px solid var(--border)' }}
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=CampusTeaPass`}
                                    />
                                    <a className="btn" href="#">Login / Check Balance</a>
                                </div>
                            </div>
                            <div>
                                <div className="pass-card card">
                                    <div className="pass-title">Campus Tea Pass</div>
                                    <div className="pass-row"><span>Drinks remaining</span><strong>4</strong></div>
                                    <div className="pass-row"><span>Member ID</span><strong>demo-user</strong></div>
                                      <div className="pass-row"><span>Valid</span><strong>Weekly</strong></div>
                                </div>
                            </div>
                        </div>
            </section>

            {/* 6️⃣ Testimonials */}
                    <section className="section" id="testimonials">
                        <h2 className="section-title">Loved on campus</h2>
                <div className="cards">
                            <article className="card">
                                <div className="avatar">SK</div>
                                <blockquote>“Best deal on campus!” — Sarah K.</blockquote>
                            </article>
                            <article className="card">
                                <div className="avatar">AL</div>
                                <blockquote>“I’m saving $15+ a week on boba!” — Alex L.</blockquote>
                            </article>
                            <article className="card">
                                <p>Follow us: <a href="https://instagram.com/campusteatea" target="_blank" rel="noreferrer">@campusteatea</a></p>
                            </article>
                </div>
            </section>

            {/* 7️⃣ Footer / Contact */}
            <section className="section" id="feedback">
                <h2>Contact us</h2>
                <div className="cards">
                            <article className="card" style={{ maxWidth: 520 }}>
                                <h3>Partner with us / Questions?</h3>
                                <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will get back to you shortly.'); }}>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input id="name" placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="you@school.edu" />
                                    </div>
                                    <div>
                                        <label htmlFor="msg">Message</label>
                                        <textarea id="msg" rows={4} placeholder="How can we help?" />
                                    </div>
                                    <button className="btn primary" type="submit">Send</button>
                                </form>
                            </article>
                            <article className="card">
                                <h3>Visit us</h3>
                                <p className="muted">123 College Ave, Suite 100<br/>Mon–Fri 9am–7pm · Sat–Sun 10am–6pm</p>
                                <div className="map-embed" style={{ marginTop: 8 }}>
                                    <iframe
                                        title="Campus Tea Map"
                                        style={{ width: '100%', height: 240, border: 0, borderRadius: 12 }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434!2d144.9537363!3d-37.816279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzEzLjQiRQ!5e0!3m2!1sen!2s!4v1614030000000"
                                    />
                                </div>
                                <p className="muted">© 2025 Campus Tea | Pilot Program Terms & Conditions</p>
                            </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;