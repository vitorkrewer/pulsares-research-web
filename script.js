const REPO_OWNER = "vitorkrewer";
const REPO_NAME = "pulsares-research-web";
const RELEASE_API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
const LATEST_RELEASE_PAGE = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest`;

// Configurações padrão com fallback para a página de releases do Pulsares Research
const DOWNLOADS = {
  windows: {
    label: "Baixar para Windows (x64)",
    heroLabel: "Baixar para Windows",
    note: "Windows 10 ou 11 (64-bit) · Executável nativo Wails (.exe)",
    meta: "Versão v0.7.1 · 64-bit · 100% Local-First",
    url: LATEST_RELEASE_PAGE,
    selectedFormat: "exe",
    formats: {
      exe: {
        label: "Baixar Executável Windows (x64)",
        heroLabel: "Baixar para Windows",
        note: "Executável nativo direto · Banco SQLite e acervo sob seu controle no disco",
        meta: "Versão v0.7.1 · 64-bit (.exe)",
        url: LATEST_RELEASE_PAGE
      },
      portable: {
        label: "Baixar Pacote Portátil (.zip)",
        heroLabel: "Baixar Portátil (.zip)",
        note: "Ideal para levar sua biblioteca e banco SQLite em SSD externo ou pendrive",
        meta: "Versão v0.7.1 · 64-bit (.zip)",
        url: LATEST_RELEASE_PAGE
      }
    }
  },
  macos: {
    label: "Baixar para macOS (Universal)",
    heroLabel: "Baixar para macOS",
    note: "macOS 12 Monterey ou superior · Apple Silicon e Intel (.zip / .app)",
    meta: "Versão v0.7.1 · Binário Universal",
    url: LATEST_RELEASE_PAGE
  },
  linux: {
    label: "Baixar para Linux (x64)",
    heroLabel: "Baixar para Linux",
    note: "Distribuições Linux modernas (Ubuntu, Debian, Fedora, Arch) · Binário nativo",
    meta: "Versão v0.7.1 · 64-bit",
    url: LATEST_RELEASE_PAGE,
    selectedFormat: "appimage",
    formats: {
      appimage: {
        label: "Baixar Binário Linux / AppImage (x64)",
        heroLabel: "Baixar para Linux",
        note: "Compatível com Ubuntu, Fedora, Debian e derivados · Execução direta",
        meta: "Versão v0.7.1 · 64-bit",
        url: LATEST_RELEASE_PAGE
      },
      deb: {
        label: "Baixar Pacote Debian (.deb)",
        heroLabel: "Baixar .deb",
        note: "Para Ubuntu, Debian, Linux Mint, Pop!_OS e derivados (.deb)",
        meta: "Versão v0.7.1 · 64-bit (.deb)",
        url: LATEST_RELEASE_PAGE
      },
      targz: {
        label: "Baixar Arquivo Tarball (.tar.gz)",
        heroLabel: "Baixar .tar.gz",
        note: "Binário compactado para execução direta (.tar.gz)",
        meta: "Versão v0.7.1 · 64-bit (.tar.gz)",
        url: LATEST_RELEASE_PAGE
      }
    }
  }
};

// Telas do Simulador Interativo da Interface do Pulsares Research na Home
const INTERACTIVE_SCREENS = {
  projetos: {
    img: "assets/screenshots/projetos-ide.svg",
    windowTitle: "Pulsares Research — IDE de Projetos Acadêmicos (ABNT NBR 14724 / 6022)",
    badge: "Módulo v0.7.1",
    title: "IDE de Projetos Acadêmicos em 3 Colunas + Folha A4 ABNT",
    desc: "Escreva Teses, Dissertações, TCCs e Artigos com árvore de capítulos, prévia A4 real e compilação automática de referências ABNT NBR 6023.",
    guideLink: "guia-usuario.html?cap=06-projetos-academicos-abnt"
  },
  importador: {
    img: "assets/screenshots/importador-estrutural.svg",
    windowTitle: "Pulsares Research — Importador Estrutural (.docx, .odt, .doc)",
    badge: "Novo v0.7.1",
    title: "Importador de Manuscritos (.docx, .odt, .doc) com Vinculador de Bookmarks",
    desc: "Detecta Headings (H1, H2, H3), elementos pré-textuais e referências, permitindo vincular manualmente seções não detectadas antes de preencher o modelo.",
    guideLink: "guia-usuario.html?cap=06-projetos-academicos-abnt"
  },
  leitor: {
    img: "assets/screenshots/leitor-pdf.svg",
    windowTitle: "Pulsares Research — Leitor Profundo de PDF & Âncoras Resilientes",
    badge: "Âncoras Determinísticas",
    title: "Leitor de PDF com Destaques Ancorados, Citações ABNT e IA Sob Demanda",
    desc: "Cada seleção registra página e coordenadas exatas, gerando notas marginadas, citações NBR 10520 e paráfrases assistidas sem perder a fonte.",
    guideLink: "guia-usuario.html?cap=02-biblioteca-e-leitor-pdf"
  },
  fichamentos: {
    img: "assets/screenshots/fichamentos.svg",
    windowTitle: "Pulsares Research — Fichamentos & Editor Científico (KaTeX + mhchem + Mermaid)",
    badge: "Ciências & Engenharia",
    title: "Fichamentos Metodológicos e Editor Científico Estruturado",
    desc: "Equações matemáticas em LaTeX (KaTeX), química com mhchem, cálculos dinâmicos Math.js, figuras ABNT locais e diagramas vetoriais Mermaid.js.",
    guideLink: "guia-usuario.html?cap=05-fichamentos-e-editor-cientifico"
  },
  grafo: {
    img: "assets/screenshots/grafo-conexoes.svg",
    windowTitle: "Pulsares Research — Grafo de Conhecimento & Relações Epistemológicas (D3-Force)",
    badge: "Rede Semântica",
    title: "Grafo de Conhecimento Interativo em D3-Force",
    desc: "Conecte obras, notas, citações, coleções e etiquetas com relações tipadas (fundamenta, complementa, contradiz, aprofunda) e filtre sub-redes.",
    guideLink: "guia-usuario.html?cap=04-grafo-conexoes-e-colecoes"
  },
  biblioteca: {
    img: "assets/screenshots/biblioteca.svg",
    windowTitle: "Pulsares Research — Biblioteca Acadêmica Local-First",
    badge: "SQLite Local",
    title: "Catálogo Bibliográfico Local-First com Etiquetas em Grupo",
    desc: "Seus arquivos permanecem na sua pasta. Organize livros, artigos e teses com busca instantânea, metadados verificados e visualização em Tabela ou Cards.",
    guideLink: "guia-usuario.html?cap=02-biblioteca-e-leitor-pdf"
  },
  colecoes: {
    img: "assets/screenshots/colecoes.svg",
    windowTitle: "Pulsares Research — Coleções Temáticas de Pesquisa",
    badge: "Organização",
    title: "Coleções Temáticas com Métricas e Drag & Drop",
    desc: "Agrupe obras, notas e citações por disciplina, capítulo de tese ou linha de pesquisa com painel dedicado de estatísticas.",
    guideLink: "guia-usuario.html?cap=04-grafo-conexoes-e-colecoes"
  },
  stickers: {
    img: "assets/screenshots/stickers-tarefas.svg",
    windowTitle: "Pulsares Research — Quadros de Stickers & Cronograma de Tarefas",
    badge: "Produtividade",
    title: "Mural de Hipóteses (Stickers) e Tarefas Acadêmicas",
    desc: "Organize insights rápidos em post-its coloridos e gerencie prazos de qualificação, leituras e subtarefas com prioridades semânticas.",
    guideLink: "guia-usuario.html?cap=07-stickers-e-tarefas"
  }
};

function detectUserOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator.platform || "").toLowerCase();

  if (platform.includes("mac") || userAgent.includes("macintosh") || userAgent.includes("mac os")) {
    return "macos";
  }
  if (platform.includes("linux") || userAgent.includes("linux") || userAgent.includes("x11")) {
    return "linux";
  }
  return "windows";
}

const buttons = document.querySelectorAll(".platform");
const downloadLink = document.querySelector("#download-link");
const downloadLabel = document.querySelector("#download-label");
const platformNote = document.querySelector("#platform-note");
const downloadMeta = document.querySelector("#download-meta");
const heroDownloadBtn = document.querySelector("#hero-download-btn");
const heroDownloadText = document.querySelector("#hero-download-text");
const headerVersionBadge = document.querySelector("#header-version-badge");
const windowsFormatsContainer = document.querySelector("#windows-formats");
const linuxFormatsContainer = document.querySelector("#linux-formats");
const downloadAltLinks = document.querySelector("#download-alt-links");
const formatPills = document.querySelectorAll(".format-pill");

function updateDownloadUI(platform) {
  const data = DOWNLOADS[platform];
  if (!data) return;

  buttons.forEach((item) => {
    const isSelected = item.dataset.platform === platform;
    item.classList.toggle("selected", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
  });

  if (platform === "windows") {
    if (windowsFormatsContainer) windowsFormatsContainer.style.display = "flex";
    if (linuxFormatsContainer) linuxFormatsContainer.style.display = "none";

    const fmtKey = data.selectedFormat || "exe";
    const fmt = data.formats[fmtKey] || data.formats.exe;

    formatPills.forEach((pill) => {
      if (pill.dataset.platformTarget === "windows") {
        pill.classList.toggle("active", pill.dataset.format === fmtKey);
      }
    });

    if (downloadLink) downloadLink.href = fmt.url;
    if (downloadLabel) downloadLabel.textContent = fmt.label;
    if (platformNote) platformNote.textContent = fmt.note;
    if (downloadMeta) downloadMeta.textContent = fmt.meta;
    if (heroDownloadBtn) heroDownloadBtn.href = fmt.url;
    if (heroDownloadText) heroDownloadText.textContent = fmt.heroLabel;

    if (downloadAltLinks) {
      const otherKey = fmtKey === "exe" ? "portable" : "exe";
      const otherFmt = data.formats[otherKey];
      downloadAltLinks.innerHTML = `<span>Outro formato disponível: <a href="${otherFmt.url}">${otherKey === "portable" ? "Pacote Portátil (.zip)" : "Executável (.exe)"}</a></span>`;
    }
  } else if (platform === "linux") {
    if (windowsFormatsContainer) windowsFormatsContainer.style.display = "none";
    if (linuxFormatsContainer) linuxFormatsContainer.style.display = "flex";

    const fmtKey = data.selectedFormat || "appimage";
    const fmt = data.formats[fmtKey] || data.formats.appimage;

    formatPills.forEach((pill) => {
      if (pill.dataset.platformTarget === "linux") {
        pill.classList.toggle("active", pill.dataset.format === fmtKey);
      }
    });

    if (downloadLink) downloadLink.href = fmt.url;
    if (downloadLabel) downloadLabel.textContent = fmt.label;
    if (platformNote) platformNote.textContent = fmt.note;
    if (downloadMeta) downloadMeta.textContent = fmt.meta;
    if (heroDownloadBtn) heroDownloadBtn.href = fmt.url;
    if (heroDownloadText) heroDownloadText.textContent = fmt.heroLabel;

    if (downloadAltLinks) {
      downloadAltLinks.innerHTML = `<span>Ver todos os pacotes na <a href="${LATEST_RELEASE_PAGE}">página oficial de Releases</a></span>`;
    }
  } else {
    if (windowsFormatsContainer) windowsFormatsContainer.style.display = "none";
    if (linuxFormatsContainer) linuxFormatsContainer.style.display = "none";
    if (downloadAltLinks) downloadAltLinks.innerHTML = "";

    if (downloadLink) downloadLink.href = data.url;
    if (downloadLabel) downloadLabel.textContent = data.label;
    if (platformNote) platformNote.textContent = data.note;
    if (downloadMeta) downloadMeta.textContent = data.meta;
    if (heroDownloadBtn) heroDownloadBtn.href = data.url;
    if (heroDownloadText) heroDownloadText.textContent = data.heroLabel;
  }
}

if (buttons.length > 0) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      updateDownloadUI(button.dataset.platform);
    });
  });
}

if (formatPills.length > 0) {
  formatPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const targetPlatform = pill.dataset.platformTarget || "windows";
      if (DOWNLOADS[targetPlatform] && DOWNLOADS[targetPlatform].formats) {
        DOWNLOADS[targetPlatform].selectedFormat = pill.dataset.format;
        updateDownloadUI(targetPlatform);
      }
    });
  });
}

const initialOS = detectUserOS();
updateDownloadUI(initialOS);

// Inicializa o Simulador Interativo da Interface do Pulsares na Home
function initInteractiveShowcase() {
  const tabBtns = document.querySelectorAll(".interactive-tab-btn");
  const screenImg = document.querySelector("#interactive-screen-img");
  const winTitle = document.querySelector("#interactive-window-title");
  const winBadge = document.querySelector("#interactive-window-badge");
  const capTitle = document.querySelector("#interactive-caption-title");
  const capDesc = document.querySelector("#interactive-caption-desc");
  const capLink = document.querySelector("#interactive-caption-link");

  if (!tabBtns.length || !screenImg) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.screen;
      const info = INTERACTIVE_SCREENS[key];
      if (!info) return;

      tabBtns.forEach((b) => b.classList.toggle("active", b === btn));
      screenImg.style.opacity = "0.35";
      setTimeout(() => {
        screenImg.src = info.img;
        screenImg.alt = info.title;
        if (winTitle) winTitle.textContent = info.windowTitle;
        if (winBadge) winBadge.textContent = info.badge;
        if (capTitle) capTitle.textContent = info.title;
        if (capDesc) capDesc.textContent = info.desc;
        if (capLink) capLink.href = info.guideLink;
        screenImg.style.opacity = "1";
      }, 110);
    });
  });
}

initInteractiveShowcase();

async function fetchLatestRelease() {
  try {
    const res = await fetch(RELEASE_API);
    if (!res.ok) return;
    const data = await res.json();
    const version = data.tag_name || "v0.7.1";
    const assets = data.assets || [];

    if (headerVersionBadge) {
      headerVersionBadge.textContent = version;
    }

    const versionPill = document.querySelector("#hero-version-text");
    if (versionPill) {
      versionPill.textContent = `Pulsares Research ${version} · 100% Local-First`;
    }

    assets.forEach((asset) => {
      const name = asset.name.toLowerCase();
      const downloadUrl = asset.browser_download_url;

      if (name.includes("portable") && name.endsWith(".zip")) {
        DOWNLOADS.windows.formats.portable.url = downloadUrl;
        DOWNLOADS.windows.formats.portable.meta = `Versão ${version} · Portátil (.zip)`;
      } else if ((name.includes("windows") || name.endsWith(".exe")) && name.endsWith(".exe")) {
        DOWNLOADS.windows.formats.exe.url = downloadUrl;
        DOWNLOADS.windows.formats.exe.meta = `Versão ${version} · x64 (.exe)`;
        DOWNLOADS.windows.url = downloadUrl;
      } else if (name.includes("macos") || name.includes("darwin")) {
        DOWNLOADS.macos.url = downloadUrl;
        DOWNLOADS.macos.meta = `Versão ${version} · Universal`;
      } else if (name.endsWith(".deb")) {
        DOWNLOADS.linux.formats.deb.url = downloadUrl;
        DOWNLOADS.linux.formats.deb.meta = `Versão ${version} · x64 (.deb)`;
      } else if (name.endsWith(".tar.gz")) {
        DOWNLOADS.linux.formats.targz.url = downloadUrl;
        DOWNLOADS.linux.formats.targz.meta = `Versão ${version} · x64 (.tar.gz)`;
      } else if (name.endsWith(".appimage")) {
        DOWNLOADS.linux.formats.appimage.url = downloadUrl;
        DOWNLOADS.linux.formats.appimage.meta = `Versão ${version} · x64`;
      }
    });

    const activeBtn = document.querySelector(".platform.selected");
    const activePlatform = activeBtn ? activeBtn.dataset.platform : initialOS;
    updateDownloadUI(activePlatform);
  } catch (err) {
    console.warn("Usando fallback de release estática.", err);
  }
}

fetchLatestRelease();

const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Modal Lightbox para visualização de screenshots
const galleryCards = document.querySelectorAll(".screenshot-card, .preview-thumb");
const modal = document.querySelector("#screenshot-modal");
const modalImg = document.querySelector("#modal-img");
const modalTitle = document.querySelector("#modal-title");
const modalDesc = document.querySelector("#modal-desc");
const modalClose = document.querySelector("#modal-close");

if (galleryCards.length > 0 && modal) {
  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const title = card.querySelector("h3, h4") ? card.querySelector("h3, h4").textContent : "Interface do Pulsares Research";
      const desc = card.querySelector("p") ? card.querySelector("p").textContent : "";

      if (img && img.src) {
        modalImg.src = img.src;
        modalImg.alt = title;
      }
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
  });
}

// Botão flutuante para voltar ao topo
const scrollTopBtn = document.querySelector("#scroll-top-btn");
if (scrollTopBtn) {
  let isTicking = false;
  window.addEventListener("scroll", () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        scrollTopBtn.classList.toggle("visible", window.scrollY > 350);
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Menu Mobile
function initMobileMenu() {
  const toggleBtn = document.querySelector("#mobile-menu-toggle");
  const drawer = document.querySelector("#mobile-nav-drawer");
  const overlay = document.querySelector("#mobile-drawer-overlay");

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", () => {
    if (drawer.classList.contains("active")) closeMenu();
    else openMenu();
  });

  if (overlay) overlay.addEventListener("click", closeMenu);
  drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) closeMenu();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileMenu);
} else {
  initMobileMenu();
}

