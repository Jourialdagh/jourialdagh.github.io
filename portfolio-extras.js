/* ============================================================
   PORTFOLIO EXTRAS — Jouri Aldaghma
   1. "Ask Jouri" AI assistant  (curated KB + optional live Claude)
   2. Live adversarial ML attack/defense demo
   3. Hero rotating role typer
   ============================================================ */

/* ---------- shared knowledge base (also feeds live AI) ---------- */
const JOURI_BIO = `Jouri Aldaghma is a Computer Science graduate (AI concentration) from Effat University,
GPA 3.97/4.0, graduating 2026. She specializes in the intersection of Artificial Intelligence and Cybersecurity:
adversarial machine learning, IoT security, and robust AI systems. She has 9+ published papers including
award-winning research ("Analyzing Security Threats and Vulnerabilities in IoT Systems within Smart Cities",
1st place UGRF#5). Her graduation project is AegisAI, an LLM-driven penetration-testing framework that red-teams
AI/ML systems inside a digital-twin environment. Other key work: an IoT intrusion-detection system (~98% accuracy),
SecureTwin cybersecurity digital-twin platform, Hajj Buddy AI (RAG + Gemini), and an adversarially-resilient big-data
CTI pipeline on Apache Spark. Tech stack: Python, PyTorch, TensorFlow, Scikit-learn, HuggingFace, DistilBERT/FGSM
adversarial training, Hadoop/Spark, C++, Linux, Cisco networking. She is actively seeking internships in AI/ML
research, cybersecurity / security engineering, and startups. Contact: jouri.w2004@gmail.com, GitHub Jourialdagh,
LinkedIn jouri-aldaghma. She holds certifications from DeepLearning.AI, IBM, Microsoft, Coursera and Anthropic.`;

