/**
 * Utility to ensure body NEVER gets stuck with fixed/sticky positioning
 * Run this on app mount to guarantee body scrolling works
 */

export const forceBodyScrollable = () => {
  // CRITICAL: Remove ALL positioning that could lock body
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.bottom = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.documentElement.style.position = '';
  document.documentElement.style.top = '';
  
  // Ensure overflow is enabled
  document.body.style.overflow = '';
  document.body.style.overflowX = '';
  document.body.style.overflowY = '';
  document.documentElement.style.overflow = '';
  document.documentElement.style.overflowX = '';
  document.documentElement.style.overflowY = '';
  
  // Remove fixed/sticky classes
  document.body.classList.remove('mobile-menu-open');
  document.documentElement.classList.remove('mobile-menu-open');
  
  // Ensure height is auto
  document.body.style.height = '';
  document.body.style.width = '';
  document.documentElement.style.height = '';
  
  // Remove touch-action restrictions
  document.body.style.touchAction = '';
  document.documentElement.style.touchAction = '';
  
  console.log('✅ Body scroll lock cleared');
};

