import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/emergency-fix.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// Fresh scroll setup - ensure native scrolling works immediately
const setupScrolling = () => {
  // Ensure scrolling is enabled and page height is calculated
  document.documentElement.style.overflowX = 'hidden';
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  document.documentElement.style.height = 'auto';
  document.body.style.height = 'auto';
  
  // CRITICAL: Disable scroll-snap completely
  document.documentElement.style.scrollSnapType = 'none';
  document.body.style.scrollSnapType = 'none';
  document.documentElement.style.setProperty('scroll-snap-type', 'none', 'important');
  document.body.style.setProperty('scroll-snap-type', 'none', 'important');
  
  // Force browser to calculate scroll height
  void document.body.offsetHeight;
  void document.documentElement.scrollHeight;
  
  // Ensure page can scroll
  if (document.documentElement.scrollHeight > window.innerHeight) {
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
  }
};

// Run immediately
setupScrolling();

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setupScrolling();
    // Force recalculation after DOM is ready
    requestAnimationFrame(() => {
      void document.body.offsetHeight;
      void document.documentElement.scrollHeight;
    });
  });
} else {
  setupScrolling();
  requestAnimationFrame(() => {
    void document.body.offsetHeight;
    void document.documentElement.scrollHeight;
  });
}

// Also run after window load
window.addEventListener('load', () => {
  setupScrolling();
  setTimeout(() => {
    void document.body.offsetHeight;
    void document.documentElement.scrollHeight;
  }, 100);
});

// NUCLEAR OPTION: Continuously monitor and fix stuck sections
const fixStuckSections = () => {
  // Force body/html to never be fixed/sticky
  if (document.body.style.position === 'fixed' || document.body.style.position === 'sticky') {
    document.body.style.position = '';
    console.warn('🚨 Fixed stuck body!');
  }
  if (document.documentElement.style.position === 'fixed' || document.documentElement.style.position === 'sticky') {
    document.documentElement.style.position = '';
    console.warn('🚨 Fixed stuck html!');
  }
  
  // Force all sections to be relative
  document.querySelectorAll('section').forEach((section: Element) => {
    const htmlSection = section as HTMLElement;
    const computedStyle = window.getComputedStyle(htmlSection);
    if (computedStyle.position === 'sticky' || computedStyle.position === 'fixed') {
      htmlSection.style.position = 'relative';
      console.warn('🚨 Fixed stuck section!', section);
    }
  });
};

// Run fix every 500ms
setInterval(fixStuckSections, 500);

// Run immediately
fixStuckSections();

// Disable StrictMode as it causes double renders which can interfere
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)