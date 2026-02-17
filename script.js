const pillars = [
  {
    nome: "Ângulos",
    subtitulo: "Entradas psicológicas na dor do cliente",
    roteiros: [
      {
        titulo: "Ângulo 1: Dor oculta",
        gancho: "Você sente que compra e nunca acerta no resultado final?",
        conteudo:
          "Mostre o problema mais comum da categoria e conecte com a frustração de quem já tentou várias opções.",
        cta: "Clique na coleção e escolha a solução que resolve isso hoje.",
        tela: "Texto forte de dor + produto em uso + reação antes/depois.",
      },
      {
        titulo: "Ângulo 2: Medo de perder",
        gancho: "O erro que faz você gastar mais e ter menos resultado.",
        conteudo:
          "Explique o erro de compra mais frequente e compare com a alternativa correta presente na coleção.",
        cta: "Acesse a coleção agora e evite esse erro no próximo pedido.",
        tela: "Lista de erros na tela + corte para produto certo.",
      },
      {
        titulo: "Ângulo 3: Desejo imediato",
        gancho: "Como ter resultado premium sem complicação.",
        conteudo:
          "Conecte desejo de praticidade e benefício rápido, mostrando como os itens da coleção entregam isso.",
        cta: "Toque no link da coleção e veja as opções prontas para você.",
        tela: "Produto em destaque + cena lifestyle aspiracional.",
      },
    ],
  },
  {
    nome: "Conceitos",
    subtitulo: "Ideias centrais que elevam percepção e posicionamento",
    roteiros: [
      {
        titulo: "Conceito 1: Autoridade",
        gancho: "O padrão que especialistas recomendam primeiro.",
        conteudo:
          "Apresente a coleção como curadoria: menos opções aleatórias e mais produtos escolhidos por performance.",
        cta: "Veja a coleção completa e compre com critério profissional.",
        tela: "Selos visuais + close de detalhes + texto 'curadoria'.",
      },
      {
        titulo: "Conceito 2: Estilo de vida",
        gancho: "Não é só produto. É o jeito mais fácil de viver melhor.",
        conteudo:
          "Mostre o uso no contexto real da rotina, reforçando identidade e status percebido.",
        cta: "Entre na coleção e escolha o produto que combina com seu momento.",
        tela: "Pessoa usando o produto + cenas de rotina.",
      },
      {
        titulo: "Conceito 3: Valor percebido",
        gancho: "Barato sai caro — aqui é investimento inteligente.",
        conteudo:
          "Explique qualidade, durabilidade e ganho prático para justificar percepção de valor mais alto.",
        cta: "Abra a coleção e compare o valor real de cada item.",
        tela: "Comparativo simples: comum x coleção.",
      },
    ],
  },
  {
    nome: "DSB",
    subtitulo: "Dor → Solução → Benefício",
    roteiros: [
      {
        titulo: "DSB 1: Resultado rápido",
        gancho: "Dor: sem tempo e sem resultado.",
        conteudo:
          "Solução: produto certo da coleção com aplicação simples. Benefício: ganho visível em poucos dias.",
        cta: "Clique no link e comece com o item mais indicado.",
        tela: "Estrutura em 3 blocos: Dor / Solução / Benefício.",
      },
      {
        titulo: "DSB 2: Economia inteligente",
        gancho: "Dor: você gasta repetindo tentativas.",
        conteudo:
          "Solução: escolher itens da coleção que resolvem de primeira. Benefício: menos desperdício e mais eficiência.",
        cta: "Acesse a coleção e escolha sua solução agora.",
        tela: "Print de carrinho + economia destacada.",
      },
      {
        titulo: "DSB 3: Simplicidade",
        gancho: "Dor: tudo parece complicado demais.",
        conteudo:
          "Solução: rotina com passos claros usando produtos da coleção. Benefício: constância sem esforço.",
        cta: "Veja a coleção e monte sua rotina em minutos.",
        tela: "Passo 1, 2 e 3 com ícones simples.",
      },
    ],
  },
  {
    nome: "Full Funnel",
    subtitulo: "Consciência + educação + decisão no mesmo vídeo",
    roteiros: [
      {
        titulo: "Full Funnel 1: Problema ao plano",
        gancho: "Você talvez nem perceba esse problema no dia a dia.",
        conteudo:
          "Consciência: nomeie o problema. Educação: mostre por que acontece. Decisão: apresente a coleção como plano completo.",
        cta: "Clique na coleção e aplique o plano hoje.",
        tela: "Timeline visual com topo, meio e fundo.",
      },
      {
        titulo: "Full Funnel 2: Mito x verdade",
        gancho: "Mito: você precisa de mil produtos para ter resultado.",
        conteudo:
          "Eduque quebrando objeções e finalize com a coleção como caminho enxuto e eficiente.",
        cta: "Entre no link e escolha o kit ideal para começar.",
        tela: "Tela dividida: mito de um lado, verdade do outro.",
      },
      {
        titulo: "Full Funnel 3: Jornada real",
        gancho: "Do caos à rotina em 15 segundos.",
        conteudo:
          "Mostre antes, aprendizado rápido e depois com resultado, guiando o público para ação.",
        cta: "Acesse a coleção e viva essa transformação.",
        tela: "Antes/depois + checklist final.",
      },
    ],
  },
  {
    nome: "Creator / UGC",
    subtitulo: "Validação humana e autenticidade real",
    roteiros: [
      {
        titulo: "UGC 1: Depoimento espontâneo",
        gancho: "Eu não esperava que isso fosse funcionar tão bem.",
        conteudo:
          "Formato selfie com relato curto, mostrando problema inicial e percepção após uso do produto.",
        cta: "Se quiser testar também, o link da coleção está aqui.",
        tela: "Creator falando + cortes do produto em uso real.",
      },
      {
        titulo: "UGC 2: Teste em tempo real",
        gancho: "Vou testar agora e te mostrar sem cortes.",
        conteudo:
          "Creator mostra aplicação prática e destaca uma funcionalidade que surpreende.",
        cta: "Clica no link da coleção e vê todas as versões.",
        tela: "Selfie + legenda dinâmica + reação natural.",
      },
      {
        titulo: "UGC 3: Indicação de amigo",
        gancho: "Se eu fosse indicar só um, seria esse.",
        conteudo:
          "Narrativa íntima com linguagem de recomendação pessoal e prova social.",
        cta: "Abre a coleção e escolhe o seu favorito.",
        tela: "Tom casual, sem cenário produzido, foco em verdade.",
      },
    ],
  },
];

