import Container from '../components/Container';
import Section from '../components/Section';
import footerStyles from '../styles/footer.module.css';

const Disclaimer: React.FC = () => {
  return (
    <main style={{ paddingTop: '72px' }}>
      <Section small>
        <Container>
          {/* Page Header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ color: 'var(--grey)', fontSize: 14, marginBottom: 6 }}>Fraylon Technologies</div>
            <h1 style={{ margin: 0 }}>Disclaimer</h1>
          </div>

          {/* Layout: Sidebar TOC + Content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 1fr',
              gap: 28,
            }}
          >
            {/* Sidebar - Table of Contents */}
            <aside
              style={{
                position: 'sticky',
                top: 92,
                alignSelf: 'start',
                border: '1px solid var(--border, #1f2937)',
                borderRadius: 12,
                padding: '16px 14px',
                height: 'max-content',
                background: 'var(--card, rgba(255,255,255,0.02))',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 10 }}>On this page</div>
              <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.9 }}>
                  <li><a href="#legal" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Legal disclaimer</a></li>
                  <li><a href="#copyright" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Copyright</a></li>
                  <li><a href="#trademarks" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Trademarks</a></li>
                  <li><a href="#use-of-info" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Use of website information</a></li>
                  <li><a href="#links" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Links to third‑party websites</a></li>
                  <li><a href="#indemnification" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Indemnification</a></li>
                  <li><a href="#warranties" className={`${footerStyles.footerLink} ${footerStyles.tocLink}`} style={{ textDecoration: 'none' }}>Warranties and disclaimers</a></li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div>
              <h2 id="legal" style={{ marginTop: 0, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Legal disclaimer</h2>
              <p>
                Fraylon makes available information and materials on this site (the "Information") subject to
                the Terms of Use and this Disclaimer. By accessing or using this website, you agree to the
                terms and conditions as outlined in the Terms of Use and this Disclaimer. If you disagree,
                please do not access this website. Fraylon reserves the right to modify the Terms of Use and/or
                this Disclaimer at any time by posting amended versions on this website. By using the
                website after changes are posted, you agree to accept those changes, whether or not you
                have reviewed them.
              </p>

              <h2 id="copyright" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Copyright</h2>
              <p>
                © {new Date().getFullYear()} Fraylon Technologies. All rights reserved. Except as permitted
                below, no portion of the Information may be reproduced in any form without prior written
                permission from Fraylon.
              </p>

              <h2 id="trademarks" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Trademarks</h2>
              <p>
                Fraylon, Fraylon Technologies, and associated graphics, logos, and service names are trademarks or
                service marks of Fraylon Technologies. Except as specifically permitted, these marks may not be
                used without prior written permission from Fraylon. All other trademarks not owned by Fraylon that
                appear on this website are the property of their respective owners, who may or may not be
                affiliated with, connected to, or sponsored by Fraylon.
              </p>

              <h2 id="use-of-info" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Use of website information</h2>
              <div style={{ lineHeight: 1.8 }}>
                <p>
                  Subject to the Terms of Use and this Disclaimer, Fraylon grants you a non‑transferable,
                  non‑exclusive, limited right to access, use, and display this website and its contents.
                  You agree and acknowledge that you will not interrupt or attempt to interrupt the
                  functioning of this website in any manner.
                </p>
                <p>Except as otherwise indicated on this website, you may view, copy, print, and download the Information subject to the following conditions:</p>
                <ul style={{ marginLeft: 20 }}>
                  <li>The Information may be used solely for personal and informational purposes.</li>
                  <li>The Information may not be modified or altered in any way.</li>
                  <li>Any copy of the Information must include the copyright notice and this permission notice.</li>
                  <li>The Information shall not be disclosed to others unless they agree to accept the obligations arising under the Terms of Use.</li>
                  <li>You agree to abide by all additional restrictions displayed on this website as updated from time to time.</li>
                  <li>Fraylon reserves the right to revoke such authorization at any time; upon notice, any such use shall be discontinued immediately.</li>
                  <li>Information specified above does not include the design or layout of this website.</li>
                  <li>You agree to comply with all copyright and other intellectual property laws worldwide in your use of this website.</li>
                </ul>
              </div>

              <h2 id="links" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Links to third‑party websites</h2>
              <p>
                This website may contain links to third‑party sites. Fraylon is not responsible for the
                content of any linked site and does not endorse any products or services offered on such
                sites. Access to linked sites is at your own risk.
              </p>

              <h2 id="indemnification" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Indemnification</h2>
              <div>
                <p>By accepting this Disclaimer, you agree to indemnify, defend, and hold harmless Fraylon, its officers, employees, agents, subsidiaries, affiliates, and partners from any damages resulting from:</p>
                <ol style={{ marginLeft: 20 }}>
                  <li>Your use of this website;</li>
                  <li>Your breach of the Terms of Use, this Disclaimer, or policies referenced therein, or your violation of any law, rules, or regulations;</li>
                  <li>Any other matter relating to this website. Any business transactions which may arise between users from their use of this website are the sole responsibility of the users involved.</li>
                </ol>
              </div>

              <h2 id="warranties" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Warranties and disclaimers</h2>
              <div style={{ lineHeight: 1.8 }}>
                <p>
                  The Information on this site is provided "as is" without warranty of any kind, including
                  without limitation any warranty of design, merchantability, fitness for a particular
                  purpose, non‑infringement, or the performance or results you may obtain from using the
                  Information. Your use of the site is at your sole risk. Fraylon does not assume responsibility
                  for any errors or omissions in the Information or documents referenced by or linked to this
                  website.
                </p>
                <p>Fraylon makes no warranty that:</p>
                <ul style={{ marginLeft: 20 }}>
                  <li>This website will meet your requirements;</li>
                  <li>The content/material on this website will be uninterrupted, timely, secure, or error‑free;</li>
                  <li>The results that may be obtained from the use of this website will be accurate or reliable.</li>
                </ul>
              </div>
              {/* Additional sections to match requested layout */}
              <h2 id="governing-law" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>Governing law</h2>
              <p>
                By accessing this website, you agree that the foregoing as well as any dispute raised
                regarding this website or Fraylon (in relation to this website) is subject to the laws of the
                Republic of India and the High Court of Delhi at New Delhi, India shall have the exclusive
                jurisdiction on any dispute that may arise out of the use of this website.
              </p>

              <h2 id="general" style={{ marginTop: 28, padding: '16px 0', borderTop: '1px solid var(--border, #1f2937)' }}>General</h2>
              <p>
                This website and the information contained herein could include technical or other
                inaccuracies or typographical errors. Fraylon may make improvements and/or changes to the
                information described in this website at any time and without prior notice.
              </p>

            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default Disclaimer;


