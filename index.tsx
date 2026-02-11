import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Root element not found.");
} else {
  const root = createRoot(rootElement);
  
  // Render without StrictMode to ensure a cleaner single-mount cycle in dev/preview environments
  root.render(<App />);

  // Hard kill switch - force loader removal regardless of app state
  const hideLoader = () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease-out';
      loader.style.opacity = '0';
      setTimeout(() => {
        if (loader && loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 500);
    }
  };

  // Force removal after 2 seconds - no dependencies
  setTimeout(hideLoader, 2000);
  
  // Also remove on successful mount (whichever comes first)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const hasContent = rootElement.children.length > 0;
      if (hasContent) {
        console.log('✓ App mounted successfully');
        hideLoader();
      }
    });
  });
}