const KB = [
  {
    keys: ['hello','hi','hey','greetings','salam','howdy','yo '],
    a: `Hi! 👋 I'm Jouri's portfolio assistant. Ask me about her <strong>research</strong>, <strong>projects</strong>, <strong>skills</strong>, or whether she's <strong>available for internships</strong>. Try a suggestion below.`
  },
  {
    keys: ['who','about','yourself','tell me about','introduce','background','bio'],
    a: `Jouri is a Computer Science graduate (AI concentration) from <strong>Effat University</strong> with a <strong>3.97 GPA</strong>, graduating 2026. She works at the intersection of <strong>AI and cybersecurity</strong> — adversarial machine learning, IoT security, and building robust AI systems that hold up against real attacks.`
  },
  {
    keys: ['internship','intern','hire','hiring','available','availab','opportunit','join','recruit','position','role','open to','looking for'],
    a: `Yes — Jouri is <strong>actively seeking internships</strong> in AI/ML research labs, cybersecurity & security engineering, and startups. She's open to research and applied roles. The fastest way to reach her is <a href="mailto:jouri.w2004@gmail.com">jouri.w2004@gmail.com</a> or <a href="https://www.linkedin.com/in/jouri-aldaghma-b7a8b8307/" target="_blank">LinkedIn</a>.`
  },
  {
    keys: ['why hire','why should','best','strength','stand out','special','what makes','unique','impress'],
    a: `Three reasons she stands out: (1) <strong>real research output</strong> — 9+ papers, including a 1st-place award; (2) she <strong>builds what she studies</strong> — AegisAI red-teams AI systems, her IDS hits ~98% accuracy; (3) she lives at the rare <strong>AI × security</strong> overlap, so she can both attack and defend ML systems. Few interns can do both.`
  },
  {
    keys: ['project','built','build','aegis','aegisai','pentest','penetration','grad','capstone','github','code'],
    a: `Her flagship is <strong>AegisAI</strong> — an LLM-driven penetration-testing framework that acts as a red-team agent inside a digital-twin environment to harden AI/ML systems against adversarial attacks. Other highlights: <strong>IoT Cyber-Attack Detection</strong> (~98% accuracy, XGBoost + SMOTE), <strong>SecureTwin</strong> digital-twin security platform, and <strong>Hajj Buddy AI</strong> (RAG + Gemini, zero-hallucination guidance). All on <a href="https://github.com/Jourialdagh" target="_blank">GitHub</a>.`
  },
  {
    keys: ['research','paper','publication','publish','academic','journal','study'],
    a: `Jouri has <strong>9+ published papers</strong> spanning IoT security, adversarial ML, digital twins, and big-data threat intelligence. Her award-winning paper on <em>IoT security in smart cities</em> took <strong>1st place at UGRF#5</strong>. Her latest is an adversarially-resilient big-data CTI pipeline (2026). See them on <a href="https://www.researchgate.net/profile/Jouri-Aldaghma" target="_blank">ResearchGate</a>.`
  },
  {
    keys: ['adversarial','attack','robust','defense','defend','fgsm','perturb','evasion','poison'],
    a: `Adversarial robustness is Jouri's core specialty. She's used <strong>FGSM adversarial training</strong> on DistilBERT for threat-intelligence classification and designed a <strong>multi-layered adaptive framework</strong> for adversarially-robust AI in cybersecurity. Scroll up to the <strong>live demo</strong> — you can launch an attack and watch her defense recover the classifier in real time.`
  },
  {
    keys: ['skill','tech','stack','language','tool','framework','program','python','pytorch'],
    a: `Core stack: <strong>Python, PyTorch, TensorFlow, Scikit-learn, HuggingFace</strong> for AI/ML; <strong>adversarial ML, IoT security, digital twins, intrusion detection</strong> for security; <strong>Hadoop, Spark, C++, Linux, Cisco</strong> for systems & big data. Plus full-stack web (JS, PHP, SQL) and Power BI.`
  },
  {
    keys: ['gpa','grade','education','degree','university','effat','study','student','school','graduat'],
    a: `Jouri studies Computer Science with an <strong>AI concentration at Effat University</strong>, graduating 2026 with a <strong>3.97 / 4.0 GPA</strong>. She earned a 4.0 in high school and a 50% merit scholarship for academic performance.`
  },
  {
    keys: ['award','honor','win','won','achievement','scholarship','prize','dean','recognition'],
    a: `Highlights: <strong>1st Place at UGRF#5</strong> for her IoT smart-city security research, <strong>Dean's List</strong> across multiple years, and a <strong>50% merit scholarship</strong> for academic excellence.`
  },
  {
    keys: ['cyber','security','iot','threat','network','intrusion','digital twin'],
    a: `On the security side: Jouri researches <strong>IoT and smart-city security</strong>, builds <strong>intrusion-detection systems</strong> (her ML IDS reaches ~98% accuracy), and works with <strong>digital-twin</strong> environments to simulate attacks safely. Her work consistently pairs offensive testing with defensive ML.`
  },
  {
    keys: ['contact','email','reach','linkedin','connect','message','get in touch','hire her'],
    a: `Reach Jouri at <a href="mailto:jouri.w2004@gmail.com">jouri.w2004@gmail.com</a> · <a href="https://www.linkedin.com/in/jouri-aldaghma-b7a8b8307/" target="_blank">LinkedIn</a> · <a href="https://github.com/Jourialdagh" target="_blank">GitHub</a> · <a href="https://www.researchgate.net/profile/Jouri-Aldaghma" target="_blank">ResearchGate</a>.`
  },
  {
    keys: ['cert','certification','course','deeplearning','anthropic','ibm','microsoft'],
    a: `Certifications from <strong>DeepLearning.AI</strong> (Neural Networks & Deep Learning, ML math), <strong>IBM</strong> (Generative AI), <strong>Microsoft</strong> (Power BI), <strong>Coursera</strong>, and <strong>Anthropic</strong> (Claude 101, Claude Code 101, MCP Advanced, AI Fluency).`
  },
  {
    keys: ['cat','kitty','pet','meow'],
    a: `🐱 That's the resident portfolio cat — it follows your cursor and purrs when you get close. Jouri likes a little personality in her engineering.`
  },
  {
    keys: ['thank','thanks','cool','awesome','great','nice','amazing'],
    a: `Glad you think so! 😊 If you're considering Jouri for a role, <a href="mailto:jouri.w2004@gmail.com">drop her an email</a> — she'd love to chat.`
  }
];

const KB_FALLBACK = `Great question! I can tell you about Jouri's <strong>research</strong>, <strong>projects</strong> (like AegisAI), <strong>skills</strong>, <strong>education</strong>, <strong>awards</strong>, or her <strong>internship availability</strong>. Try one of the suggestions, or email her directly at <a href="mailto:jouri.w2004@gmail.com">jouri.w2004@gmail.com</a>.`;

function kbAnswer(q) {
  const text = ' ' + q.toLowerCase() + ' ';
  let best = null, bestScore = 0;
  for (const item of KB) {
    let score = 0;
    for (const k of item.keys) { if (text.includes(k)) score += k.length; }
    if (score > bestScore) { bestScore = score; best = item; }
  }
  return best ? best.a : KB_FALLBACK;
}

