<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gerador de Roteiros Criativos</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="app-shell">
      <header class="hero">
        <h1>Roteiros Criativos</h1>
        <p>
          Cole o link de uma coleção do ecommerce e gere <strong>15 roteiros</strong>
          prontos para gravação, organizados por estratégia.
        </p>
      </header>

      <section class="generator-panel">
        <label for="collectionUrl">Link da coleção</label>
        <div class="input-row">
          <input
            id="collectionUrl"
            type="url"
            placeholder="https://loja.com/collections/verao"
          />
          <button id="generateBtn">Gerar roteiros</button>
        </div>
      </section>

      <section id="results" class="results hidden" aria-live="polite">
        <div class="results-header">
          <h2>Roteiros Criativos</h2>
          <p>
            Roteiros prontos para gravação, organizados por estratégia e focados em
            performance.
          </p>
        </div>

        <div class="stats-grid">
          <article class="stat-card">
            <span class="stat-label">Pilares</span>
            <strong id="pillarCount">5</strong>
          </article>
          <article class="stat-card">
            <span class="stat-label">Roteiros</span>
            <strong id="scriptCount">15</strong>
          </article>
          <article class="stat-card">
            <span class="stat-label">Formato</span>
            <strong>Vídeo 15s</strong>
          </article>
        </div>

        <p id="collectionSummary" class="collection-summary"></p>

        <div id="pillarsContainer" class="pillars-container"></div>
      </section>
    </main>

    <template id="pillarTemplate">
      <article class="pillar-card">
        <header class="pillar-header">
          <div>
            <span class="pillar-chip"></span>
            <h3 class="pillar-title"></h3>
            <p class="pillar-subtitle"></p>
          </div>
          <span class="script-badge">3 roteiros</span>
        </header>
        <div class="scripts-list"></div>
      </article>
    </template>

    <template id="scriptTemplate">
      <article class="script-item">
        <h4></h4>
        <ul>
          <li><strong>Gancho:</strong> <span data-field="gancho"></span></li>
          <li><strong>Conteúdo:</strong> <span data-field="conteudo"></span></li>
          <li><strong>CTA:</strong> <span data-field="cta"></span></li>
          <li><strong>Na tela:</strong> <span data-field="tela"></span></li>
        </ul>
      </article>
    </template>

    <script src="script.js"></script>
  </body>
</html>
