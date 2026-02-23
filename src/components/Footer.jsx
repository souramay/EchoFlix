import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Background effects */}
      <div style={styles.bgGlow} />
      <div style={styles.bgLine} />

      <div style={styles.container}>
        {/* Left: Identity */}
        <div style={styles.identity}>
          <div>
            <h2 style={styles.name}>Souramay Bhowmik</h2>
            <p style={styles.degree}>B.Tech · Computer Science & Engineering</p>
            <span style={styles.badge}>2026</span>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Right: Social */}
        <div style={styles.social}>
          <p style={styles.socialLabel}>Find me on</p>
          <div style={styles.icons}>

            {/* Website */}
            <a href="https://souramay.vercel.app/" target="_blank" rel="noopener noreferrer" style={styles.iconLink} className="footer-icon" aria-label="Website">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://x.com/Souramay_10" target="_blank" rel="noopener noreferrer" style={styles.iconLink} className="footer-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/souramay" target="_blank" rel="noopener noreferrer" style={styles.iconLink} className="footer-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/__souramay__" target="_blank" rel="noopener noreferrer" style={styles.iconLink} className="footer-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/souramay/" target="_blank" rel="noopener noreferrer" style={styles.iconLink} className="footer-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <span style={styles.copyright}>© 2026 Souramay Bhowmik. All rights reserved.</span>
        <a href="https://souramay.vercel.app/" target="_blank" rel="noopener noreferrer" style={styles.websiteLink} className="footer-website-link">
          souramay.vercel.app ↗
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-icon {
          transition: color 0.25s ease, transform 0.25s ease, background 0.25s ease !important;
        }
        .footer-icon:hover {
          color: #f0c674 !important;
          transform: translateY(-4px) scale(1.15) !important;
          background: rgba(240, 198, 116, 0.1) !important;
        }
        .footer-website-link {
          transition: color 0.2s ease !important;
        }
        .footer-website-link:hover {
          color: #f0c674 !important;
        }
      `}</style>
    </footer>
  )
}

const styles = {
  footer: {
    position: 'relative',
    background: 'linear-gradient(135deg, #0d0d0d 0%, #111827 60%, #0d1117 100%)',
    overflow: 'hidden',
    fontFamily: "'DM Sans', sans-serif",
    borderTop: '1px solid rgba(240,198,116,0.15)',
  },
  bgGlow: {
    position: 'absolute',
    top: '-60px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '200px',
    background: 'radial-gradient(ellipse, rgba(240,198,116,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  bgLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(240,198,116,0.4), transparent)',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '48px 32px 36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '32px',
  },
  identity: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '22px',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 4px',
    letterSpacing: '-0.3px',
  },
  degree: {
    fontSize: '13px',
    color: '#8b9cb3',
    margin: '0 0 8px',
    fontWeight: 300,
    letterSpacing: '0.3px',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(240,198,116,0.12)',
    color: '#f0c674',
    border: '1px solid rgba(240,198,116,0.3)',
    borderRadius: '4px',
    padding: '2px 10px',
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '1.5px',
  },
  divider: {
    width: '1px',
    height: '80px',
    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '14px',
  },
  socialLabel: {
    fontSize: '11px',
    color: '#4a5568',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    margin: 0,
    fontWeight: 500,
  },
  icons: {
    display: 'flex',
    gap: '6px',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#8b9cb3',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  bottomBar: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    flexWrap: 'wrap',
    gap: '8px',
  },
  copyright: {
    fontSize: '12px',
    color: '#374151',
    letterSpacing: '0.3px',
  },
  websiteLink: {
    fontSize: '12px',
    color: '#4a5568',
    textDecoration: 'none',
    letterSpacing: '0.3px',
  },
}

export default Footer
