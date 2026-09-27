import { useState } from 'react'
import './App.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('zdc-theme') === 'dark')

  const toggleTheme = () => {
    const nextTheme = darkMode ? 'light' : 'dark'
    localStorage.setItem('zdc-theme', nextTheme)
    setDarkMode(!darkMode)
  }

  return (
    <main data-theme={darkMode ? 'dark' : 'light'}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Zanzibar Developers Community home">
          <span className="brand-mark"><span>z</span><i /></span>
          <span className="brand-name">zanzibar<span>developers community</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}><span aria-hidden="true">{darkMode ? '☀' : '☾'}</span><span className="theme-label">{darkMode ? 'Light mode' : 'Dark mode'}</span></button>
          <a className="nav-join" href="mailto:hello@zdc.or.tz">Join the community <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light"><span className="live-dot" /> Unguja, Zanzibar · Open to everyone</div>
          <h1>Good things<br />happen when<br /><em>we build together.</em></h1>
          <p>A home for the people shaping technology in Zanzibar. Share what you know, find your people, and make something that matters.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="mailto:hello@zdc.or.tz">Find your community <Arrow /></a>
            <a className="text-link" href="#about">Get to know us <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span className="note-line" /> Technology, rooted in community.</div>
        <div className="hero-index">06°09′S &nbsp; 39°12′E</div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="intro-kicker"><span>01 / A LITTLE ABOUT US</span><span className="small-sun">✳</span></div>
        <div className="intro-copy">
          <h2>We’re a community of curious minds, <span>building Zanzibar’s tech future.</span></h2>
          <div className="intro-detail"><p>From first lines of code to big ideas taking shape, there’s a place for you here. We bring developers, designers, founders, and the tech-curious together to learn from one another and build with purpose.</p><a href="#community" className="round-link" aria-label="Discover our community">↓</a></div>
        </div>
      </section>

      <section className="community" id="community">
        <div className="section-wrap community-inner">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> 02 / WHAT BRINGS US TOGETHER</div><h2>Room to grow.<br /><em>Space to give back.</em></h2></div><p>Tech is better when more of us get to shape it. Here’s what we make possible, together.</p></div>
          <div className="pillars">
            <article className="pillar"><span className="pillar-no">01</span><div className="pillar-icon">⌘</div><h3>Learn out loud</h3><p>Trade skills, ask the “silly” question, and make the next thing a little less intimidating.</p><span className="pillar-arrow">↗</span></article>
            <article className="pillar"><span className="pillar-no">02</span><div className="pillar-icon">◎</div><h3>Find your people</h3><p>Meet the makers, mentors, and collaborators who understand what you’re building.</p><span className="pillar-arrow">↗</span></article>
            <article className="pillar"><span className="pillar-no">03</span><div className="pillar-icon">✳</div><h3>Build for here</h3><p>Put local ideas and Zanzibar’s unique perspective at the heart of what comes next.</p><span className="pillar-arrow">↗</span></article>
          </div>
        </div>
      </section>

      <section className="events section-wrap" id="events">
        <div className="events-top"><div><div className="eyebrow"><span className="eyebrow-dot" /> 03 / COME HANG OUT</div><h2>Better in<br /><em>real life.</em></h2></div><div className="events-aside"><p>Good conversations start somewhere. Pull up a chair, bring an idea, or just come as you are.</p><a href="mailto:hello@zdc.or.tz?subject=ZDC%20events" className="arrow-link">Ask about the next meetup <Arrow /></a></div></div>
        <div className="event-card"><div className="event-photo"><div className="event-stamp">ZDC<br /><span>together</span></div></div><div className="event-info"><div className="event-type">COMMUNITY MEETUP <span>·</span> STONE TOWN</div><h3>Good people.<br />Good ideas. No slides required.</h3><p>We’re putting the kettle on and getting Zanzibar’s tech community in one room. Details coming soon.</p><div className="event-bottom"><span><i className="live-dot" /> New gatherings on the way</span><a href="mailto:hello@zdc.or.tz?subject=Keep%20me%20posted" aria-label="Get notified about events">↗</a></div></div></div>
      </section>

      <section className="join"><div className="join-ornament">✳</div><div className="eyebrow light"><span className="live-dot" /> YOUR PEOPLE ARE HERE</div><h2>There’s a place<br />for <em>you in this.</em></h2><a className="button button-lime" href="mailto:hello@zdc.or.tz?subject=I%27d%20love%20to%20join">Come say hello <Arrow /></a><p>No gatekeeping. No prerequisites. Just people building a better tech community, together.</p></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span>z</span><i /></span><span className="brand-name">zanzibar<span>developers community</span></span></a><span className="footer-location">Made with care in Zanzibar <b>✳</b></span><div className="footer-links"><a href="mailto:hello@zdc.or.tz">Say hello <Arrow /></a><a href="#home">Back to top ↑</a></div></footer>
    </main>
  )
}

export default App
