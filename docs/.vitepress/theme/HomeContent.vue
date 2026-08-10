<template>
  <div class="portfolio-home">
    <section id="projects" class="projects-section">
      <div class="section-heading">
        <div>
          <span class="section-kicker">Избранное</span>
          <h2>Проекты</h2>
        </div>
        <p>То, над чем я работаю сейчас.</p>
      </div>

      <a
        class="project-card"
        href="https://kiowdev.github.io/itd-api/"
        aria-label="Открыть документацию itd-api"
      >
        <div class="project-card__glow"></div>
        <div class="project-card__content">
          <div class="project-card__topline">
            <span class="project-card__icon" aria-hidden="true">API</span>
            <span class="project-card__status"><i></i> В разработке</span>
          </div>
          <div class="project-card__body">
            <span class="project-card__eyebrow">TypeScript SDK</span>
            <h3>itd-api</h3>
            <p>
              Типобезопасный клиент для REST и realtime API соцсети итд.com.
              Работает в Node.js, браузере, Bun, Deno и React Native.
            </p>
            <div class="project-card__tags" aria-label="Технологии проекта">
              <span>TypeScript</span>
              <span>REST</span>
              <span>Realtime</span>
              <span>Multi-runtime</span>
            </div>
          </div>
          <div class="project-card__footer">
            <span>Документация</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </div>
        <div class="project-card__visual" aria-hidden="true">
          <div class="code-window">
            <div class="code-window__bar">
              <i></i><i></i><i></i><span>quickstart.ts</span>
            </div>
            <pre><code><b>import</b> { ItdClient } <b>from</b> <em>'itd-api'</em>

<b>const</b> itd = <b>new</b> <mark>ItdClient</mark>({
  auth: token
})

<b>const</b> me = <b>await</b> itd.users.me()</code></pre>
          </div>
        </div>
      </a>
    </section>

  </div>
</template>
