/* =========================================================================
   EDIT EVERYTHING HERE — this is the only section you need to touch to
   make this your own. Swap the text, links, and lists below, then update
   the matching name/email/social links in index.html.
   ========================================================================= */
const CONFIG = {
  roles: ["AI Engineer", "Full Stack Developer", "ML Enthusiast", "Open Source Contributor"],

  skills: [
    { name: "Python", level: 92, category: "AI / ML" },
    { name: "PyTorch", level: 85, category: "AI / ML" },
    { name: "LangChain", level: 80, category: "AI / ML" },
    { name: "NumPy / Pandas", level: 90, category: "AI / ML" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Next.js", level: 82, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 78, category: "Frontend" },
    { name: "Node.js", level: 84, category: "Backend" },
    { name: "PostgreSQL", level: 76, category: "Backend" },
    { name: "FastAPI", level: 80, category: "Backend" },
    { name: "MongoDB", level: 72, category: "Backend" },
    { name: "Docker", level: 78, category: "Tools" },
    { name: "Git / GitHub", level: 95, category: "Tools" },
    { name: "AWS", level: 70, category: "Tools" },
  ],

  projects: [
    {
      title: "DocuMind — RAG Knowledge Assistant",
      category: "AI",
      description: "A retrieval-augmented assistant that lets teams query internal documentation in plain English, built on a custom vector-search pipeline.",
      tech: ["Python", "LangChain", "FAISS", "FastAPI"],
      demo: "#", github: "#",
    },
    {
      title: "PulseBoard — Realtime Analytics Dashboard",
      category: "Web",
      description: "A live analytics dashboard with sub-second updates for e-commerce teams, handling 50k concurrent events.",
      tech: ["React", "Node.js", "WebSockets", "PostgreSQL"],
      demo: "#", github: "#",
    },
    {
      title: "Fine-tuned Sentiment Classifier for Regional Languages",
      category: "Research",
      description: "Published benchmark comparing transformer fine-tuning strategies for low-resource Indian languages.",
      tech: ["PyTorch", "HuggingFace", "Pandas"],
      demo: "#", github: "#",
    },
    {
      title: "ShelfSense — Inventory Vision System",
      category: "AI",
      description: "Computer vision pipeline that detects out-of-stock shelf gaps from store camera feeds in real time.",
      tech: ["OpenCV", "PyTorch", "Docker"],
      demo: "#", github: "#",
    },
  ],

  experience: [
    {
      role: "AI Engineer",
      company: "NimbusTech Labs",
      duration: "2024 — Present",
      points: ["Built and shipped a RAG pipeline serving 10k+ daily queries", "Reduced model inference cost by 38% through quantization"],
      type: "work",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Kavach Systems",
      duration: "2023 — 2024",
      points: ["Shipped 3 customer-facing dashboards used by 200+ clients", "Led migration from REST to GraphQL"],
      type: "work",
    },
    {
      role: "B.Tech, Computer Science",
      company: "Savitribai Phule Pune University",
      duration: "2020 — 2024",
      points: ["Graduated with distinction", "Published 1 research paper on low-resource NLP"],
      type: "education",
    },
  ],

  testimonials: [
    { name: "Priya Nair", role: "Engineering Manager, NimbusTech", quote: "One of the most reliable engineers I've worked with — turns ambiguous problems into shipped features fast." },
    { name: "Karan Mehta", role: "Founder, Kavach Systems", quote: "Sharp technically, and genuinely thoughtful about the product, not just the code." },
    { name: "Dr. Leela Iyer", role: "Research Advisor", quote: "Rare combination of research rigor and engineering pragmatism." },
  ],
};
/* ========================================================================= */

const briefcaseIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`;
const gradIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>`;

/* ------------------------------ Loading screen ------------------------------ */
(function loadingScreen() {
  const fill = document.getElementById("loaderFill");
  const pct = document.getElementById("loaderPct");
  const loader = document.getElementById("loader");
  let progress = 0;
  const id = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(id);
      setTimeout(() => loader.classList.add("hide"), 400);
    }
    fill.style.width = progress + "%";
    pct.textContent = Math.floor(progress) + "%";
  }, 140);
})();

/* ------------------------------ Mouse glow ------------------------------ */
(function mouseGlow() {
  const glow = document.getElementById("mouseGlow");
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
})();

/* ------------------------------ Navbar + smooth scroll + scroll spy ------------------------------ */
(function navbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const sections = ["home", "about", "skills", "projects", "experience", "contact"];
  const navLinkEls = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("backToTop");

  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", () => {
      const target = document.getElementById(el.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      mobileMenu.classList.remove("open");
    });
  });

  hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    backToTop.classList.toggle("show", window.scrollY > 600);

    let closest = sections[0];
    let closestDist = Infinity;
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const dist = Math.abs(el.getBoundingClientRect().top - 120);
      if (dist < closestDist) { closestDist = dist; closest = id; }
    });
    navLinkEls.forEach((link) => link.classList.toggle("active", link.dataset.scroll === closest));
  });

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ------------------------------ Typing animation ------------------------------ */
(function typingRoles() {
  const el = document.getElementById("typedRole");
  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = CONFIG.roles[roleIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % CONFIG.roles.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

/* ------------------------------ Animated counters ------------------------------ */
(function counters() {
  const cards = document.querySelectorAll(".stat-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      const target = parseInt(card.dataset.value, 10);
      const countEl = card.querySelector(".count");
      const start = performance.now();
      const duration = 1200;
      function frame(t) {
        const p = Math.min((t - start) / duration, 1);
        countEl.textContent = Math.floor(target * p);
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
      observer.unobserve(card);
    });
  }, { threshold: 0.4 });
  cards.forEach((c) => observer.observe(c));
})();

/* ------------------------------ Skills render + filter ------------------------------ */
(function skills() {
  const grid = document.getElementById("skillsGrid");
  const filters = document.getElementById("skillFilters");

  function render(filter) {
    grid.innerHTML = "";
    CONFIG.skills
      .filter((s) => filter === "All" || s.category === filter)
      .forEach((s) => {
        const card = document.createElement("div");
        card.className = "glass-card skill-card";
        card.innerHTML = `
          <div class="skill-top"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.level}%</span></div>
          <div class="skill-track"><div class="skill-fill" style="width:0%"></div></div>`;
        grid.appendChild(card);
        requestAnimationFrame(() => { card.querySelector(".skill-fill").style.width = s.level + "%"; });
      });
  }

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    filters.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("filter-chip-active"));
    btn.classList.add("filter-chip-active");
    render(btn.dataset.filter);
  });

  render("All");
})();

