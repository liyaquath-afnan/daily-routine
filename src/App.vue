<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    
    <main class="main-content">
      <div class="container">
        <h1>Welcome to Daily Routine</h1>
        <p>This is a demo page showing the responsive navbar component.</p>
        
        <section class="demo-section">
          <h2>Features of the Navbar:</h2>
          <ul>
            <li>✅ Fully responsive design</li>
            <li>✅ Mobile hamburger menu</li>
            <li>✅ Smooth animations</li>
            <li>✅ Dark mode support</li>
            <li>✅ Accessibility features</li>
            <li>✅ Sticky positioning</li>
            <li>✅ Clean separation of concerns (HTML, CSS, JS in separate files)</li>
          </ul>
        </section>

        <section class="demo-section">
          <h2>How to test:</h2>
          <ol>
            <li>Resize your browser window to see responsive behavior</li>
            <li>On mobile/narrow screens, click the hamburger menu</li>
            <li>Try clicking outside the menu to close it</li>
            <li>Test keyboard navigation with Tab key</li>
          </ol>
        </section>
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8fafc;
}

#app {
  min-height: 100vh;
}

.main-content {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2563eb;
  text-align: center;
}

p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #6b7280;
}

.demo-section {
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.demo-section ul,
.demo-section ol {
  padding-left: 1.5rem;
}

.demo-section li {
  margin-bottom: 0.5rem;
  color: #4b5563;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #111827;
    color: #f9fafb;
  }

  .demo-section {
    background: #1f2937;
    color: #f9fafb;
  }

  .demo-section h2 {
    color: #f3f4f6;
  }

  .demo-section li {
    color: #d1d5db;
  }

  p {
    color: #9ca3af;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .demo-section {
    padding: 1.5rem;
    margin: 1rem 0;
  }

  .main-content {
    padding: 1rem 0;
  }
}
</style>