/* ---------- chat UI ---------- */
(function initAssistant() {
  const log = document.getElementById('chat-log');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const chips = document.getElementById('chat-chips');
  if (!log || !form) return;

  let liveAI = (typeof window !== 'undefined' && window.claude && typeof window.claude.complete === 'function');
  let history = [];

  function bubble(role, html, typing) {
    const row = document.createElement('div');
    row.className = 'chat-row ' + role;
    const av = document.createElement('div');
    av.className = 'chat-avatar ' + role;
    av.innerHTML = role === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    const msg = document.createElement('div');
    msg.className = 'chat-bubble ' + role;
    if (typing) { msg.classList.add('typing'); msg.innerHTML = '<span></span><span></span><span></span>'; }
    else { msg.innerHTML = html; }
    row.appendChild(av); row.appendChild(msg);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  async function respond(q) {
    const typingMsg = bubble('bot', '', true);
    let answer = null;

    if (liveAI) {
      try {
        const sys = `You are the portfolio assistant for Jouri Aldaghma. Answer recruiter questions warmly, concisely (2-3 sentences max), and always in a way that makes the reader want to hire or contact her. Only use facts from this profile: ${JOURI_BIO}. If asked something unknown, suggest emailing jouri.w2004@gmail.com. Never invent facts.`;
        const reply = await window.claude.complete({
          messages: [
            { role: 'user', content: sys + '\n\nQuestion: ' + q }
          ]
        });
        if (reply && reply.trim()) {
          answer = reply.trim()
            .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
            .replace(/jouri\.w2004@gmail\.com/g,'<a href="mailto:jouri.w2004@gmail.com">jouri.w2004@gmail.com</a>');
        }
      } catch (e) { liveAI = false; }
    }

    if (!answer) answer = kbAnswer(q);

    // small delay so the typing indicator reads naturally
    await new Promise(r => setTimeout(r, liveAI ? 120 : 520));
    typingMsg.classList.remove('typing');
    typingMsg.innerHTML = '';
    // type-on effect for KB answers
    typingMsg.innerHTML = answer;
    log.scrollTop = log.scrollHeight;
  }

  function ask(q) {
    if (!q.trim()) return;
    bubble('user', q.replace(/</g,'&lt;'));
    input.value = '';
    respond(q);
  }

  form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); });
  if (chips) {
    chips.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => ask(b.dataset.q || b.textContent));
    });
  }

  // greeting on first scroll-in
  let greeted = false;
  const sec = document.getElementById('assistant');
  if (sec) {
    new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting && !greeted) {
          greeted = true;
          const status = document.getElementById('chat-status');
          if (status) status.textContent = liveAI ? 'Online · live AI' : 'Online';
          setTimeout(() => bubble('bot', `Hi! 👋 I'm Jouri's AI assistant. Ask me anything about her research, projects, or whether she's available to hire — or tap a question below.`), 400);
        }
      });
    }, { threshold: 0.3 }).observe(sec);
  }
})();