/* ------------------------------ Projects render + filter + modal ------------------------------ */
(function projects() {
  const grid = document.getElementById("projectsGrid");
  const filters = document.getElementById("projectFilters");
  const backdrop = document.getElementById("modalBackdrop");
  const content = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalClose");

  function render(filter) {
    grid.innerHTML = "";
    CONFIG.projects
      .filter((p) => filter === "All" || p.category === filter)
      .forEach((p) => {
        const card = document.createElement("div");
        card.className = "glass-card project-card";
        card.innerHTML = `
          <div class="project-thumb">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <div class="project-body">
            <span class="project-tag">${p.category}</span>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-tech">${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
          </div>`;
        card.addEventListener("click", () => openModal(p));
        grid.appendChild(card);
      });
  }

  function openModal(p) {
    content.innerHTML = `
      <span class="project-tag">${p.category}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tech">${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
      <div class="modal-actions">
        <a class="btn btn-primary" href="${p.demo}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Live Demo</a>
        <a class="btn btn-outline" href="${p.github}"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.38-2.02 1.01-2.74-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.72 1.05a9.2 9.2 0 015 0c1.89-1.32 2.72-1.05 2.72-1.05.54 1.41.2 2.45.1 2.71.63.72 1.01 1.63 1.01 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.5A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg> Source</a>
      </div>`;
    backdrop.classList.add("open");
  }

  closeBtn.addEventListener("click", () => backdrop.classList.remove("open"));
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) backdrop.classList.remove("open"); });

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    filters.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("filter-chip-active"));
    btn.classList.add("filter-chip-active");
    render(btn.dataset.filter);
  });

  render("All");
})();

/* ------------------------------ Timeline render ------------------------------ */
(function timeline() {
  const el = document.getElementById("timeline");
  CONFIG.experience.forEach((e) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-dot">${e.type === "education" ? gradIcon : briefcaseIcon}</div>
      <div class="glass-card timeline-card">
        <div class="timeline-top"><h3>${e.role}</h3><span class="timeline-duration">${e.duration}</span></div>
        <p class="timeline-company">${e.company}</p>
        <ul class="timeline-points">${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      </div>`;
    el.appendChild(item);
  });
})();

/* ------------------------------ Testimonials carousel ------------------------------ */
(function testimonials() {
  const quoteEl = document.getElementById("testimonialQuote");
  const nameEl = document.getElementById("testimonialName");
  const roleEl = document.getElementById("testimonialRole");
  const dotsEl = document.getElementById("testimonialDots");
  const prevBtn = document.getElementById("testimonialPrev");
  const nextBtn = document.getElementById("testimonialNext");
  let idx = 0;

  CONFIG.testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " dot-active" : "");
    dot.addEventListener("click", () => { idx = i; render(); });
    dotsEl.appendChild(dot);
  });

  function render() {
    const t = CONFIG.testimonials[idx];
    quoteEl.textContent = `“${t.quote}”`;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    dotsEl.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("dot-active", i === idx));
  }

  prevBtn.addEventListener("click", () => { idx = (idx - 1 + CONFIG.testimonials.length) % CONFIG.testimonials.length; render(); });
  nextBtn.addEventListener("click", () => { idx = (idx + 1) % CONFIG.testimonials.length; render(); });

  setInterval(() => { idx = (idx + 1) % CONFIG.testimonials.length; render(); }, 5000);
  render();
})();

/* ------------------------------ Contact form ------------------------------ */
(function contactForm() {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("fieldName");
  const emailInput = document.getElementById("fieldEmail");
  const messageInput = document.getElementById("fieldMessage");
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorMessage = document.getElementById("errorMessage");
  const submitBtn = document.getElementById("submitBtn");
  const submitLabel = document.getElementById("submitLabel");
  const success = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    errorName.textContent = ""; errorEmail.textContent = ""; errorMessage.textContent = "";

    if (!nameInput.value.trim()) { errorName.textContent = "Name is required"; valid = false; }
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) { errorEmail.textContent = "Enter a valid email"; valid = false; }
    if (messageInput.value.trim().length < 10) { errorMessage.textContent = "Message should be at least 10 characters"; valid = false; }

    if (!valid) return;

    submitBtn.disabled = true;
    submitLabel.textContent = "Sending...";
    success.style.display = "none";

    // TODO: replace this timeout with a real send — e.g. EmailJS.send(...) or fetch('/api/contact', ...)
    setTimeout(() => {
      submitLabel.textContent = "Sent ✓";
      success.style.display = "block";
      submitBtn.disabled = false;
      form.reset();
    }, 1200);
  });
})();

/* ------------------------------ Footer year ------------------------------ */
document.getElementById("footerCopy").textContent = `© ${new Date().getFullYear()} Aarav Sharma. Built with intention.`;

/* ------------------------------ Scroll reveal for sections ------------------------------ */
(function scrollReveal() {
  document.querySelectorAll(".section").forEach((s) => s.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