const generateBtn = document.getElementById("generateBtn");
const collectionInput = document.getElementById("collectionUrl");
const results = document.getElementById("results");
const pillarsContainer = document.getElementById("pillarsContainer");
const collectionSummary = document.getElementById("collectionSummary");
const pillarTemplate = document.getElementById("pillarTemplate");
const scriptTemplate = document.getElementById("scriptTemplate");

function getCollectionName(urlString) {
  try {
    const { pathname, hostname } = new URL(urlString);
    const slug = pathname.split("/").filter(Boolean).pop() || "colecao";
    return `${slug.replaceAll("-", " ")} · ${hostname}`;
  } catch {
    return "coleção personalizada";
  }
}

function renderScripts(url) {
  const collectionName = getCollectionName(url);
  collectionSummary.textContent = `Coleção analisada: ${collectionName}. Os roteiros abaixo já incluem gancho, conteúdo, CTA e direção de tela.`;

  pillarsContainer.innerHTML = "";

  pillars.forEach((pillar, index) => {
    const pillarNode = pillarTemplate.content.cloneNode(true);
    pillarNode.querySelector(".pillar-chip").textContent = `Pilar ${index + 1}`;
    pillarNode.querySelector(".pillar-title").textContent = pillar.nome;
    pillarNode.querySelector(".pillar-subtitle").textContent = pillar.subtitulo;

    const scriptsList = pillarNode.querySelector(".scripts-list");

    pillar.roteiros.forEach((roteiro) => {
      const scriptNode = scriptTemplate.content.cloneNode(true);
      scriptNode.querySelector("h4").textContent = roteiro.titulo;
      scriptNode.querySelector('[data-field="gancho"]').textContent = roteiro.gancho;
      scriptNode.querySelector('[data-field="conteudo"]').textContent = roteiro.conteudo;
      scriptNode.querySelector('[data-field="cta"]').textContent = roteiro.cta;
      scriptNode.querySelector('[data-field="tela"]').textContent = roteiro.tela;
      scriptsList.appendChild(scriptNode);
    });

    pillarsContainer.appendChild(pillarNode);
  });

  results.classList.remove("hidden");
}

generateBtn.addEventListener("click", () => {
  renderScripts(collectionInput.value.trim());
});

collectionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    renderScripts(collectionInput.value.trim());
  }
});

renderScripts("https://lojaexemplo.com/collections/sabor-gourmet");