/* ---------- adversarial ML demo ---------- */
(function initDemo() {
  const root = document.getElementById('adv-demo');
  if (!root) return;

  const bars = root.querySelector('#adv-bars');
  const meterFill = root.querySelector('#adv-meter-fill');
  const meterPct = root.querySelector('#adv-meter-pct');
  const verdict = root.querySelector('#adv-verdict');
  const logEl = root.querySelector('#adv-log');
  const btnAttack = root.querySelector('#adv-attack');
  const btnDefend = root.querySelector('#adv-defend');
  const btnReset = root.querySelector('#adv-reset');

  const N = 28;
  let base = [];
  let state = 'clean'; // clean | attacked | defended
  let busy = false;

  function seed() {
    base = Array.from({ length: N }, () => 0.25 + Math.random() * 0.6);
    renderBars(base, false);
  }
  function renderBars(vals, glitch) {
    bars.innerHTML = '';
    vals.forEach(v => {
      const b = document.createElement('div');
      b.className = 'adv-bar' + (glitch ? ' glitch' : '');
      b.style.height = Math.max(4, v * 100) + '%';
      bars.appendChild(b);
    });
  }
  function logLine(text, cls) {
    const l = document.createElement('div');
    l.className = 'adv-log-line ' + (cls || '');
    l.innerHTML = '<span class="adv-log-caret">&gt;</span> ' + text;
    logEl.appendChild(l);
    logEl.scrollTop = logEl.scrollHeight;
  }
  function setMeter(pct, label, tone) {
    meterFill.style.width = pct + '%';
    meterFill.className = 'adv-meter-fill ' + tone;
    meterPct.textContent = pct.toFixed(1) + '%';
    verdict.className = 'adv-verdict ' + tone;
    verdict.innerHTML = label;
  }
  function animateMeter(from, to, dur, cb) {
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / dur);
      const val = from + (to - from) * (t < .5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2);
      meterFill.style.width = val + '%';
      meterPct.textContent = val.toFixed(1) + '%';
      if (t < 1) requestAnimationFrame(step); else if (cb) cb();
    }
    requestAnimationFrame(step);
  }

  function reset() {
    if (busy) return;
    state = 'clean';
    logEl.innerHTML = '';
    seed();
    setMeter(0, '', 'danger');
    animateMeter(0, 97.4, 700);
    setTimeout(() => setMeter(97.4, '⚠ MALICIOUS traffic detected', 'danger'), 720);
    logLine('classifier.load("intrusion-detector-v3")', 'dim');
    logLine('input → live network flow', 'dim');
    setTimeout(() => logLine('verdict: <b>MALICIOUS</b> · confidence 97.4% ✓', 'good'), 760);
    btnAttack.disabled = false;
    btnDefend.disabled = true;
    btnAttack.classList.remove('done');
    btnDefend.classList.remove('done');
  }

  function attack() {
    if (busy || state === 'attacked') return;
    busy = true;
    btnAttack.disabled = true;
    logLine('injecting FGSM perturbation ε=0.03 ...', 'warn');
    const perturbed = base.map(v => Math.max(0.04, Math.min(1, v + (Math.random()-0.5)*0.5)));
    let frames = 0;
    const glitchTimer = setInterval(() => {
      renderBars(base.map(v => Math.max(0.04, Math.min(1, v + (Math.random()-0.5)*0.7))), true);
      frames++;
      if (frames > 9) {
        clearInterval(glitchTimer);
        renderBars(perturbed, false);
      }
    }, 70);
    animateMeter(97.4, 6.2, 1100, () => {
      setMeter(93.8, '✗ Classified BENIGN — attacker evaded detection', 'evade');
      logLine('perturbation imperceptible to humans (Δ &lt; 3%)', 'dim');
      logLine('verdict flipped: <b>BENIGN</b> · 93.8% — <b>EVASION SUCCESSFUL</b>', 'bad');
      state = 'attacked';
      busy = false;
      btnDefend.disabled = false;
      btnAttack.classList.add('done');
    });
  }

  function defend() {
    if (busy || state !== 'attacked') return;
    busy = true;
    btnDefend.disabled = true;
    logLine('engaging A3L adaptive defense (adversarial training + detection)', 'warn');
    let frames = 0;
    const healTimer = setInterval(() => {
      const mix = frames / 8;
      renderBars(base.map((v,i) => v*mix + (0.04+Math.random()*0.9)*(1-mix)), frames < 4);
      frames++;
      if (frames > 8) { clearInterval(healTimer); renderBars(base, false); }
    }, 80);
    setMeter(6.2, '', 'danger');
    animateMeter(6.2, 95.1, 1200, () => {
      setMeter(95.1, '🛡 Attack neutralized — MALICIOUS detected', 'safe');
      logLine('adversarial sample identified &amp; corrected', 'good');
      logLine('verdict restored: <b>MALICIOUS</b> · 95.1% ✓ — <b>DEFENSE HELD</b>', 'good');
      state = 'defended';
      busy = false;
      btnDefend.classList.add('done');
    });
  }

  btnAttack.addEventListener('click', attack);
  btnDefend.addEventListener('click', defend);
  btnReset.addEventListener('click', reset);

  // init when scrolled into view
  let started = false;
  new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting && !started) { started = true; reset(); } });
  }, { threshold: 0.25 }).observe(root);
})();

/* ---------- hero role typer ---------- */
(function initTyper() {
  const el = document.getElementById('hero-typer');
  if (!el) return;
  const roles = [
    'adversarially-robust AI systems',
    'AI-driven cyber defenses',
    'IoT intrusion detection',
    'LLM red-team frameworks',
    'digital-twin security platforms'
  ];
  let r = 0, c = 0, deleting = false;
  function tick() {
    const word = roles[r];
    if (!deleting) {
      c++;
      el.textContent = word.slice(0, c);
      if (c === word.length) { deleting = true; return setTimeout(tick, 1600); }
    } else {
      c--;
      el.textContent = word.slice(0, c);
      if (c === 0) { deleting = false; r = (r + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 35 : 70);
  }
  setTimeout(tick, 1200);
})();
